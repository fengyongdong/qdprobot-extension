const QHDFPlayer = formatMessage => ({
    name: formatMessage({
        id: 'QHDFPlayer.name',
        default: 'Mp3 player'
    }),
    extensionId: 'QHDFPlayer',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/Audio.png`,
    description: formatMessage({
        id: 'QHDFPlayer.description',
        default: 'Mp3 player'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QHDFPlayer;
