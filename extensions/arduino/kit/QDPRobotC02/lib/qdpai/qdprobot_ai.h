#include <HTTPClient.h>
#include "esp_camera.h"
#include <WiFi.h>
#include <SD_MMC.h>
#include <SD.h>

#define PWDN_GPIO_NUM -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM 4
#define SIOD_GPIO_NUM 18
#define SIOC_GPIO_NUM 23

#define Y9_GPIO_NUM 36
#define Y8_GPIO_NUM 37
#define Y7_GPIO_NUM 38
#define Y6_GPIO_NUM 39
#define Y5_GPIO_NUM 35
#define Y4_GPIO_NUM 26
#define Y3_GPIO_NUM 13
#define Y2_GPIO_NUM 34
#define VSYNC_GPIO_NUM 5
#define HREF_GPIO_NUM 27
#define PCLK_GPIO_NUM 25

//String AIaddress = "peien.xyz";
String AIaddress = "ai.qdprobot.com";

String onenet_token;
String faceplusplus_api_key;
String faceplusplus_api_secret;
String baidu_token;
String post_url;

void cameraInit(int mode) {
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000;
  config.pixel_format = PIXFORMAT_JPEG;
  // if (mode) {
  // config.frame_size = FRAMESIZE_QVGA; //FRAMESIZE_QVGA 320x240  FRAMESIZE_VGA 640x480
  // } else {
  // config.frame_size = FRAMESIZE_VGA; //FRAMESIZE_QVGA 320x240  FRAMESIZE_VGA 640x480
  // }

  switch (mode) {
   case 0:
    config.frame_size = FRAMESIZE_VGA;
    break;
   case 1:
    config.frame_size = FRAMESIZE_QVGA;
    break;
   case 2:
    config.frame_size = FRAMESIZE_SVGA;
    break;
  }

  config.jpeg_quality = 10; //值越小画面质量越高
  config.fb_count = 1;

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
}

String aidata;
String aitoken;
String aiurl;
String qdp_token;
String qdpmode;

static esp_err_t artificial_intelligence()
{
  //初始化相机并拍照
  Serial.println("Taking picture...");
  camera_fb_t * fb = NULL;
  fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Camera capture failed");
    return ESP_FAIL;
  }
  HTTPClient http;
  //设置请求url
  http.begin(post_url);

  //设置请求头部信息
  http.addHeader("Content-Type", "image/jpg");

  //发起请求，并获取状态码
  int httpResponseCode = http.POST((uint8_t *)fb->buf, fb->len);

  if (httpResponseCode == 200) {
    //获取post请求后的服务器响应信息，json格式
    String response = http.getString();  //Get the response to the request
    Serial.print("Response Msg:");
    Serial.println(response);           // 打印服务器返回的信息
    aidata = response;
    aidata = String(aidata).substring(3,String(aidata).length());
  } else {
    //错误请求
    Serial.print("Error on sending POST: ");
    Serial.println(httpResponseCode);
  }

  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
  //清空数据
  esp_camera_fb_return(fb);
  //回收下次再用
  http.end();
}

String onenet_aicam_ai(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  if (String(mode).equals(String("V2"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/onenet/"+mode+".php?url=null&qdp_token="+qdp_token+"&url="+data+"&token="+onenet_token;
  } else if (String(mode).equals(String("V10"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/onenet/"+mode+".php?url=null&qdp_token="+qdp_token+"&param="+data+",0.6"+"&token="+onenet_token;
  } else {
    url = "http://"+AIaddress+"/qdpcam/ai/onenet/"+mode+".php?url=null&qdp_token="+qdp_token+"&token="+onenet_token;
  }
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String faceplusplus_aicam_ai(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  if (String(mode).equals(String("V5"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/faceplusplus/"+mode+".php?url=null&qdp_token="+qdp_token+"&api_key="+faceplusplus_api_key+"&api_secret="+faceplusplus_api_secret+"&template_id="+data;
  } else {
    url = "http://"+AIaddress+"/qdpcam/ai/faceplusplus/"+mode+".php?url=null&qdp_token="+qdp_token+"&api_key="+faceplusplus_api_key+"&api_secret="+faceplusplus_api_secret;
  }
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String baidu_aicam_ai(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  if (String(mode).equals(String("V9"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/baidu/"+mode+".php?url=null&qdp_token="+qdp_token+"&token="+baidu_token+"&url="+data;
  } else if (String(mode).equals(String("V10"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/baidu/"+mode+".php?url=null&qdp_token="+qdp_token+"&token="+baidu_token+"&url="+data;
  } else {
    url = "http://"+AIaddress+"/qdpcam/ai/baidu/"+mode+".php?url=null&qdp_token="+qdp_token+"&access_token="+baidu_token;
  }
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String free_aicam_ai(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  url = "http://"+AIaddress+"/qdpcam/ai/free/"+mode+".php?url=null&qdp_token="+qdp_token;
  if (String(mode).equals(String("V3"))) {
  url = "http://"+AIaddress+"/qdpcam/ai/free/"+mode+".php?qdp_token="+qdp_token;
  }  
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String tenxun_aicam_ai(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  if (String(mode).equals(String("V2"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/tenxun/"+mode+".php?url=null&qdp_token="+qdp_token+"&age="+data;
  } else if (String(mode).equals(String("V3"))) {
    url = "http://"+AIaddress+"/qdpcam/ai/tenxun/"+mode+".php?url=null&qdp_token="+qdp_token+"&gender="+data;
  } else {
    url = "http://"+AIaddress+"/qdpcam/ai/tenxun/"+mode+".php?url=null&qdp_token="+qdp_token;
  }
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String get_external_links(String mode, String data) {
  qdp_token = WiFi.macAddress();
  String url = "";
  url = "http://"+AIaddress+"/qdpcam/ai/free/"+mode+".php?qdp_token="+qdp_token;
  aidata = "null";
  post_url = url;
  artificial_intelligence();
  return aidata;
}

String Photograph(String path) {
  camera_fb_t * fb = NULL;
  fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Camera capture failed");
  }
  fs::FS &fs = SD;
  Serial.printf("Picture file name: %sn", path.c_str());
  File file = fs.open(path.c_str(), FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file in writing mode");
  }
  else {
    file.write(fb->buf, fb->len);
    Serial.printf("Saved file to path: %sn", path.c_str());
  }
  file.close();
}

String Read_SD_card(const char * path) { //读取SD卡指定路径文件
  File file = SD.open(path);
  if (!file) {
    Serial.println("Failed to open file for reading");
  }
  String data = "";
  while (file.available()) {
    data = String(data) + String(char(file.read()));
  }
  file.close();
  return data;
}

// String Write_SD_card(const char * path,String data) { //SD卡写入数据
//   File file = SD.open(path, FILE_WRITE);
//   if(file){
//     file.print(data);
//     file.println("");
//     file.close();
//   }
// }

// String Write_SD_card(const char * path,String data) { //SD卡追加数据
//   File file = SD.open(path, FILE_APPEND);
//   if(file){
//     file.print(data);
//     file.println("");
//     file.close();
//   }
// }

String Write_SD_card(const char * path,String data,bool mode,bool lnmode) { //SD卡文件写
  if (mode) {
  File file = SD.open(path, FILE_WRITE);
  if(file){
  file.print(data);
  if (lnmode) {
  file.println("");
  }
    file.close();
  }  
  } else {
  File file = SD.open(path, FILE_APPEND);
  if(file){
  file.print(data);
  if (lnmode) {
  file.println("");
  }
    file.close();
  }  
  }  
}