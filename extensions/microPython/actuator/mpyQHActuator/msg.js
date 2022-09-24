/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ACTUATOR_CATEGORY:'Actuator',
        PY_qdp_k210_actuator_led_init:'Initialize LED %1',
        LED_R:'red light',
        LED_G:'green light',
        LED_B:'blue light',
        PY_qdp_k210_actuator_led_bright:'Set LED %1 state %2',
        ON:'ON',
        OFF:'OFF',
        PY_qdp_k210_actuator_ws2812_init:'RGB Initialize pin %1 light num %2',
        Y_qdp_k210_actuator_ws2812_set_led:'RGB set colors light num %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB display',
        PY_qdp_k210_actuator_Servo_init:'Initialize servo PIN %1 timer %2',
        PY_qdp_k210_actuator_Servo:'Servo PIN %1 angle %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ACTUATOR_CATEGORY:'执行器',
        PY_qdp_k210_actuator_led_init:'初始化LED %1',
        LED_R:'红灯',
        LED_G:'绿灯',
        LED_B:'蓝灯',
        PY_qdp_k210_actuator_led_bright:'设置LED %1 状态 %2',
        ON:'亮',
        OFF:'灭',
        PY_qdp_k210_actuator_ws2812_init:'RGB 初始化 管脚 %1 灯数 %2',
        PY_qdp_k210_actuator_ws2812_set_led:'RGB 设置颜色 灯号 %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB生效',
        PY_qdp_k210_actuator_Servo_init:'初始化舵机 管脚 %1 定时器 %2',
        PY_qdp_k210_actuator_Servo:'舵机 管脚 %1 角度 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ACTUATOR_CATEGORY:'執行器',
        PY_qdp_k210_actuator_led_init:'初始化LED %1',
        LED_R:'紅燈',
        LED_G:'綠燈',
        LED_B:'藍燈',
        PY_qdp_k210_actuator_led_bright:'設置LED %1 狀態 %2',
        ON:'亮',
        OFF:'滅',
        PY_qdp_k210_actuator_ws2812_init:'RGB 初始化 管腳 %1 燈數 %2',
        Y_qdp_k210_actuator_ws2812_set_led:'RGB 設置顏色 燈號 %1 R %2 G %3 B %4',
        PY_qdp_k210_actuator_ws2812_display:'RGB生效',
        PY_qdp_k210_actuator_Servo_init:'初始化舵機 管腳 %1 定時器 %2',
        PY_qdp_k210_actuator_Servo:'舵機 管腳 %1 角度 %2'
    });
    return Blockly;
}

exports = addMsg;
