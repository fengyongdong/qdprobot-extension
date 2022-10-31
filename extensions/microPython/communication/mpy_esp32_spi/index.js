const mpy_esp32_spi = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_spi.name',
        default: 'ESP SPI'
    }),
    extensionId: 'mpy_esp32_spi',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_spi.png`,
    description: formatMessage({
        id: 'mpy_esp32_spi.description',
        default: 'Esp32 SPI.'
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

module.exports = mpy_esp32_spi;
