/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PY_qdp_k210_lcd_init:'LCD init  Freq %1 colour %2 invert %3',
        py_yes:'yes',
        py_no:'no',
        PY_qdp_k210_lcd_rotation:'LCD rotation%1',
        PY_qdp_k210_lcd_mirror:'LCD mirror %1',
        PY_qdp_k210_lcd_display:'LCD display image %1',
        PY_qdp_k210_lcd_clear:'LCD Clear Screen %1',
        PY_qdp_k210_lcd_draw_string:'LCD Draws text X %1 Y %2 CONTENT %3 Text color %4 Background color %5'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PY_qdp_k210_lcd_init:'LCD 初始化 通讯频率 %1 颜色 %2 反色显示 %3',
        py_yes:'是',
        py_no:'否',
        PY_qdp_k210_lcd_rotation:'LCD方向%1',
        PY_qdp_k210_lcd_mirror:'LCD镜像%1',
        PY_qdp_k210_lcd_display:'LCD 显示图像 %1',
        PY_qdp_k210_lcd_clear:'LCD 清屏 %1',
        PY_qdp_k210_lcd_draw_string:'LCD 绘制文本 x %1 y %2 内容 %3 文本颜色 %4 背景颜色 %5'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        PY_qdp_k210_lcd_init:'LCD 初始化 通訊頻率 %1 顏色 %2 反色顯示 %3',
        py_yes:'是',
        py_no:'否',
        PY_qdp_k210_lcd_rotation:'LCD方向%1',
        PY_qdp_k210_lcd_mirror:'LCD鏡像%1',
        PY_qdp_k210_lcd_display:'LCD 顯示圖像 %1',
        PY_qdp_k210_lcd_clear:'LCD 清屏 %1',
        PY_qdp_k210_lcd_draw_string:'LCD 繪製文本 x %1 y %2 內容 %3 文本顏色 %4 背景顏色 %5'
        
    });
    return Blockly;
}

exports = addMsg;
