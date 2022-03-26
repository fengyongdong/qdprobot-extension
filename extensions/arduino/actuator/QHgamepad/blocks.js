/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_GAMEPAD_COLOR = '#DEB887';


    const gamepadIconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODIwMjM5MjM2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk1NC40OTYgNjk1LjA0N2wtODUuODQtMzIwLjM2MWMtMTkuMTU0LTcxLjQ4Mi04My44MDYtMTE4LjYxNi0xNTQuNDQ5LTExOC42MTlsLTAuNDYyIDAuMDAxLTE3Ni43NDYtMC4wM0w1MzcgMjU2di0zM2MwLTI0LjgxMyAyMC4xODctNDUgNDUtNDUgMTMuODA4IDAgMjUtMTEuMTkzIDI1LTI1cy0xMS4xOTItMjUtMjUtMjVjLTUyLjM4MyAwLTk1IDQyLjYxNy05NSA5NXYzM2wwLjAwMSAwLjAzTDMwOSAyNTZjLTcwLjMyIDAuMzY4LTEzNC43OTQgNDguMjkzLTE1My44NzMgMTE5LjQ5NmwtODUuNjIzIDMxOS41NWMtMjIuODcxIDg1LjM1NSAyNy43ODMgMTczLjA4OCAxMTMuMTM3IDE5NS45NTkgMTMuODY4IDMuNzE2IDI3LjgwNiA1LjQ5MiA0MS41MTEgNS40OTIgNzAuNjQ3IDAgMTM1LjI5My00Ny4xNDIgMTU0LjQ0OC0xMTguNjI5bDEwLjEzMy0zNy44NDhjNi4wNjMtMjAuNzg4IDI1LjI5Mi0zNi4wMiA0OC4wMTItMzYuMDJoMTUwLjk4OGMyMi43MiAwIDQxLjk0OSAxNS4yMzIgNDguMDEyIDM2LjAyMWw5LjY1NSAzNy44NDhjMTkuMTUzIDcxLjQ4MSA4My44MDYgMTE4LjYyOSAxNTQuNDQ3IDExOC42MjkgMTMuNzEgMCAyNy42MzgtMS43NzQgNDEuNTExLTUuNDkyIDg1LjM1Ni0yMi44NzEgMTM2LjAwOS0xMTAuNjA1IDExMy4xMzgtMTk1Ljk1OXogbS01OS4yODUgOTYuNDExYy0xNC42OTEgMjUuNDQ1LTM4LjQxMiA0My42NDctNjYuNzkzIDUxLjI1Mi05LjM4IDIuNTEzLTE4Ljk5MyAzLjc4OC0yOC41NyAzLjc4OC00OS41MzggMC05My4xMTctMzMuNDE2LTEwNi4wNzgtODEuMjk3bC05LjU3Ni0zNy41MzgtMC4yMS0wLjgyMy0wLjIzOC0wLjgxNmMtNS45MzctMjAuMzU5LTE4LjUyNy0zOC42NzQtMzUuNDUtNTEuNTc0LTE3LjU1MS0xMy4zNzktMzguNDkzLTIwLjQ1LTYwLjU2Mi0yMC40NUg0MzYuNzQ1Yy0yMi4wNjkgMC00My4wMTIgNy4wNzEtNjAuNTYzIDIwLjQ0OS0xNi45MjMgMTIuODk5LTI5LjUxMyAzMS4yMTUtMzUuNDUgNTEuNTc0bC0wLjE1NSAwLjUzMi0wLjE0MyAwLjUzNS0xMC4xMzEgMzcuODM4Yy0xMi44NjkgNDguMDI3LTU2LjUyIDgxLjU3LTEwNi4xNTEgODEuNTctOS41NzcgMC0xOS4xOS0xLjI3NS0yOC41NzEtMy43ODgtMjguMzgxLTcuNjA1LTUyLjEwMi0yNS44MDYtNjYuNzkzLTUxLjI1Mi0xNC42OTEtMjUuNDQ2LTE4LjU5NC01NS4wODktMTAuOTg5LTgzLjQ3bDg1LjYyMy0zMTkuNTVjNi40MDItMjMuODk0IDIwLjE4Mi00NC40OTQgMzkuODQ5LTU5LjU3NCAxOS4wMzUtMTQuNTk1IDQyLjQyLTIyLjcxMiA2NS44NjQtMjIuODYzbDQwNC42IDAuMDY4aDAuNDY5YzQ5LjYzNSAwLjAwMSA5My4yODcgMzMuNTQgMTA2LjE1NCA4MS41Nmw4NS44NCAzMjAuMzYxYzcuNjA3IDI4LjM3OSAzLjcwNCA1OC4wMjItMTAuOTg3IDgzLjQ2OHoiIHAtaWQ9IjE0ODIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzIxIDQwMmMtNjAuNzUxIDAtMTEwIDQ5LjI0OS0xMTAgMTEwczQ5LjI0OSAxMTAgMTEwIDExMCAxMTAtNDkuMjQ5IDExMC0xMTAtNDkuMjQ5LTExMC0xMTAtMTEweiBtMCAxNzBjLTMzLjA4NCAwLTYwLTI2LjkxNi02MC02MHMyNi45MTYtNjAgNjAtNjAgNjAgMjYuOTE2IDYwIDYwLTI2LjkxNiA2MC02MCA2MHoiIHAtaWQ9IjE0ODMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzA0IDQzN20tMzUgMGEzNSAzNSAwIDEgMCA3MCAwIDM1IDM1IDAgMSAwLTcwIDBaIiBwLWlkPSIxNDg0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTcwNCA1ODdtLTM1IDBhMzUgMzUgMCAxIDAgNzAgMCAzNSAzNSAwIDEgMC03MCAwWiIgcC1pZD0iMTQ4NSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik03NzkgNTEybS0zNSAwYTM1IDM1IDAgMSAwIDcwIDAgMzUgMzUgMCAxIDAtNzAgMFoiIHAtaWQ9IjE0ODYiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjI5IDUxMm0tMzUgMGEzNSAzNSAwIDEgMCA3MCAwIDM1IDM1IDAgMSAwLTcwIDBaIiBwLWlkPSIxNDg3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';




    //按键
    Blockly.Blocks.IOT_REMOTE_CONTROL_BUTTON_EVENT = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT,
                args0: [
                    {
                        type: 'field_image',
                        src: gamepadIconUrl,
                        width: 40,
                        height: 40
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[['L', "34"], ['R', "35"], ['U', "36"], ['D', "39"], ['A', "32"], ['B', "33"], ['C', "26"], ['D', "27"], ['F', "16"], ['Joy-Key', "14"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_PRESSED), "Pressed"], [(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_CHANGED), "Changed"],[(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_RELEASED), "Released"], [(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_LONGCLICKDETECTED), "LongClickDetected"], [(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_longClick), "LongClick"], [(Blockly.Msg.IOT_REMOTE_CONTROL_BUTTON_EVENT_DOUBLECLICK), "DoubleClick"]]
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "为按键中断事件,事件内执行的程序不宜太多.'",
                colour:QH_GAMEPAD_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //获取摇杆值
    Blockly.Blocks.IOT_REMOTE_CONTROL_get_the_joystick_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_REMOTE_CONTROL_get_the_joystick_value,
                args0: [
                    {
                        type: 'field_image',
                        src: gamepadIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [        
                ],
                "tooltip": "摇杆无动作时返回-1,其余返回角度",
                colour: QH_GAMEPAD_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
