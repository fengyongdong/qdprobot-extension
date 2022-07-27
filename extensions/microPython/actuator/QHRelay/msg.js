/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_RELAY_CATEGORY:'Relay',
        PY_qdp_esp32_relay:'Relay Port %1 state %2',
        PY_qdp_esp32_read_relay:'Read relay Port %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_RELAY_CATEGORY:'继电器',
        PY_qdp_esp32_relay:'继电器 端口 %1 状态 %2',
        PY_qdp_esp32_read_relay:'读取 继电器 端口 %1 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_RELAY_CATEGORY:'繼電器',
        PY_qdp_esp32_relay:'繼電器 端口 %1 狀態 %2',
        PY_qdp_esp32_read_relay:'讀取 繼電器 端口 %1 ',
    });
    return Blockly;
}

exports = addMsg;
