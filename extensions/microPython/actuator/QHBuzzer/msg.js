/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_BUZZER_CATEGORY:'BUZZER',
        PY_qdp_esp32_buzzer:'Buzzer Port %1  frequency %2 duration %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_BUZZER_CATEGORY:'蜂鸣器',
        PY_qdp_esp32_buzzer:'蜂鸣器 端口 %1 频率 %2 持续时间 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ACTUATOR_CATEGORY:'蜂鳴器',
        PY_qdp_esp32_buzzer:'蜂鳴器 端口 %1 頻率 %2 持續時間 %3'
    });
    return Blockly;
}

exports = addMsg;
