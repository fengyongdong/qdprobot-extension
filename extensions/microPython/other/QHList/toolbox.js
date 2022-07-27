/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_LIST_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU1MTA3NTAxNjc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExMDMgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgyNzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE1LjQyOTY4NzUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPkBmb250LWZhY2UgeyBmb250LWZhbWlseTogZmVlZGJhY2staWNvbmZvbnQ7IHNyYzogdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmMj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoIndvZmYyIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoIndvZmYiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS50dGY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ0cnVldHlwZSIpOyB9Cjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMDYuMTI1ODYzIDIyMi41NzcyNyAzOS4xNjA4MzIgMjIyLjU3NzI3IDM5LjE2MDgzMiA4My40NjY0NzZDMzkuMTYwODMyIDc1LjQ4NjQ0NCAzNy4xMzc1NjYgNjkuODI0OTg1IDMzLjA5MDg3NSA2Ni40ODIwMTggMjkuMDQ0MjYzIDYzLjEzOTA1MiAyMS4yNzc0NiA2MS40Njc1NjkgOS43OTAyMjggNjEuNDY3NTY5TDAgNjEuNDY3NTY5IDAgMzUuNTg2NTIxQzE0Ljg4MTE2MiAzMi45OTg0IDI3LjgwNDEyMSAyOC41NzcwODMgMzguNzY5MjcgMjIuMzIyNDEyIDQ4LjE2Nzg1NyAxNi45MzA1MDEgNTcuNDM1ODQ1IDkuNDg5ODAyIDY2LjU3MzM5MSAwTDEwNi4xMjU4NjMgMCAxMDYuMTI1ODYzIDIyMi41NzcyN1pNMTM5LjAyMDk5NyA0NTAuOTgyMjgyQzEzOS4wMjA5OTcgNDYyLjYyNDQ1MyAxMzYuMDE4NzA4IDQ3NC43OTU3MTcgMTMwLjAxMzk3MiA0ODcuNDk2Mzg5IDEyNS4wNTM1NTggNDk3Ljg2ODU2NCAxMTYuNDM4MzMxIDUxMS41MjE0NzcgMTA0LjE2NzgxOCA1MjguNDU1NjggOTEuODk3MzgzIDU0NS4zODk4MDQgNzkuNDk2NTg2IDU2Mi4zMjM2OTIgNjYuOTY1MDMxIDU3OS4yNTc4OTVMMTMzLjE0Njg2IDU3OS4yNTc4OTUgMTMzLjE0Njg2IDYxNi43MjQ1NTkgMCA2MTYuNzI0NTU5IDAgNTg1LjYwODE5MkMxOC43OTczMzIgNTU3Ljg3ODUwOCAzMS41ODk2OTEgNTM4LjgyNzg1NSAzOC4zNzc2MyA1MjguNDU1NjggNDYuNDcwOTMyIDUxNi4zOTAwNDYgNTUuNzM4ODQxIDUwMS44OTA0NDIgNjYuMTgxODI5IDQ4NC45NTYyMzkgNzIuOTY5NzY3IDQ3My4zMTM5ODkgNzcuMjc3NDIgNDY1LjAwNTgwNCA3OS4xMDQ4NjYgNDYwLjAzMTM3IDgwLjkzMjM5MSA0NTUuMDU3MDE0IDgxLjg0NjE5MyA0NDkuOTIzOTM4IDgxLjg0NjE5MyA0NDQuNjMxOTg1IDgxLjg0NjE5MyA0MzMuNDEzMTIgNzcuMjc3NDIgNDI3LjgwMzcyNyA2OC4xMzk4NzQgNDI3LjgwMzcyNyA2Mi45MTg0MiA0MjcuODAzNzI3IDU5LjM5Mzk2OSA0MjkuOTIwNDkyIDU3LjU2NjQ0NCA0MzQuMTU0MDIzIDU1LjczODkxOSA0MzguMzg3NTU0IDU0LjgyNTE5NiA0NDQuMzE0Mzg4IDU0LjgyNTE5NiA0NTEuOTM0NzU5TDU0LjgyNTE5NiA0NzIuMjU1NzI0IDAgNDcyLjI1NTcyNCAwIDQ2NC45NTI4NzFDMCA0NjAuNzE5MzQgMC4wNjUzIDQ1Ni41OTE2NzUgMC4xOTU4MiA0NTIuNTY5Nzk3IDAuMzI2MzQxIDQ0OC41NDc5OTggMC43ODMyMDIgNDQ0LjQyMDMzMiAxLjU2NjQwNSA0NDAuMTg2ODAxIDQuMTc3MTMyIDQyNS4xNTc3MTEgMTEuMDk1NTEzIDQxMy43MjczNSAyMi4zMjE3MDMgNDA1Ljg5NTI0NyAzMy41NDc4MTUgMzk4LjA2MzIyMiA0OC4yOTgyOTkgMzk0LjE0NzI4OSA2Ni41NzMzOTEgMzk0LjE0NzI4OSA3NS45NzIwNTcgMzk0LjE0NzI4OSA4NC4zMjYzMjEgMzk0Ljk0MTA0NiA5MS42MzYzNDIgMzk2LjUyODY0IDk4Ljk0NjQ0MiAzOTguMTE2MTU1IDEwNS43MzQyMjMgNDAwLjcwOTE1OSAxMTIgNDA0LjMwNzczMiAxMzAuMDE0MDUgNDE1LjMxNDk0NCAxMzkuMDIwOTk3IDQzMC44NzI5NyAxMzkuMDIwOTk3IDQ1MC45ODIyODJaTTEzNi4zNDc4MDYgOTQyLjYwMjMxOUMxMzYuMzQ3ODA2IDk1NS42OTUxMDQgMTM1LjM0ODkzMyA5NjYuMTkwMDggMTMzLjM1MTE4OCA5NzQuMDg3MzI2IDEzMS4zNTMzNjQgOTgxLjk4NDU3MSAxMjcuMzU3ODczIDk4OC44NDI2MTQgMTIxLjM2NDU1OSA5OTQuNjYxNjkxIDExMC4zNzY4MDIgMTAwNS40Njg1MTQgOTMuODk1Mjg2IDEwMTAuODcxNzY5IDcxLjkxOTc3NCAxMDEwLjg3MTc2OSA0OC42OTU1MzIgMTAxMC44NzE3NjkgMzEuMDkwMzczIDEwMDYuOTc1MTM0IDE5LjEwMzY2NSA5OTkuMTgxNzg1IDcuMTE3MDM2IDk5MS4zODg0MzYgMS4xMjM3MjIgOTc5LjgwMjUwNiAxLjEyMzcyMiA5NjQuNDIzNjAxTDAgOTM4LjU0OTc5OSAwIDkzMS4wNjgxNCA1Ny42ODU2MjIgOTMxLjA2ODE0IDU3LjY4NTYyMiA5NjQuNzM1MjkxQzU3LjY4NTYyMiA5NzMuNDYzODY3IDYwLjkzMTkzOCA5NzcuODI4MDc2IDY3LjQyNDcyOSA5NzcuODI4MDc2IDcyLjQxOTE3IDk3Ny44MjgwNzYgNzUuNDc4MjUyIDk3NS43NDk5MDggNzYuNjAxOTc0IDk3MS41OTM0MTMgNzcuNzI1Nzc1IDk2Ny40MzY5OTcgNzguMjg3NjM2IDk1OS42NDM3MjcgNzguMjg3NjM2IDk0OC4yMTM0NDVMNzguMjg3NjM2IDkzMy4yNTAyODRDNzguMjg3NjM2IDkyMC43ODA5NTggNzUuNjY1NTY2IDkxMi44ODM3OTEgNzAuNDIxNDI1IDkwOS41NTg2MjYgNjYuNDI1ODU2IDkwNy4wNjQ3MTQgNTcuNTYwODUyIDkwNS44MTc3OTcgNDMuODI2MDk3IDkwNS44MTc3OTdMNDMuODI2MDk3IDg3NC42NDQ1NTkgNDcuMTk3MzQyIDg3NC42NDQ1NTlDNjEuMTgxNzk0IDg3NC42NDQ1NTkgNjkuODU5NDg2IDg3My41MDE1MzggNzMuMjMwODA5IDg3MS4yMTU0OTggNzYuNjAyMDUzIDg2OC45MjkzNzggNzguMjg3NjM2IDg2Mi4zODMxMDQgNzguMjg3NjM2IDg1MS41NzYyODFMNzguMjg3NjM2IDgzOS40MTg3MjJDNzguMjg3NjM2IDgzMi45NzYxODcgNzcuOTEzMDg4IDgyOC44MTk3NzEgNzcuMTYzOTE0IDgyNi45NDkzOTYgNzUuNjY1NTY2IDgyMy4yMDg1NjYgNzIuNjY4OTQ4IDgyMS4zMzgxOTEgNjguMTczOTAzIDgyMS4zMzgxOTEgNjEuMTgxNzE2IDgyMS4zMzgxOTEgNTcuNjg1NjIyIDgyNS41OTg1MDMgNTcuNjg1NjIyIDgzNC4xMTkyMDdMNTcuNjg1NjIyIDg1Mi41MTE1MDggMCA4NTIuNTExNTA4IDAgODQwLjM1Mzg3MUMwIDgyMC40MDI4ODUgNC45MzE5NzggODA2LjczODcwOCAxNC43OTYwMTIgNzk5LjM2MTAyNCAyNC42NjAwNDcgNzkxLjk4MzM0IDQxLjgyODE5NCA3ODguMjk0NDk4IDY2LjMwMTAwNyA3ODguMjk0NDk4IDg5LjI3NTQ3MSA3ODguMjk0NDk4IDEwNi4zMTg3NjkgNzkyLjgxNDU5MiAxMTcuNDMxNDU0IDgwMS44NTQ4NTggMTI4LjU0NDEzOCA4MTAuODk1MjAyIDEzNC4xMDAzNjIgODI1LjI4NjczNSAxMzQuMTAwMzYyIDg0NS4wMjk5MjcgMTM0LjEwMDM2MiA4NTcuMjkxNDYxIDEzMS43Mjc5OSA4NjYuNTM5NDQxIDEyNi45ODMyNDcgODcyLjc3NDEwNSAxMjMuNzM2OTMgODc3LjEzODM5MyAxMTguMTE4MjQyIDg4MS4yOTQ4MDkgMTEwLjEyNzEwNCA4ODUuMjQzNDMxIDEyMS42MTQzMzYgODg5LjE5MjA1NCAxMjguODU2MTQzIDg5NC45NTkwNjUgMTMxLjg1MjgzOSA5MDIuNTQ0NjIgMTM0Ljg0OTUzNiA5MTAuMTMwMTc2IDEzNi4zNDc4MDYgOTIzLjQ4MjU4NSAxMzYuMzQ3ODA2IDk0Mi42MDIzMTlaTTI4My45ODIzNzUgOTIuNzQwNTI5IDExMDIuNzY5MjMxIDkyLjc0MDUyOSAxMTAyLjc2OTIzMSAyMzEuODUxMzIzIDI4My45ODIzNzUgMjMxLjg1MTMyMyAyODMuOTgyMzc1IDkyLjc0MDUyOVpNMjgzLjk4MjM3NSA0NDAuNTE3NTUzIDExMDIuNzY5MjMxIDQ0MC41MTc1NTMgMTEwMi43NjkyMzEgNTc5LjYyODM0NyAyODMuOTgyMzc1IDU3OS42MjgzNDcgMjgzLjk4MjM3NSA0NDAuNTE3NTUzWk0yODMuOTgyMzc1IDc4OC4yOTQ0OTggMTEwMi43NjkyMzEgNzg4LjI5NDQ5OCAxMTAyLjc2OTIzMSA5MjcuNDA1MjkyIDI4My45ODIzNzUgOTI3LjQwNTI5MiAyODMuOTgyMzc1IDc4OC4yOTQ0OThaIiBwLWlkPSI4Mjc3IiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PC9zdmc+';

    return `
<category name="%{BKY_QH_LIST_CATEGORY}" id="QH_LIST_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_LIST_ICO}">
    <block type="lists_create_with">
        <value name="val">
            <shadow type="text">
                <field name="TEXT">1,2,3,6</field>
            </shadow>
        </value>
    </block>
    <block type="lists_set_value">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="val">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="lists_create_with_item">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="lists_slice">
        <value name="no1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="no2">
            <shadow type="math_number">
                <field name="NUM">-1</field>
            </shadow>
        </value>
    </block>
    <block type="lists_built_in_function"></block>
    <block type="lists_built_in_function"></block>
    <block type="lists_built_in_function_output">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="lists_built_in_function_statement">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="lists_built_in_function_output2"></block>
    <block type="lists_built_in_function_statement2"></block>
    <block type="list_tuple_to_list">
        <field name="sel">list</field>
        <field name="name">mylist</field>
    </block>
</category>
`;

}

exports = addToolbox;
