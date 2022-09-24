/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_AI_STUDIO_CATEGORY:'AI',
        PY_qdp_k210_tuple_anchor:'%1 anchor argument = (%2)',
        PY_qdp_k210_tuple_calss:'%1 Item name = %2',
        PY_qdp_k210_KPU_load:'%1 Mode load %2',
        PY_qdp_k210_KPU_load1:'%1 Mode path %2',
        PY_qdp_k210_KPU_init_yolo2:'yolo2 init network model %1 Probability threshold %2 box_iou threshold %3 anchor points %4 anchor argument %5',
        PY_qdp_k210_KPU_run_yolo2:'yolo2 run network mode %1 image %2',
        PY_qdp_k210_KPU_forward:'yolo2 forward mode %1 image %2',
        PY_qdp_k210_KPU_analysis:'yolo2 mode analyse object %1 get %2',
        yolo2_x:'Coordinate X',
        yolo2_y:'Coordinate Y',
        yolo2_classid:'classid',
        yolo2_value:'value',
        PY_qdp_k210_ailocal_training:'AI_Local mode training item %1 amount of training %2 save %3',
        PY_qdp_k210_ailocal_loading:'AI_Local mode load path %1',
        PY_qdp_k210_ailocal_predictg:'AI_Local run mode item %1 image %2'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_AI_STUDIO_CATEGORY:'人工智能',
        PY_qdp_k210_tuple_anchor:'%1 锚点参数 = (%2)',
        PY_qdp_k210_tuple_calss:'%1 物品名称 = %2',
        PY_qdp_k210_KPU_load:'%1 模型加载 %2',
        PY_qdp_k210_KPU_load1:'%1 模型路径 %2',
        PY_qdp_k210_KPU_init_yolo2:'yolo2初始化 网络模型 %1 概率阀值 %2 box_iou门限 %3锚点数 %4 锚点参数 %5',
        PY_qdp_k210_KPU_run_yolo2:'yolo2 运行网络 模型 %1 图像 %2',
        PY_qdp_k210_KPU_forward:'yolo2 前向运算 模型 %1 图像 %2',
        PY_qdp_k210_KPU_analysis:'yolo2 模型解析 对象 %1 获取 %2',
        yolo2_x:'坐标_X',
        yolo2_y:'坐标_Y',
        yolo2_classid:'标识号',
        yolo2_value:'置信度',
        PY_qdp_k210_ailocal_training:'AI_Local 模型训练 物品 %1 训练量 %2 保存 %3',
        PY_qdp_k210_ailocal_loading:'AI_Local 模型加载 路径 %1',
        PY_qdp_k210_ailocal_predictg:'AI_Local 运行模型 物品 %1 图像 %2'


    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_AI_STUDIO_CATEGORY:'人工智慧',
        PY_qdp_k210_tuple_anchor:'%1 錨點參數 = (%2)',
        PY_qdp_k210_tuple_calss:'%1 物品名稱 = %2',
        PY_qdp_k210_KPU_load:'%1 模型加載 %2',
        PY_qdp_k210_KPU_load1:'%1 模型路徑 %2',
        PY_qdp_k210_KPU_init_yolo2:'yolo2初始化 網路模型 %1 概率閥值 %2 box_iou門限 %3錨點數 %4 錨點參數 %5',
        PY_qdp_k210_KPU_run_yolo2:'yolo2 運行網路 模型 %1 圖像 %2',
        PY_qdp_k210_KPU_forward:'yolo2 前向運算 模型 %1 圖像 %2',
        PY_qdp_k210_KPU_analysis:'yolo2 模型解析 對象 %1 獲取 %2',
        yolo2_x:'座標_X',
        yolo2_y:'座標_Y',
        yolo2_classid:'標識號',
        yolo2_value:'置信度',
        PY_qdp_k210_ailocal_training:'AI_Local 模型訓練 物品 %1 訓練量 %2 保存 %3',
        PY_qdp_k210_ailocal_loading:'AI_Local 模型加載 路徑 %1',
        PY_qdp_k210_ailocal_predictg:'AI_Local 運行模型 物品 %1 圖像 %2'
   
    });
    return Blockly;
}

exports = addMsg;
