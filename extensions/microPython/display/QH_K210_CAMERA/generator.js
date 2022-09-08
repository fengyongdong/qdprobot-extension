/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //camera初始化
    Blockly.Python.PY_qdp_k210_camera_init = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var key1 = this.getFieldValue('key1');
      var key2 = this.getFieldValue('key2');
      var key3 = this.getFieldValue('key3');
      var frame =Blockly.Python.valueToCode(this, 'frame',Blockly.Python.ORDER_ATOMIC);
      var code1 = "sensor.reset()\n";
      var code2 = "sensor.set_pixformat("+key1+")\n";
      var code3 = "sensor.set_framesize("+key2+")\n";
      var code4 = "sensor.run("+key3+")\n";
      var code5 = "sensor.skip_frames("+frame+")\n";
      var code=code1+code2+code3+code4+code5;
      return code;  
    };

    Blockly.Python.PY_qdp_k210_camera_fill_in_light = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var color = Blockly.Python.valueToCode(this, 'colour', Blockly.Python.ORDER_ATOMIC);
      var R = "0x" + color.substr(1, 2);
      var G = "0x" + color.substr(3, 2);
      var B = "0x" + color.substr(5);
      var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
      var key1 = this.getFieldValue('key1');
      Blockly.Python.imports_['import_ws2812'] = 'from modules import ws2812';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      if (key == "0")
        var code = "rgb = ws2812(qdpk210_aistart.board_pins[10], 5)\n"
                 + "rgb.set_led(4, ("+R+","+G+","+B+"))\n"
                 + "rgb.display()\n";
      else
        var code = "rgb = ws2812(qdpk210_aistart.board_pins[10], 5)\n"
                 + "rgb.set_led("+key1+", ("+R+","+G+","+B+"))\n"
                 + "rgb.display()\n";
      return code;  
    };

    //camera获取图像
    Blockly.Python.PY_qdp_k210_camera_snapshot = function(){
        Blockly.Python.imports_['import_sensor'] = 'import sensor';
        var code =  'sensor.snapshot()';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.PY_qdp_k210_camera_shutdown = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var key = this.getFieldValue('key');
      var mode = this.getFieldValue('mode');
      var code = "sensor."+mode+"("+key+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_camera_setmun = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var key = this.getFieldValue('key');
      var num =Blockly.Python.valueToCode(this, 'num',Blockly.Python.ORDER_ATOMIC);
      var code = "sensor."+key+"("+num+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_camera_getinfo = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var key = this.getFieldValue('key');
      var code = "sensor."+key+"()";
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_camera_set_windowing = function () {
      Blockly.Python.imports_['import_sensor'] = 'import sensor';
      var numa =Blockly.Python.valueToCode(this, 'numa',Blockly.Python.ORDER_ATOMIC);
      var numb =Blockly.Python.valueToCode(this, 'numb',Blockly.Python.ORDER_ATOMIC);
      var code = "sensor.set_windowing(("+numa+","+numb+"))\n";
      return code;  
    };


    return Blockly;
  }
 
exports = addGenerator;
