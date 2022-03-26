/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_BLYNK_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIxOTE0NDM4MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC4yNyA1NTguMjhINDIzLjV2MTg0LjU1bDExMC44MyAwLjQ1YzUxLjEgMCA5Mi42Ny00MS41MiA5Mi42Ny05Mi41cy00MS42LTkyLjUtOTIuNzMtOTIuNXpNNTM0LjI3IDMwMy4yOGwtMTEwLjc3LTAuMTF2MTg1LjExaDExMC43N2M1MS4xMyAwIDkyLjczLTQxLjUgOTIuNzMtOTIuNXMtNDEuNi05Mi41LTkyLjczLTkyLjV6IiBmaWxsPSIjMjRjNDhlIiBwLWlkPSIzNDEzIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMzUuMmE0ODQuNDcgNDg0LjQ3IDAgMSAwIDM4IDE4OCA0ODEuMzQgNDgxLjM0IDAgMCAwLTM4LTE4OHpNNjk3IDY1MC43OGMwIDg5LjYtNzMgMTYyLjUtMTYyLjczIDE2Mi41aC0wLjE0bC0xMjEuOTMtMC41Yy0zMi4zNyAwLTU4LjctMjYuNjctNTguNy01OS4zOVYyOTIuNTVjMC0zMi43NSAyNi4zNy01OS4zOSA1OC43OC01OS4zOWwxMjIgMC4xM2M4OS43IDAgMTYyLjcgNzIuOSAxNjIuNyAxNjIuNWExNjIuMiAxNjIuMiAwIDAgMS02MS45NSAxMjcuNUExNjIuMiAxNjIuMiAwIDAgMSA2OTcgNjUwLjc4eiIgZmlsbD0iIzI0YzQ4ZSIgcC1pZD0iMzQxNCI+PC9wYXRoPjwvc3ZnPg==';
    return `
<category name="%{BKY_QDP_BLYNK_CATEGORY}" id="QDP_BLYNK_CATEGORY" colour="#FF3399" secondaryColour="#FF3399" iconURI="${QH_BLYNK_ICO}">
    <block type="SimpleBlynk_init" id="SimpleBlynk_init">
        <value name="pin1">
            <shadow type="text">
                <field name="TEXT">2</field>
            </shadow>
        </value>
        <value name="pin2">
            <shadow type="text">
                <field name="TEXT">8</field>
            </shadow>
        </value>
        <value name="qdp_wifi_ssid">
            <shadow type="text">
                <field name="TEXT">QDP</field>
            </shadow>
        </value>
        <value name="qdp_wifi_pass">
            <shadow type="text">
                <field name="TEXT">www.qdprobot.com</field>
            </shadow>
        </value>
        <value name="auth">
            <shadow type="text">
                <field name="TEXT">getwTFQ55KJLQ4ZVbvCYDQdiAJ4hTBMM</field>
            </shadow>
        </value>
        <value name="ip">
            <shadow type="text">
                <field name="TEXT">182,61,28,31</field>
            </shadow>
        </value>
    </block>
    <block type="SimpleBlynk_CONNECTION_EVENT" id="SimpleBlynk_CONNECTION_EVENT"></block>
    <block type="SimpleBlynk_ReadBlynkData">
        <statement name="DO">
            <block type="SimpleBlynk_RETRIEVE_DATA">
                <field name="Vpin">V0</field>
                <statement name="DO">
                    <block type="serialPrint">
                        <value name="VALUE">
                            <block type="SimpleBlynk_ReadData"></block>
                        </value>
                    </block>
                </statement>
            </block>
        </statement>
    </block>
    <block type="SimpleBlynk_ONBOARD_BROADCAST">
      <value name="value">
        <shadow type="QDPESP8266Voice_Dropdown">
          <field name="PIN2">0</field>
        </shadow>
      </value>
    </block>
    <block type="SimpleBlynk_BLYNK_WRITE">
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="SimpleBlynk_RESTART"></block>
    <label text="------"></label>  
    <block type="SimpleBlynk_RETRIEVE_DATA">
        <field name="Vpin">V0</field>
    </block>
    <block type="serialPrint">
        <value name="VALUE">
           <shadow type="text">
                <field name="TEXT">2</field>
            </shadow>
        </value>
    </block>
    <block type="SimpleBlynk_ReadData"></block>
</category>
`;
}

exports = addToolbox;
