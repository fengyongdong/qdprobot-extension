/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens camera',

    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens摄像头',
        huskylens_use_i2c_init:'HuskyLens %1 使用I2C %2 初始化 ',
        huskylens_request_algorthim:'HuskyLens %1 切换至算法 %2 直到成功',
        MICROPYTHON_HUSKYLENS_ALGORITHM_OBJECT_TRACKING:'物体追踪',
        AipFace:'人脸识别',
        MICROPYTHON_HUSKYLENS_ALGORITHM_OBJECT_RECOGNITION:'物体识别',
        MICROPYTHON_HUSKYLENS_ALGORITHM_LINE_TRACKING:'巡线',
        catImage_Color:'颜色识别',
        MICROPYTHON_HUSKYLENS_ALGORITHM_TAG_RECOGNITION:'标签识别',
        MICROPYTHON_HUSKYLENS_ALGORITHM_OBJECT_CLASSIFICATION:'物体分类',
        MICROPYTHON_HUSKYLENS_ALGORITHM_QR_CODE_RECOGNTITION:'二维码识别',
        MICROPYTHON_HUSKYLENS_ALGORITHM_BARCODE_RECOGNTITION:'条形码识别',
        huskylens_command_request:'HuskyLens %1 请求一次数据结果 存入结果',
        huskylens_read_learned_id_count:'HuskyLens %1 从结果中获取 已学习ID总数',
        huskylens_is_appear_direct:'HuskyLens %1 从结果中获取 %2 是否在画面中',
        RESULT_BLOCK:'方块',
        RESULT_ARROW:'箭头',
        huskylens_read_block_center_parameter_direct:'HuskyLens %1 从结果中获取 靠近中心方块的 %2',
        huskylens_read_arrow_center_parameter_direct:'HuskyLens %1 从结果中获取 靠近中心箭头的 %2',
        BLOCK_PARAMETER_ID:'ID',
        BLOCK_PARAMETER_XCENTER:'X中心',
        BLOCK_PARAMETER_YCENTER:'Y中心',
        BLOCK_PARAMETER_WIDTH:'宽度',
        BLOCK_PARAMETER_HEIGHT:'高度',
        ARROW_PARAMETER_ID:'',
        ARROW_PARAMETER_XORIGIN:'x起点',
        ARROW_PARAMETER_YORIGIN:'y起点',
        ARROW_PARAMETER_XTARGET:'x终点',
        ARROW_PARAMETER_YTARGET:'y终点',
        huskylens_is_learned_id:'HuskyLens %1 从结果中获取 ID %2 是否已学习',
        huskylens_is_appear_id:'HuskyLens %1 从结果中获取 ID %2 %3 是否在画面中',
        huskylens_read_block_id_parameter_direct:'HuskyLens %1 从结果中获取 ID %2 第 %3 个方块的 %4',
        huskylens_read_arrow_id_parameter_direct:'HuskyLens %1 从结果中获取 ID %2 第 %3 个箭头的 %4',
        huskylens_read_count:'HuskyLens %1 从结果中获取 ID %2 %3 总数',
        huskylens_read_blocks_parameter_direct:'HuskyLens %1 从结果中获取 第 %2 个 方块 的 %3',
        huskylens_read_arrows_parameter_direct:'HuskyLens %1 从结果中获取 第 %2 个 箭头 的 %3',
        huskylens_command_request_learn_once:'HuskyLens %1 自动学习一次 ID %2',
        huskylens_command_request_forget:'HuskyLens %1 遗忘当前算法的所有学习数据',
        huskylens_command_request_customnames:'HuskyLens %1 设置当前算法 ID %2 名字为 %3',
        huskylens_command_request_custom_text:'HuskyLens %1 屏幕叠加显示文字 %2 x %3 y %4',
        huskylens_command_request_clear_text:'HuskyLens %1 清除屏幕显示的文字',
        huskylens_command_request_photo_screenshot:'HuskyLens %1 触发 %2 保存到SD卡',
        PHOTO_TAKE_PHOTO:'拍照',
        PHOTO_SCREEN_SHOT:'截屏',
        huskylens_save_load_model_to_SD_card:'HuskyLens %1  %2 当前算法数据为SD卡 %3'

    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens攝像頭',
        
    });

    return Blockly;
}

exports = addMsg;