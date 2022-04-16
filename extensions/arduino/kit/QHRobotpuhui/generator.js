/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    function numberck(pinn) {
        if (pinn == "1") {
            return "P1";
        }
        if (pinn == "2") {
            return "P2";
        }
        if (pinn == "3") {
            return "P3";
        }
        if (pinn == "4") {
            return "P4";
        }
        if (pinn == "5") {
            return "P5";
        }
        if (pinn == "6") {
            return "P6";
        }
    }
    //一般按钮
    Blockly.Arduino.QH_button_general = function(block) {
        const pin = this.getFieldValue('pin');
        const mode = this.getFieldValue('mode');
        Blockly.Arduino.includes_.definitions_include_QDPport = `#include <QDPport.h>`;
        Blockly.Arduino.setups_[`QHbutton_${pin}`] = `pinMode(QDPport[${pin}][${mode}], INPUT);`;
        return [`digitalRead(QDPport[${pin}][${mode}])`, Blockly.Arduino.ORDER_ATOMIC];
    };
    //双按钮
    Blockly.Arduino.QH_button_both = function(block) {
        var pin = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.setups_['setup_input_' + pin] = 'pinMode(QDPport[' + pin + '][0], INPUT);\n  pinMode(QDPport[' + pin + '][1], INPUT);';
        var code = 'digitalRead(QDPport[' + pin + '][0])||digitalRead(QDPport[' + pin + '][1])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //多功能按钮初始化
    Blockly.Arduino.QH_buttonfuction_init = function() {
        var pin = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'buttonP' + pin + '_0.Update();\nbuttonP' + pin + '_1.Update();\n';
        return code;
    };
    //多功能按钮
    Blockly.Arduino.QH_buttonfuction_do = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin1 = this.getFieldValue('PIN1');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_include_clickButton'] = '#include <clickButton.h>';
        Blockly.Arduino.definitions_['define_click0' + dropdown_pin] = 'ClickButton buttonP' + dropdown_pin + '_0(QDPport[' + dropdown_pin + '][0],HIGH);\n';
        Blockly.Arduino.definitions_['define_click1' + dropdown_pin] = 'ClickButton buttonP' + dropdown_pin + '_1(QDPport[' + dropdown_pin + '][1],HIGH);\n';
        var code = 'buttonP' + dropdown_pin + '_' + dropdown_pin1 + '.buttoncheck(' + dropdown_pin2 + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //
    //超声波
    Blockly.Arduino.QH_UltraSonicDistanceSensor = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_HCSR'] = '#include <QDPHCSR04.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_chaoshengbo' + dropdown_pin] = 'UltraSonicDistanceSensor distanceSensor_' + dropdown_pin + '(' + dropdown_pin + ');\n';
        var code = 'distanceSensor_' + dropdown_pin + '.measureDistance' + dropdown_pin2 + '()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //巡线
    Blockly.Arduino.QH_Line_follower = function() {
        var PIN = this.getFieldValue('PIN');
        var state1 = this.getFieldValue('state1');
        var state2 = this.getFieldValue('state2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.setups_['setup_input_' + PIN] = 'pinMode(QDPport[' + PIN + '][0], INPUT);\n  pinMode(QDPport[' + PIN + '][1], INPUT);';
        var code = '(digitalRead(QDPport[' + PIN + '][0]) == ' + state1 + ')&&(digitalRead(QDPport[' + PIN + '][1]) == ' + state2 + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //光线
    Blockly.Arduino.QH_lightSensor = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[' + dropdown_pin + '][1])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //声音
    Blockly.Arduino.QH_sound = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[' + dropdown_pin + '][0])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //电位器
    Blockly.Arduino.QH_Potentiometer = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin1 = this.getFieldValue('PIN1');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[' + dropdown_pin + '][' + dropdown_pin1 + '])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //DH11温湿度
    Blockly.Arduino.QH_dht11 = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var what = this.getFieldValue('WHAT');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_DHT'] = '#include <DHT.h>';
        Blockly.Arduino.definitions_['define_dht_p'] = 'DHT myDHT_' + dropdown_pin + '(QDPport[' + dropdown_pin + '][0],11);';
        Blockly.Arduino.setups_['myDHT_' + dropdown_pin + 'begin'] = 'myDHT_' + dropdown_pin + '.begin();';
        var code = 'myDHT_' + dropdown_pin + '.read' + what + '()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //高低
    Blockly.Arduino.QH_inout_highlow = function () {
        // Boolean values HIGH and LOW.
        var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED1
    Blockly.Arduino.QH_ledlight = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN1');
        var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_['setup_output33_' + dropdown_pin + dropdown_pin2] = 'pinMode(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '], OUTPUT);';
        var code = 'digitalWrite(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '],' + dropdown_stat + ');\n'
        return code;
    };
    //读取LED灯状态
    Blockly.Arduino.QH_read_ledlight = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN1');
        Blockly.Arduino.setups_['setup_output33_' + dropdown_pin + dropdown_pin2] = 'pinMode(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '], OUTPUT);';
        var code = 'digitalRead(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '])'
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED亮度
    Blockly.Arduino.QH_ledlight_PWM = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN1');
        var ledn = Blockly.Arduino.valueToCode(this, 'ledn', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.setups_['setup_output1_' + dropdown_pin + dropdown_pin2] = 'pinMode(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '], OUTPUT);';
        var code = 'analogWrite(QDPport[' + dropdown_pin + '][' + dropdown_pin2 + '],' + ledn + ');\n'
        return code;
    };
    //RBGLED
    Blockly.Arduino.QH_rgb_led = function() {
        Blockly.Arduino.definitions_['include_display'] = '#include "QDPRGBLED.h"';
        var pin1 = this.getFieldValue('PIN');
        var NUM = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var NUM8 = Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if (!Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1]) {
            Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1] = 'QDPRGBLED QDPRGBLED_' + pin1 + ';';
            Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin1] = 'QDPRGBLED_' + pin1 + '.init(QDPport[' + pin1 + '][1],' + NUM8 + ');';
        }
        var code = 'QDPRGBLED_' + pin1 + '.setRgbLEDColor(' + NUM + ',' + R + ',' + G + ',' + B + ');\n';
        return code;
    };
    //RBGLED2
    Blockly.Arduino.QH_rgb_led2 = function() {
        Blockly.Arduino.definitions_['include_display'] = '#include "QDPRGBLED.h"';
        var pin1 = this.getFieldValue('PIN');
        var NUM = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var color = Blockly.Arduino.valueToCode(this, 'colour', Blockly.Arduino.ORDER_ATOMIC).replace('#', '');
        var R = '0x' + color.substr(0, 2);
        var G = '0x' + color.substr(2, 2);
        var B = '0x' + color.substr(4);
        var NUM8 = Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if (!Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1]) {
            Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1] = 'QDPRGBLED QDPRGBLED_' + pin1 + ';';
            Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin1] = 'QDPRGBLED_' + pin1 + '.init(QDPport[' + pin1 + '][1],' + NUM8 + ');';
        }
        var code = 'QDPRGBLED_' + pin1 + '.setRgbLEDColor(' + NUM + ',' + R + ',' + G + ',' + B + ');\n';
        return code;
    };
    //蜂鸣器
    Blockly.Arduino.QH_buzzer = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer2' + dropdown_pin] = 'QDPBuzzer QDPBuzzer' + dropdown_pin + ';';
        Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = '';
        var code = 'QDPBuzzer' + dropdown_pin + '.tone(QDPport[' + dropdown_pin + '][1],' + dropdown_pin2 + ',' + dur + ');\n';
        return code;
    };
    //蜂鸣器音乐
    Blockly.Arduino.QH_buzzer_music = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer2' + dropdown_pin] = 'QDPBuzzer QDPBuzzer' + dropdown_pin + ';';
        Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = '';
        var code = 'QDPBuzzer' + dropdown_pin + '.buzzer_music(QDPport[' + dropdown_pin + '][1],' + dropdown_pin2 + ');\n';
        return code;
    };
    //直流电机
    Blockly.Arduino.QH_motor = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot00'] = '#include <QDPDCMOTOR.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_motor' + dropdown_pin] = 'QDPDCMOTOR QDPM' + dropdown_pin + '(' + dropdown_pin + ');\n';
        var code = 'QDPM' + dropdown_pin + '.run(' + speed + ');\n';
        return code;
    };
    //舵机360
    Blockly.Arduino.QH_servomotor360 = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('DIR');
        var num1 = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobotservo'] = '#include <QDPServo.h>';
        Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_motor31' + dropdown_pin] = 'VarSpeedServo QDPservo_' + dropdown_pin + ';\n';
        Blockly.Arduino.setups_['setup_output_3' + dropdown_pin] = 'QDPservo_' + dropdown_pin + '.attach(QDPport[' + dropdown_pin + '][1]);\n';
        var code = 'QDPservo_' + dropdown_pin + '.writeMicroseconds(QDPServoPulseWith1(' + dropdown_pin2 + ',' + num1 + '));\n';
        return code;
    };
    //舵机
    Blockly.Arduino.QH_servomotor180 = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var IsWait = this.getFieldValue('wait');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_motor31' + dropdown_pin] = 'VarSpeedServo QDPservo_' + dropdown_pin + ';\n';
        Blockly.Arduino.setups_['setup_output_3' + dropdown_pin] = 'QDPservo_' + dropdown_pin + '.attach(QDPport[' + dropdown_pin + '][1],500,2500);\n';
        var code = 'QDPservo_' + dropdown_pin + '.write(' + num1 + ',' + speed + ',' + IsWait + ');\n';
        return code;
    };
    //舵机角度
    Blockly.Arduino.QH_servomotorread = function() {
        var dropdown_pin = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_motor31' + dropdown_pin] = 'VarSpeedServo QDPservo_' + dropdown_pin + ';\n';
        Blockly.Arduino.setups_['setup_output_3' + dropdown_pin] = 'QDPservo_' + dropdown_pin + '.attach(QDPport[' + dropdown_pin + '][1]);\n';
        var code = 'QDPservo_' + dropdown_pin + '.read()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //红外遥控器
    Blockly.Arduino.QH_ir_re2 = function() {
        var dropdown_pin = this.getFieldValue('PIN1');
        var dropdown_pin1 = this.getFieldValue('PIN');
        var type = this.getFieldValue('TYPE');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_ir_recv'] = '#include "IRremote.h"\n';
        Blockly.Arduino.definitions_['var_declare_ir_recv0' + dropdown_pin] = 'IRrecv irrecv_' + dropdown_pin + '(QDPport[' + dropdown_pin + '][1]);\ndecode_results results_' + dropdown_pin + ';\n';
        Blockly.Arduino.definitions_['var_ir_recv1' + dropdown_pin] = 'bool irkeypressed_' + dropdown_pin + '(uint8_t key ,bool type) {\n' + 'static uint8_t resultkey = 0;\n' + 'const uint8_t keyval[] = {0xFF, 0x5D, 0x9D, 0x1D, 0xDD, 0xFD, 0x3D, 0x1F, 0x57, 0x6F, 0x97, 0x67, 0x4F, 0xCF, 0xE7, 0x85, 0xEF, 0xC7, 0xA5, 0xBD, 0xB5, 0xAD}; //对应编码值\n' + 'static uint8_t keyrecv = 0;\n' + 'static unsigned long irDelayTime = 0;\n' + 'if (irrecv_' + dropdown_pin + '.decode(&results_' + dropdown_pin + ')) {\n' + '  uint8_t ir_item = results_' + dropdown_pin + '.value & 0xFF;\n' + '  uint8_t i ;\n' + '  for ( i = 0; i < 22; i++) {\n' + '    if (ir_item == keyval[i]) {\n' + '      break;\n' + '    }\n' + '  }\n' + '  if (i > 0 && i < 22)\n' + '    keyrecv = i;\n' + '  irrecv_' + dropdown_pin + '.resume();\n' + '  irDelayTime = millis();\n' + '} else {\n' + '  if(type){\n' + '    if (millis() - irDelayTime > 200) {\n' + '       keyrecv = 0;\n' + '      }\n' + '  }\n' + '}\n' + 'if (key == keyrecv) {\n' + '  if(!type)\n' + 'keyrecv = 0;\n' + '  return true;\n' + '}\n' + 'return false;\n' + '}\n'
        Blockly.Arduino.setups_['setup_ir_recv_' + dropdown_pin] = 'irrecv_' + dropdown_pin + '.enableIRIn();';
        var code = 'irkeypressed_' + dropdown_pin + '(' + dropdown_pin1 + ',' + type + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //红外发送
    Blockly.Arduino.QH_ir_send_nec = function() {
        Blockly.Arduino.definitions_['define_ir_recv'] = '#include "IRremote.h"';
        Blockly.Arduino.definitions_['var_declare_ir_send'] = 'IRsend irsend;';
        var data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC) || '0';
        data = data.replace(/\"/g, '')
        var bits = Blockly.Arduino.valueToCode(this, 'bits', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var type = this.getFieldValue('TYPE');
        var code = 'irsend.send' + type + '(' + data + ',' + bits + ');\n';
        return code;
    };
    //红外发送数组
    Blockly.Arduino.QH_ir_send_raw = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
        Blockly.Arduino.definitions_['var_declare_ir_send'] = 'IRsend irsend;\n';
        var length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var freq = Blockly.Arduino.valueToCode(this, 'freq', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
        text = text.replace(/\"/g, '')
        Blockly.Arduino.definitions_['QDPir_send_raw' + dropdown_pin] = 'uint16_t buf_raw' + dropdown_pin + '[' + length + ']={' + text + '};\nint vpin_value' + dropdown_pin + ';\n';
        var code = 'irsend.sendRaw(buf_raw' + dropdown_pin + ',' + length + ',' + freq + ');\n';
        return code;
    };
    //数码管显示 
    Blockly.Arduino.QH_display = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin2 = numberck(this.getFieldValue('pinn'));
        var dropdown_pin3 = this.getFieldValue('pinn2');
        var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_display' + dropdown_pin] = 'QDP7SegmentDisplay  QDP7SegmentDisplay' + dropdown_pin2 + '(QDPport[' + dropdown_pin + '][1],QDPport[' + dropdown_pin + '][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_display1' + dropdown_pin] = 'QDP7SegmentDisplay' + dropdown_pin2 + '.init();\nQDP7SegmentDisplay' + dropdown_pin2 + '.set(2);\n';
        if (dropdown_pin3 == "auto") {
            var code = 'QDP7SegmentDisplay' + dropdown_pin2 + '.display(' + num + ');\n';
        } else {
            var code = 'QDP7SegmentDisplay' + dropdown_pin2 + '.display(' + num + ',' + dropdown_pin3 + ');\n';
        }
        return code;
    };
    //关闭数码管
    Blockly.Arduino.QH_displayoff = function() {
        var dropdown_pin2 = numberck(this.getFieldValue('pinn'));
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        var code = 'QDP7SegmentDisplay' + dropdown_pin2 + '.clearDisplay();\n';
        return code;
    };
    return Blockly;
}
exports = addGenerator;