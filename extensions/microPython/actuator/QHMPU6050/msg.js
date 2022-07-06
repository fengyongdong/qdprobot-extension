/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_MPU6050_CATEGORY:'GYRO',
        PY_QDP_ESP32_MPU6050_INIT:'MPU6050 update pin SDA %1 SCL %2 range %3',
        PY_QDP_ESP32_MPU6050_DATA:'Read the value of the gyroscope %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_MPU6050_CATEGORY:'陀螺仪',
        PY_QDP_ESP32_MPU6050_INIT:'MPU6050更新 引脚 SDA %1 SCL %2 量程 %3',
        PY_QDP_ESP32_MPU6050_DATA:'读取陀螺仪的值 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_MPU6050_CATEGORY:'陀螺儀',
        PY_QDP_ESP32_MPU6050_INIT:'MPU6050更新 引腳 SDA %1 SCL %2 量程 %3',
        PY_QDP_ESP32_MPU6050_DATA:'讀取陀螺儀的值 %1',
    });
    return Blockly;
}

exports = addMsg;
