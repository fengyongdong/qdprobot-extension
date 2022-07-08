/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_List_color = '#5874DC';
    
    const QH_LIST_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU3MjQxNzk3MDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTcgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1OTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjI1NzgxMjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPkBmb250LWZhY2UgeyBmb250LWZhbWlseTogZmVlZGJhY2staWNvbmZvbnQ7IHNyYzogdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmMj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoIndvZmYyIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoIndvZmYiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS50dGY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ0cnVldHlwZSIpOyB9Cjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zMzAuMzEzMTQzIDIyNS40OTk0Mjl2LTEwOS43MTQyODZoNzI4LjM1NjU3MXYxMDkuNzE0Mjg2SDMzMC4zMTMxNDN6IG0xLjk3NDg1NyAzNjkuMDA1NzE0di0xMDkuNzE0Mjg2aDcyOC43MjIyODZ2MTA5LjcxNDI4NkgzMzIuMjg4eiBtLTAuNDM4ODU3IDM2NS4xMjkxNDN2LTEwOS43MTQyODZoNzI3LjI1OTQyOHYxMDkuNzE0Mjg2SDMzMS44NDkxNDN6TTE3OS4xMjY4NTcgNDkuMjk4Mjg2djIxMi45OTJoLTU4Ljg4VjEyMi43MzM3MTRjLTkuNTA4NTcxIDcuMjQxMTQzLTE4LjcyNDU3MSAxMy4wOTI1NzEtMjcuNjQ4IDE3LjU1NDI4NnMtMjAuMDQxMTQzIDguNzc3MTQzLTMzLjQ5OTQyOCAxMi44NzMxNDNWMTA1LjMyNTcxNGMxOS43NDg1NzEtNi4zNjM0MjkgMzUuMTgxNzE0LTE0LjA0MzQyOSA0Ni4wOC0yMi45NjY4NTcgMTAuOTcxNDI5LTguOTk2NTcxIDE5LjYwMjI4Ni0yMC4wNDExNDMgMjUuNzQ2Mjg1LTMzLjEzMzcxNGg0OC4yMDExNDN6IG0zOC40IDU3OC43MDYyODVINDIuOTM0ODU3YzIuMDQ4LTE3LjI2MTcxNCA4LjA0NTcxNC0zMy40OTk0MjkgMTguMjg1NzE0LTQ4LjY0IDEwLjA5MzcxNC0xNS4yMTM3MTQgMjkuMTEwODU3LTMzLjEzMzcxNCA1Ny4wNTE0MjktNTMuODMzMTQyIDE3LjA0MjI4Ni0xMi42NTM3MTQgMjcuOTQwNTcxLTIyLjIzNTQyOSAzMi42OTQ4NTctMjguODE4Mjg2YTMyLjMyOTE0MyAzMi4zMjkxNDMgMCAwIDAgNy4wOTQ4NTctMTguNzI0NTcyIDIxLjg2OTcxNCAyMS44Njk3MTQgMCAwIDAtNy4wMjE3MTQtMTYuMzg0IDI0LjY0OTE0MyAyNC42NDkxNDMgMCAwIDAtMTcuNzczNzE0LTYuNzI5MTQyIDI0Ljc5NTQyOSAyNC43OTU0MjkgMCAwIDAtMTguMjg1NzE1IDYuOTQ4NTcxYy00LjY4MTE0MyA0LjY4MTE0My03LjgyNjI4NiAxMi45NDYyODYtOS41MDg1NzEgMjQuNzIyMjg2bC01OC4yMjE3MTQtNC42ODExNDNjMi4yNjc0MjktMTYuMzg0IDYuNDM2NTcxLTI5LjE4NCAxMi41ODA1NzEtMzguNGE1OC4zNjggNTguMzY4IDAgMCAxIDI1Ljc0NjI4Ni0yMS4xMzgyODZjMTEuMTE3NzE0LTQuOTAwNTcxIDI2LjQ3NzcxNC03LjMxNDI4NiA0Ni4wOC03LjMxNDI4NiAyMC40OCAwIDM2LjQyNTE0MyAyLjM0MDU3MSA0Ny43NjIyODYgNi45NDg1NzJhNTguMTQ4NTcxIDU4LjE0ODU3MSAwIDAgMSAyNi45MTY1NzEgMjEuNTA0YzYuNTA5NzE0IDkuNjU0ODU3IDkuNzI4IDIwLjQ4IDkuNzI4IDMyLjU0ODU3MWE2Ni41NiA2Ni41NiAwIDAgMS0xMS4xOTA4NTcgMzYuNTcxNDI5Yy03LjQ2MDU3MSAxMS42Mjk3MTQtMjEuMDY1MTQzIDI0LjM1NjU3MS00MC43NDA1NzIgMzguMjUzNzE0LTExLjcwMjg1NyA4LjA0NTcxNC0xOS42MDIyODYgMTMuNzUwODU3LTIzLjU1MiAxNy4wNDIyODZhMjE1LjI1OTQyOSAyMTUuMjU5NDI5IDAgMCAwLTEzLjg5NzE0MiAxMi42NTM3MTRoOTAuODQzNDI4djQ3LjQ2OTcxNHpNMTAzLjY0MzQyOSA4NDQuOGwtNTUuMDAzNDI5LTkuODc0Mjg2YTY5LjA0Njg1NyA2OS4wNDY4NTcgMCAwIDEgMjYuMzMxNDI5LTQwLjIyODU3MWMxMy4wMTk0MjktOS40MzU0MjkgMzEuNDUxNDI5LTE0LjA0MzQyOSA1NS4yOTYtMTQuMDQzNDI5IDI3LjI4MjI4NiAwIDQ3LjAzMDg1NyA1LjEyIDU5LjI0NTcxNCAxNS4yODY4NTcgMTIuMjE0ODU3IDEwLjE2Njg1NyAxOC4yODU3MTQgMjIuOTY2ODU3IDE4LjI4NTcxNCAzOC40YTQyLjkzNDg1NyA0Mi45MzQ4NTcgMCAwIDEtNy4zODc0MjggMjQuNTc2IDYzLjEyMjI4NiA2My4xMjIyODYgMCAwIDEtMjIuNDU0ODU4IDE5LjMwOTcxNWM4LjA0NTcxNCAxLjk3NDg1NyAxNC4yNjI4NTcgNC4zMTU0MjkgMTguNTc4Mjg2IDYuOTQ4NTcxYTQ1LjM0ODU3MSA0NS4zNDg1NzEgMCAwIDEgMTYuMjM3NzE0IDE2Ljk2OTE0MyA1MS4yIDUxLjIgMCAwIDEgNS43NzgyODYgMjUuMDg4IDY5Ljg1MTQyOSA2OS44NTE0MjkgMCAwIDEtOS41ODE3MTQgMzUuMTA4NTcxIDY0LjE0NjI4NiA2NC4xNDYyODYgMCAwIDEtMjcuNTc0ODU3IDI1LjgxOTQyOWMtMTEuOTk1NDI5IDUuOTk3NzE0LTI3Ljc5NDI4NiA5LjA2OTcxNC00Ny4zMjM0MjkgOS4wNjk3MTQtMTkuMDE3MTQzIDAtMzQuMDExNDI5LTIuMjY3NDI5LTQ1LjA1Ni02LjcyOTE0M2E2Ny4yOTE0MjkgNjcuMjkxNDI5IDAgMCAxLTI3LjEzNi0xOS42NzU0MjggOTAuMjU4Mjg2IDkwLjI1ODI4NiAwIDAgMS0xNi4zODQtMzIuNDc1NDI5bDU4LjE0ODU3Mi03Ljc1MzE0M2MyLjM0MDU3MSAxMS43MDI4NTcgNS44NTE0MjkgMTkuODk0ODU3IDEwLjY3ODg1NyAyNC4zNTY1NzIgNC44Mjc0MjkgNC41MzQ4NTcgMTAuOTcxNDI5IDYuODAyMjg2IDE4LjI4NTcxNCA2LjgwMjI4NiA3Ljg5OTQyOSAwIDE0LjMzNi0yLjg1MjU3MSAxOS41MjkxNDMtOC41NTc3MTVhMzIuNjk0ODU3IDMyLjY5NDg1NyAwIDAgMCA3LjgyNjI4Ni0yMi44MjA1NzEgMzEuNzQ0IDMxLjc0NCAwIDAgMC03LjUzMzcxNS0yMi42MDExNDMgMjYuNTUwODU3IDI2LjU1MDg1NyAwIDAgMC0yMC4zMzM3MTQtOC4wNDU3MTRjLTQuNTM0ODU3IDAtMTAuODI1MTQzIDEuMTcwMjg2LTE4Ljg3MDg1NyAzLjQzNzcxNGwyLjk5ODg1Ny00MS41NDUxNDNhNTUuNTg4NTcxIDU1LjU4ODU3MSAwIDAgMCA3LjYwNjg1NyAwLjczMTQyOSAyNi41NTA4NTcgMjYuNTUwODU3IDAgMCAwIDE5LjAxNzE0My03LjMxNDI4NiAyMy4xMTMxNDMgMjMuMTEzMTQzIDAgMCAwIDcuNjgtMTcuMjYxNzE0IDIwLjYyNjI4NiAyMC42MjYyODYgMCAwIDAtNS43MDUxNDMtMTUuMzYgMjEuMjExNDI5IDIxLjIxMTQyOSAwIDAgMC0xNS43MjU3MTQtNS42MzIgMjMuMDQgMjMuMDQgMCAwIDAtMTYuNzQ5NzE0IDYuMjE3MTQzYy00LjI0MjI4NiA0LjA5Ni03LjE2OCAxMS40MTAyODYtOC43MDQgMjEuNzk2NTcxeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNTU5NCI+PC9wYXRoPjwvc3ZnPg==';

    //列表初始化
    Blockly.Blocks.lists_create_with = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.lists_create_with,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LIST_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "创建列表,数值之间使用逗号隔开",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //列表赋值
    Blockly.Blocks.lists_set_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_set_value,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "获取指定列表位置的值\n负数为倒数,如-1表示元组的倒数第一个",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //获取列表值
    Blockly.Blocks.lists_create_with_item = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_create_with_item,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    }
                ],
                "tooltip": "获取指定列表位置的值\n负数为倒数,如-1表示元组的倒数第一个",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //列表切片
    Blockly.Blocks.lists_slice = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_slice,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                      "type": "input_value",
                      "name": "no1"
                    },
                    {
                      "type": "input_value",
                      "name": "no2"
                    }
                ],
                "tooltip": "指定位置切片,包头不包尾,比如0~2,只包含0和1\n负数表示倒数,如-1表示列表的倒数第一个\n如果结尾是0(输入的),从开始位置到列表结束",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //lists内置函数
    Blockly.Blocks.lists_built_in_function = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_built_in_function,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.tuple_len,"len"], [Blockly.Msg.tuple_max,"max"],
                          [Blockly.Msg.tuple_min,"min"], [Blockly.Msg.tuple_sum,"sum"]]
                    },
                ],
                "tooltip": "",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //lists内置函数
    Blockly.Blocks.lists_built_in_function_output = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_built_in_function_output,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.lists_count,"count"], [Blockly.Msg.lists_extend,"extend"],[Blockly.Msg.lists_index,"index"]]
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    }
                ],
                "tooltip": "计数:统计某个元素在列表中出现的次数\n扩展:在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表)\n移除:从列表中找出某个值第一个匹配项的索引位置",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //lists内置函数
    Blockly.Blocks.lists_built_in_function_statement = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_built_in_function_statement,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.lists_append,"append"], [Blockly.Msg.lists_pop,"pop"],[Blockly.Msg.lists_remove,"remove"]]
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    }
                ],
                "tooltip": "尾部增加:在列表末尾添加新的对象\n弹出:移除列表中的一个元素（默认最后一个元素），并且返回该元素的值\n移除:移除列表中某个值的第一个匹配项",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //lists内置函数
    Blockly.Blocks.lists_built_in_function_output2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_built_in_function_output2,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mylist"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.lists_reverse,"reverse"], [Blockly.Msg.lists_copy,"copy"]]
                    },
                ],
                "tooltip": "反向:反向列表中元素\n复制:复制列表",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //lists内置函数
    Blockly.Blocks.lists_built_in_function_statement2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_built_in_function_statement2,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.lists_clear,"clear"],[Blockly.Msg.list_reverse,"reverse"]]
                    },
                ],
                "tooltip": "清空:清空列表\n反向:反向列表中元素",
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //强转
    Blockly.Blocks.list_tuple_to_list = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.list_tuple_to_list,
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
                colour: QH_List_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


