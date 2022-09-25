const mpyQHSet = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHSet.name',
        default: 'Set'
    }),
    extensionId: 'mpyQHSet',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32', 'microPythonEsp8266', 'microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/set.png`,
    description: formatMessage({
        id: 'mpyQHSet.description',
        default: 'Set of microPython.'
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

module.exports = mpyQHSet;
