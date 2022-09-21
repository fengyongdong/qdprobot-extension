/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const tft_colour = '#5ba5a5';
    const secondaryColour = '#A9A9A9';

    const QH_IMG_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYwNTYxNDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik04NDggODY0SDE3NmMtMTcuNiAwLTMyIDE0LjQtMzIgMzJzMTQuNCAzMiAzMiAzMmg2NzJjMTcuNiAwIDMyLTE0LjQgMzItMzJzLTE0LjQtMzItMzItMzJ6TTYwOCAyNzYuOGwtMTkyIDExMmMtMTQuNCA5LjYtMjAuOCAyOC44LTExLjIgNDMuMiA4IDE2IDI4LjggMjAuOCA0My4yIDExLjJsMTkyLTExMmMxNC40LTkuNiAyMC44LTI4LjggMTEuMi00My4yLTgtMTYtMjcuMi0yMC44LTQzLjItMTEuMnpNODk2IDk2SDEyOGMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NTc2YzAgMzUuMiAyOC44IDY0IDY0IDY0aDc2OGMzNS4yIDAgNjQtMjguOCA2NC02NFYxNjBjMC0zNS4yLTI4LjgtNjQtNjQtNjR6IG0wIDYyNGMwIDkuNi02LjQgMTYtMTYgMTZIMTQ0Yy05LjYgMC0xNi02LjQtMTYtMTZWMTc2YzAtOS42IDYuNC0xNiAxNi0xNmg3MzZjOS42IDAgMTYgNi40IDE2IDE2djU0NHpNNTYwIDQ1Mi44bC0xOTIgMTEyYy0xNC40IDkuNi0yMC44IDI4LjgtMTEuMiA0My4yIDggMTYgMjguOCAyMC44IDQzLjIgMTEuMmwxOTItMTEyYzE0LjQtOS42IDIwLjgtMjguOCAxMS4yLTQzLjItOC0xNi0yNy4yLTIwLjgtNDMuMi0xMS4yeiIgcC1pZD0iMTA2NjMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    const QH_IMG_QR_CODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYxNDQxNDY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTQ4OS42IDQ4OS44SDE5OC40Yy0zNy4xIDAtNjcuMi0zMC4xLTY3LjItNjcuMnYtMjI0YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyOTEuMnogbS0yNjguOC04OS42SDQwMFYyMjFIMjIwLjh2MTc5LjJ6TTgyNS42IDQ4OS44SDUzNC40VjE5OC42YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyMjRjMCAzNy4xLTMwLjEgNjcuMi02Ny4yIDY3LjJ6TTYyNCA0MDAuMmgxNzkuMlYyMjFINjI0djE3OS4yek00MjIuNCA4OTNoLTIyNGMtMzcuMSAwLTY3LjItMzAuMS02Ny4yLTY3LjJ2LTIyNGMwLTM3LjEgMzAuMS02Ny4yIDY3LjItNjcuMmgyOTEuMnYyOTEuMmMwIDM3LjEtMzAuMSA2Ny4yLTY3LjIgNjcuMnogbS0yMDEuNi04OS42SDQwMFY2MjQuMkgyMjAuOHYxNzkuMnpNNTM0LjQgNTM0LjZoMTM0LjRWNjY5SDUzNC40eiIgcC1pZD0iMjQwNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDYuNCA2NDYuNmgxMzQuNFY3ODFINjQ2LjR6IiBwLWlkPSIyNDA4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTc1OC40IDUzNC42aDEzNC40VjY2OUg3NTguNHpNNTM0LjQgNzU4LjZoMTM0LjRWODkzSDUzNC40ek03NTguNCA3NTguNmgxMzQuNFY4OTNINzU4LjR6IiBwLWlkPSIyNDA5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+'

    var esp32_digital_pin = [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["25", "25"], ["26", "26"], ["27", "27"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["39", "39"]];

    var EN_FONT_NAME = [
    ["Times New Roman", "tim"],
    ["Helvetica", "helv"],
    ["ncen", "ncen"],
    ["courier new", "cour"]
    ];

    var EN_FONT_SIZE = [
    ["08", "08"],
    ["10", "10"],
    ["12", "12"],
    ["14", "14"],
    ["18", "18"],
    ["24", "24"],
    ];

    var EN_FONT_STYLE = [
    ["常规", "R"],
    ["加粗", "B"]
    ];
    var CN_FONT_SIZE = [
    ["12", "wqy12"],
    ["13", "wqy13"],
    ["14", "wqy14"],
    ["15", "wqy15"],
    ["16", "wqy16"],
    ];


    //创建二维码
    Blockly.Blocks.QDP_qr_code_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_qr_code_display,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QR_CODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "text" 
                    },
                    { 
                        type: "input_value", 
                        name: "X" 
                    },
                    { 
                        type: "input_value", 
                        name: "Y" 
                    },
                    { 
                        type: "input_value", 
                        name: "Zoom" 
                    }
                ],
                "tooltip": "创建二维码",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_begin_1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_begin_1,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_tab',
                        options: [[Blockly.Msg.green_label,"INITR_GREENTAB"],[Blockly.Msg.red_label,"INITR_REDTAB"],[Blockly.Msg.black_label,"INITR_BLACKTAB"],["160×80(ST7735)","INITR_MINI160x80"],["160×128(ST7789)","128, 160"],["240×135(ST7789)","135, 240"],["240×240(ST7789)","240, 240"],["320×240(ST7789)","240, 320"],["480×320(ST7796)","480×320(ST7796)"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_rst',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_cs',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_dc',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_mosi',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_sclk',
                        options: esp32_digital_pin
                    }
                    
                ],
                "tooltip": "此块适用于ST7735及ST7789芯片控制的TFT显示屏",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_begin_2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_begin_2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_tab',
                        options: [[Blockly.Msg.green_label,"INITR_GREENTAB"],[Blockly.Msg.red_label,"INITR_REDTAB"],[Blockly.Msg.black_label,"INITR_BLACKTAB"],["160×80(ST7735)","INITR_MINI160x80"],["160×128(ST7789)","128, 160"],["240×135(ST7789)","135, 240"],["240×240(ST7789)","240, 240"],["320×240(ST7789)","240, 320"],["480×320(ST7796)","480×320(ST7796)"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_rst',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_cs',
                        options: esp32_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_dc',
                        options: esp32_digital_pin
                    }
                    
                ],
                "tooltip": "此块适用于ST7735及ST7789芯片控制的TFT显示屏",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_backlight_20200703 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_backlight_20200703,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_backlight_pin',
                        options: esp32_digital_pin
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_backlight_brightness" 
                    }
                    
                ],
                "tooltip": "此块适用于ST7735及ST7789芯片控制的TFT显示屏",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_setRotation = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_setRotation,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'angle',
                        options: [["0°","0"],["90°","1"],["180°","2"],["270°","3"]]
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_set_cursor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_set_cursor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_cursor_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_cursor_y" 
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_setTextSize = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_setTextSize,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'size',
                        options: [[Blockly.Msg.font_micro,"0"],[Blockly.Msg.font_small,"1"],[Blockly.Msg.font_middle,"2"],[Blockly.Msg.font_big,"3"],[Blockly.Msg.font_large,"4"]]
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.color_rgb565 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    { 
                        type: "input_value", 
                        name: "color" 
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_set_text_screen_color_2019_10_18 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_set_text_screen_color_2019_10_18,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'choose_type',
                        options: [[Blockly.Msg.setTextColor,"setTextColor"],[Blockly.Msg.fillScreen,"fillScreen"]]
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color_data" 
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_st7735_set_text_background_color_2020_07_01 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.arduino_st7735_set_text_background_color_2020_07_01,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_text_color_data" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color_background" 
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_st7735_set_text_2020_07_02 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.arduino_st7735_set_text_2020_07_02,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_text_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_background_color" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_data" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'size',
                        options: [[Blockly.Msg.font_micro,"0"],[Blockly.Msg.font_small,"1"],[Blockly.Msg.font_middle,"2"],[Blockly.Msg.font_big,"3"],[Blockly.Msg.font_large,"4"]]
                    },
                    {
                      "type": "field_checkbox",
                      "name": "set_text_linebreak",
                      "checked": false
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_set_EN_Font = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_set_EN_Font,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'FONT_NAME',
                        options:EN_FONT_NAME
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FONT_SIZE',
                        options:EN_FONT_SIZE
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FONT_STYLE',
                        options:EN_FONT_STYLE
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_set_CN_Font = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_set_CN_Font,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'FONT_NAME',
                        options:[[Blockly.Msg.OLED_FONT_chinese1, "_t_chinese1"],[Blockly.Msg.OLED_FONT_chinese2, "_t_chinese2"],[Blockly.Msg.OLED_FONT_chinese3, "_t_chinese3"],[Blockly.Msg.OLED_FONT_gb2312a, "_t_gb2312a"],[Blockly.Msg.OLED_FONT_gb2312b, "_t_gb2312b"],[Blockly.Msg.OLED_FONT_gb2312, "_t_gb2312"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FONT_SIZE',
                        options:CN_FONT_SIZE
                    }
                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_print = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tft_print,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "POS_X" 
                    },
                    { 
                        type: "input_value", 
                        name: "POS_Y" 
                    },
                    { 
                        type: "input_value", 
                        name: "COLOR" 
                    },
                    { 
                        type: "input_value", 
                        name: "TEXT" 
                    }                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_show_text_2019_10_18 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_show_text_2019_10_18,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'show_text_type',
                        options:[[Blockly.Msg.print, "print"],[Blockly.Msg.println, "println"]]
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_print_data" 
                    }                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_show_num_2019_10_18 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_show_num_2019_10_18,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'show_num_type',
                        options:[[Blockly.Msg.print_num, "print"],[Blockly.Msg.println_num, "println"]]
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_print_data" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'st7735_print_type',
                        options:[[Blockly.Msg.DEC, "DEC"],[Blockly.Msg.BIN, "BIN"],[Blockly.Msg.OCT, "OCT"],[Blockly.Msg.HEX, "HEX"]]
                    },                    
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_pixel,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_line,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_end_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_end_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_angle_line_2020_08_10 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_angle_line_2020_08_10,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_x1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_y1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_length" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_angle" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_rect_change_2019_10_18 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_rect_change_2019_10_18,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_rect_type_1',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_width" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_hight" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_Roundrect_change_2019_10_18 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_Roundrect_change_2019_10_18,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_rect_type_1',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_width" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_hight" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_circle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_circle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'oled_draw_circle_type',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_CircleHelper = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_CircleHelper,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_cornername" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_oled_draw_CircleHelper_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.make_arduino_oled_draw_CircleHelper_data,
                args0: [
                    {
                      "type": "field_checkbox",
                      "name": "LEFT_UP",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT_UP",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "LEFT_DOWN",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT_DOWN",
                      "checked": true
                    }                 
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.make_arduino_oled_fill_CircleHelper_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.make_arduino_oled_fill_CircleHelper_data,
                args0: [
                    {
                      "type": "field_checkbox",
                      "name": "LEFT",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT",
                      "checked": true
                    }                
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_fill_CircleHelper = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_fill_CircleHelper,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_cornername" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_delta" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_ellipse = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_ellipse,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_ellipse_type',
                        options:[[Blockly.Msg.draw_ellipse, "false"],[Blockly.Msg.fill_ellipse, "true"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_x_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_y_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_cornername" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_ellipse_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.make_arduino_st7735_draw_triangle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.make_arduino_st7735_draw_triangle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_triangle_type',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x2" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y2" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x3" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y3" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: tft_colour,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
