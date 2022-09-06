/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_AUDIO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwODk3Nzk0Mzk4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2MiAzNjMuNzg4bC0yNjAuMjU4LTI5Ny40MzV2LTEuNjZoLTc2LjI2djU3Ny40ODJjLTYzLjM1OS01My40ODctMTU5Ljg1Ny05MS40MjgtMjYxLjY5NS05MS40MjgtMTc1LjkyMSAwLTI5OS4xMTcgMTEyLjgwOC0yOTkuMTE3IDIyNC4zMzggMCAxMTEuNTA3IDEyMy4xNzQgMTg2LjkzNyAyOTkuMTE3IDE4Ni45MzcgMTc1LjkyMSAwIDMzNi40OTYtNzUuNDMgMzM2LjQ5Ni0xODYuOTM3bDEuMTIxLTU0OC44NTMgMTg1LjgxNSAyMTIuMzM1IDc0Ljc3OS03NC43Nzl6TTM2My43ODggODg3LjIyMWMtMTI1LjY4NyAwLTIyNC4zMzgtNTAuMjM1LTIyNC4zMzgtMTEyLjE1OCAwLTYxLjk0NiA5OC42NTEtMTQ5LjU4MSAyMjQuMzM4LTE0OS41ODEgMTI1LjY2NCAwIDIyNC4zMzggODcuNjM1IDIyNC4zMzggMTQ5LjU4MSAwIDYxLjkyNC05OC42NzQgMTEyLjE1OC0yMjQuMzM4IDExMi4xNTh6IiBwLWlkPSIzNTM4IiBmaWxsPSIjZmY1NzU3Ij48L3BhdGg+PC9zdmc+";

    return `
<category name="%{BKY_QH_AUDIO_CATEGORY}" id="QH_AUDIO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_AUDIO_ICO}">
    <block type="PY_qdp_k210_audio_open">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart.wav</field>
            </shadow>
        </value>
        <value name="sub">
            <shadow type="text">
                <field name="TEXT">i2s</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_audio_volume">
        <value name="vol">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_audio_finish"></block>
    <block type="PY_qdp_esp32_audio_play"></block>
</category>
`;

}

exports = addToolbox;
