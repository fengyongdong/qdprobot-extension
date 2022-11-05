/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.mpy_variables_name = function () {
      var name =Blockly.Python.valueToCode(this, 'name',Blockly.Python.ORDER_ATOMIC);
      name = name.replace(/\'/g, "");
      return [name, Blockly.Python.ORDER_ATOMIC];  
    };
  
  // Bylnk设置
  Blockly.Python['mpython_blynk_setup'] = function (block) {
      Blockly.Python.imports_['import_BlynkLib'] = 'import blynklib';
      var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
      var auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC);
      var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

      Blockly.Python.imports_['mpython_blynk_setup'] =
          "blynk = blynklib.Blynk(" + auth + ", server=" + server + ", port=" + port + ")";

      Blockly.Python.imports_['blynk_on_connected'] =
          `@blynk.handle_event("connect")\ndef connect_handler():\n  print('Blynk connected')
  `

      Blockly.Python.imports_['blynk_on_disconnected'] =`@blynk.handle_event("disconnect")\ndef connect_handler():\n  print('Blynk disconnected')
  `

      return '';
  };

  // 从 Bylnk APP 获取虚拟管脚 %1 的值
  Blockly.Python['mpython_blynk_app_data'] = function (block) {
      var virtual_pin = Blockly.Python.valueToCode(block, 'virtual_pin', Blockly.Python.ORDER_ATOMIC);

      var branch = Blockly.Python.statementToCode(block, 'DO');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      branch = Blockly.Python.addLoopTrap(branch, block.id);
      if (!branch)
        branch='pass';
      Blockly.Python.imports_['blynk_VIRTUAL_WRITE_' + virtual_pin] =
          "@blynk.handle_event('write V" + virtual_pin + "')\n" +
          'def write_virtual_pin_handler(pin, _value):\n' + 
          '  for i in range(0, len(_value)):\n' +
          '    try:_value[i] = eval(_value[i])\n' +
          '    except: pass\n' +
          '  if len(_value) == 1:\n'+
          '    _value = _value[0]\n  ' + branch;
      return '';
    };

    //blynk定时器
    Blockly.Python['mpython_blynktimer'] = function (block) {
        Blockly.Python.imports_['import_blynktimer'] = 'import blynktimer';

        var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
        var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
        var Timer_mode = block.getFieldValue('Timer_mode');
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");
        branch = Blockly.Python.addLoopTrap(branch, block.id);
        if (!branch)
        branch='pass';
        Blockly.Python.imports_['def_blynktimer'] = 'blynk_timer = blynktimer.Timer(no_timers_err=False)';

        Blockly.Python.imports_['blynktimer_event' + Num] =`@blynk_timer.register(interval=${period}, run_once=${Timer_mode})\ndef blynk_timer${Num}():\n  `+ branch;

        return '';
    };

    // 可用的 Blynk 定时器
    Blockly.Python['mpython_blynk_get_timers'] = function (block) {
        Blockly.Python.imports_['import_blynktimer'] = 'import blynktimer';
        Blockly.Python.imports_['def_blynktimer'] = 'blynk_timer = blynktimer.Timer(no_timers_err=False)';

        var code = `blynk_timer.get_timers()`;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    // 停止 Blynk 定时器 %1
    Blockly.Python['mpython_blynk_stop_timers'] = function (block) {
        Blockly.Python.imports_['import_blynktimer'] = 'import blynktimer';
        Blockly.Python.imports_['def_blynktimer'] = 'blynk_timer = blynktimer.Timer(no_timers_err=False)';

        var timer_num = Blockly.Python.valueToCode(block, 'timer_num', Blockly.Python.ORDER_ATOMIC);
        var code = `blynk_timer.stop('${timer_num}_blynk_timer${timer_num}')` + '\n';

        return code;
    };

    // Blynk 定时器的进程生效并运行
    Blockly.Python['mpython_blynktimer_run'] = function (block) {
        var code = 'blynk_timer.run()\n';
        return code;
    };

    // Blynk 进程生效并运行
    Blockly.Python['mpython_blynk_run'] = function (block) {
        var code = 'blynk.run()\n';
        return code;
    };

    // 发送数据 %1 到 Bylnk APP 的虚拟管脚 %2
    Blockly.Python['mpython_blynk_sensor_data_to_app'] = function (block) {
        var sensor_data = Blockly.Python.valueToCode(block, 'sensor_data', Blockly.Python.ORDER_ATOMIC);
        var virtual_pin = Blockly.Python.valueToCode(block, 'virtual_pin', Blockly.Python.ORDER_ATOMIC);
        var code = 'blynk.virtual_write(' + virtual_pin + ', ' + sensor_data + ')\n';
        return code;
    };

    // Blynk APP 显示通知
    Blockly.Python['mpython_blynk_app_notify'] = function (block) {
        var notification = Blockly.Python.valueToCode(block, 'notification', Blockly.Python.ORDER_ATOMIC);

        var code = 'blynk.notify(' + notification + ')\n';
        return code;
    };

    // 斷開连接 Blynk
    Blockly.Python['mpython_blynk_on_disconnected'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");
        branch = Blockly.Python.addLoopTrap(branch, block.id);
        if (!branch)
            branch='pass'; 

        Blockly.Python.variables_['blynk_on_disconnected'] =
            '@blynk.handle_event("disconnect")\n' +
            'def connect_handler():\n  ' + branch;

        return '';
    };

    // 连接上 Blynk
    Blockly.Python['mpython_blynk_on_connected'] = function (block) {
        var branch = Blockly.Python.statementToCode(block, 'DO');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");
        branch = Blockly.Python.addLoopTrap(branch, block.id);
        if (!branch)
        branch='pass';
        Blockly.Python.variables_['blynk_on_connected'] =
            '@blynk.handle_event("connect")\n' +
            'def connect_handler():\n  ' + branch;

        return '';
    };

    // Blynk 同步虚拟管脚的状态
    Blockly.Python['mpython_blynk_sync_virtual'] = function (block) {
        var virtual_pin = Blockly.Python.valueToCode(block, 'virtual_pin', Blockly.Python.ORDER_ATOMIC);

        var code = 'blynk.virtual_sync(' + virtual_pin + ')\n';
        return code;
    };

    // 向 %1 发邮件  主题 %2 正文 %3
    Blockly.Python['mpython_blynk_email'] = function (block) {
        var body = Blockly.Python.valueToCode(block, 'body', Blockly.Python.ORDER_ATOMIC);
        var subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
        var TargetEmail = Blockly.Python.valueToCode(block, 'TargetEmail', Blockly.Python.ORDER_ATOMIC);

        var code = `blynk.email(${TargetEmail}, ${subject}, ${body})` + '\n';
        return code;
    };

    // 给虚拟管脚添加   属性 %1 值 %2
    Blockly.Python['mpython_blynk_set_property'] = function (block) {
        var virtual_pin = Blockly.Python.valueToCode(block, 'virtual_pin', Blockly.Python.ORDER_ATOMIC);
        var attribute_value = Blockly.Python.valueToCode(block, 'attribute_value', Blockly.Python.ORDER_ATOMIC);
        var attribute_name = Blockly.Python.valueToCode(block, 'attribute_name', Blockly.Python.ORDER_ATOMIC);

        var code = `blynk.set_property(${virtual_pin}, ${attribute_name}, ${attribute_value})` + '\n';

        return code;
    };


    
    return Blockly;
  }
 
exports = addGenerator;
