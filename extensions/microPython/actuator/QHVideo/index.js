const mpyQHVideo = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHVideo.name',
        default: 'Video'
    }),
    extensionId: 'mpyQHVideo',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/Video.png`,
    description: formatMessage({
        id: 'mpyQHVideo.description',
        default: 'Video.'
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

module.exports = mpyQHVideo;
