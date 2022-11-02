/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.factory_from_import = function() {
    var path = this.getFieldValue('path');
    var module = this.getFieldValue('module');
    Blockly.Python.imports_['import_'+path+'_'+module] = 'from '+path+' import ' + module;  
    return '';
  };

  Blockly.Python.factory_import = function() {
    var module = this.getFieldValue('module');
    Blockly.Python.imports_['import_'+module] = 'import ' + module;
    return '';
  };

  Blockly.Python.factory_declare = function() {
    var TYPE = this.getFieldValue('TYPE');
    var NAME = this.getFieldValue('NAME');
    return NAME+' = ' + TYPE + '()\n';
  };

  Blockly.Python.factory_block = function() {
    var VALUE = this.getFieldValue('VALUE');
    return VALUE+'\n';
  };

  Blockly.Python.factory_block_return = function() {
    var VALUE = this.getFieldValue('VALUE');
    return [VALUE,Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.factory_block_return_bool = function() {
    var VALUE = this.getFieldValue('VALUE');
    return [VALUE,Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.factory_block_var = function() {
    var NAME = this.getFieldValue('NAME');
    var VALUE=Blockly.Python.valueToCode(this, 'VALUE', Blockly.Python.ORDER_RELATIONAL) || '0'
    return `${NAME} = ${VALUE}`;
  };

   
    return Blockly;
}
 
exports = addGenerator;
