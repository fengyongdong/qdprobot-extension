/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const I2C_SCANNER_ICON = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MzUxNjM0MDIwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTEyOCAzODRWMTYwYzAtMTcuNiAxNC40LTMyIDMyLTMyaDIyNHY2NEgxOTJ2MTkyaC02NHogbTUxMi0xOTJoMTkydjE5Mmg2NFYxNjBjMC0xNy42LTE0LjQtMzItMzItMzJINjQwdjY0eiBtMTkyIDQ0OHYxOTJINjQwdjY0aDIyNGMxNy42IDAgMzItMTQuNCAzMi0zMlY2NDBoLTY0eiBtLTQ0OCAxOTJIMTkyVjY0MGgtNjR2MjI0YzAgMTcuNiAxNC40IDMyIDMyIDMyaDIyNHYtNjR6IG01MTItMzUySDEyOHY2NGg3Njh2LTY0eiIgcC1pZD0iMjU4MyIgZmlsbD0iIzc3NERDQiI+PC9wYXRoPjwvc3ZnPg==";
    return `
<category name="%{BKY_I2CSCANNER_CATEGORY}" id="I2CSCANNER_CATEGORY" colour="#9966FF" secondaryColour="#774DCB" iconURI="${I2C_SCANNER_ICON}">
    <block type="i2cScanner_print" id="i2cScanner_print"></block>
</category>`;
}

exports = addToolbox;
