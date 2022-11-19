/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_MP3_color = '#b766ad';
   
    const QH_MP3_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNzUzNDMzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4MDc2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NzQuNjY2NjY3IDEwMjRoLTcyNS4zMzMzMzRDNjYuOTg2NjY3IDEwMjQgMCA5NTcuMDEzMzMzIDAgODc0LjY2NjY2N3YtNzI1LjMzMzMzNEMwIDY2Ljk4NjY2NyA2Ni45ODY2NjcgMCAxNDkuMzMzMzMzIDBoNzI1LjMzMzMzNEM5NTcuMDEzMzMzIDAgMTAyNCA2Ni45ODY2NjcgMTAyNCAxNDkuMzMzMzMzdjcyNS4zMzMzMzRjMCA4Mi4zNDY2NjctNjYuOTg2NjY3IDE0OS4zMzMzMzMtMTQ5LjMzMzMzMyAxNDkuMzMzMzMzek0xNDkuMzMzMzMzIDQyLjY2NjY2N0ExMDYuNzk0NjY3IDEwNi43OTQ2NjcgMCAwIDAgNDIuNjY2NjY3IDE0OS4zMzMzMzN2NzI1LjMzMzMzNEM0Mi42NjY2NjcgOTMzLjUwNCA5MC41Mzg2NjcgOTgxLjMzMzMzMyAxNDkuMzMzMzMzIDk4MS4zMzMzMzNoNzI1LjMzMzMzNGM1OC43OTQ2NjcgMCAxMDYuNjY2NjY3LTQ3LjgyOTMzMyAxMDYuNjY2NjY2LTEwNi42NjY2NjZ2LTcyNS4zMzMzMzRDOTgxLjMzMzMzMyA5MC40OTYgOTMzLjQ2MTMzMyA0Mi42NjY2NjcgODc0LjY2NjY2NyA0Mi42NjY2NjdoLTcyNS4zMzMzMzR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI0ODA3NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgOTM4LjY2NjY2N0MyNzYuNzM2IDkzOC42NjY2NjcgODUuMzMzMzMzIDc0Ny4yNjQgODUuMzMzMzMzIDUxMlMyNzYuNzM2IDg1LjMzMzMzMyA1MTIgODUuMzMzMzMzczQyNi42NjY2NjcgMTkxLjQwMjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjQwMjY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjcgNDI2LjY2NjY2N3ogbTAtODEwLjY2NjY2N2MtMjExLjcxMiAwLTM4NCAxNzIuMjQ1MzMzLTM4NCAzODRzMTcyLjI4OCAzODQgMzg0IDM4NCAzODQtMTcyLjI0NTMzMyAzODQtMzg0LTE3Mi4yODgtMzg0LTM4NC0zODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI0ODA3OCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNzI1LjMzMzMzM2MtMTE3LjYzMiAwLTIxMy4zMzMzMzMtOTUuNzAxMzMzLTIxMy4zMzMzMzMtMjEzLjMzMzMzM3M5NS43MDEzMzMtMjEzLjMzMzMzMyAyMTMuMzMzMzMzLTIxMy4zMzMzMzMgMjEzLjMzMzMzMyA5NS43MDEzMzMgMjEzLjMzMzMzMyAyMTMuMzMzMzMzLTk1LjcwMTMzMyAyMTMuMzMzMzMzLTIxMy4zMzMzMzMgMjEzLjMzMzMzM3ogbTAtMzg0Yy05NC4xMjI2NjcgMC0xNzAuNjY2NjY3IDc2LjU0NC0xNzAuNjY2NjY3IDE3MC42NjY2NjdzNzYuNTQ0IDE3MC42NjY2NjcgMTcwLjY2NjY2NyAxNzAuNjY2NjY3IDE3MC42NjY2NjctNzYuNTQ0IDE3MC42NjY2NjctMTcwLjY2NjY2Ny03Ni41NDQtMTcwLjY2NjY2Ny0xNzAuNjY2NjY3LTE3MC42NjY2Njd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI0ODA3OSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjUuNDA4IDgxOS45NjhhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS0xNS4xMDQtMzYuMzk0NjY3bDE0Ni41Ni0xNDYuNjAyNjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzAuMTY1MzMzIDMwLjE2NTMzM2wtMTQ2LjU2IDE0Ni42MDI2NjdhMjEuMjQ4IDIxLjI0OCAwIDAgMS0xNS4wNjEzMzMgNi4yMjkzMzN6TTY1MC42NjY2NjcgMzk0LjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTE1LjEwNC0zNi4zOTQ2NjdsMTQ3LjkyNTMzMy0xNDcuOTY4YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzAuMTY1MzMzIDMwLjE2NTMzM2wtMTQ3LjkyNTMzMyAxNDcuOTY4YTIxLjI0OCAyMS4yNDggMCAwIDEtMTUuMDYxMzMzIDYuMjI5MzM0ek03OTguNTkyIDgxOS45NjhhMjEuNDE4NjY3IDIxLjQxODY2NyAwIDAgMS0xNS4xMDQtNi4yMjkzMzNsLTE0Ni41Ni0xNDYuNjAyNjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzAuMTY1MzMzLTMwLjE2NTMzM2wxNDYuNTYgMTQ2LjYwMjY2NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTE1LjA2MTMzMyAzNi4zOTQ2Njd6TTM3My4zMzMzMzMgMzk0LjY2NjY2N2EyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzNEwyMTAuMzA0IDI0MC40NjkzMzNhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAzMC4xNjUzMzMtMzAuMTY1MzMzbDE0Ny45MjUzMzQgMTQ3Ljk2OGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTE1LjA2MTMzNCAzNi4zOTQ2Njd6TTQ0OCA2MTguNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtMjEuMzMzMzMzLTIxLjMzMzMzNHYtMTcwLjY2NjY2NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDMxLjkxNDY2Ni0xOC41NmwxNDkuMzMzMzM0IDg1LjMzMzMzM2EyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxIDAgMzcuMTJsLTE0OS4zMzMzMzQgODUuMzMzMzMzYTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtMTAuNTgxMzMzIDIuNzczMzM0eiBtMjEuMzMzMzMzLTE1NS4yNjR2OTcuMTUyTDU1NC4zMjUzMzMgNTEyIDQ2OS4zMzMzMzMgNDYzLjQwMjY2N3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQ4MDgwIj48L3BhdGg+PC9zdmc+";

    var qdprobotESP32_LR_PIN_Output_Dropdown = [
    ['.P3-L-21（SDA）','21'],
    ['.P3-R-22（SCL）','22'],
    ['.P4-L-16','16'],
    ['.P4-R-17（RGB）','17'],
    ['.P5-L-18','18'],
    ['.P5-R-5','5'],
    ['.P6-L-23','6'],
    ['.P6-R-19','19'],
    ['.P7-L-15（touch）','15'],
    ['.P7-R-2','2'],
    ['.P8-L-27（touch）','27'],
    ['.P8-R-14（touch）','14'],
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P10-L-25','25'],
    ['.P10-R-26','26']
    ];


    Blockly.Blocks.mpy_esp32_Mp3_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'uart',
                        options:[['uart1','1'],['uart2','2']]
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'tx',
                        options:qdprobotESP32_LR_PIN_Output_Dropdown
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'rx',
                        options:qdprobotESP32_LR_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_vol_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_vol_change,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'vol',
                        options:[[Blockly.Msg.inc_vol,'inc_vol'],[Blockly.Msg.dec_vol,'dec_vol']]
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_vol_set = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_vol_set,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'vol'
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_vol_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_vol_change,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'vol',
                        options:[[Blockly.Msg.inc_vol,'inc_vol'],[Blockly.Msg.dec_vol,'dec_vol']]
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_set_EQ = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_set_EQ,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.Normal,'0'],[Blockly.Msg.Pop,'1'],[Blockly.Msg.Rock,'2'],[Blockly.Msg.Jazz,'3'],[Blockly.Msg.Classic,'4'],[Blockly.Msg.Bass,'5']]
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_prev_next_track = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_prev_next_track,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.prev_track,'prev_track'],[Blockly.Msg.next_track,'next_track']]
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_cycle_singles = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_cycle_singles,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'num'
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpy_esp32_Mp3_play_pause_stop = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpy_esp32_Mp3_play_pause_stop,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MP3_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.play,'play'],[Blockly.Msg.pause,'pause'],[Blockly.Msg.stop,'stop'],[Blockly.Msg.enable_loop,'enable_loop'],[Blockly.Msg.disable_loop,'disable_loop'],[Blockly.Msg.random_play,'random_play']]
                    }
                ],
                "tooltip": "",
                colour: QH_MP3_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


