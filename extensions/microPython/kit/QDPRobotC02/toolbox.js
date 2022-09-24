/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_Sensor_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNODM2LjQxNiAxODcuNzU0NjY3QTQ1Ny4yMzczMzMgNDU3LjIzNzMzMyAwIDAgMSA5NzAuNjY2NjY3IDUxMmE0NTcuMTczMzMzIDQ1Ny4xNzMzMzMgMCAwIDEtMTI3LjMxNzMzNCAzMTcuMTYyNjY3bC02LjY1NiA2LjgwNTMzMy00NS4zMTItNDUuMjI2NjY3QTM5My4yNTg2NjcgMzkzLjI1ODY2NyAwIDAgMCA5MDYuNjY2NjY3IDUxMmEzOTMuMTczMzMzIDM5My4xNzMzMzMgMCAwIDAtMTA5LjEyLTI3Mi40MjY2NjdsLTYuNC02LjU3MDY2NiA0NS4yNjkzMzMtNDUuMjI2NjY3ek0xODcuOTY4IDE4Ny4zOTJsNDUuMjI2NjY3IDQ1LjI5MDY2N0EzOTMuMjU4NjY3IDM5My4yNTg2NjcgMCAwIDAgMTE3LjMzMzMzMyA1MTJhMzkzLjE3MzMzMyAzOTMuMTczMzMzIDAgMCAwIDEwOC44IDI3Mi4wODUzMzNsNi4zNzg2NjcgNi41NDkzMzQtNDUuMzMzMzMzIDQ1LjIwNTMzM0E0NTcuMjM3MzMzIDQ1Ny4yMzczMzMgMCAwIDEgNTMuMzMzMzMzIDUxMmMwLTEyMy40MTMzMzMgNDkuMDI0LTIzOS4xNDY2NjcgMTM0LjYxMzMzNC0zMjQuNjA4eiBtOTAuNTM4NjY3IDkwLjQ3NDY2N2w0NS4xODQgNDUuMzEyQTI2NS42ODUzMzMgMjY1LjY4NTMzMyAwIDAgMCAyNDUuMzMzMzMzIDUxMmMwIDY5LjU0NjY2NyAyNi42ODggMTM0Ljc0MTMzMyA3My42IDE4My45NTczMzNsNS4yOTA2NjcgNS4zOTczMzQtNDUuMDU2IDQ1LjQ0QTMyOS42ODUzMzMgMzI5LjY4NTMzMyAwIDAgMSAxODEuMzMzMzMzIDUxMmMwLTg5LjAyNCAzNS4zOTItMTcyLjUyMjY2NyA5Ny4xNzMzMzQtMjM0LjEzMzMzM3ogbTQ2Ny4zMjggMC4zMkEzMjkuNjY0IDMyOS42NjQgMCAwIDEgODQyLjY2NjY2NyA1MTJhMzI5LjYgMzI5LjYgMCAwIDEtOTEuMTU3MzM0IDIyNy45ODkzMzNsLTUuODg4IDYuMDM3MzM0LTQ1LjIyNjY2Ni00NS4zMTJBMjY1LjY4NTMzMyAyNjUuNjg1MzMzIDAgMCAwIDc3OC42NjY2NjcgNTEyYTI2NS42IDI2NS42IDAgMCAwLTcyLjg1MzMzNC0xODMuMTY4bC01LjI0OC01LjM3NiA0NS4yNjkzMzQtNDUuMjY5MzMzeiBtLTM3Ny41Nzg2NjcgOTAuOTQ0bDQ1LjM5NzMzMyA0NS4xMkExMzguMTEyIDEzOC4xMTIgMCAwIDAgMzczLjMzMzMzMyA1MTJjMCAzNS4yODUzMzMgMTMuMjA1MzMzIDY4LjM5NDY2NyAzNi41MDEzMzQgOTMuNzZsNC4yMjQgNC4zOTQ2NjctNDUuMjI2NjY3IDQ1LjMxMkEyMDIuMDkwNjY3IDIwMi4wOTA2NjcgMCAwIDEgMzA5LjMzMzMzMyA1MTJhMjAyLjA5MDY2NyAyMDIuMDkwNjY3IDAgMCAxIDU4LjkyMjY2Ny0xNDIuODY5MzMzeiBtMjg3LjM2LTAuMTI4QTIwMi4wOTA2NjcgMjAyLjA5MDY2NyAwIDAgMSA3MTQuNjY2NjY3IDUxMmEyMDIuMDI2NjY3IDIwMi4wMjY2NjcgMCAwIDEtNTQuMDE2IDEzNy43NDkzMzNsLTQuNzc4NjY3IDQuOTkyLTQ1LjQ0LTQ1LjA3NzMzM0ExMzguMDkwNjY3IDEzOC4wOTA2NjcgMCAwIDAgNjUwLjY2NjY2NyA1MTJhMTM4LjAyNjY2NyAxMzguMDI2NjY3IDAgMCAwLTM1Ljk4OTMzNC05My4xODRsLTQuNDE2LTQuNjUwNjY3IDQ1LjM1NDY2Ny00NS4xNjI2NjZ6TTUxMiA0MjYuNjY2NjY3YTg1LjMzMzMzMyA4NS4zMzMzMzMgMCAxIDEgMCAxNzAuNjY2NjY2IDg1LjMzMzMzMyA4NS4zMzMzMzMgMCAwIDEgMC0xNzAuNjY2NjY2eicgZmlsbD0nI0UwNkM3OCc+PC9wYXRoPjwvc3ZnPg==";

    const QH_Actuator_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J00yMTMuMzMzMzMzIDg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjYtNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjcgNDIuNjY2NjY2djE3MC42NjY2NjdIODUuMzMzMzMzYy0yMy40NjY2NjcgMC00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY3djIxMy4zMzMzMzNoMjU2VjI5OC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2N0gyMTMuMzMzMzMzVjg1LjMzMzMzM3ogbTE3MC42NjY2NjcgNTk3LjMzMzMzNGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjctNDIuNjY2NjY2di0xMzUuNjhjNDkuNDkzMzMzLTE3LjQ5MzMzMyA4NS4zMzMzMzMtNjQuNDI2NjY3IDg1LjMzMzMzMy0xMjAuMzJ2LTg1LjMzMzMzNEgzODR2ODUuMzMzMzM0eiBtLTM0MS4zMzMzMzMgMGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjYtNDIuNjY2NjY2di0xMzUuNjhDMjYyLjgyNjY2NyA3ODUuMDY2NjY3IDI5OC42NjY2NjcgNzM4LjEzMzMzMyAyOTguNjY2NjY3IDY4Mi42NjY2Njd2LTg1LjMzMzMzNEg0Mi42NjY2Njd2ODUuMzMzMzM0ek04OTYgMjU2Vjg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY2djE3MC42NjY2NjdoLTQyLjY2NjY2N2MtMjMuNDY2NjY3IDAtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2N3YyMTMuMzMzMzMzaDI1NlYyOTguNjY2NjY3YzAtMjMuNDY2NjY3LTE5LjItNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2NjdoLTQyLjY2NjY2N3ogbS0zNDEuMzMzMzMzLTE3MC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2NnMtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2NnYxNzAuNjY2NjY3aC00Mi42NjY2NjZjLTIzLjQ2NjY2NyAwLTQyLjY2NjY2NyAxOS4yLTQyLjY2NjY2NyA0Mi42NjY2Njd2MjEzLjMzMzMzM2gyNTZWMjk4LjY2NjY2N2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3aC00Mi42NjY2NjZWODUuMzMzMzMzeiBtMTcwLjY2NjY2NiA1OTcuMzMzMzM0YzAgNTUuNDY2NjY3IDM1Ljg0IDEwMi40IDg1LjMzMzMzNCAxMjAuMzJWOTM4LjY2NjY2N2MwIDIzLjQ2NjY2NyAxOS4yIDQyLjY2NjY2NyA0Mi42NjY2NjYgNDIuNjY2NjY2czQyLjY2NjY2Ny0xOS4yIDQyLjY2NjY2Ny00Mi42NjY2NjZ2LTEzNS42OGM0OS40OTMzMzMtMTcuNDkzMzMzIDg1LjMzMzMzMy02NC40MjY2NjcgODUuMzMzMzMzLTEyMC4zMnYtODUuMzMzMzM0aC0yNTZ2ODUuMzMzMzM0eicgZmlsbD0nIzU4NzREQyc+PC9wYXRoPjwvc3ZnPg==";

    const QH_OTHER_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNTA4LjE2IDkwOS45MjY0Yy01My44MTEyIDAtMTA2LjAzNTItMTAuNTQ3Mi0xNTUuMTg3Mi0zMS4zMzQ0LTQ3LjQ2MjQtMjAuMDcwNC05MC4xMTItNDguODQ0OC0xMjYuNzItODUuNDAxNmEzOTcuMjI0OTYgMzk3LjIyNDk2IDAgMCAxLTg1LjQwMTYtMTI2LjcyYy0yMC43ODcyLTQ5LjE1Mi0zMS4zMzQ0LTEwMS4zNzYtMzEuMzM0NC0xNTUuMTg3MnMxMC41NDcyLTEwNi4wMzUyIDMxLjMzNDQtMTU1LjE4NzJjMjAuMDcwNC00Ny40NjI0IDQ4Ljc5MzYtOTAuMTEyIDg1LjQwMTYtMTI2Ljcyczc5LjIwNjQtNjUuMzMxMiAxMjYuNzItODUuNDAxNmM0OS4xNTItMjAuNzg3MiAxMDEuMzc2LTMxLjMzNDQgMTU1LjE4NzItMzEuMzM0NHMxMDYuMDM1MiAxMC41NDcyIDE1NS4xODcyIDMxLjMzNDRjNDcuNDYyNCAyMC4wNzA0IDkwLjExMiA0OC43OTM2IDEyNi43MiA4NS40MDE2IDM2LjYwOCAzNi42MDggNjUuMzMxMiA3OS4yMDY0IDg1LjQwMTYgMTI2LjcyIDIwLjc4NzIgNDkuMTUyIDMxLjMzNDQgMTAxLjM3NiAzMS4zMzQ0IDE1NS4xODcycy0xMC41NDcyIDEwNi4wMzUyLTMxLjMzNDQgMTU1LjE4NzJjLTIwLjA3MDQgNDcuNDYyNC00OC44NDQ4IDkwLjExMi04NS40MDE2IDEyNi43MmEzOTcuMjI0OTYgMzk3LjIyNDk2IDAgMCAxLTEyNi43MiA4NS40MDE2Yy00OS4xNTIgMjAuNzg3Mi0xMDEuMzc2IDMxLjMzNDQtMTU1LjE4NzIgMzEuMzM0NHogbTAtNzUwLjM4NzJjLTkzLjk1MiAwLTE4Mi4yNzIgMzYuNjA4LTI0OC43Mjk2IDEwMy4wMTQ0QzE5My4wMjQgMzI4Ljk2IDE1Ni40MTYgNDE3LjMzMTIgMTU2LjQxNiA1MTEuMjgzMmMwIDkzLjk1MiAzNi42MDggMTgyLjI3MiAxMDMuMDE0NCAyNDguNzI5NiA2Ni40NTc2IDY2LjQ1NzYgMTU0Ljc3NzYgMTAzLjAxNDQgMjQ4LjcyOTYgMTAzLjAxNDQgOTMuOTUyIDAgMTgyLjI3Mi0zNi42MDggMjQ4LjcyOTYtMTAzLjAxNDRzMTAzLjAxNDQtMTU0Ljc3NzYgMTAzLjAxNDQtMjQ4LjcyOTZjMC05My45NTItMzYuNjA4LTE4Mi4yNzItMTAzLjAxNDQtMjQ4LjcyOTYtNjYuNDA2NC02Ni40NTc2LTE1NC43Nzc2LTEwMy4wMTQ0LTI0OC43Mjk2LTEwMy4wMTQ0eicgZmlsbD0nI2NiYzY2OCc+PC9wYXRoPjxwYXRoIGQ9J00yOTkuNzI0OCA1MTEuMjgzMm0tNTIuMDcwNCAwYTUyLjA3MDQgNTIuMDcwNCAwIDEgMCAxMDQuMTQwOCAwIDUyLjA3MDQgNTIuMDcwNCAwIDEgMC0xMDQuMTQwOCAwWicgZmlsbD0nI2NiYzY2OCc+PC9wYXRoPjxwYXRoIGQ9J001MDguMTYgNTExLjI4MzJtLTUyLjA3MDQgMGE1Mi4wNzA0IDUyLjA3MDQgMCAxIDAgMTA0LjE0MDggMCA1Mi4wNzA0IDUyLjA3MDQgMCAxIDAtMTA0LjE0MDggMFonIGZpbGw9JyNjYmM2NjgnPjwvcGF0aD48cGF0aCBkPSdNNzE2LjY0NjQgNTExLjI4MzJtLTUyLjA3MDQgMGE1Mi4wNzA0IDUyLjA3MDQgMCAxIDAgMTA0LjE0MDggMCA1Mi4wNzA0IDUyLjA3MDQgMCAxIDAtMTA0LjE0MDggMFonIGZpbGw9JyNjYmM2NjgnPjwvcGF0aD48L3N2Zz4=";

    return `

<category name="%{BKY_QH_C02_SENSOR_CATEGORY}" id="QH_C02_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Sensor_ICO}">
    <block type="PY_QDP_inout_esp32_touchRead">
        <value name="PIN">
            <shadow type="pins_touch"></shadow>
        </value>
    </block>
    <label text="%{BKY_QH_BUTTON_LABEL}"></label>
    <block type="PY_qdp_esp32_buttonl"></block>
    <block type="PY_qdp_esp32_buttonx"></block>
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>
    <block type="PY_qdp_esp32_grayscale"></block>
    <block type="PY_qdp_esp32_lightSensor"></block>
    <block type="PY_qdp_esp32_sound"></block>
    <block type="PY_qdp_esp32_potentiometer"></block>
    <block type="PY_qdp_esp32_Soilmoisture"></block>
</category>
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Actuator_ICO}">
    <label text="---LED---"></label>
    <block type="qdp_inout_highlow"></block>
    <block type="qdp_esp32_ledlight">
        <value name="STAT">
            <shadow type="qdp_inout_highlow"></shadow>
        </value>
    </block>
    <block type="qdp_esp32_read_ledlight"></block>
    <block type="PY_qdp_esp32_ledlight3">
        <value name="ledn">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="---RGB---"></label>
    <block type="qdp_c02_py_rgb_set_color">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_c02_py_rgb_write"></block>
    <label text="%{BKY_QH_DCMOTO_LABEL}"></label>
    <block type="PY_qdp_esp32_motor">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="PY_qdp_esp32_servomotor_180">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_esp32_servomotor_360">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
