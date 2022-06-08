const sdCard = formatMessage => ({
    name: formatMessage({
        id: 'sdCard.name',
        default: 'SD Card Module'
    }),
    extensionId: 'sdCard',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266','QDPRobot_arduinoUnoUltra',
        'QDPRobotC02_arduinoESP32QDP', 'QDPRobotIOT_arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/sdCard.png`,
    description: formatMessage({
        id: 'sdCard.description',
        default: 'Save or read your data in SD card.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['other'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = sdCard;
