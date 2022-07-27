/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_BUZZER_CATEGORY:'Buzzer & DHT11',
        PY_qdp_esp32_dht11:'Temperature and humidity sensor Port %1 parameter %2',
        QH_Temperature:'Temperature',
        QH_Humidity:'Humidity',
        PY_qdp_esp32_buzzer:'Buzzer Port %1  frequency %2 duration %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_BUZZER_CATEGORY:'蜂鸣器 & 温湿度',
        PY_qdp_esp32_dht11:'温湿度传感器 端口 %1 参数 %2',
        QH_Temperature:'温度',
        QH_Humidity:'湿度',
        PY_qdp_esp32_buzzer:'蜂鸣器 端口 %1 频率 %2 持续时间 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ACTUATOR_CATEGORY:'蜂鳴器 & 溫濕度',
        PY_qdp_esp32_dht11:'溫濕度感測器 端口 %1 參數 %2',
        QH_Temperature:'溫度',
        QH_Humidity:'濕度',
        PY_qdp_esp32_buzzer:'蜂鳴器 端口 %1 頻率 %2 持續時間 %3'
    });
    return Blockly;
}

exports = addMsg;
