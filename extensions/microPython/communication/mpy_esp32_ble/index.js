const mpy_esp32_ble = formatMessage => ({
    name: formatMessage({
        id: 'mpy_esp32_ble.name',
        default: 'ESP BLE'
    }),
    extensionId: 'mpy_esp32_ble',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpy_esp32_ble.png`,
    description: formatMessage({
        id: 'mpy_esp32_ble.description',
        default: 'BLE communication.'
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

module.exports = mpy_esp32_ble;
