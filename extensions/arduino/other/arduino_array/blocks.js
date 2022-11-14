/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = 260;


    
    Blockly.Blocks.lists_create_with_text = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_create_with_text,
                args0: [
                    {
                    type: 'field_dropdown',
                    name: 'RANGE',
                    options: [[Blockly.Msg.GLOBAL, 'global'],
                              [Blockly.Msg.LOCAL, 'local']]
                    },
                    {
                    type: 'field_dropdown',
                    name: 'TYPE',
                    options: [[Blockly.Msg.LANG_MATH_INT, 'int'],
                              [Blockly.Msg.LANG_MATH_UNSIGNED_INT, 'unsigned int'],
                              [Blockly.Msg.LANG_MATH_WORD, 'word'],
                              [Blockly.Msg.LANG_MATH_LONG, 'long'],
                              [Blockly.Msg.LANG_MATH_UNSIGNED_LONG, 'unsigned long'],
                              [Blockly.Msg.LANG_MATH_FLOAT, 'float'],
                              [Blockly.Msg.LANG_MATH_DOUBLE, 'double'],
                              [Blockly.Msg.LANG_MATH_BOOLEAN, 'boolean'],
                              [Blockly.Msg.LANG_MATH_BYTE, 'byte'],
                              [Blockly.Msg.LANG_MATH_CHAR, 'char'],
                              [Blockly.Msg.LANG_MATH_UNSIGNED_CHAR, 'unsigned char'],
                              [Blockly.Msg.LANG_MATH_STRING, 'String'],
                              ["uint8_t","uint8_t"],
                              ["uint16_t","uint16_t"],
                              ["uint32_t","uint32_t"],
                              ["uint64_t","uint64_t"]]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'SIZE'
                    },
                    {
                      "type": "field_input",
                      "name": "TEXT",
                      "text": "0,0,0",
                      "spellcheck": false
                    }

                ],
                "tooltip": "",
                colour:color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lists_length = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_length,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }

                ],
                "tooltip": "",
                colour:color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.lists_getIndex = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_getIndex,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'AT'
                    }

                ],
                "tooltip": "",
                colour:color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.lists_setIndex = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.lists_setIndex,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'AT'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }


                ],
                "tooltip": "",
                colour:color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
