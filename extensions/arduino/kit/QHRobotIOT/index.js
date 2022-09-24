const  QDPRobotIOT= formatMessage => ({
    name: formatMessage({
        id: 'QDPRobotIOT.name',
        default: '物联屏/IOTstart',
        description: '基于ESP8266核心'
    }),
    extensionId: 'QDPRobotIOT',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp8266','QDPRobotIOT_arduinoEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/IOTstart8266.png`,
    description: formatMessage({
        id: 'QDPRobotIOT.description',
        default: '物联屏/IOTstart.',
        description: 'QDPRobotIOT.description'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QDPRobotIOT;
