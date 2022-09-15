/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.PY_qdp_k210_actuator_led_init = function () {
    Blockly.Python.imports_['import_GPIO'] = 'from Maix import GPIO';
    Blockly.Python.imports_['import_fm'] = 'from fpioa_manager import fm';  
    var key = this.getFieldValue('key');
    key = key.split('-');
    var code = `fm.register(${key[1]}, fm.fpioa.GPIOHS${key[1]})\n${key[0]}= GPIO(GPIO.GPIOHS${key[1]}, GPIO.OUT)\n`;
    return code;  
  };

  Blockly.Python.PY_qdp_k210_actuator_led_bright= function() {
    Blockly.Python.imports_['import_GPIO'] = 'from Maix import GPIO';
    var key = this.getFieldValue('key');
    var bright = this.getFieldValue('bright');
    var code = ""+key+".value("+bright+")\n";
    return code;
  };


  Blockly.Python.PY_qdp_k210_actuator_ws2812_init=function(){
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var value_ledcount = Blockly.Python.valueToCode(this, 'LEDCOUNT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.imports_['imports_ws2812'] = 'from modules import ws2812';
    Blockly.Python.imports_['imports_qdpk210_aistart'] = 'import qdpk210_aistart';
    var code = 'rgb = ws2812(qdpk210_aistart.board_pins['+dropdown_rgbpin+'], '+value_ledcount+')\n';
    return code;
  };

  Blockly.Python.PY_qdp_k210_actuator_ws2812_set_led=function(){
    Blockly.Python.imports_['imports_ws2812'] = 'from modules import ws2812';
    Blockly.Python.imports_['imports_qdpk210_aistart'] = 'import qdpk210_aistart';
    var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
    var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
    var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
    var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
    var code= 'rgb.set_led('+value_led+',('+value_rvalue+', '+value_gvalue+', '+value_bvalue+'))\n';
    return code;
  };

  Blockly.Python.PY_qdp_k210_actuator_ws2812_display=function(){
    Blockly.Python.imports_['imports_ws2812'] = 'from modules import ws2812';
    Blockly.Python.imports_['imports_qdpk210_aistart'] = 'import qdpk210_aistart';
    var code= 'rgb.display()\n';   
    return code;
  };

  Blockly.Python.PY_qdp_k210_actuator_Servo_init = function () {
    //Blockly.Python.imports_['imports_GPIO'] = 'from Maix import GPIO';
    Blockly.Python.imports_['imports_PWM'] = 'from machine import PWM';
    Blockly.Python.imports_['imports_Timer'] = 'from machine import Timer';
    Blockly.Python.imports_['imports_qdpk210_aistart'] = 'import qdpk210_aistart';
    var key = this.getFieldValue('PIN');
    var time = this.getFieldValue('time');
    var Timer=time%3
    var CHANNEL=parseInt(time/3)
    var code1 = 'tim' + time + ' = Timer(Timer.TIMER' + Timer + ', Timer.CHANNEL' + CHANNEL + ', mode=Timer.MODE_PWM)\n'; 
    var code2 = 'pse'+key+'=PWM(tim'+time+', freq=50, duty=2.5, pin=qdpk210_aistart.board_pins['+key+'])\n';
    return code1+code2;  
  };

  Blockly.Python.PY_qdp_k210_actuator_Servo = function () {
    Blockly.Python.imports_['imports_PWM'] = 'from machine import PWM';
    var key = this.getFieldValue('PIN');
    var range = Blockly.Python.valueToCode(this,'range', Blockly.Python.ORDER_ATOMIC);
    var code = "pse"+key+".duty("+range+"/18.0+2.5)\n";
    return code;  
  };

  return Blockly;
  }
 
exports = addGenerator;



