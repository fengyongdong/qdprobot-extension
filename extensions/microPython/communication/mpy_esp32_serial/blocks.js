/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_SERIAL_COLOR = '#9fa55b'; 

    const QH_SERIAL_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MDE1NDc0NTk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1MTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTg3OCA1MTJWMzA4LjdjMC0xMTEuOC05MS41LTIwMy4zLTIwMy4zLTIwMy4zcy0yMDMuMyA5MS41LTIwMy4zIDIwMy4zdjQwNi43YzAgNjcuMy01NC43IDEyMi0xMjIgMTIycy0xMjItNTQuNy0xMjItMTIyVjUxMmg4MS4zVjE4Ni43aC0yNDRWNTEySDE0NnYyMDMuM2MwIDExMS44IDkxLjUgMjAzLjMgMjAzLjMgMjAzLjNzMjAzLjMtOTEuNSAyMDMuMy0yMDMuM1YzMDguN2MwLTY3LjMgNTQuNy0xMjIgMTIyLTEyMnMxMjIgNTQuNyAxMjIgMTIyVjUxMmgtODEuM3YzMjUuM2gyNDRWNTEySDg3OHpNMTQ2IDI2OGg4MS4zdjE2Mi43SDE0NlYyNjh6IG03MzIgNDg4aC04MS4zVjU5My4zSDg3OFY3NTZ6IiBwLWlkPSI1NTE4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";

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

    //串口初始化
    Blockly.Blocks.PY_qdp_esp32_serial_softserial = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_serial_softserial,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2']]
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
                        type: 'field_dropdown',
                        name: 'baudrate',
                        options: [['115200', '115200'], ['57600', '57600'], ['37400', '38400'], ['31250', '31250'], ['28800', '28800'], ['19200', '19200'], ['14400', '14400'], ['9600', '9600'], ['4800', '4800'], ['2400', '2400'], ['1200', '1200'], ['300', '300']]
                    }
                ],
                "tooltip": "串口初始化",
                colour: QH_SERIAL_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //串口打印
    Blockly.Blocks.PY_qdp_esp32_serial_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_serial_print,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2']]
                    },
                    { 
                        type: "input_value", 
                        name: "CONTENT" 
                    }
                ],
                "tooltip": "串口打印",
                colour: QH_SERIAL_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_esp32_serial_any = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_serial_any,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2']]
                    }
                ],
                "tooltip": "返回可读取的字节数",
                colour: QH_SERIAL_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_esp32_serial_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_serial_read,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.serial_read,'read'],[Blockly.Msg.serial_read_line,'readline']]
                    }
                ],
                "tooltip": "串口读取",
                colour: QH_SERIAL_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_esp32_serial_read_byte = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_serial_read_byte,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2']]
                    },
                    { 
                        type: "input_value", 
                        name: "bytesnum" 
                    }
                ],
                "tooltip": "串口读取",
                colour: QH_SERIAL_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


