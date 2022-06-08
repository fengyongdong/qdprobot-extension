const  QDP_blynk= formatMessage => ({
    name: formatMessage({
        id: 'QDP_blynk.name',
        default: 'IOTstart物联网模块',
        description: '简单快速应用连接Blynk平台'
    }),
    extensionId: 'QDP_blynk',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560','QDPRobotC02_arduinoESP32QDP','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/classicsblynk.png`,
    description: formatMessage({
        id: 'QDP_blynk.description',
        default: '简单快速应用连接Blynk平台。',
        description: 'BlynkIOT ESP8266 Module'
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

module.exports = QDP_blynk;
