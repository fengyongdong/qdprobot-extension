/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const QH_MQTT_ICO = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0aXRsZT5PcGVuQmxvY2s8L3RpdGxlPgoKIDxnIGlkPSJMYXllcl8xIj4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPGVsbGlwc2UgZmlsbD0iI2NiYzY2OCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAiIGN4PSI2NiIgY3k9IjYzIiBpZD0ic3ZnXzQiIHJ4PSI2MCIgcnk9IjYwIiBvcGFjaXR5PSIwLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIsMiIvPgogIDx0ZXh0IGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgeD0iLTcuMTI3OTYiIHk9IjY3LjQ5Nzc1IiBpZD0ic3ZnXzEiIGZvbnQtc2l6ZT0iNTAiIGZvbnQtZmFtaWx5PSInQWxlZ3JleWEnIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0cm9rZT0iIzAwMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MjA1ODEgMCAwIDAuODA5MTU0IDE1Ljk3MjkgMjEuOTY3NikiPk1RVFQ8L3RleHQ+CiA8L2c+Cjwvc3ZnPg==';

    return `
<category name="MQTT" id="QH_MQTT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_MQTT_ICO}">
<block type="MQTT_subscribe_plus">
  <value name="server">
    <shadow type="text">
      <field name="TEXT">qdprobot.com</field>
    </shadow>
  </value> 
  <value name="port">
    <shadow type="text">
      <field name="TEXT">1883</field>
    </shadow>
  </value>
  <value name="client_id">
    <shadow type="text">
      <field name="TEXT">MAC address</field>
    </shadow>
  </value>  
    <value name="mqtt_username">
    <shadow type="text">
      <field name="TEXT">admin88</field>
    </shadow>
  </value> 
  <value name="mqtt_password">
    <shadow type="text">
      <field name="TEXT">88888888</field>
    </shadow>
  </value>        
</block>
<block type="MQTT_received_the_news">
    <value name="topic">
        <shadow type="text">
            <field name="TEXT">text</field>
        </shadow>
    </value>
</block>
<block type="MQTT_publish">
  <value name="data">
    <shadow type="text">
      <field name="TEXT">Hello</field>
    </shadow>
  </value> 
  <value name="topic">
    <shadow type="text">
      <field name="TEXT">text</field>
    </shadow>
  </value>       
</block>

</category>
`;
}

exports = addToolbox;
