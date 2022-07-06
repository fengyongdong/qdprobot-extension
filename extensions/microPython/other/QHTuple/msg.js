/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_TUPLE_CATEGORY:'Tuple',
        tuple_create_with:'Create tuple  name: %1 content:%2',
        tuple_create_with_item:'Tupel %1 %2 option',
        tuple_slice:'Tupel %1 from %2 to %3',
        tuple_built_in_function:'Tupel %1 get %2',
        tuple_len:'len',
        tuple_max:'max',
        tuple_min:'min',
        tuple_sum:'sum',
        tuple_to_list:'%1 %2',
        tolist:'Convertor to list',
        totuple:'Convertor to tuple',
        todict:'Convertor to dict',
        toset:'Convertor to set',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_TUPLE_CATEGORY:'元组',
        tuple_create_with:'创建元组  名称: %1 内容:%2',
        tuple_create_with_item:'元组 %1的第%2项',
        tuple_slice:'元组 %1从%2到%3',
        tuple_built_in_function:'元组 %1 获取 %2',
        tuple_len:'长度',
        tuple_max:'最大',
        tuple_min:'最小',
        tuple_sum:'总和',
        tuple_to_list:'%1对象:%2',
        tolist:'转换为列表',
        totuple:'转换为元组',
        todict:'转换为字典',
        toset:'转换为集合',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_TUPLE_CATEGORY:'元組',
        tuple_create_with:'創建元組  名稱: %1 內容:%2',
        tuple_create_with_item:'元組 %1的第%2項',
        tuple_slice:'元組 %1從%2到%3',
        tuple_built_in_function:'元組 %1 獲取 %2',
        tuple_len:'長度',
        tuple_max:'最大',
        tuple_min:'最小',
        tuple_sum:'總和',
        tuple_to_list:'%1對象:%2',
        tolist:'轉換為列表',
        totuple:'轉換為元組',
        todict:'轉換為字典',
        toset:'轉換為集合',
    });
    return Blockly;
}

exports = addMsg;
