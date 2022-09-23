/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.mpy_variables_name = function () {
      var name =Blockly.Python.valueToCode(this, 'name',Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      return [name, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python['storage_fileopen'] = function(block) {
      var fn = Blockly.Python.valueToCode(this, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
      var mode = this.getFieldValue('MODE');
      var code = 'open(' + fn + ', \'' + mode +'\')';
      return [code,Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_file_write = function () {
        var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        return file+".write(" + data + ")\n";
    }

    Blockly.Python.storage_get_contents_without_para = function () {
        var mode = this.getFieldValue('MODE');
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = file+'.'+mode+'()';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_get_contents = function () {
        var mode = this.getFieldValue('MODE');
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var size = Blockly.Python.valueToCode(this, 'SIZE', Blockly.Python.ORDER_ATOMIC);
        var code = file+'.'+mode+'(' + size + ')';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_can_write_ornot = function () {
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = file+".writable()";
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_get_filename = function () {
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = file+".name()";
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_close_file = function () {
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = file+".close()\n";
        return code;
    };

    Blockly.Python.storage_list_all_files = function() {
      Blockly.Python.imports_['import_os'] = 'import os';
      var code = 'os.listdir()';
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_get_current_dir = function() {
      Blockly.Python.imports_['import_os'] = 'import os';
      var code = 'os.getcwd()';
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_change_dir = function () {
        Blockly.Python.imports_['import_os'] = 'import os';
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = "os.chdir("+file+")\n";
        return code;
    };

    Blockly.Python.storage_make_dir = function () {
      Blockly.Python.imports_['import_os'] = 'import os';
        var mode = this.getFieldValue('MODE');
        var path = Blockly.Python.valueToCode(this, 'PATH', Blockly.Python.ORDER_ATOMIC);
        var code = 'os.'+mode+'(' + path + ')\n';
        return code;
    };

    Blockly.Python.storage_delete_file = function () {
        Blockly.Python.imports_['import_os'] = 'import os';
        var mode = this.getFieldValue('MODE');
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = "os."+mode+"("+file+")\n";
        return code;
    };

    Blockly.Python.storage_rename = function () {
        Blockly.Python.imports_['import_os'] = 'import os';
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var file1 = Blockly.Python.valueToCode(this, 'NEWFILE', Blockly.Python.ORDER_ATOMIC);
        var code = "os.rename("+file+","+file1+")\n";
        return code;
    };

    Blockly.Python.storage_get_file_size = function () {
        Blockly.Python.imports_['import_os'] = 'import os';
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = "os.size("+file+")";
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_is_file = function () {
        Blockly.Python.imports_['import_os'] = 'import os';
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var mode = this.getFieldValue('MODE');
        var code = "os."+ mode + "(" + file + ")";
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_file_tell = function () {
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var code = file+".tell()";
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.storage_file_seek = function () {
        var mode = this.getFieldValue('MODE');
        var mode_num = 0;
        if (mode == 'start'){
          mode_num = 0;}
        else if(mode == 'current'){
          mode_num = 1;
        }
        else{
          mode_num = 2;
        }
        var file = Blockly.Python.valueToCode(this, 'FILE', Blockly.Python.ORDER_ATOMIC);
        var size = Blockly.Python.valueToCode(this, 'SIZE', Blockly.Python.ORDER_ATOMIC);
        var code = file+'.seek('+ size + ',' + mode_num + ')\n';
        return code;
    };

    return Blockly;
}
 
exports = addGenerator;
