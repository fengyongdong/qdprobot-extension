/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SPI_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IGZvbnQtd2VpZ2h0PSJib2xkIiBzdHJva2U9IiMwMDAiIHRyYW5zZm9ybT0ibWF0cml4KDMuMjIwMzk1NzM5NzE0NDMzLDAsMCw0LjQ5NzA1MTkyMTY4MjU0MywtMTM1Ljg5MzQ0MTg2MTE0OSwtMTY0LjAzMTgyMDk1OTA3MDE2KSAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9IidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMSIgeT0iNTguNjY3ODM1IiB4PSI0Mi41NjQ5NTMiIHN0cm9rZS1vcGFjaXR5PSJudWxsIiBzdHJva2Utd2lkdGg9IjAiIGZpbGw9IiM0NjY3M0QiPlNQSTwvdGV4dD4KIDwvZz4KPC9zdmc+";

    return `
<category name="%{BKY_QH_ESP32_SPI_CATEGORY}" id="QH_ESP32_SPI_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SPI_ICO}">
  <block type="communicate_spi_init">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="freq">
      <shadow type="math_number">
        <field name="NUM">200000</field>
      </shadow>
    </value>          
    <field name="sck">0</field>
    <field name="mosi">4</field>
    <field name="miso">5</field>
  </block>
  <block type="communicate_spi_set">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">200000</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_buffer">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">50</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_read">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_read_output">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
    <value name="val">
      <shadow type="text">
        <field name="TEXT">0xff</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_readinto">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">buf</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_readinto_output">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">buf</field>
      </shadow>
    </value>
    <value name="val">
      <shadow type="text">
        <field name="TEXT">0xff</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_write">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">12345</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_spi_write_readinto">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">spi</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">12345</field>
      </shadow>
    </value>
    <value name="val">
      <shadow type="text">
        <field name="TEXT">buf</field>
      </shadow>
    </value>
  </block>
</category>
`;

}

exports = addToolbox;
