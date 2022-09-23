const QH_K210_CAMERA = formatMessage => ({
    name: formatMessage({
        id: 'QH_K210_CAMERA.name',
        default: 'Audio'
    }),
    extensionId: 'QH_K210_CAMERA',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/camera.png`,
    description: formatMessage({
        id: 'QH_K210_CAMERA.description',
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

module.exports = QH_K210_CAMERA;
