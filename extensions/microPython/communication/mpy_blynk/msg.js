/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_MPY_BLYNK_CATEGORY:'Blynk',
        mpython_blynk_setup:'BLYNK set server %1 port %2 auth %3',
        mpython_blynk_app_data:'When the value %2 %3 of the virtual pin V %1 is received from the Blynk APP',
        mpython_blynktimer:'Blynk Timer %1 %2 cycle %3 sec %4',
        MIXLY_PYTHON_PERIODIC:'PERIODIC',
        MIXLY_PYTHON_ONE_SHOT:'ONE SHOT',
        mpython_blynk_get_timers:'Available Blynk timer',
        mpython_blynk_stop_timers:'Stop Blynk timer %1',
        mpython_blynktimer_run:'Run Blynk timer process',
        mpython_blynk_run:'Run Blynk process',
        mpython_blynk_sensor_data_to_app:'Send data %1 to Blynk\'s virtual pin %2',
        mpython_blynk_app_notify:'Blynk APP show notification %1',
        mpython_blynk_on_connected:'%1 When Blynk connected ',
        mpython_blynk_on_disconnected:'%1 When Blynk disconnected ',
        mpython_blynk_sync_virtual:'Synchronize virtual pin state V %1',
        mpython_blynk_email:'Send the email %2 body %3 to %1',
        mpython_blynk_set_property:'Give virtual pin V %1 Add Attribute %2 value %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_MPY_BLYNK_CATEGORY:'Blynk',
        mpython_blynk_setup:'BLYNK 设置 服务器 %1 端口 %2 授权码 %3',
        mpython_blynk_app_data:'当从 Blynk APP 收到虚拟管脚V %1 的值 %2 %3',
        mpython_blynktimer:'Blynk 定时器 %1 %2 周期 %3 秒 %4',
        MIXLY_PYTHON_PERIODIC:'多次触发',
        MIXLY_PYTHON_ONE_SHOT:'单次触发',
        mpython_blynk_get_timers:'可用的Blynk定时器',
        mpython_blynk_stop_timers:'停止Blynk定时器 %1',
        mpython_blynktimer_run:'运行Blynk定时器进程',
        mpython_blynk_run:'运行Blynk进程',
        mpython_blynk_sensor_data_to_app:'发送数据 %1 到Blynk的虚拟管脚%2',
        mpython_blynk_app_notify:'Blynk APP 显示通知 %1',
        mpython_blynk_on_connected:'%1 当Blynk连接时',
        mpython_blynk_on_disconnected:'%1 当Blynk断开连接时',
        mpython_blynk_sync_virtual:'同步虚拟管脚状态 V %1',
        mpython_blynk_email:'向 %1 发送邮件 主题 %2 正文 %3',
        mpython_blynk_set_property:'给虚拟管脚V %1 添加属性 %2 值 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_MPY_BLYNK_CATEGORY:'Blynk',
        mpython_blynk_setup:'BLYNK 設置 伺服器 %1 端口 %2 授權碼 %3',
        mpython_blynk_app_data:'當從 Blynk APP 收到虛擬管腳V %1 的值 %2 %3',
        mpython_blynktimer:'Blynk 定時器 %1 %2 週期 %3 秒 %4',
        MIXLY_PYTHON_PERIODIC:'多次觸發',
        MIXLY_PYTHON_ONE_SHOT:'單次觸發',
        mpython_blynk_get_timers:'可用的Blynk定時器',
        mpython_blynk_stop_timers:'停止Blynk定時器 %1',
        mpython_blynktimer_run:'運行Blynk定時器進程',
        mpython_blynk_run:'運行Blynk進程',
        mpython_blynk_sensor_data_to_app:'發送數據 %1 到Blynk的虛擬管腳%2',
        mpython_blynk_app_notify:'Blynk APP 顯示通知 %1',
        mpython_blynk_on_connected:'%1 當Blynk連接時',
        mpython_blynk_on_disconnected:'%1 當Blynk斷開連接時',
        mpython_blynk_sync_virtual:'同步虛擬管腳狀態 V %1',
        mpython_blynk_email:'向 %1 發送郵件 主題 %2 正文 %3',
        mpython_blynk_set_property:'給虛擬管腳V %1 添加屬性 %2 值 %3'
    });
    return Blockly;
}

exports = addMsg;
