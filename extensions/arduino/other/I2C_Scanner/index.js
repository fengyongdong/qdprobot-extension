const I2C_Scanner = formatMessage => ({
    name: formatMessage({
        id: 'I2C_Scanner.name',
        default: 'I2C Scanner'
    }),
    extensionId: 'I2C_Scanner',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoMega2560', 'arduinoNano', 'arduinoEsp8266', 'arduinoEsp32', 'MatrixRobot_arduinoEsp32'],
    author: '',
    iconURL: `asset/I2C_Scanner.png`,
    description: formatMessage({
        id: 'I2C_Scanner.description',
        default: 'I2C Address Scanner, which can scan all device address connected to I2C interface.'
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

module.exports = I2C_Scanner;
