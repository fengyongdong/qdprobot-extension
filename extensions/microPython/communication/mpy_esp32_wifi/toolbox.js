/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_WIFI_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzODEyMDc3NTg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4ODMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTUxMS44IDc2Mm0tOTQuNSAwYTk0LjUgOTQuNSAwIDEgMCAxODkgMCA5NC41IDk0LjUgMCAxIDAtMTg5IDBaIiBmaWxsPSIjNWI2ZGE1IiBwLWlkPSIxODg0Ij48L3BhdGg+PHBhdGggZD0iTTY5NS41IDY1OC4ybDU3LjYtNjZjLTUzLjItNzYuMi0xNDEuNS0xMjYtMjQxLjMtMTI2LTk5LjcgMC0xODcuOCA0OS42LTI0MSAxMjUuNWw1Ny43IDY2LjFjMzYtNjQuMSAxMDQuNi0xMDcuNSAxODMuMy0xMDcuNSA3OC43IDAgMTQ3LjQgNDMuMyAxODMuMyAxMDcuNSIgZmlsbD0iIzViNmRhNSIgcC1pZD0iMTg4NSI+PC9wYXRoPjxwYXRoIGQ9Ik02OTUuNSA2NTljLTAuMiAwLTAuNC0wLjEtMC41LTAuMmwtMC4yLTAuMmMtMC4yLTAuMS0wLjMtMC4yLTAuNC0wLjQtMzctNjYtMTA3LTEwNy4xLTE4Mi42LTEwNy4xcy0xNDUuNiA0MS0xODIuNiAxMDdjMCAwLjEtMC4xIDAuMi0wLjIgMC4zLTAuMyAwLjMtMC44IDAuMy0xLjEtMC4xbC01Ny43LTY2LjFjLTAuMS0wLjEtMC4yLTAuMy0wLjItMC40IDAtMC4yIDAtMC40IDAuMS0wLjYgNTUuMi03OC44IDE0NS42LTEyNS44IDI0MS43LTEyNS44IDk2LjMgMCAxODYuOCA0Ny4yIDI0MiAxMjYuMiAwLjEgMC4yIDAuMiAwLjUgMC4xIDAuNyAwIDAuMS0wLjEgMC4yLTAuMiAwLjNsLTU3LjUgNjZjLTAuMyAwLjMtMC41IDAuNC0wLjcgMC40ek01MTEuOCA1NDkuNWM3NiAwIDE0Ni40IDQxLjEgMTgzLjcgMTA3LjNMNzUyIDU5MmMtNTQuOS03OC4zLTE0NC43LTEyNS0yNDAuMy0xMjUtOTUuMyAwLTE4NSA0Ni42LTI0MCAxMjQuNmw1Ni41IDY0LjhjMzcuNS02NS45IDEwNy43LTEwNi45IDE4My42LTEwNi45eiIgZmlsbD0iIzViNmRhNSIgcC1pZD0iMTg4NiI+PC9wYXRoPjxwYXRoIGQ9Ik04NTguOCA0NzAuOWwtNTQgNjEuOWMtNjcuNy04Ny42LTE3My44LTE0NC4xLTI5My0xNDQuMS0xMTkuMSAwLTIyNSA1Ni4zLTI5Mi43IDE0My43bC01NC02MS45YzgyLjUtOTkuNyAyMDcuMi0xNjMuMiAzNDYuNy0xNjMuMiAxMzkuNyAwIDI2NC41IDYzLjcgMzQ3IDE2My42IiBmaWxsPSIjNWI2ZGE1IiBwLWlkPSIxODg3Ij48L3BhdGg+PHBhdGggZD0iTTgwNC44IDUzMy42Yy0wLjMgMC0wLjUtMC4xLTAuNy0wLjQtNzAuNS05MS4zLTE3Ny4xLTE0My42LTI5Mi4zLTE0My42LTExNSAwLTIyMS41IDUyLjItMjkyIDE0My4zIDAgMC4xLTAuMSAwLjEtMC4xIDAuMi0wLjMgMC4zLTAuOCAwLjMtMS4xIDBsLTAuMS0wLjEtNTQtNjEuOWMtMC4zLTAuMy0wLjMtMC43IDAtMS4xIDg2LTEwMy45IDIxMi42LTE2My41IDM0Ny4zLTE2My41IDEzNSAwIDI2MS43IDU5LjggMzQ3LjcgMTY0IDAuMyAwLjMgMC4yIDAuOS0wLjEgMS4xLTAuMSAwLjEtMC4yIDAuMS0wLjIgMC4xbC01My43IDYxLjVjLTAuMiAwLjMtMC40IDAuNC0wLjcgMC40eiBtLTI5My0xNDUuN2M1OC41IDAgMTE0LjQgMTMuMiAxNjYuMiAzOS4zIDQ5LjIgMjQuNyA5MyA2MC44IDEyNi44IDEwNC4zbDUyLjktNjAuNkM3NzIgMzY3LjQgNjQ2IDMwOC4xIDUxMS44IDMwOC4xYy0xMzQgMC0yNjAgNTkuMi0zNDUuNiAxNjIuNGw1Mi45IDYwLjZjMzMuOC00My41IDc3LjctNzkuNCAxMjYuNy0xMDQuMSA1MS43LTI1LjkgMTA3LjYtMzkuMSAxNjYtMzkuMXoiIGZpbGw9IiM1YjZkYTUiIHAtaWQ9IjE4ODgiPjwvcGF0aD48cGF0aCBkPSJNOTU5LjUgMzU1LjRsLTUyLjIgNTkuOEM4MTEuNyAzMDQgNjY5LjkgMjMzLjYgNTExLjggMjMzLjZjLTE1OCAwLTI5OS42IDcwLjItMzk1LjMgMTgxLjJsLTUxLjItNTguN2MxMDkuNS0xMjIuOSAyNjktMjAwLjIgNDQ2LjUtMjAwLjIgMTc3LjYgMCAzMzcuMiA3Ny41IDQ0Ni43IDIwMC41IiBmaWxsPSIjNWI2ZGE1IiBwLWlkPSIxODg5Ij48L3BhdGg+PHBhdGggZD0iTTkwNy40IDQxNmMtMC4yIDAtMC4zIDAtMC41LTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yLTAuMi05OS4yLTExNS4xLTI0My4xLTE4MS4yLTM5NS0xODEuMi0xNTEuNiAwLTI5NS41IDY1LjktMzk0LjYgMTgwLjggMCAwLjEtMC4xIDAuMS0wLjEgMC4xLTAuMyAwLjMtMC44IDAuMy0xLjEtMC4xbC01MS4yLTU4LjdjLTAuMS0wLjEtMC4yLTAuMy0wLjItMC41czAtMC41IDAuMi0wLjZjNTUuNy02Mi40IDEyMi4zLTExMS43IDE5OC0xNDYuNCA3OC40LTM1LjkgMTYyLjItNTQuMSAyNDkuMS01NC4xIDg3IDAgMTcwLjggMTguMiAyNDkuMiA1NC4yIDc1LjYgMzQuNiAxNDIgODMuOCAxOTcuNiAxNDZsMC4zLTAuNGMwLjMtMC4zIDAuOC0wLjQgMS4yLTAuMSAwLjMgMC4zIDAuNCAwLjggMC4xIDEuMkw5MDggNDE1LjdjLTAuMiAwLjItMC40IDAuMy0wLjYgMC4zek01MTEuOCAyMzIuOGMxNTIgMCAyOTYuMiA2NiAzOTUuNiAxODEuMWw1MC4xLTU3LjRjLTExMy4zLTEyNy0yNzUuNy0xOTkuOC00NDUuOC0xOTkuOC0xNjkuOSAwLTMzMi4yIDcyLjctNDQ1LjQgMTk5LjRsNTAuMSA1Ny40Yzk5LjUtMTE0LjggMjQzLjUtMTgwLjcgMzk1LjQtMTgwLjd6IiBmaWxsPSIjNWI2ZGE1IiBwLWlkPSIxODkwIj48L3BhdGg+PC9zdmc+";

    return `
<category name="%{BKY_QH_WIFI_CATEGORY}" id="QH_WIFI_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_WIFI_ICO}">
    <block type="iot_wifi_connect">
        <value name="WIFINAME">
          <shadow type="text">
            <field name="TEXT">wifiname</field>
          </shadow>
        </value>
        <value name="PASSWORD">
          <shadow type="text">
            <field name="TEXT">wifipassword</field>
          </shadow>
        </value>
      </block>
      <block type="network_init"></block>
      <block type="network_open"></block>

      <block type="network_is_active"></block>
      <block type="network_scan"></block>
      <block type="network_connect">
        <value name="id">
          <shadow type="text">
            <field name="TEXT">wifi_ssid</field>
          </shadow>
        </value>
        <value name="password">
          <shadow type="text">
            <field name="TEXT">01234567</field>
          </shadow>
        </value>
      </block>
      <block type="network_wifi_connect"></block>
      <block type="network_get_connect"></block>
      <block type="network_stop"></block>
      <block type="network_get_wifi"></block>
      <block type="network_ap_connect">
        <value name="essid">
          <shadow type="text">
            <field name="TEXT">127.16.0.8</field>
          </shadow>
        </value>
        <value name="channel">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
</category>
`;

}

exports = addToolbox;
