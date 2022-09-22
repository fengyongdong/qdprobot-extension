const mpy_blynk = formatMessage => ({
    name: formatMessage({
        id: 'mpy_blynk.name',
        default: 'Blynk'
    }),
    extensionId: 'mpy_blynk',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/blynk.png`,
    description: formatMessage({
        id: 'mpy_blynk.description',
        default: 'Blynk library.'
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

module.exports = mpy_blynk;
