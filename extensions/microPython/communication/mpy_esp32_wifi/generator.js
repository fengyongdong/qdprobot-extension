/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.network_init= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    var mode=this.getFieldValue('mode');
    return "wlan = network.WLAN(network."+mode+"_IF);\n";
  };

  Blockly.Python.network_open= function() {
    Blockly.Python.imports_['import_network'] = "import network";   
    var op=this.getFieldValue('op');
    var code="wlan.active("+op+")\n";
    return code;
  };

  Blockly.Python.network_is_active= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    
    var code="wlan.active()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.network_scan= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    
    var op=this.getFieldValue('op');
    var code="wlan.scan()["+op+"]";
    switch (op) {    
    case "all":
       var code1 = 'wlan.scan()';
       return [code1, Blockly.Python.ORDER_ASSIGNMENT];
       break;
    default:
        return [code, Blockly.Python.ORDER_ASSIGNMENT];
        break;   
    }
  };

  Blockly.Python.network_connect= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    var id = Blockly.Python.valueToCode(this, 'id', Blockly.Python.ORDER_ATOMIC);
    var password = Blockly.Python.valueToCode(this, 'password', Blockly.Python.ORDER_ATOMIC);
    return "wlan.connect("+id+","+password+")\n"
  };

  Blockly.Python.network_wifi_connect= function() {
    Blockly.Python.imports_['import_network'] = "import network"; 
    var code =  "wlan.isconnected()";
    return [code, Blockly.Python.ORDER_ASSIGNMENT];
  };

  Blockly.Python.network_get_connect= function() {
    Blockly.Python.imports_['import_network'] = "import network";    
    var mode=this.getFieldValue('mode');
    var code="wlan.ifconfig()["+mode+"]";
    return [code, Blockly.Python.ORDER_ATOMIC]
  };

  Blockly.Python.network_stop= function() {
    Blockly.Python.imports_['import_network'] = "import network";   
    return "wlan.disconnect()\n";
  };

  Blockly.Python.network_get_wifi= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    
    var op=this.getFieldValue('op');
    var code="wlan.config('"+op+"')";
    return [code, Blockly.Python.ORDER_ATOMIC]
  };

  Blockly.Python.network_ap_connect= function() {
    Blockly.Python.imports_['import_network'] = "import network";
    // Blockly.Python.setups_['class_wlan'] ='ap = network.WLAN(network.AP_IF)\n'+'ap.active(True)\n';
    
    var essid = Blockly.Python.valueToCode(this, 'essid', Blockly.Python.ORDER_ATOMIC);
    var channel = Blockly.Python.valueToCode(this, 'channel', Blockly.Python.ORDER_ATOMIC);
    return "wlan.config(essid = "+essid+", channel = "+channel+")\n";
  };

    
    return Blockly;
  }
 
exports = addGenerator;
