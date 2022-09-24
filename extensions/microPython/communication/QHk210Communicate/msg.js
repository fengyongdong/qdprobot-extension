/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_COMMUNICATE_CATEGORY:'COMMUNICATE',
        QH_SERIAL_LABEL:'SERIAL',
        PY_qdp_k210_serial_softserial1:'Initialize %1 RX %2 TX %3 Baud rate %4',
        PY_qdp_k210_serial_print:'print %1 content %2',
        PY_qdp_k210_serial_any:'UART %1 any',
        PY_qdp_k210_serial_read:'%1 Serial read %2',
        serial_read:'buffer',
        serial_read_line:'line',
        PY_qdp_k210_communicate_ir_recv:'Infrared receiver port %1 gets the code',
        PY_qdp_k210_communicate_i2c_init:'I2C initialization (default  pin) frequency %1',
        PY_qdp_k210_communicate_i2c_init1:'I2C initialization (Custom  pin) SDA# %1 SCL# %2 frequency %3',
        PY_qdp_k210_communicate_i2c_scan:'Search for devices on the I2c bus',
        PY_qdp_k210_communicate_i2s_init:'I2S initializes device %1 sampling rate %2',
        PY_qdp_k210_spk:'Speaker',
        PY_qdp_k210_mic:'Microphone',
        PY_qdp_k210_communicate_i2s_record:'I2S data sampling points %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_COMMUNICATE_CATEGORY:'通讯',
        QH_SERIAL_LABEL:'串口',
        PY_qdp_k210_serial_softserial1:'初始化 %1 RX %2 TX %3 波特率 %4',
        PY_qdp_k210_serial_print:'打印%1 内容 %2',
        PY_qdp_k210_serial_any:'串口 %1 有数据可读',
        PY_qdp_k210_serial_read:'%1串口读取 %2',
        serial_read:'缓冲区',
        serial_read_line:'一行',
        PY_qdp_k210_communicate_ir_recv:'红外接收 端口 %1 获取编码',
        PY_qdp_k210_communicate_i2c_init:'I2C初始化(默认引脚) 频率 %1',
        PY_qdp_k210_communicate_i2c_init1:'I2C初始化(自定引脚) SDA# %1 SCL# %2 频率 %3',
        PY_qdp_k210_communicate_i2c_scan:'搜索I2c总线上的设备',
        PY_qdp_k210_communicate_i2s_init:'I2S初始化 设备 %1 采样率 %2',
        PY_qdp_k210_spk:'扬声器',
        PY_qdp_k210_mic:'麦克风',
        PY_qdp_k210_communicate_i2s_record:'I2S采集数据 采样点数 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_COMMUNICATE_CATEGORY:'通訊',
        QH_SERIAL_LABEL:'串口',
        PY_qdp_k210_serial_softserial1:'初始化 %1 RX %2 TX %3 傳輸速率 %4',
        PY_qdp_k210_serial_print:'列印%1 內容 %2',
        PY_qdp_k210_serial_any:'串口 %1 有數據可讀',
        PY_qdp_k210_serial_read:'%1串口讀取 %2',
        serial_read:'緩衝區',
        serial_read_line:'一行',
        PY_qdp_k210_communicate_ir_recv:'紅外接收 端口 %1 獲取編碼',
        PY_qdp_k210_communicate_i2c_init:'I2C初始化(默引腳) SDA# %1',
        PY_qdp_k210_communicate_i2c_init1:'I2C初始化(自定義引腳) SDA# %1 SCL# %2  頻率 %3',
        PY_qdp_k210_communicate_i2c_scan:'搜索I2c匯流排上的設備',
        PY_qdp_k210_communicate_i2s_init:'I2S初始化 設備 %1 採樣率 %2',
        PY_qdp_k210_spk:'揚聲器',
        PY_qdp_k210_mic:'麥克風',
        PY_qdp_k210_communicate_i2s_record:'I2S採集數據 採樣點數 %1'
    });
    return Blockly;
}

exports = addMsg;
