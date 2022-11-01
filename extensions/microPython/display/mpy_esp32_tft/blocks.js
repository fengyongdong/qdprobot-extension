/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_TFT_color = '#5ba5a5';
   
    const QH_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MjY1NDk4ODY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzMjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTkyMS42IDg3MC40djEwMi40SDEwMi40di0xMDIuNGg4MTkuMnpNMTAyNCA1MS4ydjY2NS42SDBWNTEuMmgxMDI0eiBtLTEwMi40IDEwMi40SDEwMi40djQ2MC44aDgxOS4yVjE1My42eiIgcC1pZD0iMzMzMCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";

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

    Blockly.Blocks.tft_use_spi_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_use_spi_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SPISUB",
                      "text": "spi",
                      "spellcheck": false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DC',
                        options:qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options:qdprobotESP32_L_PIN_Output_Dropdown
                    },
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    { 
                        type: "input_value", 
                        name: "WIDTH" 
                    },
                    { 
                        type: "input_value", 
                        name: "HEIGHT" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rotate',
                        options:[[Blockly.Msg.MICROPYTHON_DISPLAY_NO, "0"],[Blockly.Msg.ANTI_CLOCKWISE+'90°', "1"],[Blockly.Msg.ANTI_CLOCKWISE+'180°', "2"],[Blockly.Msg.ANTI_CLOCKWISE+'270°', "3"]]
                    }
                ],
                "tooltip": "",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_show_image_or_string_delay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_show_image_or_string_delay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "x" 
                    },
                    { 
                        type: "input_value", 
                        name: "y" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "space" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'center',
                        options:[[Blockly.Msg.MICROPYTHON_DISPLAY_YES, "True"],[Blockly.Msg.MICROPYTHON_DISPLAY_NO, "False"]]
                    },
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "在一段时间内显示图像/字符串",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_scroll_string_delay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_scroll_string_delay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "y" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "space" 
                    },
                    { 
                        type: "input_value", 
                        name: "time" 
                    },
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "在一段时间内滚动显示图像/字符串",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_show_frame_string_delay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_show_frame_string_delay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "time" 
                    },
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "在一段时间内逐个显示图像/字符串",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_line_arbitrarily = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_line_arbitrarily,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    { 
                        type: "input_value", 
                        name: "x1" 
                    },
                    { 
                        type: "input_value", 
                        name: "y1" 
                    },
                    { 
                        type: "input_value", 
                        name: "x2" 
                    },
                    { 
                        type: "input_value", 
                        name: "y2" 
                    },
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_fill,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "tft_st7789",
                      "spellcheck": false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[[Blockly.Msg.MIXLY_LCD_STAT_CLEAR, "BLACK"],[Blockly.Msg.MIXLY_HANDBIT_DISLPAY_OLED_FILL, "WHITE"]]
                    }
                ],
                "tooltip": "清屏/填充",
                colour: QH_TFT_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


