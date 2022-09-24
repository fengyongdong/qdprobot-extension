/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_AUDIO_CATEGORY:'Audio',
        PY_qdp_k210_audio_open:'Audio player path %1',
        PY_qdp_k210_audio_volume:'Audio volume Volume %1 \%',
        PY_qdp_k210_audio_finish:'End of audio playback',
        PY_qdp_esp32_audio_play:'Audio playback returns the status',
        py_wait:'wait',
        py_Backgrounder:'background',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_AUDIO_CATEGORY:'音频',
        PY_qdp_k210_audio_open:'音频播放 路径 %1 ',
        PY_qdp_k210_audio_volume:'音频音量 音量 %1 \%',
        PY_qdp_k210_audio_finish:'音频播放结束 ',
        PY_qdp_esp32_audio_play:'音频播放 返回状态',
        py_wait:'等待',
        py_Backgrounder:'后台',
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_AUDIO_CATEGORY:'音頻',
        PY_qdp_k210_audio_open:'音頻播放  路徑 %1',
        PY_qdp_k210_audio_volume:'音頻音量 音量 %1 \%',
        PY_qdp_k210_audio_finish:'音頻播放結束 ',
        PY_qdp_esp32_audio_play:'音頻播放 返回狀態',
        py_wait:'等待',
        py_Backgrounder:'後臺',
    });
    return Blockly;
}

exports = addMsg;
