/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_MQTT_COLOR = 270;
    
    Blockly.Blocks.MQTT_subscribe_plus = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_subscribe_plus,
                args0: [
                    {
                      type: "input_value",
                      name: "server"
                    },
                    {
                      type: "input_value",
                      name: "port"
                    },
                    {
                      type: "input_value",
                      name: "client_id"
                    },
                    {
                      type: "input_value",
                      name: "mqtt_username"
                    },
                    {
                      type: "input_value",
                      name: "mqtt_password"
                    }
                ],
                "tooltip": "只要改变客户端ID为MAC地址就可以用测试帐号，如要专用帐号请联系齐护",
                colour:QH_MQTT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MQTT_received_the_news = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_received_the_news,
                message1: '%1',
                lastDummyAlign4: 'RIGHT',
                args0: [{
                    type: 'input_value',
                    name: 'topic'
                }],
                args1: [{
                    type: 'input_statement',
                    name: 'function'
                }],
                "tooltip": "接收相关主题的数据，接收的数据放在变量 mqtt_data",
                colour: QH_MQTT_COLOR,
                secondaryColour: '#C0C0C0',
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };


    Blockly.Blocks.MQTT_publish = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_publish,
                args0: [
                    {
                      type: "input_value",
                      name: "data"
                    },
                    {
                      type: "input_value",
                      name: "topic"
                    }
                ],
                "tooltip": "发送数据到指定主题",
                colour:QH_MQTT_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

   
    return Blockly;
}

exports = addBlocks;




