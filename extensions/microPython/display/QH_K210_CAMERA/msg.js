/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_CAMERA_CATEGORY:'Camera',
        PY_qdp_k210_camera_init:'Camera initializes frame format %1 Frame size %2 Image capture %3 Frame hops %4',
        RGB565:'RGB565',
        GRAYSCALE:'GRAYSCALE',
        camera_run:'OPEN',
        camera_norun:'CLOSE',
        PY_qdp_k210_camera_fill_in_light:'%1Camera the fill light colour%2',
        PY_qdp_k210_camera_snapshot:'Image acquisition by camera',
        PY_qdp_k210_camera_shutdown:'Camera mode %1 set to %2',
        enable:'enable',
        hmirror:'h_mirror',
        vflip:'v_flip',
        colorbar:'colorbar',
        PY_qdp_k210_camera_setmun:'Camera %1 is set to %2',
        set_contrast:'contrast',
        set_brightness:'brightness',
        set_auto_gain:'auto_gain',
        set_saturation:'saturatio',
        PY_qdp_k210_camera_getinfo:'Camera get %1 ',
        width:'width',
        height:'height',
        get_gain_db:'get gain db',
        get_fb:'get fb',
        get_id:'get id',
        PY_qdp_k210_camera_set_windowing:'Camera Set window size %1 high %2'
        
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_CAMERA_CATEGORY:'摄像头',
        PY_qdp_k210_camera_init:'摄像头 初始化 帧格式 %1 帧大小 %2 图像捕捉 %3 跳帧 数%4',
        RGB565:'彩色',
        GRAYSCALE:'灰色',
        camera_run:'开启',
        camera_norun:'关闭',
        PY_qdp_k210_camera_fill_in_light:'%1摄像头 补光灯 颜色%2',
        PY_qdp_k210_camera_snapshot:'摄像头 获取图像',
        PY_qdp_k210_camera_shutdown:'摄像头 模式%1 设置为 %2',
        enable:'启用',
        hmirror:'水平镜像',
        vflip:'垂直镜像',
        colorbar:'彩条模式',
        PY_qdp_k210_camera_setmun:'摄像头 %1 设置为 %2',
        set_contrast:'对比度',
        set_brightness:'亮度',
        set_auto_gain:'增益',
        set_saturation:'饱和度',
        PY_qdp_k210_camera_getinfo:'摄像头 获取%1 ',
        width:'宽度',
        height:'高度',
        get_gain_db:'当前增益值',
        get_fb:'帧缓冲图像',
        get_id:'类型ID',
        PY_qdp_k210_camera_set_windowing:'摄像头 设置窗口尺寸 宽 %1 高%2'
        

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        QH_CAMERA_CATEGORY:'攝像頭',
        PY_qdp_k210_camera_init:'攝像頭 初始化 幀格式 %1 幀大小 %2 圖像捕捉 %3 跳幀 數%4',
        RGB565:'彩色',
        GRAYSCALE:'灰色',
        camera_run:'開啟',
        camera_norun:'關閉',
        PY_qdp_k210_camera_fill_in_light:'%1攝像頭 補光 顏色%2' ,
        PY_qdp_k210_camera_snapshot:'攝像頭 獲取圖像',
        PY_qdp_k210_camera_shutdown:'攝像頭 模式%1 設置為 %2' ,
        enable:'啟用',
        hmirror:'水準鏡像',
        vflip:'垂直鏡像',
        colorbar:'彩條模式',
        PY_qdp_k210_camera_setmun:'摄像头 %1 设置为 %2' ,
        set_contrast:'對比度',
        set_brightness:'亮度',
        set_auto_gain:'增益',
        set_saturation:'飽和度',
        PY_qdp_k210_camera_getinfo:'攝像頭 獲取%1 ',
        width:'寬度',
        height:'高度',
        get_gain_db:'當前增益值',
        get_fb:'幀緩衝圖像',
        get_id:'類型ID',
        PY_qdp_k210_camera_set_windowing:'攝像頭 設置窗口尺寸 寬 %1 高%2'   
        
    });
    return Blockly;
}

exports = addMsg;
