/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ESP32_NTP_CATEGORY:'NTP',
        communicate_esp32_ntp_updata_time:'NTP Time transmission server %1',
        communicate_esp32_ntp_get_time:'Get local Time %1',
        time_all:'all',
        time_year:'year',
        time_month:'month',
        time_day:'day',
        time_hour:'hour',
        time_minute:'minute',
        time_second:'second',
        time_week:'week',
        time_days:'days'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ESP32_NTP_CATEGORY:'同步网络时间',
        communicate_esp32_ntp_updata_time:'NTP同步网络时间 授时服务器%1',
        communicate_esp32_ntp_get_time:'获取本地时间 %1',
        time_all:'所有',
        time_year:'年',
        time_month:'月',
        time_day:'日',
        time_hour:'时',
        time_minute:'分',
        time_second:'秒',
        time_week:'周',
        time_days:'天数'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ESP32_NTP_CATEGORY:'同步網絡時間',
        communicate_esp32_ntp_updata_time:'NTP同步網絡時間 授時伺服器%1',
        communicate_esp32_ntp_get_time:'獲取本地時間 %1',
        time_all:'所有',
        time_year:'年',
        time_month:'月',
        time_day:'日',
        time_hour:'時',
        time_minute:'分',
        time_second:'秒',
        time_week:'周',
        time_days:'天數'
    });
    return Blockly;
}

exports = addMsg;
