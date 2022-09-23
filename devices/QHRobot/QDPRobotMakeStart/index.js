const QDPRobotMakeStart = formatMessage => ({
    name: 'MakeStart编程套件',
    deviceId: 'QDPRobotMakeStart_arduinoUnoUltra',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    iconURL: 'asset/MakeStart1.png',
    description: formatMessage({
        id: 'QDPRobotMakeStart.description',
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
    connectionIconURL: 'asset/MakeStart2.png',
    connectionSmallIconURL: 'asset/MakeStart3.png',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotMakeStart'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://gx.qdprobot.com/'
});

module.exports = QDPRobotMakeStart;
