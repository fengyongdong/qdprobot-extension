/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_MPY_BLYNK_COLOR = '#2fad7a'; 

    const QH_BLYNK_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIxOTE0NDM4MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC4yNyA1NTguMjhINDIzLjV2MTg0LjU1bDExMC44MyAwLjQ1YzUxLjEgMCA5Mi42Ny00MS41MiA5Mi42Ny05Mi41cy00MS42LTkyLjUtOTIuNzMtOTIuNXpNNTM0LjI3IDMwMy4yOGwtMTEwLjc3LTAuMTF2MTg1LjExaDExMC43N2M1MS4xMyAwIDkyLjczLTQxLjUgOTIuNzMtOTIuNXMtNDEuNi05Mi41LTkyLjczLTkyLjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIzNDEzIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMzUuMmE0ODQuNDcgNDg0LjQ3IDAgMSAwIDM4IDE4OCA0ODEuMzQgNDgxLjM0IDAgMCAwLTM4LTE4OHpNNjk3IDY1MC43OGMwIDg5LjYtNzMgMTYyLjUtMTYyLjczIDE2Mi41aC0wLjE0bC0xMjEuOTMtMC41Yy0zMi4zNyAwLTU4LjctMjYuNjctNTguNy01OS4zOVYyOTIuNTVjMC0zMi43NSAyNi4zNy01OS4zOSA1OC43OC01OS4zOWwxMjIgMC4xM2M4OS43IDAgMTYyLjcgNzIuOSAxNjIuNyAxNjIuNWExNjIuMiAxNjIuMiAwIDAgMS02MS45NSAxMjcuNUExNjIuMiAxNjIuMiAwIDAgMSA2OTcgNjUwLjc4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMzQxNCI+PC9wYXRoPjwvc3ZnPg==';
  
    Blockly.Blocks.mpy_variables_name = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'name'
                    }                               
                ],
                "tooltip": "变量名",
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    
    Blockly.Blocks.mpython_blynk_setup = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_setup,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'server'
                    },
                    {
                        type: 'input_value',
                        name: 'port'
                    },
                    {
                        type: 'input_value',
                        name: 'auth'
                    }                                    
                ],
                "tooltip": "服务器默认为 182.61.28.31，端口默认为 8080",
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_app_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_app_data,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'virtual_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'virtual_pin_val'
                    },
                    {
                      "type": "input_statement",
                      "name": "DO"
                    }                                    
                ],
                "tooltip": "虚拟管脚：V0 ~ V255",
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    //blynk定时器
    Blockly.Blocks.mpython_blynktimer = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynktimer,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                    "type": "input_value",
                    "name": "Num"
                    },
                    {
                        "options": [
                        [Blockly.Msg.MIXLY_PYTHON_PERIODIC, 'False'],
                        [Blockly.Msg.MIXLY_PYTHON_ONE_SHOT, 'True']
                        ],
                        "type": "field_dropdown",
                        "name": "Timer_mode"
                    },
                    {
                        "type": "input_value",
                        "name": "period"
                    },
                    {
                      "type": "input_statement",
                      "name": "DO"
                    }                                   
                ],
                "tooltip": '注意:\n定时器序号为自动获取，自上而下，从0开始且连续，不可"定时器0，定时器2"，此处暴露序号参数为方便查看！\n参数:\nno_timers_err=False-如果所有计时器都停止，禁用异常触发',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };


    Blockly.Blocks.mpython_blynk_stop_timers = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_stop_timers,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'timer_num'
                    }
                    ],
                "tooltip": '注意:\n定时器序号为自动获取，自上而下，从0开始且连续，不可"定时器0，定时器2"，此处暴露序号参数为方便查看！\n参数:\nno_timers_err=False-如果所有计时器都停止，禁用异常触发',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_get_timers = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_get_timers,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "建议放在 \'一直重复\' 中循环执行",
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mpython_blynktimer_run = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynktimer_run,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": '建议放在 \'一直重复\' 中循环执行',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_run = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_run,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "建议放在 \'一直重复\' 中循环执行",
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_sensor_data_to_app = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_sensor_data_to_app,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'sensor_data'
                    },
                    {
                        type: 'input_value',
                        name: 'virtual_pin'
                    }
                    ],
                "tooltip": '虚拟管脚：V0 ~ V255',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_app_notify = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_app_notify,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'notification'
                    }
                    ],
                "tooltip": '',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //连接上 Blynk
    Blockly.Blocks.mpython_blynk_on_connected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.mpython_blynk_on_connected,
                message1: '%1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_statement",
                      "name": "DO"
                    }                                   
                ],
                "tooltip": '连接上 Blynk',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    //blynk定时器
    Blockly.Blocks.mpython_blynk_on_disconnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.mpython_blynk_on_disconnected,
                message1:'%1',
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_statement",
                      "name": "DO"
                    }                                   
                ],
                "tooltip": '当 Blynk 断开连接时',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    Blockly.Blocks.mpython_blynk_sync_virtual = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_sync_virtual,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'virtual_pin'
                    }
                    ],
                "tooltip": '虚拟管脚状态',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_email = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_email,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'TargetEmail'
                    },
                    {
                        type: 'input_value',
                        name: 'subject'
                    },
                    {
                        type: 'input_value',
                        name: 'body'
                    }
                    ],
                "tooltip": '虚拟管脚状态',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpython_blynk_set_property = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.mpython_blynk_set_property,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLYNK_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'virtual_pin'
                    },
                    {
                        type: 'input_value',
                        name: 'attribute_name'
                    },
                    {
                        type: 'input_value',
                        name: 'attribute_value'
                    }
                    ],
                "tooltip": '虚拟管脚状态',
                colour: QH_MPY_BLYNK_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };



    return Blockly;
}

exports = addBlocks;


