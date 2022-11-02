/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        I2CSCANNER_CATEGORY: 'I2C Scanner',
        I2CSCANNER_PRINT: 'Serial print I2C address of scanned device'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        I2CSCANNER_CATEGORY: 'I2C扫描器',
        I2CSCANNER_PRINT: '串口打印 扫描到的I2C设备地址'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        I2CSCANNER_CATEGORY: 'I2C掃描器',
        I2CSCANNER_PRINT: '串口打印 掃描到的I2C設備地址'
    });

    return Blockly;
}

exports = addMsg;
