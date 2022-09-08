/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Communicate_color = '#5ba574';
   
    const QH_VIDEO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTYxNjg2MDI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwNC44IDIzNi44QTE5LjIgMTkuMiAwIDAgMCAxODUuNiAyNTZ2NTEyYzAgMTAuNTk4NCA4LjYwMTYgMTkuMiAxOS4yIDE5LjJoNjE0LjRhMTkuMiAxOS4yIDAgMCAwIDE5LjItMTkuMlYyNTZBMTkuMiAxOS4yIDAgMCAwIDgxOS4yIDIzNi44SDIwNC44eiBtMC02NGg2MTQuNGM0NS45MjY0IDAgODMuMiAzNy4yNzM2IDgzLjIgODMuMnY1MTJjMCA0NS45MjY0LTM3LjI3MzYgODMuMi04My4yIDgzLjJIMjA0LjhBODMuMiA4My4yIDAgMCAxIDEyMS42IDc2OFYyNTZjMC00NS45MjY0IDM3LjI3MzYtODMuMiA4My4yLTgzLjJ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNDI2Ij48L3BhdGg+PHBhdGggZD0iTTY3MC43NzEyIDQ4NS4wMTc2YTUyLjQ4IDUyLjQ4IDAgMCAxLTE3Ljk3MTIgNzEuOTg3MmwtMTk1LjczNzYgMTE3LjQwMTZhNTIuNDggNTIuNDggMCAwIDEtNzkuNDYyNC00NC45NTM2VjM5NC41NDcyYTUyLjQ4IDUyLjQ4IDAgMCAxIDc5LjQ2MjQtNDQuOTUzNkw2NTIuOCA0NjYuOTQ0YzcuMzcyOCA0LjQ1NDQgMTMuNTY4IDEwLjU5ODQgMTcuOTcxMiAxOC4wMjI0eiBtLTIyOS4xNzEyLTcwLjE0NHYxOTQuMjAxNkw2MDMuMzkyIDUxMmwtMTYxLjc5Mi05Ny4wNzUyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjQyNyI+PC9wYXRoPjwvc3ZnPg==";

    const k210_digital_pin = [['P0','0'],['P1','1'],['P2','2'],['P3','3'],['P4','4'],['P5','5'],['P6','6'],['P7','7'],['P8','8'],['P9','9']];


    //串口初始化
    Blockly.Blocks.PY_qdp_k210_serial_softserial1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_serial_softserial1,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2'],['uart3','3']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RX',
                        options: k210_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TX',
                        options: k210_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'baudrate',
                        options: [['115200', '115200'], ['57600', '57600'], ['37400', '38400'], ['31250', '31250'], ['28800', '28800'], ['19200', '19200'], ['14400', '14400'], ['9600', '9600'], ['4800', '4800'], ['2400', '2400'], ['1200', '1200'], ['300', '300']]
                    }
                ],
                "tooltip": "串口初始化",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //串口打印
    Blockly.Blocks.PY_qdp_k210_serial_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_serial_print,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2'],['uart3','3']]
                    },
                    { 
                        type: "input_value", 
                        name: "CONTENT" 
                    }
                ],
                "tooltip": "串口打印",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_serial_any = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_serial_any,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2'],['uart3','3']]
                    }
                ],
                "tooltip": "串口打印",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_serial_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_serial_read,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [['uart1','1'],['uart2','2'],['uart3','3']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.serial_read,'read'],[Blockly.Msg.serial_read_line,'readline']]
                    }
                ],
                "tooltip": "串口读取",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    
    //红外发射
    Blockly.Blocks.PY_qdp_k210_communicate_ir_recv = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_ir_recv,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: k210_digital_pin
                    }
                ],
                "tooltip": "红外发射",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //I2C初始化默认引脚
    Blockly.Blocks.PY_qdp_k210_communicate_i2c_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_i2c_init,
                args0: [
                    { 
                        type: "input_value", 
                        name: "freq" 
                    }
                ],
                "tooltip": "I2C初始化",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //I2C初始化自定义引脚
    Blockly.Blocks.PY_qdp_k210_communicate_i2c_init1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_i2c_init1,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'sda',
                        options: k210_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'scl',
                        options: k210_digital_pin
                    },
                    { 
                        type: "input_value", 
                        name: "freq" 
                    }
                ],
                "tooltip": "I2C初始化",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //搜索I2C设备
    Blockly.Blocks.PY_qdp_k210_communicate_i2c_scan = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_i2c_scan,
                args0: [
                ],
                "tooltip": "搜索I2C设备",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //I2S初始化
    Blockly.Blocks.PY_qdp_k210_communicate_i2s_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_i2s_init,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [[Blockly.Msg.PY_qdp_k210_spk,'0'],[Blockly.Msg.PY_qdp_k210_mic,'1']]
                    },
                    { 
                        type: "input_value", 
                        name: "freq" 
                    }
                ],
                "tooltip": "I2C初始化",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //I2S采集数据
    Blockly.Blocks.PY_qdp_k210_communicate_i2s_record = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_k210_communicate_i2s_record,
                args0: [
                    { 
                        type: "input_value", 
                        name: "sampling_points" 
                    }
                ],
                "tooltip": "I2S采集数据",
                colour: QH_Communicate_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


