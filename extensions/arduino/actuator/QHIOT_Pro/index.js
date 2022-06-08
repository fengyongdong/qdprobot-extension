const QHIOT_Pro = formatMessage => ({
    name: formatMessage({
        id: 'QHIOT_Pro.name',
        default: 'QHIOT_Pro'
    }),
    extensionId: 'QHIOT_Pro',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QHIOT_Pro.png`,
    description: formatMessage({
        id: 'QHIOT_Pro.description',
        default: 'This is an advanced IOT control board at the core of ESP32.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QHIOT_Pro;
