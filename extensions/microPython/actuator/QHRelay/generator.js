/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //继电器板
    Blockly.Python.PY_qdp_esp32_relay = function() {
      var pin = this.getFieldValue('PIN');
      var state = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_FUNCTION_CALL) || '1'; 
      Blockly.Python.variables_[`pin${pin}`] = `relay${pin} = machine.Pin(${pin}, machine.Pin.OUT)\n`;
      var code = `relay${pin}.value(${state})\n`;
      return code;
    };

    //读继电器板状态
    Blockly.Python.PY_qdp_esp32_read_relay = function() {
      var pin = this.getFieldValue('PIN');
      Blockly.Python.variables_[`pin${pin}`] = `relay${pin} = machine.Pin(${pin}, machine.Pin.OUT)\n`;
      var code = `relay${pin}.value()`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
  }
 
exports = addGenerator;
