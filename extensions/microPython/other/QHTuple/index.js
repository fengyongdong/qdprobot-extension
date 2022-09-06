const mpyQHTuple = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHTuple.name',
        default: 'Tuple'
    }),
    extensionId: 'mpyQHTuple',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32','microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/tuple.png`,
    description: formatMessage({
        id: 'mpyQHTuple.description',
        default: 'Tuple of microPython.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = mpyQHTuple;
