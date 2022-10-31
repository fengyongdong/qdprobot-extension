/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SERIAL_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MDE1NzQ1NTc2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU4NzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTg3OCA1MTJWMzA4LjdjMC0xMTEuOC05MS41LTIwMy4zLTIwMy4zLTIwMy4zcy0yMDMuMyA5MS41LTIwMy4zIDIwMy4zdjQwNi43YzAgNjcuMy01NC43IDEyMi0xMjIgMTIycy0xMjItNTQuNy0xMjItMTIyVjUxMmg4MS4zVjE4Ni43aC0yNDRWNTEySDE0NnYyMDMuM2MwIDExMS44IDkxLjUgMjAzLjMgMjAzLjMgMjAzLjNzMjAzLjMtOTEuNSAyMDMuMy0yMDMuM1YzMDguN2MwLTY3LjMgNTQuNy0xMjIgMTIyLTEyMnMxMjIgNTQuNyAxMjIgMTIyVjUxMmgtODEuM3YzMjUuM2gyNDRWNTEySDg3OHpNMTQ2IDI2OGg4MS4zdjE2Mi43SDE0NlYyNjh6IG03MzIgNDg4aC04MS4zVjU5My4zSDg3OFY3NTZ6IiBwLWlkPSI1ODc5IiBmaWxsPSIjOWZhNTViIj48L3BhdGg+PC9zdmc+";

    return `
<category name="%{BKY_QH_ESP32_UART_CATEGORY}" id="QH_ESP32_UART_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SERIAL_ICO}">
  <block type="PY_qdp_esp32_serial_softserial">
      <field name="RX">21</field>
      <field name="TX">22</field>
  </block>  
  <block type="PY_qdp_esp32_serial_print">
    <value name="CONTENT">
      <shadow type="text">
        <field name="TEXT">hello</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_esp32_serial_any"></block>
  <block type="PY_qdp_esp32_serial_read"></block>
  <block type="PY_qdp_esp32_serial_read_byte">
    <value name="bytesnum">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
    </value>
  </block>
</category>
`;

}

exports = addToolbox;
