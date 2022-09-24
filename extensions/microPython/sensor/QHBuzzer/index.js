const mpyQHBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHBuzzer.name',
        default: 'Buzzer'
    }),
    extensionId: 'mpyQHBuzzer',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/buzzer.png`,
    description: formatMessage({
        id: 'mpyQHBuzzer.description',
        default: 'Buzzer.'
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

module.exports = mpyQHBuzzer;
