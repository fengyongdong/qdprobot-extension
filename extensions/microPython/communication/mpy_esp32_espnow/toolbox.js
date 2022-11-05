/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_ESPNOW_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMzAiIHdpZHRoPSIxMzAiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDx0ZXh0IGZvbnQtd2VpZ2h0PSJib2xkIiBzdHJva2U9IiMwMDAiIHRyYW5zZm9ybT0ibWF0cml4KDIuMDQwOTU2NTgxMjMzMjc0NCwwLDAsNC40NjEyNDEzNTMzNjg2NTQsLTg2Ljc4OTM5NTUzMTkzNTI0LC0xNjEuNzIzODgzNTI1NzU0MjcpICIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18xIiB5PSI1OC42Njc4MzUiIHg9IjQyLjU2NDk1MyIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzQ2NjczRCI+Tk9XPC90ZXh0PgogPC9nPgo8L3N2Zz4=";

    return `
<category name="%{BKY_QH_ESP32_ESPNOW_CATEGORY}" id="QH_ESP32_ESPNOW_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_ESPNOW_ICO}">
  <block type="communicate_espnow_init">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
    <value name="CHNL">
      <shadow type="espnow_channel">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="network_espnow_mac">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
  </block>
  <block type="network_espnow_info">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
  </block>
  <block type="network_espnow_send">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
    <value name="mac">
      <shadow type="text">
        <field name="TEXT">FFFFFFFFFFFF</field>
      </shadow>
    </value>
    <value name="content">
      <shadow type="text">
        <field name="TEXT">QDProbot</field>
      </shadow>
    </value>
  </block>
  <block type="network_espnow_recv">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
  </block>        
  <block type="network_espnow_recv_handle">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">my_now</field>
      </shadow>
    </value>
    <value name="METHOD">
      <shadow type="text">
        <field name="TEXT">cb</field>
      </shadow>
    </value>
  </block>
  <block type="network_espnow_recv_method">
    <value name="NAME">
      <shadow type="text">
        <field name="TEXT">cb</field>
      </shadow>
    </value>
    <statement name="DO">
      <block type="control_if">
        <value name="CONDITION">
          <block type="operator_equals">
            <value name="OPERAND1">
              <shadow type="data_variable">
                <field name="VARIABLE">msg</field>
              </shadow>
            </value>
            <value name="OPERAND2">
              <shadow type="text">
                <field name="TEXT">1</field>
              </shadow>
            </value>
          </block>
        </value>
      </block>
    </statement>
  </block>
</category>
`;

}

exports = addToolbox;
