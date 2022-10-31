/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_TEXT_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MTc5MDg5MTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTMyIDAgOTcyLjY1MTk4NyAwIDk3Mi42NTE5ODcgMzE2LjY1MTU3NiA5MzEuMDUzMzcgMzE2LjY1MTU3NkM5MzEuMDUzMzcgMzE2LjY1MTU3NiA4NTEuNjY0NjI3IDEyMy4zMDE1ODcgNzU3Ljk5Njk2IDEwNi40MjY0ODggNjY0LjMyNjk0NSA4OS41NTEzODggNTk5LjIxNzEzOCAxMDEuMTYzNjY1IDU5OS4yMTcxMzggMTAxLjE2MzY2NUw1OTguMDQ4Mjc1IDkwOC40NjA2NTlDNTk4LjA0ODI3NSA5MDguNDYwNjU5IDYyNC4wNDYzODIgOTYzLjAyNzIwNiA2NjYuOTU3MTgxIDk2Ni44OTc5NjVMNzYxLjk0ODc4MSA5NjYuODk3OTY1IDc2MS45NDg3ODEgMTAyMi42MzMzNyAyNDIuNzc3MjE0IDEwMjIuNjMzMzcgMjQ0LjA5MDU3IDk2NS41MTE3NzYgMzI3LjI4ODk4IDk2NC4xOTYwN0MzMjcuMjg4OTggOTY0LjE5NjA3IDM4OS43NjUwMjcgOTQ0LjY4OTU1NSAzODkuNzY1MDI3IDg5OS4yNTg5NDQgMzg5Ljc2NTAyNyA4NTMuODk2NDc0IDM5MS4wODMwODMgMTA3LjY2ODE4NSAzOTEuMDgzMDgzIDEwNy42NjgxODUgMzkxLjA4MzA4MyAxMDcuNjY4MTg1IDI4OC4zMjc2NDkgOTMuNDk2MTU2IDIzNC45MzkzNjkgMTA2LjQ5Njk3MiAxODEuNjI1MDk3IDExOS40MjczMDQgODcuODgxMDczIDE5Ny4yOTcxMDYgNzMuNTk4NjE4IDMxMS40NjI3NjNMMzIgMzEyLjc3ODQ2OCAzMiAwIDMyIDAgMzIgMFoiIHAtaWQ9IjI2MjIiIGZpbGw9IiM1YmE1OGMiPjwvcGF0aD48L3N2Zz4=';

    return `
<category name="%{BKY_QH_TEXT_CATEGORY}" id="QH_TEXT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_TEXT_ICO}">
  <block type="py_text">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT">QDProbot</field>
      </shadow>
    </value>
  </block> 
  <label text="%{BKY_QH_TYPE_CONVERT_LABEL}"></label>
  <block type="ascii_to_char">
    <value name="VAR">
      <shadow type="math_number">
        <field name="NUM">65</field>
      </shadow>
    </value>
  </block>
  <block type="char_to_ascii">
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">a</field>
      </shadow>
    </value>
  </block>
  <block type="number_to_text">
    <value name="VAR">
      <shadow type="math_number">
        <field name="NUM">65</field>
      </shadow>
    </value>
  </block>
  <block type="convert_to_int">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">123456</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="convert_to_float">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">3.14</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="convert_to_bool">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">1</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="convert_round">
    <value name="VAR">
      <shadow type="math_number">
        <field name="NUM">3.14</field>
      </shadow>
    </value>
    <value name="type">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <label text="%{BKY_QH_TYPE_JNDGE_LABEL}"></label>
  <block type="string_start_end">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">hello robot</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="OBJ">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">hello</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="string_isalpha">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <label text="%{BKY_QH_VALUE_SLICE_LABEL}"></label>
  <block type="string_get_value">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="num">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="string_slice">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="from">
      <shadow type="text">
        <field name="TEXT">0</field>
      </shadow>
    </value>
    <value name="to">
      <shadow type="text">
        <field name="TEXT">1</field>
      </shadow>
    </value>
  </block>
  <label text="%{BKY_QH_STRING_ENCODE_DECODE}"></label>
  <block type="text_encode">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <label text="%{BKY_QH_STRING_FIND}"></label>
  <block type="text_find">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="STR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="text_count">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="STR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <label text="%{BKY_QH_STRING_EDIT}"></label>
  <block type="text_replace">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abcdef</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="STR1">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="STR2">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">ABC</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="text_split">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc,def</field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="VAL">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
  <block type="text_format">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">from {} to {} </field>
          </shadow>
        </value>
      </shadow>
    </value>
    <value name="VAL">
      <shadow type="text">
        <field name="TEXT">1,9</field>
      </shadow>
    </value>
  </block> 
  <label text="%{BKY_QH_STRING_CONVERT_CASE}"></label>
  <block type="text_convert_case">
    <value name="VAR">
      <shadow type="py_text">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abA,def</field>
          </shadow>
        </value>
      </shadow>
    </value>
  </block>
</category>
`;

}

exports = addToolbox;
