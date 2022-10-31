/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.communicate_i2c_init = function () {
  var dropdown_pin1 = this.getFieldValue('RX');
    var dropdown_pin2 = this.getFieldValue('TX');
    var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
    var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
    sub = sub.replace(/\'/g, "");    
    return ""+sub+" = machine.I2C(0,scl = machine.Pin(" + dropdown_pin2 + "), sda = machine.Pin(" + dropdown_pin1 + "), freq = " + freq + ")\n";
  };

  Blockly.Python.communicate_i2c_read = function(){
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    var address = Blockly.Python.valueToCode(this, 'address', Blockly.Python.ORDER_ATOMIC);
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return [""+name+".readfrom(" + address + ", " + data +  ")", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_i2c_write = function(){
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    var address = Blockly.Python.valueToCode(this, 'address', Blockly.Python.ORDER_ATOMIC);
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return ""+name+".writeto("+ address + ", " + data + ")\n";
  };

  Blockly.Python.communicate_i2c_scan = function(){
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    return [""+name+".scan()", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_i2c_master_read = function () {
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    var code = ""+name+".read()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_i2c_available = function () {  
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    var code = ""+name+".available()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  
    return Blockly;
}
 
exports = addGenerator;
