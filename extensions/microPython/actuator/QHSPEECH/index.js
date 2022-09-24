const mpyQHSPEECH = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHSPEECH.name',
        default: 'SPEECH'
    }),
    extensionId: 'mpyQHSPEECH',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/SPEECH.png`,
    description: formatMessage({
        id: 'mpyQHSPEECH.description',
        default: 'SPEECH.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpyQHSPEECH;
