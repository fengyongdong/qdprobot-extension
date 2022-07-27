/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#5874DC';
   
    const QH_BUZZER_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMjQ4MDk4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMTU2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNjRDMjY0Ljk2IDY0IDY0IDI2NC45NiA2NCA1MTJzMjAwLjk2IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuOTYgNDQ4LTQ0OFM3NTkuMDQgNjQgNTEyIDY0eiBtMCA4MzJDMzAwLjI1NiA4OTYgMTI4IDcyMy43NDQgMTI4IDUxMlMzMDAuMjU2IDEyOCA1MTIgMTI4czM4NCAxNzIuMjU2IDM4NCAzODQtMTcyLjI1NiAzODQtMzg0IDM4NHoiIHAtaWQ9IjIyMTU3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQwNC45NiA3NzAuNDMyYTI3OC4yMDggMjc4LjIwOCAwIDAgMS05MC42ODgtNjAuNjcyIDI3OC40MzIgMjc4LjQzMiAwIDAgMS02MC43MDQtOTAuNzIgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAzNDEuNiAzNDEuNiAwIDAgMCA3NC41OTIgMTExLjQ1NiAzNDIuMTc2IDM0Mi4xNzYgMCAwIDAgMTExLjQ1NiA3NC41NiAzMS45MzYgMzEuOTM2IDAgMCAwIDQxLjc5Mi0xNy4zMTIgMzEuOTY4IDMxLjk2OCAwIDAgMC0xNy4zMTItNDEuODI0ek0yMTEuNzQ0IDQyMi4yNzJhMzEuODcyIDMxLjg3MiAwIDAgMCA0MS44MjQtMTcuMjggMjc4LjA4IDI3OC4wOCAwIDAgMSA2MC43MDQtOTAuNzIgMjc4LjMwNCAyNzguMzA0IDAgMCAxIDkwLjY4OC02MC43MDQgMzIgMzIgMCAwIDAtMjQuNTEyLTU5LjEzNiAzNDIuMDE2IDM0Mi4wMTYgMCAwIDAtMTExLjQ1NiA3NC41NiAzNDIuMTQ0IDM0Mi4xNDQgMCAwIDAtNzQuNTYgMTExLjQ4OCAzMiAzMiAwIDAgMCAxNy4zMTIgNDEuNzkyek02MTkuMDQgMjUzLjU2OGEyNzguNzg0IDI3OC43ODQgMCAwIDEgOTAuNzIgNjAuNzA0IDI3OC41NiAyNzguNTYgMCAwIDEgNjAuNjcyIDkwLjY4OCAzMiAzMiAwIDEgMCA1OS4xMzYtMjQuNTEyIDM0Mi4xNzYgMzQyLjE3NiAwIDAgMC03NC41Ni0xMTEuNDU2IDM0Mi40MzIgMzQyLjQzMiAwIDAgMC0xMTEuNDU2LTc0LjU5MiAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMiA1OS4xNjh6TTgxMi4yNTYgNjAxLjcyOGEzMi4wOTYgMzIuMDk2IDAgMCAwLTQxLjgyNCAxNy4zMTIgMjc4LjMzNiAyNzguMzM2IDAgMCAxLTYwLjY3MiA5MC43MiAyNzguMzM2IDI3OC4zMzYgMCAwIDEtOTAuNzIgNjAuNjcyIDMyIDMyIDAgMCAwIDI0LjUxMiA1OS4xMzYgMzQyLjE3NiAzNDIuMTc2IDAgMCAwIDExMS40NTYtNzQuNTYgMzQyLjg0OCAzNDIuODQ4IDAgMCAwIDc0LjU2LTExMS40NTYgMzIgMzIgMCAwIDAtMTcuMzEyLTQxLjgyNHpNMzQ4LjU3NiAzNDguNTc2YTIzMC4yMDggMjMwLjIwOCAwIDAgMC01MC4xMTIgNzQuOTQ0IDMyIDMyIDAgMCAwIDU5LjEzNiAyNC41NDQgMTY2Ljc4NCAxNjYuNzg0IDAgMCAxIDM2LjI1Ni01NC4yMDggMTY2LjQgMTY2LjQgMCAwIDEgNTQuMjA4LTM2LjI4OCAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMi01OS4xMzYgMjMwLjU5MiAyMzAuNTkyIDAgMCAwLTc0Ljk3NiA1MC4xNDR6TTU3NS45NjggMzU3LjU2OGMyMC4yODggOC40MTYgMzguNTI4IDIwLjY0IDU0LjE3NiAzNi4yNTZzMjcuODQgMzMuODg4IDM2LjI4OCA1NC4yMDhhMzIgMzIgMCAxIDAgNTkuMTM2LTI0LjU0NCAyMzAuODE2IDIzMC44MTYgMCAwIDAtNTAuMTQ0LTc0Ljk0NCAyMzAuNCAyMzAuNCAwIDAgMC03NC45NDQtNTAuMTEyIDMyIDMyIDAgMSAwLTI0LjUxMiA1OS4xMzZ6TTQ0OC4wMzIgNjY2LjQzMmExNjYuNTYgMTY2LjU2IDAgMCAxLTU0LjIwOC0zNi4yODggMTY2LjkxMiAxNjYuOTEyIDAgMCAxLTM2LjI4OC01NC4xNzYgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAyMzAuNDY0IDIzMC40NjQgMCAwIDAgNTAuMTQ0IDc0Ljk0NCAyMjkuOTUyIDIyOS45NTIgMCAwIDAgNzQuOTQ0IDUwLjE0NCAzMiAzMiAwIDAgMCAyNC41NDQtNTkuMTM2ek02NzUuMzkyIDY3NS4zOTJhMjMwLjE0NCAyMzAuMTQ0IDAgMCAwIDUwLjE0NC03NC45NDQgMzIgMzIgMCAxIDAtNTkuMTM2LTI0LjUxMmMtOC40MTYgMjAuMjg4LTIwLjY0IDM4LjUyOC0zNi4yODggNTQuMTc2cy0zMy45MiAyNy44NzItNTQuMTc2IDM2LjI4OGEzMiAzMiAwIDEgMCAyNC41MTIgNTkuMTM2IDIyOC45NiAyMjguOTYgMCAwIDAgNzQuOTQ0LTUwLjE0NHpNNjQwIDUxMmMwLTcwLjU5Mi01Ny40MDgtMTI4LTEyOC0xMjhzLTEyOCA1Ny40MDgtMTI4IDEyOCA1Ny40MDggMTI4IDEyOCAxMjggMTI4LTU3LjQwOCAxMjgtMTI4eiBtLTEyOCA2NGMtMzUuMjk2IDAtNjQtMjguNzA0LTY0LTY0czI4LjcwNC02NCA2NC02NCA2NCAyOC43MDQgNjQgNjQtMjguNzA0IDY0LTY0IDY0eiIgcC1pZD0iMjIxNTgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    const QH_dht11_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyNjU3NzQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDU4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00NzEuNzUgNjIwLjE4N2MtMTEuNjUxLTkuMTU0LTE3LjQ3Ni0yMS42MzctMTcuNDc2LTM1Ljc4NXYtNDU0LjM4M2MwLTY2LjU3Ni01NC4wOTQtMTIwLjY2OS0xMjAuNjY5LTEyMC42NjlzLTEyMC42NjkgNTQuMDk0LTEyMC42NjkgMTIwLjY2OXY0NTQuMzgzYzAgMTQuMTQ3LTYuNjU3IDI3LjQ2Mi0xOC4zMDggMzYuNjE4LTU0LjkyNSA0NC45MzktODQuODg1IDExMC42ODMtODEuNTU2IDE4Mi4yNTMgNC45OTQgMTEwLjY4MyA5NS43MDMgMjAyLjIyNSAyMDYuMzg2IDIwOS43MTUgNC45OTQgMCA5LjE1NCAwLjgzMiAxNC4xNDcgMC44MzIgNTYuNTkgMCAxMDkuODUyLTIwLjgwNSAxNTAuNjI5LTU5LjkxOSA0NC4xMDctNDEuNjEgNjkuOTA1LTk5Ljg2MyA2OS45MDUtMTYwLjYxNSAwLTY5LjA3My0yOS45NTgtMTMxLjQ4OC04Mi4zODctMTczLjA5OHpNNDU1LjkzOCA5MjIuMjc2Yy0zNi42MTggMzQuMTIxLTg0LjA1MiA1MS41OTctMTMzLjk4NSA0OC4yNjgtODkuODc3LTUuODI1LTE2My4xMTEtNzkuODkxLTE2Ny4yNzMtMTY5Ljc2OS0yLjQ5Ni01Ny40MjMgMjEuNjM3LTExMS41MTUgNjUuNzQ0LTE0Ny4zIDIxLjYzNy0xNy40NzYgMzMuMjg3LTQyLjQ0MyAzMy4yODctNjkuMDczdi00NTQuMzgzYzAtNDMuMjc1IDM1Ljc4NS03OS4wNTkgNzkuMDU5LTc5LjA1OXM3OS4wNTkgMzUuNzg1IDc5LjA1OSA3OS4wNTl2NDU0LjM4M2MwIDI1Ljc5OCAxMi40ODIgNTAuNzY0IDMzLjI4NyA2Ny40MDkgNDIuNDQzIDM0LjEyMSA2Ni41NzYgODQuODg1IDY2LjU3NiAxMzguOTc4IDAuODMyIDUwLjc2NC0xOS4xNDEgOTcuMzY3LTU1Ljc1OCAxMzEuNDg4ek04ODkuNTE1IDMxMy45MzZsLTEzOS44MS0yNDguODI5LTEzNy4zMTQgMjQzLjgzNi0wLjgzMiAwLjgzMmMtMTAuODE5IDIxLjYzNy0xNS44MTEgNDQuMTA3LTE1LjgxMSA2OC4yNCAwIDg0Ljg4NSA2OS4wNzMgMTUzLjk1NyAxNTMuOTU3IDE1My45NTdzMTUzLjk1Ny02OS4wNzMgMTUzLjk1Ny0xNTMuOTU3YzAtMjQuMTMzLTQuOTk0LTQ0LjEwNy0xNC4xNDctNjQuMDgwek03NDkuNzA1IDQ5MC4zNjNjLTYxLjU4MyAwLTExMi4zNDgtNTAuNzY0LTExMi4zNDgtMTEyLjM0OCAwLTE3LjQ3NiA0LjE2MS0zMy4yODcgMTEuNjUxLTQ5LjFsMTAwLjY5Ny0xNzguOTI0IDEwMC42OTcgMTc4LjkyNCAxLjY2NSAzLjMyOWM3LjQ5IDE0Ljk4IDkuOTg2IDI4LjI5NSA5Ljk4NiA0Ni42MDQgMCA2MS41ODMtNTAuNzY0IDExMS41MTUtMTEyLjM0OCAxMTEuNTE1eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTQwNTkiPjwvcGF0aD48cGF0aCBkPSJNNzQ5LjcwNSA0NDcuMDg5Yy0zNi42MTggMC02Ni41NzYtMjkuOTU4LTY2LjU3Ni02Ni41NzYgMC00Ljk5NC0zLjMyOS04LjMyMi04LjMyMi04LjMyMnMtOC4zMjIgMy4zMjktOC4zMjIgOC4zMjJjMCA0NS43NzIgMzcuNDQ5IDgzLjIyIDgzLjIyIDgzLjIyIDQuOTk0IDAgOC4zMjItMy4zMjkgOC4zMjItOC4zMjJzLTQuMTYxLTguMzIyLTguMzIyLTguMzIyek0zOTkuMzQ4IDY3NS45NDNjLTIwLjgwNS0xMS42NTEtMzIuNDU3LTM0LjEyMS0zMi40NTctNTguMjU0di0yNTMuODIyYzAtMTguMzA4LTE0Ljk4LTMzLjI4Ny0zMy4yODctMzMuMjg3cy0zMy4yODcgMTQuOTgtMzMuMjg3IDMzLjI4N3YyNTUuNDg3YzAgMjMuMzAxLTEyLjQ4MiA0NS43NzItMzMuMjg3IDU3LjQyMy00MS42MSAyNC4xMzMtNjkuMDczIDY5LjA3My02Ni41NzYgMTIxLjUwMiAzLjMyOSA2OC4yNCA1OS4wODYgMTIzLjk5OSAxMjYuNDk1IDEyNy4zMjggNzYuNTYyIDMuMzI5IDEzOS44MS01Ny40MjMgMTM5LjgxLTEzMy4xNTMgMC01MC43NjQtMjcuNDYyLTk0LjAzOC02Ny40MDktMTE2LjUwOXoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjE0MDYwIj48L3BhdGg+PC9zdmc+";

    var qdprobotESP32_R_PIN_Output_Dropdown = [
        ['.P3-R-22（SCL）','22'],
        ['.P4-R-17（RGB）','17'],
        ['.P5-R-5','15'],
        ['.P6-R-19','19'],
        ['.P7-R-2','2'],
        ['.P8-R-14（touch）','14'],
        ['.P9-R-13（touch）','13'],
        ['.P10-R-26','26'],
        ['P3-L-21（SDA）','21'],
        ['P4-L-16','16'],
        ['P5-L-18','18'],
        ['P6-L-23','23'],
        ['P7-L-15（touch）','15'],
        ['P8-L-27（touch）','27'],
        ['P9-L-12（touch）','12'],
        ['P10-L-25','25']
    ];

    var qdprobotESP32_Buzzer_PIN_Output_Dropdown = [
        ['.4（Buzzer）','4'],
        ['.P4-L-16','16'],
        ['.P5-L-18','18'],
        ['.P6-L-23','23'],
        ['.P7-L-15（touch）','15'],
        ['.P8-L-27（touch）','27'],
        ['.P9-L-12（touch）','12'],
        ['.P10-L-25','25'],
        ['P4-R-17（RGB）','17'],
        ['P5-R-5','5'],
        ['P6-R-19','19'],
        ['P7-R-2','2'],
        ['P8-R-14（touch）','14'],
        ['P9-R-13（touch）','13'],
        ['P10-R-26','26']
    ];

    var QDPTONE_NOTES=[["NOTE_C3", "131"],
        ["NOTE_D3", "147"],
        ["NOTE_E3", "165"],
        ["NOTE_F3", "175"],
        ["NOTE_G3", "196"],
        ["NOTE_A3", "220"],
        ["NOTE_B3", "247"],
        ["NOTE_C4", "262"],
        ["NOTE_D4", "294"],
        ["NOTE_E4", "330"],
        ["NOTE_F4", "349"],
        ["NOTE_G4", "392"],
        ["NOTE_A4", "440"],
        ["NOTE_B4", "494"],
        ["NOTE_C5", "532"],
        ["NOTE_D5", "587"],
        ["NOTE_E5", "659"],
        ["NOTE_F5", "698"],
        ["NOTE_G5", "784"],
        ["NOTE_A5", "880"],
        ["NOTE_B5", "988"]];

    //DH11温湿度
    Blockly.Blocks.PY_qdp_esp32_dht11 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_dht11,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_dht11_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'WHAT',
                        options: [[Blockly.Msg.QH_Temperature,"1"], [Blockly.Msg.QH_Humidity,"0"]]
                    }
                ],
                "tooltip": "读取传感器的摄氏温度值及相对湿度\n可能会引发异常。您应该使用 try/raise 逻辑并捕获 RuntimeError，然后在大于1/2 秒后重试获取值。",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //蜂鸣器
    Blockly.Blocks.PY_qdp_esp32_buzzer = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_buzzer,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BUZZER_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_Buzzer_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'freq'
                    },
                    {
                        type: 'input_value',
                        name: 'tim'
                    }
                ],
                "tooltip": "蜂鸣器的发音设置，频率不同时发音不一样，时间为发音的持续时间",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //蜂鸣器
    Blockly.Blocks.qdp_buzzer_Dropdown = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options: QDPTONE_NOTES
                    }
                ],
                "tooltip": "蜂鸣器的发音设置，频率不同时发音不一样，时间为发音的持续时间",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


