/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SMG_CATEGORY:'Display',
        PY_qdp_esp32_display:'Digit Port %1 display %2',
        PY_qdp_esp32_display_clear:'Digit Clear Screen Port %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SMG_CATEGORY:'数码管',
        PY_qdp_esp32_display:'数码管 端口 %1  显示 %2',
        PY_qdp_esp32_display_clear:'数码管 清屏 端口 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_SMG_CATEGORY:'數碼管',
        PY_qdp_esp32_display:'數碼管 端口 %1  顯示 %2',
        PY_qdp_esp32_display_clear:'數碼管 清屏 端口 %1'
    });
    return Blockly;
}

exports = addMsg;
