/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_DICT_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU1MTk1OTUwOTA5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzcwLjEzMzMzMyA5MTcuMzMzMzMzSDI3NS4yQzIyOC4yNjY2NjcgOTE3LjMzMzMzMyAxOTIgODgxLjA2NjY2NyAxOTIgODM0LjEzMzMzM3MzNi4yNjY2NjctODMuMiA4My4yLTgzLjJIODEwLjY2NjY2N2MxMi44IDAgMjEuMzMzMzMzIDguNTMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzR2ODMuMmMwIDM0LjEzMzMzMy0yNy43MzMzMzMgNjEuODY2NjY3LTYxLjg2NjY2NyA2MS44NjY2NjZ6IG0tNDk0LjkzMzMzMy0xMjMuNzMzMzMzYy0yMS4zMzMzMzMgMC00MC41MzMzMzMgMTcuMDY2NjY3LTQwLjUzMzMzMyA0MC41MzMzMzNzMTcuMDY2NjY3IDQwLjUzMzMzMyA0MC41MzMzMzMgNDAuNTMzMzM0aDQ5NC45MzMzMzNjMTAuNjY2NjY3IDAgMTkuMi04LjUzMzMzMyAxOS4yLTE5LjJ2LTYxLjg2NjY2N0gyNzUuMnoiIHAtaWQ9IjI0MDgiIGZpbGw9IiNhNTViNmQiPjwvcGF0aD48cGF0aCBkPSJNMzMwLjY2NjY2NyA3ODkuMzMzMzMzYy0xMi44IDAtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzNC0yMS4zMzMzMzNWMTM4LjY2NjY2N2MwLTEyLjggOC41MzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzNC0yMS4zMzMzMzRzMjEuMzMzMzMzIDguNTMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzRWNzY4YzAgMTIuOC04LjUzMzMzMyAyMS4zMzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzM3pNNDU0LjQgNTAxLjMzMzMzM2wtMTQuOTMzMzMzIDUxLjJoLTQ2LjkzMzMzNGw1OS43MzMzMzQtMTk2LjI2NjY2Nkg1MTJsNjEuODY2NjY3IDE5Ni4yNjY2NjZoLTQ2LjkzMzMzNGwtMTQuOTMzMzMzLTUxLjJoLTU3LjZ6IG01MS4yLTM0LjEzMzMzM2wtMTIuOC00Mi42NjY2NjdjLTQuMjY2NjY3LTEwLjY2NjY2Ny02LjQtMjUuNi0xMC42NjY2NjctMzguNC0yLjEzMzMzMyAxMC42NjY2NjctNi40IDI1LjYtOC41MzMzMzMgMzguNGwtMTIuOCA0Mi42NjY2NjdoNDQuOHpNNjgwLjUzMzMzMyA1NTAuNGwtMi4xMzMzMzMtMTQuOTMzMzMzYy04LjUzMzMzMyAxMC42NjY2NjctMjMuNDY2NjY3IDE3LjA2NjY2Ny00MC41MzMzMzMgMTcuMDY2NjY2LTI5Ljg2NjY2NyAwLTQ2LjkzMzMzMy0yMS4zMzMzMzMtNDYuOTMzMzM0LTQyLjY2NjY2NiAwLTM2LjI2NjY2NyAzNC4xMzMzMzMtNTUuNDY2NjY3IDgzLjItNTUuNDY2NjY3di0yLjEzMzMzM2MwLTguNTMzMzMzLTQuMjY2NjY3LTE5LjItMjUuNi0xOS4yLTE0LjkzMzMzMyAwLTI5Ljg2NjY2NyA0LjI2NjY2Ny0zOC40IDEwLjY2NjY2NmwtOC41MzMzMzMtMjcuNzMzMzMzYzEwLjY2NjY2Ny02LjQgMjkuODY2NjY3LTEyLjggNTUuNDY2NjY3LTEyLjggNDYuOTMzMzMzIDAgNjEuODY2NjY3IDI3LjczMzMzMyA2MS44NjY2NjYgNjEuODY2NjY3djQ5LjA2NjY2NmMwIDEyLjggMCAyNS42IDIuMTMzMzM0IDM0LjEzMzMzNGgtNDAuNTMzMzM0eiBtLTYuNC02Ni4xMzMzMzNjLTIzLjQ2NjY2NyAwLTQwLjUzMzMzMyA2LjQtNDAuNTMzMzMzIDIzLjQ2NjY2NiAwIDEwLjY2NjY2NyA4LjUzMzMzMyAxNy4wNjY2NjcgMTcuMDY2NjY3IDE3LjA2NjY2NyAxMC42NjY2NjcgMCAxOS4yLTYuNCAyMy40NjY2NjYtMTcuMDY2NjY3di0yMy40NjY2NjZ6IiBwLWlkPSIyNDA5IiBmaWxsPSIjYTU1YjZkIj48L3BhdGg+PHBhdGggZD0iTTc2OCA5MTcuMzMzMzMzSDI3Ny4zMzMzMzNjLTEyLjggMC0yMS4zMzMzMzMtOC41MzMzMzMtMjEuMzMzMzMzLTIxLjMzMzMzM3M4LjUzMzMzMy0yMS4zMzMzMzMgMjEuMzMzMzMzLTIxLjMzMzMzM2g0OTAuNjY2NjY3YzEwLjY2NjY2NyAwIDIxLjMzMzMzMy04LjUzMzMzMyAyMS4zMzMzMzMtMTkuMlYxNjguNTMzMzMzYzAtMTAuNjY2NjY3LTguNTMzMzMzLTE5LjItMjEuMzMzMzMzLTE5LjJIMjc1LjJjLTIxLjMzMzMzMyAwLTQwLjUzMzMzMyAxNy4wNjY2NjctNDAuNTMzMzMzIDQwLjUzMzMzNHY2NDQuMjY2NjY2YzAgMTIuOC04LjUzMzMzMyAyMS4zMzMzMzMtMjEuMzMzMzM0IDIxLjMzMzMzNHMtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzMy0yMS4zMzMzMzRWMTg5Ljg2NjY2N0MxOTIgMTQyLjkzMzMzMyAyMjguMjY2NjY3IDEwNi42NjY2NjcgMjc1LjIgMTA2LjY2NjY2N0g3NjhjMzYuMjY2NjY3IDAgNjQgMjcuNzMzMzMzIDY0IDYxLjg2NjY2NlY4NTMuMzMzMzMzYzAgMzYuMjY2NjY3LTI3LjczMzMzMyA2NC02NCA2NHoiIHAtaWQ9IjI0MTAiIGZpbGw9IiNhNTViNmQiPjwvcGF0aD48L3N2Zz4=';

    return `
<category name="%{BKY_QH_DICT_CATEGORY}" id="QH_DICT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_DICT_ICO}">
    <block type="dict_create_with">
        <value name="val">
            <shadow type="text">
                <field name="TEXT">'key1':'val1','key2':'val2'</field>
            </shadow>
        </value>
    </block>
    <block type="dict_set_value">
        <value name="val">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="dict_get_key_value"></block>
    <block type="dict_get_value">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">key1</field>
            </shadow>
        </value>
    </block>
    <block type="dict_get_value_by_default">
        <value name="preset">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="key">
            <shadow type="text">
                <field name="TEXT">key1</field>
            </shadow>
        </value>
    </block>
    <block type="dict_len"></block>
    <block type="dict_clear"></block>
    <block type="dict_tuple_to_list">
        <field name="sel">dict</field>
        <field name="name">mydict</field>
    </block>
</category>
`;

}

exports = addToolbox;
