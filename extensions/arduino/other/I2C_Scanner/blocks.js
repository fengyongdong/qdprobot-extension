/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#9966FF';
    const secondaryColor = '#774DCB';


    
    Blockly.Blocks.i2cScanner_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.I2CSCANNER_PRINT,

                "tooltip": "当I2C接口上连接设备时，读取I2C地址。否则显示未找到I2C设备",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
