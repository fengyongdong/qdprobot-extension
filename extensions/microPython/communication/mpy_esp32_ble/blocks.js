/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_BLE_COLOR = '#0079f5'; 

    const QH_BLE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY2OTI4OTkwMDIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTc1Ni43MzYgNjc5LjgwOGwwLjA5Ni0wLjExMkw1NjEuMTY4IDUxMmwxOTUuNjQ4LTE2Ny42OTYtMC4wOTYtMC4xMTJjNi44NDgtNS44NzIgMTEuMjgtMTQuNDggMTEuMjgtMjQuMTkyYTMxLjg0IDMxLjg0IDAgMCAwLTExLjI2NC0yNC4xOTJsMC4wOTYtMC4xMTItMjI0LTE5Mi0wLjA5NiAwLjExMkM1MjcuMTM2IDk5LjAwOCA1MTkuOTUyIDk2IDUxMiA5NmEzMiAzMiAwIDAgMC0zMiAzMnYzMTQuNDE2bC0xNzEuMTY4LTE0Ni43Mi0wLjA5NiAwLjExMmMtNS42LTQuOC0xMi43ODQtNy44MDgtMjAuNzM2LTcuODA4YTMyIDMyIDAgMCAwLTMyIDMyYzAgOS43MTIgNC40MzIgMTguMzIgMTEuMjY0IDI0LjE5MmwtMC4wOTYgMC4xMTJMNDYyLjgzMiA1MTIgMjY3LjE2OCA2NzkuNjk2bDAuMDk2IDAuMTEyQTMxLjg0IDMxLjg0IDAgMCAwIDI1NiA3MDRhMzIgMzIgMCAwIDAgMzIgMzJjNy45NTIgMCAxNS4xMzYtMy4wMDggMjAuNzM2LTcuODA4bDAuMDk2IDAuMTEyTDQ4MCA1ODEuNTg0Vjg5NmEzMiAzMiAwIDAgMCAzMiAzMmM3Ljk1MiAwIDE1LjEzNi0zLjAwOCAyMC43MzYtNy44MDhsMC4wOTYgMC4xMTIgMjI0LTE5Mi0wLjA5Ni0wLjExMkEzMS44NCAzMS44NCAwIDAgMCA3NjggNzA0YTMxLjg0IDMxLjg0IDAgMCAwLTExLjI2NC0yNC4xOTJ6TTY4Ni44MzIgNzA0TDU0NCA4MjYuNDE2VjU4MS41ODRMNjg2LjgzMiA3MDR6TTU0NCA0NDIuNDE2VjE5Ny41ODRMNjg2LjgzMiAzMjAgNTQ0IDQ0Mi40MTZ6IiBwLWlkPSI0NTMzIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";


    Blockly.Blocks.communicate_bluetooth_central_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_central_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_peripheral_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_peripheral_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_scan = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_scan,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }                                  
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_connect = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_connect,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_is_connected = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_is_connected,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_send = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_send,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_recv = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.communicate_bluetooth_recv,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'METHOD'
                    }                                   
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_bluetooth_method = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.communicate_bluetooth_method,
                message1: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                 args1: [
                {
                  "type": "input_statement",
                  "name": "DO"
                }
                ],
                "tooltip": "",
                colour: QH_BLE_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

   
    return Blockly;
}

exports = addBlocks;


