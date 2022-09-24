const mpyQH_K210_LCD = formatMessage => ({
    name: formatMessage({
        id: 'mpyQH_K210_LCD.name',
        default: 'Audio'
    }),
    extensionId: 'mpyQH_K210_LCD',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/LCD.png`,
    description: formatMessage({
        id: 'mpyQH_K210_LCD.description',
        default: 'Audio.'
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

module.exports = mpyQH_K210_LCD;
