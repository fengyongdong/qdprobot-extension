/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_COMMUNICATE_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNjc2Ljg2NCA2NjkuMDgxNmwzOS41MjY0IDQ2Ljg5OTJDNzg4LjI3NTIgNjU1LjM2IDgyOS40NCA1NjYuODg2NCA4MjkuNDQgNDczLjA4OGMwLTE3NS4xMDQtMTQyLjMzNi0zMTcuNDQtMzE3LjQ0LTMxNy40NFMxOTQuNTYgMjk3Ljk4NCAxOTQuNTYgNDczLjA4OGMwIDk0LjQxMjggNDEuNTc0NCAxODMuMjk2IDExNC4yNzg0IDI0My45MTY4bDM5LjMyMTYtNDcuMTA0Yy01OC41NzI4LTQ4Ljc0MjQtOTIuMTYtMTIwLjYyNzItOTIuMTYtMTk2LjgxMjggMC0xNDEuMTA3MiAxMTQuODkyOC0yNTYgMjU2LTI1NnMyNTYgMTE0Ljg5MjggMjU2IDI1NmMwIDc1Ljc3Ni0zMy4xNzc2IDE0Ny4wNDY0LTkxLjEzNiAxOTUuOTkzNnonIGZpbGw9JyMwMGE2YWMnPjwvcGF0aD48cGF0aCBkPSdNODQ1LjAwNDggMTQwLjA4MzJDNzU2LjEyMTYgNTAuOTk1MiA2MzcuNzQ3MiAyLjA0OCA1MTIgMi4wNDggMzg2LjI1MjggMi4wNDggMjY3Ljg3ODQgNTAuOTk1MiAxNzguOTk1MiAxNDAuMDgzMiA4OS45MDcyIDIyOC45NjY0IDQwLjk2IDM0Ny4zNDA4IDQwLjk2IDQ3My4wODhjMCA3NC45NTY4IDE2Ljk5ODQgMTQ2LjYzNjggNTAuNzkwNCAyMTIuOTkyIDMyLjE1MzYgNjMuMjgzMiA3OS4wNTI4IDExOS4zOTg0IDEzNS43ODI0IDE2Mi40MDY0bDM3LjA2ODgtNDguOTQ3MkMxNjEuNTg3MiA3MjEuNTEwNCAxMDIuNCA2MDIuMzE2OCAxMDIuNCA0NzMuMDg4YzAtMjI1Ljg5NDQgMTgzLjcwNTYtNDA5LjYgNDA5LjYtNDA5LjZzNDA5LjYgMTgzLjcwNTYgNDA5LjYgNDA5LjZjMCAxMjguMjA0OC01OC4zNjggMjQ2Ljc4NC0xNjAuMzU4NCAzMjUuMDE3NmwzNy40Nzg0IDQ4Ljc0MjRjNTYuMTE1Mi00My4wMDggMTAyLjQtOTkuMTIzMiAxMzQuMTQ0LTE2MS45OTY4IDMzLjE3NzYtNjUuOTQ1NiA1MC4xNzYtMTM3LjIxNiA1MC4xNzYtMjExLjc2MzIgMC0xMjUuNzQ3Mi00OC45NDcyLTI0NC4xMjE2LTEzOC4wMzUyLTMzMy4wMDQ4eicgZmlsbD0nIzAwYTZhYyc+PC9wYXRoPjxwYXRoIGQ9J001NjcuMjk2IDU5NC4xMjQ4YzQ1Ljg3NTItMjEuMDk0NCA3Ny44MjQtNjcuMzc5MiA3Ny44MjQtMTIxLjAzNjggMC03My4zMTg0LTU5LjgwMTYtMTMzLjEyLTEzMy4xMi0xMzMuMTJzLTEzMy4xMiA1OS44MDE2LTEzMy4xMiAxMzMuMTJjMCA1My42NTc2IDMxLjk0ODggOTkuOTQyNCA3Ny44MjQgMTIxLjAzNjhMMjMzLjY3NjggOTQ1LjM1NjhjLTEwLjAzNTIgMTUuNzY5Ni0xMC42NDk2IDM1LjYzNTItMS42Mzg0IDUyLjAxOTJzMjYuMjE0NCAyNi40MTkyIDQ0Ljg1MTIgMjYuNDE5Mmg0NzAuMDE2YzE4LjYzNjggMCAzNS44NC0xMC4yNCA0NC44NTEyLTI2LjQxOTJzOC4zOTY4LTM2LjI0OTYtMS42Mzg0LTUyLjAxOTJMNTY3LjI5NiA1OTQuMTI0OHpNNTEyIDQwMS40MDhjMzkuNTI2NCAwIDcxLjY4IDMyLjE1MzYgNzEuNjggNzEuNjhzLTMyLjE1MzYgNzEuNjgtNzEuNjggNzEuNjgtNzEuNjgtMzIuMTUzNi03MS42OC03MS42OCAzMi4xNTM2LTcxLjY4IDcxLjY4LTcxLjY4ek0yOTUuNzMxMiA5NjIuNTZMNTEyIDYyMS41NjggNzI4LjI2ODggOTYyLjU2SDI5NS43MzEyeicgZmlsbD0nIzAwYTZhYyc+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="%{BKY_QH_IR_CATEGORY}" id="QH_IR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_COMMUNICATE_ICO}">
    <block type="communicate_ir_recv"></block>    
    <block type="PY_qdp_esp32_ir_re">
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
                  <shadow type="math_number">
                    <field name="NUM">0</field>
                  </shadow>
                </value>
            </block>
          </value>
        </block>
      </statement>
    </block>
    <block type="PY_qdp_esp32_ir_send">
        <value name="address">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="contents">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
