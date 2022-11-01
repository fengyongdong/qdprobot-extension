/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        tft_use_spi_init:'Initialize %4 to TFT display width %5 height %6 rotate %7 using SPI %1 DC %2 CS %3',
        MICROPYTHON_DISPLAY_NO:'NO',
        ANTI_CLOCKWISE:'clockwise',
        tft_show_image_or_string_delay:'TFT display %1 displays string %2 x %3 y %4 SIZE %5 word spacing %6 Center %7 color %8',
        MICROPYTHON_DISPLAY_YES:'YES',
        tft_scroll_string_delay:'TFT display %1 Scroll display string %2 y %3 SIZE %4 word spacing %5 spacing %6 color %7',
        tft_show_frame_string_delay:'TFT display %1 verbatim display string %2 font size %3 interval %4 color %5',
        tft_line_arbitrarily:'TFT display %1 Draw line starting point (X1 %2,Y1 %3) end point (X2 %4, Y2 %5) color %6',
        tft_fill:'TFT display %1 %2',
        MIXLY_HANDBIT_DISLPAY_OLED_FILL:'FILL',
        MIXLY_LCD_STAT_CLEAR:'CLEAR'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        tft_use_spi_init:'使用SPI %1 DC %2 CS %3 将 %4 初始化为TFT显示屏 宽度 %5 高度 %6 旋转 %7',
        MICROPYTHON_DISPLAY_NO:'否',
        ANTI_CLOCKWISE:'逆时钟',
        tft_show_image_or_string_delay:'TFT显示屏 %1 显示字符串 %2 x %3 y %4 字号 %5 字间距 %6 居中 %7 颜色 %8',
        MICROPYTHON_DISPLAY_YES:'是',
        tft_scroll_string_delay:'TFT显示屏 %1 滚动显示字符串 %2  y %3 字号 %4 字间距 %5 间隔 %6 颜色 %7',
        tft_show_frame_string_delay:'TFT显示屏 %1 逐字显示字符串 %2字号 %3 间隔 %4  颜色 %5',
        tft_line_arbitrarily:'TFT显示屏 %1 绘制线条 起点 (X1 %2 ,Y1 %3 ) 终点 (X2 %4 , Y2 %5) 颜色 %6',
        tft_fill:'TFT显示屏 %1 %2',
        MIXLY_HANDBIT_DISLPAY_OLED_FILL:'填充',
        MIXLY_LCD_STAT_CLEAR:'清屏'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        tft_use_spi_init:'使用SPI %1 DC %2 CS %3 將 %4 初始化為TFT顯示幕 寬度 %5 高度 %6 旋轉 %7',
        MICROPYTHON_DISPLAY_NO:'否',
        ANTI_CLOCKWISE:'逆時鐘',
        tft_show_image_or_string_delay:'TFT顯示幕 %1 顯示字串 %2 x %3 y %4 字型大小 %5 字間距 %6 居中 %7 顏色 %8',
        MICROPYTHON_DISPLAY_YES:'是',
        tft_scroll_string_delay:'TFT顯示幕 %1 滾動顯示字串 %2  y %3 字型大小 %4 字間距 %5 間隔 %6 顏色 %7',
        tft_show_frame_string_delay:'TFT顯示幕 %1 逐字顯示字串 %2字型大小 %3 間隔 %4  顏色 %5',
        tft_line_arbitrarily:'TFT顯示幕 %1 繪製線條 起點 (X1 %2 ,Y1 %3 ) 終點 (X2 %4 , Y2 %5) 顏色 %6',
        tft_fill:'TFT顯示幕 %1 %2',
        MIXLY_HANDBIT_DISLPAY_OLED_FILL:'填充',
        MIXLY_LCD_STAT_CLEAR:'清屏'
        
    });
    return Blockly;
}

exports = addMsg;
