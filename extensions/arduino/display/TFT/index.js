const tft = formatMessage => ({
    name: 'TFT',
    extensionId: 'tft',
    version: '0.0.1',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'QDPRobot',
    iconURL: `asset/tft.png`,
    description: formatMessage({
        id: 'tft.description',
        default: 'I2C tft display based on SSD1306 drivers.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = tft;
