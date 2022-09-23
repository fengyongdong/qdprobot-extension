const mpyQHASR = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHASR.name',
        default: 'ASR'
    }),
    extensionId: 'mpyQHASR',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/ASR.png`,
    description: formatMessage({
        id: 'mpyQHASR.description',
        default: 'ASR.'
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

module.exports = mpyQHASR;
