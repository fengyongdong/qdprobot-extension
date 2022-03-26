/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   //电机运行
    Blockly.Arduino.IOT_PRO_MOTOR_RUN = function() {
      var type= this.getFieldValue('type');
      var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QH_IOT_PRO'] = '#include <QH_IOT_PRO.h>';  
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'] ='QH_IOT_PRO QH_IOT_PRO;';
      Blockly.Arduino.setups_['QH_IOT_PRO_INIT'] = 'QH_IOT_PRO.init();';
      var code = 'QH_IOT_PRO.motorRun('+type+','+speed+');\n'
      return code;
    };

    //电机刹车
    Blockly.Arduino.IOT_PRO_MOTOR_BRAKE = function() {
      var type= this.getFieldValue('type');
      Blockly.Arduino.definitions_['include_QH_IOT_PRO'] = '#include <QH_IOT_PRO.h>';  
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'] ='QH_IOT_PRO QH_IOT_PRO;';
      Blockly.Arduino.setups_['QH_IOT_PRO_INIT'] = 'QH_IOT_PRO.init();';
      var code = 'QH_IOT_PRO.motorBrake('+type+');\n'
      return code;
    };
    //电机编码暂停计数
    Blockly.Arduino.IOT_PRO_ENCODER_PAUSE_COUNT = function() {
      var type= this.getFieldValue('type');
      var mode= this.getFieldValue('mode');
      Blockly.Arduino.definitions_['includeESP32Encoder'] = '#include <ESP32Encoder.h>';
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'+type] = 'ESP32Encoder encoderM'+type+';';
      if(type==1)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(27, 14);\n';
      }else if(type==2)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(25, 26);\n';
      }else if(type==3)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(34, 35);\n';
      }else if(type==4)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(36, 39);\n';
      }
      var code='encoderM'+type+'.'+mode+';\n';
      return code;
    };

    //电机编码获取计数值
    Blockly.Arduino.IOT_PRO_ENCODER_GET_COUNT = function() {
      var type= this.getFieldValue('type');
      var code='encoderM'+type+'.getCount()';
      Blockly.Arduino.definitions_['includeESP32Encoder'] = '#include <ESP32Encoder.h>';
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'+type] = 'ESP32Encoder encoderM'+type+';';
      if(type==1)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(27, 14);\n';
      }else if(type==2)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(25, 26);\n';
      }else if(type==3)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(34, 35);\n';
      }else if(type==4)
      {
        Blockly.Arduino.setups_["setup_attachHalfQuad"+type] ='encoderM'+type+'.attachHalfQuad(36, 39);\n';
      }
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    //IO数字输出
    Blockly.Arduino.IOT_PRO_IO_DIGITAL_WRITE = function() {
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_stat = this.getFieldValue('STAT');
      Blockly.Arduino.definitions_['include_QH_IOT_PRO'] = '#include <QH_IOT_PRO.h>';  
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'] ='QH_IOT_PRO QH_IOT_PRO;';
      Blockly.Arduino.setups_['QH_IOT_PRO_INIT'] = 'QH_IOT_PRO.init();';
      Blockly.Arduino.setups_['QH_IOT_PRO_PINMODE'+dropdown_pin] ='QH_IOT_PRO.pinMode('+dropdown_pin+', OUTPUT);';
      var code = 'QH_IOT_PRO.digitalWrite('+dropdown_pin+', '+dropdown_stat+');\n'
      return code;
    };

    //IO数字输入
    Blockly.Arduino.IOT_PRO_IO_DIGITAL_READ = function() {
      var dropdown_pin = this.getFieldValue('PIN');
      var type = this.getFieldValue('type');
      Blockly.Arduino.definitions_['include_QH_IOT_PRO'] = '#include <QH_IOT_PRO.h>';  
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'] ='QH_IOT_PRO QH_IOT_PRO;';
      Blockly.Arduino.setups_['QH_IOT_PRO_INIT'] = 'QH_IOT_PRO.init();';
      Blockly.Arduino.setups_['QH_IOT_PRO_PINMODE'+dropdown_pin] ='QH_IOT_PRO.pinMode('+dropdown_pin+', INPUT);';
      if(type==2)
        Blockly.Arduino.setups_['QH_IOT_PRO_PINMODE'+dropdown_pin] ='QH_IOT_PRO.pullUp('+dropdown_pin+', HIGH);';
      var code = 'QH_IOT_PRO.digitalRead('+dropdown_pin+')';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

   

    //获取巡线传感器状态
    Blockly.Arduino.IOT_PRO_GET_LINESENSOR_STATE = function() {
      var S1 = this.getFieldValue('D1') == 'TRUE'?'0':'1';
      var S2 = this.getFieldValue('D2') == 'TRUE'?'0':'1';
      var S3 = this.getFieldValue('D3') == 'TRUE'?'0':'1';
      var S4 = this.getFieldValue('D4') == 'TRUE'?'0':'1';
      var S5 = this.getFieldValue('D5') == 'TRUE'?'0':'1';
      var S='0B'+S5+S4+S3+S2+S1;
      Blockly.Arduino.definitions_['include_QH_IOT_PRO'] = '#include <QH_IOT_PRO.h>';  
      Blockly.Arduino.definitions_['var_declare_ESP32Encoder'] ='QH_IOT_PRO QH_IOT_PRO;';
      Blockly.Arduino.setups_['QH_IOT_PRO_INIT'] = 'QH_IOT_PRO.init();';
      for(var i = 0;i<5;i++)
        Blockly.Arduino.setups_['QH_IOT_PRO_PINMODE'+i] ='QH_IOT_PRO.pinMode('+i.toString()+', INPUT);';
      var code = 'QH_IOT_PRO.getLineSensorState('+S+')';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };



    return Blockly;
}

exports = addGenerator;
