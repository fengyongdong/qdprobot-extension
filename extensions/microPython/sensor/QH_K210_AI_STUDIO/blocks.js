/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Img_ai_studio_color = '#55839A';
    const QH_fill_color = '#6dc3c6';
   
    const QH_AI_STUDIO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzMTE3NjIzODM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzNzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTUwMS44MjQgMzJDMzAzLjU1MiAzMiAxNDEuNTA0IDE3Ni45OTIgMTQxLjUwNCAzNTcuNzZjMCAyMy43MTIgMi44MTYgNDcuMTA0IDguMzIgNjkuODU2bC01MS4wMDggMTE0LjIwOGEzMiAzMiAwIDAgMCAyNC43MDQgNDQuNzM2YzU0LjI3MiA3Ljc0NCA3Ni42NzIgMzEuMTY4IDc2LjY3MiA3Ny4zMTJ2MTExLjU1MmE2NCA2NCAwIDAgMCA2NCA2NGgyMC43MDRhNjQgNjQgMCAwIDEgNjQgNjRWOTYwYTMyIDMyIDAgMCAwIDMyIDMyaDM0NS42YTMyIDMyIDAgMCAwIDAtNjRoLTMxMy42di0yNC42MDhhMTI4IDEyOCAwIDAgMC0xMjgtMTI4aC0yMC43MzZ2LTExMS41NTJjMC02NS42NjQtMzIuMTkyLTExMC42ODgtOTEuMi0xMzEuMTM2bDM5Ljg3Mi04OS4yOGEzMS45NjggMzEuOTY4IDAgMCAwIDEuNTY4LTIxLjc5MiAyMzMuMDg4IDIzMy4wODggMCAwIDEtOC44OTYtNjMuOTA0YzAtMTQzLjcxMiAxMzEuOTM2LTI2MS43NiAyOTYuMzItMjYxLjc2czI5Ni4zMiAxMTguMDE2IDI5Ni4zMiAyNjEuNzZhMzIgMzIgMCAwIDAgNjQgMEM4NjIuMTQ0IDE3Ni45OTIgNzAwLjA2NCAzMiA1MDEuODI0IDMyek05MDQgNDQ4YTMyIDMyIDAgMCAwLTMyIDMydjM2MGEzMiAzMiAwIDAgMCA2NCAwVjQ4MGEzMiAzMiAwIDAgMC0zMi0zMnoiIHAtaWQ9IjIzNzMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjczLjg4OCA0NjYuNjU2Yy0xMS43NDQtMjUuNTY4LTQ4LjQxNi0yNC42NC01OC44MTYgMS41MzZsLTEzMi44IDMzMy43NmEzMiAzMiAwIDAgMCA1OS40ODggMjMuNjhsMzIuNjA4LTgxLjkyYzAuNTc2IDAuMDMyIDEuMDg4IDAuMzIgMS42NjQgMC4zMmgxNTQuODQ4bDM4LjE3NiA4My4xMDRhMzEuOTY4IDMxLjk2OCAwIDEgMCA1OC4xNDQtMjYuNzJsLTE1My4zMTItMzMzLjc2ek01OTkuNjggNjgwbDQ3LjI2NC0xMTguNzIgNTQuNTI4IDExOC43Mkg1OTkuNjh6IiBwLWlkPSIyMzc0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";


   //列表块
    Blockly.Blocks.PY_qdp_k210_list_var = {
        init: function () {
            this.jsonInit({
                message0: '[%1]',
                args0: [
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "返回列表",
                colour: QH_fill_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //锚点
    Blockly.Blocks.PY_qdp_k210_tuple_anchor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_tuple_anchor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "anchor"
                    },
                    { 
                        type: "input_value", 
                        name: "TEXT" 
                    }
                ],
                "tooltip": "锚点",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //物品名称
    Blockly.Blocks.PY_qdp_k210_tuple_calss = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_tuple_calss,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "calss"
                    },
                    { 
                        type: "input_value", 
                        name: "TEXT" 
                    }
                ],
                "tooltip": "物品名称",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_load = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_load,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "KPU"
                    },
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_load1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_load1,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "KPU"
                    },
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_init_yolo2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_init_yolo2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "KPU"
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    },
                    { 
                        type: "input_value", 
                        name: "nms_value" 
                    },
                    { 
                        type: "input_value", 
                        name: "anchor_num" 
                    },
                    {
                      "type": "field_input",
                      "name": "anchor",
                      "text": "anchor"
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_run_yolo2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_run_yolo2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "KPU"
                    },
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_forward = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_forward,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "SUB",
                      "text": "KPU"
                    },
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_KPU_analysis = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_KPU_analysis,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "yolo2"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yolo2_x, "x"],[Blockly.Msg.yolo2_y, "y"],[Blockly.Msg.yolo2_classid, "classid"],[Blockly.Msg.yolo2_value, "value"]]
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_ailocal_training = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_ailocal_training,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "calss",
                      "text": "calss"
                    },
                    { 
                        type: "input_value", 
                        name: "sample" 
                    },
                    { 
                        type: "input_value", 
                        name: "save" 
                    },
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_ailocal_loading = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_ailocal_loading,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "path" 
                    },
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_ailocal_predictg = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_ailocal_predictg,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AI_STUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "calss",
                      "text": "calss"
                    },
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "",
                colour: QH_Img_ai_studio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;


