/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //陀螺仪更新数据
    Blockly.Python.PY_QDP_ESP32_MPU6050_INIT = function() {
        var sda = this.getFieldValue('sda');
        var scl = this.getFieldValue('scl');
        var mode = this.getFieldValue('mode');
        Blockly.Python.imports_['import_accel'] = 'from mpu6050 import accel';
        Blockly.Python.variables_[`i2c${sda}${scl}`] = `i2c=machine.I2C(1,sda=machine.Pin(${sda}),scl=machine.Pin(${scl}),freq=40000)\nmpu6050=accel(i2c,${mode})`;
        var code = 'mpu=mpu6050.get_values()\n';
        return code;
    };

      //传感器-MPU6050-获取数据
    Blockly.Python.PY_QDP_ESP32_MPU6050_DATA = function() {
        var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
        var code = `mpu['${MPU6050_TYPE}']`;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
