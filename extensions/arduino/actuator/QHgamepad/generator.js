/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //按键
    Blockly.Arduino.IOT_REMOTE_CONTROL_BUTTON_EVENT = function () {
     Blockly.Arduino.definitions_['include_Button2'] = '#include <Button2.h>';
     var dropdown_pin = this.getFieldValue('PIN');
     var dropdown_mode = this.getFieldValue('mode');
     Blockly.Arduino.definitions_['var_declare_button2'+dropdown_pin] = 'Button2 button'+dropdown_pin+'= Button2('+dropdown_pin+',INPUT,false,false);';
     Blockly.Arduino.setups_['setup_button2_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.set' + dropdown_mode + 'Handler('+dropdown_mode+dropdown_pin+');';
     // var code = 'button' +dropdown_pin+ '.tick();';

     var funcName = dropdown_mode+dropdown_pin;
     var branch = Blockly.Arduino.statementToCode(this, 'DO');
     var code2 = 'void' + ' ' + funcName + '(Button2& btn) {\n' + branch + '}\n';
     Blockly.Arduino.definitions_[funcName] = code2;
     Blockly.Arduino.loops_['button2_loops' + dropdown_pin]  = 'button' +dropdown_pin+ '.loop();';
     var code = '';
     return code;
    };



    //获取摇杆值
    Blockly.Arduino.IOT_REMOTE_CONTROL_get_the_joystick_value = function() {
      var mode= this.getFieldValue('mode');
      Blockly.Arduino.definitions_['include_QDPJoystick'] ='#include <QDPJoystick.h>\n';
      Blockly.Arduino.definitions_['var_declare_QDPJoystick'] = 'QDPJoystick QDPJoystick;';
      Blockly.Arduino.setups_['QDPJoystick_setup'] = 'QDPJoystick.begin(15,25);\n'
      var code = 'QDPJoystick.Angle1()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
