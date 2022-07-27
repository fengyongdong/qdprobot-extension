/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SPEECH_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNTcyLjMzOTIgOTE0LjA4NjR2LTg3LjU1MmEyNC44NDQ4IDI0Ljg0NDggMCAwIDAtMjQuODMyLTI0LjgzMmgtNzEuMDAxNmEyNC44MzIgMjQuODMyIDAgMCAwLTI0LjgzMiAyNC44MzJ2ODcuNTUyYTI0LjgzMiAyNC44MzIgMCAwIDEtMjQuODQ0OCAyNC44MzJIMjE4LjExMmEyNC44NDQ4IDI0Ljg0NDggMCAwIDAtMjQuODMyIDI0LjgzMnYzNS40MTc2QTI0Ljg0NDggMjQuODQ0OCAwIDAgMCAyMTguMTEyIDEwMjRIODA1Ljg4OGEyNC44MzIgMjQuODMyIDAgMCAwIDI0LjgzMi0yNC44MzJ2LTM1LjQxNzZhMjQuODMyIDI0LjgzMiAwIDAgMC0yNC44MzItMjQuODMySDU5Ny4xNzEyYTI0LjgxOTIgMjQuODE5MiAwIDAgMS0yNC44MzItMjQuODMyeicgZmlsbD0nI2UzODZhMSc+PC9wYXRoPjxwYXRoIGQ9J001MTIgODY2LjA5OTJBMzkzLjQ3MiAzOTMuNDcyIDAgMCAxIDExOC41MjggNDcyLjYyNzJhNDEuNiA0MS42IDAgMCAxIDgzLjIgMGMwIDE3MS4wODQ4IDEzOS4xODcyIDMxMC4yNzIgMzEwLjI3MiAzMTAuMjcyczMxMC4yNzItMTM5LjE4NzIgMzEwLjI3Mi0zMTAuMjcyYTQxLjYgNDEuNiAwIDAgMSA4My4yIDAgMzkzLjQ0NjQgMzkzLjQ0NjQgMCAwIDEtMzkzLjQ3MiAzOTMuNDcyek03NTcuMTIgMzYxLjUxMDRWMjQ1LjEyQzc1Ny4xMiAxMDkuNzQ3MiA2NDcuMzcyOCAwIDUxMiAwUzI2Ni44OCAxMDkuNzQ3MiAyNjYuODggMjQ1LjEydjExNi4zOTA0YTE1LjQzNjggMTUuNDM2OCAwIDAgMCAxNS40ODggMTUuNDM2OGg0NTkuMzE1MmExNS40MzY4IDE1LjQzNjggMCAwIDAgMTUuNDM2OC0xNS40MzY4eicgZmlsbD0nI2UzODZhMSc+PC9wYXRoPjxwYXRoIGQ9J00yNjYuODggNDE5LjI1MTJtMTUuNDM2OCAwbDQ1OS4zNjY0IDBxMTUuNDM2OCAwIDE1LjQzNjggMTUuNDM2OGwwIDEzLjg4OHEwIDE1LjQzNjgtMTUuNDM2OCAxNS40MzY4bC00NTkuMzY2NCAwcS0xNS40MzY4IDAtMTUuNDM2OC0xNS40MzY4bDAtMTMuODg4cTAtMTUuNDM2OCAxNS40MzY4LTE1LjQzNjhaJyBmaWxsPScjZTM4NmExJz48L3BhdGg+PHBhdGggZD0nTTI4NC4wNTc2IDUwNi4zMTY4YTE1LjQzNjggMTUuNDM2OCAwIDAgMC0xNS4zNiAxNy4yOTI4QzI4My42NDggNjQ0Ljc0ODggMzg2Ljg0MTYgNzM4LjU2IDUxMiA3MzguNTZjMTI1LjE1ODQgMCAyMjguNDE2LTkzLjgxMTIgMjQzLjI3NjgtMjE0Ljk1MDRhMTUuNDM2OCAxNS40MzY4IDAgMCAwLTE1LjM2LTE3LjI5Mjh6JyBmaWxsPScjZTM4NmExJz48L3BhdGg+PC9zdmc+";
    return `
<category name="%{BKY_QH_SPEECH_CATEGORY}" id="QH_SPEECH_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SPEECH_ICO}">
    <label text="%{BKY_QH_SYNTHESIS_LABEL}"></label>
    <block type="PY_qdp_esp32_QF_hc_init"></block>
    <block type="PY_qdp_esp32_QF_hc">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">中文合成</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_esp32_QF_sound">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">01</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_esp32_QF_stophc"></block>
</category>
`;

}

exports = addToolbox;
