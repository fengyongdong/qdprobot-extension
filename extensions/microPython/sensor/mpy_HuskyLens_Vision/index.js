const mpy_HuskyLens_Vision = formatMessage => ({
    name: formatMessage({
        id: 'mpy_HuskyLens_Vision.name',
        default: 'mpy_HuskyLens_Vision '
    }),
    extensionId: 'mpy_HuskyLens_Vision',
    version: '1.0.0',
    supportDevice: ['microPythonEsp32','microPythonEsp8266'],
    author: 'QDProbot',
    iconURL: `asset/mpy_HuskyLens_Vision.png`,
    description: formatMessage({
        id: 'mpy_HuskyLens_Vision.description',
        default: 'Micro python HuskyLens vision'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = mpy_HuskyLens_Vision;
