const QDPRobot = formatMessage => ({
    name: 'QDP',                //显示在扩展选择界面的名字
    extensionId: 'QDPRobot',         //扩展的唯一ID
    version: '1.0.0',             //显示在扩展选择界面的版本号
    type: 'arduino',              //标识对此插件的处置方式
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'], //支持的设备，扩展只会选择了对应支持的设备后才会在扩展选择界面显示
    author: 'QDProbot',        //显示在扩展选择界面的作者名字
    iconURL: `asset/QH.png`,   //显示在扩展选择界面的图片，图片比例和像素参数请参照DHT11样例中的修改
    description: formatMessage({
        id: 'QDPRobot.description',
        default: 'QDP robot',
        description: 'Description of QDP robot'
    }),                           //显示在扩展选择界面图片下方扩展介绍内容
    featured: true,
    blocks: `blocks.js`,          //扩展的积木渲染生成代码
    generator: `generator.js`,    //扩展的积木的转转译代码
    toolbox: `toolbox.js`,        //扩展的工具箱代码，描述扩展在界面左侧工具箱中的显示和排列方式
    msg: `msg.js`,                //扩展的多语言支持
    library: 'lib',
    tags: ['kit','actuator', 'sensor', 'display', 'communication', 'other'],             //标识此插件的类目。可选选项有：actuator, sensor, display, communication, other。
    helpLink: 'https://qdprobot.taobao.com'//帮助链接，点击插件页中的帮助将打开此链接。
});

module.exports = QDPRobot;