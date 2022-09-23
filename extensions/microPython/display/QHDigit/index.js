const mpyQHDigit = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHDigit.name',
        default: 'Digital Tube'
    }),
    extensionId: 'mpyQHDigit',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QHDigit.png`,
    description: formatMessage({
        id: 'mpyQHDigit.description',
        default: 'Digital Tube.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpyQHDigit;
