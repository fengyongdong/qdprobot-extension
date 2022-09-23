const QDPRobotC02 = formatMessage => ({
    name: 'QDPRobot ESP32',
    deviceId: 'QDPRobotC02_ESP32QDP',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    typeList: ['arduino', 'microPython'],
    iconURL: 'asset/QDPRobotC02.png',
    typeList: ['arduino', 'microPython'],
    description: formatMessage({
        id: 'QDPRobotC02.description',
        default: 'QDProbot.',
        description: 'Description for the QDP robot device'
    }),
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'asset/QDPRobotC02-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobotC02-small.svg',
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    helpLink: 'http://gx.qdprobot.com/'
});

const QDPRobotC02Arduino = formatMessage => {
    const device = QDPRobotC02(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'QDPRobotC02_arduinoESP32QDP';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['QDPRobotC02'],
    device.deviceExtensionsCompatible = 'arduinoEsp32',
    device.hide = true;
    return device;
}

const QDPRobotC02MicroPython = formatMessage => {
    const device = QDPRobotC02(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'QDPRobotC02_microPythonESP32QDP';
    device.programMode = ['upload'];
    device.deviceExtensions = ['microPythonQDPRobotC02'],
    device.deviceExtensionsCompatible = 'microPythonEsp32',
    device.hide = true;
    return device;
}

module.exports = formatMessage => ([
    QDPRobotC02(formatMessage),
    QDPRobotC02Arduino(formatMessage),
    QDPRobotC02MicroPython(formatMessage)
]);
