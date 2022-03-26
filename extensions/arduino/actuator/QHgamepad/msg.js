/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QHGAMEPAD_CATEGORY:'Iot remote control',
        IOT_REMOTE_CONTROL_BUTTON_EVENT: '%1 Button Key%2trig mode%3%4DO%5',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_CHANGED : 'Changed',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_PRESSED : 'Pressed',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_RELEASED : 'Released',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_LONGCLICKDETECTED : 'Long click detected',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_longClick : 'Long click',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_DOUBLECLICK : 'Double click',
        IOT_REMOTE_CONTROL_get_the_joystick_value:'Gets the current joystick Angle'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QHGAMEPAD_CATEGORY:'IOT遥控器',
        IOT_REMOTE_CONTROL_BUTTON_EVENT: '%1按钮 按键%2 触发方式 %3%4执行%5',      
        IOT_REMOTE_CONTROL_BUTTON_EVENT_CHANGED : '变化时',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_PRESSED : '按下时',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_RELEASED : '释放时',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_LONGCLICKDETECTED : '长按时',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_longClick : '长按松开时',
        IOT_REMOTE_CONTROL_BUTTON_EVENT_DOUBLECLICK : '双击',
        IOT_REMOTE_CONTROL_get_the_joystick_value:'获取摇杆当前角度'

    });
    return Blockly;
}

exports = addMsg;