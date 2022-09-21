/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //齐护二维码显示
    Blockly.Arduino.QDP_qr_code_display = function() {
        var text= Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC);
        var X= Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
        var Y= Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        var Zoom= Blockly.Arduino.valueToCode(this, 'Zoom', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_["include_qrcode"] = '#include <qrcode.h>';
        var code='String strURL = ' + text +';\n'
                                    +'char x[500];\n'
                                    +'strURL.toCharArray(x, 500);\n'
                                    +'Serial.println (x);\n'
                                    +'QRCode qrcode;\n'
                                    +'uint8_t qrcodeData[qrcode_getBufferSize(6)];\n'
                                    +'qrcode_initText(&qrcode, qrcodeData, 6, 0, x);\n'
                                    +'uint8_t x0 = '+ X +'; //横坐标偏移\n'
                                    +'uint8_t y0 = '+ Y +'; //纵坐标偏移\n'
                                    +'uint8_t Zoom = '+ Zoom +'; //缩放倍数\n'
                                    +'Serial.println (qrcode.size);\n'
                                    +'for (uint8_t y = 0; y < qrcode.size; y++) {\n'
                                    +'  for (uint8_t x = 0; x < qrcode.size; x++) {\n'
                                    +'    if (qrcode_getModule(&qrcode, x, y)) {\n'
                                    +'      tft.fillRect(Zoom * x + x0, Zoom * y + y0, Zoom, Zoom, 0x0000);\n'
                                    +'    } else {\n'
                                    +'      tft.fillRect(Zoom * x + x0, Zoom * y + y0, Zoom, Zoom, 0xFFFF);\n'
                                    +'    }\n'
                                    +'  }\n'
                                    +'}\n';
        return code;
    };

    Blockly.Arduino.make_arduino_st7735_begin_1 = function() {
      var dropdown_st7735_tab = this.getFieldValue('st7735_tab');
      var value_st7735_rst = this.getFieldValue('st7735_rst');
      var value_st7735_cs = this.getFieldValue('st7735_cs');
      var value_st7735_dc = this.getFieldValue('st7735_dc');
      var value_st7735_mosi = this.getFieldValue('st7735_mosi');
      var value_st7735_sclk = this.getFieldValue('st7735_sclk');
      var st7789_select = dropdown_st7735_tab.indexOf(",") != -1 ? 'ST7789':'ST7735';
      st7789_select = dropdown_st7735_tab.indexOf("ST7796") != -1 ? 'ST7796':st7789_select;
      Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
      Blockly.Arduino.definitions_['include_Adafruit_'+st7789_select] = '#include <Adafruit_'+st7789_select+'.h>';
      Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
      Blockly.Arduino.definitions_['include_U8G2'] = '#include <U8g2_for_Adafruit_GFX.h>';
      Blockly.Arduino.definitions_['var_declare_tft_'] = 'Adafruit_'+st7789_select+' tft = Adafruit_'+st7789_select+'('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_mosi+', '+value_st7735_sclk+', '+value_st7735_rst+');\nU8G2_FOR_ADAFRUIT_GFX u8g2_for_adafruit_gfx;\n';

      Blockly.Arduino.setups_['setup_tft_' ] = 'tft.init'+(st7789_select == 'ST7735'? 'R':'')+'('+(st7789_select == 'ST7796'? '':dropdown_st7735_tab)+');\n  u8g2_for_adafruit_gfx.begin(tft);\n';

      var code = '';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_begin_2 = function() {
      var dropdown_st7735_tab = this.getFieldValue('st7735_tab');
      var value_st7735_rst = this.getFieldValue('st7735_rst');
      var value_st7735_cs = this.getFieldValue('st7735_cs');
      var value_st7735_dc = this.getFieldValue('st7735_dc');
      var st7789_select = dropdown_st7735_tab.indexOf(",") != -1 ? 'ST7789':'ST7735';
      st7789_select = dropdown_st7735_tab.indexOf("ST7796") != -1 ? 'ST7796':st7789_select;
      Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
      Blockly.Arduino.definitions_['include_Adafruit_'+st7789_select] = '#include <Adafruit_'+st7789_select+'.h>';
      Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
      Blockly.Arduino.definitions_['include_U8G2'] = '#include <U8g2_for_Adafruit_GFX.h>';

      Blockly.Arduino.definitions_['var_declare_tft_' ] = 'Adafruit_'+st7789_select+' tft = Adafruit_'+st7789_select+'('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_rst+');\nU8G2_FOR_ADAFRUIT_GFX u8g2_for_adafruit_gfx;\n';

      Blockly.Arduino.setups_['setup_tft_' ] = 'tft.init'+(st7789_select == 'ST7735'? 'R':'')+'('+(st7789_select == 'ST7796'? '':dropdown_st7735_tab)+');\n  u8g2_for_adafruit_gfx.begin(tft);\n';

      var code = '';
      return code;
    };

    //屏幕背光初始化引脚
    Blockly.Arduino.make_arduino_st7735_backlight_20200703 = function() {
      var value_st7735_backlight_pin = this.getFieldValue('st7735_backlight_pin');
      Blockly.Arduino.valueToCode(this, 'st7735_backlight_pin', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_backlight_brightness = Blockly.Arduino.valueToCode(this, 'st7735_backlight_brightness', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'analogWrite('+value_st7735_backlight_pin+', '+value_st7735_backlight_brightness+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_setRotation = function() {
      var value_angle = this.getFieldValue('angle');
      var code = 'tft.setRotation('+value_angle+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_set_cursor = function() {
      var value_set_cursor_x = Blockly.Arduino.valueToCode(this, 'set_cursor_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_cursor_y = Blockly.Arduino.valueToCode(this, 'set_cursor_y', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.setCursor('+value_set_cursor_x+', '+value_set_cursor_y+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_setTextSize = function() {
      var value_size = this.getFieldValue('size');
      var code = 'tft.setTextSize('+value_size+');\n';
      return code;
    };

    //RGB颜色
    Blockly.Arduino.color_rgb565 = function () {
      var color =Blockly.Arduino.valueToCode(this, 'color',Blockly.Arduino.ORDER_ATOMIC);
      color = color.substr(1)
      color = parseInt(color,16);
      var R = parseInt(((color&0XFF0000)>>16)*31.0/255.0)<<11;
      var G = parseInt(((color&0XFF00)>>8)*64.0/255.0)<<5;
      var B = parseInt((color&0XFF)*31.0/255.0);
      color = R+G+B;
      color = '0x'+color.toString(16);

      code = `${color}`;
      return [code, Blockly.Arduino.ORDER_ATOMIC];  
    };

    Blockly.Arduino.make_arduino_st7735_set_text_screen_color_2019_10_18 = function() {
      var dropdown_choose_type = this.getFieldValue('choose_type');
      var value_set_text_color_data = Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.'+dropdown_choose_type+'('+value_set_text_color_data+');\n';
      return code;
    };

    //设置字体和字体背景颜色
    Blockly.Arduino.arduino_st7735_set_text_background_color_2020_07_01 = function() {
      var value_set_text_color_data = Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_text_color_background = Blockly.Arduino.valueToCode(this, 'set_text_color_background', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.setTextColor('+value_set_text_color_data+', '+value_set_text_color_background+');\n';
      return code;
    };

    //设置文本综合
    Blockly.Arduino.arduino_st7735_set_text_2020_07_02 = function() {
      var value_set_text_x = Blockly.Arduino.valueToCode(this, 'set_text_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_text_y = Blockly.Arduino.valueToCode(this, 'set_text_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_text_color = Blockly.Arduino.valueToCode(this, 'set_text_color', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_background_color = Blockly.Arduino.valueToCode(this, 'set_background_color', Blockly.Arduino.ORDER_ATOMIC);
      var value_set_text_data = Blockly.Arduino.valueToCode(this, 'set_text_data', Blockly.Arduino.ORDER_ATOMIC);
      var value_size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC) || '0';
      var checkbox_set_text_linebreak = this.getFieldValue('set_text_linebreak') == 'TRUE';
        if(checkbox_set_text_linebreak)
        {
          checkbox_set_text_linebreak = 'println';
        }
        else
        {
          checkbox_set_text_linebreak = 'print';
        }
      var code = 'tft.setCursor('+value_set_text_x+', '+value_set_text_y+');\n'
                  +'tft.setTextColor('+value_set_text_color+', '+value_set_background_color+');\n'
                  +'tft.setTextSize('+value_size+');\n'
                  +'tft.'+checkbox_set_text_linebreak+'('+value_set_text_data+');\n';
      return code;
    };

    //将字符串转整数
    function myAtoi(str) {
      str=str.replace(/(^\s*)|(\s*$)/g, "");//去掉字符串最前面的空格，中间的不用管
      var str1="";
      for(i=0;i<str.length;i++){
          if((str.charAt(i)=="-"||str.charAt(i)=="+")&&i==0){
              str1=str1.concat(str.charAt(i))
          }//如果“+”“-”号在最前面
          else if(/^\d+$/.test(str.charAt(i))){
              str1=str1.concat(str.charAt(i))
          }//用字符串存储值
          else{
              break//直接跳出for循环
          };
      }
          if(str1-0>2147483647){
              return 2147483647
          }                      //str-0   字符串化为数组最简单也是最常用的方法
          else if(str1-0<-2147483648){
              return -2147483648
          }
          if(isNaN(str1-0)) return 0//"+"/"-"这种情况,返回0
      return str1-0            
    };

    Blockly.Arduino.tft_print = function() {
     var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X') || '0';
     var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y') || '0';
     var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT') || '0';
     var colour = Blockly.Arduino.valueToCode(this, 'COLOR');
     
     var code="";
     if ((!isNaN(POS_x) && POS_x < 129 && POS_x >= 0) || (isNaN(POS_x))) 
      code = 'u8g2_for_adafruit_gfx.setCursor(' + POS_x + ',';
    if ((!isNaN(POS_y) && POS_y < 129 && POS_y >= 0) || (isNaN(POS_y))) 
      code += POS_y + "); \n";
     // code +='u8g2_for_adafruit_gfx.setFontMode(0);'
     code += 'u8g2_for_adafruit_gfx.setForegroundColor'+'('+colour+');\n';
     code += "u8g2_for_adafruit_gfx.print(" + TEXT + "); \n";
     return code;
    };

    Blockly.Arduino.tft_set_EN_Font = function() {
     var FONT_NAME = this.getFieldValue('FONT_NAME');
     var FONT_SIZE = this.getFieldValue('FONT_SIZE');
     var FONT_STYLE = this.getFieldValue('FONT_STYLE');
     var code = "u8g2_for_adafruit_gfx.setFont(u8g2_font_"+FONT_NAME+FONT_STYLE+FONT_SIZE+"_tf);\n";
     return code;
    };

    Blockly.Arduino.tft_set_CN_Font = function() {
     var FONT_NAME = this.getFieldValue('FONT_NAME');
     var FONT_SIZE = this.getFieldValue('FONT_SIZE');
     var code = "u8g2_for_adafruit_gfx.setFont(u8g2_font_"+FONT_SIZE+FONT_NAME+");\n";
     return code;
    };

    Blockly.Arduino.tft_print = function() {
     var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X') || '0';
     var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y') || '0';
     var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT') || '0';
     var colour = Blockly.Arduino.valueToCode(this, 'COLOR');
     
     var code="";
     if ((!isNaN(POS_x) && POS_x < 129 && POS_x >= 0) || (isNaN(POS_x))) 
      code = 'u8g2_for_adafruit_gfx.setCursor(' + POS_x + ',';
    if ((!isNaN(POS_y) && POS_y < 129 && POS_y >= 0) || (isNaN(POS_y))) 
      code += POS_y + "); \n";
     // code +='u8g2_for_adafruit_gfx.setFontMode(0);'
     code += 'u8g2_for_adafruit_gfx.setForegroundColor'+'('+colour+');\n';
     code += "u8g2_for_adafruit_gfx.print(" + TEXT + "); \n";
     return code;
    };

    Blockly.Arduino.make_arduino_st7735_show_text_2019_10_18 = function() {
      var dropdown_show_text_type = this.getFieldValue('show_text_type');
      var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.'+dropdown_show_text_type+'('+value_st7735_print_data+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_show_num_2019_10_18 = function() {
      var dropdown_show_num_type = this.getFieldValue('show_num_type');
      var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
      var dropdown_st7735_print_type = this.getFieldValue('st7735_print_type');
      var code = 'tft.'+dropdown_show_num_type+'('+value_st7735_print_data+', '+dropdown_st7735_print_type+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_pixel = function() {
      var value_st7735_draw_pixel_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.drawPixel('+value_st7735_draw_pixel_x+', '+value_st7735_draw_pixel_y+', '+value_st7735_draw_pixel_color+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_line = function() {
      var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_end_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_end_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.drawLine('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_end_x+', '+value_st7735_draw_pixel_end_y+', '+value_st7735_draw_pixel_color+');\n';
      return code;
    };

    //TFT长度&角度画线20200810
    Blockly.Arduino.make_arduino_st7735_draw_angle_line_2020_08_10 = function() {
      var value_st7735_draw_angle_line_x1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_x1', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_angle_line_y1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_y1', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_angle_line_length = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_length', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_angle_line_angle = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_angle', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_angle_line_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_color', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['st7735_draw_angle_line'] = 'int line_x1,line_y1,line_x2,line_y2,line_Angle,line_length;';
      var code = 'line_x1 = ' +  value_st7735_draw_angle_line_x1 + ';\n'
               + 'line_y1 = ' +  value_st7735_draw_angle_line_y1 + ';\n'
               + 'line_x2 = 0;\n'
               + 'line_y2 = 0;\n'
               + 'line_Angle = ' +  value_st7735_draw_angle_line_angle + ' + 90;\n'
               + 'line_length = ' +  value_st7735_draw_angle_line_length + ';\n' 
               + 'line_x2 = line_x1 + line_length * sin(line_Angle / 180.0 * 3.14159);\n'  
               + 'line_y2 = line_y1 + line_length * cos(line_Angle / 180.0 * 3.14159);\n' 
               + 'tft.drawLine(line_x1, line_y1, line_x2, line_y2, '  + value_st7735_draw_angle_line_color +');\n';    
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_line1 = function() {
      var dropdown_st7735_draw_line1_type = this.getFieldValue('st7735_draw_line1_type');
      var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_length = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_length', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.'+dropdown_st7735_draw_line1_type+'('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_length+', '+value_st7735_draw_pixel_color+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_rect_change_2019_10_18 = function() {
      var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
      var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.' + dropdown_st7735_draw_rect_type_1 + 'Rect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', ' + value_st7735_draw_rect_color + ');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_Roundrect_change_2019_10_18 = function() {
      var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
      var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.' + dropdown_st7735_draw_rect_type_1 + 'RoundRect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', '+ value_st7735_draw_rect_radius + ', ' + value_st7735_draw_rect_color + ');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_circle = function() {
      var dropdown_oled_draw_circle_type = this.getFieldValue('oled_draw_circle_type');
      var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.'+dropdown_oled_draw_circle_type+'Circle('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_color+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_CircleHelper = function() {
      var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_cornername = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_cornername', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.startWrite('+');\ntft.drawCircleHelper('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_cornername+', '+value_st7735_draw_circle_color+');\ntft.endWrite('+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_oled_draw_CircleHelper_data = function() {
      var checkbox_LEFT_UP = this.getFieldValue('LEFT_UP') == 'TRUE';
      var checkbox_RIGHT_UP = this.getFieldValue('RIGHT_UP') == 'TRUE';
      var checkbox_LEFT_DOWN = this.getFieldValue('LEFT_DOWN') == 'TRUE';
      var checkbox_RIGHT_DOWN = this.getFieldValue('RIGHT_DOWN') == 'TRUE';
      var code = 'B0000'+(checkbox_LEFT_DOWN?'1':'0')+(checkbox_RIGHT_DOWN?'1':'0')+(checkbox_RIGHT_UP?'1':'0')+(checkbox_LEFT_UP?'1':'0');
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.make_arduino_st7735_fill_CircleHelper = function() {
      var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_cornername = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_cornername', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_delta = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_delta', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.startWrite('+');\ntft.fillCircleHelper('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_cornername+', '+value_st7735_draw_circle_delta+', '+value_st7735_draw_circle_color+');\ntft.endWrite('+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_oled_fill_CircleHelper_data = function() {
      var checkbox_LEFT = this.getFieldValue('LEFT') == 'TRUE';
      var checkbox_RIGHT = this.getFieldValue('RIGHT') == 'TRUE';
      var code = 'B000000'+(checkbox_RIGHT?'1':'0')+(checkbox_LEFT?'1':'0');
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.make_arduino_st7735_draw_ellipse = function() {
      var dropdown_st7735_draw_ellipse_type = this.getFieldValue('st7735_draw_ellipse_type');
      var value_st7735_draw_ellipse_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_x', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_ellipse_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_y', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_ellipse_x_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_x_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_ellipse_y_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_y_radius', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_ellipse_cornername = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_cornername', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_ellipse_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_ellipse_color', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['function_draw_ellipse_section'] = 'void draw_ellipse_section(Adafruit_GFX *screen, int16_t x, int16_t y, int16_t x0, int16_t y0, uint8_t option, boolean fill, uint16_t color){\n'
                                                                    + '  /* upper left */\n'
                                                                    + '  if (option & 0x01){\n'
                                                                    + '    if(fill)\n'
                                                                    + '      screen->drawFastVLine(x0-x, y0-y, y+1, color);\n'
                                                                    + '    else\n'
                                                                    + '      screen->drawPixel(x0 - x, y0 - y, color);\n'
                                                                    + '  }\n'
                                                                    + '\n'
                                                                    + '  /* upper right */\n'
                                                                    + '  if (option & 0x02){\n'
                                                                    + '    if(fill)\n'
                                                                    + '      screen->drawFastVLine(x0+x, y0-y, y+1, color);\n'
                                                                    + '    else\n'
                                                                    + '      screen->drawPixel(x0 + x, y0 - y, color);\n'
                                                                    + '  }\n'
                                                                    + '\n'
                                                                    + '  /* lower right */\n'
                                                                    + '  if (option & 0x04){\n'
                                                                    + '    if(fill)\n'
                                                                    + '      screen->drawFastVLine(x0+x, y0, y+1, color);\n'
                                                                    + '    else\n'
                                                                    + '      screen->drawPixel(x0 + x, y0 + y, color);\n'
                                                                    + '  }\n'
                                                                    + '\n'
                                                                    + '  /* lower left */\n'
                                                                    + '  if (option & 0x08){\n'
                                                                    + '    if(fill)\n'
                                                                    + '      screen->drawFastVLine(x0-x, y0, y+1, color);\n'
                                                                    + '    else\n'
                                                                    + '      screen->drawPixel(x0 - x, y0 + y, color);\n'
                                                                    + '  }\n'
                                                                    + '}\n';
      Blockly.Arduino.definitions_['function_draw_ellipse'] = 'void draw_ellipse(Adafruit_GFX *screen, int16_t x0, int16_t y0, int16_t rx, int16_t ry, uint8_t option, boolean fill, uint16_t color){\n'
                                                            + '  uint16_t x, y;\n'
                                                            + '  int32_t xchg, ychg;\n'
                                                            + '  int32_t err;\n'
                                                            + '  int32_t rxrx2;\n'
                                                            + '  int32_t ryry2;\n'
                                                            + '  int32_t stopx, stopy;\n'
                                                            + '\n'
                                                            + '  rxrx2 = rx;\n'
                                                            + '  rxrx2 *= rx;\n'
                                                            + '  rxrx2 *= 2;\n'
                                                            + '\n'
                                                            + '  ryry2 = ry;\n'
                                                            + '  ryry2 *= ry;\n'
                                                            + '  ryry2 *= 2;\n'
                                                            + '\n'
                                                            + '  x = rx;\n'
                                                            + '  y = 0;\n'
                                                            + '\n'
                                                            + '  xchg = 1;\n'
                                                            + '  xchg -= rx;\n'
                                                            + '  xchg -= rx;\n'
                                                            + '  xchg *= ry;\n'
                                                            + '  xchg *= ry;\n'
                                                            + '\n'
                                                            + '  ychg = rx;\n'
                                                            + '  ychg *= rx;\n'
                                                            + '\n'
                                                            + '  err = 0;\n'
                                                            + '\n'
                                                            + '  stopx = ryry2;\n'
                                                            + '  stopx *= rx;\n'
                                                            + '  stopy = 0;\n'
                                                            + '\n'
                                                            + '  while( stopx >= stopy ){\n'
                                                            + '    draw_ellipse_section(screen, x, y, x0, y0, option, fill, color);\n'
                                                            + '    y++;\n'
                                                            + '    stopy += rxrx2;\n'
                                                            + '    err += ychg;\n'
                                                            + '    ychg += rxrx2;\n'
                                                            + '    if ( 2*err+xchg > 0 ){\n'
                                                            + '      x--;\n'
                                                            + '      stopx -= ryry2;\n'
                                                            + '      err += xchg;\n'
                                                            + '      xchg += ryry2;\n'
                                                            + '    }\n'
                                                            + '  }\n'
                                                            + '\n'
                                                            + '  x = 0;\n'
                                                            + '  y = ry;\n'
                                                            + '\n'
                                                            + '  xchg = ry;\n'
                                                            + '  xchg *= ry;\n'
                                                            + '\n'
                                                            + '  ychg = 1;\n'
                                                            + '  ychg -= ry;\n'
                                                            + '  ychg -= ry;\n'
                                                            + '  ychg *= rx;\n'
                                                            + '  ychg *= rx;\n'
                                                            + '\n'
                                                            + '  err = 0;\n'
                                                            + '\n'
                                                            + '  stopx = 0;\n'
                                                            + '\n\n'
                                                            + '  stopy = rxrx2;\n'
                                                            + '  stopy *= ry;\n'
                                                            + '\n'
                                                            + '  while( stopx <= stopy ){\n'
                                                            + '    draw_ellipse_section(screen, x, y, x0, y0, option, fill, color);\n'
                                                            + '    x++;\n'
                                                            + '    stopx += ryry2;\n'
                                                            + '    err += xchg;\n'
                                                            + '    xchg += ryry2;\n'
                                                            + '    if ( 2*err+ychg > 0 ){\n'
                                                            + '      y--;\n'
                                                            + '      stopy -= rxrx2;\n'
                                                            + '      err += ychg;\n'
                                                            + '      ychg += rxrx2;\n'
                                                            + '    }\n'
                                                            + '  }\n'
                                                            + '}\n';
      var code = 'draw_ellipse(&tft, '+value_st7735_draw_ellipse_x+', '+value_st7735_draw_ellipse_y+', '+value_st7735_draw_ellipse_x_radius+', '+value_st7735_draw_ellipse_y_radius+', '+value_st7735_draw_ellipse_cornername+', '+dropdown_st7735_draw_ellipse_type+', '+value_st7735_draw_ellipse_color+');\n';
      return code;
    };

    Blockly.Arduino.make_arduino_st7735_draw_triangle = function() {
      var dropdown_st7735_draw_triangle_type = this.getFieldValue('st7735_draw_triangle_type');
      var value_st7735_draw_triangle_x1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x1', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_y1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y1', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_x2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x2', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_y2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y2', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_x3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x3', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_y3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y3', Blockly.Arduino.ORDER_ATOMIC);
      var value_st7735_draw_triangle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_color', Blockly.Arduino.ORDER_ATOMIC);
      var code = 'tft.'+dropdown_st7735_draw_triangle_type+'Triangle('+value_st7735_draw_triangle_x1+', '+value_st7735_draw_triangle_y1+', '+value_st7735_draw_triangle_x2+', '+value_st7735_draw_triangle_y2+', '+value_st7735_draw_triangle_x3+', '+value_st7735_draw_triangle_y3+', '+value_st7735_draw_triangle_color+');\n';
      return code;
    };



    return Blockly;
}

exports = addGenerator;
