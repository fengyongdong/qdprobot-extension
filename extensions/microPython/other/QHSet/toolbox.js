/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SET_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU1MjU3MjY2ODI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTc4LjU2IDIyNEgzNzkuNTJhMzIgMzIgMCAwIDEtMzItMzIgMzIuNjQgMzIuNjQgMCAwIDEgMzItMzJoNTk5LjA0YTMyIDMyIDAgMCAxIDMyIDMyIDMyIDMyIDAgMCAxLTMyIDMyek05NzguNTYgNTY1LjEySDM3OS41MmEzMiAzMiAwIDAgMS0zMi0zMiAzMi42NCAzMi42NCAwIDAgMSAzMi0zMmg1OTkuMDRhMzIgMzIgMCAwIDEgMzIgMzIgMzIgMzIgMCAwIDEtMzIgMzJ6TTk3OC41NiA5MDYuODhIMzc5LjUyYTMyLjY0IDMyLjY0IDAgMCAxLTMyLTMyIDMyIDMyIDAgMCAxIDMyLTMyaDU5OS4wNGEzMiAzMiAwIDAgMSAzMiAzMiAzMiAzMiAwIDAgMS0zMiAzMnpNMTE0LjU2IDI4NC4xNmEzMi42NCAzMi42NCAwIDAgMS0yMy4wNC05LjZMMjIuNCAyMDYuMDhhMzIuNjQgMzIuNjQgMCAwIDEgMC00NS40NCAzMiAzMiAwIDAgMSA0NS40NCAwbDQ2LjcyIDQ2LjA4IDk3LjI4LTk3LjI4YTMyIDMyIDAgMCAxIDQ1LjQ0IDAgMzIuNjQgMzIuNjQgMCAwIDEgMCA0NS40NEwxMzYuOTYgMjc0LjU2YTMyIDMyIDAgMCAxLTIyLjQgOS42ek0xMTQuNTYgNjE4Ljg4YTMyLjY0IDMyLjY0IDAgMCAxLTIzLjA0LTkuNkwyMi40IDU0MC4xNmEzMiAzMiAwIDAgMSAwLTQ0LjggMzIgMzIgMCAwIDEgNDUuNDQgMGw0Ni43MiA0Ni4wOCA5Ny4yOC05Ny4yOGEzMiAzMiAwIDAgMSA0NS40NCAwIDMyIDMyIDAgMCAxIDAgNDQuOEwxMzYuOTYgNjA5LjI4YTMyIDMyIDAgMCAxLTIyLjQgOS42ek0xMTQuNTYgOTY3LjA0YTMyLjY0IDMyLjY0IDAgMCAxLTIzLjA0LTcuMDRMMjIuNCA4ODguMzJhMzIuNjQgMzIuNjQgMCAwIDEgMC00NS40NCAzMi42NCAzMi42NCAwIDAgMSA0NS40NCAwbDQ2LjcyIDQ2LjcyIDk3LjI4LTk3LjkyYTMyIDMyIDAgMSAxIDQ1LjQ0IDQ1LjQ0TDEzNi45NiA5NjBhMzIgMzIgMCAwIDEtMjIuNCA3LjA0eiIgZmlsbD0iIzVlYzczZCIgcC1pZD0iMjUxNiI+PC9wYXRoPjwvc3ZnPg==';

    return `
<category name="%{BKY_QH_SET_CATEGORY}" id="QH_SET_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SET_ICO}">
    <block type="set_create_with">
        <value name="val">
            <shadow type="text">
                <field name="TEXT">1,2,3,4,5</field>
            </shadow>
        </value>
    </block>
    <block type="set_len"></block>
    <block type="set_add_discard">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="set_operation"></block>
    <block type="set_operation2"></block>
    <block type="set_is_sub_set"></block>
    <block type="set_tuple_to_list">
        <field name="sel">set</field>
        <field name="name">myset</field>
    </block>
</category>
`;

}

exports = addToolbox;
