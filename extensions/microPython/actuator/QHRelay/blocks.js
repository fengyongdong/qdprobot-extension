/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#5874DC';
   
    const QH_RELAY_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyOTQ5NTM2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2Mzk1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yODEuOTEzIDQ0Mi4zNzZjMC05LjQ2OS01LjY4Mi0xNy45ODktMTQuMjAyLTIxLjc3OGwtOTQuNjg2LTQzLjU1NiAzMy4xNC0xNi4wOTZjOC41MjItMy43ODggMTMuMjU3LTEyLjMwOSAxMy4yNTctMjAuODMxdi0yODUuOTUyYzAtMTMuMjU3LTEwLjQxNS0yMy42NzEtMjMuNjcxLTIzLjY3MXMtMjMuNjcxIDEwLjQxNS0yMy42NzEgMjMuNjcxdjI2OS44NTZsLTY0LjM4NyAzMS4yNDZjLTguNTIyIDMuNzg4LTEzLjI1NyAxMi4zMDktMTMuMjU3IDIxLjc3OHM1LjY4MiAxNy4wNDQgMTQuMjAyIDIwLjgzMWw5My43MzggNDMuNTU2LTkzLjczOCA0My41NTZjLTguNTIyIDMuNzg4LTE0LjIwMiAxMi4zMDktMTQuMjAyIDIxLjc3OHM1LjY4MiAxNy45ODkgMTQuMjAyIDIxLjc3OGw5My43MzggNDMuNTU2LTkzLjczOCA0My41NTZjLTguNTIyIDMuNzg4LTE0LjIwMiAxMi4zMDktMTQuMjAyIDIxLjc3OHM1LjY4MiAxNy45ODkgMTQuMjAyIDIxLjc3OGw2NC4zODcgMjkuMzUzdjI3MS43NWMwIDEzLjI1NyAxMC40MTUgMjMuNjcxIDIzLjY3MSAyMy42NzFzMjMuNjcxLTEwLjQxNSAyMy42NzEtMjMuNjcxdi0yODcuODQ2YzAtOS40NjktNS42ODItMTcuOTg5LTE0LjIwMi0yMS43NzhsLTMxLjI0Ni0xNC4yMDIgOTMuNzM4LTQzLjU1NmM4LjUyMi0zLjc4OCAxNC4yMDItMTIuMzA5IDE0LjIwMi0yMS43NzhzLTUuNjgyLTE3Ljk4OS0xNC4yMDItMjEuNzc4bC05My43MzgtNDMuNTU2IDkzLjczOC00My41NTZjNy41NzQtMi44MzkgMTMuMjU3LTEwLjQxNSAxMy4yNTctMTkuODg0ek03NzUuMjI5IDM4Mi43MjVjMTcuMDQ0IDEwLjQxNSAzNi45MjkgMTcuMDQ0IDU3Ljc1OCAxNy4wNDQgNTkuNjUyIDAgMTA4Ljg4OS00OC4yOTEgMTA4Ljg4OS0xMDguODg5IDAtNTIuMDc4LTM1Ljk4LTk0LjY4Ni04NS4yMTgtMTA2LjA0OHYtMTMwLjY2N2MwLTEzLjI1Ny0xMC40MTUtMjMuNjcxLTIzLjY3MS0yMy42NzFzLTIzLjY3MSAxMC40MTUtMjMuNjcxIDIzLjY3MXYxMzAuNjY3Yy00OC4yOTEgMTAuNDE1LTg1LjIxOCA1My45Ny04NS4yMTggMTA2LjA0OCAwIDIxLjc3OCA2LjYyNyA0MS42NjMgMTcuMDQ0IDU3Ljc1OGwtNzMuODU0IDczLjg1NGMtMTcuOTg5LTE0LjIwMi00MC43MTYtMjEuNzc4LTY1LjMzNC0yMS43NzgtNTMuMDI1IDAtOTcuNTI1IDM4LjgyMi0xMDYuOTk0IDg5Ljk1MmgtMTI3LjgyN2MtMTMuMjU3IDAtMjMuNjcxIDEwLjQxNS0yMy42NzEgMjMuNjcxczEwLjQxNSAyMy42NzEgMjMuNjcxIDIzLjY3MWgxMzAuNjY3YzEyLjMwOSA0Ni4zOTcgNTQuOTE4IDc5LjUzNiAxMDQuMTU1IDc5LjUzNiA1OS42NTIgMCAxMDguODg5LTQ4LjI5MSAxMDguODg5LTEwOC44ODkgMC0xNy45ODktNC43MzQtMzUuMDM0LTEyLjMwOS01MC4xODNsNzYuNjk3LTc1Ljc0OHpNODMyLjk4NiAyMjkuMzM1YzM0LjA4NSAwIDYxLjU0NyAyNy40NTggNjEuNTQ3IDYxLjU0N3MtMjcuNDU4IDYxLjU0Ny02MS41NDcgNjEuNTQ3LTYxLjU0Ny0yNy40NTgtNjEuNTQ3LTYxLjU0N2MwLjk0Ni0zNC4wODUgMjguNDA1LTYxLjU0NyA2MS41NDctNjEuNTQ3ek02MDIuODk4IDU3MC4yMDNjLTM0LjA4NSAwLTYxLjU0Ny0yNy40NTgtNjEuNTQ3LTYxLjU0N3MyNy40NTgtNjEuNTQ3IDYxLjU0Ny02MS41NDcgNjEuNTQ3IDI3LjQ1OCA2MS41NDcgNjEuNTQ3LTI3LjQ1OCA2MS41NDctNjEuNTQ3IDYxLjU0N3pNODMyLjAzOSA2MTguNDk0Yy01OS42NTIgMC0xMDguODg5IDQ4LjI5MS0xMDguODg5IDEwOC44ODkgMCA1Mi4wNzggMzUuOTggOTQuNjg2IDg1LjIxOCAxMDYuMDQ4djEzMC42NjdjMCAxMy4yNTcgMTAuNDE1IDIzLjY3MSAyMy42NzEgMjMuNjcxczIzLjY3MS0xMC40MTUgMjMuNjcxLTIzLjY3MXYtMTMwLjY2N2M0OC4yOTEtMTAuNDE1IDg1LjIxOC01My45NyA4NS4yMTgtMTA2LjA0OCAwLTYwLjU5OS00OC4yOTEtMTA4Ljg4OS0xMDguODg5LTEwOC44ODl6TTgzMi4wMzkgNzg3Ljk4MmMtMzQuMDg1IDAtNjEuNTQ3LTI3LjQ1OC02MS41NDctNjEuNTQ3czI3LjQ1OC02MS41NDcgNjEuNTQ3LTYxLjU0NyA2MS41NDcgMjcuNDU4IDYxLjU0NyA2MS41NDctMjcuNDU4IDYxLjU0Ny02MS41NDcgNjEuNTQ3eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTYzOTYiPjwvcGF0aD48L3N2Zz4=";

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

    //继电器
    Blockly.Blocks.PY_qdp_esp32_relay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_relay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RELAY_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'STAT'
                    }
                ],
                "tooltip": "继电器输出",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //读取继电器状态
    Blockly.Blocks.PY_qdp_esp32_read_relay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_read_relay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RELAY_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "读取继电器状态",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    
    return Blockly;
}

exports = addBlocks;


