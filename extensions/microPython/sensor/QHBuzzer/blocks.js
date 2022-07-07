/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#5874DC';
   
    const QH_BUZZER_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMjQ4MDk4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMTU2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNjRDMjY0Ljk2IDY0IDY0IDI2NC45NiA2NCA1MTJzMjAwLjk2IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuOTYgNDQ4LTQ0OFM3NTkuMDQgNjQgNTEyIDY0eiBtMCA4MzJDMzAwLjI1NiA4OTYgMTI4IDcyMy43NDQgMTI4IDUxMlMzMDAuMjU2IDEyOCA1MTIgMTI4czM4NCAxNzIuMjU2IDM4NCAzODQtMTcyLjI1NiAzODQtMzg0IDM4NHoiIHAtaWQ9IjIyMTU3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQwNC45NiA3NzAuNDMyYTI3OC4yMDggMjc4LjIwOCAwIDAgMS05MC42ODgtNjAuNjcyIDI3OC40MzIgMjc4LjQzMiAwIDAgMS02MC43MDQtOTAuNzIgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAzNDEuNiAzNDEuNiAwIDAgMCA3NC41OTIgMTExLjQ1NiAzNDIuMTc2IDM0Mi4xNzYgMCAwIDAgMTExLjQ1NiA3NC41NiAzMS45MzYgMzEuOTM2IDAgMCAwIDQxLjc5Mi0xNy4zMTIgMzEuOTY4IDMxLjk2OCAwIDAgMC0xNy4zMTItNDEuODI0ek0yMTEuNzQ0IDQyMi4yNzJhMzEuODcyIDMxLjg3MiAwIDAgMCA0MS44MjQtMTcuMjggMjc4LjA4IDI3OC4wOCAwIDAgMSA2MC43MDQtOTAuNzIgMjc4LjMwNCAyNzguMzA0IDAgMCAxIDkwLjY4OC02MC43MDQgMzIgMzIgMCAwIDAtMjQuNTEyLTU5LjEzNiAzNDIuMDE2IDM0Mi4wMTYgMCAwIDAtMTExLjQ1NiA3NC41NiAzNDIuMTQ0IDM0Mi4xNDQgMCAwIDAtNzQuNTYgMTExLjQ4OCAzMiAzMiAwIDAgMCAxNy4zMTIgNDEuNzkyek02MTkuMDQgMjUzLjU2OGEyNzguNzg0IDI3OC43ODQgMCAwIDEgOTAuNzIgNjAuNzA0IDI3OC41NiAyNzguNTYgMCAwIDEgNjAuNjcyIDkwLjY4OCAzMiAzMiAwIDEgMCA1OS4xMzYtMjQuNTEyIDM0Mi4xNzYgMzQyLjE3NiAwIDAgMC03NC41Ni0xMTEuNDU2IDM0Mi40MzIgMzQyLjQzMiAwIDAgMC0xMTEuNDU2LTc0LjU5MiAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMiA1OS4xNjh6TTgxMi4yNTYgNjAxLjcyOGEzMi4wOTYgMzIuMDk2IDAgMCAwLTQxLjgyNCAxNy4zMTIgMjc4LjMzNiAyNzguMzM2IDAgMCAxLTYwLjY3MiA5MC43MiAyNzguMzM2IDI3OC4zMzYgMCAwIDEtOTAuNzIgNjAuNjcyIDMyIDMyIDAgMCAwIDI0LjUxMiA1OS4xMzYgMzQyLjE3NiAzNDIuMTc2IDAgMCAwIDExMS40NTYtNzQuNTYgMzQyLjg0OCAzNDIuODQ4IDAgMCAwIDc0LjU2LTExMS40NTYgMzIgMzIgMCAwIDAtMTcuMzEyLTQxLjgyNHpNMzQ4LjU3NiAzNDguNTc2YTIzMC4yMDggMjMwLjIwOCAwIDAgMC01MC4xMTIgNzQuOTQ0IDMyIDMyIDAgMCAwIDU5LjEzNiAyNC41NDQgMTY2Ljc4NCAxNjYuNzg0IDAgMCAxIDM2LjI1Ni01NC4yMDggMTY2LjQgMTY2LjQgMCAwIDEgNTQuMjA4LTM2LjI4OCAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMi01OS4xMzYgMjMwLjU5MiAyMzAuNTkyIDAgMCAwLTc0Ljk3NiA1MC4xNDR6TTU3NS45NjggMzU3LjU2OGMyMC4yODggOC40MTYgMzguNTI4IDIwLjY0IDU0LjE3NiAzNi4yNTZzMjcuODQgMzMuODg4IDM2LjI4OCA1NC4yMDhhMzIgMzIgMCAxIDAgNTkuMTM2LTI0LjU0NCAyMzAuODE2IDIzMC44MTYgMCAwIDAtNTAuMTQ0LTc0Ljk0NCAyMzAuNCAyMzAuNCAwIDAgMC03NC45NDQtNTAuMTEyIDMyIDMyIDAgMSAwLTI0LjUxMiA1OS4xMzZ6TTQ0OC4wMzIgNjY2LjQzMmExNjYuNTYgMTY2LjU2IDAgMCAxLTU0LjIwOC0zNi4yODggMTY2LjkxMiAxNjYuOTEyIDAgMCAxLTM2LjI4OC01NC4xNzYgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAyMzAuNDY0IDIzMC40NjQgMCAwIDAgNTAuMTQ0IDc0Ljk0NCAyMjkuOTUyIDIyOS45NTIgMCAwIDAgNzQuOTQ0IDUwLjE0NCAzMiAzMiAwIDAgMCAyNC41NDQtNTkuMTM2ek02NzUuMzkyIDY3NS4zOTJhMjMwLjE0NCAyMzAuMTQ0IDAgMCAwIDUwLjE0NC03NC45NDQgMzIgMzIgMCAxIDAtNTkuMTM2LTI0LjUxMmMtOC40MTYgMjAuMjg4LTIwLjY0IDM4LjUyOC0zNi4yODggNTQuMTc2cy0zMy45MiAyNy44NzItNTQuMTc2IDM2LjI4OGEzMiAzMiAwIDEgMCAyNC41MTIgNTkuMTM2IDIyOC45NiAyMjguOTYgMCAwIDAgNzQuOTQ0LTUwLjE0NHpNNjQwIDUxMmMwLTcwLjU5Mi01Ny40MDgtMTI4LTEyOC0xMjhzLTEyOCA1Ny40MDgtMTI4IDEyOCA1Ny40MDggMTI4IDEyOCAxMjggMTI4LTU3LjQwOCAxMjgtMTI4eiBtLTEyOCA2NGMtMzUuMjk2IDAtNjQtMjguNzA0LTY0LTY0czI4LjcwNC02NCA2NC02NCA2NCAyOC43MDQgNjQgNjQtMjguNzA0IDY0LTY0IDY0eiIgcC1pZD0iMjIxNTgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

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


