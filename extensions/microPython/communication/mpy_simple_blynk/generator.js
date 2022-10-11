/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //SimpleBlynk初始化
    Blockly.Python.SimpleBlynk_init = function() {
      var wifi_ssid = Blockly.Python.valueToCode(this, 'qdp_wifi_ssid', Blockly.Python.ORDER_ATOMIC);
      var wifi_pass = Blockly.Python.valueToCode(this, 'qdp_wifi_pass', Blockly.Python.ORDER_ATOMIC);

      var auth = Blockly.Python.valueToCode(this, 'auth', Blockly.Python.ORDER_ATOMIC);
      var ip = Blockly.Python.valueToCode(this, 'ip', Blockly.Python.ORDER_ATOMIC);

      var RX = this.getFieldValue('pin1');
      var TX = this.getFieldValue('pin2');

      Blockly.Python.imports_['import_UART'] = 'from machine import UART';
      Blockly.Python.imports_['import_fm'] = 'from fpioa_manager import fm';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      Blockly.Python.imports_['import_simple_blynk'] = 'import simple_blynk';
      Blockly.Python.imports_['import_time'] = 'import time';
      Blockly.Python.setups_["simpleBlynk_init"] ="fm.register(qdpk210_aistart.board_pins[" + TX + "],fm.fpioa.UART1_TX)\n"
                                             + "fm.register(qdpk210_aistart.board_pins[" + RX + "],fm.fpioa.UART1_RX)\n"
                                             + "uart1=UART(UART.UART1, 9600, timeout=1000, read_buf_len=4096)\n"
                                             + "simpleBlynk = simple_blynk.SimpleBlynk(uart1)\n"
                                             + "simpleBlynk.sendConfigWifi(" + wifi_ssid + ", " + wifi_pass + ")\n"
                                             + "time.sleep_ms(500)\n"
                                             + "simpleBlynk.sendConfigAuth(" + auth + ", " + ip + ")\n";
      return '';
    };

    //运行SimpleBlynk
    Blockly.Python.SimpleBlynk_run = function() {
      var code = 'simpleBlynk.run()\n';
      return code;
    };

    //iotstart连接事件
    Blockly.Python.SimpleBlynk_CONNECTION_EVENT = function(block) {
      var type= this.getFieldValue('type');
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
      branch = Blockly.Python.addLoopTrap(branch, block.id);
      if (type == 0) {
        Blockly.Python.customFunctions_['def_wifiState'] = "def wifiState():\n";
        Blockly.Python.customFunctions_['def_wifiState'] += "  " + (branch? branch:"pass") + "\n";
        Blockly.Python.setups_["attachWIFIStateCallBack"] ='simpleBlynk.attachStateCallBack(wifiState, 0)\n';
      } if (type == 1) {
        Blockly.Python.customFunctions_['def_serverState'] = "def serverState():\n";
        Blockly.Python.customFunctions_['def_serverState'] += "  " + (branch? branch:"pass") + "\n";
        Blockly.Python.setups_["attachServerStateCallBack"] ='simpleBlynk.attachStateCallBack(serverState, 1)\n';
      }
      var code = '';
      return code;
    };

    //SimpleBlynk读取引脚事件
    Blockly.Python.SimpleBlynk_ReadBlynkData = function(block) {
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
      branch = Blockly.Python.addLoopTrap(branch, block.id);
      Blockly.Python.customFunctions_['def_readBlynkData'] = "def readBlynkData(pin, pinValue):\n";
      Blockly.Python.customFunctions_['def_readBlynkData'] += "  " + (branch ? branch : "pass") + "\n";
      Blockly.Python.setups_["attachBlynkWriteCallBack"] ='simpleBlynk.attachBlynkWriteCallBack(readBlynkData)\n';
      var code = '';
      return code;
    };

    Blockly.Python.SimpleBlynk_RETRIEVE_DATA = function(block) {
      var Vpin = this.getFieldValue('Vpin');
      var branch = Blockly.Python.statementToCode(this, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
      branch = Blockly.Python.addLoopTrap(branch, block.id);
      if(!branch)
        branch='pass';
      var code = 'if pin == "' + Vpin +'":\n  ' + branch +'\n';
      return code;
    };

    //SimpleBlynk 虚拟引脚数据接收
    Blockly.Python.SimpleBlynk_ReadData = function() {
      var type = this.getFieldValue('type');
      var Pos = this.getFieldValue('Pos');
      var code = "simpleBlynk.read"+type+"(pinValue, "+Pos+")";
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //板载语音或数字播报
    Blockly.Python.SimpleBlynk_ONBOARD_BROADCAST = function() {
      var type= this.getFieldValue('type');
      var value = Blockly.Python.valueToCode(this, 'value', Blockly.Python.ORDER_ATOMIC);
      if (type == 1) {
        var code="simpleBlynk.sendVoice(str("+value+"))\n";
      } if (type == 2) {
        var code="simpleBlynk.sendDigitalPlay(str("+value+"))\n";
      }
      return code;
    };

    Blockly.Python.QDPESP8266Voice_Dropdown=function(){
      var dropdown_pin = this.getFieldValue('PIN2'); 
      var code = dropdown_pin;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //SimpleBlynk 虚拟引脚数据发送
    Blockly.Python.SimpleBlynk_BLYNK_WRITE = function() {
      var Vpin = this.getFieldValue('Vpin');
      Vpin = Vpin.replace(/V/g, "");
      var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
      var code = "simpleBlynk.sendBlynkWrite("+Vpin+", str("+data+"))\n";
      return code;
    };

    //重启IOTstart
    Blockly.Python.SimpleBlynk_RESTART = function() {
      var code="simpleBlynk.blynkReset()\n";
      return code;
    };

  
    return Blockly;
  }
 
exports = addGenerator;
