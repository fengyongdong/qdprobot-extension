/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.PY_qdp_k210_list_var = function () {
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      LIST = LIST.replace(/\'/g, "");
      LIST='['+LIST+']';
      return [LIST, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python.PY_qdp_k210_tuple_anchor = function() {
      var varName = this.getFieldValue('VAR');    
      var text=Blockly.Python.valueToCode(this, 'TEXT',Blockly.Python.ORDER_ATOMIC);
      text = text.replace(/\'/g, "");
      var code = varName+'= '+ '(' + text + ')\n';
      return code;
    };

    Blockly.Python.PY_qdp_k210_tuple_calss = function() {
      var varName = this.getFieldValue('VAR');
      var text= Blockly.Python.valueToCode(this, 'TEXT',Blockly.Python.ORDER_ATOMIC);
      var code = varName+'=' + text + '\n';
      return code;
    };

    Blockly.Python.PY_qdp_k210_KPU_load = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub = this.getFieldValue('VAR');
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      path = path.replace(/\'/g, "");
      var code = sub+" = kpu.load("+path+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_KPU_load1 = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub = this.getFieldValue('VAR');
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = sub+" = kpu.load("+path+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_KPU_init_yolo2 = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub = this.getFieldValue('VAR');
      var th =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var nm =Blockly.Python.valueToCode(this, 'nms_value',Blockly.Python.ORDER_ATOMIC);
      var an =Blockly.Python.valueToCode(this, 'anchor_num',Blockly.Python.ORDER_ATOMIC);
      var anchor = this.getFieldValue('anchor');
      var code = "kpu.init_yolo2("+sub+","+th+","+nm+","+an+","+anchor+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_KPU_run_yolo2 = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub =this.getFieldValue('SUB');
      var img =this.getFieldValue('VAR');
      var code = "kpu.run_yolo2("+sub+","+img+")";
      return [code, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python.PY_qdp_k210_KPU_forward = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub =this.getFieldValue('SUB');
      var img =this.getFieldValue('VAR');
      var code = "kpu.forward("+sub+","+img+")[:]";
      return [code, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python.PY_qdp_k210_KPU_analysis = function () {
      Blockly.Python.imports_['import_KPU'] = 'import KPU as kpu';
      var sub =this.getFieldValue('VAR');
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_ailocal_training = function () {
      Blockly.Python.imports_['import ailocal'] = 'import ailocal';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var calss = this.getFieldValue('calss');
      var sample =Blockly.Python.valueToCode(this, 'sample',Blockly.Python.ORDER_ATOMIC);
      var save =Blockly.Python.valueToCode(this, 'save',Blockly.Python.ORDER_ATOMIC);
      var code = "ailocal.training("+calss+","+sample+","+save+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_ailocal_loading = function () {
      Blockly.Python.imports_['import ailocal'] = 'import ailocal';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = "ailocal.loading("+path+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_ailocal_predictg = function () {
      Blockly.Python.imports_['import ailocal'] = 'import ailocal';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var calss = this.getFieldValue('calss');
      var sub = this.getFieldValue('VAR');
      var code = "ailocal.predict("+sub+","+calss+")";
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    
    return Blockly;
  }
 
exports = addGenerator;
