/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_File_color = '#a55b5b';

     const QH_FILE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzODM5OTI3Mzg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjYgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4LjI1IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTEwMTUuODA4IDc5MC41MjhxNS4xMiAzMC43Mi0xMi44IDU1LjI5NnQtNDguNjQgMjkuNjk2bC0xMjIuODggMTkuNDU2cS0yOS42OTYgNS4xMi01NC43ODQtMTIuOHQtMzAuMjA4LTQ4LjY0bC0xMDQuNDQ4LTY2MS41MDRxLTIuMDQ4LTE1LjM2IDEuNTM2LTI5LjE4NHQxMS43NzYtMjUuNiAyMC45OTItMTkuNDU2IDI4LjE2LTEwLjc1MmwxMjEuODU2LTE5LjQ1NnEzMC43Mi01LjEyIDU1LjI5NiAxMy4zMTJ0MjkuNjk2IDQ5LjE1MnpNNTAwLjczNiA2My40ODhxMzAuNzIgMCA1Mi4yMjQgMjEuNTA0dDIxLjUwNCA1Mi4yMjRsMCA2ODQuMDMycTAgMzAuNzItMjEuNTA0IDUyLjIyNHQtNTIuMjI0IDIxLjUwNGwtMTA2LjQ5NiAwcS0zMC43MiAwLTUyLjIyNC0yMS41MDR0LTIxLjUwNC01Mi4yMjRsMC02ODQuMDMycTAtMzAuNzIgMTYuMzg0LTUyLjIyNHQ0OC4xMjgtMjEuNTA0bDExNS43MTIgMHpNNTAwLjczNiA1NzkuNTg0cTEwLjI0IDAgMTcuNDA4LTkuNzI4dDcuMTY4LTIzLjA0cTAtMTQuMzM2LTcuMTY4LTIzLjU1MnQtMTcuNDA4LTkuMjE2bC0xMDYuNDk2IDBxLTEwLjI0IDAtMTcuNDA4IDkuMjE2dC03LjE2OCAyMy41NTJxMCAxMy4zMTIgNy4xNjggMjMuMDR0MTcuNDA4IDkuNzI4bDEwNi40OTYgMHpNNTAwLjczNiA0NDkuNTM2cTEwLjI0IDAgMTcuNDA4LTkuNzI4dDcuMTY4LTI0LjA2NC03LjE2OC0yMy41NTItMTcuNDA4LTkuMjE2bC0xMDYuNDk2IDBxLTEwLjI0IDAtMTcuNDA4IDkuMjE2dC03LjE2OCAyMy41NTIgNy4xNjggMjQuMDY0IDE3LjQwOCA5LjcyOGwxMDYuNDk2IDB6TTE3OS4yIDYzLjQ4OHEzMC43MiAwIDUyLjczNiAyMS41MDR0MjIuMDE2IDUyLjIyNGwwIDY4NC4wMzJxMCAzMC43Mi0yMi4wMTYgNTIuMjI0dC01Mi43MzYgMjEuNTA0bC0xMDYuNDk2IDBxLTMwLjcyIDAtNTIuNzM2LTIxLjUwNHQtMjIuMDE2LTUyLjIyNGwwLTY4NC4wMzJxMC0zMC43MiAyMi4wMTYtNTIuMjI0dDUyLjczNi0yMS41MDRsMTA2LjQ5NiAwek03Ni44IDMxOS40ODhxLTExLjI2NCAwLTE4LjQzMiA5LjIxNnQtNy4xNjggMjMuNTUycTAgMTMuMzEyIDcuMTY4IDIzLjA0dDE4LjQzMiA5LjcyOGw5OC4zMDQgMHExMS4yNjQgMCAxNy45Mi05LjcyOHQ2LjY1Ni0yMy4wNHEwLTE0LjMzNi02LjY1Ni0yMy41NTJ0LTE3LjkyLTkuMjE2bC05OC4zMDQgMHpNMTc5LjIgNjQxLjAyNHExMS4yNjQgMCAxNy45Mi05LjIxNnQ2LjY1Ni0yMi41MjhxMC0xNC4zMzYtNi42NTYtMjMuMDR0LTE3LjkyLTguNzA0bC0xMDIuNCAwcS0xMS4yNjQgMC0xOC40MzIgOC43MDR0LTcuMTY4IDIzLjA0cTAgMTMuMzEyIDcuMTY4IDIyLjUyOHQxOC40MzIgOS4yMTZsMTAyLjQgMHpNMTc5LjIgNTE1LjA3MnExMS4yNjQgMCAxNy45Mi05LjIxNnQ2LjY1Ni0yMy41NTItNi42NTYtMjMuNTUyLTE3LjkyLTkuMjE2bC0xMDIuNCAwcS0xMS4yNjQgMC0xOC40MzIgOS4yMTZ0LTcuMTY4IDIzLjU1MiA3LjE2OCAyMy41NTIgMTguNDMyIDkuMjE2bDEwMi40IDB6IiBwLWlkPSI0MjgyIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';

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
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    
    //打开文件
    Blockly.Blocks.storage_fileopen = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_fileopen,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILENAME"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_READ, 'r'],[Blockly.Msg.MICROBIT_PY_STORAGE_WRITE, 'w'],[Blockly.Msg.MICROBIT_PY_STORAGE_BIT_READ, 'rb'],[Blockly.Msg.MICROBIT_PY_STORAGE_BIT_WRITE, 'wb']]
                    }
                ],
                "tooltip": "打开文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //将字符串写入文件
    Blockly.Blocks.storage_file_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_file_write,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "data"
                    },
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "将字符串写入文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //将字符串写入文件
    Blockly.Blocks.storage_get_contents_without_para = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_get_contents_without_para,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_ALL,'read'],[Blockly.Msg.MICROBIT_PY_STORAGE_ONE_LINE,'readline'],[Blockly.Msg.MICROBIT_PY_STORAGE_ALL_LINES,'readlines']]
                    }
                ],
                "tooltip": "将字符串写入文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //从文件读取设定字符内的内容
    Blockly.Blocks.storage_get_contents = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_get_contents,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_ALL,'read'],[Blockly.Msg.MICROBIT_PY_STORAGE_ONE_LINE,'readline'],[Blockly.Msg.MICROBIT_PY_STORAGE_ALL_LINES,'readlines']]
                    },
                    {
                      "type": "input_value",
                      "name": "SIZE"
                    },
                ],
                "tooltip": "从文件读取设定字符内的内容",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    }; 

    Blockly.Blocks.storage_can_write_ornot = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_can_write_ornot,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "如果文件可写则返回真，反之返回假",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    }; 

    Blockly.Blocks.storage_get_filename = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_get_filename,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "获取文件名称",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.storage_close_file = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_close_file,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "关闭文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    }; 


    Blockly.Blocks.storage_list_all_files = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_list_all_files,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "列出所有文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    }; 


    Blockly.Blocks.storage_get_current_dir = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_get_current_dir,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "获取当前工作目录",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };  

    Blockly.Blocks.storage_change_dir = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_change_dir,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "改变当前工作目录为",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.storage_make_dir = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_make_dir,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "PATH"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_MKDIR,'mkdir'],[Blockly.Msg.MICROBIT_PY_STORAGE_MAKEDIRS,'makedirs']]
                    }
                ],
                "tooltip": "根据目录创建文件夹",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    }; 

    Blockly.Blocks.storage_delete_file = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_delete_file,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_DELETE_FILE,'remove'],[Blockly.Msg.MICROBIT_PY_STORAGE_DELETE_DIRS,'removedirs']]
                    },
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "删除文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.storage_rename = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_rename,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    },
                    {
                      "type": "input_value",
                      "name": "NEWFILE"
                    }
                ],
                "tooltip": "重命名文件",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.storage_get_file_size = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_get_file_size,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "获得文件大小",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };                              
       
    Blockly.Blocks.storage_is_file = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_is_file,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.HTML_FILE,'isfile'],[Blockly.Msg.MICROBIT_PY_STORAGE_IS_DIR,'isdir']]
                    }
                ],
                "tooltip": "判断路径是否是文件或目录",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.storage_file_tell = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_file_tell,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    }
                ],
                "tooltip": "返回文件当前读取的位置",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };                                
       
    Blockly.Blocks.storage_file_seek = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.storage_file_seek,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_FILE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "input_value",
                      "name": "FILE"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.MICROBIT_PY_STORAGE_FILE_SEEK_START,'start'],[Blockly.Msg.MICROBIT_PY_STORAGE_FILE_SEEK_CURRENT,'current'],[Blockly.Msg.MICROBIT_PY_STORAGE_FILE_SEEK_END,'end']]
                    },
                    {
                      "type": "input_value",
                      "name": "SIZE"
                    },
                ],
                "tooltip": "设置文件读取位置",
                colour: QH_File_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };                                
       

    return Blockly;
}

exports = addBlocks;


