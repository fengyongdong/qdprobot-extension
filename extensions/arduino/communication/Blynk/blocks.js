/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const blynk_color = '#24c48e';
    const QH_OTHER_COLOR = '#808080';

const QH_BLYNK_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIxOTE0NDM4MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC4yNyA1NTguMjhINDIzLjV2MTg0LjU1bDExMC44MyAwLjQ1YzUxLjEgMCA5Mi42Ny00MS41MiA5Mi42Ny05Mi41cy00MS42LTkyLjUtOTIuNzMtOTIuNXpNNTM0LjI3IDMwMy4yOGwtMTEwLjc3LTAuMTF2MTg1LjExaDExMC43N2M1MS4xMyAwIDkyLjczLTQxLjUgOTIuNzMtOTIuNXMtNDEuNi05Mi41LTkyLjczLTkyLjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIzNDEzIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMzUuMmE0ODQuNDcgNDg0LjQ3IDAgMSAwIDM4IDE4OCA0ODEuMzQgNDgxLjM0IDAgMCAwLTM4LTE4OHpNNjk3IDY1MC43OGMwIDg5LjYtNzMgMTYyLjUtMTYyLjczIDE2Mi41aC0wLjE0bC0xMjEuOTMtMC41Yy0zMi4zNyAwLTU4LjctMjYuNjctNTguNy01OS4zOVYyOTIuNTVjMC0zMi43NSAyNi4zNy01OS4zOSA1OC43OC01OS4zOWwxMjIgMC4xM2M4OS43IDAgMTYyLjcgNzIuOSAxNjIuNyAxNjIuNWExNjIuMiAxNjIuMiAwIDAgMS02MS45NSAxMjcuNUExNjIuMiAxNjIuMiAwIDAgMSA2OTcgNjUwLjc4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMzQxNCI+PC9wYXRoPjwvc3ZnPg==';

const QH_SMARTCONFIG_ICO2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAABfklEQVR42u3aWw6DMAwEwN7/0u0JkBrFGxuYfCLKY5ASO9vPJzC+F2P1t6vXXL3XiAELFqzyl/xn7Fxn2vP8hQ4LFqxRWOnJeGdxqDq+5QALFqxHYq1eP13QwoIFC9aJCbiqKIUFC9YzsRKNa9Wk/opdB1iwYLXs5U84fpt0BxYsWNGscNoiEH9+WLBgtWNVFX47TWmiAU4XurBgwerB6vqjR+LDVAUfl88MCxasUViJybLqnERxW5bowIIFqx0rAZoIL9JFKSxYsGZhJQq8k+encwZYsGDNxToZBFSFo23PBgsWrFFYJzfeEoFI1fGju4uwYME6hhVPfQ829lspNCxYsFqw0kXj0cm4CB0WLFj9WN/wSDTDVQsILFiw7oeVGImCNr0gHAWCBQtWCdbkACLdSC8vLLBgwRqFle7aq164bYGCBQvW47ESReNOs10WssKCBeu1WFVNb7yohgUL1iisxM2qJvjExx63+QcLFqz2wKIqiE039rBgwRqL9QMi+YmYDjUTWwAAAABJRU5ErkJggg==';


    Blockly.Blocks.QDP_esp32_blynk_server = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.QDP_esp32_blynk_server,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'qdp_server_add'
                    },
                    {
                        type: 'input_value',
                        name: 'qdp_wifi_ssid'
                    },
                    {
                        type: 'input_value',
                        name: 'qdp_wifi_pass'
                    },
                    {
                        type: 'input_value',
                        name: 'qdp_auth_key'
                    }
                   
                ],
                "tooltip": 'wifi连接信息及blynk对应服务信息',
                colour: blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.QDP_esp32_blynk_web_smartconfig = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.QDP_esp32_blynk_smartconfig,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SMARTCONFIG_ICO2,
                        width: 60,
                        height: 60
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'server_add'
                    },
                    {
                        type: 'input_value',
                        name: 'auth_key'
                    }
                ],
                "tooltip": 'blynk web网页一键配网\n上传后查找qdprobot热点加入，密码12345678\n自动转到配网页面(如没有自动跳转，也可以连接热点后在浏览器输入：192.168.4.1进入网页）\n选第一项，进入后选当前环境可用的wifi名，并在第一项中输入密码，最下面save,等10秒后自动切回环境wifi即可。\n如果只是想测试功能可以先写入一个错误的wifi,然后再写入这个程序 ，否则会记录保存最后正确的wifi信息并自动连接，不会再出现配网页。',
                colour: blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //当设备连接到blynk云服
    Blockly.Blocks.QDP_BLYNK_CONNECTED = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_BLYNK_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //当设备连接上APP
    Blockly.Blocks.QDP_BLYNK_APP_CONNECTED = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_BLYNK_APP_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //当设备断开APP
    Blockly.Blocks.QDP_BLYNK_APP_DISCONNECTED = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_BLYNK_APP_DISCONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //硬件连接服务器状态
    Blockly.Blocks.QDP_blynk_iot_CONNECTED = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_CONNECTED,
                args0: [
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
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
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //blynk解析数据
    Blockly.Blocks.blynk_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.blynk_param,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'param',
                        options:[[(Blockly.Msg.param),"param"], [(Blockly.Msg.param+'[0]'),"param[0]"], [(Blockly.Msg.param+'[1]'),"param[1]"], [(Blockly.Msg.param+'[2]'),"param[2]"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.int),".asInt()"], [(Blockly.Msg.String),".asStr()"], [(Blockly.Msg.float),".asFloat()"], [(Blockly.Msg.Double),".asDouble()"]]
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    var BLYNK_VIRTUALPIN_SELECT = [
["V0", "V0"],
["V1", "V1"],
["V2", "V2"],
["V3", "V3"],
["V4", "V4"],
["V5", "V5"],
["V6", "V6"],
["V7", "V7"],
["V8", "V8"],
["V9", "V9"],
["V10", "V10"],
["V11", "V11"],
["V12", "V12"],
["V13", "V13"],
["V14", "V14"],
["V15", "V15"],
["V16", "V16"],
["V17", "V17"],
["V18", "V18"],
["V19", "V19"],
["V20", "V20"],
["V21", "V21"],
["V22", "V22"],
["V23", "V23"],
["V24", "V24"],
["V25", "V25"]
];
var BLYNK_VIRTUALPIN_SELECT1 = [
["ALL", "ALL"],
["V0", "V0"],
["V1", "V1"],
["V2", "V2"],
["V3", "V3"],
["V4", "V4"],
["V5", "V5"],
["V6", "V6"],
["V7", "V7"],
["V8", "V8"],
["V9", "V9"],
["V10", "V10"],
["V11", "V11"],
["V12", "V12"],
["V13", "V13"],
["V14", "V14"],
["V15", "V15"],
["V16", "V16"],
["V17", "V17"],
["V18", "V18"],
["V19", "V19"],
["V20", "V20"],
["V21", "V21"],
["V22", "V22"],
["V23", "V23"],
["V24", "V24"],
["V25", "V25"]
];


    //从APP获取数据
    Blockly.Blocks.QDP_blynk_iot_get_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_get_data,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //物联网推送数据
    Blockly.Blocks.QDP_blynk_iot_push_data_request = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_push_data_request,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'Vname'
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "更新时间在APP组件内设置，blynk向主机请求数据，适用于各种数据的显示，不用在主机端推送刷新，不会引发掉线。",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //物联网-同步管脚数据
    Blockly.Blocks.QDP_blynk_iot_syncVirtual = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_syncVirtual,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT1
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //物联网-发送数据到app
    Blockly.Blocks.QDP_blynk_iot_push_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_push_data,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    }
                ],
                "tooltip": "不要重复发送大量数据，会导致断线，谨慎使用！",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    var qdprobotESP32_blynktime=[["#1", "1"],
["#2", "2"],
["#3", "3"],
["#4", "4"],
["#5", "5"],
["#6", "6"],
["#7", "7"],
["#8", "8"],
["#9", "9"],
["#10", "10"],
["#11", "11"],
["#12", "12"],
["#13", "13"],
["#14", "14"],
["#15", "15"],
["#16", "16"]];

    //blynk 定时器
    Blockly.Blocks.QDP_Blynk_iot_timer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_Blynk_iot_timer,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pinb',
                        options:qdprobotESP32_blynktime
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "更新时间不能小于1秒，或两个之间不能小于1秒，不然会引发掉线，尽量不用这个功能或少用！",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //物联网-LED组件颜色&开关
    Blockly.Blocks.QDP_blynk_iot_WidgetLED_COLOR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_WidgetLED_COLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'RGB_LED_COLOR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options:[[Blockly.Msg.HIGH, "HIGH"], [Blockly.Msg.LOW, "LOW"]]
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LED组件颜色&亮度
    Blockly.Blocks.QDP_blynk_iot_WidgetLED_VALUE = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_WidgetLED_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'RGB_LED_COLOR'
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //发送邮件
    Blockly.Blocks.QDP_blynk_email = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_email,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'input_value',
                        name: 'email_add'
                    },
                    {
                        type: 'input_value',
                        name: 'Subject'
                    },
                    {
                        type: 'input_value',
                        name: 'content'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //发送通知（国内用不了，先关掉此功能）
    /*Blockly.Blocks.QDP_blynk_notify = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_notify,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'input_value',
                        name: 'content'
                    }
                ],
                "tooltip": "中国境内服务器此功能不可以用。",
                colour:blynk_color,
                extensions: ['shape_statement']
            });
        }
    };
    */

    //终端清屏
    Blockly.Blocks.QDP_blynk_terminal_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_terminal_clear,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //从终端获取字符串
    Blockly.Blocks.QDP_blynk_iot_terminal_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_terminal_get,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //终端组件显示文本
    Blockly.Blocks.QDP_blynk_terminal = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_terminal,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'content'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD显示
    Blockly.Blocks.QDP_blynk_lcd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_lcd,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'x'
                    },
                    {
                        type: 'input_value',
                        name: 'y'
                    },
                    {
                        type: 'input_value',
                        name: 'value'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //LCD清屏
    Blockly.Blocks.QDP_blynk_lcd_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_lcd_clear,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

     //Table小部件添加数据
    Blockly.Blocks.QDP_blynk_table = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_table,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.ADD,'add'],[Blockly.Msg.UPDATE,'update']]
                    },
                    {
                        type: 'input_value',
                        name: 'id'
                    },
                    {
                        type: 'input_value',
                        name: 'mingcheng'
                    },
                    {
                        type: 'input_value',
                        name: 'shujv'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //Table小部件数据操作
    Blockly.Blocks.QDP_blynk_table_highlight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_table_highlight,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.PICK,'pick'],[Blockly.Msg.SELECT,'select'],[Blockly.Msg.DESELECT,'deselect']]
                    },
                    {
                        type: 'input_value',
                        name: 'id'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //Table小部件数据清除
    Blockly.Blocks.QDP_blynk_table_cleardata = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_table_cleardata,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //时间输入
    Blockly.Blocks.QDP_blynk_time_input_1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_time_input_1,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //视频流
    Blockly.Blocks.QDP_blynk_videourl = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_videourl,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'url'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    var qdprobotESP32_BT9=[["1", "1"],
["2", "2"],
["3", "3"],
["4", "4"],
["5", "5"]];

     //桥接授权码
    Blockly.Blocks.QDP_blynk_bridge_auth = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_bridge_auth,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options:qdprobotESP32_BT9
                    },
                    {
                        type: 'input_value',
                        name: 'auth'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

     //桥接授权码
    Blockly.Blocks.QDP_blynk_bridge_digitalWrite = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_bridge_digitalWrite,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options:qdprobotESP32_BT9
                    },
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options:[[Blockly.Msg.HIGH, "HIGH"], [Blockly.Msg.LOW, "LOW"]]
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //桥接模拟输出
    Blockly.Blocks.QDP_blynk_bridge_AnaloglWrite = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_bridge_AnaloglWrite,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options:qdprobotESP32_BT9
                    },
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //桥接虚拟管脚
    Blockly.Blocks.QDP_blynk_bridge_VPin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_bridge_VPin,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options:qdprobotESP32_BT9
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //桥接虚拟管脚
    Blockly.Blocks.QDP_blynk_WidgetRTC_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_WidgetRTC_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //播放音乐组件
    Blockly.Blocks.QDP_blynk_iot_playmusic = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_iot_playmusic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO1"
                    },
                    {
                      type: "input_statement",
                      name: "DO2"
                    },
                    {
                      type: "input_statement",
                      name: "DO3"
                    },
                    {
                      type: "input_statement",
                      name: "DO4"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //光线传感器
    Blockly.Blocks.QDP_blynk_light = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_light,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };
    //重力传感器
    Blockly.Blocks.QDP_blynk_gravity = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_blynk_gravity,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECT
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
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
                colour:QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }     
    };



   
    return Blockly;
}

exports = addBlocks;
