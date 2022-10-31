/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_BLE_CATEGORY:'BLE',
        communicate_bluetooth_central_init:'Initializing Bluetooth %1 to the central device (host)',
        communicate_bluetooth_peripheral_init:'Bluetooth %1 is initialized to the peripheral (slave) name %2',
        communicate_bluetooth_scan:'%1 Scan the bluetooth',
        communicate_bluetooth_connect:'%1 Connection Bluetooth Name %2',
        communicate_bluetooth_is_connected:'%1 Is the Bluetooth connected?',
        communicate_bluetooth_send:'%1 Bluetooth sends data content %2',
        communicate_bluetooth_recv:'%1 Receive the message and execute the callback function %2',
        communicate_bluetooth_method:'%1 arg data',
        communicate_bluetooth_handle:'%1 Bluetooth handle receive messages Execute the callback function %2',
        communicate_bluetooth_handle_callback:'%1 arg:key1,key2,key3,keyx'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_BLE_CATEGORY:'蓝牙',
        communicate_bluetooth_central_init:'蓝牙 %1 初始化为中心设备(主机)',
        communicate_bluetooth_peripheral_init:'蓝牙 %1 初始化为外围设备(从机) 名称 %2',
        communicate_bluetooth_scan:'%1 扫描蓝牙',
        communicate_bluetooth_connect:'%1 连接蓝牙 名称 %2',
        communicate_bluetooth_is_connected:'%1 蓝牙是否连接成功?',
        communicate_bluetooth_send:'%1蓝牙发送数据 内容 %2',
        communicate_bluetooth_recv:'%1 接收消息 执行回调函数 %2',
        communicate_bluetooth_method:'%1 参数 data',
        communicate_bluetooth_handle:'%1 蓝牙手柄 接收消息 执行回调函数 %2',
        communicate_bluetooth_handle_callback:'%1 参数:key1,key2,key3,keyx'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_BLE_CATEGORY:'藍牙',
        communicate_bluetooth_central_init:'藍牙 %1 初始化為中心設備(主機)',
        communicate_bluetooth_peripheral_init:'藍牙 %1 初始化為週邊設備(從機) 名稱 %2',
        communicate_bluetooth_scan:'%1 掃描藍牙',
        communicate_bluetooth_connect:'%1 連接藍牙 名稱 %2',
        communicate_bluetooth_is_connected:'%1 藍牙是否連接成功?',
        communicate_bluetooth_send:'%1藍牙發送數據 內容 %2',
        communicate_bluetooth_recv:'%1 接收消息 執行回調函數 %2',
        communicate_bluetooth_method:'%1 參數 data',
        communicate_bluetooth_handle:'%1 藍牙手柄 接收消息 執行回調函數 %2',
        communicate_bluetooth_handle_callback:'%1 參數:key1,key2,key3,keyx'

    });
    return Blockly;
}

exports = addMsg;
