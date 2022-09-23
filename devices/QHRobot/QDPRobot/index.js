const QDPRobot = formatMessage => ({
    name: 'QDPRobot UNO',
    deviceId: 'QDPRobot_arduinoUnoUltra',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    iconURL: 'asset/QDPRobot.png',
    description: formatMessage({
        id: 'QDPRobot.description',
        default: 'QDProbot.',
        description: 'Description for the QDP robot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/QDPRobot-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobot-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://gx.qdprobot.com/'
});

module.exports = QDPRobot;
