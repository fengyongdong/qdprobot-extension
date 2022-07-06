/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SDISPLAY_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2Mjc1MDE0MTg4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwMjQgNzY4VjEyOGMwLTE3LjctMTQuMy0zMi0zMi0zMkgzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NjQwYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDQ0MGM0LjQgMCA4IDMuNiA4IDh2MjRjMCAxNy43LTE0LjMgMzItMzIgMzJIMjcyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMyaDQ4MGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkg1NzZjLTE3LjcgMC0zMi0xNC4zLTMyLTMydi0yNGMwLTQuNCAzLjYtOCA4LThoNDQwYzE3LjcgMCAzMi0xNC4zIDMyLTMyek02NCA3MjBWMTc2YzAtOC44IDcuMi0xNiAxNi0xNmg4NjRjOC44IDAgMTYgNy4yIDE2IDE2djU0NGMwIDguOC03LjIgMTYtMTYgMTZIODBjLTguOCAwLTE2LTcuMi0xNi0xNnoiIHAtaWQ9IjI0MjciIGZpbGw9IiNGQTkyODQiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_QH_C02_COLOR_SCREEN_CATEGORY}" id="QH_C02_COLOR_SCREEN_CATEGORY" colour="#FFFFFF" secondaryColour="#000000" iconURI="${QH_SDISPLAY_ICO}">
    <block type="PY_QDP_blink_32" name="学习二维码"></block>
    <block type="PY_QDP_esp32_display_samll_init" name="彩屏初始化"></block>
    <block type="PY_QDP_esp32_display_samll_refresh_display"></block>
    <block type="PY_QDP_esp32_display_samll_HV" name="横坚屏设置"></block>
    <block type="PY_QDP_esp32_display_samll_BL" name="屏亮度">
        <value name="QDP_display_samll_bl_1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_clr" name="颜色刷屏/背景色">
        <value name="QDP_display_samll_clr_1">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
    </block>
    <block name="默认图片显示" type="PY_QH_esp32_display_samll_flash_pic"></block>
    <block type="PY_QDP_esp32_display_samll_pic" name="图片显示">
        <value name="QDP_display_samll_pic_add">
            <shadow type="math_number">
                <field name="NUM">2097152</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_W">
            <shadow type="math_number">
                <field name="NUM">128</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_H">
            <shadow type="math_number">
                <field name="NUM">160</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_customize_display_define_bitmap_data">
        <value name="image_name">
            <shadow type="text">
                <field name="TEXT">logo</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0x00, 0x00, 0x00, 0x00, 0x00</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_PS" name="画点指令">
        <value name="QDP_display_samll_ps_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_Y">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_PL" name="画线框指令">
        <value name="QDP_display_samll_pl_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_X2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_CIR" name="画圆指令">
        <value name="QDP_display_samll_cir_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_Y">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_R">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_DC" name="显示文本">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">English</field>
            </shadow>
        </value>
    </block>

    <block type="PY_QDP_esp32_display_samll_SBCDC" name="显示带底色文本">
        <value name="QDP_display_samll_sbcdc_colou2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_text">
            <shadow type="text">
                <field name="TEXT">English</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
    <block type="PY_QDP_esp32_display_samll_btl" name="波特率"></block>
</category>
`;

}

exports = addToolbox;
