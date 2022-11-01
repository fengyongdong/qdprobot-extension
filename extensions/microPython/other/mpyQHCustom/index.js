const mpyQHCustom = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHCustom.name',
        default: 'Custom'
    }),
    extensionId: 'mpyQHCustom',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32', 'microPythonEsp8266', 'microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/mpyQHCustom.png`,
    description: formatMessage({
        id: 'mpyQHCustom.description',
        default: 'Micro python Custom blocks'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpyQHCustom;
