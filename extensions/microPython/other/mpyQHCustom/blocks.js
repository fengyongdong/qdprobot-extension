/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_CUSTOM_color = '#777777';
    
    const QH_CUSTOM_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MjEwNDA3NzUzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0OTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4LjEyNSIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik0xMjcuMTEwMjI4IDcwMS42NDg0NjFxMCAyNi40Mzg5MjggMTguODEyMzE0IDQ1LjI1MTI0MXQ0Ni4yNjgxMjMgMTguODEyMzE0bDI1My4yMDM1NzUgMCAwIDEyOC4xMjcxMS0zMTguMjg0MDEyIDBxLTI2LjQzODkyOCAwLTQ5LjgyNzIxLTkuNjYwMzc3dC00MC42NzUyNzMtMjYuOTQ3MzY4LTI2Ljk0NzM2OC00MC42NzUyNzMtOS42NjAzNzctNTAuODQ0MDkxbDAtNjM3LjU4NDkwNnEwLTI2LjQzODkyOCA5LjY2MDM3Ny00OS44MjcyMXQyNi45NDczNjgtNDAuNjc1MjczIDQwLjY3NTI3My0yNy40NTU4MDkgNDkuODI3MjEtMTAuMTY4ODE4bDc2Ni43Mjg4OTggMHEyNi40Mzg5MjggMCA0OS44MjcyMSAxMC4xNjg4MTh0NDAuNjc1MjczIDI3LjQ1NTgwOSAyNy40NTU4MDkgNDAuNjc1MjczIDEwLjE2ODgxOCA0OS44MjcyMWwwIDE4Ny4xMDYyNTYtMTI4LjEyNzExIDEuMDE2ODgycS0yLjAzMzc2NC0yNS40MjIwNDYtMTkuODI5MTk2LTQzLjIxNzQ3OHQtNDQuMjM0MzU5LTE3Ljc5NTQzMmwtNjM3LjU4NDkwNiAwcS0yNy40NTU4MDkgMC00Ni4yNjgxMjMgMTguODEyMzE0dC0xOC44MTIzMTQgNDUuMjUxMjQxbDAgMzgyLjM0NzU2N3pNMTAxNi44ODE4MjcgNTAxLjMyMjc0MXE2LjEwMTI5MSA5LjE1MTkzNiA3LjYyNjYxNCAyMy4zODgyODJ0LTEwLjY3NzI1OSAyOC40NzI2OTFxLTExLjE4NTcgMTQuMjM2MzQ2LTE4LjMwMzg3MyAyMS4zNTQ1MThsLTguMTM1MDU1IDguMTM1MDU1LTEwNS43NTU3MS05NS41ODY4OTJxNS4wODQ0MDktNi4xMDEyOTEgMTQuMjM2MzQ2LTE0Ljc0NDc4NnQxNC4yMzYzNDYtMTMuNzI3OTA1cTE0LjIzNjM0Ni0xNC4yMzYzNDYgMzAuNTA2NDU1LTEyLjcxMTAyM3QyNy40NTU4MDkgNi42MDk3MzJxMTIuMjAyNTgyIDUuMDg0NDA5IDI2LjQzODkyOCAxOC44MTIzMTR0MjIuMzcxNCAyOS45OTgwMTR6TTYxMy4xNzk3NDIgNzg5LjEwMDI5OHEzLjA1MDY0NS0zLjA1MDY0NSAxNC4yMzYzNDYtMTYuMjcwMTA5dDI3Ljk2NDI1LTMyLjU0MDIxOCAzNy4xMTYxODctNDIuMjAwNTk2IDQwLjY3NTI3My00Ni4yNjgxMjNxNDguODEwMzI4LTU0LjkxMTYxOSAxMDguODA2MzU2LTEyMi4wMjU4MTlsMTA3Ljc4OTQ3NCA5NS41ODY4OTJxLTU5Ljk5NjAyOCA2OC4xMzEwODItMTA4LjgwNjM1NiAxMjMuMDQyNzAxLTIwLjMzNzYzNyAyMy4zODgyODItNDAuNjc1MjczIDQ2LjI2ODEyM3QtMzcuMTE2MTg3IDQxLjE4MzcxNC0yNy40NTU4MDkgMjkuOTk4MDE0LTEyLjcxMTAyMyAxMy43Mjc5MDVxLTkuMTUxOTM2IDEyLjIwMjU4Mi0yNS40MjIwNDYgMjAuMzM3NjM3LTcuMTE4MTczIDUuMDg0NDA5LTIxLjM1NDUxOCAxMS4xODU3dC0yOS45OTgwMTQgMTIuMjAyNTgyLTI5LjQ4OTU3MyAxMC42NzcyNTktMjAuODQ2MDc3IDUuNTkyODVxLTI2LjQzODkyOCA1LjA4NDQwOS0yMy4zODgyODItMjIuMzcxNCAxLjAxNjg4Mi03LjExODE3MyA0LjA2NzUyNy0yMS44NjI5NTl0Ni42MDk3MzItMzAuNTA2NDU1IDcuMTE4MTczLTI4Ljk4MTEzMiA1LjU5Mjg1LTE4LjMwMzg3M3E1LjA4NDQwOS0xMy4yMTk0NjQgMTcuMjg2OTkxLTI4LjQ3MjY5MXoiIHAtaWQ9IjQ0OTYiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=';

    Blockly.Blocks.factory_import = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: 'import %1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "module",
                      "text": "module",
                      "spellcheck": false
                    }   
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.factory_from_import = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: 'from %1 import %2',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "path",
                      "text": "ESP32",
                      "spellcheck": false
                    },
                    {
                      "type": "field_input",
                      "name": "module",
                      "text": "*",
                      "spellcheck": false
                    }   
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.factory_declare = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: '%1 = %2()',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "NAME",
                      "text": "test",
                      "spellcheck": false
                    },
                    {
                      "type": "field_input",
                      "name": "TYPE",
                      "text": "Test",
                      "spellcheck": false
                    }   
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.factory_block = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: '%1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VALUE",
                      "text": "Hello World!",
                      "spellcheck": false
                    }  
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.factory_block_return = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: '%1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VALUE",
                      "text": "test",
                      "spellcheck": false
                    } 
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.factory_block_return_bool = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: '%1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VALUE",
                      "text": "test",
                      "spellcheck": false
                    } 
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.factory_block_var = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: '%1 = %2',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CUSTOM_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "NAME",
                      "text": "var",
                      "spellcheck": false
                    },
                    {
                      "type": "input_value",
                      "name": "VALUE"
                    } 
                ],
                colour: QH_CUSTOM_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    

    return Blockly;
}

exports = addBlocks;


