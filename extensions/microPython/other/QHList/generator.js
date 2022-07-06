/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //列表初始化
    Blockly.Python.lists_create_with = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      val = val.substr(1, val.length-2);
      var code = `${name} = [${val}]\n`;
      return code;
    };

    //列表赋值
    Blockly.Python.lists_set_value = function() {
      var name=this.getFieldValue('name');
      var no=Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ATOMIC) || '0';
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      var code = `${name}[${no}] = ${val}\n`;
      return code;
    };

    //获取列表值
    Blockly.Python.lists_create_with_item = function() {
      var name=this.getFieldValue('name');
      var no=Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ATOMIC) || '0';
      var code = `${name}[${no}]`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //列表切片
    Blockly.Python.lists_slice = function() {
      var name=this.getFieldValue('name');
      var no1=Blockly.Python.valueToCode(this, 'no1', Blockly.Python.ORDER_ATOMIC) || '0';
      var no2=Blockly.Python.valueToCode(this, 'no2', Blockly.Python.ORDER_ATOMIC) || '0';
      if(no2==0)
        no2='';
      var code = `${name}[${no1}:${no2}]`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //列表内置函数
    Blockly.Python.lists_built_in_function = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');;
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //列表内置函数
    Blockly.Python.lists_built_in_function_output = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var no=Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ATOMIC) || '0';
      var code = `${name}.${sel}(${no})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //列表内置函数
    Blockly.Python.lists_built_in_function_statement = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var no=Blockly.Python.valueToCode(this, 'no', Blockly.Python.ORDER_ATOMIC) || '0';
      var code = `${name}.${sel}(${no})\n`;
      return code;
    };

    //列表内置函数
    Blockly.Python.lists_built_in_function_output2 = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${name}.${sel}()`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };
    //列表内置函数
    Blockly.Python.lists_built_in_function_statement2 = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${name}.${sel}()\n`;
      return code;
    };

    //元组转化为列表
    Blockly.Python.list_tuple_to_list = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
