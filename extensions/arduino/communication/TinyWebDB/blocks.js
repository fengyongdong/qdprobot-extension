/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_DATABASE_COLOR = '#5b67a5'
    const QH_DATABASE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODAxMjEwNzY2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5NDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA5NmwxMi4yODggMC4wNjRDNzQ4LjczNiA5OC4xMTIgOTI4IDE1Ni44NjQgOTI4IDI1MnY1MjBDOTI4IDg2OC44NjQgNzQyLjE3NiA5MjggNTEyIDkyOFM5NiA4NjguODY0IDk2IDc3MlYyNTJDOTYgMTk5LjQ1NiAxNTAuNDY0IDE1OC4wOCAyMzcuMTIgMTMxLjE2OGwxLjkyLTAuNTc2YzQuMzg0LTEuMzQ0IDguODk2LTIuNjU2IDEzLjQ0LTMuOTM2bDMuOTM2LTEuMDg4YTU4Ni40IDU4Ni40IDAgMCAxIDE5LjI5Ni00LjkyOGM1LjQ0LTEuMjggMTEuMDA4LTIuNTYgMTYuNjQtMy43NDQgNTMuNzYtMTEuNTIgMTE1LjY4LTE4LjQ2NCAxODIuMjA4LTIwLjM1MiA4LjQ4LTAuMjU2IDE3LjAyNC0wLjQxNiAyNS42LTAuNDhoMC4xNkw1MTIgOTZ6IG0wIDU3MmMtMTQ0Ljg5NiAwLTI3Mi4yNTYtMjMuNDI0LTM0Ni42ODgtNjQuOTZ2MTY4Ljk2YzAgMTIuMDMyIDI5LjY5NiAzNC4zNjggODcuNTUyIDUyLjc2OCA2Ny4zOTIgMjEuNDQgMTYwIDMzLjkyIDI1OS4xMzYgMzMuOTIgOTkuMTM2IDAgMTkxLjc0NC0xMi40OCAyNTkuMTM2LTMzLjkyIDU3Ljg1Ni0xOC40IDg3LjUyLTQwLjczNiA4Ny41Mi01Mi43NjhsMC4wMzItMTY4Ljk2Yy03NC40MzIgNDEuNTM2LTIwMS43OTIgNjQuOTYtMzQ2LjY4OCA2NC45NnpNODU4LjY4OCAzNDMuMDRjLTc0LjQzMiA0MS41MzYtMjAxLjc5MiA2NC45Ni0zNDYuNjg4IDY0Ljk2cy0yNzIuMjU2LTIzLjQyNC0zNDYuNjg4LTY0Ljk2VjUxMmMwIDEyLjAzMiAyOS42OTYgMzQuMzY4IDg3LjU1MiA1Mi43NjggNjcuMzkyIDIxLjQ0IDE2MCAzMy45MiAyNTkuMTM2IDMzLjkyIDk5LjEzNiAwIDE5MS43NDQtMTIuNDggMjU5LjEzNi0zMy45MiA1NC45NDQtMTcuNTA0IDg0LjQ4LTM4LjUyOCA4Ny4yOTYtNTAuODhsMC4yMjQtMS44ODh6TTUxMiAxNjUuMzQ0bC0xMy4zMTIgMC4wNjRhMTE2OC45NiAxMTY4Ljk2IDAgMCAwLTExLjY0OCAwLjE5MmwxMS42NDgtMC4xOTJjLTUuNzYgMC4wNjQtMTEuNDg4IDAuMTYtMTcuMTg0IDAuMzJsNS41MzYtMC4xMjhjLTQuOTI4IDAuMDk2LTkuNzkyIDAuMjI0LTE0LjY1NiAwLjQxNmw5LjEyLTAuMjg4Yy02LjQzMiAwLjE2LTEyLjg2NCAwLjM4NC0xOS4yMzIgMC42NGwxMC4xMTItMC4zNTJjLTUuMjggMC4xNi0xMC41MjggMC4zODQtMTUuNzEyIDAuNjRsNS42LTAuMjU2Yy00Ljk5MiAwLjE5Mi05Ljk4NCAwLjQ0OC0xNC45MTIgMC43MzZsOS4yOC0wLjQ4Yy03LjUyIDAuMzItMTUuMDQgMC43NjgtMjIuNDY0IDEuMjhsMTMuMTg0LTAuOGMtNC42NCAwLjI1Ni05LjI0OCAwLjU0NC0xMy44MjQgMC44NjRsMC42NC0wLjA2NGMtNC41NzYgMC4zMi05LjEyIDAuNjQtMTMuNjMyIDEuMDI0bDEyLjk5Mi0wLjk2Yy02LjY4OCAwLjQ0OC0xMy4zMTIgMC45Ni0xOS44NzIgMS41MzZsNi44OC0wLjU3NmMtNC4yODggMC4zMi04LjU0NCAwLjcwNC0xMi44IDEuMTJsNS45Mi0wLjU0NGMtNi4wMTYgMC41MTItMTEuOTY4IDEuMDg4LTE3Ljg4OCAxLjcyOGwxMi0xLjE4NGMtNS4zNDQgMC40OC0xMC42NTYgMS4wMjQtMTUuOTA0IDEuNmwzLjkwNC0wLjQxNmMtNS4wMjQgMC41MTItOS45ODQgMS4wODgtMTQuOTEyIDEuNjY0bDExLjAwOC0xLjI4LTE2LjQ0OCAxLjk1MiA1LjQ0LTAuNjRjLTQuNDggMC41MTItOC45NiAxLjA4OC0xMy4zNzYgMS42OTZsNy45MzYtMS4wNTZjLTYuMDggMC43NjgtMTIuMDMyIDEuNi0xNy45MiAyLjQ2NGw5Ljk4NC0xLjQwOGMtNC44OTYgMC42NC05LjcyOCAxLjM0NC0xNC41MjggMi4wOGw0LjUxMi0wLjY3MmMtNC4zNTIgMC42NC04LjY0IDEuMjgtMTIuOTI4IDEuOTg0bDguNDE2LTEuMzEyYy01Ljk1MiAwLjg5Ni0xMS44NCAxLjg1Ni0xNy42NjQgMi44OGw5LjI4LTEuNTY4LTEzLjY5NiAyLjMzNiA0LjQxNi0wLjc2OGE3ODAuOCA3ODAuOCAwIDAgMC0xNC4xNzYgMi41Nmw5Ljc2LTEuNzkyYy00LjggMC44NjQtOS42IDEuNzkyLTE0LjMwNCAyLjcybDQuNTQ0LTAuODk2Yy00Ljc2OCAwLjkyOC05LjQ3MiAxLjg4OC0xNC4xMTIgMi44OGw5LjU2OC0xLjk4NGMtNC44NjQgMC45Ni05LjY2NCAxLjk4NC0xNC40IDMuMDA4bDQuODMyLTEuMDI0Yy00LjE2IDAuODY0LTguMjU2IDEuNzkyLTEyLjI4OCAyLjcybDcuNDU2LTEuNjk2Yy00LjY0IDEuMDI0LTkuMTg0IDIuMDgtMTMuNjk2IDMuMmw2LjI0LTEuNTA0Yy00LjQ0OCAxLjA1Ni04LjggMi4xMTItMTMuMTIgMy4ybDYuODgtMS42OTZjLTQuNDggMS4wODgtOC44NjQgMi4yMDgtMTMuMTg0IDMuMzZsNi4zMzYtMS42NjRjLTMuOTM2IDEuMDI0LTcuNzc2IDIuMDQ4LTExLjU1MiAzLjEwNGw1LjIxNi0xLjQ0Yy00LjM1MiAxLjE4NC04LjY0IDIuMzY4LTEyLjggMy42MTZsLTcuMTA0IDIuMTc2LTMuMzYgMS4wNTZhNDIyLjA4IDQyMi4wOCAwIDAgMC0xNi45NiA1LjgyNGw0LjM4NC0xLjYtNi40IDIuMzM2IDIuMDE2LTAuNzM2LTYuMzM2IDIuNCA0LjMyLTEuNjY0LTcuMTM2IDIuNzg0IDIuODE2LTEuMTItNi41NiAyLjYyNCAzLjc0NC0xLjUwNGMtMi40MzIgMC45Ni00Ljc2OCAxLjkyLTcuMDQgMi44OGwzLjI5Ni0xLjM3NmEzMDcuNzEyIDMwNy43MTIgMCAwIDAtNS41MDQgMi4zNjhsMi4yNC0wLjk2Yy0yLjI0IDAuOTI4LTQuMzUyIDEuODU2LTYuNCAyLjgxNmw0LjE2LTEuODU2LTYuMjA4IDIuNzg0IDIuMDQ4LTAuOTZhMjYyLjMwNCAyNjIuMzA0IDAgMCAwLTUuMjggMi40OTZsMy4yMzItMS41MzZjLTIzLjM5MiAxMC45NDQtMzcuNzYgMjEuODI0LTQyLjk0NCAzMC4xNDRhMTIuMjU2IDEyLjI1NiAwIDAgMC0yLjE3NiA2LjMzNmMwIDEyLjAzMiAyOS42NjQgMzQuMzY4IDg3LjUyIDUyLjc2OCA2Ny4zOTIgMjEuNDQgMTYwIDMzLjkyIDI1OS4xMzYgMzMuOTIgOTkuMTM2IDAgMTkxLjc0NC0xMi40OCAyNTkuMTM2LTMzLjkyIDU3Ljg1Ni0xOC40IDg3LjUyLTQwLjczNiA4Ny41Mi01Mi43NjggMC0xMi4wMzItMjkuNjY0LTM0LjM2OC04Ny41Mi01Mi43NjgtNjcuMzkyLTIxLjQ0LTE2MC0zMy45Mi0yNTkuMTM2LTMzLjkyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTk1MCI+PC9wYXRoPjwvc3ZnPg==';

    //网络微数据库初始化
    Blockly.Blocks.QDP_network_microdatabase_initialization = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_network_microdatabase_initialization,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DATABASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "ssid"
                    },
                    {
                      type: "input_value",
                      name: "pass"
                    }
                ],
                "tooltip": "网络微数据库初始化",
                colour:QH_DATABASE_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //网络微数据库初始化
    Blockly.Blocks.QDP_web_microdatabase_update_tags = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_web_microdatabase_update_tags,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DATABASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "tag"
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "网络微数据库 更新标签",
                colour:QH_DATABASE_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //网络微数据库 删除标签
    Blockly.Blocks.QDP_web_microdatabase_delete_tags = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_web_microdatabase_delete_tags,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DATABASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "tag"
                    }
                ],
                "tooltip": "网络微数据库 删除标签",
                colour:QH_DATABASE_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //网络微数据库 获取标签的值
    Blockly.Blocks.QDP_web_microdatabase_get_tags = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_web_microdatabase_get_tags,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DATABASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "tag"
                    }
                ],
                "tooltip": "网络微数据库 获取标签的值(返回字符串)",
                colour:QH_DATABASE_COLOR,
                extensions: ['output_number']
            });
        }
    };

    //网络微数据库 查询标签数
    Blockly.Blocks.QDP_web_microdatabase_count_tags = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_web_microdatabase_count_tags,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_DATABASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "网络微数据库 查询标签数(返回字符串)",
                colour:QH_DATABASE_COLOR,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;