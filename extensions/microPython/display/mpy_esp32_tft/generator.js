/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.tft_use_spi_init=function(){
    Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var addr = '0x700000'
    var v = this.getFieldValue('SUB');
    var sv = this.getFieldValue('SPISUB');
    var pv = this.getFieldValue('CS');
    var dv = this.getFieldValue('DC');
    var w = Blockly.Python.valueToCode(this, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
    var h = Blockly.Python.valueToCode(this, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
    var op = this.getFieldValue('rotate');
    var code = v + ' = st7789.ST7789('+ sv+ ','+ w + ',' + h + ',dc_pin='+ dv + ',cs_pin=' + pv +',rotation='+op + ',font_address='+addr+')\n';    
    return code;
  };

  Blockly.Python.tft_show_image_or_string_delay = function() {
    Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var v = this.getFieldValue('SUB');
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ASSIGNMENT);
    var y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ASSIGNMENT);
    var size = Blockly.Python.valueToCode(this, 'size', Blockly.Python.ORDER_ASSIGNMENT);
    var space = Blockly.Python.valueToCode(this, 'space', Blockly.Python.ORDER_ASSIGNMENT);
    var color = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
    var op = this.getFieldValue('center');
    var code = v+".shows(" + data + ',x = ' + x +',y = ' + y +',size = ' + size +',space = ' + space + ',center = ' + op  +',color=' + color +  ")\n";
    return code;
  };

  Blockly.Python.tft_scroll_string_delay = function() {  
     Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var v = this.getFieldValue('SUB');
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
     var y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ASSIGNMENT);
     var size = Blockly.Python.valueToCode(this, 'size', Blockly.Python.ORDER_ASSIGNMENT);
     var time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ASSIGNMENT);
     var space = Blockly.Python.valueToCode(this, 'space', Blockly.Python.ORDER_ASSIGNMENT);
     var color = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
     var code = v+".scroll("+ data +',y = ' + y +',size = ' + size+ ',speed =' + time  + ',space = '+ space + ',color=' + color + ")\n";
     return code;
  };

  Blockly.Python.tft_show_frame_string_delay = function() {
    Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var v = this.getFieldValue('SUB');
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
    var size = Blockly.Python.valueToCode(this, 'size', Blockly.Python.ORDER_ASSIGNMENT);
    var time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ASSIGNMENT);
    var color = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
    var code = v+".frame(" + data +',size = ' + size + ',delay = ' + time +',color=' + color +  ")\n";
    return code;
  };

  Blockly.Python.tft_line_arbitrarily=function(){
    Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var varName =this.getFieldValue('SUB');
    var location_x1 = Blockly.Python.valueToCode(this, 'x1', Blockly.Python.ORDER_ATOMIC);
    var location_y1= Blockly.Python.valueToCode(this, 'y1', Blockly.Python.ORDER_ATOMIC);
    var location_x2 = Blockly.Python.valueToCode(this, 'x2', Blockly.Python.ORDER_ATOMIC);
    var location_y2= Blockly.Python.valueToCode(this, 'y2', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
    var code = varName + '.line('+location_x1+', '+location_y1+', '+location_x2+', '+location_y2+', color='+color+')\n';
    return code;
  };

  Blockly.Python.tft_fill=function(){
    Blockly.Python.imports_['import_st7789'] = 'import st7789';
    var v = this.getFieldValue('SUB');
    var key = this.getFieldValue('key');
    var code = v + '.fill(st7789.'+key+')\n';
    return code;
  };




    return Blockly;
  }
 
exports = addGenerator;
