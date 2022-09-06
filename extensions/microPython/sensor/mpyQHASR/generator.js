/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.PY_qdp_k210_tuple_corpus = function() {
    var varName = this.getFieldValue('VAR');
    var text=Blockly.Python.valueToCode(this, 'TEXT',Blockly.Python.ORDER_ATOMIC);
    var code = varName+'= '+ text + '\n';
    return code;
  };

  Blockly.Python.PY_qdp_k210_hear_init = function () {
    Blockly.Python.imports_['import_qdpk210_aistart_asr'] = 'import qdpk210_aistart_asr as asr';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var SUB =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
    var code = "asr.init(word_size="+SUB+")\n";
    return code;  
  };

  Blockly.Python.PY_qdp_k210_hear_training = function () {
    Blockly.Python.imports_['import_qdpk210_aistart_asr'] = 'import qdpk210_aistart_asr as asr';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var calss = this.getFieldValue('corpus');
    var save =Blockly.Python.valueToCode(this, 'save',Blockly.Python.ORDER_ATOMIC);
    var code = "asr.training("+calss+","+save+")\n";
    return code;  
  };

  Blockly.Python.PY_qdp_k210_hear_predict = function () {
    Blockly.Python.imports_['import_qdpk210_aistart_asr'] = 'import qdpk210_aistart_asr as asr';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var calss = this.getFieldValue('corpus');
    var code = "asr.get_result("+calss+")";
    return [code, Blockly.Python.ORDER_ATOMIC]; 
  };

  Blockly.Python.PY_qdp_k210_hear_loading = function () {
    Blockly.Python.imports_['import_qdpk210_aistart_asr'] = 'import qdpk210_aistart_asr as asr';
    Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var calss = this.getFieldValue('corpus');
    var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
    var code = "asr.loading("+calss+","+path+")\n";
    return code;  
  };
  
  Blockly.Python.PY_qdp_k210_list_var = function () {
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      LIST = LIST.replace(/\'/g, "");
      LIST='['+LIST+']';
      return [LIST, Blockly.Python.ORDER_ATOMIC];  
    };
  


  return Blockly;
  }
 
exports = addGenerator;



