/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SENSOR_CATEGORY:'SENSOR',
        PY_qdp_k210_sensor_button_init:'Initialization button %1',
        PY_qdp_k210_sensor_dht11:'DHT11 PIN %1 get %2',
        PY_qdp_k210_sensor_button_read:'Button %1 pressed?',
        k210_temp:'temperature',
        k210_humi:'humidity',
        k210_temp_humi:'temperature/humidity',
        PY_qdp_k210_sensor_HCSR04:'Ultrasonic ranging(CM) Trig %1 Echo %2',
        PY_qdp_k210_sensor_use_i2c_init:'Initialize sensor %1 IIC SDA %2 SCL %3 freq %4',
        PY_qdp_k210_sensor_mpu9250_get_acceleration:'MPU9250 get accel %1',
        PY_qdp_k210_sensor_mpu9250_get_magnetic:'MPU9250 get magnetic field intensity %1',
        PY_qdp_k210_sensor_mpu9250_get_gyro:'MPU9250 get gyro %1',
        PY_qdp_k210_sensor_mpu9250_temperature:'MPU9250 get temperature',
        PY_qdp_k210_sensor_bmp:'BMP280 %1',
        PY_qdp_k210_sensor_sht:'SHT20 %1',
        PY_qdp_k210_sensor_adxl345_get_acceleration:'ADXL345 get accel %1',
        get_BMP_temperature:'temperature',
        get_BMP_pressure:'pressure',
        get_SHT_temperature:'temperature',
        get_SHT_relative_humidity:'humidity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SENSOR_CATEGORY:'传感器',
        PY_qdp_k210_sensor_button_init:'初始化 按键 %1',
        PY_qdp_k210_sensor_button_read:'按键 %1 被按下?',
        PY_qdp_k210_sensor_dht11:'DHT11 管脚 %1 获取 %2',
        k210_temp:'温度',
        k210_humi:'湿度',
        k210_temp_humi:'温湿度',
        PY_qdp_k210_sensor_HCSR04:'超声波测距(CM) Trig %1 Echo %2',
        PY_qdp_k210_sensor_use_i2c_init:'初始化 传感器 %1 IIC SDA %2 SCL %3 频率 %4',
        PY_qdp_k210_sensor_mpu9250_get_acceleration:'MPU9250获取加速度 %1',
        PY_qdp_k210_sensor_mpu9250_get_magnetic:'MPU9250获取磁场强度 %1',
        PY_qdp_k210_sensor_mpu9250_get_gyro:'MPU9250获取角速度 %1',
        PY_qdp_k210_sensor_mpu9250_temperature:'MPU9250获取温度',
        PY_qdp_k210_sensor_bmp:'BMP280 %1',
        PY_qdp_k210_sensor_sht:'SHT20 %1',
        PY_qdp_k210_sensor_adxl345_get_acceleration:'ADXL345 获取加速度 %1',
        get_BMP_temperature:'温度',
        get_BMP_pressure:'大气压强',
        get_SHT_temperature:'温度',
        get_SHT_relative_humidity:'湿度'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_SENSOR_CATEGORY:'感測器',
        PY_qdp_k210_sensor_button_init:'初始化 按鍵 %1',
        PY_qdp_k210_sensor_button_read:'按鍵 %1 被按下?',
        PY_qdp_k210_sensor_dht11:'DHT11 管腳 %1 獲取 %2',
        k210_temp:'溫度',
        k210_humi:'濕度',
        k210_temp_humi:'溫濕度',
        PY_qdp_k210_sensor_HCSR04:'超聲波測距(CM) Trig %1 Echo %2',
        PY_qdp_k210_sensor_use_i2c_init:'初始化 感測器 %1 IIC SDA %2 SCL %3 頻率 %4',
        PY_qdp_k210_sensor_mpu9250_get_acceleration:'MPU9250獲取加速度 %1',
        PY_qdp_k210_sensor_mpu9250_get_magnetic:'MPU9250獲取磁場強度 %1',
        PY_qdp_k210_sensor_mpu9250_get_gyro:'MPU9250獲取角速度 %1',
        PY_qdp_k210_sensor_mpu9250_temperature:'MPU9250獲取溫度',
        PY_qdp_k210_sensor_bmp:'BMP280 %1',
        PY_qdp_k210_sensor_sht:'SHT20 %1',
        PY_qdp_k210_sensor_adxl345_get_acceleration:'ADXL345 獲取加速度 %1',
        get_BMP_temperature:'溫度',
        get_BMP_pressure:'大氣壓強',
        get_SHT_temperature:'溫度',
        get_SHT_relative_humidity:'濕度'
    });
    return Blockly;
}

exports = addMsg;
