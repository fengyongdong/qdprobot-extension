/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_DATABASE_CATEGORY:'NET MICRO DATABASE',
        QDP_network_microdatabase_initialization:'Network microdatabase initialization user %1 password %2',
        QDP_web_microdatabase_update_tags:'Network microdatabase updata tag key %1 value %2',
        QDP_web_microdatabase_delete_tags:'Network microdatabase delete tag key %1',
        QDP_web_microdatabase_get_tags:'Network microdatabase get tag key %1 value',
        QDP_web_microdatabase_count_tags:'Network microdatabase query tags count',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_DATABASE_CATEGORY:'网络微数据库',
        QDP_network_microdatabase_initialization:'网络微数据库 初始化 用户名 %1 密码 %2',
        QDP_web_microdatabase_update_tags:'网络微数据库 更新标签 标签名 %1 值 %2',
        QDP_web_microdatabase_delete_tags:'网络微数据库 删除标签 标签名 %1',
        QDP_web_microdatabase_get_tags:'网络微数据库 获取标签 标签名 %1 的值',
        QDP_web_microdatabase_count_tags:'网络微数据库 查询标签数',

    });
    return Blockly;
}

exports = addMsg;
