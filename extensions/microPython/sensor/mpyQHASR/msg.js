/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ASR_CATEGORY:'ASR',
        PY_qdp_k210_tuple_corpus:'%1 Name of corpus = %2',
        PY_qdp_k210_hear_init:'ASR init word size %1',     
        PY_qdp_k210_hear_training:'ASR training corpus %1 save path %2',
        PY_qdp_k210_hear_loading:'ASR loading corpus %1 path %2',
        PY_qdp_k210_hear_predict:'ASR Recognition  corpus %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ASR_CATEGORY:'语音识别',
        PY_qdp_k210_tuple_corpus:'%1语料名称 = %2',
        PY_qdp_k210_hear_init:'ASR 初始化 词汇模板容量 %1',
        PY_qdp_k210_hear_training:'ASR 训练 语料 %1 保存路径 %2',
        PY_qdp_k210_hear_loading:'ASR 加载 语料 %1 路径 %2',
        PY_qdp_k210_hear_predict:'ASR 语音识别 语料 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ASR_CATEGORY:'語音識別',
        PY_qdp_k210_tuple_corpus:'%1语料名称 = %2',
        PY_qdp_k210_hear_init:'ASR 初始化 辭彙範本容量 %1',
        PY_qdp_k210_hear_training:'ASR 訓練 語料 %1 保存路徑 %2',
        PY_qdp_k210_hear_loading:'ASR 加載 語料 %1 路徑 %2',
        PY_qdp_k210_hear_predict:'ASR 語音識別 語料 %1'
    });
    return Blockly;
}

exports = addMsg;
