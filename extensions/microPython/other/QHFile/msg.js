/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_FILE_CATEGORY:'File',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_FILE_CATEGORY:'文件',
        storage_fileopen:'打开文件 路径 %1 模式 %2',
        MICROBIT_PY_STORAGE_READ:'读',
        MICROBIT_PY_STORAGE_WRITE:'写',
        MICROBIT_PY_STORAGE_BIT_READ:'二进制读',
        MICROBIT_PY_STORAGE_BIT_WRITE:'二进制写',
        storage_file_write:'将 %1 写入文件 %2',
        storage_get_contents_without_para:'从文件 %1 %2',
        MICROBIT_PY_STORAGE_ALL:'读取内容',
        MICROBIT_PY_STORAGE_ONE_LINE:'读取一行内容',
        MICROBIT_PY_STORAGE_ALL_LINES:'读取所有内容',
        storage_get_contents:'从文件 %1 %2 不超过 %3 字符',
        storage_can_write_ornot:'文件 %1 是否可写?',
        storage_get_filename:'获取 %1 文件名',
        storage_close_file:'关闭文件 %1',
        storage_list_all_files:'列出所有文件',
        storage_get_current_dir:'获取当前目录',
        storage_change_dir:'改变当前工作目录为 %1',
        storage_make_dir:'根据目录 %1 创建 %2',
        MICROBIT_PY_STORAGE_MKDIR:'文件夹',
        MICROBIT_PY_STORAGE_MAKEDIRS:'嵌套的文件夹',
        storage_delete_file:'%1 %2',
        MICROBIT_PY_STORAGE_DELETE_FILE:'删除文件',
        MICROBIT_PY_STORAGE_DELETE_DIRS:'递归删除目录',
        storage_rename:'将文件 %1 重命名为 %2',
        storage_get_file_size:'获取文件 %1 大小',
        storage_is_file:'路径 %1 是否 %2',
        HTML_FILE:'文件',
        MICROBIT_PY_STORAGE_IS_DIR:'目录',
        storage_file_tell:'返回文件 %1 当前读取的位置',
        storage_file_seek:'设置文件 %1 当前读取位置为%2 偏移 %3 字符',
        MICROBIT_PY_STORAGE_FILE_SEEK_START:'从文件开头位置',
        MICROBIT_PY_STORAGE_FILE_SEEK_CURRENT:'从文件当前位置',
        MICROBIT_PY_STORAGE_FILE_SEEK_END:'从文件结尾位置'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_FILE_CATEGORY:'文件',
    });
    return Blockly;
}

exports = addMsg;
