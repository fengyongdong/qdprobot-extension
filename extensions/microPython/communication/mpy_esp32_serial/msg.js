/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ESP32_UART_CATEGORY:'SERIAL',
        PY_qdp_esp32_serial_softserial:'Initialize %1 RX %2 TX %3 Baud rate %4',
        PY_qdp_esp32_serial_print:'Print %1 content %2',
        PY_qdp_esp32_serial_any:'Serial %1 any?',
        PY_qdp_esp32_serial_read:'%1 Serial read %2',
        serial_read:'buffer',
        serial_read_line:'read line',
        PY_qdp_esp32_serial_read_byte:'%1 Serial read %2 bytes'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ESP32_UART_CATEGORY:'串口',
        PY_qdp_esp32_serial_softserial:'初始化 %1 RX %2 TX %3 波特率 %4',
        PY_qdp_esp32_serial_print:'打印%1 内容 %2',
        PY_qdp_esp32_serial_any:'串口 %1 有数据可读?',
        PY_qdp_esp32_serial_read:'%1串口读取 %2',
        serial_read:'缓冲区',
        serial_read_line:'一行',
        PY_qdp_esp32_serial_read_byte:'%1串口读取 %2 个字节'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ESP32_UART_CATEGORY:'串口',
        PY_qdp_esp32_serial_softserial:'初始化 %1 RX %2 TX %3 串列傳輸速率 %4',
        PY_qdp_esp32_serial_print:'列印%1 內容 %2',
        PY_qdp_esp32_serial_any:'串口 %1 有數據可讀?',
        PY_qdp_esp32_serial_read:'%1串口讀取 %2',
        serial_read:'緩衝區',
        serial_read_line:'一行',
        PY_qdp_esp32_serial_read_byte:'%1串口讀取 %2 個位元組'
    });
    return Blockly;
}

exports = addMsg;
