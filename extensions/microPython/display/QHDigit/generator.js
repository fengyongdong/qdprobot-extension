/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  //数码管显示 
  Blockly.Python.PY_qdp_esp32_display = function() {
    var PIN = this.getFieldValue('PIN');
    var value = Blockly.Python.valueToCode(this, 'VALUE',Blockly.Python.ORDER_ATOMIC) || '0';
    Blockly.Python.imports_['import_TM1637'] = 'import TM1637';
    pinArr = PIN.split(' ');
    Blockly.Python.variables_ ['define_QDPEsp32Port'] = `tm${pinArr[0]}=TM1637.TM1637(dio=machine.Pin(${pinArr[1]}, machine.Pin.OUT),clk=machine.Pin(${pinArr[0]}, machine.Pin.OUT))`;
    var code = `tm${pinArr[0]}.shownum(${value})\n`;   
    return code;
  };

  //数码管清屏
  Blockly.Python.PY_qdp_esp32_display_clear = function() {
    var PIN = this.getFieldValue('PIN');
    var code = `tm${pinArr[0]}.clear()\n`;  
    return code;
  };

    return Blockly;
  }
 
exports = addGenerator;
