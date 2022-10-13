/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SYNTHESIS_LABEL:'---SYNTHESIS---',
        QH_SPEECH_CATEGORY:'Speech',
        PY_qdp_esp32_QF_hc_init:'Speech synthesis initialization %1 tx %2 rx %3',
        PY_qdp_esp32_QF_hc:'Text to speech Pronunciation people %1 interrupt %2 volume(0-11) %3 speed(0-11) %4 intonnation(0-11) %5 Details %6',
        QH_Donotinterrupt:'Do not interrupt',
        QH_Interruptible:'Interruptible',
        PY_qdp_esp32_QF_stophc:'Stop speech',
        PY_qdp_esp32_QF_sound:'Play prompt tone Type %1 Number(01~25) %2',

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SYNTHESIS_LABEL:'---语音合成---',
        QH_SPEECH_CATEGORY:'语音',
        PY_qdp_esp32_QF_hc_init:'语音合成 初始化 %1 tx %2 rx %3',
        PY_qdp_esp32_QF_hc:'语音合成 发音人 %1 中断 %2 音量(0-11) %3 语速(0-11) %4 语调(0-11) %5 内容 %6',
        QH_Donotinterrupt:'不中断',
        QH_Interruptible:'中断',
        PY_qdp_esp32_QF_stophc:'停止合成',
        PY_qdp_esp32_QF_sound:'播放提示音 类型 %1 编号(01~25) %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_SYNTHESIS_LABEL:'---語音合成---',
        QH_SPEECH_CATEGORY:'語音',
        PY_qdp_esp32_QF_hc_init:'語音合成 初始化 %1 tx %2 rx %3',
        PY_qdp_esp32_QF_hc:'語音合成 發音人 %1 中斷 %2 音量(0-11) %3 語速(0-11) %4 語調(0-11) %5 內容 %6',
        QH_Donotinterrupt:'不中斷',
        QH_Interruptible:'中斷',
        PY_qdp_esp32_QF_stophc:'停止合成',
        PY_qdp_esp32_QF_sound:'播放提示音 類型 %1 編號(01~25) %2',
    });
    return Blockly;
}

exports = addMsg;
