#include <HTTPClient.h>
#include <WiFi.h>
#include <SD_MMC.h>
#include <SD.h>
#include <SPI.h>
#include <qdprobot_sd_audio.h>

#include <MD5_String.h>

String md5_sign;
String voice_key;
String Baidu_voice_key;

boolean Synthesis_starts = false;
boolean play_status = false;
String tts_data;
String tts_per = "5118";

void Speech_synthesis(String txt) {
  Serial.println(txt);
  HTTPClient http;

  Serial.print("[HTTP] begin...\n");
  http.begin("http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=PEIEN&tok=" + Baidu_voice_key + "&tex=" + txt + "vol=9&per=" + tts_per + "&spd=5&pit=5&aue=3");
  Serial.print("[HTTP] GET...\n");
  int httpCode = http.GET();

  Serial.printf("[HTTP] GET... code: %d\n", httpCode);
  delay(0);
  if (httpCode <= 0) {
    Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  } else {
    if (httpCode != HTTP_CODE_OK) {
      Serial.printf("[HTTP] Not OK!\n");
    } else {
      int len = http.getSize();
      Serial.printf("[HTTP] size: %d\n", len);

      if (len <= 0) {
        Serial.printf("[HTTP] Unknow content size: %d\n", len);
      } else {
        uint8_t buff[len] = { 0 };

        WiFiClient * stream = http.getStreamPtr();

        uint8_t* p = buff;
        int l = len;
        while (http.connected() && (l > 0 || len == -1)) {
          // get available data size
          size_t size = stream->available();

          if (size) {
            int s = ((size > sizeof(buff)) ? sizeof(buff) : size);
            int c = stream->readBytes(p, s);
            p += c;

            Serial.printf("[HTTP] read: %d\n", c);
            delay(0);

            if (l > 0) {
              l -= c;
            }
          }
          delay(0);
        }

        Serial.println();
        Serial.print("[HTTP] connection closed.\n");

        String path = "/test.mp3";
        fs::FS &fs = SD;
        Serial.printf("Picture file name: %sn", "/test.mp3");
        File file = fs.open(path.c_str(), FILE_WRITE);
        if (!file) {
          Serial.println("Failed to open file in writing mode");
        }
        else {
          file.write(buff, len);
          Serial.printf("Saved file to path: %sn", path.c_str());
        }
        file.close();
        play_status = true;
      }
    }
  }
  http.end();
}

void Speech( void * pvParameters ) {
  for (;;) {
    //    if (Serial.available() > 0) {
    //      String data = "";
    //      while (Serial.available() > 0) {
    //        data = String(data) + String(char(Serial.read()));
    //        delay(2);
    //      }
    //      Speech_synthesis(data);
    //    }

    if (Synthesis_starts) {
      Speech_synthesis(tts_data);
      Synthesis_starts = false;
    }
    vTaskDelay(10);
  }
}

void qdp_speech_synthesis_initialization(String key) {
  md5_sign = WiFi.macAddress();
  char MD5 [100];
  String(md5_sign).toCharArray(MD5, sizeof(MD5));
  md5_sign = md5_string(MD5);
  md5_sign = String(md5_sign).substring(26, 32);
  md5_sign.toUpperCase();
  voice_key = key;
  qdprobot_sd_audio_setup();
  xTaskCreatePinnedToCore(Speech, "Speech", 110000, NULL, 2, NULL, 0);
}

void qdp_tts(String ttsdata) {
  if (String(md5_sign).equals(String(voice_key))) {
    tts_data = ttsdata;
    Synthesis_starts = true;
    play_status = false;
    while (!play_status) {
      delay(10);
    }
    play_MP3("/test.mp3");
    delay(0);
  } else {
    Serial.println("qdp_token invalid!");
  }
}
