const mpy_simple_blynk = formatMessage => ({
    name: formatMessage({
        id: 'mpy_simple_blynk.name',
        default: 'Blynk'
    }),
    extensionId: 'mpy_simple_blynk',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/classicsblynk.png`,
    description: formatMessage({
        id: 'mpy_simple_blynk.description',
        default: 'Simple Blynk IOT.'
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

module.exports = mpy_simple_blynk;
