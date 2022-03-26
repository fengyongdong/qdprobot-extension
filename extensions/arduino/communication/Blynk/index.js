const  blynk= formatMessage => ({
    name: formatMessage({
        id: 'blynk.name',
        default: 'IOT物联网平台',
        description: 'Blynk物联网平台'
    }),
    extensionId: 'blynk',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['QDPRobotC02_arduinoESP32QDP','arduinoEsp32','arduinoEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/blynk.png`,
    description: formatMessage({
        id: 'blynk.description',
        default: 'ESP32/ESP8266 物联网.',
        description: 'BlynkIOT for ESP32/ESP8266 Module'
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

module.exports = blynk;
