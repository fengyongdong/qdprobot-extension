const QHk210Other = formatMessage => ({
    name: formatMessage({
        id: 'QHk210Other.name',
        default: 'Advanced'
    }),
    extensionId: 'QHk210Other',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32','microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/other.png`,
    description: formatMessage({
        id: 'QHk210Other.description',
        default: 'Advanced'
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

module.exports = QHk210Other;
