/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_ESPNOW_COLOR = '#5ba574'; 

    const QH_ESPNOW_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IGZvbnQtd2VpZ2h0PSJib2xkIiBzdHJva2U9IiMwMDAiIHRyYW5zZm9ybT0ibWF0cml4KDIuMDQwOTU2NTgxMjMzMjc0NCwwLDAsNC40NjEyNDEzNTMzNjg2NTQsLTg2Ljc4OTM5NTUzMTkzNTI0LC0xNjEuNzIzODgzNTI1NzU0MjcpICIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18xIiB5PSI1OC42Njc4MzUiIHg9IjQzLjA1NDkyIiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjZmZmZmZmIj5OT1c8L3RleHQ+CiA8L2c+Cjwvc3ZnPg==";

    Blockly.Blocks.communicate_espnow_init = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_espnow_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CHNL',
                        options: [['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13']]
                    }
                ],
                "tooltip": "初始化ESPNow并设置频道，频道范围0-13",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.network_espnow_mac = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.network_espnow_mac,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "获取本机MAC地址",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.network_espnow_info = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.network_espnow_info,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    }
                ],
                "tooltip": "",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.network_espnow_send = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.network_espnow_send,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    { 
                        type: "input_value", 
                        name: "mac" 
                    },
                    { 
                        type: "input_value", 
                        name: "content" 
                    }
                ],
                "tooltip": "MAC地址为12位，如MAC为\"FFFFFFFFFFFF\"，则广播发送；最多发送250字节内容",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.network_espnow_recv = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.network_espnow_recv,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CHNL',
                        options: [[Blockly.Msg.ETHERNET_MAC_CONTENT,' '],[Blockly.Msg.ETHERNET_MAC,'[0]'],[Blockly.Msg.ETHERNET_CONTENT,'[1]']]
                    }
                ],
                "tooltip": "",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.network_espnow_recv_handle = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.network_espnow_recv_handle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_ESPNOW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "VAR" 
                    },
                    { 
                        type: "input_value", 
                        name: "METHOD" 
                    }
                ],
                "tooltip": "",
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.network_espnow_recv_method = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.network_espnow_recv_method,
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
                colour: QH_ESPNOW_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };
    
    return Blockly;
}    

exports = addBlocks;


