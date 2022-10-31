/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.PY_qdp_esp32_serial_softserial = function () {
    var dropdown_uart = this.getFieldValue('mode');
    var baudrate = this.getFieldValue('baudrate');
    var TX = this.getFieldValue('TX');
    var RX = this.getFieldValue('RX');
    var code = `uart${dropdown_uart}=machine.UART(${dropdown_uart}, tx=${TX}, rx=${RX}, baudrate=${baudrate})`;
    return code;
  };

  Blockly.Python.PY_qdp_esp32_serial_print = function() {
    var dropdown_uart = this.getFieldValue('mode');
    var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '\"\"'
    var code = "uart"+dropdown_uart+".write("+content+")\n";
    return code;
  };

  Blockly.Python.PY_qdp_esp32_serial_any = function(){
    var dropdown_uart = this.getFieldValue('mode');
    var code =`uart${dropdown_uart}.any()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_esp32_serial_read = function(){
    var mode = this.getFieldValue('mode');
    var type = this.getFieldValue('type');
    var code =`uart${mode}.${type}()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_esp32_serial_read_byte = function(){
    var mode = this.getFieldValue('mode');
    var bytesnum = Blockly.Python.valueToCode(this, 'bytesnum', Blockly.Python.ORDER_ATOMIC) 
    var code =`uart${mode}.read(${bytesnum})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
    return Blockly;
}
 
exports = addGenerator;
