/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_BLYNK_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIxOTE0NDM4MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC4yNyA1NTguMjhINDIzLjV2MTg0LjU1bDExMC44MyAwLjQ1YzUxLjEgMCA5Mi42Ny00MS41MiA5Mi42Ny05Mi41cy00MS42LTkyLjUtOTIuNzMtOTIuNXpNNTM0LjI3IDMwMy4yOGwtMTEwLjc3LTAuMTF2MTg1LjExaDExMC43N2M1MS4xMyAwIDkyLjczLTQxLjUgOTIuNzMtOTIuNXMtNDEuNi05Mi41LTkyLjczLTkyLjV6IiBmaWxsPSIjMjRjNDhlIiBwLWlkPSIzNDEzIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMzUuMmE0ODQuNDcgNDg0LjQ3IDAgMSAwIDM4IDE4OCA0ODEuMzQgNDgxLjM0IDAgMCAwLTM4LTE4OHpNNjk3IDY1MC43OGMwIDg5LjYtNzMgMTYyLjUtMTYyLjczIDE2Mi41aC0wLjE0bC0xMjEuOTMtMC41Yy0zMi4zNyAwLTU4LjctMjYuNjctNTguNy01OS4zOVYyOTIuNTVjMC0zMi43NSAyNi4zNy01OS4zOSA1OC43OC01OS4zOWwxMjIgMC4xM2M4OS43IDAgMTYyLjcgNzIuOSAxNjIuNyAxNjIuNWExNjIuMiAxNjIuMiAwIDAgMS02MS45NSAxMjcuNUExNjIuMiAxNjIuMiAwIDAgMSA2OTcgNjUwLjc4eiIgZmlsbD0iIzI0YzQ4ZSIgcC1pZD0iMzQxNCI+PC9wYXRoPjwvc3ZnPg==';

    return `
<category name="%{BKY_QH_MPY_BLYNK_CATEGORY}" id="QH_MPY_BLYNK_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_BLYNK_ICO}">
   <block type="mpython_blynk_setup">
    <value name="server">
      <shadow type="text">
        <field name="TEXT">182.61.28.31</field>
      </shadow>
    </value>
    <value name="port">
      <shadow type="math_number">
        <field name="NUM">8080</field>
      </shadow>
    </value>
    <value name="auth">
      <shadow type="text">
        <field name="TEXT">AUTH TOKEN</field>
      </shadow>
    </value>
   </block>
    <block type="mpython_blynk_app_data">
      <value name="virtual_pin">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="virtual_pin_val">
        <shadow type="mpy_variables_name">
            <value name="name">
              <shadow type="text">
                <field name="TEXT">_value</field>
              </shadow>
            </value>
        </shadow>
      </value>
      <statement name="DO">
        <block type="microPython_console_consolePrint">
          <value name="TEXT">
            <shadow type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">_value</field>
                  </shadow>
                </value>
            </shadow>
          </value>
        </block>
      </statement>
    </block>
    <block type="mpython_blynktimer">
      <value name="Num">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="period">
        <shadow type="math_number">
          <field name="NUM">2</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynk_get_timers"></block>
    <block type="mpython_blynk_stop_timers">
      <value name="timer_num">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynktimer_run"></block>
    <block type="mpython_blynk_run"></block>
    <block type="mpython_blynk_sensor_data_to_app">
      <value name="sensor_data">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="virtual_pin">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynk_app_notify">
      <value name="notification">
        <shadow type="text">
          <field name="TEXT">notify</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynk_on_connected">
        <statement name="DO">
          <block type="microPython_console_consolePrint">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">connected</field>
              </shadow>
            </value>
          </block>
        </statement>
    </block>  
    <block type="mpython_blynk_on_disconnected">
      <statement name="DO">
        <block type="microPython_console_consolePrint">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">disconnected</field>
            </shadow>
          </value>
        </block>
      </statement>
    </block> 
    <block type="mpython_blynk_sync_virtual">
      <value name="virtual_pin">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynk_email">
      <value name="TargetEmail">
        <shadow type="text">
          <field name="TEXT">Your Target Email</field>
        </shadow>
      </value>
      <value name="subject">
        <shadow type="text">
          <field name="TEXT">subject</field>
        </shadow>
      </value>
      <value name="body">
        <shadow type="text">
          <field name="TEXT">body</field>
        </shadow>
      </value>
    </block>
    <block type="mpython_blynk_set_property">
      <value name="virtual_pin">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="attribute_name">
        <shadow type="text">
          <field name="TEXT">color</field>
        </shadow>
      </value>
      <value name="attribute_value">
        <shadow type="text">
          <field name="TEXT">#FF0000</field>
        </shadow>
      </value>
    </block>
</category>
`;

}

exports = addToolbox;
