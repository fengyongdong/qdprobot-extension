/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.PY_qdp_k210_sensor_button_init = function () {
    Blockly.Python.imports_['import_GPIO'] = 'from Maix import GPIO';
    Blockly.Python.imports_['import_fm'] = 'from fpioa_manager import fm';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var key =this.getFieldValue('key');
    var code1 = 'fm.register(qdpk210_aistart.button_pins['+key+'], qdpk210_aistart.pins(qdpk210_aistart.button_pins['+key+'])[0])\n';
    code1 += 'button'+key+'=GPIO(qdpk210_aistart.pins(qdpk210_aistart.button_pins['+key+'])[1], GPIO.IN, GPIO.PULL_UP)\n';
  return code1;  
  };

  Blockly.Python.PY_qdp_k210_sensor_button_read = function () {
    var key = this.getFieldValue('key');
    var code = 'not button'+key+'.value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_dht11 = function () {
    Blockly.Python.imports_['import_dht11_k210'] = 'import dht11_k210';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var TYPE = this.getFieldValue('TYPE');
    var PIN = this.getFieldValue('PIN');
    if(TYPE=="2")
      var code ='dht11_k210.read_data(qdpk210_aistart.board_pins['+PIN+'])';
    else
      var code ='dht11_k210.read_data(qdpk210_aistart.board_pins['+PIN+'])['+TYPE+']';
    return code;
  };

  Blockly.Python.PY_qdp_k210_sensor_HCSR04 = function () {
    Blockly.Python.imports_['import_sonar_k210'] = 'import sonar_k210';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var dropdown_pin1 = this.getFieldValue('PIN1');
    var dropdown_pin2 = this.getFieldValue('PIN2');
    var code = 'sonar_k210.Sonar(qdpk210_aistart.board_pins[' + dropdown_pin1 + '], qdpk210_aistart.board_pins[' + dropdown_pin2 + '])';
    return [code, Blockly.Python.ORDER_ATOMIC];
  }

  Blockly.Python.PY_qdp_k210_sensor_use_i2c_init=function(){
    var key = this.getFieldValue('key');
    var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
    var code;
    if (key=='MPU9250') {
      Blockly.Python.imports_['import_mpu9250_k210'] = 'import mpu9250_k210';
     code = key + ' = mpu9250_k210.' + key + '(i2c)\n';
    }else if (key=='BMP280') {
      Blockly.Python.imports_['import_bmp280_k210'] = 'import bmp280_k210';
    code = key + ' = bmp280_k210.' + key + '(i2c)\n';
    }else if (key=='SHT20') {
      Blockly.Python.imports_['import_sht20_k210'] = 'import sht20_k210';
    code = key + ' = sht20_k210.' + key + '(i2c)\n';
    }else if (key=='ADXL345') {
      Blockly.Python.imports_['import_adxl345'] = 'import adxl345_k210';
      code = key + ' = adxl345_k210.' + key + '(i2c)\n';
    }
    return code;
  };

  Blockly.Python.PY_qdp_k210_sensor_mpu9250_get_acceleration = function(){
    Blockly.Python.imports_['import_mpu9250_k210'] = 'import mpu9250_k210';
    var key = this.getFieldValue('key');
    var code = 'MPU9250.mpu9250_get_' + key + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_mpu9250_get_magnetic = function(){
      Blockly.Python.imports_['import_mpu9250_k210'] = 'import mpu9250_k210';
      var key = this.getFieldValue('key');
      var code = 'MPU9250.mpu9250_magnetic_' + key + '()';
      return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_mpu9250_get_gyro = function(){
      Blockly.Python.imports_['import_mpu9250_k210'] = 'import mpu9250_k210';
      var key = this.getFieldValue('key');
      var code = 'MPU9250.mpu9250_gyro_' + key + '()';
      return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_mpu9250_temperature = function(){
    Blockly.Python.imports_['import_mpu9250_k210'] = 'import mpu9250_k210';
    return ['MPU9250.mpu9250_get_temperature()', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_bmp=function(){
    var key = this.getFieldValue('key');
    Blockly.Python.imports_['import_bmp280_k210'] = 'import bmp280_k210';
    var code = 'BMP280.' + key +'()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python.PY_qdp_k210_sensor_sht=function(){
    var key = this.getFieldValue('key');
    Blockly.Python.imports_['import_sht20_k210'] = 'import sht20_k210';
    var code = 'SHT20.' + key+'()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.PY_qdp_k210_sensor_adxl345_get_acceleration = function(){
    Blockly.Python.imports_['import_adxl345'] = 'import adxl345_k210';
    var key = this.getFieldValue('key');
    var code;
    if (key=='x') {
        code = 'ADXL345.readX()';
    }else if (key=='y') {
        code = 'ADXL345.readY()';
    }else if (key=='z') {
        code = 'ADXL345.readZ()';
    }else if (key=='values') {
        code = 'ADXL345.readXYZ()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
  };





  return Blockly;
  }
 
exports = addGenerator;



