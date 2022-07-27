/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  
    //超声波
    Blockly.Python.PY_qdp_esp32_chaoshengbo = function() {
      var pin = this.getFieldValue('PIN');
      var type = this.getFieldValue('TYPE');
      var unit = this.getFieldValue('UNIT');
      pinArr = pin.split(' ');

      Blockly.Python.imports_['import_HCSR04'] = 'from HCSR04 import HCSR04';
      if (type === '1') {
        Blockly.Python.variables_[`pin${pinArr[0]}`] = `sonar${pinArr[0]} = HCSR04(trigger_pin=${pinArr[0]}, echo_pin=${pinArr[1]})`;
      } else {
        Blockly.Python.variables_[`pin${pinArr[0]}`] = `sonar${pinArr[0]} = HCSR04(trigger_pin=${pinArr[1]}, echo_pin=${pinArr[0]})`;
      }
      var code = `sonar${pinArr[0]}.distance_${unit}()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
