/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ESP32_I2C_CATEGORY:'I2C 通讯',
        communicate_i2c_init:'Initialize I2C %1 SCL %2 SDA %3 frequency %4',
        communicate_i2c_read:' %1 reads the numeric address %2 bytes %3',
        communicate_i2c_write:' %1 writes the numeric address %2 bytes %3',
        communicate_i2c_scan:' %1 searches for devices on the I2C bus',
        communicate_i2c_master_read:' %1 read ',
        communicate_i2c_available:' %1 available?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ESP32_I2C_CATEGORY:'I2C 通讯',
        communicate_i2c_init:'初始化I2C %1 SCL %2 SDA %3 频率 %4',
        communicate_i2c_read:' %1 读取数字 地址 %2 字节 %3',
        communicate_i2c_write:' %1 写入数字 地址 %2 字节 %3',
        communicate_i2c_scan:' %1 搜索I2C总线上的设备',
        communicate_i2c_master_read:' %1 读取 ',
        communicate_i2c_available:' %1 读取成功?'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ESP32_I2C_CATEGORY:'I2C 通訊',
        communicate_i2c_init:'初始化I2C %1 SCL %2 SDA %3 頻率 %4',
        communicate_i2c_read:' %1 讀取數字 地址 %2 位元組 %3',
        communicate_i2c_write:' %1 寫入數字 地址 %2 位元組 %3',
        communicate_i2c_scan:' %1 搜索I2C匯流排上的設備',
        communicate_i2c_master_read:' %1 讀取 ',
        communicate_i2c_available:' %1 讀取成功?'
    });
    return Blockly;
}

exports = addMsg;
