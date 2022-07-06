/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_CHAOSHENGBO_CATEGORY:'Ultrasonic',
        PY_qdp_esp32_chaoshengbo:'Utrasonic ranging Port %1 type %2 unit %3',
        qdp_esp32_chaoshengboI2C:'QH Utrasonic ranging(IIC)',
        qdp_esp32_chaoshengboSerial:'QH Utrasonic ranging %1 Port %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_CHAOSHENGBO_CATEGORY:'超声波',
        PY_qdp_esp32_chaoshengbo:'超声波测距 端口 %1 类型 %2 单位 %3',
        qdp_esp32_chaoshengboI2C:'QH 超声波测距(IIC)',
        qdp_esp32_chaoshengboSerial:'QH 超声波测距 %1 端口 %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_CHAOSHENGBO_CATEGORY:'超聲波',
        PY_qdp_esp32_chaoshengbo:'超聲波測距 端口 %1 類型 %2 單位 %3',
        qdp_esp32_chaoshengboI2C:'QH 超聲波測距(IIC)',
        qdp_esp32_chaoshengboSerial:'QH 超聲波測距 %1 端口 %2',
    });
    return Blockly;
}

exports = addMsg;
