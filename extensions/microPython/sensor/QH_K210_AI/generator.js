/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.PY_qdp_k210_color_sel = function () {
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var R = "0x" + color.substr(1, 2);
      var G = "0x" + color.substr(3, 2);
      var B = "0x" + color.substr(5);
      color = `(${R},${G},${B})`;
      return [color, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python.PY_qdp_k210_list_var = function () {
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      LIST = LIST.replace(/\'/g, "");
      LIST='['+LIST+']';
      return [LIST, Blockly.Python.ORDER_ATOMIC];  
    };

    //字体加载
    Blockly.Python.PY_qdp_k210_image_font_load = function() {
      var value_image = Blockly.Python.valueToCode(this, 'image', Blockly.Python.ORDER_ATOMIC);
      var value_width = Blockly.Python.valueToCode(this, 'width', Blockly.Python.ORDER_ATOMIC);
      var value_height = Blockly.Python.valueToCode(this, 'height', Blockly.Python.ORDER_ATOMIC);
      var value_path = Blockly.Python.valueToCode(this, 'path', Blockly.Python.ORDER_ATOMIC);
      var dropdown_type = this.getFieldValue('type');
      var code = 'image.font_load('+dropdown_type+', '+value_width+', '+value_height+', '+value_path+')\n';
      return code;
    };

    //新建空图
    Blockly.Python.PY_qdp_k210_image_Image1 = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var value_width = Blockly.Python.valueToCode(this, 'width', Blockly.Python.ORDER_ATOMIC);
      var value_height = Blockly.Python.valueToCode(this, 'height', Blockly.Python.ORDER_ATOMIC);
      var code = `image.Image(size=(${value_width}, ${value_height}))`;
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    //从文件打开图片
    Blockly.Python.PY_qdp_k210_image_Image = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = "image.Image("+path+")";
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_clear = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var code = sub+".clear()";
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    //保存图片
    Blockly.Python.PY_qdp_k210_image_save = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = sub+".save("+path+")\n";
      return code; 
    };

    Blockly.Python.PY_qdp_k210_image_set_pixel = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      LIST = LIST.replace(/\'/g, "");
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      color = color.replace(/\'/g, "");
      var code = sub+'.set_pixel('+LIST+','+color+')\n';
      return code; 
    };

    //
    Blockly.Python.PY_qdp_k210_image_get_pixel = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.get_pixel('+LIST+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_copy = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      LIST = LIST.replace(/\'/g, "");
      if(LIST.length!=0)
        LIST='['+LIST+']';
      var code = sub+'.copy('+LIST+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    //压缩图片
    Blockly.Python.PY_qdp_k210_image_compress = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var quality =Blockly.Python.valueToCode(this, 'quality',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.compress('+quality+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    //压缩图片
    Blockly.Python.PY_qdp_k210_image_tonew = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };


    //获取图片属性
    Blockly.Python.PY_qdp_k210_image_getinfo = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_string = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var x0 =Blockly.Python.valueToCode(this, 'x0',Blockly.Python.ORDER_ATOMIC);
      var y0 =Blockly.Python.valueToCode(this, 'y0',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'tex',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var R = "0x" + color.substr(1, 2);
      var G = "0x" + color.substr(3, 2);
      var B = "0x" + color.substr(5);
      var s =Blockly.Python.valueToCode(this, 'scale',Blockly.Python.ORDER_ATOMIC);
      var x_spacing =Blockly.Python.valueToCode(this, 'x_spacing',Blockly.Python.ORDER_ATOMIC) || "1";
      var y_spacing =Blockly.Python.valueToCode(this, 'y_spacing',Blockly.Python.ORDER_ATOMIC) || "1";
      var mono_space =Blockly.Python.valueToCode(this, 'mono_space',Blockly.Python.ORDER_ATOMIC) || "False";
      var code = sub+'.draw_string('+x0+', '+y0+', '+t+', scale='+s+', color=('+R+','+G+','+B+'), x_spacing='+x_spacing+', y_spacing='+y_spacing+', mono_space='+mono_space+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_image = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var sub1 =this.getFieldValue("VAR1");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var x_scale =Blockly.Python.valueToCode(this, 'x_scale',Blockly.Python.ORDER_ATOMIC);
      var y_scale =Blockly.Python.valueToCode(this, 'y_scale',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.draw_image('+sub1+','+list+','+x_scale+','+y_scale+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_font = function() {
      var value_image = this.getFieldValue("VAR");
      var value_x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ATOMIC);
      var value_y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ATOMIC);
      var value_width = Blockly.Python.valueToCode(this, 'width', Blockly.Python.ORDER_ATOMIC);
      var value_height = Blockly.Python.valueToCode(this, 'height', Blockly.Python.ORDER_ATOMIC);
      var value_data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
      var value_scale = Blockly.Python.valueToCode(this, 'scale', Blockly.Python.ORDER_ATOMIC);
      var value_color = Blockly.Python.valueToCode(this, 'color', Blockly.Python.ORDER_ATOMIC);
      if(value_data)
        if((value_data.charAt(0) == "\"" && value_data.charAt(value_data.length - 1) == "\"")
          || (value_data.charAt(0) == "'" && value_data.charAt(value_data.length - 1) == "'"))
          var code = value_image+'.draw_font('+value_x+', '+value_y+', '+value_width+', '+value_height+', b'+value_data+', scale='+value_scale+', color='+value_color+')';
        else
          var code = value_image+'.draw_font('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_data+', scale='+value_scale+', color='+value_color+')';
      else
        var code = value_image+'.draw_font('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_data+', scale='+value_scale+', color='+value_color+')';
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python.PY_qdp_k210_image_draw_line = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.draw_line('+list+','+color+','+t+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_arrow = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.draw_arrow('+list+','+color+','+t+')';
      return [code, Blockly.Python.ORDER_ATOMIC];  
    };

    Blockly.Python.PY_qdp_k210_image_draw_cross = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var s =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.draw_cross('+list+','+color+','+s+','+t+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_circle = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var f =this.getFieldValue("fil");
      var code = sub+'.draw_circle('+list+','+color+','+t+','+f+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_rectangle = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var f =this.getFieldValue("fil");
      var code = sub+'.draw_rectangle('+list+','+color+','+t+','+f+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_draw_keypoints = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key =this.getFieldValue("keypoints");
      var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var size =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var thi =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
      var fil =this.getFieldValue("fil");
      var code = sub+'.draw_keypoints('+key+','+color+','+size+','+thi+','+fil+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };
    Blockly.Python.PY_qdp_k210_image_lens_corr = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var strength =Blockly.Python.valueToCode(this, 'strength',Blockly.Python.ORDER_ATOMIC); 
      var zoom =Blockly.Python.valueToCode(this, 'zoom',Blockly.Python.ORDER_ATOMIC); 
      var code = sub+'.lens_corr('+strength+','+zoom+')';   
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_histeq = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key =this.getFieldValue("key");
      var limit =Blockly.Python.valueToCode(this, 'limit',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.histeq('+key+','+limit+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_mean = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR")
      var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var key =this.getFieldValue("key");
      var offset = Blockly.Python.valueToCode(this, 'offset',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.mean('+size+','+key+','+offset+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_cartoon = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var seed = Blockly.Python.valueToCode(this, 'seed',Blockly.Python.ORDER_ATOMIC);
      var floa = Blockly.Python.valueToCode(this, 'float',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.cartoon(seed_threshold='+seed+',floating_threshold='+floa+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_erode = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var threshold = Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.erode('+size+','+threshold+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_dilate = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var threshold = Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.dilate('+size+','+threshold+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_flood_fill = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var color = Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
      var seed = Blockly.Python.valueToCode(this, 'seed',Blockly.Python.ORDER_ATOMIC);
      var floa = Blockly.Python.valueToCode(this, 'float',Blockly.Python.ORDER_ATOMIC);
      var invert = this.getFieldValue("invert");
      var clear = this.getFieldValue("clear");
      var code = sub+'.flood_fill('+list+','+seed+','+floa+','+color+','+invert+','+clear+')';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_linpolar = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key =this.getFieldValue("key");
      var code = sub+'.linpolar('+key+')';   
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_invert = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR"); 
      var code = sub+'.invert()';   
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_line = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_circle = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      if (key == "circle")
      var code = '['+sub+'.x(),'+sub+'.y(),'+sub+'.r()]';
      else
      var code = sub+'.'+key+'()';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_rect = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';  
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_lines = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var theta_margin =Blockly.Python.valueToCode(this, 'theta_margin',Blockly.Python.ORDER_ATOMIC);
      var rho_margin =Blockly.Python.valueToCode(this, 'rho_margin',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_lines('+roi+',threshold='+threshold+',theta_margin='+theta_margin+',rho_margin='+rho_margin+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };



    Blockly.Python.PY_qdp_k210_image_find_circles = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var r_min =Blockly.Python.valueToCode(this, 'r_min',Blockly.Python.ORDER_ATOMIC);
      var r_max =Blockly.Python.valueToCode(this, 'r_max',Blockly.Python.ORDER_ATOMIC);
      var r_step =Blockly.Python.valueToCode(this, 'r_step',Blockly.Python.ORDER_ATOMIC);
      var x_margin =Blockly.Python.valueToCode(this, 'x_margin',Blockly.Python.ORDER_ATOMIC);
      var y_margin =Blockly.Python.valueToCode(this, 'y_margin',Blockly.Python.ORDER_ATOMIC);
      var r_margin =Blockly.Python.valueToCode(this, 'r_margin',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_circles('+roi+',threshold='+threshold+',x_margin='+x_margin+',y_margin='+y_margin+',r_margin='+r_margin+',r_min='+r_min+',r_max='+r_max+',r_step='+r_step+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };


    Blockly.Python.PY_qdp_k210_image_find_rects = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_rects('+roi+',threshold='+threshold+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_lab_to_rgb = function () {
      Blockly.Python.imports_['import_image_pic'] = 'import image as pic';
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var code = 'image.lab_to_rgb('+LIST+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_rgb_to_lab = function () {
      Blockly.Python.imports_['import_image_pic'] = 'import image as pic';
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var code = 'image.rgb_to_lab('+LIST+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_rgb_to_grayscale = function () {
      Blockly.Python.imports_['import_image_pic'] = 'import image as pic';
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var code = 'image.rgb_to_grayscale('+LIST+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_grayscale_to_rgb = function () {
      Blockly.Python.imports_['import_image_pic'] = 'import image as pic';
      var g_value =Blockly.Python.valueToCode(this, 'g_value',Blockly.Python.ORDER_ATOMIC);
      var code = 'image.grayscale_to_rgb('+g_value+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_blob = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_Histogram = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_percentile = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var per =Blockly.Python.valueToCode(this, 'CDF',Blockly.Python.ORDER_ATOMIC);
      var key = this.getFieldValue('key');
      var code = sub+'.get_percentile('+per+').'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_blobs = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var area1 =Blockly.Python.valueToCode(this, 'area',Blockly.Python.ORDER_ATOMIC);
      var pixel =Blockly.Python.valueToCode(this, 'pixel',Blockly.Python.ORDER_ATOMIC);
      var margin =Blockly.Python.valueToCode(this, 'margin',Blockly.Python.ORDER_ATOMIC);
      var merge =this.getFieldValue('key');
      var code = sub+'.find_blobs('+LIST+',roi='+roi+',area_threshold='+area1+',pixels_threshold='+pixel+',merge='+merge+',margin='+margin+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_get_histogram = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.get_histogram(roi='+roi+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_barcode = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_qrcode = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };


    Blockly.Python.PY_qdp_k210_image_apriltag = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_barcodes = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_barcodes('+roi+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_qrcodes = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_qrcodes('+roi+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_apriltags = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_apriltags('+roi+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };


    Blockly.Python.PY_qdp_k210_image_kptmatch = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var key = this.getFieldValue('key');
      var code = sub+'.'+key+'()';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_hog = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var size =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
      var code = sub+'.find_hog('+roi+','+size+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_find_keypoints = function () {
      Blockly.Python.imports_['import_image'] = 'import image';
      var sub =this.getFieldValue("VAR");
      var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
      var key =Blockly.Python.valueToCode(this, 'max_keypoints',Blockly.Python.ORDER_ATOMIC);
      var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var scale =Blockly.Python.valueToCode(this, 'scale_factor',Blockly.Python.ORDER_ATOMIC);
      var normalized =this.getFieldValue("normalized");
      var code = sub+'.find_keypoints(roi='+roi+',max_keypoints='+key+',threshold='+threshold+',scale_factor='+scale+',normalized='+normalized+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_image_match_descriptor = function () {
      Blockly.Python.imports_['import_image_pic'] = 'import image as pic';
      var sub1 =this.getFieldValue("VAR1");
      var sub2 =this.getFieldValue("VAR2");
      var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
      var code = 'pic.match_descriptor('+sub1+','+sub2+',threshold='+threshold+')';
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };

    Blockly.Python.PY_qdp_k210_tuple_facedata = function() {
      var varName = this.getFieldValue("VAR");
      var text=Blockly.Python.valueToCode(this, 'TEXT',Blockly.Python.ORDER_ATOMIC);
      var code = varName+'= '+ text + '\n';
      return code;
    };

    Blockly.Python.PY_qdp_k210_face_init = function () {
      Blockly.Python.imports_['import_qdpk210_aistart_facedetect'] = 'import qdpk210_aistart_facedetect as facedetect';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var code = "facedetect.init()\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_face_training = function () {
      Blockly.Python.imports_['import_qdpk210_aistart_facedetect'] = 'import qdpk210_aistart_facedetect as facedetect';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var calss =this.getFieldValue("corpus");
      var save =Blockly.Python.valueToCode(this, 'save',Blockly.Python.ORDER_ATOMIC);
      var code = "facedetect.training("+calss+", "+save+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_face_loading = function () {
      Blockly.Python.imports_['import_qdpk210_aistart_facedetect'] = 'import qdpk210_aistart_facedetect as facedetect';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var calss =this.getFieldValue("corpus");
      var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
      var code = "facedetect.loading("+calss+", "+path+")\n";
      return code;  
    };

    Blockly.Python.PY_qdp_k210_face_predict = function () {
      Blockly.Python.imports_['import_qdpk210_aistart_facedetect'] = 'import qdpk210_aistart_facedetect as facedetect';
      Blockly.Python.imports_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
      var calss =this.getFieldValue("corpus");
      var code = "facedetect.get_result("+calss+")";
      return [code, Blockly.Python.ORDER_ATOMIC]; 
    };


    return Blockly;
  }
 
exports = addGenerator;
