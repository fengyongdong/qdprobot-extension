const QH_MQTT = formatMessage => ({
    name: formatMessage({
        id: 'QH_MQTT.name',
        default: 'QH_MQTT',
        description: 'QH_MQTT'
    }),
    extensionId: 'QH_MQTT',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32','QDPRobotIOT_Esp8266','arduinoEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/QH_MQTT.png`,
    description: formatMessage({
        id: 'QH_MQTT.description',
        default: '物联网开源app、小程序制作.',
        description: '通用QH_MQTT连接'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QH_MQTT;
