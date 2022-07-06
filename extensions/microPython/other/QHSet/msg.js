/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SET_CATEGORY:'SET',
        set_create_with:'Create set  name: %1 content:%2',
        set_len:'Set %1 len',
        set_operation:'Set A %1 and Set B %2 %3 operation',
        set_union:'union',
        set_difference:'difference',
        set_intersection:'ntersection',
        set_symmetric_difference:'symmetric difference',
        set_add_discard:'Set %1 %2 item %3',
        set_add:'add',
        set_discard:'discard',
        set_is_sub_set:'Set A %1  Set B %2 %3 ?',
        set_issubset:'A in B ',
        set_issuperset:'B in A ',
        set_tuple_to_list:'%1 %2',
        tolist:'Convertor to list',
        totuple:'Convertor to tuple',
        todict:'Convertor to dict',
        toset:'Convertor to set',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SET_CATEGORY:'集合',
        set_create_with:'创建集合  名称: %1 内容:%2',
        set_len:'集合 %1 长度',
        set_operation:'集合A %1 与 集合B %2 %3 运算',
        set_union:'并集',
        set_difference:'差集',
        set_intersection:'交集',
        set_symmetric_difference:'交叉补集',
        set_add_discard:'集合 %1 %2 项 %3',
        set_add:'增加',
        set_discard:'删除',
        set_is_sub_set:'集合A %1  集合B %2 %3 ?',
        set_issubset:'A 在 B 内',
        set_issuperset:'B 在 A 内',
        set_tuple_to_list:'%1对象:%2',
        tolist:'转换为列表',
        totuple:'转换为元组',
        todict:'转换为字典',
        toset:'转换为集合',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_SET_CATEGORY:'集合',
        set_create_with:'創建集合  名稱: %1 內容:%2',
        set_len:'集合 %1 長度',
        set_operation:'集合A %1 與 集合B %2 %3 運算',
        set_union:'並集',
        set_difference:'差集',
        set_intersection:'交集',
        set_symmetric_difference:'交叉補集',
        set_add_discard:'集合 %1 %2 項 %3',
        set_add:'增加',
        set_discard:'刪除',
        set_is_sub_set:'集合A %1  集合B %2 %3 ?',
        set_issubset:'A 在 B 內',
        set_issuperset:'B 在 A 內',
        set_tuple_to_list:'%1對象:%2',
        tolist:'轉換為列表',
        totuple:'轉換為元組',
        todict:'轉換為字典',
        toset:'轉換為集合',
    });
    return Blockly;
}

exports = addMsg;
