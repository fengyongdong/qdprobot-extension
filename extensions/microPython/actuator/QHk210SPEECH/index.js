const mpyQHk210SPEECH = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHk210SPEECH.name',
        default: 'SPEECH'
    }),
    extensionId: 'mpyQHk210SPEECH',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/SPEECH.png`,
    description: formatMessage({
        id: 'mpyQHk210SPEECH.description',
        default: 'K210 SPEECH.'
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

module.exports = mpyQHk210SPEECH;
