/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_WEB_COLOR = '#7b68ee';
    const QH_WEB_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwNzkwNTUwMTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1OSA3OS4yN0gxNjVhOTAgOTAgMCAwIDAtOTAgOTB2Njk0YTkwIDkwIDAgMCAwIDkwIDkwaDY5NGE5MCA5MCAwIDAgMCA5MC05MHYtNjk0YTkwIDkwIDAgMCAwLTkwLTkweiBtLTY5MyA2MGg2OTRhMzAgMzAgMCAwIDEgMzAgMzB2MTQ1SDEzNnYtMTQ1YTMwIDMwIDAgMCAxIDMwLTMweiBtNjkzIDc1NEgxNjVhMzAgMzAgMCAwIDEtMzAtMzB2LTQ4OWg3NTR2NDg5YTMwIDMwIDAgMCAxLTMwIDMweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjMuNDcgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuMDggMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODIuNjkgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyNCI+PC9wYXRoPjwvc3ZnPg==';

     //网页编辑初始化
    Blockly.Blocks.QDP_esp32_web_page_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_esp32_web_page_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "要显示的网页元素放入这个块内",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页插入元素
    Blockly.Blocks.QDP_esp32_web_page_add = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_add,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'addType',
                        options:[
                                [Blockly.Msg.NumberCard,'NumberCard'],
                                [Blockly.Msg.HumidityCard,'HumidityCard'],
                                [Blockly.Msg.StatusCard,'StatusCard'],
                                [Blockly.Msg.ButtonCard,'ButtonCard'],
                                [Blockly.Msg.GaugeChart,'GaugeChart']
                                ]
                    },
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "name"
                    }
                ],
                "tooltip": "名称只支持英文",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页插入温度元素
    Blockly.Blocks.QDP_esp32_web_page_addTemperatureCard = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_addTemperatureCard,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "name"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[['°C','0'],
                                ['°F','1'],
                                ['K','2'],
                                ['°R','3'],
                                ['°De','4'],
                                ['°N','5']]
                    }
                ],
                "tooltip": "名称只支持英文",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页插入滑杆元素
    Blockly.Blocks.QDP_esp32_web_page_addSliderCard = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_addSliderCard,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "name"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[Blockly.Msg.QDP_ESP8266_web_page_Slider_type0,'0'],
                                [Blockly.Msg.QDP_ESP8266_web_page_Slider_type1,'1'],
                                [Blockly.Msg.QDP_ESP8266_web_page_Slider_type2,'2'],
                                [Blockly.Msg.QDP_ESP8266_web_page_Slider_type3,'3']]
                    }
                ],
                "tooltip": "名称只支持英文",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页链接滑杆变化事件
    Blockly.Blocks.QDP_esp32_web_page_attachSliderChanged = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_attachSliderChanged,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [

                ],
                "tooltip": "如果插入滑杆组件,用于链接滑杆事件.放在初始化内",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页滑杆ID
    Blockly.Blocks.QDP_esp32_web_page_Slider_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_esp32_web_page_Slider_id,
                args0: [
                    {
                      type: "input_value",
                      name: "id"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //网页滑杆变化事件
    Blockly.Blocks.QDP_esp32_web_page_SliderChanged = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_esp32_web_page_SliderChanged,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "网页滑杆变化事件",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //网页链接按钮事件
    Blockly.Blocks.QDP_esp32_web_page_attachButtonClick = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_attachButtonClick,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [

                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页按钮事件
    Blockly.Blocks.QDP_esp32_web_page_ButtonClick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_esp32_web_page_ButtonClick,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "DO"
                    }
                ],
                "tooltip": "网页滑杆变化事件",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    //网页按钮ID
    Blockly.Blocks.QDP_esp32_web_page_Button_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_esp32_web_page_Button_id,
                args0: [
                    {
                      type: "input_value",
                      name: "id"
                    }
                ],
                "tooltip": "网页按钮ID",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //网页插入折线图元素
    Blockly.Blocks.QDP_esp32_web_page_addLineChart = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_addLineChart,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "name"
                    },
                    {
                      type: "input_value",
                      name: "x_axis_value"
                    },
                    {
                      type: "input_value",
                      name: "y_axis_name"
                    },
                    {
                      type: "input_value",
                      name: "y_axis_value"
                    }
                ],
                "tooltip": "网页插入折线图元素",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页更新折线图元素
    Blockly.Blocks.QDP_esp32_web_page_updateLineChart = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_updateLineChart,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "x_axis_value"
                    },
                    {
                      type: "input_value",
                      name: "y_axis_value"
                    }
                ],
                "tooltip": "网页更新折线图元素",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页更新元素
    Blockly.Blocks.QDP_esp32_web_page_update = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_esp32_web_page_update,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'updateType',
                        options:[
                                [Blockly.Msg.NumberCard,'NumberCard'],
                                [Blockly.Msg.TemperatureCard,'TemperatureCard'],
                                [Blockly.Msg.HumidityCard,'HumidityCard'],
                                [Blockly.Msg.StatusCard,'StatusCard'],
                                [Blockly.Msg.SliderCard,'SliderCard'],
                                [Blockly.Msg.GaugeChart,'GaugeChart']
                                ]
                    },
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "网页更新元素",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页串口初始化
    Blockly.Blocks.QDP_web_serial_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_web_serial_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                "tooltip": "网页串口初始化",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页串行打印
    Blockly.Blocks.QDP_web_print_data_32 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_web_print_data_32,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.QH_SERIAL_PRINTLN,"0"], [Blockly.Msg.QH_SERIAL_PRINT,"1"]]
                    },
                    {
                      type: "input_value",
                      name: "web_printing"
                    }
                ],
                "tooltip": "网页串行打印\n<IP Address>/webserial",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //网页读取字符串
    Blockly.Blocks.QDP_web_receive_data_32 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QDP_web_receive_data_32,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "data"
                    }
                ],
                "tooltip": "网页读取字符串 变量名: web_data",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
