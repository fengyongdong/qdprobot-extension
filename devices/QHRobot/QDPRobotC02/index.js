const QDPRobotC02 = formatMessage => ({
    name: 'QDPRobot ESP32',
    deviceId: 'QDPRobotC02_esp32QDP',
    manufactor: 'QDPRobot',
    learnMore: 'https://qdprobot.taobao.com',
    iconURL: 'asset/QDPRobotC02.png',
    typeList: ['arduino', 'microPython'],
    description: formatMessage({
        id: 'QDPRobotC02.description',
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
    connectionIconURL: 'asset/QDPRobotC02-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobotC02-small.svg',
    programMode: ['realtime', 'upload'],
    microPythonProgramMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotC02'],
    deviceExtensionsCompatible: 'esp32',
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = QDPRobotC02;
