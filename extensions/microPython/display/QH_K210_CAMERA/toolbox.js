/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_CAMERA_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYxMjQwNTQxNTI4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4Ny4yIDYyOS4zNDQgMTgyLjc1MiAyOTAuMDE2QzEzOS44NTYgMzUzLjQ0IDExNC43ODQgNDI5Ljg0IDExNC43ODQgNTEyYzAgNDAuODMyIDYuMjA4IDgwLjI0IDE3LjcxMiAxMTcuMzQ0TDM4Ny4yIDYyOS4zNDR6IiBwLWlkPSIzMjA0IiBmaWxsPSIjMmNhYWQyIj48L3BhdGg+PHBhdGggZD0iTTQ3My4xMDQgMzQzLjU4NGwzOTguNTI4IDBDODIwLjQ0OCAyMzQuNzIgNzIxLjI4IDE1Mi43ODQgNjAxLjUyIDEyNS4wODhMNDczLjEwNCAzNDMuNTg0eiIgcC1pZD0iMzIwNSIgZmlsbD0iIzJjYWFkMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNDUuMTY4IDQ2Ni41NiA1NTAuNzg0IDExNi43MDRjLTEyLjc2OC0xLjI0OC0yNS42OTYtMS45Mi0zOC43ODQtMS45Mi0xMTguNDMyIDAtMjI0Ljg0OCA1Mi4xNi0yOTcuNjggMTM0LjY0TDM0NS4xNjggNDY2LjU2eiIgcC1pZD0iMzIwNiIgZmlsbD0iIzJjYWFkMiI+PC9wYXRoPjxwYXRoIGQ9Ik00MjggODk2LjcybDEyNS43OTItMjE5LjM3NkwxNTAuOTc2IDY3Ny4zNDRjNTIuODMyIDExNC44OTYgMTU4Ljg2NCAyMDAuMzg0IDI4Ni40IDIyNC43NTJMNDI4IDg5Ni43MnoiIHAtaWQ9IjMyMDciIGZpbGw9IiMyY2FhZDIiPjwvcGF0aD48cGF0aCBkPSJNNjM2LjE5MiAzOTEuNTg0IDgzNi45NzYgNzQwYzQ1LjQ1Ni02NC41OTIgNzIuMjU2LTE0My4yIDcyLjI1Ni0yMjggMC00MS45NjgtNi41OTItODIuNDE2LTE4LjcyLTEyMC40MTZMNjM2LjE5MiAzOTEuNTg0eiIgcC1pZD0iMzIwOCIgZmlsbD0iIzJjYWFkMiI+PC9wYXRoPjxwYXRoIGQ9Ik02NzcuMTIgNTU4Ljc2OCA0NzcuMTA0IDkwNy42YzExLjUwNCAxLjAwOCAyMy4xMzYgMS42MTYgMzQuODk2IDEuNjE2IDExNS43NDQgMCAyMjAuMDQ4LTQ5Ljc3NiAyOTIuNzItMTI5LjAyNEw2NzcuMTIgNTU4Ljc2OHoiIHAtaWQ9IjMyMDkiIGZpbGw9IiMyY2FhZDIiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_QH_CAMERA_CATEGORY}" id="QH_CAMERA_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_CAMERA_ICO}">
    <block type="PY_qdp_k210_camera_init">
        <value name="frame">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_camera_fill_in_light">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="PY_qdp_k210_camera_snapshot" />
    <block type="PY_qdp_k210_camera_shutdown" />
    <block type="PY_qdp_k210_camera_setmun">
        <value name="num">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
  </block>
  <block type="PY_qdp_k210_camera_getinfo"></block>
  <block type="PY_qdp_k210_camera_set_windowing">
        <value name="numa">
          <shadow type="math_number">
            <field name="NUM">224</field>
          </shadow>
        </value>
        <value name="numb">
          <shadow type="math_number">
            <field name="NUM">224</field>
          </shadow>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
