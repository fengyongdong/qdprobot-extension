/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_IR_CATEGORY:'IR remote',
        communicate_ir_recv:'IR remote receiver pin %1 callback function %2',
        PY_qdp_esp32_ir_re:'IR  remote control RC5 port %1',
        PY_qdp_esp32_ir_send:'IR remote send port %1 Address %2 content %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_IR_CATEGORY:'红外',
        communicate_ir_recv:'红外接收管脚 %1 回调函数 %2',
        PY_qdp_esp32_ir_re:'红外遥控 RC5 端口 %1',
        PY_qdp_esp32_ir_send:'红外发射 端口 %1 地址 %2 内容 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_IR_CATEGORY:'紅外',
        communicate_ir_recv:'紅外接收管腳 %1 回調函數 %2',
        PY_qdp_esp32_ir_re:'紅外遙控 RC5 端口 %1',
        PY_qdp_esp32_ir_send:'紅外發射 端口 %1 地址 %2 內容 %3'
    });
    return Blockly;
}

exports = addMsg;
