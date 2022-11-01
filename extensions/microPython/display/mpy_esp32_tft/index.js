const mpy_esp32_tft = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_tft.name',
        default: 'TFT'
    }),
    extensionId: 'mpy_esp32_tft',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32', 'microPythonEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_tft.png`,
    description: formatMessage({
        id: 'mpy_esp32_tft.description',
        default: 'TFT.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpy_esp32_tft;
