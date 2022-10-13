/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_SPEECH_color = '#a5675b';

    const QH_SPEECH_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNDU3MTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxNTc5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yOTYuNjI3IDU5LjUyNmMtMTkuMTg4LTMyLjMxOS01My41MjktNTEuNTEtOTAuODk5LTUxLjUxaC0xMzYuMzQ5Yy0xNC4xNDEgMC0yNS4yNDkgMTEuMTA5LTI1LjI0OSAyNS4yNDlzMTEuMTA5IDI1LjI0OSAyNS4yNDkgMjUuMjQ5aDEzNi4zNDljMTkuMTg4IDAgMzcuMzcgMTAuMSA0Ny40NyAyNy4yN2wxODUuODM3IDMxNC4xMDZjMTAuMSAxNy4xNjkgMTAuMSAzOC4zNzkgMCA1Ni41Ni0xMC4xIDE3LjE2OS0yOC4yNzggMjcuMjctNDkuNDkgMjcuMjdoLTExLjEwOWMtNy4wNjkgMC0xMy4xMyAyLjAyMC0xOC4xOCA3LjA2OS01LjA1MCA1LjA1MC04LjA3OSAxMS4xMDktOC4wNzkgMTguMTh2MTA5LjA3N2gtMTQyLjQwN2MtMTQuMTQxIDAtMjUuMjQ5IDExLjEwOS0yNS4yNDkgMjUuMjQ5czExLjEwOSAyNS4yNDkgMjUuMjQ5IDI1LjI0OWgxNDQuNDI5djYzLjYyOWMwIDMwLjI5OS0yNS4yNDkgNTUuNTUtNTUuNTUgNTUuNTVoLTc4Ljc3OGMtNTguNTc5IDAtMTA2LjA0OCA0Ny40Ny0xMDYuMDQ4IDEwNi4wNDh2ODguODc5YzAgMTQuMTQxIDExLjEwOSAyNS4yNDkgMjUuMjQ5IDI1LjI0OXMyNS4yNDktMTEuMTA5IDI1LjI0OS0yNS4yNDl2LTg4Ljg3OWMwLTMwLjI5OSAyNS4yNDktNTUuNTUgNTUuNTUtNTUuNTVoNzguNzc4YzU4LjU3OSAwIDEwNi4wNDgtNDcuNDcgMTA2LjA0OC0xMDYuMDQ4di0xOTguOTY2YzMzLjMyOS00LjA0MSA2MS42MDktMjIuMjIgNzguNzc4LTUxLjUxIDE5LjE4OC0zMy4zMjkgMTkuMTg4LTczLjcyOSAwLTEwNy4wNThsLTE4Ni44NDctMzE1LjExN3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQxNTgwIj48L3BhdGg+PHBhdGggZD0iTTEyOS45NzkgMzAxLjkyM2MwIDAgMCAwIDAgMCAwIDMzLjQ2OCAyNy4xMzEgNjAuNjAxIDYwLjYwMSA2MC42MDEgMzMuNDY4IDAgNjAuNjAxLTI3LjEzMSA2MC42MDEtNjAuNjAxIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAtMzMuNDY4LTI3LjEzMS02MC42MDEtNjAuNjAxLTYwLjYwMS0zMy40NjggMC02MC42MDEgMjcuMTMxLTYwLjYwMSA2MC42MDFzMCAwIDAgMHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQxNTgxIj48L3BhdGg+PHBhdGggZD0iTTY0OC4xMDIgNTM2LjIzOGMtMTAuMSAxMC4xLTEwLjEgMjYuMjU5IDAgMzUuMzQ5IDM5LjM5MSAzOS4zOTEgMzkuMzkxIDEwMy4wMTkgMCAxNDIuNDA3LTEwLjEgMTAuMS0xMC4xIDI2LjI1OSAwIDM1LjM0OSA1LjA1MCA1LjA1MCAxMS4xMDkgNy4wNjkgMTguMTggNy4wNjlzMTMuMTMtMi4wMjAgMTguMTgtNy4wNjljNTguNTc5LTU4LjU3OSA1OC41NzktMTU0LjUyOSAwLTIxMy4xMDctMTEuMTA5LTEwLjEtMjcuMjctMTAuMS0zNi4zNTcgMHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQxNTgyIj48L3BhdGg+PHBhdGggZD0iTTc3My4zNCA0NDkuMzhjLTEwLjEtMTAuMS0yNi4yNTktMTAuMS0zNS4zNDkgMC0xMC4xIDEwLjEtMTAuMSAyNi4yNTkgMCAzNS4zNDkgODYuODU5IDg2Ljg1OSA4Ni44NTkgMjI4LjI1NyAwIDMxNS4xMTctMTAuMSAxMC4xLTEwLjEgMjYuMjU5IDAgMzUuMzQ5IDUuMDUwIDUuMDUwIDExLjEwOSA3LjA2OSAxOC4xOCA3LjA2OXMxMy4xMy0yLjAyMCAxOC4xOC03LjA2OWMxMDUuMDM5LTEwNS4wMzkgMTA1LjAzOS0yNzguNzU0LTEuMDA5LTM4NS44MTR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI0MTU4MyI+PC9wYXRoPjxwYXRoIGQ9Ik04NjEuMjA4IDM1OC40ODJjLTEwLjEtMTAuMS0yNi4yNTktMTAuMS0zNS4zNDkgMC0xMC4xIDEwLjEtMTAuMSAyNi4yNTkgMCAzNS4zNDkgMTM3LjM1OCAxMzcuMzU4IDEzNy4zNTggMzYwLjU2NSAwIDQ5Ny45MjMtMTAuMSAxMC4xLTEwLjEgMjYuMjU5IDAgMzUuMzQ5IDUuMDUwIDUuMDUwIDExLjEwOSA3LjA2OSAxOC4xOCA3LjA2OXMxMy4xMy0yLjAyMCAxOC4xOC03LjA2OWMxNTYuNTQ3LTE1Ni41NDcgMTU2LjU0Ny00MTIuMDc1LTEuMDA5LTU2OC42MjJ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI0MTU4NCI+PC9wYXRoPjwvc3ZnPg==";

    const k210_digital_pin = [['P0','0'],['P1','1'],['P2','2'],['P3','3'],['P4','4'],['P5','5'],['P6','6'],['P7','7'],['P8','8'],['P9','9']];

    var Esp32_HardWareSerial_Dropdown = [['Serial_1','1'],
    ['Serial_2','2']];
   

    //语音合成初始化
    Blockly.Blocks.PY_qdp_esp32_QF_hc_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_QF_hc_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPEECH_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options: Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'tx',
                        options: k210_digital_pin
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rx',
                        options: k210_digital_pin
                    }
                ],
                "tooltip": "初始化语音合成/识别模块",
                colour: QH_SPEECH_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //QF合成
    Blockly.Blocks.PY_qdp_esp32_QF_hc = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_QF_hc,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPEECH_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN33',
                        options: [['女音1', "[m3]"],['男音1', "[m51]"],['男音2', "[m52]"],['女音2', "[m53]"],['唐老鸭', "[m54]"],['女童声', "[m55]"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN44',
                        options: [[(Blockly.Msg.QH_Donotinterrupt), "1"],[(Blockly.Msg.QH_Interruptible), "0"]]
                    },
                    {
                        type: 'input_value',
                        name: 'num'
                    },
                    {
                        type: 'input_value',
                        name: 'num2'
                    },
                    {
                        type: 'input_value',
                        name: 'num3'
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                "tooltip": '支持中文或中文变量字符串,英文或符号！',
                colour: QH_SPEECH_color,
                extensions: ['shape_statement']
            });
        }
    };

    //QF提示音
    Blockly.Blocks.PY_qdp_esp32_QF_sound = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_QF_sound,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPEECH_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['信息声', "1"],['铃声', "2"],['警报声', "3"]]
                    },
                    {
                        type: 'input_value',
                        name: 'num1'
                    }
                ],
                "tooltip": "此为串口运行设备,合成模块中发出指定的提示音,注:编号一定要为两位的数值,个位数时要加0\n可以用“停止合成”块终止它",
                colour: QH_SPEECH_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    //QF停止合成
    Blockly.Blocks.PY_qdp_esp32_QF_stophc = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_QF_stophc,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SPEECH_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": '停止合成',
                colour: QH_SPEECH_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;


