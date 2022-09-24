/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_VIDEO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTYxNjg2MDI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwNC44IDIzNi44QTE5LjIgMTkuMiAwIDAgMCAxODUuNiAyNTZ2NTEyYzAgMTAuNTk4NCA4LjYwMTYgMTkuMiAxOS4yIDE5LjJoNjE0LjRhMTkuMiAxOS4yIDAgMCAwIDE5LjItMTkuMlYyNTZBMTkuMiAxOS4yIDAgMCAwIDgxOS4yIDIzNi44SDIwNC44eiBtMC02NGg2MTQuNGM0NS45MjY0IDAgODMuMiAzNy4yNzM2IDgzLjIgODMuMnY1MTJjMCA0NS45MjY0LTM3LjI3MzYgODMuMi04My4yIDgzLjJIMjA0LjhBODMuMiA4My4yIDAgMCAxIDEyMS42IDc2OFYyNTZjMC00NS45MjY0IDM3LjI3MzYtODMuMiA4My4yLTgzLjJ6IiBmaWxsPSIjMzBiMjJiIiBwLWlkPSIyNDI2Ij48L3BhdGg+PHBhdGggZD0iTTY3MC43NzEyIDQ4NS4wMTc2YTUyLjQ4IDUyLjQ4IDAgMCAxLTE3Ljk3MTIgNzEuOTg3MmwtMTk1LjczNzYgMTE3LjQwMTZhNTIuNDggNTIuNDggMCAwIDEtNzkuNDYyNC00NC45NTM2VjM5NC41NDcyYTUyLjQ4IDUyLjQ4IDAgMCAxIDc5LjQ2MjQtNDQuOTUzNkw2NTIuOCA0NjYuOTQ0YzcuMzcyOCA0LjQ1NDQgMTMuNTY4IDEwLjU5ODQgMTcuOTcxMiAxOC4wMjI0eiBtLTIyOS4xNzEyLTcwLjE0NHYxOTQuMjAxNkw2MDMuMzkyIDUxMmwtMTYxLjc5Mi05Ny4wNzUyeiIgZmlsbD0iIzMwYjIyYiIgcC1pZD0iMjQyNyI+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="%{BKY_QH_VIDEO_CATEGORY}" id="QH_VIDEO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_VIDEO_ICO}">
    <block type="PY_qdp_k210_video_open">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart.avi</field>
            </shadow>
        </value>
        <value name="sub">
            <shadow type="text">
                <field name="TEXT">i2s</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_video_volume">
        <value name="vol">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_video_finish"></block>
    <block type="PY_qdp_esp32_video_play"></block>
    <block type="PY_qdp_esp32_video_open">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart_record.avi</field>
            </shadow>
        </value>
        <value name="interval">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="quality">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="sample_rate">
            <shadow type="math_number">
                <field name="NUM">44100</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_esp32_video_record"></block>
    <block type="PY_qdp_esp32_video_record_finish"></block>
</category>
`;

}

exports = addToolbox;
