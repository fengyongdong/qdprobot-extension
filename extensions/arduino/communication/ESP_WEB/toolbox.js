/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const QH_WEB_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwNzkwNTUwMTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1OSA3OS4yN0gxNjVhOTAgOTAgMCAwIDAtOTAgOTB2Njk0YTkwIDkwIDAgMCAwIDkwIDkwaDY5NGE5MCA5MCAwIDAgMCA5MC05MHYtNjk0YTkwIDkwIDAgMCAwLTkwLTkweiBtLTY5MyA2MGg2OTRhMzAgMzAgMCAwIDEgMzAgMzB2MTQ1SDEzNnYtMTQ1YTMwIDMwIDAgMCAxIDMwLTMweiBtNjkzIDc1NEgxNjVhMzAgMzAgMCAwIDEtMzAtMzB2LTQ4OWg3NTR2NDg5YTMwIDMwIDAgMCAxLTMwIDMweiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjMuNDcgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuMDggMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyMyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODIuNjkgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iIzdiNjhlZSIgcC1pZD0iNjMyNCI+PC9wYXRoPjwvc3ZnPg==';
    return `
<category name="%{BKY_QH_WEB_CATEGORY}" id="QH_WEB_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_WEB_ICO}">
    <block type="QDP_esp32_web_page_init">
        <statement name="DO">
            <block type="QDP_make_arduino_comment_text_1">
                <field name="data">要插入的网页元素放置在这里</field>
            </block>
        </statement>
    </block>
    <block type="QDP_esp32_web_page_add">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="name">
            <shadow type="text">
                <field name="TEXT">displayName</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_addTemperatureCard">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="name">
            <shadow type="text">
                <field name="TEXT">displayName</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_addSliderCard">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="name">
            <shadow type="text">
                <field name="TEXT">displayName</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_attachSliderChanged"></block>
    <block type="QDP_esp32_web_page_SliderChanged" ></block>
    <block type="QDP_esp32_web_page_Slider_id" >
        <value name="id">
            <shadow type="text">
                <field name="TEXT">1</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_attachButtonClick"></block>
    <block type="QDP_esp32_web_page_ButtonClick" ></block>
    <block type="QDP_esp32_web_page_Button_id" >
        <value name="id">
            <shadow type="text">
                <field name="TEXT">1</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_addLineChart">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="name">
            <shadow type="text">
                <field name="TEXT">displayName</field>
            </shadow>
        </value>
        <value name="y_axis_name">
            <shadow type="text">
                <field name="TEXT">Power KwH</field>
            </shadow>
        </value>
        <value name="x_axis_value">
            <shadow type="text">
                <field name="TEXT">x_axis</field>
            </shadow>
        </value>
        <value name="y_axis_value">
            <shadow type="text">
                <field name="TEXT">y_axis</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_updateLineChart">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="x_axis_value">
            <shadow type="text">
                <field name="TEXT">x_axis</field>
            </shadow>
        </value>
        <value name="y_axis_value">
            <shadow type="text">
                <field name="TEXT">y_axis</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_web_page_update">
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="value">
            <shadow type="text">
                <field name="TEXT">1</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_web_serial_init"></block>
    <block type="QDP_web_print_data_32">
        <value name="web_printing">
            <shadow type="text">
                <field name="TEXT">0</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_web_receive_data_32"></block>
</category>
`;
}

exports = addToolbox;
