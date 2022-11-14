const arduino_array = formatMessage => ({
    name: formatMessage({
        id: 'arduino_array.name',
        default: 'array'
    }),
    extensionId: 'arduino_array',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoMega2560', 'arduinoNano', 'arduinoEsp8266', 'arduinoEsp32', 'MatrixRobot_arduinoEsp32'],
    author: '',
    iconURL: `asset/arduino_array.png`,
    description: formatMessage({
        id: 'arduino_array.description',
        default: 'array'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = arduino_array;
