#include <WiFi.h>
#include <driver/i2s.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

#include <MD5_String.h>

#define CONFIG_I2S_BCK_PIN -1
#define CONFIG_I2S_DATA_PIN -1

#define SPEAK_I2S_NUMBER I2S_NUM_0

#define MODE_MIC 0
#define MODE_SPK 1

#define DATA_SIZE 1024

String md5_sign;
String voice_key;
String Speech_Recognition;
String Baidu_voice_key;

boolean recording_status = true;

bool InitI2SSpeakOrMic(int mode)
{
  esp_err_t err = ESP_OK;

  i2s_driver_uninstall(SPEAK_I2S_NUMBER);
  i2s_config_t i2s_config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT, // is fixed at 12bit, stereo, MSB
    .channel_format = I2S_CHANNEL_FMT_ALL_RIGHT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 6,
    .dma_buf_len = 60,
  };
  if (mode == MODE_MIC)
  {
    i2s_config.mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX | I2S_MODE_PDM);
  }
  else
  {
    i2s_config.mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX);
    i2s_config.use_apll = false;
    i2s_config.tx_desc_auto_clear = true;
  }

  Serial.println("Init i2s_driver_install");

  err += i2s_driver_install(SPEAK_I2S_NUMBER, &i2s_config, 0, NULL);
  i2s_pin_config_t tx_pin_config;

  tx_pin_config.bck_io_num = CONFIG_I2S_BCK_PIN;
  tx_pin_config.ws_io_num = CONFIG_I2S_LRCK_PIN;
  tx_pin_config.data_out_num = CONFIG_I2S_DATA_PIN;
  tx_pin_config.data_in_num = CONFIG_I2S_DATA_IN_PIN;

  Serial.println("Init i2s_set_pin");
  err += i2s_set_pin(SPEAK_I2S_NUMBER, &tx_pin_config);
  Serial.println("Init i2s_set_clk");
  err += i2s_set_clk(SPEAK_I2S_NUMBER, 8000, I2S_BITS_PER_SAMPLE_16BIT, I2S_CHANNEL_MONO);

  return true;
}

uint8_t microphonedata0[1024 * 80];
size_t byte_read = 0;
int16_t *buffptr;
uint32_t data_offset = 0;

String Pcm2String(uint8_t* pcm_buff, uint32_t pcm_lan)
{
  String apiurl = "http://vop.baidu.com/server_api?dev_pid=1537&cuid=PEIEN&token=" + Baidu_voice_key;  //百度语音识别
  HTTPClient resthttp;
  uint64_t time = micros();
  resthttp.begin(apiurl);
  resthttp.addHeader("Content-Type", "audio/pcm;rate=8000");
  resthttp.POST((uint8_t*)pcm_buff, pcm_lan);
  Serial.printf("Time %dms\r\n", (micros() - time ) / 1000);
  String response = resthttp.getString();
  Serial.println(response);

  StaticJsonDocument<256> doc;  //百度解析
  DeserializationError error = deserializeJson(doc, response);
  const char* corpus_no = doc["corpus_no"]; // "6990776217276603194"
  const char* err_msg = doc["err_msg"]; // "success."
  int err_no = doc["err_no"]; // 0
  const char* result_0 = doc["result"][0]; // "北京的天气。"
  const char* sn = doc["sn"]; // "897929438551627666925"
  return result_0;
}

void voice_initialization(String key) {
  InitI2SSpeakOrMic(MODE_SPK);
  size_t bytes_written;
  pinMode(33, INPUT_PULLUP);
  md5_sign = WiFi.macAddress();
  char MD5 [100];
  String(md5_sign).toCharArray(MD5, sizeof(MD5));
  md5_sign = md5_string(MD5);
  md5_sign = String(md5_sign).substring(26, 32);
  md5_sign.toUpperCase();
  voice_key = key;
}

String qdp_Speech_Recognition() {
  if (String(md5_sign).equals(String(voice_key))) {
    recording_status = true;
    Serial.println("start");
    data_offset = 0;
    InitI2SSpeakOrMic(MODE_MIC);
    while (1)
    {
      i2s_read(SPEAK_I2S_NUMBER, (char *)(microphonedata0 + data_offset), DATA_SIZE, &byte_read, (100 / portTICK_RATE_MS));
      data_offset += 1024;
      if (!recording_status || data_offset >= 81919)
        break;
    }
    recording_status = false;
    Serial.println("end");
    Speech_Recognition = Pcm2String(microphonedata0, data_offset);
  } else {
    Speech_Recognition = "qdp_token invalid!";
    delay(1000);
  }
  return Speech_Recognition;
}