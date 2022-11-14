/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    
    Blockly.Arduino.lists_create_with_text = function() {
        var RANGE = this.getFieldValue('RANGE');
        var dropdown_type = this.getFieldValue('TYPE');
        var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
        varName = varName.replace(/\"/g, "");
        var size=Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
        var text= this.getFieldValue('TEXT');
        if(text)
            size = '';
        code = dropdown_type+' '+varName+'['+size+']'+'='+ '{' + text + '};\n';
        if (RANGE == 'global'){
            Blockly.Arduino.definitions_['var_declare'+varName] = code;
            code = '';
        }
            
        return code;
            
    };

    Blockly.Arduino.lists_length = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
        varName = varName.replace(/\"/g, "");
        var code='sizeof('+varName+')/sizeof('+varName+'[0])';
        return [code,Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lists_getIndex = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
        varName = varName.replace(/\"/g, "");
        var argument0 = Blockly.Arduino.valueToCode(this, 'AT',
        Blockly.Arduino.ORDER_ADDITIVE) || '1';
        var code=varName+'[(int)('+argument0+')]';
        return [code,Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lists_setIndex = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
        varName = varName.replace(/\"/g, "");
        var argument0 = Blockly.Arduino.valueToCode(this, 'AT',
        Blockly.Arduino.ORDER_ADDITIVE) || '1';
        var argument2 = Blockly.Arduino.valueToCode(this, 'TO',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        return varName + '[(int)(' + argument0 + ')] = ' + argument2 + ';\n';
    };

    return Blockly;
}

exports = addGenerator;
