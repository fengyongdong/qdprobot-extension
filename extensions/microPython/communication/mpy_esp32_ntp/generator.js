/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.communicate_esp32_ntp_updata_time= function(block) {
    var server = this.getFieldValue('server');
    Blockly.Python.imports_['import_ntptime'] = "import ntptime";
    Blockly.Python.imports_['import_time'] = "import time";
    var code = `ntptime.NTP_DELTA = 3155644800\nntptime.host = '${server}'\nntptime.settime()\n`;
    return code;
  };

  Blockly.Python.communicate_esp32_ntp_get_time= function(block) {
    var type = this.getFieldValue('type');
    Blockly.Python.imports_['import_time'] = "import time";
    var code = `time.localtime${type}`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

   return Blockly;
}
 
exports = addGenerator;
