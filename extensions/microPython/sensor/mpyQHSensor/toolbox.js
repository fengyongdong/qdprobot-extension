/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_Sensor_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNODM2LjQxNiAxODcuNzU0NjY3QTQ1Ny4yMzczMzMgNDU3LjIzNzMzMyAwIDAgMSA5NzAuNjY2NjY3IDUxMmE0NTcuMTczMzMzIDQ1Ny4xNzMzMzMgMCAwIDEtMTI3LjMxNzMzNCAzMTcuMTYyNjY3bC02LjY1NiA2LjgwNTMzMy00NS4zMTItNDUuMjI2NjY3QTM5My4yNTg2NjcgMzkzLjI1ODY2NyAwIDAgMCA5MDYuNjY2NjY3IDUxMmEzOTMuMTczMzMzIDM5My4xNzMzMzMgMCAwIDAtMTA5LjEyLTI3Mi40MjY2NjdsLTYuNC02LjU3MDY2NiA0NS4yNjkzMzMtNDUuMjI2NjY3ek0xODcuOTY4IDE4Ny4zOTJsNDUuMjI2NjY3IDQ1LjI5MDY2N0EzOTMuMjU4NjY3IDM5My4yNTg2NjcgMCAwIDAgMTE3LjMzMzMzMyA1MTJhMzkzLjE3MzMzMyAzOTMuMTczMzMzIDAgMCAwIDEwOC44IDI3Mi4wODUzMzNsNi4zNzg2NjcgNi41NDkzMzQtNDUuMzMzMzMzIDQ1LjIwNTMzM0E0NTcuMjM3MzMzIDQ1Ny4yMzczMzMgMCAwIDEgNTMuMzMzMzMzIDUxMmMwLTEyMy40MTMzMzMgNDkuMDI0LTIzOS4xNDY2NjcgMTM0LjYxMzMzNC0zMjQuNjA4eiBtOTAuNTM4NjY3IDkwLjQ3NDY2N2w0NS4xODQgNDUuMzEyQTI2NS42ODUzMzMgMjY1LjY4NTMzMyAwIDAgMCAyNDUuMzMzMzMzIDUxMmMwIDY5LjU0NjY2NyAyNi42ODggMTM0Ljc0MTMzMyA3My42IDE4My45NTczMzNsNS4yOTA2NjcgNS4zOTczMzQtNDUuMDU2IDQ1LjQ0QTMyOS42ODUzMzMgMzI5LjY4NTMzMyAwIDAgMSAxODEuMzMzMzMzIDUxMmMwLTg5LjAyNCAzNS4zOTItMTcyLjUyMjY2NyA5Ny4xNzMzMzQtMjM0LjEzMzMzM3ogbTQ2Ny4zMjggMC4zMkEzMjkuNjY0IDMyOS42NjQgMCAwIDEgODQyLjY2NjY2NyA1MTJhMzI5LjYgMzI5LjYgMCAwIDEtOTEuMTU3MzM0IDIyNy45ODkzMzNsLTUuODg4IDYuMDM3MzM0LTQ1LjIyNjY2Ni00NS4zMTJBMjY1LjY4NTMzMyAyNjUuNjg1MzMzIDAgMCAwIDc3OC42NjY2NjcgNTEyYTI2NS42IDI2NS42IDAgMCAwLTcyLjg1MzMzNC0xODMuMTY4bC01LjI0OC01LjM3NiA0NS4yNjkzMzQtNDUuMjY5MzMzeiBtLTM3Ny41Nzg2NjcgOTAuOTQ0bDQ1LjM5NzMzMyA0NS4xMkExMzguMTEyIDEzOC4xMTIgMCAwIDAgMzczLjMzMzMzMyA1MTJjMCAzNS4yODUzMzMgMTMuMjA1MzMzIDY4LjM5NDY2NyAzNi41MDEzMzQgOTMuNzZsNC4yMjQgNC4zOTQ2NjctNDUuMjI2NjY3IDQ1LjMxMkEyMDIuMDkwNjY3IDIwMi4wOTA2NjcgMCAwIDEgMzA5LjMzMzMzMyA1MTJhMjAyLjA5MDY2NyAyMDIuMDkwNjY3IDAgMCAxIDU4LjkyMjY2Ny0xNDIuODY5MzMzeiBtMjg3LjM2LTAuMTI4QTIwMi4wOTA2NjcgMjAyLjA5MDY2NyAwIDAgMSA3MTQuNjY2NjY3IDUxMmEyMDIuMDI2NjY3IDIwMi4wMjY2NjcgMCAwIDEtNTQuMDE2IDEzNy43NDkzMzNsLTQuNzc4NjY3IDQuOTkyLTQ1LjQ0LTQ1LjA3NzMzM0ExMzguMDkwNjY3IDEzOC4wOTA2NjcgMCAwIDAgNjUwLjY2NjY2NyA1MTJhMTM4LjAyNjY2NyAxMzguMDI2NjY3IDAgMCAwLTM1Ljk4OTMzNC05My4xODRsLTQuNDE2LTQuNjUwNjY3IDQ1LjM1NDY2Ny00NS4xNjI2NjZ6TTUxMiA0MjYuNjY2NjY3YTg1LjMzMzMzMyA4NS4zMzMzMzMgMCAxIDEgMCAxNzAuNjY2NjY2IDg1LjMzMzMzMyA4NS4zMzMzMzMgMCAwIDEgMC0xNzAuNjY2NjY2eicgZmlsbD0nI0UwNkM3OCc+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="%{BKY_QH_SENSOR_CATEGORY}" id="QH_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Sensor_ICO}">
    <block type="PY_qdp_k210_sensor_button_init"></block>
    <block type="PY_qdp_k210_sensor_button_read"></block>
    <block type="PY_qdp_k210_sensor_dht11"></block>
    <block type="PY_qdp_k210_sensor_HCSR04">
        <field name="PIN1">2</field>
        <field name="PIN2">3</field>
    </block>
    <block type="PY_qdp_k210_sensor_use_i2c_init">
        <field name="PIN1">2</field>
        <field name="PIN2">3</field>
        <value name="freq">
            <shadow type="math_number">
                <field name="NUM">400000</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_sensor_mpu9250_get_acceleration"></block>
    <block type="PY_qdp_k210_sensor_mpu9250_get_magnetic"></block>
    <block type="PY_qdp_k210_sensor_mpu9250_get_gyro"></block>
    <block type="PY_qdp_k210_sensor_mpu9250_temperature"></block>
    <block type="PY_qdp_k210_sensor_bmp"></block>
    <block type="PY_qdp_k210_sensor_sht"> </block>
    <block type="PY_qdp_k210_sensor_adxl345_get_acceleration"></block>
</category>
`;

}

exports = addToolbox;
