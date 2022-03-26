/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_BEMFA_COLOR = '#69ae66'
    const QH_BEMFA_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBTUFBQUM3SUVoZkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKUUFBZ0lNQUFQbi9BQUNBNlFBQWRUQUFBT3BnQUFBNm1BQUFGMitTWDhWR0FBQUM4VkJNVkVVQUFBQXJva1lxb2tVdW8wa3cKcEVyLy8vLzQvUG4yK3ZjNHAxSCsvLzdyOWUzMSt2Zkk1OC8zKy9nUVBCcjgvdjM2L2Z2ajh1ZkI0OG1yMmJYeStmVHM5dTd6K2ZVeQpwVXo4L2Z6Ny9mejkvdjI5NGNhdDJiaisvdjcwK3ZYUjZ0ZjYvUHZUNjlubzlPdngrUFBxOWV6bjlPcnQ5dS92OS9IMisvanE5ZTNtCjgrbjkvdjYxM2IvNi9QcjcrL3o1L1ByMSt2WXZwRXJINWM3dTkvSHI5dTVGclYxZHQzSDQrL25QNmRYYzcrSDgvdnpMNTlMKy8vNy8KLy8vKy8vNzgvZnp0OXUvKy92Ny8vLy8vLy8vLy8vLysvdjc3L2Z6dTkvRDkvdjMvLy8vLy8vLysvLzc0L1BuMysvaisvLy8vLy8vLwovLy85L3Y2YXo2ZisvLzcvLy8vLy8vLysvLzc1L1ByNS9QcjkvdjM4L3Z6azh1ajkvdjMvLy8vLy8vLy8vLy8vLy8vLy8vLzkvdjM5Ci92My8vLy85L3Y3NS9QcjgvdnovLy8vLy8vLy8vLy8rLy83OS92NzkvdjM3L2Z6OC92MzgvdjM1L1BuNy9mdisvLzcrL3Y3NS9QbisKLy83Ly8vLy8vLy85L3YzNCsvbm85T3YrL3Y3OS92MzkvdjcvLy8vOC92enorZlgrL3Y3Ky92N2M3dUQ5L3YzOS92MzYvZnY4L2Z6eAorUFA3L2Z2Ky8vL2g4ZVgrLy8vNi9mdjMrL2o5L3YzKy8vNy8vLy8vLy8vKy92NzcvZnY5L3Y3Ky92NzkvdjMvLy8vKy8vNzUvUHI4Ci92Mysvdjc3L2Z2Ky8vLy8vLy85L3YzNy9mdi8vLy85L3YzOC92MysvdjczKy9qKy8vNysvdjc4L3Z6Ky92NysvdjczKy9qKy8vNy8KLy8vOC9mejgvdjMrLy8vNi9mdjgvZnorLy83UTZkYisvdjc5L3Y3Ny9mdjkvdjcrLy83Ky92NzgvZnpmOE9QNy9meisvLy9pOGVYOQovdjM4L3YzKy92NysvdjdLNWRINy9mejkvdjNPNk5YOC9mejgvdjNiN3VEOC92eisvLzc0Ky9uNi9mdjkvdjM4L2Z6OS92MzkvdjMrCi92NzkvdjMxK3ZmbzlPdjgvdnorLy83Ky8vLzgvdnltMWJIOS92Ny8vLy8rLy83OS92MzErdmI1L1ByMisvZjcvZnorLy8vOS92MzUKL1ByMSt2YisvdjcvLy8vKy92NzcvZno0L1BuKy8vNzgvdnp3K1BMMCt2YjgvdjMrLy83OS92MzQrL240Ky9qOS92MysvdjcvLy84ZgpDbm9wQUFBQStuUlNUbE1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUF0YzM0L0JCdC80L0NiTGdJTVg4L0RFd05DdFBwN0FTbVY3OHdaRm9sREF3M2U4ZWJyOGwxeDdwUWYKQ0pQKyticG5OeVl0UGdzbDJyd2FUZmZuYUF3Q2tIMTU2azhIbzZrQ2VuZ1hJUVFuMkFMU0dRbHcwK3pobkNGM2ozVDd0aEl2WVJ6WgovRmtUMFZNNGd3ekZZeTUxa1FxeDZETXgxUnN3eVFGN2ZSMXJrNEU1QVNyYkFuVk9zNlFCUEdBQk4yTUNicmdPRlRzc01sU2FrUW9EClNMenJSd0dJOWM1ZUNSRUhOdU4rR3dpbzg1OHZENzFLQlFkUHYya1FFRUZJNUt0b01nQUFBQUZpUzBkRUJmaHY2Y2NBQUFBSmNFaFoKY3dBQUN4TUFBQXNUQVFDYW5CZ0FBQUFIZEVsTlJRZmxDd2dKQUNGN2dSSytBQUFDVVVsRVFWUTR5Mk5nR002QWtaR0ptWVdSa1pHZwpPbFkyVmlCZ1orVmd4SzhNQ0d4czdld2RPTG00Y2F0azVBRXFjM1J5L3ZYTHhkWE5uUmVYUWo1bVZuNVdEMCt2WDJEZzdTTWd5Q1VrCnpJak5WaEZXWHovL0FJaTZYNEdzb3F4QnJHS3NMT2pxeElHMkJvZUVRcFg5Q2d1WGtJeUlqSXFXWXBYRzhFV01iU3hFVVZ4OFFtSVMKcXd4cjhxK1UxRFJXVmxUYkdUblRNekpCcXJLeWMzTHo4Z3NLQldTTGlvSGNrbEorVmpRVHk4cEI2aW9xcTFoWnBXUlpwZVNxYThERwoxN0xLb3ltc0F3blhON0FxS0VyS1N2R3k4alkyZ1JVMnR5aWhLV3dGaW1hMnNTcExzcmJuZDNRQ3ZkYlZEVmJZbzRKRllXK2ZoR1QvCmhJbVRKaytaQ2xRNURiZkM2YXlxckRObWd1Um56WmJnbkpPQVUrRmNWb2w1ODhGT1c3Q1FWWExSWWx3S0Z5eGg1VnlhQ0FuTVpheTgKeTFmZ05IRWxxK3lxU1JDRnEvR1orR3NOSysvYWRXQjE2emV3Y202Y2hGUGhwczM4ckZ1MkFoa0psZHZVV0xmajl2V3ZIYXpxckR0Mwo3ZDZ6ZDU4RzYvNERZSVVITmRFVUhnSUpweHdHUmlBb2xZdXhoaDhCdStIb01TMDBoY2RCTGxwd2dwVlZHeFRYSjA5bFE0THBOS3NPCnFrS1JNMmZqZnYwNmQxNUE5c0xGUzVldlhGMFBWaGR3N2JxdUhxcENmYlliTjIvZHZzT3FkdmZlL1lUUW1aQXdldkR3a1JSYWVtUmcKbERSZ2ZXei9oSnYxNlhwWUtuLzIvQVdyUHFzaFJwNHhZcFZrbFdCNytRcXE3UFdidDZ3U3JNYllzaUt3ZUdBVWVPZDZIK3lKOXg4KwpjcHJJNHN6YXdLeno2Zk9YKzFrVHYzNWoxV0ExeFZOWW1MR2FzMzcvOFhNenF3Q3JCZjdpaDlHU1ZZR1YxY3BhZzJBcEJYWXE0Y0pzClVBSUE4enRZNDZseTdjNEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpFdE1URXRNRGhVTURrNk1EQTZNVGdyTURBNk1EQ2kKOG1KeUFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREl4TFRFeExUQTRWREE1T2pBd09qTXlLekF3T2pBd05mcUMvUUFBQUFCSgpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=';

    //巴法云主题订阅
    Blockly.Blocks.QDP_tcp_device_cloud_subscription = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_tcp_device_cloud_subscription,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BEMFA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["TCP创客云","1"], ["TCP设备云","2"], ["图云","4"]]
                    },
                    {
                      type: "field_input",
                      name: "Key",
                      "text": "d9efdd0413ec4b74ab0057a0b8675654"
                    },
                    {
                      type: "field_input",
                      name: "topic",
                      "text": "led002"
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "巴法云主题订阅",
                colour:QH_BEMFA_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //巴法云主题消息发送
    Blockly.Blocks.QDP_tcp_device_cloud_theme_push = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_tcp_device_cloud_theme_push,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BEMFA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["TCP创客云","1"], ["TCP设备云","2"], ["图云","4"]]
                    },
                    {
                      type: "field_input",
                      name: "Key",
                      "text": "d9efdd0413ec4b74ab0057a0b8675654"
                    },
                    {
                      type: "field_input",
                      name: "topic",
                      "text": "led002"
                    },
                    {
                      type: "input_value",
                      name: "data"
                    }
                ],
                "tooltip": "巴法云主题消息发送",
                colour:QH_BEMFA_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //串口打印
    Blockly.Blocks.serialPrint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.serialPrint,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.println),"println"], [(Blockly.Msg.print),"print"]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                "tooltip": "串口打印",
                colour:QH_BEMFA_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //变量get
    Blockly.Blocks.QH_variables_get = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:QH_BEMFA_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }     
    };

    return Blockly;
}

exports = addBlocks;




