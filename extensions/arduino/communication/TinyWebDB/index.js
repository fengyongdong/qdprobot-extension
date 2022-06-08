const TinyWebDB = formatMessage => ({
    name: formatMessage({
        id: 'TinyWebDB.name',
        default: '网络微数据库TinyWebDB database',
        description: 'TinyWebDB network database'
    }),
    extensionId: 'TinyWebDB',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32','QDPRobotIOT_Esp8266','arduinoEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/TinyWebDB.png`,
    description: formatMessage({
        id: 'TinyWebDB.description',
        default: '将数据存在网络云库上读取.',
        description: 'TinyWebDB network database'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = TinyWebDB;
