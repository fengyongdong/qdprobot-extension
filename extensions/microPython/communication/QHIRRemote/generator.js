/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //红外遥控器接收
    Blockly.Python.PY_qdp_esp32_ir_re = function (block) {
      var PIN = this.getFieldValue('PIN');
      var setupBranch = Blockly.Python.statementToCode(block, 'DO');
      setupBranch = setupBranch.replace(/(^\s*)|(\s*$)/g, "");
      if (!setupBranch)
        setupBranch='pass';
      Blockly.Python.imports_['import_IRReceiver'] = `from IRRemote import IRReceiver`;
      Blockly.Python.setups_['setup_IRReceiver'] =`receiver = IRReceiver(${PIN})`;
      Blockly.Python.setups_['setup_receiver_callback'] =`receiver.callback = rec`;
      Blockly.Python.setups_['setup_receiver_daemon'] =`receiver.daemon()`;
      
      Blockly.Python.customFunctions_['ir_rec']  = `def rec(dec):\n    ${setupBranch}`;
      var code = setupBranch;

      return '';
    };

    //红外遥控器发送
    Blockly.Python.PY_qdp_esp32_ir_send = function (block) {
      var PIN = this.getFieldValue('PIN');
      var contents = Blockly.Python.valueToCode(this, 'contents',Blockly.Python.ORDER_ATOMIC) ||' ' ;
      Blockly.Python.imports_['import_IRSender'] = `from IRRemote import IRSender`;
      Blockly.Python.setups_['setup_IRReceiver'] =`sender = IRSender(${PIN})`;    
      var code  = `sender.sender(${contents})\n`;
      return code;
    };
    
    return Blockly;
  }
 
exports = addGenerator;
