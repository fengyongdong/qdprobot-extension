const mpyQHAudio = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHAudio.name',
        default: 'Audio'
    }),
    extensionId: 'mpyQHAudio',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/Audio.png`,
    description: formatMessage({
        id: 'mpyQHAudio.description',
        default: 'Audio.'
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

module.exports = mpyQHAudio;
