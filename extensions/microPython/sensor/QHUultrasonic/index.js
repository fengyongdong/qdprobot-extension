const mpyQHUultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHUultrasonic.name',
        default: 'Ultrasonic'
    }),
    extensionId: 'mpyQHUultrasonic',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/ultrasonic.png`,
    description: formatMessage({
        id: 'mpyQHUultrasonic.description',
        default: 'Standard ultrasonic distance measurement module.'
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

module.exports = mpyQHUultrasonic;
