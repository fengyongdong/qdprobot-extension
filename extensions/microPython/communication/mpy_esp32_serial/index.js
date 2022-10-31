const mpy_esp32_serial = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_serial.name',
        default: 'ESP Serial'
    }),
    extensionId: 'mpy_esp32_serial',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_serial.png`,
    description: formatMessage({
        id: 'mpy_esp32_serial.description',
        default: 'Serial communication.'
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

module.exports = mpy_esp32_serial;
