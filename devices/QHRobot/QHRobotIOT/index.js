const QDPRobotIOT = formatMessage => ({
    name: 'QDPRobot ESP8266',
    deviceId: 'QDPRobotIOT_arduinoEsp8266',
    manufactor: 'QDPRobot',
    learnMore: 'https://qdprobot.taobao.com',
    iconURL: 'asset/IOTstart8266.png',
    description: formatMessage({
        id: 'QDPRobotIOT.description',
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
    connectionIconURL: 'asset/IOTstart8266-1.png',
    connectionSmallIconURL: 'asset/IOTstart8266-2.png',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotIOT'],
    deviceExtensionsCompatible: 'arduinoEsp8266',
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = QDPRobotIOT;
