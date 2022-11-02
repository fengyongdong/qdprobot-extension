/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    
    Blockly.Arduino.i2cScanner_print = function() {
        
        Blockly.Arduino.includes_['I2CScanner'] = '#include <I2CScanner.h>';
        Blockly.Arduino.definitions_['I2CScanner'] = 'I2CScanner scanner;';
        Blockly.Arduino.setups_['I2CScanner'] = 'scanner.Init();';

        var code = 'scanner.Scan();\n';
        return code;
    };

    return Blockly;
}

exports = addGenerator;
