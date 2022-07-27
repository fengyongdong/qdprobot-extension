/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //字典初始化
    Blockly.Python.dict_create_with = function() {
      var name=this.getFieldValue('name');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      val = val.substr(1, val.length-2);
      val = val.replaceAll('\\', '');
      var code = `${name} = {${val}}\n`;
      return code;
    };

    //字典赋值
    Blockly.Python.dict_set_value = function() {
      var name=this.getFieldValue('name');
      var key=this.getFieldValue('key');
      var val=Blockly.Python.valueToCode(this, 'val', Blockly.Python.ORDER_RELATIONAL) || '0';
      var code = `${name}['${key}'] = ${val}\n`;
      return code;
    };

    //字典获取键/值
    Blockly.Python.dict_get_key_value = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${name}.${sel}()`;
      return [code,Blockly.Python.ORDER_COLLECTION];
    };

    //字典获取键/值
    Blockly.Python.dict_get_value = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var key=Blockly.Python.valueToCode(this, 'key', Blockly.Python.ORDER_RELATIONAL) || '0'
      var code;
      if(sel =='value')
        code=`${name}[${key}]`;
      else
        code = `${name}.pop(${key})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //字典获取键/值
    Blockly.Python.dict_get_value_by_default = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var key=Blockly.Python.valueToCode(this, 'key', Blockly.Python.ORDER_RELATIONAL) || '0'
      var preset =Blockly.Python.valueToCode(this, 'preset', Blockly.Python.ORDER_RELATIONAL) || '0'
      var code=`${name}.${sel}(${key},${preset})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //字典长度
    Blockly.Python.dict_len = function() {
      var name=this.getFieldValue('name');
      var code = `len(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    //字典清除
    Blockly.Python.dict_clear = function() {
      var name=this.getFieldValue('name');
      var code = `${name}.clear()\n`;
      return code;
    };

    //元组转化为列表
    Blockly.Python.dict_tuple_to_list = function() {
      var name=this.getFieldValue('name');
      var sel=this.getFieldValue('sel');
      var code = `${sel}(${name})`;
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}
 
exports = addGenerator;
