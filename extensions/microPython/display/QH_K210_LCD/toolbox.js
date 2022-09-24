/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_LCD_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTc4MTIzMzQxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmY/dD0xNjMwMDMzNzU5OTQ0IikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUudHRmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTM1LjM4NDYxNSAxNTcuNTM4NDYyYzM4LjA2NTIzMSAwIDY4LjkyMzA3NyAzMC40NjQgNjguOTIzMDc3IDY4LjAzNjkyM3Y2MTIuMjMzODQ2YzAgMTguMDU3ODQ2LTcuMjY2NDYyIDM1LjM0NzY5Mi0yMC4xODQ2MTUgNDguMTA4MzA3QTY5LjM3NiA2OS4zNzYgMCAwIDEgOTM1LjM4NDYxNSA5MDUuODQ2MTU0aC04MjcuMDc2OTIzQzcwLjI0MjQ2MiA5MDUuODQ2MTU0IDM5LjM4NDYxNSA4NzUuMzgyMTU0IDM5LjM4NDYxNSA4MzcuODA5MjMxdi02MTIuMjMzODQ2QzM5LjM4NDYxNSAxODguMDAyNDYyIDcwLjI0MjQ2MiAxNTcuNTM4NDYyIDEwOC4zMDc2OTIgMTU3LjUzODQ2Mmg4MjcuMDc2OTIzeiBtMCA2OC4wMzY5MjNoLTgyNy4wNzY5MjN2NjEyLjIzMzg0Nmg4MjcuMDc2OTIzdi02MTIuMjMzODQ2eiBtLTY4OS4yMzA3NjkgNjguMDE3MjN2NDA4LjE2MjQ2MmgxMDMuMzg0NjE2djY4LjAzNjkyM0gxNzcuMjMwNzY5VjI5My41OTI2MTVoNjguOTIzMDc3eiBtMzQ0LjYxNTM4NSAwdjY4LjAzNjkyM2wtMTAzLjQwNDMwOC0wLjAxOTY5MnYzNDAuMTQ1MjMxSDU5MC43NjkyMzF2NjguMDM2OTIzaC0xNzIuMzA3NjkzVjI5My41OTI2MTVINTkwLjc2OTIzMXogbTIwNi43NjkyMzEgMHY2OC4wMzY5MjNsLTY4LjkyMzA3Ny0wLjAxOTY5MnYzNDAuMTQ1MjMxaDY4LjkyMzA3N3Y2OC4wMzY5MjNoLTEzNy44NDYxNTRWMjkzLjU5MjYxNWgxMzcuODQ2MTU0eiBtNjguOTIzMDc2IDY4LjAzNjkyM3YzNDAuMTI1NTM5aC02OC45MjMwNzZWMzYxLjYyOTUzOEg4NjYuNDYxNTM4eiIgcC1pZD0iMjQ0MiIgZmlsbD0iIzViYTVhNSI+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="LCD" id="QH_LCD_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_LCD_ICO}">
    <block type="PY_qdp_k210_lcd_init">
        <value name="freq">
            <shadow type="math_number">
                <field name="NUM">15000000</field>
            </shadow>
        </value>
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="PY_qdp_k210_lcd_clear">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="PY_qdp_k210_lcd_display">
        <value name="img">
            <shadow type="text">
              <field name="TEXT">img</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_lcd_rotation"></block>
    <block type="PY_qdp_k210_lcd_mirror"></block>
    <block type="PY_qdp_k210_lcd_draw_string">
        <value name="x">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="content">
            <shadow type="text">
              <field name="TEXT">QDPK210_AIstart</field>
            </shadow>
        </value>
        <value name="color_T">
            <shadow type="colour_picker"/>
        </value>
        <value name="color_S">
            <shadow type="colour_picker"/>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
