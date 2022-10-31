/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_I2C_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IGZvbnQtd2VpZ2h0PSJib2xkIiBzdHJva2U9IiMwMDAiIHRyYW5zZm9ybT0ibWF0cml4KDMuMjIwMzk1NzM5NzE0NDMzLDAsMCw0LjQ5NzA1MTkyMTY4MjU0MywtMTM1Ljg5MzQ0MTg2MTE0OSwtMTY0LjAzMTgyMDk1OTA3MDE2KSAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9IidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMSIgeT0iNTguODkwMjAzIiB4PSI0Mi41NjQ5NTMiIGZpbGwtb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzAwMDAwMCI+STJDPC90ZXh0PgogPC9nPgo8L3N2Zz4=";

    return `
<category name="%{BKY_QH_ESP32_I2C_CATEGORY}" id="QH_ESP32_I2C_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_I2C_ICO}">
  <block type="communicate_i2c_init">
    <value name="SUB">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
    <field name="TX">22</field>
    <field name="RX">21</field>
    <value name="freq">
      <shadow type="math_number">
        <field name="NUM">100000</field>
      </shadow>
    </value>
  </block> 
  <block type="communicate_i2c_read">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
    <value name="address">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_i2c_write">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
    <value name="address">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_i2c_scan">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_i2c_master_read">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_i2c_available">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">i2c</field>
      </shadow>
    </value>
  </block>

</category>
`;

}

exports = addToolbox;
