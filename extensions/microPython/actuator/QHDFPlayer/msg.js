/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        mpy_esp32_Mp3_init:'Mp3 init %1 rx %2 tx %3',
        mpy_esp32_Mp3_vol_change:'Mp3 %1',
        inc_vol:'inc vol',
        dec_vol:'dec vol',
        mpy_esp32_Mp3_vol_set:'Mp3 Set the volume to %1',
        mpy_esp32_Mp3_prev_next_track:'Mp3 play %1',
        prev_track:'prev track',
        next_track:'next track',
        mpy_esp32_Mp3_set_EQ:'Mp3 set EQ %1',
        Normal:'Normal',
        Pop:'Pop',
        Rock:'Rock',
        Jazz:'Jazz',
        Classic:'Classic',
        Bass:'Bass',
        mpy_esp32_Mp3_cycle_singles:'Mp3 Singles play tracks %1',
        mpy_esp32_Mp3_play_pause_stop:'Mp3 %1',
        play:'play',
        pause:'pause',
        stop:'stop',
        enable_loop:'loop',
        disable_loop:'stop loop',
        random_play:'random play'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        mpy_esp32_Mp3_init:'Mp3初始化 %1 rx %2 tx %3',
        mpy_esp32_Mp3_vol_change:'Mp3 %1',
        inc_vol:'增大音量',
        dec_vol:'减小音量',
        mpy_esp32_Mp3_vol_set:'Mp3设置音量为 %1',
        mpy_esp32_Mp3_prev_next_track:'Mp3 播放 %1',
        prev_track:'上一首',
        next_track:'下一首',
        mpy_esp32_Mp3_set_EQ:'Mp3 设置EQ %1',
        Normal:'普通',
        Pop:'流行',
        Rock:'摇滚',
        Jazz:'爵士',
        Classic:'经典',
        Bass:'低音',
        mpy_esp32_Mp3_cycle_singles:'Mp3 单曲循环播放曲目 %1',
        mpy_esp32_Mp3_play_pause_stop:'Mp3 %1',
        play:'播放',
        pause:'暂停',
        stop:'停止',
        enable_loop:'循环播放',
        disable_loop:'停止循环播放',
        random_play:'随机播放'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        mpy_esp32_Mp3_init:'Mp3初始化 %1 rx %2 tx %3',
        mpy_esp32_Mp3_vol_change:'Mp3 %1',
        inc_vol:'增大音量',
        dec_vol:'減小音量',
        mpy_esp32_Mp3_vol_set:'Mp3設置音量為 %1',
        mpy_esp32_Mp3_prev_next_track:'Mp3 播放 %1',
        prev_track:'上一首',
        next_track:'下一首',
        mpy_esp32_Mp3_set_EQ:'Mp3 設置EQ %1',
        Normal:'普通',
        Pop:'流行',
        Rock:'搖滾',
        Jazz:'爵士',
        Classic:'經典',
        Bass:'低音',
        mpy_esp32_Mp3_cycle_singles:'Mp3 單曲迴圈播放曲目 %1',
        mpy_esp32_Mp3_play_pause_stop:'Mp3 %1',
        play:'播放',
        pause:'暫停',
        stop:'停止',
        enable_loop:'迴圈播放',
        disable_loop:'停止迴圈播放',
        random_play:'隨機播放'
    });
    return Blockly;
}

exports = addMsg;
