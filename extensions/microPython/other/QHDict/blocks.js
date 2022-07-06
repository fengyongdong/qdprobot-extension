/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Dict_color = '#a55b6d';
    const QH_Tuple_color = '#5874DC';
    
    const QH_DICT_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU1MTk1MDg4NjgxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzcwLjEzMzMzMyA5MTcuMzMzMzMzSDI3NS4yQzIyOC4yNjY2NjcgOTE3LjMzMzMzMyAxOTIgODgxLjA2NjY2NyAxOTIgODM0LjEzMzMzM3MzNi4yNjY2NjctODMuMiA4My4yLTgzLjJIODEwLjY2NjY2N2MxMi44IDAgMjEuMzMzMzMzIDguNTMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzR2ODMuMmMwIDM0LjEzMzMzMy0yNy43MzMzMzMgNjEuODY2NjY3LTYxLjg2NjY2NyA2MS44NjY2NjZ6IG0tNDk0LjkzMzMzMy0xMjMuNzMzMzMzYy0yMS4zMzMzMzMgMC00MC41MzMzMzMgMTcuMDY2NjY3LTQwLjUzMzMzMyA0MC41MzMzMzNzMTcuMDY2NjY3IDQwLjUzMzMzMyA0MC41MzMzMzMgNDAuNTMzMzM0aDQ5NC45MzMzMzNjMTAuNjY2NjY3IDAgMTkuMi04LjUzMzMzMyAxOS4yLTE5LjJ2LTYxLjg2NjY2N0gyNzUuMnoiIHAtaWQ9IjIyMDMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzMwLjY2NjY2NyA3ODkuMzMzMzMzYy0xMi44IDAtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzNC0yMS4zMzMzMzNWMTM4LjY2NjY2N2MwLTEyLjggOC41MzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzNC0yMS4zMzMzMzRzMjEuMzMzMzMzIDguNTMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzRWNzY4YzAgMTIuOC04LjUzMzMzMyAyMS4zMzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzM3pNNDU0LjQgNTAxLjMzMzMzM2wtMTQuOTMzMzMzIDUxLjJoLTQ2LjkzMzMzNGw1OS43MzMzMzQtMTk2LjI2NjY2Nkg1MTJsNjEuODY2NjY3IDE5Ni4yNjY2NjZoLTQ2LjkzMzMzNGwtMTQuOTMzMzMzLTUxLjJoLTU3LjZ6IG01MS4yLTM0LjEzMzMzM2wtMTIuOC00Mi42NjY2NjdjLTQuMjY2NjY3LTEwLjY2NjY2Ny02LjQtMjUuNi0xMC42NjY2NjctMzguNC0yLjEzMzMzMyAxMC42NjY2NjctNi40IDI1LjYtOC41MzMzMzMgMzguNGwtMTIuOCA0Mi42NjY2NjdoNDQuOHpNNjgwLjUzMzMzMyA1NTAuNGwtMi4xMzMzMzMtMTQuOTMzMzMzYy04LjUzMzMzMyAxMC42NjY2NjctMjMuNDY2NjY3IDE3LjA2NjY2Ny00MC41MzMzMzMgMTcuMDY2NjY2LTI5Ljg2NjY2NyAwLTQ2LjkzMzMzMy0yMS4zMzMzMzMtNDYuOTMzMzM0LTQyLjY2NjY2NiAwLTM2LjI2NjY2NyAzNC4xMzMzMzMtNTUuNDY2NjY3IDgzLjItNTUuNDY2NjY3di0yLjEzMzMzM2MwLTguNTMzMzMzLTQuMjY2NjY3LTE5LjItMjUuNi0xOS4yLTE0LjkzMzMzMyAwLTI5Ljg2NjY2NyA0LjI2NjY2Ny0zOC40IDEwLjY2NjY2NmwtOC41MzMzMzMtMjcuNzMzMzMzYzEwLjY2NjY2Ny02LjQgMjkuODY2NjY3LTEyLjggNTUuNDY2NjY3LTEyLjggNDYuOTMzMzMzIDAgNjEuODY2NjY3IDI3LjczMzMzMyA2MS44NjY2NjYgNjEuODY2NjY3djQ5LjA2NjY2NmMwIDEyLjggMCAyNS42IDIuMTMzMzM0IDM0LjEzMzMzNGgtNDAuNTMzMzM0eiBtLTYuNC02Ni4xMzMzMzNjLTIzLjQ2NjY2NyAwLTQwLjUzMzMzMyA2LjQtNDAuNTMzMzMzIDIzLjQ2NjY2NiAwIDEwLjY2NjY2NyA4LjUzMzMzMyAxNy4wNjY2NjcgMTcuMDY2NjY3IDE3LjA2NjY2NyAxMC42NjY2NjcgMCAxOS4yLTYuNCAyMy40NjY2NjYtMTcuMDY2NjY3di0yMy40NjY2NjZ6IiBwLWlkPSIyMjA0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTc2OCA5MTcuMzMzMzMzSDI3Ny4zMzMzMzNjLTEyLjggMC0yMS4zMzMzMzMtOC41MzMzMzMtMjEuMzMzMzMzLTIxLjMzMzMzM3M4LjUzMzMzMy0yMS4zMzMzMzMgMjEuMzMzMzMzLTIxLjMzMzMzM2g0OTAuNjY2NjY3YzEwLjY2NjY2NyAwIDIxLjMzMzMzMy04LjUzMzMzMyAyMS4zMzMzMzMtMTkuMlYxNjguNTMzMzMzYzAtMTAuNjY2NjY3LTguNTMzMzMzLTE5LjItMjEuMzMzMzMzLTE5LjJIMjc1LjJjLTIxLjMzMzMzMyAwLTQwLjUzMzMzMyAxNy4wNjY2NjctNDAuNTMzMzMzIDQwLjUzMzMzNHY2NDQuMjY2NjY2YzAgMTIuOC04LjUzMzMzMyAyMS4zMzMzMzMtMjEuMzMzMzM0IDIxLjMzMzMzNHMtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzMy0yMS4zMzMzMzRWMTg5Ljg2NjY2N0MxOTIgMTQyLjkzMzMzMyAyMjguMjY2NjY3IDEwNi42NjY2NjcgMjc1LjIgMTA2LjY2NjY2N0g3NjhjMzYuMjY2NjY3IDAgNjQgMjcuNzMzMzMzIDY0IDYxLjg2NjY2NlY4NTMuMzMzMzMzYzAgMzYuMjY2NjY3LTI3LjczMzMzMyA2NC02NCA2NHoiIHAtaWQ9IjIyMDUiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=';

    //字典初始化
    Blockly.Blocks.dict_create_with = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.dict_create_with,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DICT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "创建字典,请按 key:val,key:val格式输入",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //字典赋值
    Blockly.Blocks.dict_set_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_set_value,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                      "type": "field_input",
                      "name": "key",
                      "text": "key1"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "赋值,有对应key的则修改值,无对应key的则增加字典项",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //字典获取键/值
    Blockly.Blocks.dict_get_key_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_get_key_value,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.dict_keys,"keys"], [Blockly.Msg.dict_values,"values"]]
                    },
                ],
                "tooltip": "所有键:返回一个列表,包括字典内所有键\n所有值:返回一个列表,包括字典内所有值",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //字典获取值
    Blockly.Blocks.dict_get_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_get_value,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.dict_value,"value"], [Blockly.Msg.dict_pop,"pop"]]
                    },
                    {
                      "type": "input_value",
                      "name": "key"
                    }
                ],
                "tooltip": "值:返回键对应值\n弹出:删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //字典获取值默认
    Blockly.Blocks.dict_get_value_by_default = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_get_value_by_default,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.dict_get_default,"get"], [Blockly.Msg.dict_set_default,"setdefault"]]
                    },
                    {
                      "type": "input_value",
                      "name": "key"
                    },
                    {
                      "type": "input_value",
                      "name": "preset"
                    }
                ],
                "tooltip": "获取:返回指定键的值，如果键不在字典中返回 default 设置的默认值\n设置:和获取类似, 但如果键不存在于字典中，将会添加键并将值设为'默认'",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //字典长度
    Blockly.Blocks.dict_len = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_len,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    }
                ],
                "tooltip": "获取字典长度",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //字典清空
    Blockly.Blocks.dict_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_clear,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    }
                ],
                "tooltip": "清空:清空字典",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //强转
    Blockly.Blocks.dict_tuple_to_list = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.dict_tuple_to_list,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.tolist,"list"], [Blockly.Msg.totuple,"tuple"],
                            [Blockly.Msg.todict,"dict"], [Blockly.Msg.toset,"set"]]
                    },
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    }
                ],
                "tooltip": "元组与列表之间的相互转换",
                colour: QH_Dict_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


