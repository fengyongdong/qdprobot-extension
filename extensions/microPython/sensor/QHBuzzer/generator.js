/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //DH11温湿度
  Blockly.Python.PY_qdp_esp32_dht11 = function () {
      var pin = this.getFieldValue('PIN');
      var what = this.getFieldValue('WHAT');
      Blockly.Python.imports_['import_dht'] = 'import dht';
      Blockly.Python.imports_['import_time'] = 'import time';
      Blockly.Python.customFunctions_['getDht']=`def getDht(Odht,Otype):
    Odht.measure()
    time.sleep_ms(1)  
    if Otype:
      return Odht.temperature()
    else:
      return Odht.humidity()
  `;
      Blockly.Python.variables_[`pin${pin}`] = `dht${pin} = dht.DHT11(machine.Pin(${pin}))`;
     
      var code=`getDht(dht${pin},${what})`;
      return [code, Blockly.Python.ORDER_ATOMIC];
  };

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
