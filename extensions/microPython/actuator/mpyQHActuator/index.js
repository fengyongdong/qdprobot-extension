const mpyQHActuator = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHActuator.name',
        default: 'Audio'
    }),
    extensionId: 'mpyQHActuator',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/actuator.png`,
    description: formatMessage({
        id: 'mpyQHActuator.description',
        default: 'actuator.'
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

module.exports = mpyQHActuator;
