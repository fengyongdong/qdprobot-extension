/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_AI_STUDIO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzMTE3NjIzODM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzNzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTUwMS44MjQgMzJDMzAzLjU1MiAzMiAxNDEuNTA0IDE3Ni45OTIgMTQxLjUwNCAzNTcuNzZjMCAyMy43MTIgMi44MTYgNDcuMTA0IDguMzIgNjkuODU2bC01MS4wMDggMTE0LjIwOGEzMiAzMiAwIDAgMCAyNC43MDQgNDQuNzM2YzU0LjI3MiA3Ljc0NCA3Ni42NzIgMzEuMTY4IDc2LjY3MiA3Ny4zMTJ2MTExLjU1MmE2NCA2NCAwIDAgMCA2NCA2NGgyMC43MDRhNjQgNjQgMCAwIDEgNjQgNjRWOTYwYTMyIDMyIDAgMCAwIDMyIDMyaDM0NS42YTMyIDMyIDAgMCAwIDAtNjRoLTMxMy42di0yNC42MDhhMTI4IDEyOCAwIDAgMC0xMjgtMTI4aC0yMC43MzZ2LTExMS41NTJjMC02NS42NjQtMzIuMTkyLTExMC42ODgtOTEuMi0xMzEuMTM2bDM5Ljg3Mi04OS4yOGEzMS45NjggMzEuOTY4IDAgMCAwIDEuNTY4LTIxLjc5MiAyMzMuMDg4IDIzMy4wODggMCAwIDEtOC44OTYtNjMuOTA0YzAtMTQzLjcxMiAxMzEuOTM2LTI2MS43NiAyOTYuMzItMjYxLjc2czI5Ni4zMiAxMTguMDE2IDI5Ni4zMiAyNjEuNzZhMzIgMzIgMCAwIDAgNjQgMEM4NjIuMTQ0IDE3Ni45OTIgNzAwLjA2NCAzMiA1MDEuODI0IDMyek05MDQgNDQ4YTMyIDMyIDAgMCAwLTMyIDMydjM2MGEzMiAzMiAwIDAgMCA2NCAwVjQ4MGEzMiAzMiAwIDAgMC0zMi0zMnoiIHAtaWQ9IjIzNzMiIGZpbGw9IiM1NTgzOUEiPjwvcGF0aD48cGF0aCBkPSJNNjczLjg4OCA0NjYuNjU2Yy0xMS43NDQtMjUuNTY4LTQ4LjQxNi0yNC42NC01OC44MTYgMS41MzZsLTEzMi44IDMzMy43NmEzMiAzMiAwIDAgMCA1OS40ODggMjMuNjhsMzIuNjA4LTgxLjkyYzAuNTc2IDAuMDMyIDEuMDg4IDAuMzIgMS42NjQgMC4zMmgxNTQuODQ4bDM4LjE3NiA4My4xMDRhMzEuOTY4IDMxLjk2OCAwIDEgMCA1OC4xNDQtMjYuNzJsLTE1My4zMTItMzMzLjc2ek01OTkuNjggNjgwbDQ3LjI2NC0xMTguNzIgNTQuNTI4IDExOC43Mkg1OTkuNjh6IiBwLWlkPSIyMzc0IiBmaWxsPSIjNTU4MzlBIj48L3BhdGg+PC9zdmc+";


    return `
<category name="%{BKY_QH_AI_STUDIO_CATEGORY}" id="QH_AI_STUDIO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_AI_STUDIO_ICO}">
    <block type="PY_qdp_k210_tuple_anchor">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437, 6.92275, 6.718375, 9.01025</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_tuple_calss">
        <value name="TEXT">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">"name1", "name2", "name3", "name4"</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_KPU_load">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">0x300000</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_KPU_load1">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart.kmodel</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_KPU_init_yolo2">
        <value name="threshold">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
        <value name="nms_value">
          <shadow type="math_number">
            <field name="NUM">0.3</field>
          </shadow>
        </value>
        <value name="anchor_num">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
  </block>
  <block type="PY_qdp_k210_KPU_run_yolo2"></block>
  <block type="PY_qdp_k210_KPU_forward"></block>
  <block type="PY_qdp_k210_KPU_analysis"></block>
  <block type="PY_qdp_k210_ailocal_training">
    <value name="sample">
      <shadow type="math_number">
        <field name="NUM">5</field>
      </shadow>
    </value>
    <value name="save">
      <shadow type="text">
        <field name="TEXT">QDPK210_AIstart.classifier</field>
      </shadow>
    </value>
  </block>
  <block type="PY_qdp_k210_ailocal_loading">
    <value name="path">
            <shadow type="text">
                <field name="TEXT">QDPK210_AIstart.classifier</field>
            </shadow>
        </value>
  </block>
  <block type="PY_qdp_k210_ailocal_predictg"></block>
</category>
`;

}

exports = addToolbox;

