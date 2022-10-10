const C02Advanced = formatMessage => ({
    name: formatMessage({
        id: 'C02Advanced.name',
        default: 'C02Advanced'
    }),
    extensionId: 'C02Advanced',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/advanced.png`,
    description: formatMessage({
        id: 'C02Advanced.description',
        default: 'Advanced of C02.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = C02Advanced;
