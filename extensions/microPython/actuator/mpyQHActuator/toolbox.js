/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_Actuator_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J00yMTMuMzMzMzMzIDg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjYtNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjcgNDIuNjY2NjY2djE3MC42NjY2NjdIODUuMzMzMzMzYy0yMy40NjY2NjcgMC00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY3djIxMy4zMzMzMzNoMjU2VjI5OC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2N0gyMTMuMzMzMzMzVjg1LjMzMzMzM3ogbTE3MC42NjY2NjcgNTk3LjMzMzMzNGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjctNDIuNjY2NjY2di0xMzUuNjhjNDkuNDkzMzMzLTE3LjQ5MzMzMyA4NS4zMzMzMzMtNjQuNDI2NjY3IDg1LjMzMzMzMy0xMjAuMzJ2LTg1LjMzMzMzNEgzODR2ODUuMzMzMzM0eiBtLTM0MS4zMzMzMzMgMGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjYtNDIuNjY2NjY2di0xMzUuNjhDMjYyLjgyNjY2NyA3ODUuMDY2NjY3IDI5OC42NjY2NjcgNzM4LjEzMzMzMyAyOTguNjY2NjY3IDY4Mi42NjY2Njd2LTg1LjMzMzMzNEg0Mi42NjY2Njd2ODUuMzMzMzM0ek04OTYgMjU2Vjg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY2djE3MC42NjY2NjdoLTQyLjY2NjY2N2MtMjMuNDY2NjY3IDAtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2N3YyMTMuMzMzMzMzaDI1NlYyOTguNjY2NjY3YzAtMjMuNDY2NjY3LTE5LjItNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2NjdoLTQyLjY2NjY2N3ogbS0zNDEuMzMzMzMzLTE3MC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2NnMtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2NnYxNzAuNjY2NjY3aC00Mi42NjY2NjZjLTIzLjQ2NjY2NyAwLTQyLjY2NjY2NyAxOS4yLTQyLjY2NjY2NyA0Mi42NjY2Njd2MjEzLjMzMzMzM2gyNTZWMjk4LjY2NjY2N2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3aC00Mi42NjY2NjZWODUuMzMzMzMzeiBtMTcwLjY2NjY2NiA1OTcuMzMzMzM0YzAgNTUuNDY2NjY3IDM1Ljg0IDEwMi40IDg1LjMzMzMzNCAxMjAuMzJWOTM4LjY2NjY2N2MwIDIzLjQ2NjY2NyAxOS4yIDQyLjY2NjY2NyA0Mi42NjY2NjYgNDIuNjY2NjY2czQyLjY2NjY2Ny0xOS4yIDQyLjY2NjY2Ny00Mi42NjY2NjZ2LTEzNS42OGM0OS40OTMzMzMtMTcuNDkzMzMzIDg1LjMzMzMzMy02NC40MjY2NjcgODUuMzMzMzMzLTEyMC4zMnYtODUuMzMzMzM0aC0yNTZ2ODUuMzMzMzM0eicgZmlsbD0nIzU4NzREQyc+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Actuator_ICO}">
    <block type="PY_qdp_k210_actuator_led_init">
    </block>
    <block type="PY_qdp_k210_actuator_led_bright">
      <value name="bright">
        <shadow type="ledswitch">
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_actuator_ws2812_init">
    <field name="PIN">10</field>
    <value name="LEDCOUNT">
      <shadow type="math_number">
        <field name="NUM">5</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_actuator_ws2812_set_led">
    <value name="_LED_">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="RVALUE">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="GVALUE">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="BVALUE">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_actuator_ws2812_display">
    <value name="SUB">
      <shadow type="variables_get">
        <field name="VAR">rgb</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_actuator_Servo_init">
    <value name="PIN">
      <shadow type="pins_digital_pin">
        <field name="PIN">2</field>
      </shadow>
    </value>
    <value name="time">
      <shadow type="TIM_SELET">
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_actuator_Servo">
    <value name="PIN">
      <shadow type="pins_digital_pin">
        <field name="PIN">2</field>
      </shadow>
    </value>
    <value name="range">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
</category>
`;

}

exports = addToolbox;
