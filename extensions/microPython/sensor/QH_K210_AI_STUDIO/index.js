const QH_K210_AI_STUDIO = formatMessage => ({
    name: formatMessage({
        id: 'QH_K210_AI_STUDIO.name',
        default: 'QH_K210_AI_STUDIO'
    }),
    extensionId: 'QH_K210_AI_STUDIO',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/QH_K210_AI_STUDIO.png`,
    description: formatMessage({
        id: 'QH_K210_AI_STUDIO.description',
        default: 'QH_K210_AI_STUDIO.'
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

module.exports = QH_K210_AI_STUDIO;
