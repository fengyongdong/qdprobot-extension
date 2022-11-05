/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_BLE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY2OTI3OTI5OTY5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzNjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTc2Mi44OCA5NzYuNTEySDI1OC41NmMtMTE0LjU2IDAtMjA3LjM2LTkyLjgtMjA3LjM2LTIwNy4zNlYyNjQuNzA0YzAtMTE0LjU2IDkyLjgtMjA3LjM2IDIwNy4zNi0yMDcuMzZoNTA0LjMyYzExNC41NiAwIDIwNy4zNiA5Mi44IDIwNy4zNiAyMDcuMzZ2NTA0LjQ0OGMwIDExNC41Ni05Mi44IDIwNy4zNi0yMDcuMzYgMjA3LjM2eiIgZmlsbD0iIzAwNzlGNSIgcC1pZD0iMzM2NiIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTAiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPjxwYXRoIGQ9Ik02NzEuNDg4IDM4NS4wMjRMNTEyLjg5NiAyMjguNzM2Yy0xMi42NzItMTIuNTQ0LTM0LjE3Ni0zLjQ1Ni0zNC4xNzYgMTQuMzM2VjQzOS4xNjhsLTEwMC4wOTYtOTMuOTUyYy0xLjQwOC0xLjQwOC0zLjcxMi0xLjI4LTUuMTIgMC4xMjhsLTI4LjU0NCAzMC4zMzZjLTEuNDA4IDEuNDA4LTEuMjggMy43MTIgMC4xMjggNS4xMmwxMzMuNjMyIDEyNS40NHYxOC44MTZsLTEzMy41MDQgMTI0LjE2Yy0xLjQwOCAxLjQwOC0xLjUzNiAzLjcxMi0wLjEyOCA1LjEybDI4LjQxNiAzMC40NjRjMS40MDggMS40MDggMy43MTIgMS41MzYgNS4xMiAwLjEyOGwxMDAuMjI0LTkzLjE4NHYxOTguOTEyYzAgMTcuNzkyIDIxLjUwNCAyNi44OCAzNC4xNzYgMTQuMzM2TDY3MS40ODggNjQ4Ljk2YzcuOTM2LTcuODA4IDcuOTM2LTIwLjczNiAwLTI4LjY3Mkw1ODEuMTIgNTMxLjMyOGMtNy45MzYtNy44MDgtNy45MzYtMjAuNzM2IDAtMjguNjcybDkwLjM2OC04OS4wODhjOC4wNjQtNy44MDggOC4wNjQtMjAuNzM2IDAtMjguNTQ0eiBtLTE0My44NzItNzMuMDg4bDg3LjU1MiA4Ni4yNzItODcuMDQgODAuODk2LTAuNTEyLTAuNTEyVjMxMS45MzZ6IG0wIDI0My4zMjhsMS42NjQtMS41MzYgODYuNjU2IDgxLjI4LTg4LjE5MiA4Ni45MTJWNTU1LjI2NHoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjMzNjciIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiBjbGFzcz0ic2VsZWN0ZWQiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_QH_BLE_CATEGORY}" id="QH_BLE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_BLE_ICO}">
  <block type="communicate_bluetooth_central_init">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">C_b</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_peripheral_init">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">P_b</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">QDProbot</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_scan">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">B1</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_connect">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">B1</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">QDProbot</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_is_connected">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">B1</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_send">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">B1</field>
      </shadow>
    </value>
    <value name="data">
      <shadow type="text">
        <field name="TEXT">QDProbot</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_recv">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">B1</field>
      </shadow>
    </value>
    <value name="METHOD">
      <shadow type="text">
        <field name="TEXT">ble_method</field>
      </shadow>
    </value>
  </block>
  <block type="communicate_bluetooth_method">
    <value name="NAME">
      <shadow type="text">
        <field name="TEXT">ble_method</field>
      </shadow>
    </value>
    <statement name="DO">
        <block type="control_if">
          <value name="CONDITION">
            <block type="operator_equals">
              <value name="OPERAND1">
                <shadow type="data_variable">
                  <field name="VARIABLE">data</field>
                </shadow>
              </value>
              <value name="OPERAND2">
                <shadow type="text">
                  <field name="TEXT">QDProbot1</field>
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
