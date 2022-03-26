const QHgamepad = formatMessage => ({
    name: formatMessage({
        id: 'QHgamepad.name',
        default: 'IOT-PRO'
    }),
    extensionId: 'QHgamepad',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QHgamepad.png`,
    description: formatMessage({
        id: 'QHgamepad.description',
        default: 'It\'s a wireless remote controller with an ESP32 core'
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

module.exports = QHgamepad;
