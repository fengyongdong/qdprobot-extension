const mpyQHFile = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHFile.name',
        default: 'File'
    }),
    extensionId: 'mpyQHFile',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32','microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/file.png`,
    description: formatMessage({
        id: 'mpyQHFile.description',
        default: 'File of microPython.'
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

module.exports = mpyQHFile;
