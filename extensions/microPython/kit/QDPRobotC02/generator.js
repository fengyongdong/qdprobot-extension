/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //ESP32触控
    Blockly.Python.PY_time_ticks = function () {
      var type = this.getFieldValue('type');
      Blockly.Python.imports_['import_time'] = 'import time';
      var code = `time.${type}()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

     //ESP32触控
    Blockly.Python.PY_QDP_inout_esp32_touchRead = function () {
      var pin = this.getFieldValue('touch_pin');
      Blockly.Python.variables_[`pin${pin}`] = `t${pin} = machine.TouchPad(machine.Pin(${pin}))`;
      var code = `t${pin}.read()`;
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //按钮
  Blockly.Python.PY_qdp_esp32_buttonl = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.variables_[`pin${pin}`] = `bt${pin} = machine.Pin(${pin}, machine.Pin.IN)`;
    var code = `bt${pin}.value()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  //左右按钮
  Blockly.Python.PY_qdp_esp32_buttonx = function() {
    var pin = this.getFieldValue('pin2');
    pinArr = pin.split(' ');
    Blockly.Python.variables_[`pin${pinArr[0]}`] = `bt${pinArr[0]} = machine.Pin(${pinArr[0]}, machine.Pin.IN)`;
    Blockly.Python.variables_[`pin${pinArr[1]}`] = `bt${pinArr[1]} = machine.Pin(${pinArr[1]}, machine.Pin.IN)`;
    var code = `bt${pinArr[0]}.value() || bt${pinArr[1]}.value()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

    //巡线
  Blockly.Python.PY_qdp_esp32_grayscale = function() {
    var pin = this.getFieldValue('PIN');
    var on1 = this.getFieldValue('PIN2');
    var on2 = this.getFieldValue('PIN3');
    pinArr = pin.split(' ')
    Blockly.Python.variables_[`pin${pinArr[0]}`] = `bt${pinArr[0]} = machine.Pin(${pinArr[0]}, machine.Pin.IN)`;
    Blockly.Python.variables_[`pin${pinArr[1]}`] = `bt${pinArr[1]} = machine.Pin(${pinArr[1]}, machine.Pin.IN)`;
    var code = `bt${pinArr[0]}.value()==${on1} && bt${pinArr[1]}.value()==${on2}`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

    //光线
  Blockly.Python.PY_qdp_esp32_lightSensor = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.variables_[`pin${pin}`] = `light${pin} = machine.ADC(machine.Pin(${pin}))`;
    var code = `light${pin}.read_u16()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  //声音
  Blockly.Python.PY_qdp_esp32_sound = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.variables_[`pin${pin}`] = `sound${pin} = machine.ADC(machine.Pin(${pin}))`;
    var code = `sound${pin}.read_u16()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

   //电位器
  Blockly.Python.PY_qdp_esp32_potentiometer = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.variables_[`pin${pin}`] = `poten${pin} = machine.ADC(machine.Pin(${pin}))`;
    var code = `poten${pin}.read_u16()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

    //土壤
  Blockly.Python.PY_qdp_esp32_Soilmoisture = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.customFunctions_['dht'] = `def getDht:`;
    Blockly.Python.variables_[`pin${pin}`] = `soil${pin} = machine.ADC(machine.Pin(${pin}))`;
    var code = `soil${pin}.read_u16()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.qdp_inout_highlow = function () {
    // Boolean values HIGH and LOW.
    var code = (this.getFieldValue('BOOL') === '1') ? '1' : '0';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  //LED1

  Blockly.Python.qdp_esp32_ledlight = function() {
    var pin = this.getFieldValue('PIN');
    var state = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_FUNCTION_CALL) || '1';
    Blockly.Python.variables_[`pin${pin}`] = `led${pin} = machine.Pin(${pin}, machine.Pin.OUT)\n`;
    var code = `led${pin}.value(${state})\n`;
    return code;
  };

  //读取LED状态
  Blockly.Python.qdp_esp32_read_ledlight = function() {
    var pin = this.getFieldValue('PIN');
    Blockly.Python.variables_[`pin${pin}`] = `led${pin} = machine.Pin(${pin}, machine.Pin.OUT)\n`;
    var code = `led${pin}.value()`;
    return [code,Blockly.Python.ORDER_ATOMIC];
  };
  //LED2
  Blockly.Python.PY_qdp_esp32_ledlight3 = function() {
    var pin = this.getFieldValue('PIN');
    var ledn = Blockly.Python.valueToCode(this, 'ledn',Blockly.Python.ORDER_ATOMIC) || '0';
    Blockly.Python.variables_[`pin${pin}`] = `led${pin} = machine.PWM(machine.Pin(${pin}))\n`;

    var code = `led${pin}.duty(${ledn})\n`
    return code;
  };

  //RGB
  Blockly.Python.qdp_c02_py_rgb_set_color = function() {
    var pin1 = this.getFieldValue('PIN1');
    var NUM=Blockly.Python.valueToCode(this, 'num1', Blockly.Python.ORDER_ATOMIC) || '0';
    var R=Blockly.Python.valueToCode(this, 'R', Blockly.Python.ORDER_ATOMIC) || '0';
    var G=Blockly.Python.valueToCode(this, 'G', Blockly.Python.ORDER_ATOMIC) || '0';
    var B=Blockly.Python.valueToCode(this, 'B', Blockly.Python.ORDER_ATOMIC) || '0';
    var NUM8=Blockly.Python.valueToCode(this, 'num8', Blockly.Python.ORDER_ATOMIC) || '0';

    Blockly.Python.imports_['import_neopixel'] = 'import neopixel';

    Blockly.Python.variables_ ['var_declare_var_rgb_display' + pin1] = `n${pin1} = neopixel.NeoPixel(machine.Pin(${pin1}), ${NUM8})`;

    if(NUM==NUM8)
    {
      var code = `n${pin1}.fill((${R},${G},${B}))\n`;
    }
    else
    {
      var code = `n${pin1}[${NUM}]=(${R},${G},${B})\n`;
    }
    return code;
  };

  //RGB设置生效
  Blockly.Python.qdp_c02_py_rgb_write = function() {
    var pin1 = this.getFieldValue('PIN1');
    var code = `n${pin1}.write()\n`;
    
    return code;
  };

  Blockly.Python.PY_qdp_esp32_motor = function() {
      var MotorPin = this.getFieldValue('MotorPin');
      var PIN = this.getFieldValue('PIN');
      pinArr = PIN.split(' ');
      var speed = Blockly.Python.valueToCode(this, 'speed',Blockly.Python.ORDER_ATOMIC) || '0';
      Blockly.Python.imports_['import_QH_C02'] = 'import QH_C02';
      Blockly.Python.setups_[`motor${MotorPin}`] = `motor${MotorPin} = QH_C02.motor(${pinArr[0]},${pinArr[1]})`;
      var code = `motor${MotorPin}.run(${speed})\n`;
      return code;
  };

  Blockly.Python.PY_qdp_esp32_servomotor_180 = function() {
      var PIN = this.getFieldValue('pin');
      var angel = Blockly.Python.valueToCode(this, 'num1',Blockly.Python.ORDER_ATOMIC) || '0';
      Blockly.Python.imports_['import_QH_C02'] = 'import QH_C02';
      var code = `QH_C02.servo_write_angle(${PIN},${angel})\n`;
      return code;
  };

  Blockly.Python.PY_qdp_esp32_servomotor_360 = function() {
      var PIN = this.getFieldValue('pin');
      var speed = Blockly.Python.valueToCode(this, 'num1',Blockly.Python.ORDER_ATOMIC) || '0';
      Blockly.Python.imports_['import_QH_C02'] = 'import QH_C02';
      var code = `QH_C02.servo360_run(${PIN},${speed})\n`;
      return code;
  };

  /*

  Blockly.Python.try_except_else_finally = function() {
    var branch1 = Blockly.Python.statementToCode(this, 'DO1');
    branch1 = branch1.replace(/(^\s*)|(\s*$)/g, "");
    if (!branch1)
      branch1='pass';
    var branch2 = Blockly.Python.statementToCode(this, 'DO2');
    branch2 = branch2.replace(/(^\s*)|(\s*$)/g, ""); 
    if (!branch2)
      branch2='pass';
    var branch3 = Blockly.Python.statementToCode(this, 'DO3');
    branch3 = branch3.replace(/(^\s*)|(\s*$)/g, ""); 
    if (!branch3)
      branch3='pass';
    var branch4 = Blockly.Python.statementToCode(this, 'DO4');
    branch4 = branch4.replace(/(^\s*)|(\s*$)/g, ""); 
    if (!branch4)
      branch4='pass';
    var code =`try:\n    ${branch1}\nexcept Exception as err:\n    ${branch2}\nelse:\n    ${branch3}\nfinally:\n    ${branch4}\n`;
    return code;
  };

    //变量get
    Blockly.Python.PY_QH_variables_get = function() {
        var name=this.getFieldValue('name');
        var code = name;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //字符串
    Blockly.Python.PY_QH_string = function() {
        var name = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC) ||' ' ;
        code = name;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    //字典赋值
    Blockly.Python.python_del = function() {
      var name=this.getFieldValue('name');
      var code = `del ${name}\n`;
      return code;
    };

    //是否在?
    Blockly.Python.python_in = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      var code = `${val} in ${name}`;
      return [code,Blockly.Python.ORDER_RELATIONAL];
    };
*/
    return Blockly;
  }
 
exports = addGenerator;
