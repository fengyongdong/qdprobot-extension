/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
  //网络微数据库初始化
  Blockly.Arduino.QDP_network_microdatabase_initialization = function() {
      var ssid= Blockly.Arduino.valueToCode(this, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
      var pass= Blockly.Arduino.valueToCode(this, 'pass', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_["include_HTTPClient"] = '#if defined(ESP32)\n#include <HTTPClient.h>\n#elif defined(ESP8266)\n#include <ESP8266HTTPClient.h>\n#endif\n';
      Blockly.Arduino.definitions_["include_ESPHTTPClient"] = 'String Nutzername = '+ ssid +';\nString Passwort = '+ pass +';\n';
      var code='';
      return code;
  };

  Blockly.Arduino.QDP_web_microdatabase_update_tags = function() {
      var tag= Blockly.Arduino.valueToCode(this, 'tag', Blockly.Arduino.ORDER_ATOMIC);
      var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
      var code='if (WiFi.status() == WL_CONNECTED) {\n'
              +'  HTTPClient http;\n'
              +'  http.begin("http://tinywebdb.appinventor.space/api?user="+Nutzername+"&secret="+Passwort+"&action=update&tag="+String('+ tag +')+"&value="+String('+ value +'));\n'
              +'  http.addHeader("Content-Type", "application/json");\n'
              +'  int httpCode = http.POST("Message from ESP8266");\n'
              +'  String payload = http.getString();\n'
              +'  Serial.println(payload);\n'
              +'  http.end();\n'
              +'} else {\n'
              +'  Serial.println("Invalid response!");\n'
              +'}\n';
      return code;
  };

  Blockly.Arduino.QDP_web_microdatabase_delete_tags = function() {
      var tag= Blockly.Arduino.valueToCode(this, 'tag', Blockly.Arduino.ORDER_ATOMIC);
      var code='if (WiFi.status() == WL_CONNECTED) {\n'
              +'  HTTPClient http;\n'
              +'  http.begin("http://tinywebdb.appinventor.space/api?user="+Nutzername+"&secret="+Passwort+"&action=delete&tag="+String('+ tag +'));\n'
              +'  http.addHeader("Content-Type", "application/json");\n'
              +'  int httpCode = http.POST("Message from ESP8266");\n'
              +'  String payload = http.getString();\n'
              +'  Serial.println(payload);\n'
              +'  http.end();\n'
              +'} else {\n'
              +'  Serial.println("Invalid response!");\n'
              +'}\n';
      return code;
  };

 Blockly.Arduino.QDP_web_microdatabase_get_tags = function() {
    var tag= Blockly.Arduino.valueToCode(this, 'tag', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["include_web_microdatabase_get_tags"] = 'String web_microdatabase_get_tags(String Tag) {\n'
                                                    +'  String payload;\n'        
                                                    +'  if (WiFi.status() == WL_CONNECTED) {\n'
                                                    +'    HTTPClient http;\n'
                                                    +'    http.begin("http://tinywebdb.appinventor.space/api?user="+Nutzername+"&secret="+Passwort+"&action=get&tag=" + String(Tag));\n'
                                                    +'    http.addHeader("Content-Type", "application/json");\n'
                                                    +'    int httpCode = http.POST("Message from ESP8266");\n'
                                                    +'    payload = http.getString();\n'
                                                    +'    Serial.println(payload);\n'
                                                    +'    http.end();\n'
                                                    +'  } else {\n'
                                                    +'    Serial.println("Invalid response!");\n'
                                                    +'  return "";\n'
                                                    +'  }\n'  
                                                    +'  payload.replace(String("{\\"") + String(Tag) + String("\\": \\""), "");\n'
                                                    +'  payload.replace("\\"}", "");\n'                                            
                                                    +'  return payload;\n'
                                                    +'}\n';
    var code='web_microdatabase_get_tags('+ tag +')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.QDP_web_microdatabase_count_tags = function() {
    Blockly.Arduino.definitions_["include_web_microdatabase_count_tags"] = 'String web_microdatabase_count_tags() {\n'
                                                    +'  String payload;\n'    
                                                    +'  if (WiFi.status() == WL_CONNECTED) {\n'
                                                    +'    HTTPClient http;\n'
                                                    +'    http.begin("http://tinywebdb.appinventor.space/api?user="+Nutzername+"&secret="+Passwort+"&action=count");\n'
                                                    +'    http.addHeader("Content-Type", "application/json");\n'
                                                    +'    int httpCode = http.POST("Message from ESP8266");\n'
                                                    +'    payload = http.getString();\n'
                                                    +'    Serial.println(payload);\n'
                                                    +'    http.end();\n'
                                                    +'  } else {\n'
                                                    +'    Serial.println("Invalid response!");\n'
                                                    +'  return "";\n'
                                                    +'  }\n' 
                                                    +'  payload.replace(String("{\\"count\\": \\""), "");\n'
                                                    +'  payload.replace("\\"}", "");\n'                                                      
                                                    +'  return payload;\n'
                                                    +'}\n';
    var code='web_microdatabase_count_tags()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

    return Blockly;
}

exports = addGenerator;
