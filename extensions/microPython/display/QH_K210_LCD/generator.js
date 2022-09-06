/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //LCD初始化
    Blockly.Python.PY_qdp_k210_lcd_init = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var freq =Blockly.Python.valueToCode(this, 'freq',Blockly.Python.ORDER_ATOMIC);
      var color = Blockly.Python.valueToCode(this, 'colour', Blockly.Python.ORDER_ATOMIC);
      var invert = this.getFieldValue("invert");
      var R = "0x" + color.substr(1, 2);
      var G = "0x" + color.substr(3, 2);
      var B = "0x" + color.substr(5);
      var code = `lcd.init(freq=${freq},color=(${R},${G},${B}),invert = ${invert})\n`;
      return code;  
    };

    //LCD清屏
    Blockly.Python.PY_qdp_k210_lcd_clear = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var color = Blockly.Python.valueToCode(this, 'colour', Blockly.Python.ORDER_ATOMIC);
      var invert = this.getFieldValue("invert");
      var R = "0x" + color.substr(1, 2);
      var G = "0x" + color.substr(3, 2);
      var B = "0x" + color.substr(5);
      var code = `lcd.clear((${R},${G},${B}))\n`;
      return code;  
    };

    //LCD显示
    Blockly.Python.PY_qdp_k210_lcd_display = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var img =Blockly.Python.valueToCode(this, 'img',Blockly.Python.ORDER_ATOMIC);
      img = img.replace(/\'/g,"");
      var code = "lcd.display("+img+")\n";
      return code;  
    };

    //LCD初始化
    Blockly.Python.PY_qdp_k210_lcd_rotation = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var dir = this.getFieldValue("dir");
      var code = `lcd.rotation(${dir})\n`;
      return code;  
    };

    //LCD镜像
    Blockly.Python.PY_qdp_k210_lcd_mirror = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var mirror = this.getFieldValue("mirror");
      var code = `lcd.rotation(${mirror})\n`;
      return code;  
    };

    //LCD绘制文本
    Blockly.Python.PY_qdp_k210_lcd_draw_string = function () {
      Blockly.Python.imports_['import_lcd'] = 'import lcd';
      var x =Blockly.Python.valueToCode(this, 'x',Blockly.Python.ORDER_ATOMIC);
      var y =Blockly.Python.valueToCode(this, 'y',Blockly.Python.ORDER_ATOMIC);
      var tex = Blockly.Python.valueToCode(this, 'content', Blockly.Python.ORDER_ATOMIC);
      var color_T = Blockly.Python.valueToCode(this, 'color_T', Blockly.Python.ORDER_ATOMIC);
      var color_S = Blockly.Python.valueToCode(this, 'color_S', Blockly.Python.ORDER_ATOMIC);
      var R1 = "0x" + color_T.substr(1, 2);
      var G1 = "0x" + color_T.substr(3, 2);
      var B1 = "0x" + color_T.substr(5);
      var R2 = "0x" + color_S.substr(1, 2);
      var G2 = "0x" + color_S.substr(3, 2);
      var B2 = "0x" + color_S.substr(5);
      var code = `lcd.draw_string(${x},${y},${tex},(${R1},${G1},${B1}),(${R2},${G2},${B2}))\n`;
      return code;  
    };

    return Blockly;
  }
 
exports = addGenerator;
