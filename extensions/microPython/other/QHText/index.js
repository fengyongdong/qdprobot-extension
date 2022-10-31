const mpyQHText = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHText.name',
        default: 'Text'
    }),
    extensionId: 'mpyQHText',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32', 'microPythonEsp8266', 'microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/mpyQHText.png`,
    description: formatMessage({
        id: 'mpyQHText.description',
        default: 'Text of microPython.'
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

module.exports = mpyQHText;
