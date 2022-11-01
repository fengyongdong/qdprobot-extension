/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MjY1NDk4ODY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzMjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTkyMS42IDg3MC40djEwMi40SDEwMi40di0xMDIuNGg4MTkuMnpNMTAyNCA1MS4ydjY2NS42SDBWNTEuMmgxMDI0eiBtLTEwMi40IDEwMi40SDEwMi40djQ2MC44aDgxOS4yVjE1My42eiIgcC1pZD0iMzMzMCIgZmlsbD0iIzViYTVhNSI+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="TFT" id="QH_TFT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_TFT_ICO}">
<block type="tft_use_spi_init">
    <value name="SPISUB">
      <shadow type="variables_get">
        <field name="VAR">spi</field>
      </shadow>
    </value>
    <value name="PINDC">
      <shadow type="pins_output_pin">
        <field name="PIN">7</field>
      </shadow>
    </value>
    <value name="PINCS">
      <shadow type="pins_output_pin">
        <field name="PIN">8</field>
      </shadow>
    </value>
    <value name="SUB">
      <shadow type="variables_get">
        <field name="VAR">tft_st7789</field>
      </shadow>
    </value>
    <value name="WIDTH">
      <shadow type="math_number">
        <field name="NUM">135</field>
      </shadow>
    </value>
    <value name="HEIGHT">
      <shadow type="math_number">
        <field name="NUM">240</field>
      </shadow>
    </value>
  </block>
  <block type="tft_show_image_or_string_delay">
    <value name="SUB">
      <shadow type="variables_get">
        <field name="VAR">tft_st7789</field>
      </shadow>
    </value>
  <value name="data">
    <shadow type="text">
      <field name="TEXT">QDProbot</field>
    </shadow>
  </value>
  <value name="x">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="size">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="space">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="VAR">
      <shadow type="colour_picker"/>
  </value>
</block>   
<block type="tft_scroll_string_delay">
  <value name="SUB">
      <shadow type="variables_get">
        <field name="VAR">tft_st7789</field>
      </shadow>
    </value>
  <value name="data">
    <shadow type="text">
      <field name="TEXT">QDProbot</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="size">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="time">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="space">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="VAR">
      <shadow type="colour_picker"/>
  </value>
</block>
<block type="tft_show_frame_string_delay">
  <value name="SUB">
      <shadow type="variables_get">
        <field name="VAR">tft_st7789</field>
      </shadow>
    </value>
  <value name="data">
    <shadow type="text">
      <field name="TEXT">QDProbot</field>
    </shadow>
  </value>
  <value name="size">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="time">
    <shadow type="math_number">
      <field name="NUM">500</field>
    </shadow>
  </value>
  <value name="VAR">
      <shadow type="colour_picker"/>
  </value>
</block>    
<block type="tft_line_arbitrarily">
  <value name="SUB">
    <shadow type="variables_get">
      <field name="VAR">tft_st7789</field>
    </shadow>
  </value>
  <value name="x1">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="y1">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="x2">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y2">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="VAR">
      <shadow type="colour_picker"/>
  </value>
</block>
<block type="tft_fill">
  <value name="SUB">
    <shadow type="variables_get">
      <field name="VAR">tft_st7789</field>
    </shadow>
  </value>
</block>
</category>
`;

}

exports = addToolbox;
