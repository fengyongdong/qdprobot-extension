const QH_K210_AI = formatMessage => ({
    name: formatMessage({
        id: 'QH_K210_AI.name',
        default: 'QH_K210_AI'
    }),
    extensionId: 'QH_K210_AI',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/QH_K210_AI.png`,
    description: formatMessage({
        id: 'QH_K210_AI.description',
        default: 'QH_K210_AI.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QH_K210_AI;
