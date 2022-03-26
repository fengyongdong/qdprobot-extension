/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   //网页编辑初始化
  Blockly.Arduino.QDP_esp32_web_page_init = function() {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    Blockly.Arduino.definitions_['include_AsyncTCP'] = '#if defined(ESP32)\n#include <AsyncTCP.h>\n#elif defined(ESP8266)\n#include <ESPAsyncTCP.h>\n#endif\n';
    Blockly.Arduino.definitions_['include_ESPAsyncWebServer'] = '#include <ESPAsyncWebServer.h>';
    Blockly.Arduino.definitions_['include_QDPweb'] = '#include <QDPweb.h>';
    Blockly.Arduino.definitions_['var_declare_AsyncWebServer'] = 'AsyncWebServer server(80);';
    //Blockly.Arduino.setups_['QDPweb_setup']  = 'QDPweb.init(server);\n'+branch+'\nserver.begin();\n';  
    var code = 'QDPweb.init(server);\n'+branch+'\nserver.begin();\n';
    return code;
   };

  //网页插入元素
  Blockly.Arduino.QDP_esp32_web_page_add = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
    var addType = this.getFieldValue('addType');
    var code = 'QDPweb.add'+addType+'(\"'+addType+id+'\", '+name+');\n';

    return code;
  };

  //网页插入温度元素
  Blockly.Arduino.QDP_esp32_web_page_addTemperatureCard = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
    var type = this.getFieldValue('type');
    var code = 'QDPweb.addTemperatureCard(\"TemperatureCard'+id+'\", '+name+','+type+');\n';

    return code;
  };

  //网页插入滑杆元素
  Blockly.Arduino.QDP_esp32_web_page_addSliderCard = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
    var type = this.getFieldValue('type');
    var code = 'QDPweb.addSliderCard(\"SliderCard'+id+'\", '+name+','+type+');\n';

    return code;
  };

  //网页链接滑杆变化事件
  Blockly.Arduino.QDP_esp32_web_page_attachSliderChanged = function() {
    var code = 'QDPweb.attachSliderChanged(sliderChanged);\n';
    return code;
  };

  //网页滑杆变化事件
  Blockly.Arduino.QDP_esp32_web_page_SliderChanged = function() {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    Blockly.Arduino.definitions_['var_declare_sliderChanged'] = 'void sliderChanged(const char* id, int value){\n'+branch+'\n}';
    var code = '';
    return code;
  };
  //网页滑杆ID
  Blockly.Arduino.QDP_esp32_web_page_Slider_id = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    id = id.replace(/\"/g,'');
    var code = '"SliderCard'+id+'"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

   //网页链接按钮事件
  Blockly.Arduino.QDP_esp32_web_page_attachButtonClick = function() {
    var code = 'QDPweb.attachButtonClick(buttonClicked);\n';
    return code;
  };


  //网页按钮事件
  Blockly.Arduino.QDP_esp32_web_page_ButtonClick = function() {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    Blockly.Arduino.definitions_['var_declare_buttonClicked'] = 'void buttonClicked(const char* id){\n'+branch+'\n}';
    var code = '';
    return code;
   };

  //网页按钮ID
  Blockly.Arduino.QDP_esp32_web_page_Button_id = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    id = id.replace(/\"/g,'');
    var code = '"ButtonCard'+id+'"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  //网页插入折线图元素
  Blockly.Arduino.QDP_esp32_web_page_addLineChart = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
    var x_axis_value = Blockly.Arduino.valueToCode(this, 'x_axis_value', Blockly.Arduino.ORDER_ATOMIC);
    x_axis_value = x_axis_value.replace(/\"/g,'');
    var y_axis_name = Blockly.Arduino.valueToCode(this, 'y_axis_name', Blockly.Arduino.ORDER_ATOMIC);
    var y_axis_value = Blockly.Arduino.valueToCode(this, 'y_axis_value', Blockly.Arduino.ORDER_ATOMIC);
    y_axis_value = y_axis_value.replace(/\"/g,'');
    var type = this.getFieldValue('type');
    var code = 'QDPweb.addLineChart(\"'+id+'\", '+name+', '+x_axis_value+', sizeof('+x_axis_value+')/sizeof('+x_axis_value+'[0]), '+y_axis_name+', '+y_axis_value+', sizeof('+x_axis_value+')/sizeof('+x_axis_value+'[0]));\n';

    return code;
  };

  //网页更新折线图元素
  Blockly.Arduino.QDP_esp32_web_page_updateLineChart = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var x_axis_value = Blockly.Arduino.valueToCode(this, 'x_axis_value', Blockly.Arduino.ORDER_ATOMIC);
    x_axis_value = x_axis_value.replace(/\"/g,'');
    var y_axis_value = Blockly.Arduino.valueToCode(this, 'y_axis_value', Blockly.Arduino.ORDER_ATOMIC);
    y_axis_value = y_axis_value.replace(/\"/g,'');
    var type = this.getFieldValue('type');
    var code = 'QDPweb.updateLineChart(\"'+id+'\", '+x_axis_value+', sizeof('+x_axis_value+')/sizeof('+x_axis_value+'[0]), '+y_axis_value+', sizeof('+x_axis_value+')/sizeof('+x_axis_value+'[0]));\n';

    return code;
  };

  //网页更新元素
  Blockly.Arduino.QDP_esp32_web_page_update = function() {
    var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
    var value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
    value = value.replace(/\"/g,'');
    var updateType = this.getFieldValue('updateType');
    var code = 'QDPweb.update'+updateType+'(\"'+updateType+id+'\", '+value+');\n';

    return code;
  };

  Blockly.Arduino.QDP_web_serial_init = function() {
    var branch = Blockly.Arduino.statementToCode(this, 'data');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    Blockly.Arduino.definitions_['include_Arduino'] = '#include <Arduino.h>';
    Blockly.Arduino.definitions_['include_WiFi'] ='#include <WiFi.h>';
    Blockly.Arduino.definitions_['include_AsyncTCP'] = '#if defined(ESP32)\n#include <AsyncTCP.h>\n#elif defined(ESP8266)\n#include <ESPAsyncTCP.h>\n#endif\n';
    Blockly.Arduino.definitions_['include_ESPAsyncWebServer'] ='#include <ESPAsyncWebServer.h>';
    Blockly.Arduino.definitions_['include_WebSerial'] = '#include <WebSerial.h>';   
    Blockly.Arduino.definitions_['var_declare_AsyncWebServer'] = 'AsyncWebServer server(80);';  

    var code = 'WebSerial.begin(&server);\n'
              +'  WebSerial.msgCallback(recvMsg);\n'
              +'  server.begin();\n'
              +'  Serial.print(WiFi.localIP());\n'
              +'  Serial.println("/webserial");\n';
     return code;
  };

  Blockly.Arduino.QDP_web_print_data_32 = function() {
    var mode= this.getFieldValue('mode');
    var web_printing= Blockly.Arduino.valueToCode(this, 'web_printing', Blockly.Arduino.ORDER_ATOMIC);
    web_printing = web_printing.replace(/\"/g,'');
    if(mode==0)
    {
      var code = 'WebSerial.println(String('+web_printing+'));\n';
    }else
    {
      var code = 'WebSerial.print(String('+web_printing+'));\n';
    } 
    return code;
  };

  Blockly.Arduino.QDP_web_receive_data_32 = function() {
    var branch = Blockly.Arduino.statementToCode(this, 'data');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    Blockly.Arduino.definitions_['AsyncWebServer_server'] = 'void recvMsg(uint8_t *data, size_t len){\n'
                                                                +'String web_data = "";\n'
                                                                +' for(int i=0; i < len; i++){\n'
                                                                +'  web_data += char(data[i]);\n'
                                                                +'}\n'
                                                                +''+branch+'\n'
                                                                +'}\n';  
    
     var code = '';
     return code;
  };

    return Blockly;
}

exports = addGenerator;
