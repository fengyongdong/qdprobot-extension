const mpyQHDict = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHDict.name',
        default: 'Dict'
    }),
    extensionId: 'mpyQHDict',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32','microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/dict.png`,
    description: formatMessage({
        id: 'mpyQHDict.description',
        default: 'Dict of microPython.'
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

module.exports = mpyQHDict;
