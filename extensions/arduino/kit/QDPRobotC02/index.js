const QDPRobotC02 = formatMessage => ({
    name: 'QDPRobotC02',
    extensionId: 'QDPRobotC02',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QH.png`,
    description: formatMessage({
        id: 'QDPRobot_C02.description',
        default: 'QDP robot C02',
        description: 'QDP robot C02'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit','actuator', 'sensor', 'display', 'communication', 'other'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QDPRobotC02;
