const QDPRobotC02 = formatMessage => ({
    name: 'QDPRobotC02',
    extensionId: 'QDPRobotC02',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QH.png`,
    description: formatMessage({
        id: 'QDPRobotC02.description',
        default: 'QDP robot C02',
        description: 'QDPRobotC02.description'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit','actuator', 'sensor', 'display', 'communication', 'other'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QDPRobotC02;
