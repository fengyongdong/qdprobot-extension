const QHk210Communicate = formatMessage => ({
    name: formatMessage({
        id: 'QHk210Communicate.name',
        default: 'Audio'
    }),
    extensionId: 'QHk210Communicate',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonK210MaixDock'],
    author: 'QDProbot',
    iconURL: `asset/communication.png`,
    description: formatMessage({
        id: 'QHk210Communicate.description',
        default: 'Audio.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = QHk210Communicate;
