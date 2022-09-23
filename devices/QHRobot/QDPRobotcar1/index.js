const QDPRobotcar1 = formatMessage => ({
    name: 'QDPRobotcar1',
    deviceId: 'QDPRobotcar1_arduinoUnoUltra',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    iconURL: 'asset/QDPRobotcar11.png',
    description: formatMessage({
        id: 'QDPRobotcar1.description',
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
    connectionIconURL: 'asset/QDPRobotcar12.png',
    connectionSmallIconURL: 'asset/QDPRobotcar13.png',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotcar1'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://gx.qdprobot.com/'
});

module.exports = QDPRobotcar1;
