/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_TEXT_COLOR = '#5ba58c';
    
    const QH_TEXT_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MTc5MDg5MTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTMyIDAgOTcyLjY1MTk4NyAwIDk3Mi42NTE5ODcgMzE2LjY1MTU3NiA5MzEuMDUzMzcgMzE2LjY1MTU3NkM5MzEuMDUzMzcgMzE2LjY1MTU3NiA4NTEuNjY0NjI3IDEyMy4zMDE1ODcgNzU3Ljk5Njk2IDEwNi40MjY0ODggNjY0LjMyNjk0NSA4OS41NTEzODggNTk5LjIxNzEzOCAxMDEuMTYzNjY1IDU5OS4yMTcxMzggMTAxLjE2MzY2NUw1OTguMDQ4Mjc1IDkwOC40NjA2NTlDNTk4LjA0ODI3NSA5MDguNDYwNjU5IDYyNC4wNDYzODIgOTYzLjAyNzIwNiA2NjYuOTU3MTgxIDk2Ni44OTc5NjVMNzYxLjk0ODc4MSA5NjYuODk3OTY1IDc2MS45NDg3ODEgMTAyMi42MzMzNyAyNDIuNzc3MjE0IDEwMjIuNjMzMzcgMjQ0LjA5MDU3IDk2NS41MTE3NzYgMzI3LjI4ODk4IDk2NC4xOTYwN0MzMjcuMjg4OTggOTY0LjE5NjA3IDM4OS43NjUwMjcgOTQ0LjY4OTU1NSAzODkuNzY1MDI3IDg5OS4yNTg5NDQgMzg5Ljc2NTAyNyA4NTMuODk2NDc0IDM5MS4wODMwODMgMTA3LjY2ODE4NSAzOTEuMDgzMDgzIDEwNy42NjgxODUgMzkxLjA4MzA4MyAxMDcuNjY4MTg1IDI4OC4zMjc2NDkgOTMuNDk2MTU2IDIzNC45MzkzNjkgMTA2LjQ5Njk3MiAxODEuNjI1MDk3IDExOS40MjczMDQgODcuODgxMDczIDE5Ny4yOTcxMDYgNzMuNTk4NjE4IDMxMS40NjI3NjNMMzIgMzEyLjc3ODQ2OCAzMiAwIDMyIDAgMzIgMFoiIHAtaWQ9IjI2MjIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=';


    Blockly.Blocks.py_text = {
        init: function () {
            this.jsonInit({
                message0: '" %1 "',
                args0: [
                    {
                      "type": "input_value",
                      "name": "TEXT"
                    }
                ],
                "tooltip": "",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.ascii_to_char = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.ascii_to_char,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    }
                ],
                "tooltip": "返回一个ASCII编码对应的文本符号。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.char_to_ascii = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.char_to_ascii,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    }
                ],
                "tooltip": "返回一个字符对应的ASCII编码。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.number_to_text = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.number_to_text,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    }
                ],
                "tooltip": "返回一个字符对应的ASCII编码。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.convert_to_int = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.convert_to_int,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.TYPE_DEC,'10'],[Blockly.Msg.TYPE_BIN,'2'],[Blockly.Msg.TYPE_HEX,'16'],[Blockly.Msg.TYPE_OCT,'8']]
                    }
                ],
                "tooltip": "用于将一个字符串或数字转换为整型。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.convert_to_float = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.convert_to_float,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    }
                ],
                "tooltip": "用于将一个字符串或数字转换为浮点数。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.convert_to_bool = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.convert_to_bool,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    }
                ],
                "tooltip": "用于将一个字符串或数字转换为布尔。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.convert_round = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.convert_round,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "type"
                    }
                ],
                "tooltip": "返回浮点数x的四舍五入值。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.string_start_end = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.string_start_end,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.startswith,'startswith'],[Blockly.Msg.endswith,'endswith']]
                    },
                    {
                      "type": "input_value",
                      "name": "OBJ"
                    }
                ],
                "tooltip": "检查字符串是否以 obj 开始/结束，如果是，返回 True,否则返回 False.",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.string_isalpha = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.string_isalpha,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.isalpha,'isalpha'],[Blockly.Msg.isdigit,'isdigit'],[Blockly.Msg.isalnum,'isalnum'],[Blockly.Msg.isspace,'isspace']]
                    }
                ],
                "tooltip": "",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.string_get_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.string_get_value,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "num"
                    },
                ],
                "tooltip": "",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.string_slice = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.string_slice,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "from"
                    },
                    {
                      "type": "input_value",
                      "name": "to"
                    }
                ],
                "tooltip": "取字符串指定区域字符串,'包头不包尾'。如需取最前或最后，留空。",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_encode = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_encode,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [[Blockly.Msg.encode,'encode'],[Blockly.Msg.decode,'decode']]
                    }
                ],
                "tooltip": "以指定方式对字符串进行编码或解码\n编码:string-->bytes,解码:bytes-->string",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_find = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_find,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [[Blockly.Msg.defaultDir,'find'],[Blockly.Msg.rightDir,'rfind']]
                    },
                    {
                      "type": "input_value",
                      "name": "STR"
                    }
                ],
                "tooltip": "检测子串是否包含在这个字符串中，存在就返回这个字符串的下标，不存在就返回-1",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_find = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_find,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [[Blockly.Msg.defaultDir,'find'],[Blockly.Msg.rightDir,'rfind']]
                    },
                    {
                      "type": "input_value",
                      "name": "STR"
                    }
                ],
                "tooltip": "检测子串是否包含在这个字符串中，存在就返回这个字符串的下标，不存在就返回-1",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_count = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_count,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "STR"
                    }
                ],
                "tooltip": "检测子串是否包含在这个字符串中，存在就返回这个字符串的下标，不存在就返回-1",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_replace = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_replace,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "STR1"
                    },
                    {
                      "type": "input_value",
                      "name": "STR2"
                    }
                ],
                "tooltip": "将一段字符串中的指定内容替换成相应的内容",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_split = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_split,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "VAL"
                    }
                ],
                "tooltip": "将一个字符串按照指定字符拆分成多个字符串，返回一个包含这些子字符串的列表",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_format = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_format,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                      "type": "input_value",
                      "name": "VAL"
                    }
                ],
                "tooltip": "将一个字符串按照指定字符拆分成多个字符串，返回一个包含这些子字符串的列表",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.text_convert_case = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.text_convert_case,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TEXT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "VAR"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.upper,'upper'],[Blockly.Msg.lower,'lower']]
                    }
                ],
                "tooltip": "字符串的大小写转换",
                colour: QH_TEXT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


