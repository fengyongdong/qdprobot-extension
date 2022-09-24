const mpyQHSensor = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHSensor.name',
        default: 'Audio'
    }),
    extensionId: 'mpyQHSensor',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/sensor.png`,
    description: formatMessage({
        id: 'mpyQHSensor.description',
        default: 'sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpyQHSensor;
