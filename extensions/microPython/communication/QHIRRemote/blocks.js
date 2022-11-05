/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_OTHER_COLOR = '#cbc668';
    
    const QH_COMMUNICATE_color1 = '#6c91ac'; 

    const QH_REMOTE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNTY5MTIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNzc5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yNzkuNDg3IDI2Mi44NjNjMTIuMjQ5LTguNDY2IDI5LjA0OS01LjM3OCAzNy41MDEgNi44NzEgOC40NjUgMTIuMjQ5IDUuMzkzIDI5LjAzNC02Ljg1NiAzNy41MDEtMTIuMjQ5IDguNDUxLTI5LjA1MSA1LjM3OC0zNy41MDEtNi44NzFzLTUuMzc4LTI5LjA1MSA2Ljg1Ni0zNy41MDF6IG02Ni41NTEtNDUuOTUyYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNTAxIDYuODcxIDguNDUxIDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjI0OSA4LjQ2NS0yOS4wMzYgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUxLTEyLjI0OS01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtLTkwLjE3OSAxNTUuN2MxMi4yNDktOC40NTIgMjkuMDM2LTUuMzc5IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUtMTIuMjUtNS4zNzgtMjkuMDM1IDYuODcxLTM3LjV6IG02Ny4zMTktNDYuNDc0YzEyLjI0OS04LjQ2NSAyOS4wMzQtNS4zNzggMzcuNSA2Ljg1NyA4LjQ2NSAxMi4yNDkgNS4zNzggMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM0IDUuMzc4LTM3LjUtNi44NzEtOC40NTItMTIuMjM1LTUuMzc4LTI5LjAzNyA2Ljg3MS0zNy40ODd6IG02Ni41MzYtNDUuOTUyYzEyLjI0OS04LjQ2NiAyOS4wNDktNS4zNzggMzcuNTAxIDYuODU2IDguNDY1IDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjIzNiA4LjQ2NS0yOS4wMzYgNS4zOTMtMzcuNTAxLTYuODcxLTguNDM3LTEyLjIzNC01LjM3OC0yOS4wMzUgNi44NzEtMzcuNDg2eiBtLTkxLjU1NiAxNTMuNzE0Yy0xMi4yNDkgOC40NTEtMTUuMzIyIDI1LjIzNy02Ljg1NiAzNy41IDguNDUxIDEyLjIzNCAyNS4yMzcgMTUuMzA4IDM3LjQ4NiA2Ljg1NiAxMi4yNDktOC40NSAxNS4zMzctMjUuMjUgNi44NzEtMzcuNDg2LTguNDUxLTEyLjI2My0yNS4yNTItMTUuMzM3LTM3LjUwMS02Ljg3eiBtNjcuMzM0LTQ2LjQ4OWMxMi4yNDgtOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjQ5IDUuMzc4IDI5LjAzNi02Ljg3MSAzNy41MDEtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM3OC0zNy41LTYuODU2LTguNDY2LTEyLjI2NC01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtNjYuNTM1LTQ1LjkzN2MxMi4yNDktOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjM0IDUuMzc4IDI5LjA0OS02Ljg3IDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM2IDUuMzYzLTM3LjQ4Ni02Ljg1Ni04LjQ2Ny0xMi4yNjMtNS4zOTMtMjkuMDUgNi44NTYtMzcuNTAxek0zNDMuODIgNTAwLjAxNGMxMi4yNDktOC40NTIgMjkuMDM0LTUuMzc4IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjIzNSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNDg2LTEyLjI0OSA4LjQ2Ny0yOS4wNTEgNS4zNzgtMzcuNTAxLTYuODU2LTguNDUxLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44NzEtMzcuNXogbTY3LjMxOC00Ni40ODljMTIuMjQ5LTguNDY1IDI5LjAzNi01LjM3OCAzNy41MDEgNi44NzEgOC40NTIgMTIuMjM0IDUuMzkzIDI5LjAzNi02Ljg3MSAzNy40ODYtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM5My0zNy41LTYuODU2LTguNDUyLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44Ny0zNy41MDF6IG02Ni41MzYtNDUuOTUxYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNSA2Ljg3MSA4LjQ2NyAxMi4yNDkgNS4zOTMgMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDggOC40NjUtMjkuMDM0IDUuMzc4LTM3LjQ4NS02Ljg3MS04LjQ2Ny0xMi4yNDktNS4zNzgtMjkuMDM2IDYuODU2LTM3LjUwMXogbTIzLjk2MSAzMjMuOTA4Yy0yMy41MjYtNi40MzYtNDUuMDI0LTIwLjg3My01OS45ODMtNDIuNTMtMTUuMjM2LTIyLjA5Mi0yMS4wNzctNDcuODY1LTE4LjM4MS03Mi41OTZsOTYuMjI0IDE3LjYxNC0xNy44NiA5Ny41MTJ6TTIxMi4xNyAzMDkuMzVjMTIuMjQ4LTguNDUxIDI5LjA0OS01LjM3OCAzNy41IDYuODcxIDguNDUyIDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDY2LTEyLjI0OS01LjM5Mi0yOS4wNDkgNi44NTctMzcuNTAxeiBtLTk5LjU0My0xNDAuMTNjLTMwLjgxOCAyMS4yNjUtMzguNjAzIDYzLjg2OC0xNy4zMzcgOTQuNjU4bDQ2MS41MDIgNjY4LjQxNGMyMS4yOCAzMC44MDQgNjMuODU1IDM4LjYwMiA5NC42NTggMTcuMzM3bDQ5LjI4Ni0zNC4wMjJjLTMxLjI1My0yMi4zNTMtMzIuMjM5LTQzLjY5MS01My4wODQtMTAwLjY1OC0zNC40NTUtMjcuMDkzLTY3LjY1Mi03NS42MzktNzYuNDIxLTg3Ljg2LTE1LjQ4MiA2LjQ2Ni0zMS45NjMgOS4wNDYtNDguMTExIDcuOTg3bDEyLjU2OC02OC42MjRjLTguOTg4LTE4LjM5NC0xNy4wNDgtMzcuMjk2LTI0LjcxNi01Ni4xODVsLTgzLjE0Ny0xNS4yMjFjNi45ODctMjEuNzQzIDIwLjkzMS00MS40NTggNDEuMTY3LTU1LjQ0NiAxOC43MTUtMTIuOTE3IDQwLjA5Ni0xOS4wNDkgNjEuMjMtMTguOTlsNjkuNjY3LTQ3LjkxLTUxLjkyNS03NS4yMzIgMS40NzkgMC4yNDZMMzQwLjI1NSA5NC43NGMtMjEuMjY3LTMwLjc4OS02My44NTUtMzguNjAzLTk0LjY1OC0xNy4zMzZsLTEzMi45NyA5MS44MTZ6TTgzNS4wMSA0OTguNTM0YzI1LjkwNCA5LjQ5NiA0Mi45NjUgMjcuMzM5IDQ5LjM0MyA1NS4zMDIgMzAuOTA2IDExMy43NjQgMjcuNDEyIDE3MC4yNTQgNTguMzQ2IDI4NC4wMzFsLTEzMS40NjIgOTMuODAyYy03MC4zMDYtMjcuMzI0LTExMC4xNC03MC4wNDMtMTIyLjQ5LTE0NC4xMDMtODEuNDk1LTgwLjY2OC05Ny4yNTMtOTkuMzgzLTE0NS4wMTUtMjIwLjExOWw0Ni43OTItMzEuOTYzYzQ4LjkwOSAzOC4yMTEgNjMuNzA5IDUwLjkwOSA5OC4wNSAxMDMuNDg2bDU1Ljc5NC0zOC41My05Ni41NTctMTM5Ljg1NmM2My4wMTMgMTAuMjQ5IDEyNC43MzYgMjQuNDY5IDE4Ny4xOTkgMzcuOTV6IiBwLWlkPSI0Mzc4MCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";

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

    Blockly.Blocks.communicate_ir_recv = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.communicate_ir_recv,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    },
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "cb",
                      "spellcheck": false
                    }   
                ],
                "tooltip": "在单独进程中运行.对应摇控器的按键输入，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    
    //红外遥控器接收
    Blockly.Blocks.PY_qdp_esp32_ir_re = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_qdp_esp32_ir_re,
                message1: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    } 
                ],
                args1: [{
                    type: 'input_statement',
                    name: 'DO'
                }],
                "tooltip": "在单独进程中运行.对应摇控器的按键输入，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    Blockly.Blocks.PY_qdp_esp32_ir_send = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_ir_send,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
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
                        type: 'input_value',
                        name: 'address'
                    },
                    {
                        type: 'input_value',
                        name: 'contents'
                    }                                    
                ],
                "tooltip": "红外发送地址与内容均为0~255之间的整数",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


