/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  //蜂鸣器
  Blockly.Python.PY_qdp_esp32_buzzer = function() {
      var pin = this.getFieldValue('PIN');
      var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
      var tim = Blockly.Python.valueToCode(this, 'tim',Blockly.Python.ORDER_ATOMIC) || '0';
      Blockly.Python.imports_['import_QH_C02'] = 'import QH_C02';
      var code = `QH_C02.buzzer(${pin},${freq},${tim})\n`;
      return code;
  };

  //蜂鸣器选单
  Blockly.Python.qdp_buzzer_Dropdown=function(){
    var dropdown_pin = this.getFieldValue('PIN2'); 
    var code=dropdown_pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

    return Blockly;
  }
 
exports = addGenerator;
