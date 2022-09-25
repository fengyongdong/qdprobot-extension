const mpyQHList = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHList.name',
        default: 'List'
    }),
    extensionId: 'mpyQHList',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32', 'microPythonEsp8266', 'microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/list.png`,
    description: formatMessage({
        id: 'mpyQHList.description',
        default: 'List of microPython.'
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

module.exports = mpyQHList;
