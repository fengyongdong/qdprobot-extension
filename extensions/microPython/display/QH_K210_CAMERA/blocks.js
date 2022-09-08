/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_camera_color = '#2caad2';
   
    const QH_CAMERA_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYxMjQwNTQxNTI4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4Ny4yIDYyOS4zNDQgMTgyLjc1MiAyOTAuMDE2QzEzOS44NTYgMzUzLjQ0IDExNC43ODQgNDI5Ljg0IDExNC43ODQgNTEyYzAgNDAuODMyIDYuMjA4IDgwLjI0IDE3LjcxMiAxMTcuMzQ0TDM4Ny4yIDYyOS4zNDR6IiBwLWlkPSIzMjA0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQ3My4xMDQgMzQzLjU4NGwzOTguNTI4IDBDODIwLjQ0OCAyMzQuNzIgNzIxLjI4IDE1Mi43ODQgNjAxLjUyIDEyNS4wODhMNDczLjEwNCAzNDMuNTg0eiIgcC1pZD0iMzIwNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNDUuMTY4IDQ2Ni41NiA1NTAuNzg0IDExNi43MDRjLTEyLjc2OC0xLjI0OC0yNS42OTYtMS45Mi0zOC43ODQtMS45Mi0xMTguNDMyIDAtMjI0Ljg0OCA1Mi4xNi0yOTcuNjggMTM0LjY0TDM0NS4xNjggNDY2LjU2eiIgcC1pZD0iMzIwNiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik00MjggODk2LjcybDEyNS43OTItMjE5LjM3NkwxNTAuOTc2IDY3Ny4zNDRjNTIuODMyIDExNC44OTYgMTU4Ljg2NCAyMDAuMzg0IDI4Ni40IDIyNC43NTJMNDI4IDg5Ni43MnoiIHAtaWQ9IjMyMDciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjM2LjE5MiAzOTEuNTg0IDgzNi45NzYgNzQwYzQ1LjQ1Ni02NC41OTIgNzIuMjU2LTE0My4yIDcyLjI1Ni0yMjggMC00MS45NjgtNi41OTItODIuNDE2LTE4LjcyLTEyMC40MTZMNjM2LjE5MiAzOTEuNTg0eiIgcC1pZD0iMzIwOCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NzcuMTIgNTU4Ljc2OCA0NzcuMTA0IDkwNy42YzExLjUwNCAxLjAwOCAyMy4xMzYgMS42MTYgMzQuODk2IDEuNjE2IDExNS43NDQgMCAyMjAuMDQ4LTQ5Ljc3NiAyOTIuNzItMTI5LjAyNEw2NzcuMTIgNTU4Ljc2OHoiIHAtaWQ9IjMyMDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";


    //camera初始化
    Blockly.Blocks.PY_qdp_k210_camera_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key1',
                        options: [[Blockly.Msg.RGB565,'sensor.RGB565'],[Blockly.Msg.GRAYSCALE,'sensor.GRAYSCALE']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key2',
                        options: [['320X240','sensor.QVGA'],['160X120','sensor.QQVGA'],['80X60','sensor.QQQVGA'],['640X480','sensor.VGA']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key3',
                        options: [[Blockly.Msg.camera_run,'1'],[Blockly.Msg.camera_norun,'0']]
                    },
                    { 
                        type: "input_value", 
                        name: "frame" 
                    },
                ],
                "tooltip": "camera初始化",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //camera补光
    Blockly.Blocks.PY_qdp_k210_camera_fill_in_light = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_fill_in_light,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key1',
                        options: [['AIstart','4'],['Mini','2']]
                    },
                    { 
                        type: "input_value", 
                        name: "colour" 
                    }
                ],
                "tooltip": "camera补光",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //camera获取图像
    Blockly.Blocks.PY_qdp_k210_camera_snapshot = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_snapshot,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "camera获取图像",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //camera设置
    Blockly.Blocks.PY_qdp_k210_camera_shutdown = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_shutdown,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [[Blockly.Msg.enable,'shutdown'],[Blockly.Msg.hmirror,'set_hmirror'],[Blockly.Msg.vflip,'set_vflip'],[Blockly.Msg.colorbar,'set_colorbar']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.camera_run,'1'],[Blockly.Msg.camera_norun,'0']]
                    }
                ],
                "tooltip": "camera初始化",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //camera设置
    Blockly.Blocks.PY_qdp_k210_camera_setmun = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_setmun,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.set_contrast,'set_contrast'],[Blockly.Msg.set_brightness,'set_brightness'],[Blockly.Msg.set_auto_gain,'set_auto_gain'],[Blockly.Msg.set_saturation,'set_saturation']]
                    },
                    { 
                        type: "input_value", 
                        name: "num" 
                    }
                ],
                "tooltip": "camera设置",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //camera获取属性
    Blockly.Blocks.PY_qdp_k210_camera_getinfo = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_getinfo,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.width,'width'],[Blockly.Msg.height,'height'],[Blockly.Msg.get_gain_db,'get_gain_db'],[Blockly.Msg.get_fb,'get_fb'],[Blockly.Msg.get_id,'get_id']]
                    }
                ],
                "tooltip": "camera获取属性",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //camera设置窗口
    Blockly.Blocks.PY_qdp_k210_camera_set_windowing = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_camera_set_windowing,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_CAMERA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "numa" 
                    },
                    { 
                        type: "input_value", 
                        name: "numb" 
                    }
                ],
                "tooltip": "camera设置窗口",
                colour: QH_camera_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };




    return Blockly;
}

exports = addBlocks;


