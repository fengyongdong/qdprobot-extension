/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

Blockly.Arduino.MQTT_publish = function() {
    var data= Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var topic= Blockly.Arduino.valueToCode(this, 'topic', Blockly.Arduino.ORDER_ATOMIC);
    var code='client.publish(String('+topic+').c_str(),String('+data+').c_str());\n';   
    return code;
};

Blockly.Arduino.MQTT_received_the_news = function() {
    var topic= Blockly.Arduino.valueToCode(this, 'topic', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'function');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    Blockly.Arduino.setups_['setups_topic_'+topic+''] ='client.subscribe(String('+topic+').c_str());'    
    var code='if (mqtt_status) {\n'
             +'  if (String(mqtt_topic).equals(String('+topic+'))) {\n'
             +'  '+branch+'\n'
             +'  mqtt_status = false;\n'
             +'  }\n'
             +'}\n'  
    return code;
};

Blockly.Arduino.MQTT_subscribe_plus = function() {
    var server= Blockly.Arduino.valueToCode(this, 'server', Blockly.Arduino.ORDER_ATOMIC);
    var port= Blockly.Arduino.valueToCode(this, 'port', Blockly.Arduino.ORDER_ATOMIC);
    var client_id= Blockly.Arduino.valueToCode(this, 'client_id', Blockly.Arduino.ORDER_ATOMIC);
    var mqtt_username= Blockly.Arduino.valueToCode(this, 'mqtt_username', Blockly.Arduino.ORDER_ATOMIC);
    var mqtt_password= Blockly.Arduino.valueToCode(this, 'mqtt_password', Blockly.Arduino.ORDER_ATOMIC);
    port = port.replace(/\"/g, "")
    Blockly.Arduino.definitions_['include_PubSubClient'] ='#include <PubSubClient.h>\n';
    Blockly.Arduino.definitions_['var_declare_PubSubClient'] = 'const char *mqtt_broker = ' +server+ ';\n'
                                                              +'const char *mqtt_username = ' +mqtt_username+ ';\n'
                                                              +'const char *mqtt_password = ' +mqtt_password+ ';\n'
                                                              +'const int mqtt_port = ' +port+ ';\n'
                                                              +'String mqtt_topic = "";\n'
                                                              +'String mqtt_data = "";\n'
                                                              +'boolean mqtt_status = false;\n'

                                                              +'WiFiClient espClient;\n'
                                                              +'PubSubClient client(espClient);\n'

                                                              +'void callback(char *topic, byte *payload, unsigned int length) {\n'
                                                              +'  String data = "";\n'
                                                              +'  for (int i = 0; i < length; i++) {\n'
                                                              +'    data = String(data) + String((char) payload[i]);\n'
                                                              +'  }\n'
                                                              +'  mqtt_topic = String(topic);\n'
                                                              +'  mqtt_data = data;\n'
                                                              +'  mqtt_status = true;\n'
                                                              +'}\n';    
    Blockly.Arduino.setups_['setups_PubSubClient'] ='client.setServer(mqtt_broker, mqtt_port);\n'
                                                   +'client.setCallback(callback);\n'
                                                   +'while (!client.connected()) {\n'
                                                   +'  String client_id = ' +client_id+ ';\n'
                                                   +'  if (client.connect(client_id.c_str(), mqtt_username, mqtt_password)) {\n'
                                                   +'    Serial.println("Public emqx mqtt broker connected");\n'
                                                   +'  } else {\n'
                                                   +'    Serial.print("failed with state ");\n'
                                                   +'    Serial.print(client.state());\n'
                                                   +'    delay(2000);\n'
                                                   +'  }\n'
                                                   +'}\n';    
    var code='client.loop();\n';                                                                                                             
    return code;
};

    return Blockly;

}
exports = addGenerator;


