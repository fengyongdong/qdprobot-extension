/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    
Blockly.Python.huskylens_use_i2c_init = function () {
    var v = this.getFieldValue('SUB');
    var iv = this.getFieldValue('I2CSUB');
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + ' = huskylens.HuskyLens(' + iv + ')\n';
    return code;
};

Blockly.Python.huskylens_request_algorthim = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_algorthim("' + ctype + '")\n';
    return code;
};

Blockly.Python.huskylens_command_request = function () {
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request()\n';
    return code;
};

Blockly.Python.huskylens_read_learned_id_count = function () {
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_learned_id_count()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_is_appear_direct = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.is_appear_direct("' + ctype + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_block_center_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_block_center_parameter_direct("blocks").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_arrow_center_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_block_center_parameter_direct("arrows").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_is_learned_id = function () {
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.is_learned(' + id + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_is_appear_id = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.is_appear(' + id + ',"' + ctype + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_block_id_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_blocks_arrows_parameter(' + id + ',' + num + ',"blocks").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_arrow_id_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_blocks_arrows_parameter(' + id + ',' + num + ',"blocks").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_count = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_count(' + id + ',"' + ctype + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_blocks_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var num = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_blocks_arrows_parameter_direct(' + num + ',"blocks").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.huskylens_read_arrows_parameter_direct = function () {
    var args = this.getFieldValue('BME_TYPE');
    var v = this.getFieldValue('SUB');
    var num = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.read_blocks_arrows_parameter_direct(' + num + ',"arrows").' + args;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.huskylens_command_request_learn_once = function () {
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_learn_once(' + id + ')\n';
    return code;
};

Blockly.Python.huskylens_command_request_forget = function () {
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_forget()\n';
    return code;
};

Blockly.Python.huskylens_command_request_customnames = function () {
    var v = this.getFieldValue('SUB');
    var id = Blockly.Python.valueToCode(this, 'ID', Blockly.Python.ORDER_ATOMIC);
    var name = Blockly.Python.valueToCode(this, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_customnames(' + name + ',' + id + ')\n';
    return code;
};

Blockly.Python.huskylens_command_request_custom_text = function () {
    var v = this.getFieldValue('SUB');
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ATOMIC);
    var name = Blockly.Python.valueToCode(this, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_custom_text(' + name + ',' + x + ',' + y + ')\n';
    return code;
};

Blockly.Python.huskylens_command_request_clear_text = function () {
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_clear_text()\n';
    return code;
};

Blockly.Python.huskylens_command_request_photo_screenshot = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_' + ctype + '()\n';
    return code;
};

Blockly.Python.huskylens_save_load_model_to_SD_card = function () {
    var ctype = this.getFieldValue('CTYPE');
    var v = this.getFieldValue('SUB');
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    Blockly.Python.imports_['import_huskylens'] = 'import huskylens';
    code = v + '.command_request_' + ctype + '_model_to_SD_card(' + num + ')\n';
    return code;
};

Blockly.Python.haskylens_model = function () {
    var code = this.getFieldValue('SN');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

    return Blockly;
}

exports = addGenerator;