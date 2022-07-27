/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Set_color = '#5ec73d';
    const QH_Tuple_color = '#5874DC';
    
    const QH_SET_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU1MjU3MjY2ODI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTc4LjU2IDIyNEgzNzkuNTJhMzIgMzIgMCAwIDEtMzItMzIgMzIuNjQgMzIuNjQgMCAwIDEgMzItMzJoNTk5LjA0YTMyIDMyIDAgMCAxIDMyIDMyIDMyIDMyIDAgMCAxLTMyIDMyek05NzguNTYgNTY1LjEySDM3OS41MmEzMiAzMiAwIDAgMS0zMi0zMiAzMi42NCAzMi42NCAwIDAgMSAzMi0zMmg1OTkuMDRhMzIgMzIgMCAwIDEgMzIgMzIgMzIgMzIgMCAwIDEtMzIgMzJ6TTk3OC41NiA5MDYuODhIMzc5LjUyYTMyLjY0IDMyLjY0IDAgMCAxLTMyLTMyIDMyIDMyIDAgMCAxIDMyLTMyaDU5OS4wNGEzMiAzMiAwIDAgMSAzMiAzMiAzMiAzMiAwIDAgMS0zMiAzMnpNMTE0LjU2IDI4NC4xNmEzMi42NCAzMi42NCAwIDAgMS0yMy4wNC05LjZMMjIuNCAyMDYuMDhhMzIuNjQgMzIuNjQgMCAwIDEgMC00NS40NCAzMiAzMiAwIDAgMSA0NS40NCAwbDQ2LjcyIDQ2LjA4IDk3LjI4LTk3LjI4YTMyIDMyIDAgMCAxIDQ1LjQ0IDAgMzIuNjQgMzIuNjQgMCAwIDEgMCA0NS40NEwxMzYuOTYgMjc0LjU2YTMyIDMyIDAgMCAxLTIyLjQgOS42ek0xMTQuNTYgNjE4Ljg4YTMyLjY0IDMyLjY0IDAgMCAxLTIzLjA0LTkuNkwyMi40IDU0MC4xNmEzMiAzMiAwIDAgMSAwLTQ0LjggMzIgMzIgMCAwIDEgNDUuNDQgMGw0Ni43MiA0Ni4wOCA5Ny4yOC05Ny4yOGEzMiAzMiAwIDAgMSA0NS40NCAwIDMyIDMyIDAgMCAxIDAgNDQuOEwxMzYuOTYgNjA5LjI4YTMyIDMyIDAgMCAxLTIyLjQgOS42ek0xMTQuNTYgOTY3LjA0YTMyLjY0IDMyLjY0IDAgMCAxLTIzLjA0LTcuMDRMMjIuNCA4ODguMzJhMzIuNjQgMzIuNjQgMCAwIDEgMC00NS40NCAzMi42NCAzMi42NCAwIDAgMSA0NS40NCAwbDQ2LjcyIDQ2LjcyIDk3LjI4LTk3LjkyYTMyIDMyIDAgMSAxIDQ1LjQ0IDQ1LjQ0TDEzNi45NiA5NjBhMzIgMzIgMCAwIDEtMjIuNCA3LjA0eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjUxNiI+PC9wYXRoPjwvc3ZnPg==';
  
    //集合初始化
    Blockly.Blocks.set_create_with = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.set_create_with,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SET_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "myset"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "创建集合,元组内容不可修改,数值之间使用逗号隔开",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //集合长度
    Blockly.Blocks.set_len = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_len,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "myset"
                    }
                ],
                "tooltip": "获取集合长度",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //集合增加删除
    Blockly.Blocks.set_add_discard = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_add_discard,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "myset"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.set_add,"add"], [Blockly.Msg.set_discard,"discard"]]
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    }
                ],
                "tooltip": "增加:向集合中添加一个元素，若此元素已在集合中则没有效果。\n移除:从集合中移除一个元素，若此元素不在集合中则没有效果。",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //集合运算1
    Blockly.Blocks.set_operation = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_operation,
                args0: [
                    {
                      "type": "field_input",
                      "name": "set1",
                      "text": "myset1"
                    },
                    {
                      "type": "field_input",
                      "name": "set2",
                      "text": "myset2"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.set_union,"union"], [Blockly.Msg.set_difference,"difference"], [Blockly.Msg.set_symmetric_difference,"symmetric_difference"], [Blockly.Msg.set_intersection,"intersection"]]
                    }
                ],
                "tooltip": "返回集合对象\n并集:返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。\n差集:返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。\n交叉补集:返回两个集合中不重复的元素集合，即会移除两个集合中都存在的元素\n交集:返回两个或更多集合中都包含的元素",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //集合运算1
    Blockly.Blocks.set_operation2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_operation,
                args0: [
                    {
                      "type": "field_input",
                      "name": "set1",
                      "text": "myset1"
                    },
                    {
                      "type": "field_input",
                      "name": "set2",
                      "text": "myset2"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.set_union,"update"], [Blockly.Msg.set_difference,"difference_update"], [Blockly.Msg.set_symmetric_difference,"symmetric_difference_update"], [Blockly.Msg.set_intersection,"intersection_update"]]
                    }
                ],
                "tooltip": "返回集合到集合A\n并集:返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。\n差集:返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。\n交叉补集:返回两个集合中不重复的元素集合，即会移除两个集合中都存在的元素\n交集:返回两个或更多集合中都包含的元素",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //集合包含运算
    Blockly.Blocks.set_is_sub_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_is_sub_set,
                args0: [
                    {
                      "type": "field_input",
                      "name": "set1",
                      "text": "myset1"
                    },
                    {
                      "type": "field_input",
                      "name": "set2",
                      "text": "myset2"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.set_issubset,"issubset"], [Blockly.Msg.set_issuperset,"issuperset"]]
                    }
                ],
                "tooltip": "判断指定集合的所有元素是否都包含在原始的集合中",
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //强转
    Blockly.Blocks.set_tuple_to_list = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.set_tuple_to_list,
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
                colour: QH_Set_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


