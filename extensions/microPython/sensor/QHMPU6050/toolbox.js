/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_MPU6050_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU3MDc1MDQxMzAzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc4LjkzMzMzMyA1MDMuNDY2NjY3Yy00LjI2NjY2Ny0xNTMuNi0xMDQuNTMzMzMzLTI5Mi4yNjY2NjctMjU2LTM0MS4zMzMzMzRsNC4yNjY2NjctMTcuMDY2NjY2YzIuMTMzMzMzLTguNTMzMzMzLTIuMTMzMzMzLTE5LjItMTIuOC0yMS4zMzMzMzQtOC41MzMzMzMtMi4xMzMzMzMtMTkuMiAyLjEzMzMzMy0yMS4zMzMzMzMgMTIuOGwtNC4yNjY2NjcgMTcuMDY2NjY3QzQzNS4yIDExOS40NjY2NjcgMjc3LjMzMzMzMyAxODkuODY2NjY3IDE5OC40IDMyMGMtNTkuNzMzMzMzIDE0LjkzMzMzMy05OC4xMzMzMzMgNDAuNTMzMzMzLTEwOC44IDc4LjkzMzMzMy0xMC42NjY2NjcgMzguNCAxMC42NjY2NjcgODEuMDY2NjY3IDU1LjQ2NjY2NyAxMjEuNiA0LjI2NjY2NyAxNTMuNiAxMDQuNTMzMzMzIDI5Mi4yNjY2NjcgMjU2IDM0MS4zMzMzMzRsLTQuMjY2NjY3IDE3LjA2NjY2NmMtMi4xMzMzMzMgOC41MzMzMzMgMi4xMzMzMzMgMTkuMiAxMi44IDIxLjMzMzMzNCA4LjUzMzMzMyAyLjEzMzMzMyAxOS4yLTIuMTMzMzMzIDIxLjMzMzMzMy0xMi44bDQuMjY2NjY3LTE3LjA2NjY2N2MxNTUuNzMzMzMzIDM0LjEzMzMzMyAzMTEuNDY2NjY3LTM2LjI2NjY2NyAzOTIuNTMzMzMzLTE2OC41MzMzMzMgNTkuNzMzMzMzLTE0LjkzMzMzMyA5OC4xMzMzMzMtNDAuNTMzMzMzIDEwOC44LTc4LjkzMzMzNCA4LjUzMzMzMy0zNC4xMzMzMzMtMTIuOC03Ni44LTU3LjYtMTE5LjQ2NjY2NnpNNjE0LjQgMTk2LjI2NjY2N2MxMjUuODY2NjY3IDQwLjUzMzMzMyAyMTEuMiAxNTEuNDY2NjY3IDIyOC4yNjY2NjcgMjc1LjItNTEuMi0zOC40LTEyMS42LTc0LjY2NjY2Ny0yMDAuNTMzMzM0LTEwMi40TDYwOCA0OTAuNjY2NjY3YzQ5LjA2NjY2NyAyMS4zMzMzMzMgNzYuOCA0Ni45MzMzMzMgNzIuNTMzMzMzIDY2LjEzMzMzMy02LjQgMjUuNi03OC45MzMzMzMgMjkuODY2NjY3LTE2Ni40IDEwLjY2NjY2N2wxMDAuMjY2NjY3LTM3MS4yeiBtLTM0LjEzMzMzMy04LjUzMzMzNGwtMTAwLjI2NjY2NyAzNzEuMmMtODUuMzMzMzMzLTI1LjYtMTQ1LjA2NjY2Ny02NC0xMzguNjY2NjY3LTkxLjczMzMzMyA0LjI2NjY2Ny0xOS4yIDQyLjY2NjY2Ny0yNS42IDk2LTIxLjMzMzMzM2wzMi0xMjEuNmMtODUuMzMzMzMzLTE0LjkzMzMzMy0xNjIuMTMzMzMzLTE5LjItMjI2LjEzMzMzMy0xMC42NjY2NjcgNzguOTMzMzMzLTEwMi40IDIwOS4wNjY2NjctMTUzLjYgMzM3LjA2NjY2Ny0xMjUuODY2NjY3eiBtLTE3MC42NjY2NjcgNjQwYy0xMjUuODY2NjY3LTQwLjUzMzMzMy0yMTEuMi0xNTEuNDY2NjY3LTIyOC4yNjY2NjctMjc1LjIgNjQgNDkuMDY2NjY3IDE1Ny44NjY2NjcgOTMuODY2NjY3IDI2OC44IDEyMy43MzMzMzRsLTQwLjUzMzMzMyAxNTEuNDY2NjY2eiBtMzQuMTMzMzMzIDguNTMzMzM0bDQwLjUzMzMzNC0xNTEuNDY2NjY3YzExMC45MzMzMzMgMjcuNzMzMzMzIDIxMy4zMzMzMzMgMzYuMjY2NjY3IDI5NC40IDI1LjYtNzYuOCAxMDIuNC0yMDYuOTMzMzMzIDE1My42LTMzNC45MzMzMzQgMTI1Ljg2NjY2N3oiIHAtaWQ9IjMyMTkiIGZpbGw9IiNFMDZDNzgiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_QH_MPU6050_CATEGORY}" id="QH_MPU6050_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_MPU6050_ICO}">
    <block type="PY_QDP_ESP32_MPU6050_INIT">
        <field name="sda">21</field>
        <field name="scl">22</field>
    </block>
    <block type="PY_QDP_ESP32_MPU6050_DATA"></block>
</category>
`;

}

exports = addToolbox;
