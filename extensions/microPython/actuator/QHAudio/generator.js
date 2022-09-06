/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //音频播放
    Blockly.Python.PY_qdp_k210_audio_open = function () {
      Blockly.Python.imports_['import_audio'] = 'import audio';
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      path = path.replace(/\'/g, "");
      var code1 = `audio_play = audio.Audio(path = "${path}")\n`;
      var code2 = `audio_play.play_process(i2s)\n`;
      var code=code1+code2;
      return code;  
    };

    //音量
    Blockly.Python.PY_qdp_k210_audio_volume = function () {
      Blockly.Python.imports_['import_audio'] = 'import audio';
      var volume =Blockly.Python.valueToCode(this, 'vol',Blockly.Python.ORDER_ATOMIC);
      var code = 'audio_play.volume('+volume+')\n';
      return code; 
    };

    Blockly.Python.PY_qdp_k210_audio_finish = function () {
      Blockly.Python.imports_['import_audio'] = 'import audio';
      var code = 'audio_play.finish()\n';
      return code; 
    };

    Blockly.Python.PY_qdp_esp32_audio_play = function () {
      Blockly.Python.imports_['import_audio'] = 'import audio';
      var code = 'audio_play.play()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    return Blockly;
  }
 
exports = addGenerator;



