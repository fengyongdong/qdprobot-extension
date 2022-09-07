/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {

    const QH_OTHER_COLOR = '#cbc668';



    //删除
    Blockly.Blocks.python_del = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.python_del,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    }
                ],
                "tooltip": "删除:几乎能删除所有对象",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //系统时间
    Blockly.Blocks.PY_time_ticks = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_time_ticks,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.PY_time_ms), "ticks_ms"],
                                [(Blockly.Msg.PY_time_us), "ticks_us"]]
                    }
                               
                ],
                "tooltip": "获取系统运行时间",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //try_except
    Blockly.Blocks.try_except_else_finally = {
        init: function() {
            this.jsonInit({
              message0: "try-except-else-finally", // Statement
              message1: "try%1", // Statement
              message2: "except%1", // Statement
              message3: "else%1", // Statement
              message4: "finally%1", // Statement
              args0: [],
              args1: [
                {
                  "type": "input_statement",
                  "name": "DO1"
                }
              ],
              args2: [
                {
                  "type": "input_statement",
                  "name": "DO2"
                }
              ],
              args3: [
                {
                  "type": "input_statement",
                  "name": "DO3"
                }
              ],
              args4: [
                {
                  "type": "input_statement",
                  "name": "DO4"
                }
              ],
              "tooltip": "首先，执行 try 子句\n如果没有异常发生，忽略 except 子句，try 子句执行后结束\n如果在执行 try 子句的过程中发生了异常，那么 try 子句余下的部分将被忽略。在except可以能过err变量获取出错的信息.\nelse 子句将在 try 子句没有发生任何异常的时候执行。\ntry-finally 语句无论是否发生异常都将执行最后的代码。",
              colour: QH_OTHER_COLOR,
              colourSecondary: '#ffffff',
              colourTertiary: '#ffffff',
              extensions: ["shape_statement"]
            });
      }
    };

    //是否在内
    Blockly.Blocks.python_in = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.python_in,
                args0: [
                    {
                      "type": "input_value",
                      "name": "val"
                    },
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    }
                ],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //占位
    Blockly.Blocks.controls_pass = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.controls_pass,
                args0: [],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //reset
    Blockly.Blocks.system_reset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.system_reset,
                args0: [],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //垃圾回收
    Blockly.Blocks.system_gc_collect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.system_gc_collect,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'gc',
                        options: [[Blockly.Msg.gc_enable,'enable'],[Blockly.Msg.gc_disable,'disable'],[Blockly.Msg.gc_collect,'collect']]
                    }
                ],
                "tooltip": "垃圾回收",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //跳出循环
    Blockly.Blocks.controls_flow_statements = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.controls_flow_statements,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'bk',
                        options: [[Blockly.Msg.loop_break,'break'],[Blockly.Msg.loop_continue,'continue']]
                    }
                ],
                "tooltip": "跳出循环",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    //简单线程
    Blockly.Blocks.controls_thread = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.controls_thread,
                args0: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "Thread1"
                    },
                    { 
                        type: "input_value", 
                        name: "arg" 
                    }
                ],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //线程函数
    Blockly.Blocks.thread_func = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.thread_func,
                message1: '%1',
                args0: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "Thread1"
                    },
                    { 
                        type: "input_value", 
                        name: "arg" 
                    }
                ],
                 args1: [
                {
                  "type": "input_statement",
                  "name": "DO"
                }
                ],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    //执行代码
    Blockly.Blocks.controls_exec = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.controls_exec,
                args0: [
                    { 
                        type: "input_value", 
                        name: "arg" 
                    }
                ],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };



    return Blockly;
}

exports = addBlocks;


