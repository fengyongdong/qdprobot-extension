/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //音频播放
    Blockly.Python.PY_qdp_k210_video_open = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = `video_play = video.open(${path})\n`;
      return code;  
    };

    //音量
    Blockly.Python.PY_qdp_k210_video_volume = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var volume =Blockly.Python.valueToCode(this, 'vol',Blockly.Python.ORDER_ATOMIC);
      var code = 'video_play.volume('+volume+')\n';
      return code; 
    };

    Blockly.Python.PY_qdp_k210_video_finish = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var code = 'video_play.__del__()\n';
      return code; 
    };

    Blockly.Python.PY_qdp_esp32_video_play = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var code = 'video_play.play()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_esp32_video_open = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var interval =Blockly.Python.valueToCode(this, 'interval',Blockly.Python.ORDER_ATOMIC);
      var quality =Blockly.Python.valueToCode(this, 'quality',Blockly.Python.ORDER_ATOMIC);
      var audio =this.getFieldValue("audio");
      var sample =Blockly.Python.valueToCode(this, 'sample_rate',Blockly.Python.ORDER_ATOMIC);
      var code = "v = video.open("+path+", record=1,interval=("+interval+"*10000),quality="+quality+",audio="+audio+",sample_rate="+sample+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_esp32_video_record = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var img =this.getFieldValue("VAR");
      var code = 'v.record('+img+')\n';
      return code; 
    };

    Blockly.Python.PY_qdp_esp32_video_record_finish = function () {
      Blockly.Python.imports_['import_video'] = 'import video';
      var code = 'v.__del__()\n';
      return code; 
    };

    return Blockly;
  }
 
exports = addGenerator;
