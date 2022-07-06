/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_DICT_CATEGORY:'DICT',
        dict_create_with:'Create dict  name: %1 content:%2',
        dict_set_value:'Dict %1 key %2 set value:%3',
        dict_get_key_value:'Dict %1 get %2',
        dict_keys:'keys',
        dict_values:'values',
        dict_get_value:'Dict %1 get %2 key %3',
        dict_value:'value',
        dict_pop:'pop',
        dict_get_value_by_default:'Dict %1  %2 %3 default %4',
        dict_get_default:'get',
        dict_set_default:'set',
        dict_len:'Dict %1 len',
        dict_clear:'clear Dict %1',
        dict_tuple_to_list:'%1 %2',
        tolist:'Convertor to list',
        totuple:'Convertor to tuple',
        todict:'Convertor to dict',
        toset:'Convertor to set',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_DICT_CATEGORY:'字典',
        dict_create_with:'创建字典  名称: %1 内容:%2',
        dict_set_value:'字典 %1 键 %2 赋值为:%3',
        dict_get_key_value:'字典 %1 获取 %2',
        dict_keys:'所有键',
        dict_values:'所有值',
        dict_get_value:'字典 %1 获取 %2 键 %3',
        dict_value:'值',
        dict_pop:'弹出',
        dict_get_value_by_default:'字典 %1  %2 %3 默认 %4',
        dict_get_default:'获取',
        dict_set_default:'设置',
        dict_len:'字典 %1 长度',
        dict_clear:'清空字典 %1',
        dict_tuple_to_list:'%1对象:%2',
        tolist:'转换为列表',
        totuple:'转换为元组',
        todict:'转换为字典',
        toset:'转换为集合',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_DICT_CATEGORY:'字典',
        dict_create_with:'創建字典  名稱: %1 內容:%2',
        dict_set_value:'字典 %1 鍵 %2 賦值為:%3',
        dict_get_key_value:'字典 %1 獲取 %2',
        dict_keys:'所有鍵',
        dict_values:'所有值',
        dict_get_value:'字典 %1 獲取 %2 鍵 %3',
        dict_value:'值',
        dict_pop:'彈出',
        dict_get_value_by_default:'字典 %1  %2 %3 默認 %4',
        dict_get_default:'獲取',
        dict_set_default:'設置',
        dict_len:'字典 %1 長度',
        dict_clear:'清空字典 %1',
        dict_tuple_to_list:'%1對象:%2',
        tolist:'轉換為列表',
        totuple:'轉換為元組',
        todict:'轉換為字典',
        toset:'轉換為集合',
    });
    return Blockly;
}

exports = addMsg;
