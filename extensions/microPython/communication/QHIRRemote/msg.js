/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_IR_CATEGORY:'IR',
        PY_qdp_esp32_ir_re:'Remote control input RC5 Port %1 ',
        PY_qdp_esp32_ir_send:'IR send Port %1 value %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_IR_CATEGORY:'红外',
        PY_qdp_esp32_ir_re:'红外遥控 RC5 端口 %1',
        PY_qdp_esp32_ir_send:'红外发射 端口 %1 数值 %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_IR_CATEGORY:'紅外',
        PY_qdp_esp32_ir_re:'紅外遙控 RC5 端口 %1',
        PY_qdp_esp32_ir_send:'紅外發射 端口 %1 數值 %2',
    });
    return Blockly;
}

exports = addMsg;
