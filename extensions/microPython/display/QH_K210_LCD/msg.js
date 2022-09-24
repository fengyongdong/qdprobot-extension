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
        PY_qdp_k210_lcd_draw_string:'LCD Draws text X %1 Y %2 CONTENT %3 Text color %4 Background color %5',
        BLACK:'BLACK',
        NAVY:'NAVY',
        DARKGREEN:'DARKGREEN',
        DARKCYAN:'DARKCYAN',
        MAROON:'MAROON',
        PURPLE:'PURPLE',
        OLIVE:'OLIVE',
        LIGHTGREY:'LIGHTGREY',
        DARKGREY:'DARKGREY',
        BLUE:'BLUE',
        GREEN:'GREEN',
        CYAN:'CYAN',
        RED:'RED',
        MAGENTA:'MAGENTA',
        YELLOW:'YELLOW',
        WHITE:'WHITE',
        ORANGE:'ORANGE',
        GREENYELLOW:'GREENYELLOW',
        PINK:'PINK'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PY_qdp_k210_lcd_init:'LCD 初始化 通讯频率 %1 颜色 %2 反色显示 %3',
        py_yes:'是',
        py_no:'否',
        PY_qdp_k210_lcd_rotation:'LCD方向%1',
        PY_qdp_k210_lcd_mirror:'LCD镜像%1',
        PY_qdp_k210_lcd_display:'LCD 显示图像 %1',
        PY_qdp_k210_lcd_clear:'LCD 清屏 %1',
        PY_qdp_k210_lcd_draw_string:'LCD 绘制文本 x %1 y %2 内容 %3 文本颜色 %4 背景颜色 %5',
        BLACK:'黑色',
        NAVY:'深蓝色',
        DARKGREEN:'深绿色',
        DARKCYAN:'深青色',
        MAROON:'褐红色',
        PURPLE:'紫色',
        OLIVE:'橄榄绿',
        LIGHTGREY:'浅灰色',
        DARKGREY:'深灰色',
        BLUE:'蓝色',
        GREEN:'绿色',
        CYAN:'青色',
        RED:'红色',
        MAGENTA:'洋红',
        YELLOW:'黄色',
        WHITE:'白色',
        ORANGE:'橙色',
        GREENYELLOW:'黄绿色',
        PINK:'粉色'


    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        PY_qdp_k210_lcd_init:'LCD 初始化 通訊頻率 %1 顏色 %2 反色顯示 %3',
        py_yes:'是',
        py_no:'否',
        PY_qdp_k210_lcd_rotation:'LCD方向%1',
        PY_qdp_k210_lcd_mirror:'LCD鏡像%1',
        PY_qdp_k210_lcd_display:'LCD 顯示圖像 %1',
        PY_qdp_k210_lcd_clear:'LCD 清屏 %1',
        PY_qdp_k210_lcd_draw_string:'LCD 繪製文本 x %1 y %2 內容 %3 文本顏色 %4 背景顏色 %5',
        BLACK:'黑色',
        NAVY:'深藍色',
        DARKGREEN:'深綠色',
        DARKCYAN:'深青色',
        MAROON:'褐紅色',
        PURPLE:'紫色',
        OLIVE:'橄欖綠',
        LIGHTGREY:'淺灰色',
        DARKGREY:'深灰色',
        BLUE:'藍色',
        GREEN:'綠色',
        CYAN:'青色',
        RED:'紅色',
        MAGENTA:'洋紅',
        YELLOW:'黃色',
        WHITE:'白色',
        ORANGE:'橙色',
        GREENYELLOW:'黃綠色',
        PINK:'粉色'
        
    });
    return Blockly;
}

exports = addMsg;
