/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ESP32_ESPNOW_CATEGORY:'ESPNOW communication',
        communicate_espnow_init:'ESPNOW initialize %1 channel %2',
        network_espnow_mac:'ESPNOW %1 Get the local address',
        network_espnow_info:'ESPNOW %1 Get signal source MAC Address and signal strength information',
        network_espnow_send:'ESPNOW %1 TO MAC address %2 send messages %3',
        network_espnow_recv:'ESPNOW %1 receive messages %2',
        ETHERNET_MAC_CONTENT:'MAC address,content',
        ETHERNET_MAC:'MAC address',
        ETHERNET_CONTENT:'content',
        network_espnow_recv_handle:'ESPNOW %1 set callback function %2',
        network_espnow_recv_method:'%1 args:mac,msg'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ESP32_ESPNOW_CATEGORY:'ESPNOW 通讯',
        communicate_espnow_init:'ESPNOW 初始化 %1 频道 %2',
        network_espnow_mac:'ESPNOW %1 获取本机地址',
        network_espnow_info:'ESPNOW %1 获取信号源MAC地址及信号强度信息',
        network_espnow_send:'ESPNOW %1 向MAC地址 %2 发送消息 %3',
        network_espnow_recv:'ESPNOW %1 接收消息 %2',
        ETHERNET_MAC_CONTENT:'MAC地址,内容',
        ETHERNET_MAC:'MAC地址',
        ETHERNET_CONTENT:'内容',
        network_espnow_recv_handle:'ESPNOW %1 设置回调函数 %2',
        network_espnow_recv_method:'%1 参数:mac,msg'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ESP32_ESPNOW_CATEGORY:'ESPNOW 通訊',
        communicate_espnow_init:'ESPNOW 初始化 %1 頻道 %2',
        network_espnow_mac:'ESPNOW %1 獲取本機地址',
        network_espnow_info:'ESPNOW %1 獲取信號源MAC地址及信號強度資訊',
        network_espnow_send:'ESPNOW %1 向MAC地址 %2 發送消息 %3',
        network_espnow_recv:'ESPNOW %1 接收消息 %2',
        ETHERNET_MAC_CONTENT:'MAC地址,內容',
        ETHERNET_MAC:'MAC地址',
        ETHERNET_CONTENT:'內容',
        network_espnow_recv_handle:'ESPNOW %1 設置回調函數 %2',
        network_espnow_recv_method:'%1 參數:mac,msg'
    });
    return Blockly;
}

exports = addMsg;
