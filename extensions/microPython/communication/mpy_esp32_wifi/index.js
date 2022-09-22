const mpy_esp32_wifi = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_wifi.name',
        default: 'Infrared'
    }),
    extensionId: 'mpy_esp32_wifi',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_wifi.png`,
    description: formatMessage({
        id: 'mpy_esp32_wifi.description',
        default: 'Infrared communication.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = mpy_esp32_wifi;
