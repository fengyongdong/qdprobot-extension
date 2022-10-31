const mpy_esp32_espnow = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_espnow.name',
        default: 'ESP SPI'
    }),
    extensionId: 'mpy_esp32_espnow',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_espnow.png`,
    description: formatMessage({
        id: 'mpy_esp32_espnow.description',
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

module.exports = mpy_esp32_espnow;
