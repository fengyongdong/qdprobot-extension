/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const QH_IMG_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYwNTYxNDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik04NDggODY0SDE3NmMtMTcuNiAwLTMyIDE0LjQtMzIgMzJzMTQuNCAzMiAzMiAzMmg2NzJjMTcuNiAwIDMyLTE0LjQgMzItMzJzLTE0LjQtMzItMzItMzJ6TTYwOCAyNzYuOGwtMTkyIDExMmMtMTQuNCA5LjYtMjAuOCAyOC44LTExLjIgNDMuMiA4IDE2IDI4LjggMjAuOCA0My4yIDExLjJsMTkyLTExMmMxNC40LTkuNiAyMC44LTI4LjggMTEuMi00My4yLTgtMTYtMjcuMi0yMC44LTQzLjItMTEuMnpNODk2IDk2SDEyOGMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NTc2YzAgMzUuMiAyOC44IDY0IDY0IDY0aDc2OGMzNS4yIDAgNjQtMjguOCA2NC02NFYxNjBjMC0zNS4yLTI4LjgtNjQtNjQtNjR6IG0wIDYyNGMwIDkuNi02LjQgMTYtMTYgMTZIMTQ0Yy05LjYgMC0xNi02LjQtMTYtMTZWMTc2YzAtOS42IDYuNC0xNiAxNi0xNmg3MzZjOS42IDAgMTYgNi40IDE2IDE2djU0NHpNNTYwIDQ1Mi44bC0xOTIgMTEyYy0xNC40IDkuNi0yMC44IDI4LjgtMTEuMiA0My4yIDggMTYgMjguOCAyMC44IDQzLjIgMTEuMmwxOTItMTEyYzE0LjQtOS42IDIwLjgtMjguOCAxMS4yLTQzLjItOC0xNi0yNy4yLTIwLjgtNDMuMi0xMS4yeiIgcC1pZD0iMTA2NjMiIGZpbGw9IiM1YmE1YTUiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_TFT_CATEGORY}" id="TFT_CATEGORY" colour="#C0C0C0" secondaryColour="#A9A9A9" iconURI="${QH_IMG_TFT_ICO}">
    <block type="QDP_qr_code_display">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">test</field>
            </shadow>
        </value>
        <value name="X">
            <shadow type="math_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_number">
                <field name="NUM">58</field>
            </shadow>
        </value>
        <value name="Zoom">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_begin_1">
        <field name="st7735_rst">8</field>
        <field name="st7735_cs">9</field>
        <field name="st7735_dc">10</field>
        <field name="st7735_mosi">11</field>
        <field name="st7735_sclk">13</field>
    </block>
    <block type="make_arduino_st7735_begin_2">
        <field name="st7735_rst">8</field>
        <field name="st7735_cs">9</field>
        <field name="st7735_dc">10</field>
    </block>
    <block type="make_arduino_st7735_backlight_20200703">
        <field name="st7735_backlight_pin">6</field>
        <value name="st7735_backlight_brightness">
          <shadow type="math_number">
              <field name="NUM">255</field>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_setRotation"></block>
    <block type="make_arduino_st7735_set_cursor">
        <value name="set_cursor_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="set_cursor_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_setTextSize"></block>
    <block type="color_rgb565" >
        <value name="color">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="make_arduino_st7735_set_text_screen_color_2019_10_18">
        <value name="set_text_color_data">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="arduino_st7735_set_text_background_color_2020_07_01">
        <value name="set_text_color_data">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
        <value name="set_text_color_background">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="arduino_st7735_set_text_2020_07_02">
        <value name="set_text_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="set_text_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="set_text_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
        <value name="set_background_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
        <value name="set_text_data">
          <shadow type="text">
            <field name="TEXT">hello</field>
          </shadow>
        </value>
    </block>
    <block type="tft_set_EN_Font"></block>
    <block type="tft_set_CN_Font"></block>
    <block type="tft_print" >
        <value name="POS_X">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="POS_Y">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="COLOR">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">1234</field>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_show_text_2019_10_18">
        <value name="st7735_print_data">
          <shadow type="text">
            <field name="TEXT">Hello</field>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_show_num_2019_10_18">
        <field name="show_num_type">print</field>
        <field name="st7735_print_type">DEC</field>
        <value name="st7735_print_data">
          <shadow type="math_number">
            <field name="NUM">123</field>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_pixel">
        <value name="st7735_draw_pixel_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_line">
        <value name="st7735_draw_pixel_start_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_start_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_end_x">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_end_y">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_angle_line_2020_08_10">
        <value name="st7735_draw_angle_line_x1">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_y1">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_length">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_angle">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_line1">
        <field name="st7735_draw_line1_type">drawFastHLine</field>
        <value name="st7735_draw_pixel_start_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_start_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_length">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_rect_change_2019_10_18">
        <value name="st7735_draw_rect_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_width">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_hight">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_Roundrect_change_2019_10_18">
        <value name="st7735_draw_rect_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_width">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_hight">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_radius">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_circle">
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">63</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_CircleHelper">
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">63</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_cornername">
          <shadow type="math_number">
            <field name="NUM">0x0</field>
          </shadow>
          <block type="make_arduino_oled_draw_CircleHelper_data">
          </block>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_fill_CircleHelper">
        <field name="st7735_name">tft</field>
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_cornername">
          <shadow type="math_number">
            <field name="NUM">0x0</field>
          </shadow>
          <block type="make_arduino_oled_fill_CircleHelper_data">
          </block>
        </value>
        <value name="st7735_draw_circle_delta">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="make_arduino_st7735_draw_ellipse">
        <value name="st7735_draw_ellipse_x">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_ellipse_y">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_ellipse_x_radius">
          <shadow type="math_number">
            <field name="NUM">30</field>
          </shadow>
        </value>
        <value name="st7735_draw_ellipse_y_radius">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_ellipse_cornername">
          <shadow type="math_number">
            <field name="NUM">0x0</field>
          </shadow>
          <block type="make_arduino_oled_draw_CircleHelper_data">
          </block>
        </value>
        <value name="st7735_draw_ellipse_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>

    <block type="make_arduino_st7735_draw_triangle">
        <value name="st7735_draw_triangle_x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_x3">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y3">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
