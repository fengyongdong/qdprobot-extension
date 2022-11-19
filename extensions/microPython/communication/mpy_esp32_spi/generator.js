/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.communicate_spi_init= function(block) {
    var name=Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, "");
    var freq=Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);    
    var mosi = this.getFieldValue('mosi');
    var miso = this.getFieldValue('miso');
    var sck = this.getFieldValue('sck');
    return ""+name+" = machine.SoftSPI(baudrate=" + freq + ", sck=machine.Pin(" + sck + "), mosi=machine.Pin(" + mosi + "), miso=machine.Pin(" + miso + "));\n";
  };

  Blockly.Python.communicate_spi_set = function() {   
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    var name=Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, "");
    return name+".init(baudrate=" + data + ")\n";
  };

  Blockly.Python.communicate_spi_buffer = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return ""+varname+"=bytearray(" + data + ")\n";
  };

  Blockly.Python.communicate_spi_read = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return [""+varname+".read(" + data + ")", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_spi_read_output = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    var val = Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_ATOMIC);
    val = val.replace(/\'/g, "");
    return [""+varname+".read(" + data + ","+val+")", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_spi_readinto = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    data = data.replace(/\'/g, "");
    return [""+varname+".readinto(" + data + ")", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_spi_readinto_output = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    data = data.replace(/\'/g, "");
    var val = Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_ATOMIC);
    val = val.replace(/\'/g, "");
    return [""+varname+".readinto(" + data + ","+val+")", Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_spi_write = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return [""+varname+".write(" + data + ".encode('utf-8'))", Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python.communicate_spi_write_readinto = function() {   
    var varname = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    varname = varname.replace(/\'/g, "");
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    var val = Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_ATOMIC);
    val = val.replace(/\'/g, "");
      return [""+varname+".write_readinto(" + data + ".encode('utf-8'),"+val+")", Blockly.Python.ORDER_ATOMIC];
  };
  
    return Blockly;
}
 
exports = addGenerator;
