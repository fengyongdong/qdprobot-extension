/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {


Blockly.Arduino.SimpleBlynk_init = function() {
  var wifi_ssid = Blockly.Arduino.valueToCode(this, 'qdp_wifi_ssid', Blockly.Arduino.ORDER_ATOMIC);
  var wifi_pass = Blockly.Arduino.valueToCode(this, 'qdp_wifi_pass', Blockly.Arduino.ORDER_ATOMIC);

  var auth = Blockly.Arduino.valueToCode(this, 'auth', Blockly.Arduino.ORDER_ATOMIC);
  var ip = Blockly.Arduino.valueToCode(this, 'ip', Blockly.Arduino.ORDER_ATOMIC);

  var pin1 = Blockly.Arduino.valueToCode(this, 'pin1', Blockly.Arduino.ORDER_ATOMIC);
  var pin2 = Blockly.Arduino.valueToCode(this, 'pin2', Blockly.Arduino.ORDER_ATOMIC);
  pin1 = pin1.replace(/"/g, "");
  pin2 = pin2.replace(/"/g, "");


  Blockly.Arduino.definitions_['define_SimpleBlynk'] = '#include <SimpleBlynk.h>';
  Blockly.Arduino.definitions_['define_var_declare_SimpleBlynk'] = 'SimpleBlynk SimpleBlynk;';

 if(pin1==0 && pin2 == 1){
  Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_SimpleBlynk_init'+pin1+pin2] = 'SimpleBlynk.init(&Serial);'
  
  }else{
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+pin1+pin2] = 'SoftwareSerial  P'+pin1+pin2+'('+pin1+','+pin2+');';
  Blockly.Arduino.setups_['setup_qdprobot_serial'+pin1+pin2] = 'P'+pin1+pin2+'.begin(9600);';
  Blockly.Arduino.setups_['setup_SimpleBlynk_init'+pin1+pin2] = 'SimpleBlynk.init(&P'+pin1+pin2+');'
  }
  Blockly.Arduino.setups_['setup_SimpleBlynk_init_setWIFI_Auth'] = "SimpleBlynk.SendConfigWIFI("+wifi_ssid+","+wifi_pass+");\ndelay(500);\nSimpleBlynk.SendConfigAuth("+auth+","+ip+");\n"
  Blockly.Arduino.loops_['setup_SimpleBlynk_Recieve'] = 'SimpleBlynk.Recieve();\n';
  var code= '';
  return code;
};


//SimpleBlynk读取引脚事件
Blockly.Arduino.SimpleBlynk_ReadBlynkData = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  Blockly.Arduino.definitions_['var_declare_ReadBlynkData'] = 'void ReadBlynkData(int Pin, String PinValue) {\n' + branch +'\n}\n';
  Blockly.Arduino.setups_["setup_attachBlynkWriteCallBack"] ='SimpleBlynk.attachBlynkWriteCallBack(ReadBlynkData);\n';
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var code = '';
   return code;
};


//SimpleBlynk 虚拟引脚数据发送
Blockly.Arduino.SimpleBlynk_BLYNK_WRITE = function() {
  var Vpin = this.getFieldValue('Vpin');
  Vpin = Vpin.replace(/V/g, "");
  var data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code="SimpleBlynk.SendBlynkWrite("+Vpin+",String("+data+"));\n";
  return code;
};

//SimpleBlynk 虚拟引脚数据接收
Blockly.Arduino.SimpleBlynk_ReadData = function() {
  var type = this.getFieldValue('type');
  var Pos = this.getFieldValue('Pos');
  var code="SimpleBlynk.ReadData"+type+"(PinValue,"+Pos+")\n";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//iotstart连接事件
Blockly.Arduino.SimpleBlynk_CONNECTION_EVENT = function() {
  var type= this.getFieldValue('type');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if(type==0)
  {
    Blockly.Arduino.definitions_['var_declare_WIFIState'] = 'void WIFIState() {\n' + branch +'\n}\n';
    Blockly.Arduino.setups_["setup_attachWIFIStateCallBack"] ='SimpleBlynk.attachStateCallBack(WIFIState, 0);\n';
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  }
    if(type==1)
  {
    Blockly.Arduino.definitions_['var_declare_ServerState'] = 'void ServerState() {\n' + branch +'\n}\n';
    Blockly.Arduino.setups_["setup_attachServerStateCallBack"] ='SimpleBlynk.attachStateCallBack(ServerState, 1);\n';
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  }
  var code = '';
  return code;
};

//重启IOTstart
Blockly.Arduino.SimpleBlynk_RESTART = function() {
  var code="SimpleBlynk.BlynkReset();\n";
  return code;
};

//板载语音或数字播报
Blockly.Arduino.SimpleBlynk_ONBOARD_BROADCAST = function() {
  var type= this.getFieldValue('type');
  var value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
    if(type==1)
  {
    var code="SimpleBlynk.SendVoice(String("+value+"));\n";
  }
    if(type==2)
  {
    var code="SimpleBlynk.SendDigitalPlay(String("+value+"));\n";

  }
  return code;
};

  Blockly.Arduino.QDPESP8266Voice_Dropdown=function(){
  var dropdown_pin = this.getFieldValue('PIN2'); 
  var code=dropdown_pin;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.SimpleBlynk_RETRIEVE_DATA = function() {
  var Vpin = this.getFieldValue('Vpin');
  Vpin = Vpin.replace(/V/g, "");
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'if (Pin == ' + Vpin +') {\n' + branch +'\n}\n';
  return code;
};

//SimpleBlynk 虚拟引脚数据发送
Blockly.Arduino.serialPrint = function() {
  var type = this.getFieldValue('type');
  var VALUE = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
  var code='Serial.'+type+'('+VALUE+');\n';
  return code;
};



    return Blockly;
}

exports = addGenerator;
