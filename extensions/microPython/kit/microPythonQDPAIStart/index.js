const microPythonQDPAIStart = formatMessage => ({
    name: formatMessage({
        id: 'microPythonQDPAIStart.name',
        default: 'AIStart'
    }),
    extensionId: 'microPythonQDPAIStart',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/QDPAIStart.png`,
    description: formatMessage({
        id: 'microPythonQDPAIStart.description',
        default: 'AIStart'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit','actuator', 'sensor', 'display', 'communication', 'other'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = microPythonQDPAIStart;
