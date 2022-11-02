const mpy_esp32_ntp = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_ntp.name',
        default: 'ESP ntp'
    }),
    extensionId: 'mpy_esp32_ntp',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_ntp.png`,
    description: formatMessage({
        id: 'mpy_esp32_ntp.description',
        default: 'Esp32 ntp.'
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

module.exports = mpy_esp32_ntp;
