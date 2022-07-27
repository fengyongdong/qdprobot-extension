/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //集合初始化
    Blockly.Python.set_create_with = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || null;
      val = val.substr(1, val.length-2);
      var code;
      if(val==null)
        code = `${name} = set{}\n`;
      else
        code = `${name} = {${val}}\n`;
      return code;
    };

    Blockly.Python.set_add_discard = function() {
      var name = this.getFieldValue('name');
      var sel = this.getFieldValue('sel');
      var no = Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ASSIGNMENT) || '0';
      var code=`${name}.${sel}(${no})\n`;
      return code;
    };


    //集合运算1
    Blockly.Python.set_operation = function() {
      var set1=this.getFieldValue('set1');
      var set2=this.getFieldValue('set2');
      var sel=this.getFieldValue('sel');
      var code = `${set1}.${sel}(${set2})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //集合运算2
    Blockly.Python.set_operation2 = function() {
      var set1=this.getFieldValue('set1');
      var set2=this.getFieldValue('set2');
      var sel=this.getFieldValue('sel');
      var code = `${set1}.${sel}(${set2})`;
      return code;
    };

    //集合包含运算
    Blockly.Python.set_is_sub_set = function() {
      var set1=this.getFieldValue('set1');
      var set2=this.getFieldValue('set2');
      var sel=this.getFieldValue('sel');
      var code = `${set1}.${sel}(${set2})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //元组转化为列表
    Blockly.Python.set_tuple_to_list = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
