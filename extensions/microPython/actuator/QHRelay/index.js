const mpyQHRelay = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHRelay.name',
        default: 'Relay'
    }),
    extensionId: 'mpyQHRelay',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/relay.png`,
    description: formatMessage({
        id: 'mpyQHRelay.description',
        default: 'Relay.'
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

module.exports = mpyQHRelay;
