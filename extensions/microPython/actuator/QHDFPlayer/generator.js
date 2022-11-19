/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.mpy_esp32_Mp3_init = function () {
      var tx = this.getFieldValue('tx');
      var rx = this.getFieldValue('rx');
      var uart = this.getFieldValue('uart');
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play = QDPPlay.SimpleQDPPlayerMini(uart_id=${uart},tx=${tx},rx=${rx})\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_vol_change = function () {
      var vol = this.getFieldValue('vol');
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.${vol}()\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_vol_set = function () {
      var vol = Blockly.Python.valueToCode(this, 'vol',Blockly.Python.ORDER_ATOMIC) ||'0' ;
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.set_vol(${vol})\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_set_EQ = function () {
      var mode = this.getFieldValue('mode');
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.set_eq(${mode})\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_prev_next_track = function () {
      var mode = this.getFieldValue('mode');
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.${mode}()\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_cycle_singles = function () {
      var num = Blockly.Python.valueToCode(this, 'num',Blockly.Python.ORDER_ATOMIC) ||'0' ;
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.set_mode(${num})\n`;
      return code;  
    };

    Blockly.Python.mpy_esp32_Mp3_play_pause_stop = function () {
      var mode = this.getFieldValue('mode');
      Blockly.Python.imports_['import_QDPPlay'] = 'import QDPPlay';
      var code=`play.${mode}()\n`;
      return code;  
    };


    return Blockly;
  }
 
exports = addGenerator;



