/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QDPRobot_SmartCar01_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ5NjYxMzI3MDk4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzNzAyIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU1Mi43MTk3NTQgNDc2LjUwMjY0NnMzNC43Njg3MzggNTAuNDM1OTM4LTEuNjk3NDc3IDEwMS4xMzk2OTJjLTE1Ljg3MiAyMi4wNzExMzgtMTAuODUwNDYyIDUyLjgzNDQ2MiAxMS4yMjg1NTQgNjguNzEwNGE0OS4wMTgwOTIgNDkuMDE4MDkyIDAgMCAwIDI4LjY5OTU2OSA5LjI2NzJjMTUuMzA4OCAwIDMwLjM5MzEwOC03LjExNjggNDAuMDEwODMxLTIwLjQ5MTgxNSA2NS43ODgwNjItOTEuNDgyNTg1IDI3LjY1NTg3Ny0xODQuMjcyNzM4LTEuNjk3NDc3LTIyMC41NTM4NDYgMCAwLTMyLjU4NjgzMS0yNC41NjQxODUtNTYuMjE3NiAwcy0zMS4zNjU5MDggMzcuMzI4NzM4LTIwLjMyNjQgNjEuOTI4MzY5eiIgZmlsbD0iI2Q4MWUwNiIgcC1pZD0iMTM3MDMiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkyMSIgY2xhc3M9InNlbGVjdGVkIj48L3BhdGg+PHBhdGggZD0iTTcyNi45MTAwMzEgNzM2LjQyNTM1NGMtOS45NTI0OTIgMC0xOS45OTk1MDgtMy4wMTI5MjMtMjguNjk5NTY5LTkuMjY3Mi0yMi4wNzExMzgtMTUuODcyLTI3LjEwMDU1NC00Ni42MzkyNjItMTEuMjI4NTU0LTY4LjcxMDQgNDMuMTgxMjkyLTYwLjA0MTg0NiA1Ni40NDk5NjktMTIzLjgwMTYgMzkuNDM5NzU0LTE4OS40OTUxMzktMTIuNjgxODQ2LTQ4Ljk3NDc2OS0zNy40OTQxNTQtODAuNTczMDQ2LTM3Ljc0MjI3Ny04MC44ODAyNDYtMTcuMTAwOC0yMS4xMzc3MjMtMTMuODMxODc3LTUyLjEzNzM1NCA3LjMwNTg0Ni02OS4yMzgxNTQgMjEuMTMzNzg1LTE3LjExMjYxNSA1Mi4xMzM0MTUtMTMuODMxODc3IDY5LjIzODE1NCA3LjMwMTkwOCAzLjg5OTA3NyA0LjgyNDYxNSAzOC42NDQxODUgNDkuMTIwNDkyIDU2LjUxNjkyMyAxMTguMTM0MTU0IDE2Ljk3NDc2OSA2NS41NTU2OTIgMjEuMjQwMTIzIDE2NS44OTk4MTUtNTQuODE5NDQ2IDI3MS42NTkzMjNhNDkuMTQ4MDYyIDQ5LjE0ODA2MiAwIDAgMS00MC4wMTA4MzEgMjAuNDk1NzU0eiIgZmlsbD0iI2Q4MWUwNiIgcC1pZD0iMTM3MDQiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkyMiIgY2xhc3M9InNlbGVjdGVkIj48L3BhdGg+PHBhdGggZD0iTTg2NC41MTk4NzcgODE1LjY5NDc2OWE0OS4wMzM4NDYgNDkuMDMzODQ2IDAgMCAxLTI4LjcwMzUwOC05LjI2NzJjLTIyLjA3MTEzOC0xNS44NzU5MzgtMjcuMDk2NjE1LTQ2LjYzOTI2Mi0xMS4yMjQ2MTUtNjguNzE0MzM4IDY1LjYyNjU4NS05MS4yNDYyNzcgODUuNzI0NTU0LTE4OC40MDgxMjMgNTkuNzM0NjQ2LTI4OC43Nzk4MTYtMTkuMjYzMDE1LTc0LjM5MzYtNTcuNjU1MTM4LTEyMy4yNjIwMzEtNTguMDM3MTY5LTEyMy43MzQ2NDYtMTcuMTAwOC0yMS4xMzc3MjMtMTMuODMxODc3LTUyLjEzNzM1NCA3LjMwNTg0Ni02OS4yMzgxNTQgMjEuMTM3NzIzLTE3LjExMjYxNSA1Mi4xMzM0MTUtMTMuODMxODc3IDY5LjIzODE1NCA3LjMwMTkwOCAyLjEwNzA3NyAyLjYwNzI2MiA1MS45NDgzMDggNjQuOTU3MDQ2IDc2LjgxMTgxNSAxNjAuOTg4NTU0IDIzLjE0NjMzOCA4OS4zOTUyIDI4LjkwNDM2OSAyMjYuMzE1ODE1LTc1LjExNDMzOCAzNzAuOTUxODc3YTQ5LjE1MiA0OS4xNTIgMCAwIDEtNDAuMDEwODMxIDIwLjQ5MTgxNXoiIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjEzNzA1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMjMiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPjxwYXRoIGQ9Ik0yNDMuNDMyMzY5IDY1OS4wOTc2bS03NS4yMTY3MzggMGE3NS4yMTY3MzggNzUuMjE2NzM4IDAgMSAwIDE1MC40MzM0NzcgMCA3NS4yMTY3MzggNzUuMjE2NzM4IDAgMSAwLTE1MC40MzM0NzcgMFoiIGZpbGw9IiNlZmIzMzYiIHAtaWQ9IjEzNzA2IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMjAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNNjQzLjkzODQ2MiA3NzIuNjgyODMxSDIwNi45MTg4OTJjLTM2LjY3ODg5MiAwLTU4LjM3OTgxNS00LjQ3MDE1NC03MC4zNjQ1NTQtMTQuNDk3NDc3LTE4LjM4ODY3Ny0xNS4zODM2MzEtMjIuMjQ4MzY5LTU0LjQ3NjgtMjIuMjQ4MzY5LTg0LjU2MjcwOCAwLTkwLjczODIxNSAxNy43OTc5MDgtMTAxLjAzNzI5MiA1MC4xMTY5MjMtMTE5Ljc0ODkyM2ExMDEuODY0MzY5IDEwMS44NjQzNjkgMCAwIDEgMjQuMTc4MjE2LTEwLjExMzk2OSA0OS41NTM3MjMgNDkuNTUzNzIzIDAgMCAwIDguMjk0NC0zLjEzNTAxNmMwLjMzODcwOCAwLjAwNzg3NyAwLjY4NTI5MiAwLjA1NTEzOCAxLjAyNCAwLjA1NTEzOSAwLjI2NzgxNSAwIDAuNTMxNjkyLTAuMDMxNTA4IDAuNzk5NTA3LTAuMDM1NDQ2aDI1My4xOTU4MTZjMjcuMTg3MiAwIDQ5LjIzMDc2OS0yMi4wNDM1NjkgNDkuMjMwNzY5LTQ5LjIzMDc2OXMtMjIuMDQzNTY5LTQ5LjIzMDc2OS00OS4yMzA3NjktNDkuMjMwNzdIMjU2LjE2NTQxNWMxLjA0NzYzMS03LjI4MjIxNSAyLjA3NTU2OS0xNC42NTEwNzcgMy4xMTkyNjItMjIuMTQyMDMgMTEuMzcwMzM4LTgxLjgwMTg0NiAyMy4xMjY2NDYtMTY2LjM3NjM2OSA3NC41MzUzODUtMjAzLjY1MzkwOGwyLjUzMjQzLTEuNjg5NmMxNS4wODQzMDgtMTAuMDcwNjQ2IDIyLjU3OTItMTQuOTg1ODQ2IDI4LjA2MTUzOS0xNi43MDY5NTQgNS44ODgtMS44NTEwNzcgMTYuNjk1MTM4LTIuNTcxODE1IDM4LjU0NTcyMy0yLjU3MTgxNWgxMjQuMTEyNzM4bDQuOTIzMDc3IDAuMDExODE1YzguMTk1OTM4IDAuMDE1NzU0IDE2LjI3MzcyMyAwLjAzNTQ0NiAyNC4xOTAwMzEgMC4wNzg3NjloMC4yNzE3NTRjMjcuMDY1MTA4IDAgNDkuMDgxMTA4LTIxLjg2NjMzOCA0OS4yMjY4MzEtNDguOTYyOTU0IDAuMTQ1NzIzLTI3LjE4NzItMjEuNzcxODE1LTQ5LjM0ODkyMy00OC45NjI5NTQtNDkuNDk4NTg0YTcwMzIuMzIgNzAzMi4zMiAwIDAgMC0yNC41MTI5ODUtMC4wNzg3NjlsLTEyOS4yNTI0MzEtMC4wMTE4MTZjLTYxLjczOTMyMyAwLTc3LjA0ODEyMyA2LjMzMzA0Ni0xMjEuMjY1MjMgMzUuODQ3ODc3bC0zLjIxNzcyMyAyLjE0NjQ2MmMtMC40NDExMDggMC4yOTE0NDYtMC44NzgyNzcgMC41OTQ3MDgtMS4zMDc1NyAwLjkwMTkwNy04Ni4zNTQ3MDggNjEuNjgwMjQ2LTEwMS43ODU2IDE3Mi42ODk3MjMtMTE1LjQwNDggMjcwLjYzMTM4NS0yLjE0NjQ2MiAxNS40NTQ1MjMtNC4yMzM4NDYgMzAuMzkzMTA4LTYuNTIyMDkyIDQ0LjU4MzM4NWEyMDAuMzI5ODQ2IDIwMC4zMjk4NDYgMCAwIDAtNDAuMTY0NDMxIDE3LjYwNDkyM2MtNjQuMzU0NDYyIDM3LjI1Nzg0Ni05OS4yMjk1MzggODAuOTU1MDc3LTk5LjIyOTUzOCAyMDQuOTUzNiAwIDc1LjMzMDk1NCAxOC44MTc5NjkgMTI3LjY5NjczOCA1Ny41MzMwNDYgMTYwLjA4MjcwNyAxMS44OTQxNTQgOS45NDg1NTQgMjQuNzgwOCAxNy4yNzAxNTQgMzguMTYzNjkyIDIyLjY4NTUzOXY0My4zOTc5MDdjMCAyMy42Mzg2NDYgMTkuMzQxNzg1IDQyLjk4MDQzMSA0Mi45ODQzNjkgNDIuOTgwNDMxaDQyLjk4MDQzMWMyMy42Mzg2NDYgMCA0Mi45ODQzNjktMTkuMzQxNzg1IDQyLjk4NDM2OS00Mi45ODA0MzF2LTI4LjY0NDQzSDY0My45Mzg0NjJjMjcuMTg3MiAwIDQ5LjIzMDc2OS0yMi4wNDM1NjkgNDkuMjMwNzY5LTQ5LjIzMDc3cy0yMi4wNDM1NjktNDkuMjM0NzA4LTQ5LjIzMDc2OS00OS4yMzQ3MDd6IiBmaWxsPSIjZWZiMzM2IiBwLWlkPSIxMzcwNyIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTE4IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+";

    return `
<category name="%{BKY_QH_SMARTCAR01_CATEGORY}" id="QH_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QDPRobot_SmartCar01_ICO}">
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>
    <block type="QH_UltraSonicDistanceSensor_Car01" id="QH_UltraSonicDistanceSensor_Car01"></block>
    <block type="QH_Line_follower_Car01" id="QH_Line_follower_Car01"></block>
    <label text="---RGB---"></label>
    <block type="QH_rgb_led_Car01">
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
    <block type="QH_rgb_led2_Car01">
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
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <label text="%{BKY_QH_BUZZER_LABEL}"></label>
    <block type="QH_buzzer_Car01">
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_buzzer_music_Car01"></block>
    <label text="%{BKY_QH_DCMOTO_LABEL}"></label>
    <block type="QH_motor_Car01">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="QH_servomotor180_Car01">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorread_Car01"></block>
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="QH_ir_re2_Car01"></block>
    <label text="%{BKY_QH_BLUETOOTH_LABEL}"></label>
    <block type="QH_BT_START"></block>
    <block type="QH_BT_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>  
    <block type="QH_BT_variable"></block> 
    <block type="QH_BT_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N5">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block> 
    <block type="qdp_BT_print_string">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
            </block>
    <label text="%{BKY_QH_SERIAL_LABEL}"></label>  
    <block type="QH_serial_jieshouzhi_Car01">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="QH_serial_fasong_Car01">
        <value name="text">
        <shadow type="text">
            <field name="TEXT">0x7E</field>
        </shadow>
        </value>
    </block>
    <block type="QH_serial_jieshou_Car01"></block>
    <block type="QH_serial_suju_Car01"></block>

    <label text="%{BKY_QH_ZKDISPLAY_LABEL}"></label>  
    <block type="qdp_display_START"></block>
    <block type="qdp_display_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_display_variable"></block>
    <block type="qdp_display_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_sleep"></block>
    <block type="qdp_zkpdisplay_buzzer">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_color"></block>
    <block type="qdp_zkpdisplay_clscolor">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_pic"></block>
    <block type="qdp_zkpdisplay_page"></block>
    <block type="qdp_zkpdisplay_drawinground">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_function1">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT_CN">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;
