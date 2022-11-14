/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LIST_CATEGORY: 'Array',
        lists_create_with_text:'Create array %1 data type %2 Name %3 Length %4 Content %5',
        LANG_MATH_INT:'INT',
        LANG_MATH_UNSIGNED_INT:'UNSIGNED INT',
        LANG_MATH_WORD:'WORD',
        LANG_MATH_LONG:'LONG',
        LANG_MATH_UNSIGNED_LONG:'UNSIGNED LONG',
        LANG_MATH_FLOAT:'FLOAT',
        LANG_MATH_DOUBLE:'DOUBLE',
        LANG_MATH_BOOLEAN:'BOOLEAN',
        LANG_MATH_BYTE:'BYTE',
        LANG_MATH_CHAR:'CAHR',
        LANG_MATH_UNSIGNED_CHAR:'UNSIGNED CHAR',
        LANG_MATH_STRING:'STRING',
        lists_length:'Array length %1',
        lists_getIndex:'Array item %2 of %1',
        lists_setIndex:'Array item %2 of %1 set value %3'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LIST_CATEGORY: '数组',
        lists_create_with_text:'创建数组 %1 数据类型 %2 名称 %3 长度 %4 内容 %5',
        LANG_MATH_INT:'整数',
        LANG_MATH_UNSIGNED_INT:'无符号整数',
        LANG_MATH_WORD:'字',
        LANG_MATH_LONG:'长整数',
        LANG_MATH_UNSIGNED_LONG:'无符号长整数',
        LANG_MATH_FLOAT:'小数',
        LANG_MATH_DOUBLE:'双精度浮点数',
        LANG_MATH_BOOLEAN:'布尔',
        LANG_MATH_BYTE:'字节',
        LANG_MATH_CHAR:'字符',
        LANG_MATH_UNSIGNED_CHAR:'无符号字符',
        LANG_MATH_STRING:'字符串',
        lists_length:'数组长度 %1',
        lists_getIndex:'数组 %1 的第 %2 项',
        lists_setIndex:'数组 %1 的第 %2 项 赋值为 %3',
        GLOBAL:'全局',
        LOCAL:'局部'        
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LIST_CATEGORY: '數組',
        lists_create_with_text:'創建數組 %1 數據類型 %2 名稱 %3 長度 %4 內容 %5',
        LANG_MATH_INT:'整數',
        LANG_MATH_UNSIGNED_INT:'無符號整數',
        LANG_MATH_WORD:'字',
        LANG_MATH_LONG:'長整數',
        LANG_MATH_UNSIGNED_LONG:'無符號長整數',
        LANG_MATH_FLOAT:'小數',
        LANG_MATH_DOUBLE:'雙精度浮點數',
        LANG_MATH_BOOLEAN:'布爾',
        LANG_MATH_BYTE:'位元組',
        LANG_MATH_CHAR:'字元',
        LANG_MATH_UNSIGNED_CHAR:'無符號字元',
        LANG_MATH_STRING:'字串',
        lists_length:'數組長度 %1',
        lists_getIndex:'數組 %1 的第 %2 項',
        lists_setIndex:'數組 %1 的第 %2 項 賦值為 %3'
    });

    return Blockly;
}

exports = addMsg;
