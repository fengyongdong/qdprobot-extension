/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ADVANCED_CATEGORY:'C02 advanced',
        QH_OTHER_CATEGORY:'Other',
        python_del:'del %1',
        python_in:'%1 is %2 in?',
        PY_time_ticks:'System run time %1',
        PY_time_ms:'ms',
        PY_time_us:'us',
        controls_pass:'pass',
        system_reset:'System reset',
        system_gc_collect:'gc collect%1 ',
        gc_enable:'enable',
        gc_disable:'disable',
        gc_collect:'collect',
        controls_flow_statements:'loop%1',
        loop_break:'break',
        loop_continue:'continue',
        controls_thread:'thread execution functions %1 arguments %2 ',
        thread_func:'function %1 arg %2',
        controls_exec:'Executable code %1',
        controls_range:'Range from %1 to %2 step %3',
        controls_forEach:'In %1 for %2 do %3',
        py_variables:'variables %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ADVANCED_CATEGORY:'C02高级',
        QH_OTHER_CATEGORY:'其它',
        python_del:'删除 %1',
        python_in:'%1 是否在 %2 内?',
        PY_time_ticks:'系统运行时间 %1',
        PY_time_ms:'毫秒',
        PY_time_us:'微秒',
        controls_pass:'占位语句',
        system_reset:'机器复位',
        system_gc_collect:'垃圾回收%1',
        gc_enable:'启用',
        gc_disable:'禁用',
        gc_collect:'回收',
        controls_flow_statements:'循环%1',
        loop_break:'跳出',
        loop_continue:'跳至下一个',
        controls_thread:'启动线程 执行函数 %1 参数 %2 ',
        thread_func:'函数 %1 参数 %2',
        controls_exec:'执行代码 %1',
        controls_range:'序列 从 %1 到 %2 间隔 %3',
        controls_forEach:'对 %1 中的每个项目 %2 执行 %3',
        py_variables:'变量 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_ADVANCED_CATEGORY:'C02高級',
        QH_OTHER_CATEGORY:'其他',
        python_del:'刪除 %1',
        python_in:'%1 是否在 %2 內?',
        PY_time_ticks:'系統運行時間 %1',
        PY_time_ms:'毫秒',
        PY_time_us:'微秒',
        controls_pass:'占位語句',
        system_reset:'機器複位',
        system_gc_collect:'垃圾回收%1',
        gc_enable:'啟用',
        gc_disable:'禁用',
        gc_collect:'回收',
        controls_flow_statements:'迴圈%1',
        loop_break:'跳出',
        loop_continue:'跳至下一個',
        controls_thread:'啟動線程 執行函數 %1 參數 %2 ',
        thread_func:'函數 %1 參數 %2',
        controls_exec:'執行代碼 %1',
        controls_range:'序列 從 %1 到 %2間隔 %3',
        controls_forEach:'對 %1 中的每個專案 %2 執行 %3',
        py_variables:'變數 %1'
    });
    return Blockly;
}

exports = addMsg;
