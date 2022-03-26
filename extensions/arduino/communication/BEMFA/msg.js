/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_BEMFA_CATEGORY:'BEMFA cloud',
        QDP_tcp_device_cloud_subscription:'BEMFA IOT %1 auth %2 subject %3 %4 receive message %5',
        serialPrint:'Serial print  %1 %2',
        print:'print',
        println:'println',
        QDP_tcp_device_cloud_theme_push:'BEMFA IOT push %1 auth %2 subject %3 content %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_BEMFA_CATEGORY:'巴法云',
        QDP_tcp_device_cloud_subscription:'巴法云物联网 %1 密钥 %2 主题 %3 %4 收到消息 %5',
        serialPrint:'串口打印 %1 %2',
        print:'不换行',
        println:'换行',
        QDP_tcp_device_cloud_theme_push:'巴法云物联网 推送 %1 密钥 %2 主题 %3 内容 %4'
    });
    return Blockly;
}

exports = addMsg;
