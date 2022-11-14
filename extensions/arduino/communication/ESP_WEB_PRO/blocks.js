/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_WEB_COLOR = '#7b68ee';
    const QH_WEB_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwNzkwNTUwMTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1OSA3OS4yN0gxNjVhOTAgOTAgMCAwIDAtOTAgOTB2Njk0YTkwIDkwIDAgMCAwIDkwIDkwaDY5NGE5MCA5MCAwIDAgMCA5MC05MHYtNjk0YTkwIDkwIDAgMCAwLTkwLTkweiBtLTY5MyA2MGg2OTRhMzAgMzAgMCAwIDEgMzAgMzB2MTQ1SDEzNnYtMTQ1YTMwIDMwIDAgMCAxIDMwLTMweiBtNjkzIDc1NEgxNjVhMzAgMzAgMCAwIDEtMzAtMzB2LTQ4OWg3NTR2NDg5YTMwIDMwIDAgMCAxLTMwIDMweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjMuNDcgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuMDggMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODIuNjkgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyNCI+PC9wYXRoPjwvc3ZnPg==';


    Blockly.Blocks.espdashpro_display_components = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_display_components,
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
                      name: "Label"
                    },
                    {
                      type: "input_value",
                      name: "unit"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.temperature,'1'],
                                [Blockly.Msg.humidity,'2'],
                                [Blockly.Msg.air_pressure,'3'],
                                [Blockly.Msg.energy,'4'],
                                [Blockly.Msg.progress_bar,'6'],
                                [Blockly.Msg.tags,'7']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_state_component = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_state_component,
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
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.success,'success'],
                                [Blockly.Msg.warning,'warning'],
                                [Blockly.Msg.danger,'danger'],
                                [Blockly.Msg.idle,'idle']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_update_chart = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_update_chart,
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
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BAR_CHART,'1'],
                                [Blockly.Msg.LINE_CHART,'2'],
                                [Blockly.Msg.AREA_CHART,'3'],
                                [Blockly.Msg.PIE_CHART,'4']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "abscissa"
                    },
                    {
                      type: "input_value",
                      name: "ordinate"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_display_components1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_display_components1,
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
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BUTTON_CARD,'1'],
                                [Blockly.Msg.SLIDER_CARD,'2'],
                                [Blockly.Msg.TEXT_INPUT_CARD,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_get_component_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_get_component_value,
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
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BUTTON_CARD,'1'],
                                [Blockly.Msg.SLIDER_CARD,'2'],
                                [Blockly.Msg.TEXT_INPUT_CARD,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    Blockly.Blocks.espdashpro_get_joystick_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_get_joystick_value,
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
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.bothway,'1'],
                                [Blockly.Msg.lockx,'2'],
                                [Blockly.Msg.locky,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    Blockly.Blocks.espdashpro_set_title = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_set_title,
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
                      name: "title"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_setting_permissions = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_setting_permissions,
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
                      name: "name"
                    },
                    {
                      type: "input_value",
                      name: "pass"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_add_page = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_add_page,
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
                      name: "page"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_add_statistics = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_add_statistics,
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
                      name: "Statistic"
                    },
                    {
                      type: "input_value",
                      name: "Value"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_set_component_page = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_set_component_page,
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
                        name: 'type',
                        options:[[Blockly.Msg.temperature,"temp"], [Blockly.Msg.humidity,"hum"], [Blockly.Msg.air_pressure,"air"], [Blockly.Msg.energy,"energy"], [Blockly.Msg.status,"status"], [Blockly.Msg.progress_bar,"progress"], [Blockly.Msg.tags,"generic"], [Blockly.Msg.BUTTON_CARD,"button"], [Blockly.Msg.SLIDER_CARD,"slider"], [Blockly.Msg.TEXT_INPUT_CARD,"text"], [Blockly.Msg.joystick,"joystick"], [Blockly.Msg.BAR_CHART,"bar"], [Blockly.Msg.LINE_CHART,"line"], [Blockly.Msg.AREA_CHART,"area"], [Blockly.Msg.PIE_CHART,"pie"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'page_id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

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
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }     
    };

    return Blockly;
}

exports = addBlocks;
