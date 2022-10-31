/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_SPI_COLOR = '#5ba574'; 

    const QH_SPI_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IHN0eWxlPSJjdXJzb3I6IHRleHQ7IiBmb250LXdlaWdodD0iYm9sZCIgc3Ryb2tlPSIjMDAwIiB0cmFuc2Zvcm09Im1hdHJpeCgzLjIyMDM5NTczOTcxNDQzMywwLDAsNC40OTcwNTE5MjE2ODI1NDMsLTEzNS44OTM0NDE4NjExNDksLTE2NC4wMzE4MjA5NTkwNzAxNikgIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIiBmb250LXNpemU9IjI0IiBpZD0ic3ZnXzEiIHk9IjU4Ljg5MDIwMyIgeD0iNDIuNTY0OTUzIiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjZmZmZmZmIj5TUEk8L3RleHQ+CiA8L2c+Cjwvc3ZnPg==";

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

    //SPI初始化
    Blockly.Blocks.communicate_spi_init = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "freq" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sck',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mosi',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'miso',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "创建SPI对象并设置波特率(baudrate)，(时钟)极性(polarity):0/1，(时钟)相位(phase):0/1，以及时钟(SCK)，主设备输出，从设备输入(MOSI)，主设备输入，从设备输出(MISO)管脚",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_spi_set = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_set,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    }
                ],
                "tooltip": "设置 SPI 波特率",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_spi_buffer = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_set,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    }
                ],
                "tooltip": "创建一个缓冲字节流，并设置其大小",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_spi_read = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_read,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    }
                ],
                "tooltip": "返回SPI读取的字节(需填入读取的字节数)",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_spi_read_output = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_read_output,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "val" 
                    }
                ],
                "tooltip": "在MOSI上输出0xFF时读取一定数量的字节并返回",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_spi_readinto = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_readinto,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    }
                ],
                "tooltip": "返回读取到的缓冲字节流(长度在创建缓冲字节流时已设置)",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_spi_readinto_output = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_readinto_output,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "val" 
                    }
                ],
                "tooltip": "读取给定的缓冲字节流并在MOSI上输出0xff",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_spi_write = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_write,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    }
                ],
                "tooltip": "SPI发送字节",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_spi_write_readinto = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_spi_write_readinto,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPI_ICO,
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
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "val" 
                    }
                ],
                "tooltip": "SPI发送字节并将其读取到缓冲字节流",
                colour: QH_SPI_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}    

exports = addBlocks;


