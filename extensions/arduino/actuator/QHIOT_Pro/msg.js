/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QHIOT_PRO_CATEGORY:'Iot control core board',
        IOT_PRO_ENCODER_PAUSE_COUNT:'IOT_Pro rotary encoder %1 %2',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_PRESSED : 'Pressed',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_RELEASED : 'Released',
        CLEAR_COUNT : 'Clear count',
        IOT_PRO_ENCODER_GET_COUNT:'IOT_Pro rotary encode get volume %1',
        IOT_PRO_IO_DIGITAL_WRITE:'IOT_Pro digital write port %1 set as %2',
        IOT_PRO_IO_DIGITAL_READ:'IOT_Pro digital read port %1 mode %2',
        IOT_PRO_IO_INPUT : 'input',
        IOT_PRO_IO_PULLUP : 'pull up',
        IOT_PRO_MOTOR_RUN : 'IOT_Pro motor run port %1 speed-255~255 %2',
        IOT_PRO_MOTOR_BRAKE : 'IOT_Pro motor brake port %1',
        IOT_PRO_GET_LINESENSOR_STATE : 'Status of the patrol sensor D1 %1 D2 %2 D3 %3 D4 %4 D5 %5'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QHIOT_PRO_CATEGORY:'IOT核心板',
        IOT_PRO_ENCODER_PAUSE_COUNT:'IOT_Pro 旋转编码器 %1 %2',
        PAUSE_COUNT : '暂停计数',
        RESUME_COUNT : '计数',
        CLEAR_COUNT : '清除计数',
        IOT_PRO_ENCODER_GET_COUNT:'IOT_Pro 旋转编码器 获取当前值 %1',
        IOT_PRO_IO_DIGITAL_WRITE:'IOT_Pro 数字输出 端口 %1 设为 %2',
        IOT_PRO_IO_DIGITAL_READ:'IOT_Pro 数字输入 端口 %1 模式 %2',
        IOT_PRO_IO_INPUT : '输入',
        IOT_PRO_IO_PULLUP : '上拉输入',
        IOT_PRO_MOTOR_RUN : 'IOT_Pro 电机运行 端口 %1 速度-255~255 %2',
        IOT_PRO_MOTOR_BRAKE : 'IOT_Pro 电机刹车 端口 %1',
        IOT_PRO_GET_LINESENSOR_STATE : '巡线传感器状态 D1 %1 D2 %2 D3 %3 D4 %4 D5 %5'

    });
    return Blockly;
}

exports = addMsg;