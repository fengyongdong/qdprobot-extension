const eightDigitDisplay = formatMessage => ({
    name: formatMessage({
        id: 'eightDigitDisplay.name',
        default: '8-Digit Display'
    }),
    extensionId: 'eightDigitDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32','QDPRobot_arduinoUnoUltra',
    'QDPRobotC02_arduinoESP32QDP', 'QDPRobotIOT_arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/eightDigitDisplay.png`,
    description: formatMessage({
        id: 'eightDigitDisplay.description',
        default: '8-digit display module based on MAX7219.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'http://www.qdprobot.com'
});

module.exports = eightDigitDisplay;
