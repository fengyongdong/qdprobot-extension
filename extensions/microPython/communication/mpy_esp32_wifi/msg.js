/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_WIFI_CATEGORY:'NETWORK',
        iot_wifi_connect:'Connect to WIFI wifi name %1 password %2',
        network_init:'Set WIFI mode as %1',
        network_open:'WIFI %1 network',
        MIXLY_NETWORK_WIFI_OPEN:'active',
        MIXLY_NETWORK_WIFI_CLOSE:'stop',
        network_is_active:'Get the activation status',
        network_scan:'Scan  available WIFI %1 ',
        NETWORK_WIFI_SCAN_ATTRIBUTE:'attribute',
        network_connect:'Connect to WIFI name %1 password %2',
        network_wifi_connect:'WIFI connection status?',
        network_get_connect:'Get WIFI %1',
        ESP32_NETWORK_IP:'IP',
        ESP32_NETWORK_MASK:'MASK',
        ESP32_NETWORK_GATEWAY:'GATEWAY',
        network_stop:'Disconnect the WIFI ',
        network_get_wifi:'Get WIFI %1',
        NETWORK_WIFI_ESSID:'access point name',
        NETWORK_WIFI_CHANNEL:'WI-FI channel',
        network_ap_connect:'Set access point name %1 channel %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_WIFI_CATEGORY:'网络',
        iot_wifi_connect:'确保连接到 WIFI 名称 %1 密码 %2',
        network_init:'设置WIFI 模式为 %1',
        network_open:'WIFI %1 网络接口',
        MIXLY_NETWORK_WIFI_OPEN:'激活',
        MIXLY_NETWORK_WIFI_CLOSE:'停用',
        network_is_active:'获取激活状态',
        network_scan:'扫描可用WIFI 的 %1',
        NETWORK_WIFI_SCAN_ATTRIBUTE:'全部特征',
        network_connect:'连接WIFI 名称 %1 密码 %2',
        network_wifi_connect:'WIFI连接状态?',
        network_get_connect:'获取WIFI %1',
        ESP32_NETWORK_IP:'IP地址',
        ESP32_NETWORK_MASK:'子网掩码',
        ESP32_NETWORK_GATEWAY:'网关',
        network_stop:'断开WIFI',
        network_get_wifi:'获取WIFI %1',
        NETWORK_WIFI_ESSID:'接入点名称',
        NETWORK_WIFI_CHANNEL:'WI-FI通道',
        network_ap_connect:'设置 接入点名称 %1 通道 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_WIFI_CATEGORY:'網路',
        iot_wifi_connect:'確保連接到 WIFI 名稱 %1 密碼 %2',
        network_init:'設置WIFI 模式為 %1',
        network_open:'WIFI %1 網路介面',
        MIXLY_NETWORK_WIFI_OPEN:'啟動',
        MIXLY_NETWORK_WIFI_CLOSE:'停用',
        network_is_active:'獲取啟動狀態',
        network_scan:'掃描可用WIFI 的 %1',
        NETWORK_WIFI_SCAN_ATTRIBUTE:'全部特徵',
        network_connect:'連接WIFI 名稱 %1 密碼 %2',
        network_wifi_connect:'WIFI連接狀態?',
        network_get_connect:'獲取WIFI %1',
        ESP32_NETWORK_IP:'IP地址',
        ESP32_NETWORK_MASK:'子網掩碼',
        ESP32_NETWORK_GATEWAY:'網關',
        network_stop:'斷開WIFI',
        network_get_wifi:'獲取WIFI %1',
        NETWORK_WIFI_ESSID:'接入點名稱',
        NETWORK_WIFI_CHANNEL:'WI-FI通道',
        network_ap_connect:'設置 接入點名稱 %1 通道 %2'
    });
    return Blockly;
}

exports = addMsg;
