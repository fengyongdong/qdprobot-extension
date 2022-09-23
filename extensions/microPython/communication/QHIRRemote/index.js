const mpyQHIRRemote = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHIRRemote.name',
        default: 'Infrared'
    }),
    extensionId: 'mpyQHIRRemote',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/ir.png`,
    description: formatMessage({
        id: 'mpyQHIRRemote.description',
        default: 'Infrared communication.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpyQHIRRemote;
