const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'passiveBuzzer.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'passiveBuzzer',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266','QDPRobot_arduinoUnoUltra',
    'QDPRobotC02_arduinoESP32QDP', 'QDPRobotIOT_arduinoEsp8266'], // TODO 需要测试esp8266兼容性
    author: 'ArthurZheng',
    iconURL: `asset/passiveBuzzer.png`,
    description: formatMessage({
        id: 'passiveBuzzer.description',
        default: 'Unlike the active buzzer, the passive buzzer can be used to make different tones of sound and play some ringtones.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: 'http://www.qdprobot.com'
});

module.exports = passiveBuzzer;
