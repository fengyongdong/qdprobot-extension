/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ACTUATOR_CATEGORY:'Actuator',
        PY_qdp_k210_actuator_ws2812_init:'RGB Initialize pin %1 light num %2',
        Y_qdp_k210_actuator_ws2812_set_led:'RGB set colors light num %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB display',
        PY_qdp_k210_actuator_Servo_init:'Initialize servo PIN %1 timer %2',
        PY_qdp_k210_actuator_Servo:'Servo PIN %1 angle %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ACTUATOR_CATEGORY:'执行器',
        PY_qdp_k210_actuator_ws2812_init:'RGB 初始化 管脚 %1 灯数 %2',
        PY_qdp_k210_actuator_ws2812_set_led:'RGB 设置颜色 灯号 %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB生效',
        PY_qdp_k210_actuator_Servo_init:'初始化舵机 管脚 %1 定时器 %2',
        PY_qdp_k210_actuator_Servo:'舵机 管脚 %1 角度 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ACTUATOR_CATEGORY:'執行器',
        PY_qdp_k210_actuator_ws2812_init:'RGB 初始化 管腳 %1 燈數 %2',
        Y_qdp_k210_actuator_ws2812_set_led:'RGB 設置顏色 燈號 %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB生效',
        PY_qdp_k210_actuator_Servo_init:'初始化舵機 管腳 %1 定時器 %2',
        PY_qdp_k210_actuator_Servo:'舵機 管腳 %1 角度 %2'
    });
    return Blockly;
}

exports = addMsg;
