/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_VIDEO_CATEGORY:'Video',
        PY_qdp_k210_video_open:'Video player path %1',
        PY_qdp_k210_video_volume:'Video volume Volume %1 \%',
        PY_qdp_k210_video_finish:'End of video playback',
        PY_qdp_esp32_video_play:'Video playback returns the status',
        py_wait:'wait',
        py_Backgrounder:'background',
        PY_qdp_esp32_video_open:'Video record init path %1 interval %2 FPS quality\% %3 record audio? %4 sample rate %5',
        py_yes:'yes',
        py_no:'no',
        PY_qdp_esp32_video_record:'Video record from %1',
        PY_qdp_esp32_video_record_finish:'Video record finish'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_VIDEO_CATEGORY:'视频',
        PY_qdp_k210_video_open:'视频播放 路径 %1',
        PY_qdp_k210_video_volume:'视频音量 音量 %1 \%',
        PY_qdp_k210_video_finish:'视频播放结束 ',
        PY_qdp_esp32_video_play:'视频播放 返回状态',
        py_wait:'等待',
        py_Backgrounder:'后台',
        PY_qdp_esp32_video_open:'视频录制初始化 路径 %1 帧率 %2 FPS 品质\% %3 是否录制音频 %4 采样率 %5',
        py_yes:'是',
        py_no:'否',
        PY_qdp_esp32_video_record:'视频录制 图片源%1',
        PY_qdp_esp32_video_record_finish:'视频录制结束'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_VIDEO_CATEGORY:'視頻',
        PY_qdp_k210_video_open:'視頻播放  路徑 %1',
        PY_qdp_k210_video_volume:'視頻音量 音量 %1 \%',
        PY_qdp_k210_video_finish:'視頻播放結束 ',
        PY_qdp_esp32_video_play:'視頻播放 返回狀態',
        py_wait:'等待',
        py_Backgrounder:'後臺',
        PY_qdp_esp32_video_open:'視頻錄製初始化 路徑 %1 幀率 %2 FPS 品質\% %3 是否錄製音頻 %4 採樣率 %5',
        py_yes:'是',
        py_no:'否',
        PY_qdp_esp32_video_record:'視頻錄製 圖片源%1',
        PY_qdp_esp32_video_record_finish:'視頻錄製結束'
    });
    return Blockly;
}

exports = addMsg;
