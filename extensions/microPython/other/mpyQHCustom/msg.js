/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_CUSTOM_CATEGORY:'CUSTOM',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_CUSTOM_CATEGORY:'自定义',

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_CUSTOM_CATEGORY:'自定義',
    });
    return Blockly;
}

exports = addMsg;
