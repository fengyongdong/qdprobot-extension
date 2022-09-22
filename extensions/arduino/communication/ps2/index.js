const ps2 = formatMessage => ({
    name: formatMessage({
        id: 'ps2.name',
        default: 'PS2 Remote Control'
    }),
    extensionId: 'ps2',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266','QDPRobot_arduinoUnoUltra',
    'QDPRobotC02_arduinoESP32QDP', 'QDPRobotIOT_arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/ps2.png`,
    description: formatMessage({
        id: 'ps2.description',
        default: 'PS2 wireless remote controller with 4 signal lines.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'http://www.qdprobot.com'
});

module.exports = ps2;
