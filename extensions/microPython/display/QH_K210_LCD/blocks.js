/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_LCD_color = '#5ba5a5';
   
    const QH_LCD_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTc4MTIzMzQxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTM1LjM4NDYxNSAxNTcuNTM4NDYyYzM4LjA2NTIzMSAwIDY4LjkyMzA3NyAzMC40NjQgNjguOTIzMDc3IDY4LjAzNjkyM3Y2MTIuMjMzODQ2YzAgMTguMDU3ODQ2LTcuMjY2NDYyIDM1LjM0NzY5Mi0yMC4xODQ2MTUgNDguMTA4MzA3QTY5LjM3NiA2OS4zNzYgMCAwIDEgOTM1LjM4NDYxNSA5MDUuODQ2MTU0aC04MjcuMDc2OTIzQzcwLjI0MjQ2MiA5MDUuODQ2MTU0IDM5LjM4NDYxNSA4NzUuMzgyMTU0IDM5LjM4NDYxNSA4MzcuODA5MjMxdi02MTIuMjMzODQ2QzM5LjM4NDYxNSAxODguMDAyNDYyIDcwLjI0MjQ2MiAxNTcuNTM4NDYyIDEwOC4zMDc2OTIgMTU3LjUzODQ2Mmg4MjcuMDc2OTIzeiBtMCA2OC4wMzY5MjNoLTgyNy4wNzY5MjN2NjEyLjIzMzg0Nmg4MjcuMDc2OTIzdi02MTIuMjMzODQ2eiBtLTY4OS4yMzA3NjkgNjguMDE3MjN2NDA4LjE2MjQ2MmgxMDMuMzg0NjE2djY4LjAzNjkyM0gxNzcuMjMwNzY5VjI5My41OTI2MTVoNjguOTIzMDc3eiBtMzQ0LjYxNTM4NSAwdjY4LjAzNjkyM2wtMTAzLjQwNDMwOC0wLjAxOTY5MnYzNDAuMTQ1MjMxSDU5MC43NjkyMzF2NjguMDM2OTIzaC0xNzIuMzA3NjkzVjI5My41OTI2MTVINTkwLjc2OTIzMXogbTIwNi43NjkyMzEgMHY2OC4wMzY5MjNsLTY4LjkyMzA3Ny0wLjAxOTY5MnYzNDAuMTQ1MjMxaDY4LjkyMzA3N3Y2OC4wMzY5MjNoLTEzNy44NDYxNTRWMjkzLjU5MjYxNWgxMzcuODQ2MTU0eiBtNjguOTIzMDc2IDY4LjAzNjkyM3YzNDAuMTI1NTM5aC02OC45MjMwNzZWMzYxLjYyOTUzOEg4NjYuNDYxNTM4eiIgcC1pZD0iMjQ0MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";


    //LCD初始化
    Blockly.Blocks.PY_qdp_k210_lcd_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "freq" 
                    },
                    { 
                        type: "input_value", 
                        name: "colour" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'invert',
                        options: [[Blockly.Msg.py_yes,'1'],[Blockly.Msg.py_no,'0']]
                    }
                ],
                "tooltip": "LCD初始化\n频率:（实际上指 SPI 的通讯速率） 的频率\n颜色:LCD 初始化的颜色， 可以是 16 位的 RGB565 颜色值，比如 0xFFFF； 或者 RGB888 元组， 比如 (236, 36, 36)，\n反色:LCD 反色显示",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD显示
    Blockly.Blocks.PY_qdp_k210_lcd_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_display,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "img" 
                    }
                ],
                "tooltip": "",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD方向
    Blockly.Blocks.PY_qdp_k210_lcd_rotation = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_rotation,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'dir',
                        options: [['0','0'],['90','1'],['180','2'],['270','3']]
                    }
                ],
                "tooltip": "LCD方向",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD镜像
    Blockly.Blocks.PY_qdp_k210_lcd_mirror = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_mirror,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mirror',
                        options: [[Blockly.Msg.py_yes,'1'],[Blockly.Msg.py_no,'0']]
                    }
                ],
                "tooltip": "LCD镜像",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD清屏
    Blockly.Blocks.PY_qdp_k210_lcd_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_clear,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "colour" 
                    }
                ],
                "tooltip": "LCD镜像",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD绘制文本
    Blockly.Blocks.PY_qdp_k210_lcd_draw_string = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_lcd_draw_string,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LCD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
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
                        name: "content" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'color_T',
                        options: [[Blockly.Msg.BLACK,'BLACK'],[Blockly.Msg.NAVY,'NAVY'],[Blockly.Msg.DARKGREEN,'DARKGREEN'],[Blockly.Msg.DARKCYAN,'DARKCYAN'],[Blockly.Msg.MAROON,'MAROON'],[Blockly.Msg.PURPLE,'PURPLE'],[Blockly.Msg.OLIVE,'OLIVE'],[Blockly.Msg.LIGHTGREY,'LIGHTGREY'],[Blockly.Msg.DARKGREY,'DARKGREY'],[Blockly.Msg.BLUE,'BLUE'],[Blockly.Msg.GREEN,'GREEN'],[Blockly.Msg.CYAN,'CYAN'],[Blockly.Msg.RED,'RED'],[Blockly.Msg.MAGENTA,'MAGENTA'],[Blockly.Msg.YELLOW,'YELLOW'],[Blockly.Msg.WHITE,'WHITE'],[Blockly.Msg.ORANGE,'ORANGE'],[Blockly.Msg.GREENYELLOW,'GREENYELLOW'],[Blockly.Msg.PINK,'PINK']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'color_S',
                        options: [[Blockly.Msg.WHITE,'WHITE'],[Blockly.Msg.BLACK,'BLACK'],[Blockly.Msg.NAVY,'NAVY'],[Blockly.Msg.DARKGREEN,'DARKGREEN'],[Blockly.Msg.DARKCYAN,'DARKCYAN'],[Blockly.Msg.MAROON,'MAROON'],[Blockly.Msg.PURPLE,'PURPLE'],[Blockly.Msg.OLIVE,'OLIVE'],[Blockly.Msg.LIGHTGREY,'LIGHTGREY'],[Blockly.Msg.DARKGREY,'DARKGREY'],[Blockly.Msg.BLUE,'BLUE'],[Blockly.Msg.GREEN,'GREEN'],[Blockly.Msg.CYAN,'CYAN'],[Blockly.Msg.RED,'RED'],[Blockly.Msg.MAGENTA,'MAGENTA'],[Blockly.Msg.YELLOW,'YELLOW'],[Blockly.Msg.ORANGE,'ORANGE'],[Blockly.Msg.GREENYELLOW,'GREENYELLOW'],[Blockly.Msg.PINK,'PINK']]
                    }
                ],
                "tooltip": "LCD镜像",
                colour: QH_LCD_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;


