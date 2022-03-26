/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_IOTPRO_COLOR = '#DEB887';


    const coderIconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODI2NDg2MzczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2OCA1NzZ2LTEyOGgxOTJ2MTI4aC0xOTJ6IG0tMTIwLjMyLTI5MC4yNGwxMzYtMTM1LjY4IDkwLjI0IDkwLjI0LTEzNS42OCAxMzZ6TTQ0OCA3NjhoMTI4djE5MmgtMTI4di0xOTJ6IG0wLTcwNGgxMjh2MTkyaC0xMjhWNjR6TTE1MC4wOCA3ODMuNjhsMTM1LjY4LTEzNiA5MC41NiA5MC41Ni0xMzYgMTM1LjY4eiBtMC01NDMuMzZsOTAuMjQtOTAuMjQgMTM2IDEzNS42OC05MC41NiA5MC41NnpNMjU2IDU3Nkg2NHYtMTI4aDE5MnYxMjh6IG02MTcuOTIgMjA3LjY4bC05MC4yNCA5MC4yNC0xMzYtMTM1LjY4IDkwLjU2LTkwLjU2eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNDQ1MiI+PC9wYXRoPjwvc3ZnPg==';

   const motorIconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMzA1NDE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MjEuNiAzMzIuOGgtNTEuMmMtNi42IDAtMTMgMC42LTE5LjMgMS44LTIwLjctMjguNy01NC41LTUzLTgzLjEtNTNINTEyVjEyOGMwLTI4LjMtMjIuOS01MS4yLTUxLjItNTEuMmgtMjU2Yy0yOC4zIDAtNTEuMiAyMi45LTUxLjIgNTEuMnYxNTMuNmMtMjcuNSAwLTU5LjggMjIuNC04MC42IDQ5LjctNS4xLTEuNS0xMC41LTIuMy0xNi4xLTIuM0MyNS41IDMyOC45IDAgMzU0LjQgMCAzODUuOHYzNDkuOWMwIDMxLjQgMjUuNSA1Ni45IDU2LjkgNTYuOSAzLjUgMCA2LjgtMC4yIDkuOC0wLjcgMTguMyAzMi42IDUwLjEgNjIuNSA3OS42IDYyLjVoMi41bC00Ni40IDkyLjdoNzY4bC01MS4yLTEwMi40aC0yLjFjNC40LTIuNCA4LjYtNS4yIDEyLjctOC40IDEyLjUgNS40IDI2LjIgOC40IDQwLjYgOC40aDUxLjJjNTYuNiAwIDEwMi40LTQ1LjggMTAyLjQtMTAyLjRWNDM1LjJjMC01Ni42LTQ1LjgtMTAyLjQtMTAyLjQtMTAyLjR6TTQwOS42IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yIDIyLjktNTEuMiA1MS4yLTUxLjJ6TTI1NiAxMjhjMjguMyAwIDUxLjIgMjIuOSA1MS4yIDUxLjJzLTIyLjkgNTEuMi01MS4yIDUxLjItNTEuMi0yMi45LTUxLjItNTEuMlMyMjcuNyAxMjggMjU2IDEyOHogbTUxMiA2NjUuNkgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZWNjQwSDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OFYzODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjkyOCI+PC9wYXRoPjwvc3ZnPg==';

   const IOT_PRO_io_IconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODI3NTAxNzg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyMTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyMi40IDgyMS4xSDQxMy41Yy00Ni42IDAtODQuNS0zNy45LTg0LjUtODQuNXYtNC44YzAtMTEuMi05LjEtMjAuMi0yMC4zLTIwLjJIMjI1Yy04NC4yIDAtMTU1LjQtNjguNi0xNTUuNC0xNDkuOVYzMzguNWMwLTc0LjEgNjAuMy0xMzQuNCAxMzQuNC0xMzQuNGg2MTEuNWM3NC4xIDAgMTM0LjQgNjAuMyAxMzQuNCAxMzQuNHYyMzguN2MwIDc0LjEtNjAuMyAxMzQuNC0xMzQuNCAxMzQuNEg3MjdjLTExLjIgMC0yMC4zIDkuMS0yMC4zIDIwLjJ2NC44YzAuMiA0Ni42LTM3LjcgODQuNS04NC4zIDg0LjV6TTIwNC4xIDI0NS40Yy01MS4zIDAtOTMuMSA0MS43LTkzLjEgOTN2MjIzLjFjMCA1Ny44IDUzLjMgMTA4LjYgMTE0LjEgMTA4LjZoODMuN2MzMy45IDAgNjEuNiAyNy42IDYxLjYgNjEuNnY0LjhjMCAyMy44IDE5LjQgNDMuMiA0My4yIDQzLjJoMjA4LjljMjMuOCAwIDQzLjItMTkuNCA0My4yLTQzLjJ2LTQuOGMwLTMzLjkgMjcuNi02MS42IDYxLjYtNjEuNmg4OC41YzUxLjMgMCA5My4xLTQxLjcgOTMuMS05My4xVjMzOC41YzAtNTEuMy00MS43LTkzLTkzLjEtOTNIMjA0LjF6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI5MjExIj48L3BhdGg+PHBhdGggZD0iTTc1MyA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNINzUzYy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjggMi4zIDUgNSA1ek01NjkuMiA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNoLTUuN2MtMi44IDAtNSAyLjItNSA1djc1YzAgMi44IDIuMiA1IDUgNXpNMzg1LjkgNDEzLjloNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zaC01LjdjLTIuOCAwLTUgMi4yLTUgNXY3NWMwIDIuOCAyLjIgNSA1IDV6TTIwMiA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNIMjAyYy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjggMi4zIDUgNSA1ek03NTMgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zSDc1M2MtMi44IDAtNSAyLjItNSA1djc1YzAgMi43IDIuMyA1IDUgNXpNNTY5LjIgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zaC01LjdjLTIuOCAwLTUgMi4yLTUgNXY3NWMwIDIuNyAyLjIgNSA1IDV6TTM4NS45IDU3MC4zaDc1YzIuOCAwIDUtMi4yIDUtNXYtNS43YzAtNDEtMzMuMi03NC4zLTc0LjMtNzQuM2gtNS43Yy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjcgMi4yIDUgNSA1ek0yMDIgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zSDIwMmMtMi44IDAtNSAyLjItNSA1djc1YzAgMi43IDIuMyA1IDUgNXoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjkyMTIiPjwvcGF0aD48L3N2Zz4=';

   const IOT_PRO_patrol_line_IconUrl ='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyIvPgogPC9kZWZzPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGlkPSJzdmdfMSIgZD0ibTEyODAsNjE0LjRjMCwtMzIgLTMyLC02NCAtNjQsLTY0Yy0zOC40LDAgLTY0LDMyIC02NCw2NGMwLDQ0LjggLTEyLjgsMTcyLjggLTcwLjQsMjM2LjhjLTMyLDMyIC03MC40LDQ0LjggLTEyMS42LDQ0LjhjLTg5LjYsMCAtMTUzLjYsLTI0My4yIC0yMDQuOCwtNDE2Yy02NCwtMjQ5LjYgLTEyOCwtNDgwIC0yOTQuNCwtNDgwYy0yMzYuOCwwIC0zNDUuNiwzNjQuOCAtNDE2LDYwMS42Yy0xMi44LDUxLjIgLTI1LjYsOTYgLTM4LjQsMTIxLjZjLTEyLjgsMzIgNi40LDcwLjQgMzguNCw4My4yYzMyLDEyLjggNzAuNCwtNi40IDgzLjIsLTM4LjRjMTIuOCwtMzIgMjUuNiwtNzYuOCA0NC44LC0xMzQuNGM0NC44LC0xNzIuOCAxNDcuMiwtNTA1LjYgMjg4LC01MDUuNmM3MC40LDAgMTM0LjQsMjMwLjQgMTc5LjIsMzg0YzcwLjQsMjQ5LjYgMTQwLjgsNTEyIDMyNi40LDUxMmM4My4yLDAgMTUzLjYsLTI1LjYgMjA0LjgsLTgzLjJjMTE1LjIsLTEyMS42IDEwOC44LC0zMjAgMTA4LjgsLTMyNi40eiIvPgogPC9nPgo8L3N2Zz4=';


    //电机运行
    Blockly.Blocks.IOT_PRO_MOTOR_RUN = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_MOTOR_RUN,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }     
                ],
                "tooltip": "IOT_PRO电机控制，-255~255 正数为正转，负数为反转，0为停止。",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //电机刹车
    Blockly.Blocks.IOT_PRO_MOTOR_BRAKE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_MOTOR_BRAKE,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    }  
                ],
                "tooltip": "IOT_PRO电机控制",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //电机编码暂停计数
    Blockly.Blocks.IOT_PRO_ENCODER_PAUSE_COUNT = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_ENCODER_PAUSE_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: coderIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.RESUME_COUNT,"resumeCount()"],[Blockly.Msg.PAUSE_COUNT,"pauseCount()"],[Blockly.Msg.CLEAR_COUNT,"clearCount()"]]
                    }      
                ],
                "tooltip": "IOT-Pro电机编码器计数/暂停/清除计数",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //电机编码获取计数值
    Blockly.Blocks.IOT_PRO_ENCODER_GET_COUNT = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_ENCODER_GET_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: coderIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    }        
                ],
                "tooltip": "IOT-Pro电机编码器获取计数值,返回int64_t类型数据,在打印输出和运算中请注意此数据类型,arduino无法直接打印此类型,注意数据转换。",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //IO数字输出
    Blockly.Blocks.IOT_PRO_IO_DIGITAL_WRITE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_IO_DIGITAL_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_io_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[["D0","0"],["D1","1"],["D2","2"],["D3","3"],["D4","4"],["D5","5"],["D6","6"],["D7(KEY)","7"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options:[['HIGH',"HIGH"], ['LOW',"LOW"]]
                    }      
                ],
                "tooltip": "D0~D7只能设置为数字输入或输出",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //IO数字输入
    Blockly.Blocks.IOT_PRO_IO_DIGITAL_READ = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_IO_DIGITAL_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_io_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[["D0","0"],["D1","1"],["D2","2"],["D3","3"],["D4","4"],["D5","5"],["D6","6"],["D7(KEY)","7"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[Blockly.Msg.IOT_PRO_IO_INPUT,"1"], [Blockly.Msg.IOT_PRO_IO_PULLUP,"2"]]
                    }        
                ],
                "tooltip": "D0~D7只能设置为数字输入或输出,可选内部上拉输入",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };



    //获取巡线传感器状态
    Blockly.Blocks.IOT_PRO_GET_LINESENSOR_STATE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_GET_LINESENSOR_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_patrol_line_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: "field_checkbox",
                        name: "D1",
                    },
                    {
                        type: "field_checkbox",
                        name: "D2",
                    },
                    {
                        type: "field_checkbox",
                        name: "D3",
                    },       
                    {
                        type: "field_checkbox",
                        name: "D4",
                    },
                    {
                        type: "field_checkbox",
                        name: "D5",
                    },
                ],
                "tooltip": "勾选对应功能为ON时，主控板D0~D4对应接传感器D1~D5,如果状态符合返回True.否则返回False.碰撞传感器可以使用数字读取块读取状态,",
                colour: QH_IOTPRO_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
