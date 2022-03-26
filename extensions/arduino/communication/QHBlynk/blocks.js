/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const blynk_color = '#24c48e';

const QH_BLYNK_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIxOTE0NDM4MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC4yNyA1NTguMjhINDIzLjV2MTg0LjU1bDExMC44MyAwLjQ1YzUxLjEgMCA5Mi42Ny00MS41MiA5Mi42Ny05Mi41cy00MS42LTkyLjUtOTIuNzMtOTIuNXpNNTM0LjI3IDMwMy4yOGwtMTEwLjc3LTAuMTF2MTg1LjExaDExMC43N2M1MS4xMyAwIDkyLjczLTQxLjUgOTIuNzMtOTIuNXMtNDEuNi05Mi41LTkyLjczLTkyLjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIzNDEzIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMzUuMmE0ODQuNDcgNDg0LjQ3IDAgMSAwIDM4IDE4OCA0ODEuMzQgNDgxLjM0IDAgMCAwLTM4LTE4OHpNNjk3IDY1MC43OGMwIDg5LjYtNzMgMTYyLjUtMTYyLjczIDE2Mi41aC0wLjE0bC0xMjEuOTMtMC41Yy0zMi4zNyAwLTU4LjctMjYuNjctNTguNy01OS4zOVYyOTIuNTVjMC0zMi43NSAyNi4zNy01OS4zOSA1OC43OC01OS4zOWwxMjIgMC4xM2M4OS43IDAgMTYyLjcgNzIuOSAxNjIuNyAxNjIuNWExNjIuMiAxNjIuMiAwIDAgMS02MS45NSAxMjcuNUExNjIuMiAxNjIuMiAwIDAgMSA2OTcgNjUwLjc4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMzQxNCI+PC9wYXRoPjwvc3ZnPg==';


    Blockly.Blocks.SimpleBlynk_init = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.SimpleBlynk_init,
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
                        name: 'pin1',
                        text:'2'
                    },
                    {
                        type: 'input_value',
                        name: 'pin2',
                        text:'8'
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
                        name: 'auth'
                    },
                    {
                        type: 'input_value',
                        name: 'ip'
                    }
                ],
                "tooltip": '连接IOTstart物联网模块，设置对应参数，二维码为Blynk测试项目克隆码，可用Blynk APP扫码得到测试项目。\n注:此处的服务器号用英文逗号分开！\nIOTstart AT指令集示例：\n1.网络配置：例AT+WIFI=[\"QDP\",\"www.qdprobot.com\"]。\n2.Blynk配置：例AT+CONFIGURATION=[\"getwTFQ55KJLQ4ZVbvCYDQdiAJ4hTBMM\",\"182,61,28,31\"]。\n3.板载语音播报：例AT+VOICE=[0]。\n4.板载数字播报：例AT+DIGITAL_PLAY=[666]。\n5.Blynk虚拟引脚数据发送，第一项为虚拟引脚，第二项为数据值 例AT+BLYNK_WRITE=["1","1"]。\n6.开发板重启：AT+RESET。\n7.所有配置重启后生效！\n8.单击左按键：控制板载指示灯及功率输出。\n9.单击右按键：控制板载全彩灯状态。\n10.web网络配置：按下复位按键，听到提示音同时按下左右两按键直至板载全彩灯红灯闪烁进行web网络配置，连IOTstart热点进行配网,热点名称：IOTstart,连接后等约30秒自动进入配网，选择对应的wifi及帐号，\n重启绿灯闪烁，联网成功及失败均有语音提示，联网失败自动启用离线模式。\n11.网络状态更新： 5秒检测一次，未连接到网络串口打印NO CONNECTION提示通信故障，红灯亮\n12.服务器状态更新： 5秒检测一次，连接到网络但未连接服务器串口打印NO SERVER CONNECTION提示通信故障，黄灯亮。\n注：V20 V21 V22为系统占用脚，三个不能用在项目中。\n',
                colour: blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

     //iotstart连接事件
    Blockly.Blocks.SimpleBlynk_CONNECTION_EVENT = {
        init: function () {
            this.jsonInit({
                message0: '%1 %2 %3 %4',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.SIMPLEBLYNK_WIFI_DISCONNECTED,'0'],
                                [Blockly.Msg.SIMPLEBLYNK_SERVER_DISCONNECTED,'1']
                                ]
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "对应事件产生会执行此函数，5秒刷新一次",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //SimpleBlynk读取引脚事件
    Blockly.Blocks.SimpleBlynk_ReadBlynkData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SimpleBlynk_ReadBlynkData,
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
                "tooltip": "当Blynk组件发生数据变化时。",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

        //simpleBlynk虚拟管脚选择
    var BLYNK_VIRTUALPIN_SELECTV2 = [
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
    ["V23", "V23"],
    ["V24", "V24"],
    ["V25", "V25"],
    ["V26", "V26"],
    ["V27", "V27"],
    ["V28", "V28"],
    ["V29", "V29"],
    ["V30", "V30"],
    ["V31", "V31"],
    ["V32", "V32"],
    ["V33", "V33"],
    ["V34", "V34"],
    ["V35", "V35"],
    ["V36", "V36"],
    ["V37", "V37"],
    ["V38", "V38"],
    ["V39", "V39"],
    ["V40", "V40"]
    ];

    //SimpleBlynk读取引脚事件
    Blockly.Blocks.SimpleBlynk_RETRIEVE_DATA = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SimpleBlynk_RETRIEVE_DATA,
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
                        options:BLYNK_VIRTUALPIN_SELECTV2
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "当Blynk组件发生数据变化时。",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //SimpleBlynk 接收数据
    Blockly.Blocks.SimpleBlynk_ReadData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SimpleBlynk_ReadData,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.SimpleBlynk_String),'String'],[(Blockly.Msg.SimpleBlynk_Int),'Int'],[(Blockly.Msg.SimpleBlynk_Float),'Float']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Pos',
                        options:[['1','1'],['2','2'],['3','3']]
                    }
                ],
                "tooltip": "",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //板载语音或数字播报
    Blockly.Blocks.SimpleBlynk_ONBOARD_BROADCAST = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SimpleBlynk_ONBOARD_BROADCAST,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 30,
                        height: 30
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.SimpleBlynk_ReadData_voice),"1"], [(Blockly.Msg.SimpleBlynk_ReadData_number),"2"]]
                    },
                    {
                        type: 'input_value',
                        name: 'value'
                    }
                ],
                "tooltip": "板载语音或者放入数字变量形式内容播报",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //板载语音或数字播报
    Blockly.Blocks.QDPESP8266Voice_Dropdown = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options:[ 
                        [Blockly.Msg.SimpleBlynk_1617171151166358_77,'0'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_78,'1'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_79,'2'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_80,'3'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_81,'6'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_82,'7'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_83,'8'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_84,'9'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_85,'15'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_86,'16'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_87,'17'],
                        ['0','18'],
                        ['1','19'],
                        ['2','20'],
                        ['3','21'],
                        ['4','22'],
                        ['5','23'],
                        ['6','24'],
                        ['7','25'],
                        ['8','26'],
                        ['9','27'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_88,'28'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_89,'29'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_90,'30'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_91,'31'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_92,'32'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_93,'33'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_94,'34'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_95,'35'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_96,'36'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_97,'37'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_98,'39'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_99,'40'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_100,'41'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_101,'42'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_102,'43'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_103,'44'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_104,'45'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_105,'46'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_106,'47'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_107,'48'],
                        [Blockly.Msg.SimpleBlynk_1617171138070768_10,'49'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_108,'50'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_109,'51'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_110,'52'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_111,'53'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_112,'54'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_113,'55'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_114,'56'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_115,'57'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_116,'58'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_117,'59'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_118,'60'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_119,'64'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_120,'65'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_121,'68'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_122,'69'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_123,'70'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_124,'71'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_125,'72'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_126,'75'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_127,'77'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_128,'78'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_129,'79'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_130,'80'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_131,'81'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_132,'82'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_133,'83'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_134,'84'],
                        [Blockly.Msg.SimpleBlynk_1617171138070768_354,'85'],
                        [Blockly.Msg.SimpleBlynk_1617171138070768_343,'86'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_135,'87'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_136,'88'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_137,'89'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_138,'90'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_139,'91'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_140,'92'],
                        [Blockly.Msg.SimpleBlynk_1617171151166358_141,'93']
                        ]
                    }
                ],
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //板载语音或数字播报
    Blockly.Blocks.SimpleBlynk_RESTART = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SimpleBlynk_RESTART,
                args0: [
                    {
                    type: 'field_image',
                    src: QH_BLYNK_ICO,
                    width: 30,
                    height: 30
                    }
                ],
                "tooltip": "当变更wifi或服务器信息时可以发送，重启IOTstart",
                colour:blynk_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //SimpleBlynk 虚拟引脚数据发送
    Blockly.Blocks.SimpleBlynk_BLYNK_WRITE = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.SimpleBlynk_BLYNK_WRITE,
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
                        type: 'field_dropdown',
                        name: 'Vpin',
                        options:BLYNK_VIRTUALPIN_SELECTV2
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


   



   
    return Blockly;
}

exports = addBlocks;
