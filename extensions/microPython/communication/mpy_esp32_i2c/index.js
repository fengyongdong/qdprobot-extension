const mpy_esp32_i2c = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_i2c.name',
        default: 'ESP I2C'
    }),
    extensionId: 'mpy_esp32_i2c',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_i2c.png`,
    description: formatMessage({
        id: 'mpy_esp32_i2c.description',
        default: 'Esp32 I2C.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpy_esp32_i2c;
