const QDPAIStart = formatMessage => ({
    name: 'QDPRobot AIStart',
    deviceId: 'QDPAIStart_k210MaixDock',
    manufactor: 'QDPRobot',
    learnMore: 'https://qdprobot.taobao.com',
    iconURL: 'asset/QDPAIStart.png',
    typeList: ['arduino', 'microPython'],
    description: formatMessage({
        id: 'QDPAIStart.description',
        default: 'QDPRobot AIStart AI host.',
        description: 'Description for the QDP robot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: [
        'USB\\VID_1A86&PID_7523'
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/QDPAIStart-illustration.svg',
    connectionSmallIconURL: 'asset/QDPAIStart-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: [],
    deviceExtensionsCompatible: 'k210MaixDock',
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = QDPAIStart;
