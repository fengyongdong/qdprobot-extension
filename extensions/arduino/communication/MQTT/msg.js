/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MQTT_subscribe_plus:'creation MQTT Client and connect to server address %1 Agent so %2 client ID %3 username %4 password %5',
        MQTT_received_the_news:'When receiving the subject %1 message',
        MQTT_publish:'MQTT Send the message %1 to the topic %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MQTT_subscribe_plus:'创建MQTT客户端并连接 服务器地址 %1 代理网口 %2 客户端ID %3 用户名 %4 密码 %5',
        MQTT_received_the_news:'当收到主题 %1 消息',
        MQTT_publish:'MQTT发送消息 %1 到主题 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        MQTT_subscribe_plus:'創建MQTT客戶端並連接 伺服器地址 %1 代理網口 %2 客戶端ID %3 用戶名 %4 密碼 %5',
        MQTT_received_the_news:'當收到主題 %1 消息',
        MQTT_publish:'MQTT發送消息 %1 到主題 %2'
    });
    return Blockly;
}

exports = addMsg;
