/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    //一般按钮
    Blockly.Arduino.QH_button_general = function(block) {
        Blockly.Arduino.includes_.definitions_include_QDPport = `#include <QDPport.h>`;
        Blockly.Arduino.setups_[`QHbutton_3`] = `pinMode(QDPport[3][0], INPUT);`;
        return [`digitalRead(QDPport[3][0])`, Blockly.Arduino.ORDER_ATOMIC];
    };
    //多功能按钮初始化
    Blockly.Arduino.QH_buttonfuction_init = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'buttonP3_0.Update();\n';
        return code;
    };
    //多功能按钮
    Blockly.Arduino.QH_buttonfuction_do = function() {
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_include_clickButton'] = '#include <clickButton.h>';
        Blockly.Arduino.definitions_['define_click03'] = 'ClickButton buttonP3_0(QDPport[3][0],HIGH);\n';
        var code = 'buttonP3_0.buttoncheck(' + dropdown_pin2 + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //光线
    Blockly.Arduino.QH_lightSensor = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[7][1])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //声音
    Blockly.Arduino.QH_sound = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[7][0])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //电位器
    Blockly.Arduino.QH_Potentiometer = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport[8][0])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //DH11温湿度
    Blockly.Arduino.QH_dht11 = function() {
        var what = this.getFieldValue('WHAT');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_DHT'] = '#include <DHT.h>';
        Blockly.Arduino.definitions_['define_dht_p'] = 'DHT myDHT_6(QDPport[6][0],11);';
        Blockly.Arduino.setups_['myDHT_6begin'] = 'myDHT_6.begin();';
        var code = 'myDHT_6.read' + what + '()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.QH_inout_highlow = function() {
        // Boolean values HIGH and LOW.
        var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED1
    Blockly.Arduino.QH_ledlight = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_['setup_output33_10'] = 'pinMode(QDPport[1][0], OUTPUT);';
        var code = 'digitalWrite(QDPport[1][0],' + dropdown_stat + ');\n'
        return code;
    };
    //读取LED灯状态
    Blockly.Arduino.QH_read_ledlight = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.setups_['setup_output33_10'] = 'pinMode(QDPport[1][0], OUTPUT);';
        var code = 'digitalRead(QDPport[1][0])'
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //传感器-MPU6050-更新数据
    Blockly.Arduino.QH_MPU6050_update = function() {
        Blockly.Arduino.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
        Blockly.Arduino.setups_['setup_ngyro'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
        Blockly.Arduino.setups_['mpu_calibrateGyro'] = 'mpu.calibrateGyro();';
        Blockly.Arduino.setups_['mpu_setThreshold'] = 'mpu.setThreshold(3);';
        var code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
        return code;
    };
    //偏航角复位
    Blockly.Arduino.QH_MPU6050_yaw_reset = function() {
      var code = 'yaw = 0;\n';
      return code;
    };
    //MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_GETDATA = function() {
      var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
      var code;
      if(MPU6050_TYPE =='readYaw')
      {
        Blockly.Arduino.definitions_['var_declare_MPU6050GetYaw'] = 'unsigned long GetYawtimer = 0;\nfloat timeStep = 0.005;\nfloat yaw = 0;';
        Blockly.Arduino.definitions_['var_MPU6050GetYaw'] = 'float MPU6050GetYaw(Vector &norm)\n'+
          '{\n'+
          '  if (millis() - GetYawtimer >= (timeStep * 1000)) {\n'+
          '    GetYawtimer = millis();\n'+
          '    yaw = yaw + norm.ZAxis * timeStep;\n'+
          '  }\n'+
          '  return yaw;\n'+
          '}\n';
       code = 'MPU6050GetYaw(normGyro)';
      }
      else
      {
      code = MPU6050_TYPE;
      }
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //MPU6050-动作检测更新数据
    Blockly.Arduino.QH_MPU6050_MOTION_update = function() {
      Blockly.Arduino.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
      Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
      Blockly.Arduino.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
      Blockly.Arduino.setups_['setup_MOTION'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_16G);\n'+
        ' mpu.setAccelPowerOnDelay(MPU6050_DELAY_3MS);\n'+
        ' mpu.setIntFreeFallEnabled(false);  \n'+
        ' mpu.setIntZeroMotionEnabled(false);\n'+
        ' mpu.setIntMotionEnabled(false);\n'+ 
        ' mpu.setDHPFMode(MPU6050_DHPF_5HZ);\n'+
        ' mpu.setMotionDetectionThreshold(2);\n'+
        ' mpu.setMotionDetectionDuration(5);\n'+
        ' mpu.setZeroMotionDetectionThreshold(4);\n'+
        ' mpu.setZeroMotionDetectionDuration(2);\n';
      var code = 'Vector rawAccel = mpu.readRawAccel();\nActivites act = mpu.readActivites();\n';
      return code;
    };
    //传感器-MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_MOTION_GETDATA = function() {
     var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
     var code = MPU6050_TYPE;
     return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.QH_inout_highlow = function () {
        // Boolean values HIGH and LOW.
        var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED亮度
    Blockly.Arduino.QH_ledlight_PWM = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var ledn = Blockly.Arduino.valueToCode(this, 'ledn', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.setups_['setup_output1_10'] = 'pinMode(QDPport[1][0], OUTPUT);';
        var code = 'analogWrite(QDPport[1][0],' + ledn + ');\n'
        return code;
    };
    //RBGLED
    Blockly.Arduino.QH_rgb_led = function() {
        Blockly.Arduino.definitions_['include_display'] = '#include "QDPRGBLED.h"';
        var NUM = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var NUM8 = Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if (!Blockly.Arduino.definitions_['var_declare_rgb_display1']) {
            Blockly.Arduino.definitions_['var_declare_rgb_display1'] = 'QDPRGBLED QDPRGBLED_1;';
            Blockly.Arduino.setups_['setup_rgb_display_setpin1'] = 'QDPRGBLED_1.init(QDPport[1][1],' + NUM8 + ');';
        }
        var code = 'QDPRGBLED_1.setRgbLEDColor(' + NUM + ',' + R + ',' + G + ',' + B + ');\n';
        return code;
    };
    //RBGLED2
    Blockly.Arduino.QH_rgb_led2 = function() {
        Blockly.Arduino.definitions_['include_display'] = '#include "QDPRGBLED.h"';
        var NUM = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var color = Blockly.Arduino.valueToCode(this, 'colour', Blockly.Arduino.ORDER_ATOMIC).replace('#', '');
        var R = '0x' + color.substr(0, 2);
        var G = '0x' + color.substr(2, 2);
        var B = '0x' + color.substr(4);
        var NUM8 = Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if (!Blockly.Arduino.definitions_['var_declare_rgb_display1']) {
            Blockly.Arduino.definitions_['var_declare_rgb_display1'] = 'QDPRGBLED QDPRGBLED_1;';
            Blockly.Arduino.setups_['setup_rgb_display_setpin1'] = 'QDPRGBLED_1.init(QDPport[1][1],' + NUM8 + ');';
        }
        var code = 'QDPRGBLED_1.setRgbLEDColor(' + NUM + ',' + R + ',' + G + ',' + B + ');\n';
        return code;
    };
    //蜂鸣器
    Blockly.Arduino.QH_buzzer = function() {
        var dropdown_pin2 = this.getFieldValue('PIN2');
        var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer26'] = 'QDPBuzzer QDPBuzzer6;';
        var code = 'QDPBuzzer6.tone(QDPport[6][1],' + dropdown_pin2 + ',' + dur + ');\n';
        return code;
    };
    //蜂鸣器音乐
    Blockly.Arduino.QH_buzzer_music = function() {
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer26'] = 'QDPBuzzer QDPBuzzer6;';
        var code = 'QDPBuzzer6.buzzer_music(QDPport[6][1],' + dropdown_pin2 + ');\n';
        return code;
    };
    //语音模块
    Blockly.Arduino.QH_Voice = function() {
        Blockly.Arduino.definitions_['include_QDPVoice'] = '#include <QDPVoice.h>';
        var addr = this.getFieldValue('addr');
        var delayTime = Blockly.Arduino.valueToCode(this, 'delayTime', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var code = 'VoiceSendData(' + addr + ',A0);\ndelay(' + delayTime + ');\n'
        return code;
    };
    //语音模块读值
    Blockly.Arduino.QH_VoicePlayValue = function() {
        Blockly.Arduino.definitions_['include_QDPVoice'] = '#include <QDPVoice.h>';
        var addr = Blockly.Arduino.valueToCode(this, 'addr', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var code = 'VoicePlayValue(' + addr + ',A0);\n'
        return code;
    };
    //红外遥控器
    Blockly.Arduino.QH_ir_re2 = function() {
        var dropdown_pin1 = this.getFieldValue('PIN');
        var type = this.getFieldValue('TYPE');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_ir_recv'] = '#include "IRremote.h"\n';
        Blockly.Arduino.definitions_['var_declare_ir_recv02'] = 'IRrecv irrecv_2(QDPport[2][1]);\ndecode_results results_2;\n';
        Blockly.Arduino.definitions_['var_ir_recv12'] = 'bool irkeypressed_2(uint8_t key ,bool type) {\n' + 'static uint8_t resultkey = 0;\n' + 'const uint8_t keyval[] = {0xFF, 0x5D, 0x9D, 0x1D, 0xDD, 0xFD, 0x3D, 0x1F, 0x57, 0x6F, 0x97, 0x67, 0x4F, 0xCF, 0xE7, 0x85, 0xEF, 0xC7, 0xA5, 0xBD, 0xB5, 0xAD}; //对应编码值\n' + 'static uint8_t keyrecv = 0;\n' + 'static unsigned long irDelayTime = 0;\n' + 'if (irrecv_2.decode(&results_2)) {\n' + '  uint8_t ir_item = results_2.value & 0xFF;\n' + '  uint8_t i ;\n' + '  for ( i = 0; i < 22; i++) {\n' + '    if (ir_item == keyval[i]) {\n' + '      break;\n' + '    }\n' + '  }\n' + '  if (i > 0 && i < 22)\n' + '    keyrecv = i;\n' + '  irrecv_2.resume();\n' + '  irDelayTime = millis();\n' + '} else {\n' + '  if(type){\n' + '    if (millis() - irDelayTime > 200) {\n' + '       keyrecv = 0;\n' + '      }\n' + '  }\n' + '}\n' + 'if (key == keyrecv) {\n' + '  if(!type)\n' + 'keyrecv = 0;\n' + '  return true;\n' + '}\n' + 'return false;\n' + '}\n'
        Blockly.Arduino.setups_['setup_ir_recv_2'] = 'irrecv_2.enableIRIn();';
        var code = 'irkeypressed_2(' + dropdown_pin1 + ',' + type + ')';
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
        var dropdown_pin3 = this.getFieldValue('pinn2');
        var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_display' + 4] = 'QDP7SegmentDisplay  QDP7SegmentDisplayP4(QDPport[4][1],QDPport[4][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_display14' ] = 'QDP7SegmentDisplayP4.init();\nQDP7SegmentDisplayP4.set(2);\n';
        if (dropdown_pin3 == "auto") {
            var code = 'QDP7SegmentDisplayP4.display(' + num + ');\n';
        } else {
            var code = 'QDP7SegmentDisplayP4.display(' + num + ',' + dropdown_pin3 + ');\n';
        }
        return code;
    };
    //关闭数码管
    Blockly.Arduino.QH_displayoff = function() {
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        var code = 'QDP7SegmentDisplayP4.clearDisplay();\n';
        return code;
    };
    return Blockly;
}
exports = addGenerator;