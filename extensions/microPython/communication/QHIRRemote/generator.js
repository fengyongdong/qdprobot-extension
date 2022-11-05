/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.communicate_ir_recv = function(){
        Blockly.Python.imports_['import_ir_remote'] = 'import ir_remote';   
        var pin = this.getFieldValue('PIN');
        var sub = this.getFieldValue('SUB');
        return "ir_remote.IRrecv("+pin+", "+sub+")\n"
    };

    //红外遥控器接收
    Blockly.Python.PY_qdp_esp32_ir_re = function (block) {
      Blockly.Python.imports_['import_ir_remote'] = 'import ir_remote';   
      var PIN = this.getFieldValue('PIN');
      var setupBranch = Blockly.Python.statementToCode(block, 'DO');
      setupBranch = setupBranch.replace(/(^\s*)|(\s*$)/g, "");
      setupBranch = Blockly.Python.addLoopTrap(setupBranch,block.id);
      if (!setupBranch)
        setupBranch='pass';
      Blockly.Python.variables_['ir_rec']  = `def rec(addr, data):\n  ${setupBranch}`;
      var code = setupBranch;

      return '';
    };

    //红外遥控器发送
    Blockly.Python.PY_qdp_esp32_ir_send = function (block) {
      Blockly.Python.imports_['import_ir_remote'] = 'import ir_remote';   
      var PIN = this.getFieldValue('PIN');
      var contents = Blockly.Python.valueToCode(this, 'contents',Blockly.Python.ORDER_ATOMIC) ||'0' ;
      var address = Blockly.Python.valueToCode(this, 'address',Blockly.Python.ORDER_ATOMIC) ||'0' ;
      var code  = `ir_remote.IRsend(${PIN}, ${address}, ${contents})\n`;
      return code;
    };
    
    return Blockly;
  }
 
exports = addGenerator;
