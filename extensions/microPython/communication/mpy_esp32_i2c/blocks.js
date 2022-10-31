/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_I2C_COLOR = '#5ba574'; 

    const QH_I2C_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IGZvbnQtd2VpZ2h0PSJib2xkIiBzdHJva2U9IiMwMDAiIHRyYW5zZm9ybT0ibWF0cml4KDMuMjIwMzk1NzM5NzE0NDMzLDAsMCw0LjQ5NzA1MTkyMTY4MjU0MywtMTM1Ljg5MzQ0MTg2MTE0OSwtMTY0LjAzMTgyMDk1OTA3MDE2KSAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9IidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMSIgeT0iNTguODkwMjAzIiB4PSI0Mi41NjQ5NTMiIHN0cm9rZS1vcGFjaXR5PSJudWxsIiBzdHJva2Utd2lkdGg9IjAiIGZpbGw9IiNmZmZmZmYiPkkyQzwvdGV4dD4KIDwvZz4KPC9zdmc+";

     var qdprobotESP32_L_PIN_Output_Dropdown = [
    ['.P3-L-21（SDA）','21'],
    ['.P4-L-16','16'],
    ['.P5-L-18','18'],
    ['.P6-L-23','23'],
    ['.P7-L-15（touch）','15'],
    ['.P8-L-27（touch）','27'],
    ['.P9-L-12（touch）','12'],
    ['.P10-L-25','25'],
    ['P1-R-39','39'],
    ['P2-R-35','35'],
    ['P3-R-22（SCL）','22'],
    ['P4-R-17（RGB）','17'],
    ['P5-R-5','5'],
    ['P6-R-19','19'],
    ['P7-R-2','2'],
    ['P8-R-14（touch）','14'],
    ['P9-R-13（touch）','13'],
    ['P10-R-26','26']
    ];

    //I2C初始化
    Blockly.Blocks.communicate_i2c_init = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "SUB" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RX',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TX',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    { 
                        type: "input_value", 
                        name: "freq" 
                    }
                ],
                "tooltip": "初始化I2C，sda为数据信号，scl为时钟信号，频率为数据传输速率一般为10k或40k",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //I2C读
    Blockly.Blocks.communicate_i2c_read = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_read,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    { 
                        type: "input_value", 
                        name: "address" 
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    }
                ],
                "tooltip": "I2C 读取数字 地址",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //I2C读
    Blockly.Blocks.communicate_i2c_write = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_write,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    { 
                        type: "input_value", 
                        name: "address" 
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    }
                ],
                "tooltip": "I2C 写入数字 地址",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //搜索I2C
    Blockly.Blocks.communicate_i2c_scan = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_scan,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "搜索I2C",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //搜索I2C
    Blockly.Blocks.communicate_i2c_master_read = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_master_read,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "读取一行",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //读取数据是否成功
    Blockly.Blocks.communicate_i2c_available = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_i2c_available,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_I2C_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "判断I2C读取数据是否成功，返回真/假",
                colour: QH_I2C_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


