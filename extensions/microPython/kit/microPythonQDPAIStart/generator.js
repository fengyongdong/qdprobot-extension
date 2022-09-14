/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //字典赋值
    Blockly.Python.python_del = function() {
      var name=this.getFieldValue('name');
      var code = `del ${name}\n`;
      return code;
    };

    //ESP32触控
    Blockly.Python.PY_time_ticks = function () {
      var type = this.getFieldValue('type');
      Blockly.Python.imports_['import_time'] = 'import time';
      var code = `time.${type}()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //是否在?
    Blockly.Python.python_in = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      var code = `${val} in ${name}`;
      return [code,Blockly.Python.ORDER_RELATIONAL];
    };

    Blockly.Python.try_except_else_finally = function() {
      var branch1 = Blockly.Python.statementToCode(this, 'DO1');
      branch1 = branch1.replace(/(^\s*)|(\s*$)/g, "");
      if (!branch1)
        branch1='pass';
      var branch2 = Blockly.Python.statementToCode(this, 'DO2');
      branch2 = branch2.replace(/(^\s*)|(\s*$)/g, ""); 
      if (!branch2)
        branch2='pass';
      var branch3 = Blockly.Python.statementToCode(this, 'DO3');
      branch3 = branch3.replace(/(^\s*)|(\s*$)/g, ""); 
      if (!branch3)
        branch3='pass';
      var branch4 = Blockly.Python.statementToCode(this, 'DO4');
      branch4 = branch4.replace(/(^\s*)|(\s*$)/g, ""); 
      if (!branch4)
        branch4='pass';
      var code =`try:\n    ${branch1}\nexcept Exception as err:\n    ${branch2}\nelse:\n    ${branch3}\nfinally:\n    ${branch4}\n`;
      return code;
    };

    //pass
    Blockly.Python.controls_pass = function() {
      var code = `pass\n`;
      return code;
    };

    //reset
    Blockly.Python.system_reset = function() {
      var code = `machine.reset()\n`;
      return code;
    };
    
    Blockly.Python.system_gc_collect = function () {
      Blockly.Python.imports_['import_gc'] = 'import gc';
      var dropdown_gc = this.getFieldValue('gc');
      var code = 'gc.' + dropdown_gc + '()\n';
      return code;  
    };

    Blockly.Python.controls_flow_statements = function () {
      var bk = this.getFieldValue('bk');
      var code = bk+'\n';
      return code;  
    };

    Blockly.Python.controls_thread = function () {
      var name=this.getFieldValue('VAR');
      var arg=Blockly.Python.valueToCode(this, 'arg', Blockly.Python.ORDER_RELATIONAL) || '0';
      arg = arg.replace(/\'/g, "");
      Blockly.Python.imports_['import _thread'] = 'import _thread';
      var code = `_thread.start_new_thread(${name}, (${arg}))\n`;
      return code;  
    };

    Blockly.Python.thread_func = function () {
      var name=this.getFieldValue('VAR');
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      if (!branch)
        branch='pass';
      var arg=Blockly.Python.valueToCode(this, 'arg', Blockly.Python.ORDER_RELATIONAL);
      arg = arg.replace(/\'/g, "");
      Blockly.Python.imports_['import _thread'] = 'import _thread';
      var code = `def ${name}(${arg}):\n    ${branch}\n`;
      return code;  
    };

    Blockly.Python.controls_exec = function () {
      var arg=Blockly.Python.valueToCode(this, 'arg', Blockly.Python.ORDER_RELATIONAL);
      var code = `exec(open(${arg}).read(),globals())\n`;
      return code;  
    };


    return Blockly;
  }
 
exports = addGenerator;
