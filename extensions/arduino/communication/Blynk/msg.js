/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QDP_ADVANCED_BLYNK_CATEGORY: 'Dvanced Blynk',
        QDP_esp32_blynk_server: 'Server information server address %1 WIFI name %2 WIFI password %3 Blynk auth %4',
        QDP_esp32_blynk_smartconfig:'Smart config server address %1 Blynk auth %2',
        QDP_BLYNK_CONNECTED:'%1 When the device is connected to Blynk server %2 %3',
        QDP_BLYNK_APP_CONNECTED:'%1  When the device is connected to APP(APP must open the notification) %2 %3',
        QDP_BLYNK_APP_DISCONNECTED:'%1 When the device is disconnect to APP(APP must open the notification) %2 %3',
        QDP_blynk_iot_CONNECTED:'Connection server status(Boole)',
        serialPrint:'Serial print  %1 %2',
        print:'print',
        println:'println',
        blynk_param:'Convert param %1 as %2 ',
        param:'param',
        int:'int',
        String:'String',
        Double:'Double',
        float:'float',
        QDP_blynk_iot_get_data:'%1 Get data from APP  Virtual Pin  %2 %3 %4',
        QDP_blynk_iot_push_data_request:'%1Auto push data to APP Virtual pin %2 data %3 %4 %5',
        QDP_blynk_iot_syncVirtual:'%1 Synchronize virtual pin state %2',
        QDP_blynk_iot_push_data:'%1 Send data to the APP %2 data %3',
        QDP_Blynk_iot_timer:'%1 %2 Timer interval %3 ms %4 %5',
        QDP_blynk_iot_WidgetLED_COLOR:'%1 LED widgets virtual pin %2 colour %3 set as %4',
        QDP_blynk_iot_WidgetLED_VALUE:'%1 LED widgets virtual pin %2 colour %3 brightness %4',
        HIGH:'HIGH',
        LOW:'LOW',
        QDP_blynk_email:'%1 Send mail email address %2 email subject %3 email content %4',
        QDP_blynk_notify:'%1 Send notify content %2',
        QDP_blynk_terminal_clear:'%1 Terminal clear',
        QDP_blynk_iot_terminal_get:'%1 Terminal get string %2 %3 %4',
        QDP_blynk_terminal:'%1 Terminal display text %2 content %3',
        QDP_blynk_lcd:'%1 LCD virtual pin %2 row %3 line %4 content %5',
        QDP_blynk_lcd_clear:'%1 LCD clear',
        QDP_blynk_table:'%1 Table %2 data vibrate pin %3 ID %4 name %5 data %6',
        ADD:'add data',
        UPDATE:'update data',
        PICK:'pick',
        SELECT:'select',
        DESELECT:'deselect',
        QDP_blynk_table_highlight:'%1 Table %2 variable pin %3 ID %4',
        QDP_blynk_table_cleardata:'%1 Table clear data variable pin %2',
        QDP_blynk_time_input_1:'%1 Time input widgets (simpleness) %2 %3 %4 ',
        QDP_blynk_videourl:'%1 Video variable pin %2 url %3',
        QDP_blynk_bridge_auth:'%1 Bridge auth variable pin %2 device number %3 auth %4',
        QDP_blynk_bridge_digitalWrite:'%1 Bridge digital write device number %2 pin %3 set as %4',
        QDP_blynk_bridge_AnaloglWrite:'%1 Bridge analog write device number %2 pin %3 set as %4',
        QDP_blynk_bridge_VPin:'%1 Bridge variable pin device number %2 variable pin %3 set as %4',
        QDP_blynk_WidgetRTC_init:'%1 RTC initialization sync interval %2 minute',
        QDP_blynk_iot_playmusic:'%1 Play widgets virtual pin  %2 %3  "PLAY" run  %4 "STOP" run  %5 "NEXT" run  %6 "PREV" run  %7',
        QDP_blynk_light:'%1 Light sersor variable pin %2 %3 %4',
        QDP_blynk_gravity:'%1 gravity/acceleration sersor variable pin %2 %3 %4'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QDP_ADVANCED_BLYNK_CATEGORY: '高级Blynk',
        QDP_esp32_blynk_server: '服务器信息 服务器地址 %1 WIFI名称 %2 WIFI密码 %3 Blynk授权码 %4',
        QDP_esp32_blynk_smartconfig:'一键配网 服务器地址 %1 Blynk授权码 %2',
        QDP_BLYNK_CONNECTED:'%1 当设备连接到Blynk云服 %2 %3',
        QDP_BLYNK_APP_CONNECTED:'%1 当设备连接到APP(必须在APP上开启通知) %2 %3',
        QDP_BLYNK_APP_DISCONNECTED:'%1 当设备断开APP(必须在APP上开启通知) %2 %3',
        QDP_blynk_iot_CONNECTED:'硬件连接服务器状态(布尔)',
        serialPrint:'串口打印 %1 %2',
        print:'不换行',
        println:'换行',
        blynk_param:'转换 %1 为 %2 类型',
        param:'参数',
        int:'整数',
        String:'字符串',
        Double:'双精度浮点',
        float:'浮点',
        QDP_blynk_iot_get_data:'%1 从APP获取数据 虚拟管脚 %2 %3 %4',
        QDP_blynk_iot_push_data_request:'%1自动推送数据至APP 虚拟管脚%2 数据 %3 %4 %5',
        QDP_blynk_iot_syncVirtual:'%1 同步虚拟管脚状态 %2',
        QDP_blynk_iot_push_data:'%1 发送数据到APP %2 数据 %3',
        QDP_Blynk_iot_timer:'%1 %2 定时器 间隔 %3 毫秒 %4 %5',
        QDP_blynk_iot_WidgetLED_COLOR:'%1 LED组件 虚拟管脚 %2 颜色 %3 设为 %4',
        QDP_blynk_iot_WidgetLED_VALUE:'%1 LED组件 虚拟管脚 %2 颜色 %3 亮度 %4',
        HIGH:'开',
        LOW:'关',
        QDP_blynk_email:'%1 发送邮件 邮件地址 %2 邮件主题 %3 邮件内容 %4',
        QDP_blynk_notify:'%1 发送通知 内容 %2',
        QDP_blynk_terminal_clear:'%1 终端清屏',
        QDP_blynk_iot_terminal_get:'%1 从终端获取字符串 %2 %3 %4',
        QDP_blynk_terminal:'%1 终端显示文本 %2 内容 %3',
        QDP_blynk_lcd:'%1 LCD组件 虚拟引脚 %2 列 %3 行 %4 内容 %5',
        QDP_blynk_lcd_clear:'%1 LCD清屏',
        QDP_blynk_table:'%1 Table %2 虚拟引脚 %3 ID %4 名称 %5 数据 %6',
        ADD:'增加数据',
        UPDATE:'更新数据',
        PICK:'高亮显示',
        SELECT:'选择',
        DESELECT:'取消选择',
        QDP_blynk_table_highlight:'%1 Table %2 虚拟引脚 %3 ID %4',
        QDP_blynk_table_cleardata:'%1 Table 清除数据 虚拟引脚 %2',
        QDP_blynk_time_input_1:'%1 时间输入组件(简单) %2 %3 %4 ',
        QDP_blynk_videourl:'%1 视频流 虚拟引脚 %2 地址 %3',
        QDP_blynk_bridge_auth:'%1 桥接授权码 虚拟引脚 %2 设备编号 %3 授权码 %4',
        QDP_blynk_bridge_digitalWrite:'%1 桥接数字引脚输出 设备编号 %2 引脚号 %3 设为 %4',
        QDP_blynk_bridge_AnaloglWrite:'%1 桥接模拟引脚输出 设备编号 %2 引脚号 %3 设为 %4',
        QDP_blynk_bridge_VPin:'%1 桥接虚拟引脚 设备编号 %2 虚拟引脚号 %3 设为 %4',
        QDP_blynk_WidgetRTC_init:'%1 RTC初始化 同步间隔 %2 分钟',
        QDP_blynk_iot_playmusic:'%1 播放组件 虚拟管脚 %2 %3 "PLAY"时执行 %4 "STOP"时执行 %5 "NEXT"时执行 %6 "PREV"时执行 %7',
        QDP_blynk_light:'%1 光线传感器组件 虚拟引脚 %2 %3 %4',
        QDP_blynk_gravity:'%1 重力/加速度传感器 虚拟引脚 %2 %3 %4'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QDP_ADVANCED_BLYNK_CATEGORY: '高級Blynk',
        QDP_esp32_blynk_server: '伺服器資訊 伺服器地址 %1 WIFI名稱 %2 WIFI密碼 %3 Blynk授權碼 %4',
        QDP_esp32_blynk_smartconfig:'一鍵配網 伺服器地址 %1 Blynk授權碼 %2',
        QDP_BLYNK_CONNECTED:'%1 當設備連接到Blynk雲服 %2 %3',
        QDP_BLYNK_APP_CONNECTED:'%1 當設備連接到APP(必須在APP上開啟通知) %2 %3',
        QDP_BLYNK_APP_DISCONNECTED:'%1 當設備斷開APP(必須在APP上開啟通知) %2 %3',
        QDP_blynk_iot_CONNECTED:'硬體連接伺服器狀態(布爾)',
        serialPrint:'串口列印 %1 %2',
        print:'不換行',
        println:'換行',
        blynk_param:'轉換 %1 為 %2 類型',
        param:'參數',
        int:'整數',
        String:'字串',
        Double:'雙精度浮點',
        float:'浮點',
        QDP_blynk_iot_get_data:'%1 從APP獲取數據 虛擬管腳 %2 %3 %4',
        QDP_blynk_iot_push_data_request:'%1自動推送數據至APP 虛擬管腳%2 數據 %3 %4 %5',
        QDP_blynk_iot_syncVirtual:'%1 同步虛擬管腳狀態 %2',
        QDP_blynk_iot_push_data:'%1 發送數據到APP %2 數據 %3',
        QDP_Blynk_iot_timer:'%1 %2 定時器 間隔 %3 毫秒 %4 %5',
        QDP_blynk_iot_WidgetLED_COLOR:'%1 LED組件 虛擬管腳 %2 顏色 %3 設為 %4',
        QDP_blynk_iot_WidgetLED_VALUE:'%1 LED組件 虛擬管腳 %2 顏色 %3 亮度 %4',
        HIGH:'開',
        LOW:'關',
        QDP_blynk_email:'%1 發送郵件 郵件地址 %2 郵件主題 %3 郵件內容 %4',
        QDP_blynk_notify:'%1 發送通知 內容 %2',
        QDP_blynk_terminal_clear:'%1 終端清屏',
        QDP_blynk_iot_terminal_get:'%1 從終端獲取字串 %2 %3 %4',
        QDP_blynk_terminal:'%1 終端顯示文本 %2 內容 %3',
        QDP_blynk_lcd:'%1 LCD組件 虛擬引腳 %2 列 %3 行 %4 內容 %5',
        QDP_blynk_lcd_clear:'%1 LCD清屏',
        QDP_blynk_table:'%1 Table %2 虛擬引腳 %3 ID %4 名稱 %5 數據 %6',
        ADD:'增加數據',
        UPDATE:'更新數據',
        PICK:'高亮顯示',
        SELECT:'選擇',
        DESELECT:'取消選擇',
        QDP_blynk_table_highlight:'%1 Table %2 虛擬引腳 %3 ID %4',
        QDP_blynk_table_cleardata:'%1 Table 清除數據 虛擬引腳 %2',
        QDP_blynk_time_input_1:'%1 時間輸入組件(簡單) %2 %3 %4 ',
        QDP_blynk_videourl:'%1 視頻流 虛擬引腳 %2 地址 %3',
        QDP_blynk_bridge_auth:'%1 橋接授權碼 虛擬引腳 %2 設備編號 %3 授權碼 %4',
        QDP_blynk_bridge_digitalWrite:'%1 橋接數字引腳輸出 設備編號 %2 引腳號 %3 設為 %4',
        QDP_blynk_bridge_AnaloglWrite:'%1 橋接模擬引腳輸出 設備編號 %2 引腳號 %3 設為 %4',
        QDP_blynk_bridge_VPin:'%1 橋接虛擬引腳 設備編號 %2 虛擬引腳號 %3 設為 %4',
        QDP_blynk_WidgetRTC_init:'%1 RTC初始化 同步間隔 %2 分鐘',
        QDP_blynk_iot_playmusic:'%1 播放組件 虛擬管腳 %2 %3 "PLAY"時執行 %4 "STOP"時執行 %5 "NEXT"時執行 %6 "PREV"時執行 %7',
        QDP_blynk_light:'%1 光線感測器組件 虛擬引腳 %2 %3 %4',
        QDP_blynk_gravity:'%1 重力/加速度感測器 虛擬引腳 %2 %3 %4'
    });
    return Blockly;
}

exports = addMsg;


 

