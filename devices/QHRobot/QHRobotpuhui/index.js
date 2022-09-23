const QDPRobotpuhui = formatMessage => ({
    name: '普惠AI人工智能系列',
    deviceId: 'QDPRobotpuhui_arduinoUnoUltra',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    iconURL: 'asset/puhui1.png',
    description: formatMessage({
        id: 'QDPRobotpuhui.description',
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
    connectionIconURL: 'asset/puhui2.png',
    connectionSmallIconURL: 'asset/puhui3.png',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotpuhui'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://gx.qdprobot.com/'
});

module.exports = QDPRobotpuhui;
