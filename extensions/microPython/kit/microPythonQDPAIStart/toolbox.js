/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_AI_START_ICO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0aXRsZT5PcGVuQmxvY2s8L3RpdGxlPgoKIDxnIGlkPSJMYXllcl8xIj4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPGVsbGlwc2Ugc3Ryb2tlLWRhc2hhcnJheT0iMiwyIiByeT0iNjAiIHJ4PSI2MCIgaWQ9InN2Z180IiBjeT0iNjQiIGN4PSI2NCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiNjYmM2NjgiLz4KICA8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgwLjgyMDU4MSAwIDAgMC44MDkxNTQgMTUuOTcyOSAyMS45Njc2KSIgc3Ryb2tlPSIjMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInQWxlZ3JleWEnIiBmb250LXNpemU9IjEwMCIgaWQ9InN2Z18xIiB5PSI4My41NjM5MSIgeD0iMTEuMTUxNzciIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzAwMDAwMCI+QUk8L3RleHQ+CiA8L2c+Cjwvc3ZnPg==";

    return `
<category name="AIstart" id="QH_OTHER_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_AI_START_ICO}">
    <block type="try_except_else_finally"></block>
    <block type="controls_pass"></block>
    <block type="PY_time_ticks"></block> 
    <block type="python_in">
        <value name="val">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="python_del"></block>
    <block type="system_reset"></block>
    <block type="system_gc_collect"></block>
    <block type="controls_flow_statements"></block>
    <block type="controls_thread">
        <value name="arg">
            <shadow type="text">
              <field name="TEXT">"helloworld",10</field>
            </shadow>
        </value>
    </block>
    <block type="thread_func">
        <value name="arg">
            <shadow type="text">
              <field name="TEXT">text,num</field>
            </shadow>
        </value>
    </block>
    <block type="controls_exec">
        <value name="arg">
            <shadow type="text">
              <field name="TEXT">test.py</field>
            </shadow>
        </value>
    </block>
    <block type="controls_range">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
        <value name="STEP">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
    </block>
    <block type="controls_forEach">
        <value name="LIST">
          <block type="controls_range">
            <value name="FROM">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="TO">
              <shadow type="math_number">
                <field name="NUM">5</field>
              </shadow>
            </value>
            <value name="STEP">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
          </block>
        </value>
        <value name="VAR">
          <block type="py_variables">
            <value name="name">
                <shadow type="text">
                  <field name="TEXT">i</field>
                </shadow>
            </value>
          </block>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
