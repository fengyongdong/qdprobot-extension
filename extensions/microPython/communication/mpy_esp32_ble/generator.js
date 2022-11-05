/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
  Blockly.Python.communicate_bluetooth_central_init = function(){
    Blockly.Python.imports_['import_ble_central'] = 'import ble_central';   
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, "");    
    var code = name+" = ble_central.BLESimpleCentral()\n";
    return code;
  };

  Blockly.Python.communicate_bluetooth_peripheral_init = function(){
    Blockly.Python.imports_['import_ble_peripheral'] = 'import ble_peripheral';  
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC); 
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC); 
    name = name.replace(/\'/g, "");    
    var code = name+" = ble_peripheral.BLESimplePeripheral(" + data + ")\n";
    return code;
  };

  Blockly.Python.communicate_bluetooth_scan = function(){
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, ""); 
    var code = name+".scan()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_bluetooth_connect = function(){
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);  
    name = name.replace(/\'/g, "");  
    var code = name+".connect(" + data + ")\n";
    return code;
  };
  Blockly.Python.communicate_bluetooth_is_connected = function(){
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    name = name.replace(/\'/g, "");
    var code = name+".is_connected()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.communicate_bluetooth_send = function(){
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC); 
    name = name.replace(/\'/g, "");   
    var code = name+".send(" + data + ")\n";
    return code;
  };

  Blockly.Python.communicate_bluetooth_recv = function (block) {
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    v = v.replace(/\'/g, "");
    var method = Blockly.Python.valueToCode(this, 'METHOD', Blockly.Python.ORDER_ATOMIC);
    method = method.replace(/\'/g, "");
    var code = v + '.recv('+ method +')\n';
    return code;
  };

  Blockly.Python.communicate_bluetooth_handle = function (block) {
    Blockly.Python.definitions_['import_ble_handle'] = 'import ble_handle'; 
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    v = v.replace(/\'/g, "");
    var method = Blockly.Python.valueToCode(this, 'METHOD', Blockly.Python.ORDER_ATOMIC);
    var code = v + '=ble_handle.Handle()\n'+v+'.recv('+ method +')\n';
    return code;
  };

  Blockly.Python.communicate_bluetooth_method = function (block) {
      var name = Blockly.Python.valueToCode(this, 'NAME',Blockly.Python.ORDER_ATOMIC); 
      name = name.replace(/\'/g, "");  
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      branch = Blockly.Python.addLoopTrap(branch,block.id);
      if (!branch)
        branch='pass';
      Blockly.Python.variables_['import_bluetooth_method'] = `def ${name}(data):\n  ${branch}\n`;
      var code = '';
      return code;  
  };

    return Blockly;
}
 
exports = addGenerator;
