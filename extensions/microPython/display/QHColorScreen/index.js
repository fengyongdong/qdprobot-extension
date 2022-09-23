const mpyQHColorScreen = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHColorScreen.name',
        default: 'Color Screen'
    }),
    extensionId: 'mpyQHColorScreen',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/screen.png`,
    description: formatMessage({
        id: 'mpyQHColorScreen.description',
        default: 'Color Screen.'
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

module.exports = mpyQHColorScreen;
