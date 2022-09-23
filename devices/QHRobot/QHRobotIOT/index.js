const QDPRobotIOT = formatMessage => ({
    name: 'QDPRobot ESP8266',
    deviceId: 'QDPRobotIOT_esp8266',
    manufactor: 'QDPRobot',
    learnMore: 'http://gx.qdprobot.com',
    typeList: ['arduino', 'microPython'],
    iconURL: 'asset/IOTstart8266.png',
    typeList: ['arduino', 'microPython'],
    description: formatMessage({
        id: 'QDPRobotIOT.description',
        default: 'QDProbot.',
        description: 'Description for the QDP robot device'
    }),
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'asset/IOTstart8266-1.png',
    connectionSmallIconURL: 'asset/IOTstart8266-2.png',
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    helpLink: 'http://gx.qdprobot.com/'
});

const QDPRobotIOTArduino = formatMessage => {
    const device = QDPRobotIOT(formatMessage);
    device.defaultBaudRate = '76800';
    device.deviceId = 'QDPRobotIOT_arduinoEsp8266';
    device.programMode = ['upload'];
    device.deviceExtensions = ['QDPRobotIOT'],
    device.deviceExtensionsCompatible = 'arduinoEsp8266',
    device.hide = true;
    return device;
}

const QDPRobotIOTMicroPython = formatMessage => {
    const device = QDPRobotIOT(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'QDPRobotIOT_microPythonEsp8266';
    device.programMode = ['upload'];
    device.deviceExtensions = ['microPythonQDPRobotIOT'],
    device.deviceExtensionsCompatible = 'microPythonEsp8266',
    device.hide = true;
    return device;
}

module.exports = formatMessage => ([
    QDPRobotIOT(formatMessage),
    QDPRobotIOTArduino(formatMessage),
    QDPRobotIOTMicroPython(formatMessage)
]);
