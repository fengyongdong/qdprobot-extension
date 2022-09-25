/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Tuple_color = '#5874DC';

    const QH_TUPLE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU3MjQxOTI4MTAwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY0NjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTgwLjQzOTQ5NCAzOTguMzIzMDM4QTMzLjgzMDg4NiAzMy44MzA4ODYgMCAwIDAgNTk2LjI1MzE2NSA0MTUuODIxNzcyYTI4LjEyNzU5NSAyOC4xMjc1OTUgMCAwIDAgMTEuNjY1ODIyIDIuNDYyNzg1bDkuMzMyNjU5LTEuNTU1NDQzQTI3LjQ3OTQ5NCAyNy40Nzk0OTQgMCAwIDAgNjMzLjk3MjY1OCA0MDEuODIyNzg1YTMxLjM2ODEwMSAzMS4zNjgxMDEgMCAwIDAgMC45MDczNDItMjMuMzMxNjQ2TDU0OC40MjMyOTEgMTQyLjU4MjI3OGE0NC4zMzAxMjcgNDQuMzMwMTI3IDAgMCAwLTE0LjY0NzA4OC0yMC43MzkyNCAzNy41ODk4NzMgMzcuNTg5ODczIDAgMCAwLTQ0LjQ1OTc0NyAwIDQyLjM4NTgyMyA0Mi4zODU4MjMgMCAwIDAtMTQuNTE3NDY5IDIwLjczOTI0TDM4OC44NjA3NTkgMzc3LjU4Mzc5N2EyOC4xMjc1OTUgMjguMTI3NTk1IDAgMCAwIDAgMjQuODg3MDg5IDI3Ljg2ODM1NCAyNy44NjgzNTQgMCAwIDAgMTYuNDYxNzczIDE0LjUxNzQ2OGw5LjA3MzQxNyAxLjU1NTQ0M0EyNy40Nzk0OTQgMjcuNDc5NDk0IDAgMCAwIDQyNy43NDY4MzUgNDE0Ljc4NDgxYTMzLjMxMjQwNSAzMy4zMTI0MDUgMCAwIDAgMTUuMDM1OTUtMTcuMzY5MTE0bDI1LjkyNDA1LTY5LjQ3NjQ1NWg4Ni44NDU1N3ogbS05Mi4xNi0xMjUuMDgzNTQ0bDIzLjQ2MTI2NS02My43NzMxNjUgMjMuMDcyNDA2IDYzLjc3MzE2NXoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjY0NjUiPjwvcGF0aD48cGF0aCBkPSJNMzUyLjU2NzA4OSA3NDAuMzkwODg2YTgyLjQzODQ4MSA4Mi40Mzg0ODEgMCAwIDAgMTguNDA2MDc2LTUxLjg0ODEwMUE4NC4zODI3ODUgODQuMzgyNzg1IDAgMCAwIDM0OS45NzQ2ODQgNjMwLjg2MTc3MmE4MC4zNjQ1NTcgODAuMzY0NTU3IDAgMCAwLTYyLjYwNjU4My0yNS45MjQwNWgtNzcuNzcyMTUyYTQ5LjEyNjA3NiA0OS4xMjYwNzYgMCAwIDAtMzguODg2MDc2IDE2LjcyMTAxMiA1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAwLTEyLjMxMzkyNCAzNC45OTc0Njl2MTg4Ljk4NjMyOWE1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAwIDEyLjMxMzkyNCAzNC43MzgyMjcgNDkuMzg1MzE2IDQ5LjM4NTMxNiAwIDAgMCAzOC44ODYwNzYgMTYuNTkxMzkzaDgyLjY5NzcyMmE4Ni44NDU1NyA4Ni44NDU1NyAwIDAgMCA2Ny45MjEwMTMtMjguNTE2NDU2IDg5LjE3ODczNCA4OS4xNzg3MzQgMCAwIDAgMjIuNjgzNTQ0LTYxLjQ0IDg2LjMyNzA4OSA4Ni4zMjcwODkgMCAwIDAtMzAuMzMxMTM5LTY2LjQ5NTE5eiBtLTEzNi40OTAxMjcgMzEuMzY4MTAxaDc0LjE0Mjc4NWEzMy4wNTMxNjUgMzMuMDUzMTY1IDAgMCAxIDI1LjkyNDA1IDEwLjQ5OTI0MSAzNC40Nzg5ODcgMzQuNDc4OTg3IDAgMCAxIDguOTQzNzk4IDI0LjYyNzg0OCAzNS4zODYzMjkgMzUuMzg2MzI5IDAgMCAxLTguNDI1MzE3IDI0LjQ5ODIyOCAzMC41OTAzOCAzMC41OTAzOCAwIDAgMS0yNC44ODcwODggMTAuMjRsLTc1Ljk1NzQ2OCAyLjU5MjQwNXpNMjg1LjE2NDU1NyA2NTkuNzY3MDg5YTI1LjkyNDA1MSAyNS45MjQwNTEgMCAwIDEgMjEuMzg3MzQyIDguNDI1MzE2IDMxLjEwODg2MSAzMS4xMDg4NjEgMCAwIDEgMCAzOS45MjMwMzggMjUuOTI0MDUxIDI1LjkyNDA1MSAwIDAgMS0yMS4xMjgxMDIgOC41NTQ5MzdoLTcwLjEyNDU1NmwtMi4zMzMxNjUtNTYuOTAzMjkxSDI4NS4xNjQ1NTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2NDY2Ij48L3BhdGg+PHBhdGggZD0iTTYyOC4xMzk3NDcgNzUwLjYzMDg4NmExNjMuMDYyMjc4IDE2My4wNjIyNzggMCAwIDAgMzUuNjQ1NTY5IDExMC4wNDc1OTUgMTE3Ljk1NDQzIDExNy45NTQ0MyAwIDAgMCA5NC4yMzM5MjUgNDIuMjU2MjAzIDExOC43MzIxNTIgMTE4LjczMjE1MiAwIDAgMCA4Mi45NTY5NjItMjkuMDM0OTM3IDEyNC4xNzYyMDMgMTI0LjE3NjIwMyAwIDAgMCAzNi4wMzQ0My02NC44MTAxMjcgMzAuNDYwNzU5IDMwLjQ2MDc1OSAwIDAgMC0zLjc1ODk4Ny0yNC4yMzg5ODcgMjguOTA1MzE2IDI4LjkwNTMxNiAwIDAgMC0xOC40MDYwNzYtMTIuOTYyMDI1bC02Ljk5OTQ5NC0wLjc3NzcyMmEyOS40MjM3OTcgMjkuNDIzNzk3IDAgMCAwLTE0LjM4Nzg0OCAzLjc1ODk4NyAyOC45MDUzMTYgMjguOTA1MzE2IDAgMCAwLTEzLjczOTc0NyAxOS44MzE4OTkgNjguMTgwMjUzIDY4LjE4MDI1MyAwIDAgMS0yMi41NTM5MjQgNDEuMzQ4ODYxIDY0LjAzMjQwNSA2NC4wMzI0MDUgMCAwIDEtMzguODg2MDc2IDEwLjc1ODQ4MSA2Mi44NjU4MjMgNjIuODY1ODIzIDAgMCAxLTUwLjk0MDc1OS0yMS45MDU4MjMgMTE0LjE5NTQ0MyAxMTQuMTk1NDQzIDAgMCAxLTIxLjUxNjk2My03NS4wNTAxMjYgMTEzLjU0NzM0MiAxMTMuNTQ3MzQyIDAgMCAxIDIxLjUxNjk2My03NC4xNDI3ODUgNjMuMTI1MDYzIDYzLjEyNTA2MyAwIDAgMSA1MC45NDA3NTktMjIuNjgzNTQ1IDY4Ljk1Nzk3NSA2OC45NTc5NzUgMCAwIDEgNDAuMDUyNjU4IDEwLjc1ODQ4MSA1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAxIDIwLjQ4IDMzLjk2MDUwNyAzMC4yMDE1MTkgMzAuMjAxNTE5IDAgMCAwIDEyLjk2MjAyNiAyMC43MzkyNCAyNy4zNDk4NzMgMjcuMzQ5ODczIDAgMCAwIDE1LjY4NDA1IDQuOTI1NTdsNi40ODEwMTMtMC43Nzc3MjJhMjkuMDM0OTM3IDI5LjAzNDkzNyAwIDAgMCAxNy44ODc1OTUtMTIuMDU0NjgzIDMwLjU5MDM4IDMwLjU5MDM4IDAgMCAwIDQuNjY2MzI5LTIyLjI5NDY4NCAxMDguMzYyNTMyIDEwOC4zNjI1MzIgMCAwIDAtMzQuODY3ODQ4LTYzLjY0MzU0NCAxMjMuOTE2OTYyIDEyMy45MTY5NjIgMCAwIDAtODIuODI3MzQyLTI2Ljk2MTAxMyAxMTcuNDM1OTQ5IDExNy40MzU5NDkgMCAwIDAtOTQuMjMzOTI0IDQyLjkwNDMwNCAxNjMuNDUxMTM5IDE2My40NTExMzkgMCAwIDAtMzYuNDIzMjkxIDExMC4wNDc1OTV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2NDY3Ij48L3BhdGg+PHBhdGggZD0iTTk3Mi4xNTE4OTkgNDg2LjIwNTU3SDc4MC40NDM1NDRWNTEuODQ4MTAxYTUxLjg0ODEwMSA1MS44NDgxMDEgMCAwIDAtNTEuODQ4MTAxLTUxLjJIMjk0LjIzNzk3NWE1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAwLTUxLjIgNTEuODQ4MTAydjQzMy43MDkzNjdINTEuODQ4MTAxYTUxLjg0ODEwMSA1MS44NDgxMDEgMCAwIDAtNTEuMiA1MS44NDgxMDFWOTcyLjE1MTg5OUE1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAwIDUxLjg0ODEwMSAxMDI0aDkyMC4zMDM3OThhNTEuODQ4MTAxIDUxLjg0ODEwMSAwIDAgMCA1MS44NDgxMDEtNTEuODQ4MTAxVjUzNy40MDU1N2E1MS44NDgxMDEgNTEuODQ4MTAxIDAgMCAwLTUxLjg0ODEwMS01MS4yek0yOTQuMjM3OTc1IDUxLjg0ODEwMWg0MzUuMDA1NTY5djQzNC4zNTc0NjlIMjk0LjIzNzk3NXpNNTEuODQ4MTAxIDk3Mi4xNTE4OTlWNTM3LjQwNTU3aDQzNC4zNTc0NjlWOTcyLjE1MTg5OXogbTkyMC4zMDM3OTggMEg1MzcuNDA1NTdWNTM3LjQwNTU3SDk3Mi4xNTE4OTl6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2NDY4Ij48L3BhdGg+PC9zdmc+';

    //元组初始化
    Blockly.Blocks.tuple_create_with = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.tuple_create_with,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_TUPLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    },
                    {
                      "type": "input_value",
                      "name": "val"
                    }
                ],
                "tooltip": "创建元组,元组内容不可修改,数值之间使用逗号隔开",
                colour: QH_Tuple_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //获取元组值
    Blockly.Blocks.tuple_create_with_item = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.tuple_create_with_item,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    },
                    {
                      "type": "input_value",
                      "name": "no"
                    }
                ],
                "tooltip": "获取指定元组位置的值\n负数为倒数,如-1表示元组的倒数第一个",
                colour: QH_Tuple_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //元组切片
    Blockly.Blocks.tuple_slice = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.tuple_slice,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
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
                "tooltip": "指定位置切片,包头不包尾,比如0~2,只包含0和1\n负数表示倒数,如-1表示元组的倒数第一个\n如果结尾是0(输入的),从开始位置到元组结束",
                colour: QH_Tuple_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //元组内置函数
    Blockly.Blocks.tuple_built_in_function = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.tuple_built_in_function,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'sel',
                        options: [[Blockly.Msg.tuple_len,"len"], [Blockly.Msg.tuple_max,"max"], [Blockly.Msg.tuple_min,"min"], [Blockly.Msg.tuple_sum,"sum"]]
                    }
                ],
                "tooltip": "",
                colour: QH_Tuple_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //强转
    Blockly.Blocks.tuple_to_list = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.tuple_to_list,
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
                colour: QH_Tuple_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

