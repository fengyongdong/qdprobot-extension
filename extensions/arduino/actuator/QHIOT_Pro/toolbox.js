/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const IOT_PRO_Icon='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iaWNvbiI+CiA8IS0tIENyZWF0ZWQgd2l0aCBNZXRob2QgRHJhdyAtIGh0dHA6Ly9naXRodWIuY29tL2R1b3BpeGVsL01ldGhvZC1EcmF3LyAtLT4KCiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0iI2ZmZiIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjEwMiIgd2lkdGg9IjEwMiIgeT0iLTEiIHg9Ii0xIi8+CiA8L2c+CiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHJlY3Qgcng9IjUiIGlkPSJzdmdfMSIgaGVpZ2h0PSI5MCIgd2lkdGg9IjkwIiB5PSI1IiB4PSI1IiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSJudWxsIiBzdHJva2U9Im51bGwiIGZpbGw9IiNkZWI4ODciLz4KICA8dGV4dCBzdHJva2U9Im51bGwiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMiIgeT0iMzkuMDMyNzU1IiB4PSIzMC4wMjAxNDgiIGZpbGwtb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iI2ZmZmZmZiI+SU9UPC90ZXh0PgogIDx0ZXh0IHN0cm9rZT0ibnVsbCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18zIiB5PSI3My42MzU4NzUiIHg9IjE1LjMyOTA0NiIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iI2ZmZmZmZiI+Q09SRTwvdGV4dD4KIDwvZz4KPC9zdmc+'
    return `
<category name="%{BKY_QHIOT_PRO_CATEGORY}" id="QHIOT_PRO_CATEGORY" colour="#DEB887" secondaryColour="#9900FF" iconURI="${IOT_PRO_Icon}">
<block type="IOT_PRO_MOTOR_RUN">
            <value name="speed">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="IOT_PRO_MOTOR_BRAKE"></block>
    <block type="IOT_PRO_ENCODER_PAUSE_COUNT"></block>
        <block type="IOT_PRO_ENCODER_GET_COUNT"></block>
        <block type="IOT_PRO_IO_DIGITAL_WRITE"></block>
        <block type="IOT_PRO_IO_DIGITAL_READ"></block>      
        <block type="IOT_PRO_GET_LINESENSOR_STATE"></block>
</category>`;
}

exports = addToolbox;
