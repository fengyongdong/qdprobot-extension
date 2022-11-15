/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const QH_WEB_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwNzkwNTUwMTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1OSA3OS4yN0gxNjVhOTAgOTAgMCAwIDAtOTAgOTB2Njk0YTkwIDkwIDAgMCAwIDkwIDkwaDY5NGE5MCA5MCAwIDAgMCA5MC05MHYtNjk0YTkwIDkwIDAgMCAwLTkwLTkweiBtLTY5MyA2MGg2OTRhMzAgMzAgMCAwIDEgMzAgMzB2MTQ1SDEzNnYtMTQ1YTMwIDMwIDAgMCAxIDMwLTMweiBtNjkzIDc1NEgxNjVhMzAgMzAgMCAwIDEtMzAtMzB2LTQ4OWg3NTR2NDg5YTMwIDMwIDAgMCAxLTMwIDMweiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjMuNDcgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuMDggMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODIuNjkgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyNCI+PC9wYXRoPjwvc3ZnPg==';
    return `
<category name="%{BKY_QH_WEB_PRO_CATEGORY}" id="QH_WEB_PRO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_WEB_ICO}">
    <block type="espdashpro_display_components">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">温度</field>
            </shadow>
        </value>
        <value name="unit">
            <shadow type="text">
                <field name="TEXT">℃</field>
            </shadow>
        </value>
        <value name="value">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value> 
    </block>
    <block type="espdashpro_state_component">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">系统状态</field>
            </shadow>
        </value>
      <value name="value">
        <shadow type="text">
          <field name="TEXT">正常</field>
        </shadow>
      </value>  
    </block>
    <block type="espdashpro_update_chart">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">温度变换曲线</field>
            </shadow>
        </value>
        <value name="abscissa">
            <shadow type="QH_variables_get">
                <value name="VAR">
                    <shadow type="text">
                        <field name="TEXT">mylistx</field>
                    </shadow>
                </value>
            </shadow>
        </value>
        <value name="ordinate">
            <shadow type="QH_variables_get">
                <value name="VAR">
                    <shadow type="text">
                        <field name="TEXT">mylisty</field>
                    </shadow>
                </value>
            </shadow>
        </value>
    </block>
    <block type="espdashpro_display_components1">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">卧室开灯</field>
            </shadow>
        </value>
        <value name="value">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
    </block>
    <block type="espdashpro_get_component_value">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">卧室开灯</field>
            </shadow>
        </value>
        <value name="topic">
            <shadow type="text">
                <field name="TEXT">text</field>
            </shadow>
        </value>
    </block>
    <block type="espdashpro_get_joystick_value">
      <value name="Label">
          <shadow type="text">
              <field name="TEXT">摇杆</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_set_title">
      <value name="title">
          <shadow type="text">
              <field name="TEXT">齐护机器人</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_setting_permissions">
      <value name="name">
          <shadow type="text">
              <field name="TEXT">qdprobot</field>
          </shadow>
      </value>
      <value name="pass">
          <shadow type="text">
              <field name="TEXT">123456</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_add_page">
      <value name="page">
          <shadow type="text">
              <field name="TEXT">卧室</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_add_statistics">
      <value name="Statistic">
          <shadow type="text">
              <field name="TEXT">作者</field>
          </shadow>
      </value>
      <value name="Value">
          <shadow type="text">
              <field name="TEXT">齐护机器人</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_set_component_page">
    </block>
</category>
`;
}

exports = addToolbox;
