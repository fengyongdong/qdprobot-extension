/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Python.PY_qdp_k210_serial_softserial1 = function () {
      Blockly.Python.imports_['import_UART'] = 'from machine import UART';
      Blockly.Python.imports_['import_fm'] = 'from fpioa_manager import fm';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var dropdown_uart = this.getFieldValue('mode');
      var baudrate = this.getFieldValue('baudrate');
      var TX = this.getFieldValue('TX');
      var RX = this.getFieldValue('RX');
      var code1="fm.register(qdpk210_aistart.board_pins["+TX+"],fm.fpioa.UART"+dropdown_uart+"_TX)\n";
      var code2="fm.register(qdpk210_aistart.board_pins["+RX+"],fm.fpioa.UART"+dropdown_uart+"_RX)\n";
      var code3 = "uart"+dropdown_uart+"=UART(UART.UART"+dropdown_uart+", "+baudrate+", timeout=1000, read_buf_len=4096)\n";
      var code =code1+code2+code3;
      return code;
    };

    Blockly.Python.PY_qdp_k210_serial_print = function() {
      Blockly.Python.imports_['import_UART'] = 'from machine import UART';
      var dropdown_uart = this.getFieldValue('mode');
      var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '\"\"'
      var code = "uart"+dropdown_uart+".write("+content+")\n";
      return code;
    };

    Blockly.Python.PY_qdp_k210_serial_any = function(){
      Blockly.Python.imports_['import_UART'] = 'from machine import UART'; 
      var dropdown_uart = this.getFieldValue('mode');
      var code =`uart${dropdown_uart}.any()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.PY_qdp_k210_serial_read = function(){
      Blockly.Python.imports_['import_UART'] = 'from machine import UART'; 
      var mode = this.getFieldValue('mode');
      var type = this.getFieldValue('type');
      var code =`uart${mode}.${type}()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //红外发射
    Blockly.Python.PY_qdp_k210_communicate_ir_recv = function(){
      Blockly.Python.imports_['import_irremote_k210'] = 'import irremote_k210';   
      var pin = this.getFieldValue('PIN');
      return ["irremote_k210.read_id("+pin+")", Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.PY_qdp_k210_communicate_i2c_init = function () {
      Blockly.Python.imports_['import_I2C'] = 'from machine import I2C';
      var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
      return "i2c= I2C(I2C.I2C0, freq="+freq+", scl=30, sda=31)\n";
    };

    Blockly.Python.PY_qdp_k210_communicate_i2c_init1 = function () {
      Blockly.Python.imports_['import_I2C'] = 'from machine import I2C';
      var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
      var sda = this.getFieldValue('sda');
      var scl = this.getFieldValue('scl');
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      return "i2c = I2C(I2C.I2C0, freq="+freq+", scl=qdpk210_aistart.board_pins["+scl+"], sda=qdpk210_aistart.board_pins["+sda+"])\n";
    };

    //搜索I2C设备
    Blockly.Python.PY_qdp_k210_communicate_i2c_scan = function(){
      return ["i2c.scan()", Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.PY_qdp_k210_communicate_i2s_init = function () {
      Blockly.Python.imports_['import_fm'] = 'from fpioa_manager import fm';
      Blockly.Python.imports_['import_I2S'] = 'from Maix import I2S';
      var mode = this.getFieldValue('mode');
      var sample = Blockly.Python.valueToCode(this, 'freq',Blockly.Python.ORDER_ATOMIC);
      if(mode == '1') 
        {  var code1="fm.register(20,fm.fpioa.I2S0_IN_D0)\n";
        var code2="fm.register(30,fm.fpioa.I2S0_WS)\n";
        var code3="fm.register(32,fm.fpioa.I2S0_SCLK)\n";
        var code4="i2s = I2S(I2S.DEVICE_0)\n";
        var code5="i2s.channel_config(i2s.CHANNEL_0, I2S.RECEIVER, resolution = I2S.RESOLUTION_16_BIT, cycles = I2S.SCLK_CYCLES_32, align_mode = I2S.STANDARD_MODE)\n";  
        }
      else 
        {  var code1="fm.register(34,fm.fpioa.I2S0_OUT_D1)\n";
        var code2="fm.register(35,fm.fpioa.I2S0_SCLK)\n";
        var code3="fm.register(33,fm.fpioa.I2S0_WS)\n";
        var code4="i2s = I2S(I2S.DEVICE_0)\n";
        var code5="i2s.channel_config(i2s.CHANNEL_1, I2S.TRANSMITTER, resolution = I2S.RESOLUTION_16_BIT, cycles = I2S.SCLK_CYCLES_32, align_mode = I2S.RIGHT_JUSTIFYING_MODE)\n"; 
        } 
      var code6="i2s.set_sample_rate("+sample+")\n";    
      var code =code1+code2+code3+code4+code5+code6;
      return code;
    };

    //I2S采集数据
    Blockly.Python.PY_qdp_k210_communicate_i2s_record = function() {
      var value_sampling_points = Blockly.Python.valueToCode(this, 'sampling_points', Blockly.Python.ORDER_ATOMIC);
      var code = 'i2s.record('+value_sampling_points+')';
      return [code, Blockly.Python.ORDER_ATOMIC];
    };


    return Blockly;
  }
 
exports = addGenerator;
