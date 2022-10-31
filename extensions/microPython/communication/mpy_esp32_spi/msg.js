/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ESP32_SPI_CATEGORY:'SPI communication',
        communicate_spi_init:'Initialize %1 baud rate %2 SCK %3 MOSI %4 MISO %5',
        communicate_spi_set:'%1 sets the baud rate %2',
        communicate_spi_buffer:'%1 creates buffer %2',
        communicate_spi_read:'%1 reads %2 bytes',
        communicate_spi_read_output:'%1 reads %2 bytes and prints %3',
        communicate_spi_readinto:'%1 reads buffer %2',
        communicate_spi_readinto_output:'%1 reads buffer %2 and outputs %3',
        communicate_spi_write:'%1 writes to %2',
        communicate_spi_write_readinto:'%1 writes to %2 and reads buffer %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ESP32_SPI_CATEGORY:'SPI 通讯',
        communicate_spi_init:'初始化 %1 波特率 %2 SCK %3 MOSI %4 MISO %5',
        communicate_spi_set:'%1 设置波特率 %2',
        communicate_spi_buffer:'%1 创建缓冲器 %2',
        communicate_spi_read:'%1 读取 %2 个字节',
        communicate_spi_read_output:'%1 读取 %2 个字节 同时输出 %3',
        communicate_spi_readinto:'%1 读取缓冲器 %2',
        communicate_spi_readinto_output:'%1 读取缓冲器 %2 同时输出 %3',
        communicate_spi_write:'%1 写入 %2',
        communicate_spi_write_readinto:'%1 写入 %2 同时读取缓冲器 %3'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ESP32_SPI_CATEGORY:'SPI 通訊',
        communicate_spi_init:'初始化 %1 串列傳輸速率 %2 SCK %3 MOSI %4 MISO %5',
        communicate_spi_set:'%1 設置串列傳輸速率 %2',
        communicate_spi_buffer:'%1 創建緩衝器 %2',
        communicate_spi_read:'%1 讀取 %2 個位元組',
        communicate_spi_read_output:'%1 讀取 %2 個位元組 同時輸出 %3',
        communicate_spi_readinto:'%1 讀取緩衝器 %2',
        communicate_spi_readinto_output:'%1 讀取緩衝器 %2 同時輸出 %3',
        communicate_spi_write:'%1 寫入 %2',
        communicate_spi_write_readinto:'%1 寫入 %2 同時讀取緩衝器 %3'
    });
    return Blockly;
}

exports = addMsg;
