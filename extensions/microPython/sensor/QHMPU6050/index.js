const mpyQHMPU6050 = formatMessage => ({
    name: formatMessage({
        id: 'mpyQHMPU6050.name',
        default: 'GYRO'
    }),
    extensionId: 'mpyQHMPU6050',
    version: '1.0.0',
    type: 'microPython',
    supportDevice: ['microPythonEsp32'],
    author: 'QDProbot',
    iconURL: `asset/mpu6050.png`,
    description: formatMessage({
        id: 'mpyQHMPU6050.description',
        default: 'MPU6050.'
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

module.exports = mpyQHMPU6050;
