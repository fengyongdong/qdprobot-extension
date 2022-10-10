/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.try_except_else_finally = function(block) {
      var branch1 = Blockly.Python.statementToCode(this, 'DO1');
      branch1 = branch1.replace(/(^\s*)|(\s*$)/g, "");
      branch1 = Blockly.Python.addLoopTrap(branch1,block.id);
      if (!branch1)
        branch1='pass';
      var branch2 = Blockly.Python.statementToCode(this, 'DO2');
      branch2 = branch2.replace(/(^\s*)|(\s*$)/g, ""); 
      branch2 = Blockly.Python.addLoopTrap(branch2,block.id);
      if (!branch2)
        branch2='pass';
      var branch3 = Blockly.Python.statementToCode(this, 'DO3');
      branch3 = branch3.replace(/(^\s*)|(\s*$)/g, ""); 
      branch3 = Blockly.Python.addLoopTrap(branch3,block.id);
      if (!branch3)
        branch3='pass';
      var branch4 = Blockly.Python.statementToCode(this, 'DO4');
      branch4 = branch4.replace(/(^\s*)|(\s*$)/g, ""); 
      branch4 = Blockly.Python.addLoopTrap(branch4,block.id);
      if (!branch4)
        branch4='pass';
      var code =`try:\n  ${branch1}\nexcept Exception as err:\n  ${branch2}\nelse:\n  ${branch3}\nfinally:\n  ${branch4}\n`;
      return code;
    };

    //pass
    Blockly.Python.controls_pass = function() {
      var code = `pass\n`;
      return code;
    };

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

    Blockly.Python.python_del = function() {
      var name=this.getFieldValue('name');
      var code = `del ${name}\n`;
      return code;
    };

    //reset
    Blockly.Python.system_reset = function() {
      var code = `machine.reset()\n`;
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

    Blockly.Python.thread_func = function (block) {
      var name=this.getFieldValue('VAR');
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      branch = Blockly.Python.addLoopTrap(branch,block.id);
      if (!branch)
        branch='pass';
      var arg=Blockly.Python.valueToCode(this, 'arg', Blockly.Python.ORDER_RELATIONAL);
      arg = arg.replace(/\'/g, "");
      Blockly.Python.imports_['import _thread'] = 'import _thread';
      var code = `def ${name}(${arg}):\n  ${branch}\n`;
      return code;  
    };

    Blockly.Python.controls_exec = function () {
      var arg=Blockly.Python.valueToCode(this, 'arg', Blockly.Python.ORDER_RELATIONAL);
      var code = `exec(open(${arg}).read(),globals())\n`;
      return code;  
    };

    Blockly.Python.controls_range = function () {
      var from = Blockly.Python.valueToCode(this, "FROM", Blockly.Python.ORDER_NONE) || "0";
      var end = Blockly.Python.valueToCode(this, "TO", Blockly.Python.ORDER_NONE) || "0";
      var step = Blockly.Python.valueToCode(this, "STEP", Blockly.Python.ORDER_NONE) || "1";
      var code = "range(" + from + ", " + end + ", " + step + ")";
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['controls_forEach'] = function(block) {
      // For each loop.
      var variable0 = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC) || '\'\'';
      var argument0 = Blockly.Python.valueToCode(this, 'LIST',
          Blockly.Python.ORDER_RELATIONAL) || '[]';
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      branch = Blockly.Python.addLoopTrap(branch,block.id);
      if(!branch)
        branch='pass';
      var code = 'for ' + variable0 + ' in ' + argument0 + ':\n  ' + branch+'\n';
      return code;
    };

    Blockly.Python.py_variables = function () {
      var name = Blockly.Python.valueToCode(this, "name", Blockly.Python.ORDER_NONE) || "0";
      name = name.replace(/\'/g, "");
      return [name, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
