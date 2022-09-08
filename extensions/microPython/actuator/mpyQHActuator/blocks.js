/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = "#5874DC";
   
    
    const QH_RGB_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMTY4MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMDUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgMTAyNGEyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzM0wyNzcuMzMzMzMzIDkyNi4xNjUzMzNWMTAwMi42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS00Mi42NjY2NjYgMHYtMTI3Ljg3MlY3NDYuNjY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjU2IDcyNS4zMzMzMzNoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0cy0zOC4yNzIgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNoLTEyLjUwMTMzM2w5MS41NjI2NjYgOTEuNTYyNjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzg0IDEwMjR6IG0tMTA2LjY2NjY2Ny0xNzAuNjY2NjY3aDQyLjY2NjY2N2E0Mi43MDkzMzMgNDIuNzA5MzMzIDAgMCAwIDAtODUuMzMzMzMzaC00Mi42NjY2Njd2ODUuMzMzMzMzek03NDYuNjY2NjY3IDEwMjRINjgyLjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTI1NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDIxLjMzMzMzNC0yMS4zMzMzMzRoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0IDAgMjUuNDcyLTExLjIyMTMzMyA0OC4zNDEzMzMtMjguOTcwNjY3IDY0IDE3Ljc0OTMzMyAxNS42NTg2NjcgMjguOTcwNjY3IDM4LjUyOCAyOC45NzA2NjcgNjQgMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzMgODUuMzMzMzMzeiBtLTQyLjY2NjY2Ny00Mi42NjY2NjdoNDIuNjY2NjY3YTQyLjcwOTMzMyA0Mi43MDkzMzMgMCAwIDAgMC04NS4zMzMzMzNoLTQyLjY2NjY2N3Y4NS4zMzMzMzN6IG0wLTEyOGg0Mi42NjY2NjdhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCAwLTg1LjMzMzMzM2gtNDIuNjY2NjY3djg1LjMzMzMzM3pNNTMzLjMzMzMzMyAxMDI0Yy00Ny4wNjEzMzMgMC04NS4zMzMzMzMtMzguMjcyLTg1LjMzMzMzMy04NS4zMzMzMzN2LTEyOGMwLTQ3LjA2MTMzMyAzOC4yNzItODUuMzMzMzMzIDg1LjMzMzMzMy04NS4zMzMzMzRzODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzQgODUuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtNDIuNjY2NjY3IDAgNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMC04NS4zMzMzMzMgMHYxMjhhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCA4NS4zMzMzMzMgMEg1NTQuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjdoNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzM0IDIxLjMzMzMzM3YyMS4zMzMzMzRjMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzQgODUuMzMzMzMzek0zODQgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTMjU0LjYzNDY2NyAyMTMuMzMzMzMzIDM4NCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNTEzLjM2NTMzMyA2ODIuNjY2NjY3IDM4NCA2ODIuNjY2NjY3ek0zODQgMjU2Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzI3OC4xNDQgNjQwIDM4NCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzQ4OS44NTYgMjU2IDM4NCAyNTZ6IiBwLWlkPSIyMDA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDAgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTNTEwLjYzNDY2NyAyMTMuMzMzMzMzIDY0MCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNzY5LjM2NTMzMyA2ODIuNjY2NjY3IDY0MCA2ODIuNjY2NjY3eiBtMC00MjYuNjY2NjY3Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzUzNC4xNDQgNjQwIDY0MCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzc0NS44NTYgMjU2IDY0MCAyNTZ6IiBwLWlkPSIyMDA1MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDY5LjMzMzMzM2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjZTMzgyLjYzNDY2NyAwIDUxMiAwczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNjQxLjM2NTMzMyA0NjkuMzMzMzMzIDUxMiA0NjkuMzMzMzMzeiBtMC00MjYuNjY2NjY2QzQwNi4xNDQgNDIuNjY2NjY3IDMyMCAxMjguODEwNjY3IDMyMCAyMzQuNjY2NjY3UzQwNi4xNDQgNDI2LjY2NjY2NyA1MTIgNDI2LjY2NjY2N3MxOTItODYuMTQ0IDE5Mi0xOTJTNjE3Ljg1NiA0Mi42NjY2NjcgNTEyIDQyLjY2NjY2N3oiIHAtaWQ9IjIwMDU0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";

    const QH_MOTOR_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMzA1NDE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MjEuNiAzMzIuOGgtNTEuMmMtNi42IDAtMTMgMC42LTE5LjMgMS44LTIwLjctMjguNy01NC41LTUzLTgzLjEtNTNINTEyVjEyOGMwLTI4LjMtMjIuOS01MS4yLTUxLjItNTEuMmgtMjU2Yy0yOC4zIDAtNTEuMiAyMi45LTUxLjIgNTEuMnYxNTMuNmMtMjcuNSAwLTU5LjggMjIuNC04MC42IDQ5LjctNS4xLTEuNS0xMC41LTIuMy0xNi4xLTIuM0MyNS41IDMyOC45IDAgMzU0LjQgMCAzODUuOHYzNDkuOWMwIDMxLjQgMjUuNSA1Ni45IDU2LjkgNTYuOSAzLjUgMCA2LjgtMC4yIDkuOC0wLjcgMTguMyAzMi42IDUwLjEgNjIuNSA3OS42IDYyLjVoMi41bC00Ni40IDkyLjdoNzY4bC01MS4yLTEwMi40aC0yLjFjNC40LTIuNCA4LjYtNS4yIDEyLjctOC40IDEyLjUgNS40IDI2LjIgOC40IDQwLjYgOC40aDUxLjJjNTYuNiAwIDEwMi40LTQ1LjggMTAyLjQtMTAyLjRWNDM1LjJjMC01Ni42LTQ1LjgtMTAyLjQtMTAyLjQtMTAyLjR6TTQwOS42IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yIDIyLjktNTEuMiA1MS4yLTUxLjJ6TTI1NiAxMjhjMjguMyAwIDUxLjIgMjIuOSA1MS4yIDUxLjJzLTIyLjkgNTEuMi01MS4yIDUxLjItNTEuMi0yMi45LTUxLjItNTEuMlMyMjcuNyAxMjggMjU2IDEyOHogbTUxMiA2NjUuNkgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZWNjQwSDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OFYzODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjkyOCI+PC9wYXRoPjwvc3ZnPg==";


    const k210_pins = [['P0','0'],['P1','1'],['P2','2'],['P3','3'],['P4','4'],['P5','5'],['P6','6'],['P7','7'],['P8','8'],['P9','9']];

    Blockly.Blocks.PY_qdp_k210_actuator_ws2812_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_actuator_ws2812_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[['P0','0'],['P1','1'],['P2','2'],['P3','3'],['P4','4'],['P5','5'],['P6','6'],['P7','7'],['P8','8'],['P9','9'],['10(Onboard)','10']]
                    },
                    { 
                        type: "input_value", 
                        name: "LEDCOUNT" 
                    }   
                ],
                "tooltip": "rgb",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_actuator_ws2812_set_led = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_actuator_ws2812_set_led,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "_LED_" 
                    },
                    { 
                        type: "input_value", 
                        name: "RVALUE" 
                    },
                    { 
                        type: "input_value", 
                        name: "GVALUE" 
                    },
                    { 
                        type: "input_value", 
                        name: "BVALUE" 
                    }   
                ],
                "tooltip": "rgb",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_actuator_ws2812_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_actuator_ws2812_display,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "rgb",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_actuator_Servo_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_actuator_Servo_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:k210_pins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'time',
                        options:[['tim0','0'],['tim1','1'],['tim2','2'],['tim3','3'],['tim4','4'],['tim5','5'],['tim6','6'],['tim7','7'],['tim8','8'],['tim9','9'],['tim10','10'],['tim11','11']]
                    }
                ],
                "tooltip": "",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_actuator_Servo = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_actuator_Servo,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:k210_pins
                    },
                    { 
                        type: "input_value", 
                        name: "range" 
                    }  
                ],
                "tooltip": "",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    
    return Blockly;
}

exports = addBlocks;


