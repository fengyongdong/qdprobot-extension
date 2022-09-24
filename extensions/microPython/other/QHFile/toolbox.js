/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_FILE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzODM5OTI3Mzg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjYgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4LjI1IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTEwMTUuODA4IDc5MC41MjhxNS4xMiAzMC43Mi0xMi44IDU1LjI5NnQtNDguNjQgMjkuNjk2bC0xMjIuODggMTkuNDU2cS0yOS42OTYgNS4xMi01NC43ODQtMTIuOHQtMzAuMjA4LTQ4LjY0bC0xMDQuNDQ4LTY2MS41MDRxLTIuMDQ4LTE1LjM2IDEuNTM2LTI5LjE4NHQxMS43NzYtMjUuNiAyMC45OTItMTkuNDU2IDI4LjE2LTEwLjc1MmwxMjEuODU2LTE5LjQ1NnEzMC43Mi01LjEyIDU1LjI5NiAxMy4zMTJ0MjkuNjk2IDQ5LjE1MnpNNTAwLjczNiA2My40ODhxMzAuNzIgMCA1Mi4yMjQgMjEuNTA0dDIxLjUwNCA1Mi4yMjRsMCA2ODQuMDMycTAgMzAuNzItMjEuNTA0IDUyLjIyNHQtNTIuMjI0IDIxLjUwNGwtMTA2LjQ5NiAwcS0zMC43MiAwLTUyLjIyNC0yMS41MDR0LTIxLjUwNC01Mi4yMjRsMC02ODQuMDMycTAtMzAuNzIgMTYuMzg0LTUyLjIyNHQ0OC4xMjgtMjEuNTA0bDExNS43MTIgMHpNNTAwLjczNiA1NzkuNTg0cTEwLjI0IDAgMTcuNDA4LTkuNzI4dDcuMTY4LTIzLjA0cTAtMTQuMzM2LTcuMTY4LTIzLjU1MnQtMTcuNDA4LTkuMjE2bC0xMDYuNDk2IDBxLTEwLjI0IDAtMTcuNDA4IDkuMjE2dC03LjE2OCAyMy41NTJxMCAxMy4zMTIgNy4xNjggMjMuMDR0MTcuNDA4IDkuNzI4bDEwNi40OTYgMHpNNTAwLjczNiA0NDkuNTM2cTEwLjI0IDAgMTcuNDA4LTkuNzI4dDcuMTY4LTI0LjA2NC03LjE2OC0yMy41NTItMTcuNDA4LTkuMjE2bC0xMDYuNDk2IDBxLTEwLjI0IDAtMTcuNDA4IDkuMjE2dC03LjE2OCAyMy41NTIgNy4xNjggMjQuMDY0IDE3LjQwOCA5LjcyOGwxMDYuNDk2IDB6TTE3OS4yIDYzLjQ4OHEzMC43MiAwIDUyLjczNiAyMS41MDR0MjIuMDE2IDUyLjIyNGwwIDY4NC4wMzJxMCAzMC43Mi0yMi4wMTYgNTIuMjI0dC01Mi43MzYgMjEuNTA0bC0xMDYuNDk2IDBxLTMwLjcyIDAtNTIuNzM2LTIxLjUwNHQtMjIuMDE2LTUyLjIyNGwwLTY4NC4wMzJxMC0zMC43MiAyMi4wMTYtNTIuMjI0dDUyLjczNi0yMS41MDRsMTA2LjQ5NiAwek03Ni44IDMxOS40ODhxLTExLjI2NCAwLTE4LjQzMiA5LjIxNnQtNy4xNjggMjMuNTUycTAgMTMuMzEyIDcuMTY4IDIzLjA0dDE4LjQzMiA5LjcyOGw5OC4zMDQgMHExMS4yNjQgMCAxNy45Mi05LjcyOHQ2LjY1Ni0yMy4wNHEwLTE0LjMzNi02LjY1Ni0yMy41NTJ0LTE3LjkyLTkuMjE2bC05OC4zMDQgMHpNMTc5LjIgNjQxLjAyNHExMS4yNjQgMCAxNy45Mi05LjIxNnQ2LjY1Ni0yMi41MjhxMC0xNC4zMzYtNi42NTYtMjMuMDR0LTE3LjkyLTguNzA0bC0xMDIuNCAwcS0xMS4yNjQgMC0xOC40MzIgOC43MDR0LTcuMTY4IDIzLjA0cTAgMTMuMzEyIDcuMTY4IDIyLjUyOHQxOC40MzIgOS4yMTZsMTAyLjQgMHpNMTc5LjIgNTE1LjA3MnExMS4yNjQgMCAxNy45Mi05LjIxNnQ2LjY1Ni0yMy41NTItNi42NTYtMjMuNTUyLTE3LjkyLTkuMjE2bC0xMDIuNCAwcS0xMS4yNjQgMC0xOC40MzIgOS4yMTZ0LTcuMTY4IDIzLjU1MiA3LjE2OCAyMy41NTIgMTguNDMyIDkuMjE2bDEwMi40IDB6IiBwLWlkPSI0MjgyIiBmaWxsPSIjYTU1YjViIj48L3BhdGg+PC9zdmc+';

    return `
<category name="%{BKY_QH_FILE_CATEGORY}" id="QH_FILE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_FILE_ICO}">
     <block type="storage_fileopen">
        <value name="FILENAME">
          <shadow type="text">
            <field name="TEXT">filename.txt</field>
          </shadow>
        </value>
    </block>
    <block type="storage_file_write">
        <value name="data">
          <shadow type="text">
            <field name="TEXT">hello world</field>
          </shadow>
        </value>
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_get_contents_without_para">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_get_contents">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
        <value name="SIZE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>
    <block type="storage_can_write_ornot">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_get_filename">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_close_file">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_list_all_files"></block>
    <block type="storage_get_current_dir"></block>
    <block type="storage_change_dir">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="storage_make_dir">
        <value name="PATH">
          <shadow type="text">
            <field name="TEXT">path</field>
          </shadow>
        </value>
    </block>
    <block type="storage_delete_file">
        <value name="FILE">
          <shadow type="text">
            <field name="TEXT">filename.txt</field>
          </shadow>
        </value>
    </block>
      <block type="storage_rename">
        <value name="FILE">
          <shadow type="text">
            <field name="TEXT">srcname.txt</field>
          </shadow>
        </value>
        <value name="NEWFILE">
          <shadow type="text">
            <field name="TEXT">dstname.txt</field>
          </shadow>
        </value>
      </block>
      <block type="storage_get_file_size">
        <value name="FILE">
          <shadow type="text">
            <field name="TEXT">filename.txt</field>
          </shadow>
        </value>
      </block>
      <block type="storage_is_file">
        <value name="FILE">
          <shadow type="text">
            <field name="TEXT">path</field>
          </shadow>
        </value>
      </block>
      <block type="storage_file_tell">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
      </block>
      <block type="storage_file_seek">
        <value name="FILE">
            <block type="mpy_variables_name">
                <value name="name">
                  <shadow type="text">
                    <field name="TEXT">f</field>
                  </shadow>
                </value>
            </block>
        </value>
        <value name="SIZE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
</category>
`;

}

exports = addToolbox;
