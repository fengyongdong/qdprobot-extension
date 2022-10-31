/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

  Blockly.Python.py_text = function() {
    var code =  Blockly.Python.valueToCode(this, 'TEXT', Blockly.Python.ORDER_ATOMIC);
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.ascii_to_char = function () {
    var asciivalue = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0'
    return ['chr(' + asciivalue+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.char_to_ascii = function () {
    var charvalue = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'a'; 
    return ['ord(' +charvalue +')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.number_to_text = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0'
    return ['str('+str+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.convert_to_int = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('type');
    return ['int('+str+','+type+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.convert_to_float = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    return ['float('+str+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.convert_round = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var type = Blockly.Python.valueToCode(this, 'type', Blockly.Python.ORDER_ATOMIC) || '0';
    return ['round('+str+','+type+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.convert_to_bool = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    return ['bool('+str+')', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.string_start_end = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('type');
    var obj = Blockly.Python.valueToCode(this, 'OBJ', Blockly.Python.ORDER_ATOMIC) || '0';
    return [`${str}.${type}(${obj})`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.string_isalpha = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('type');
    return [`${str}.${type}()`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.string_get_value = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC) || '0';
    return [`${str}[${num}]`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.string_slice = function() {  
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '0';
    var from = Blockly.Python.valueToCode(this, 'from', Blockly.Python.ORDER_ATOMIC) ;
    var to = Blockly.Python.valueToCode(this, 'to', Blockly.Python.ORDER_ATOMIC);
    to = to.replace(/\'/g, "");  
    from = from.replace(/\'/g, "");  
    return [`${str}[${from}:${to}]`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_encode = function() {
    var code = this.getFieldValue('DIR');
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    return [str + '.' + code + '()', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_find = function() {
    var sentence =Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var dir = this.getFieldValue('DIR');
    var str=Blockly.Python.valueToCode(this, 'STR', Blockly.Python.ORDER_ATOMIC);
    return [''+sentence+'.'+dir+'('+str+')' , Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_count = function() {
    var sentence =Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var str=Blockly.Python.valueToCode(this, 'STR', Blockly.Python.ORDER_ATOMIC);
    return [''+sentence+'.count('+str+')' , Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_replace = function() {
    var sentence =Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var str1=Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
    var str2=Blockly.Python.valueToCode(this, 'STR2', Blockly.Python.ORDER_ATOMIC);
    return [''+sentence+'.replace('+str1+','+str2+')' , Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_split = function() {
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    var argument = Blockly.Python.valueToCode(this, 'VAL', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    var code = str + ".split(" + argument + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python.text_format = function() {
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    var argument = Blockly.Python.valueToCode(this, 'VAL', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    argument = argument.replace(/\'/g, ""); 
    var code = str + ".format(" + argument + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Blockly.Python.text_convert_case = function() {
    var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
    var type = this.getFieldValue('type');
    var code = str + "."+type+"()";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  return Blockly;
}
 
exports = addGenerator;
