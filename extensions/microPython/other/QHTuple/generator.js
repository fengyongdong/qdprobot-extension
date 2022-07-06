/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //元组初始化
    Blockly.Python.tuple_create_with = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) ;
      val = val.substr(1, val.length-2);
      var code = `${name} = (${val})\n`;
      return code;
    };

    //获取元组值
    Blockly.Python.tuple_create_with_item = function() {
      var name=this.getFieldValue('name');
      var no=Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ATOMIC) || '0';
      var code = `${name}[${no}]`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //元组切片
    Blockly.Python.tuple_slice = function() {
      var name=this.getFieldValue('name');
      var no1=Blockly.Python.valueToCode(this, 'no1', Blockly.Python.ORDER_ATOMIC) || '0';
      var no2=Blockly.Python.valueToCode(this, 'no2', Blockly.Python.ORDER_ATOMIC) || '0';
      if(no2==0)
        no2='';
      var code = `${name}[${no1}:${no2}]`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //元组内置函数
    Blockly.Python.tuple_built_in_function = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');;
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //元组转化为列表
    Blockly.Python.tuple_to_list = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
