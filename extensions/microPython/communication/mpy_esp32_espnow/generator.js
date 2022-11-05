/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  //espnow
  Blockly.Python.communicate_espnow_init = function () {
      Blockly.Python.imports_['import_radio'] = "import radio";
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      var varName =this.getFieldValue('CHNL');
      var code = ""+name+"=radio.ESPNow(channel="+varName+")\n";
      return code;
  };

  Blockly.Python.network_espnow_mac= function() {
      Blockly.Python.imports_['import_radio'] = "import radio";
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      return [name+".mac", Blockly.Python.ORDER_ATOMIC];
  }

  Blockly.Python.network_espnow_info= function() {
      Blockly.Python.imports_['import_radio'] = "import radio";
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      return [name+".info()", Blockly.Python.ORDER_ATOMIC];
  }

  Blockly.Python.network_espnow_recv= function() {
      var mode=this.getFieldValue('mode')||'';
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      var code = name+".recv()"+mode;
      return [code, Blockly.Python.ORDER_ATOMIC];
  }

  Blockly.Python.network_espnow_send= function() {
      Blockly.Python.imports_['import_radio'] = "import radio";
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      var mac =Blockly.Python.valueToCode(this, 'mac',Blockly.Python.ORDER_ATOMIC);
      var content =Blockly.Python.valueToCode(this, 'content',Blockly.Python.ORDER_ATOMIC);
      var code = name+".send("+mac+","+content+")\n";
      return code;
  }

  Blockly.Python.network_espnow_recv_handle = function (block) {
      Blockly.Python.imports_['import_radio'] = "import radio";
      var name = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      var method = Blockly.Python.valueToCode(this, 'METHOD', Blockly.Python.ORDER_ATOMIC);
      method = method.replace(/\'/g, "");
      var code = name+".recv_cb("+method+")\n";
      return code;
  };

  Blockly.Python.network_espnow_recv_method = function (block) {
      var name = Blockly.Python.valueToCode(this, 'NAME',Blockly.Python.ORDER_ATOMIC); 
      name = name.replace(/\'/g, "");  
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      branch = Blockly.Python.addLoopTrap(branch,block.id);
      if (!branch)
        branch='pass';
      Blockly.Python.variables_['import_bluetooth_method'] = `def ${name}(mac, msg):\n  ${branch}\n`;
      var code = '';
      return code;  
  };

   
    return Blockly;
}
 
exports = addGenerator;
