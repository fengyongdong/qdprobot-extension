/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  //巴法云主题订阅
Blockly.Arduino.QDP_tcp_device_cloud_subscription = function() {
    var type= this.getFieldValue('type');
    var Key= this.getFieldValue('Key');
    var topic= this.getFieldValue('topic');
    var branch = Blockly.Arduino.statementToCode(this, 'function');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    Blockly.Arduino.definitions_['include_WiFiClient'] ='#include <WiFiClient.h>';
    if(type==1)
  {
            Blockly.Arduino.definitions_['var_tcp_device_cloud_subscription'+ topic] = '#define TCP_SERVER_ADDR_'+ topic + ' "bemfa.com"\n'
                                                                       +'#define TCP_SERVER_PORT_'+ topic + ' "8344"\n'
                                                                       +'\n'
                                                                       +'String UID_'+ topic + ' = "'+ Key + '";\n'
                                                                       +'String TOPIC_'+ topic + ' = "'+ topic + '";\n'
                                                                       +'\n'
                                                                       +'WiFiClient TCPclient_'+ topic + ';\n'
                                                                       +'\n'
                                                                       +'void startTCPClient_'+ topic + '() {\n'
                                                                       +'  if (TCPclient_'+ topic + '.connect(TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '))) {\n'
                                                                       +'    Serial.print("Connected to server:");\n'
                                                                       +'    Serial.printf("%s:%d\\r\\n", TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '));\n'
                                                                       +'    String tcpTemp = "";\n'
                                                                       +'    tcpTemp = "cmd=1&uid=" + UID_'+ topic + ' + "&topic=" + TOPIC_'+ topic + ' + "\\r\\n";\n'
                                                                       +'    TCPclient_'+ topic + '.print(tcpTemp);\n'
                                                                       +'    tcpTemp = "";\n'
                                                                       +'    TCPclient_'+ topic + '.setNoDelay(true);\n'
                                                                       +'  }\n'
                                                                       +'  else {\n'
                                                                       +'    Serial.print("Failed connected to server:");\n'
                                                                       +'   Serial.println(TCP_SERVER_ADDR_'+ topic + ');\n'
                                                                       +'   TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'}\n'
                                                                       +'\n'
                                                                       +'void doTCPClientTick_'+ topic + '() {\n'
                                                                       +'  static String TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'  static unsigned int TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long TcpClient_preTick_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'  static unsigned long preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'  static bool preTCPConnected_'+ topic + ' = false;\n'
                                                                       +' if (WiFi.status() != WL_CONNECTED) return;\n'
                                                                       +' if (!TCPclient_'+ topic + '.connected()) {\n'
                                                                       +'   if (preTCPConnected_'+ topic + ' == true) {\n'
                                                                       +'     preTCPConnected_'+ topic + ' = false;\n'
                                                                       +'     preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'     Serial.println();\n'
                                                                       +'     Serial.println("TCP Client disconnected.");\n'
                                                                       +'     TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'  else if (millis() - preTCPStartTick_'+ topic + ' > 1 * 1000)\n'
                                                                       +'     startTCPClient_'+ topic + '();\n'
                                                                       +'  }\n'
                                                                       +'  else\n'
                                                                       +' {\n'
                                                                       +'   if (TCPclient_'+ topic + '.available()) {\n'
                                                                       +'     char c = TCPclient_'+ topic + '.read();\n'
                                                                       +'     TcpClient_Buff_'+ topic + ' += c;\n'
                                                                       +'     TcpClient_BuffIndex_'+ topic + '++;\n'
                                                                       +'     TcpClient_preTick_'+ topic + ' = millis();\n'
                                                                       +'\n'
                                                                       +'     if (TcpClient_BuffIndex_'+ topic + ' >= 512 - 1) {\n'
                                                                       +'      TcpClient_BuffIndex_'+ topic + ' = 512 - 2;\n'
                                                                       +'       TcpClient_preTick_'+ topic + ' = TcpClient_preTick_'+ topic + ' - 200;\n'
                                                                       +'      }\n'
                                                                       +'    }\n'
                                                                       +'    if (millis() - preHeartTick_'+ topic + ' >= 30 * 1000) {\n'
                                                                       +'      preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'      Serial.println("--Keep alive:");\n'
                                                                       +'      TCPclient_'+ topic + '.print("cmd=0&msg=keep\\r\\n");\n'
                                                                       +'    }\n'
                                                                       +'  }\n'
                                                                       +'  if ((TcpClient_Buff_'+ topic + '.length() >= 1) && (millis() - TcpClient_preTick_'+ topic + ' >= 200))\n'
                                                                       +'  {\n'
                                                                       +'    TCPclient_'+ topic + '.flush();\n'
                                                                       +'    TcpClient_Buff_'+ topic + '.replace(String("cmd=2&uid=") + String(UID_'+ topic + ') + String("&topic=") + String(TOPIC_'+ topic + ') + String("&msg="), "");\n'
                                                                       +'    String DATA = TcpClient_Buff_'+ topic + ';\n'
                                                                       +'    ' + branch + '\n'
                                                                       +'    TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'    TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  }\n'
                                                                       +'}\n'
  }
    if(type==2)
  {
            Blockly.Arduino.definitions_['var_tcp_device_cloud_subscription'+ topic] = '#define TCP_SERVER_ADDR_'+ topic + ' "bemfa.com"\n'
                                                                       +'#define TCP_SERVER_PORT_'+ topic + ' "8340"\n'
                                                                       +'\n'
                                                                       +'String UID_'+ topic + ' = "'+ Key + '";\n'
                                                                       +'String TOPIC_'+ topic + ' = "'+ topic + '";\n'
                                                                       +'\n'
                                                                       +'WiFiClient TCPclient_'+ topic + ';\n'
                                                                       +'\n'
                                                                       +'void startTCPClient_'+ topic + '() {\n'
                                                                       +'  if (TCPclient_'+ topic + '.connect(TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '))) {\n'
                                                                       +'    Serial.print("Connected to server:");\n'
                                                                       +'    Serial.printf("%s:%d\\r\\n", TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '));\n'
                                                                       +'    String tcpTemp = "";\n'
                                                                       +'    tcpTemp = "cmd=1&uid=" + UID_'+ topic + ' + "&topic=" + TOPIC_'+ topic + ' + "\\r\\n";\n'
                                                                       +'    TCPclient_'+ topic + '.print(tcpTemp);\n'
                                                                       +'    tcpTemp = "";\n'
                                                                       +'    TCPclient_'+ topic + '.setNoDelay(true);\n'
                                                                       +'  }\n'
                                                                       +'  else {\n'
                                                                       +'    Serial.print("Failed connected to server:");\n'
                                                                       +'   Serial.println(TCP_SERVER_ADDR_'+ topic + ');\n'
                                                                       +'   TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'}\n'
                                                                       +'\n'
                                                                       +'void doTCPClientTick_'+ topic + '() {\n'
                                                                       +'  static String TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'  static unsigned int TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long TcpClient_preTick_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'  static unsigned long preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'  static bool preTCPConnected_'+ topic + ' = false;\n'
                                                                       +' if (WiFi.status() != WL_CONNECTED) return;\n'
                                                                       +' if (!TCPclient_'+ topic + '.connected()) {\n'
                                                                       +'   if (preTCPConnected_'+ topic + ' == true) {\n'
                                                                       +'     preTCPConnected_'+ topic + ' = false;\n'
                                                                       +'     preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'     Serial.println();\n'
                                                                       +'     Serial.println("TCP Client disconnected.");\n'
                                                                       +'     TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'  else if (millis() - preTCPStartTick_'+ topic + ' > 1 * 1000)\n'
                                                                       +'     startTCPClient_'+ topic + '();\n'
                                                                       +'  }\n'
                                                                       +'  else\n'
                                                                       +' {\n'
                                                                       +'   if (TCPclient_'+ topic + '.available()) {\n'
                                                                       +'     char c = TCPclient_'+ topic + '.read();\n'
                                                                       +'     TcpClient_Buff_'+ topic + ' += c;\n'
                                                                       +'     TcpClient_BuffIndex_'+ topic + '++;\n'
                                                                       +'     TcpClient_preTick_'+ topic + ' = millis();\n'
                                                                       +'\n'
                                                                       +'     if (TcpClient_BuffIndex_'+ topic + ' >= 512 - 1) {\n'
                                                                       +'      TcpClient_BuffIndex_'+ topic + ' = 512 - 2;\n'
                                                                       +'       TcpClient_preTick_'+ topic + ' = TcpClient_preTick_'+ topic + ' - 200;\n'
                                                                       +'      }\n'
                                                                       +'    }\n'
                                                                       +'    if (millis() - preHeartTick_'+ topic + ' >= 30 * 1000) {\n'
                                                                       +'      preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'      Serial.println("--Keep alive:");\n'
                                                                       +'      TCPclient_'+ topic + '.print("cmd=0&msg=keep\\r\\n");\n'
                                                                       +'    }\n'
                                                                       +'  }\n'
                                                                       +'  if ((TcpClient_Buff_'+ topic + '.length() >= 1) && (millis() - TcpClient_preTick_'+ topic + ' >= 200))\n'
                                                                       +'  {\n'
                                                                       +'    TCPclient_'+ topic + '.flush();\n'
                                                                       +'    TcpClient_Buff_'+ topic + '.replace(String("cmd=2&uid=") + String(UID_'+ topic + ') + String("&topic=") + String(TOPIC_'+ topic + ') + String("&msg="), "");\n'
                                                                       +'    TcpClient_Buff_'+ topic + '.replace(String("cmd=2&msg="), "");\n'
                                                                       +'    String DATA = TcpClient_Buff_'+ topic + ';\n'
                                                                       +'    ' + branch + '\n'
                                                                       +'    TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'    TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  }\n'
                                                                       +'}\n'
  } 
    if(type==4)
  {
        Blockly.Arduino.definitions_['var_tcp_device_cloud_subscription'+ topic] = '#define TCP_SERVER_ADDR_'+ topic + ' "img.bemfa.com"\n'
                                                                       +'#define TCP_SERVER_PORT_'+ topic + ' "8347"\n'
                                                                       +'\n'
                                                                       +'String UID_'+ topic + ' = "'+ Key + '";\n'
                                                                       +'String TOPIC_'+ topic + ' = "'+ topic + '";\n'
                                                                       +'\n'
                                                                       +'WiFiClient TCPclient_'+ topic + ';\n'
                                                                       +'\n'
                                                                       +'void startTCPClient_'+ topic + '() {\n'
                                                                       +'  if (TCPclient_'+ topic + '.connect(TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '))) {\n'
                                                                       +'    Serial.print("Connected to server:");\n'
                                                                       +'    Serial.printf("%s:%d\\r\\n", TCP_SERVER_ADDR_'+ topic + ', atoi(TCP_SERVER_PORT_'+ topic + '));\n'
                                                                       +'    String tcpTemp = "";\n'
                                                                       +'    tcpTemp = "cmd=1&uid=" + UID_'+ topic + ' + "&topic=" + TOPIC_'+ topic + ' + "\\r\\n";\n'
                                                                       +'    TCPclient_'+ topic + '.print(tcpTemp);\n'
                                                                       +'    tcpTemp = "";\n'
                                                                       +'    TCPclient_'+ topic + '.setNoDelay(true);\n'
                                                                       +'  }\n'
                                                                       +'  else {\n'
                                                                       +'    Serial.print("Failed connected to server:");\n'
                                                                       +'   Serial.println(TCP_SERVER_ADDR_'+ topic + ');\n'
                                                                       +'   TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'}\n'
                                                                       +'\n'
                                                                       +'void doTCPClientTick_'+ topic + '() {\n'
                                                                       +'  static String TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'  static unsigned int TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long TcpClient_preTick_'+ topic + ' = 0;\n'
                                                                       +'  static unsigned long preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'  static unsigned long preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'  static bool preTCPConnected_'+ topic + ' = false;\n'
                                                                       +' if (WiFi.status() != WL_CONNECTED) return;\n'
                                                                       +' if (!TCPclient_'+ topic + '.connected()) {\n'
                                                                       +'   if (preTCPConnected_'+ topic + ' == true) {\n'
                                                                       +'     preTCPConnected_'+ topic + ' = false;\n'
                                                                       +'     preTCPStartTick_'+ topic + ' = millis();\n'
                                                                       +'     Serial.println();\n'
                                                                       +'     Serial.println("TCP Client disconnected.");\n'
                                                                       +'     TCPclient_'+ topic + '.stop();\n'
                                                                       +'  }\n'
                                                                       +'  else if (millis() - preTCPStartTick_'+ topic + ' > 1 * 1000)\n'
                                                                       +'     startTCPClient_'+ topic + '();\n'
                                                                       +'  }\n'
                                                                       +'  else\n'
                                                                       +' {\n'
                                                                       +'   if (TCPclient_'+ topic + '.available()) {\n'
                                                                       +'     char c = TCPclient_'+ topic + '.read();\n'
                                                                       +'     TcpClient_Buff_'+ topic + ' += c;\n'
                                                                       +'     TcpClient_BuffIndex_'+ topic + '++;\n'
                                                                       +'     TcpClient_preTick_'+ topic + ' = millis();\n'
                                                                       +'\n'
                                                                       +'     if (TcpClient_BuffIndex_'+ topic + ' >= 512 - 1) {\n'
                                                                       +'      TcpClient_BuffIndex_'+ topic + ' = 512 - 2;\n'
                                                                       +'       TcpClient_preTick_'+ topic + ' = TcpClient_preTick_'+ topic + ' - 200;\n'
                                                                       +'      }\n'
                                                                       +'    }\n'
                                                                       +'    if (millis() - preHeartTick_'+ topic + ' >= 30 * 1000) {\n'
                                                                       +'      preHeartTick_'+ topic + ' = millis();\n'
                                                                       +'      Serial.println("--Keep alive:");\n'
                                                                       +'      TCPclient_'+ topic + '.print("cmd=0&msg=keep\\r\\n");\n'
                                                                       +'    }\n'
                                                                       +'  }\n'
                                                                       +'  if ((TcpClient_Buff_'+ topic + '.length() >= 1) && (millis() - TcpClient_preTick_'+ topic + ' >= 200))\n'
                                                                       +'  {\n'
                                                                       +'    TCPclient_'+ topic + '.flush();\n'
                                                                       +'    TcpClient_Buff_'+ topic + '.replace(String("cmd=2&uid=") + String(UID_'+ topic + ') + String("&topic=") + String(TOPIC_'+ topic + ') + String("&msg="), "");\n'
                                                                       +'    String DATA = TcpClient_Buff_'+ topic + ';\n'
                                                                       +'    ' + branch + '\n'
                                                                       +'    TcpClient_Buff_'+ topic + ' = "";\n'
                                                                       +'    TcpClient_BuffIndex_'+ topic + ' = 0;\n'
                                                                       +'  }\n'
                                                                       +'}\n'
  }                                                                        
    var code='doTCPClientTick_'+ topic + '();';
    return code;
};

//巴法云主题消息发送
Blockly.Arduino.QDP_tcp_device_cloud_theme_push = function() {
    var type= this.getFieldValue('type');
    var Key= this.getFieldValue('Key');
    var topic= this.getFieldValue('topic');
    var data= Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var code='';
    if(type==1)
  {
    code = 'TCPclient_'+ topic + '.print("cmd=2&uid='+ Key +'&topic='+ topic +'&msg="+String('+ data +')+"\\r\\n");';
  }
    if(type==2)
  {
    code = 'TCPclient_'+ topic + '.print("cmd=2&uid='+ Key +'&topic='+ topic +'&msg="+String('+ data +')+"\\r\\n");';
  }
    return code;
};

//串口打印
Blockly.Arduino.serialPrint = function() {
  var type = this.getFieldValue('type');
  var VALUE = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
  var code='Serial.'+type+'('+VALUE+');\n';
  return code;
};

//变量get
    Blockly.Arduino.QH_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_NONE];
    };




    return Blockly;

}
exports = addGenerator;


