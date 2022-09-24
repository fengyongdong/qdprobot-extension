/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SPEECH_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNTcyLjMzOTIgOTE0LjA4NjR2LTg3LjU1MmEyNC44NDQ4IDI0Ljg0NDggMCAwIDAtMjQuODMyLTI0LjgzMmgtNzEuMDAxNmEyNC44MzIgMjQuODMyIDAgMCAwLTI0LjgzMiAyNC44MzJ2ODcuNTUyYTI0LjgzMiAyNC44MzIgMCAwIDEtMjQuODQ0OCAyNC44MzJIMjE4LjExMmEyNC44NDQ4IDI0Ljg0NDggMCAwIDAtMjQuODMyIDI0LjgzMnYzNS40MTc2QTI0Ljg0NDggMjQuODQ0OCAwIDAgMCAyMTguMTEyIDEwMjRIODA1Ljg4OGEyNC44MzIgMjQuODMyIDAgMCAwIDI0LjgzMi0yNC44MzJ2LTM1LjQxNzZhMjQuODMyIDI0LjgzMiAwIDAgMC0yNC44MzItMjQuODMySDU5Ny4xNzEyYTI0LjgxOTIgMjQuODE5MiAwIDAgMS0yNC44MzItMjQuODMyeicgZmlsbD0nI2UzODZhMSc+PC9wYXRoPjxwYXRoIGQ9J001MTIgODY2LjA5OTJBMzkzLjQ3MiAzOTMuNDcyIDAgMCAxIDExOC41MjggNDcyLjYyNzJhNDEuNiA0MS42IDAgMCAxIDgzLjIgMGMwIDE3MS4wODQ4IDEzOS4xODcyIDMxMC4yNzIgMzEwLjI3MiAzMTAuMjcyczMxMC4yNzItMTM5LjE4NzIgMzEwLjI3Mi0zMTAuMjcyYTQxLjYgNDEuNiAwIDAgMSA4My4yIDAgMzkzLjQ0NjQgMzkzLjQ0NjQgMCAwIDEtMzkzLjQ3MiAzOTMuNDcyek03NTcuMTIgMzYxLjUxMDRWMjQ1LjEyQzc1Ny4xMiAxMDkuNzQ3MiA2NDcuMzcyOCAwIDUxMiAwUzI2Ni44OCAxMDkuNzQ3MiAyNjYuODggMjQ1LjEydjExNi4zOTA0YTE1LjQzNjggMTUuNDM2OCAwIDAgMCAxNS40ODggMTUuNDM2OGg0NTkuMzE1MmExNS40MzY4IDE1LjQzNjggMCAwIDAgMTUuNDM2OC0xNS40MzY4eicgZmlsbD0nI2UzODZhMSc+PC9wYXRoPjxwYXRoIGQ9J00yNjYuODggNDE5LjI1MTJtMTUuNDM2OCAwbDQ1OS4zNjY0IDBxMTUuNDM2OCAwIDE1LjQzNjggMTUuNDM2OGwwIDEzLjg4OHEwIDE1LjQzNjgtMTUuNDM2OCAxNS40MzY4bC00NTkuMzY2NCAwcS0xNS40MzY4IDAtMTUuNDM2OC0xNS40MzY4bDAtMTMuODg4cTAtMTUuNDM2OCAxNS40MzY4LTE1LjQzNjhaJyBmaWxsPScjZTM4NmExJz48L3BhdGg+PHBhdGggZD0nTTI4NC4wNTc2IDUwNi4zMTY4YTE1LjQzNjggMTUuNDM2OCAwIDAgMC0xNS4zNiAxNy4yOTI4QzI4My42NDggNjQ0Ljc0ODggMzg2Ljg0MTYgNzM4LjU2IDUxMiA3MzguNTZjMTI1LjE1ODQgMCAyMjguNDE2LTkzLjgxMTIgMjQzLjI3NjgtMjE0Ljk1MDRhMTUuNDM2OCAxNS40MzY4IDAgMCAwLTE1LjM2LTE3LjI5Mjh6JyBmaWxsPScjZTM4NmExJz48L3BhdGg+PC9zdmc+";

    return `
<category name="%{BKY_QH_ASR_CATEGORY}" id="QH_ASR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SPEECH_ICO}">
  <block type="PY_qdp_k210_tuple_corpus">
    <value name="TEXT">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">"sound1", "sound2", "sound3"</field>
                    </shadow>
                </value>
            </block>
        </value>
  </block>
  <block type="PY_qdp_k210_hear_init">
    <value name="SUB">
      <shadow type="math_number">
        <field name="NUM">3</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_hear_training">
    <value name="save">
      <shadow type="text">
        <field name="TEXT">QDPK210_AIstart.asr</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_hear_loading">
    <value name="path">
      <shadow type="text">
        <field name="TEXT">QDPK210_AIstart.asr</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_hear_predict"></block>
</category>
`;

}

exports = addToolbox;
