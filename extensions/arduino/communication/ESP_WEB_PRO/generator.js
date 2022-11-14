/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   //网页编辑初始化
  Blockly.Arduino.espdashpro_display_components = function() {
      var Label =  Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      var unit = Blockly.Arduino.valueToCode(this, 'unit', Blockly.Arduino.ORDER_ATOMIC);
      var id= this.getFieldValue('id');
      var type= this.getFieldValue('type');
      var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      if(type==1)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card temp_'+ id +'(&dashboard, TEMPERATURE_CARD, '+ Label +', '+ unit +');\n';
    }
      if(type==2)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card hum_'+ id +'(&dashboard, HUMIDITY_CARD, '+ Label +', '+ unit +');\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card air_'+ id +'(&dashboard, AIR_CARD, '+ Label +', '+ unit +');\n';
    }   
      if(type==4)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card energy_'+ id +'(&dashboard, ENERGY_CARD, '+ Label +', '+ unit +');\n';
    }   
      if(type==5)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card status_'+ id +'(&dashboard, STATUS_CARD, '+ Label +', '+ unit +');\n';
    }   
      if(type==6)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card progress_'+ id +'(&dashboard, PROGRESS_CARD, '+ Label +', '+ unit +', 0, 100);\n';
    }   
      if(type==7)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro1_'+ type + id] = 'Card generic_'+ id +'(&dashboard, GENERIC_CARD, '+ Label +', '+ unit +');\n';
    }   
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      if(type==1)
    {
      var code='temp_'+ id +'.update((int)'+ value +');\n';
    }
      if(type==2)
    {
      var code='hum_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==3)
    {
      var code='air_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==4)
    {
      var code='energy_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==5)
    {
      var code='status_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==6)
    {
      var code='progress_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==7)
    {
      var code='generic_'+ id +'.update((int)'+ value +');\n';
    } 
      code=''+ code +'dashboard.sendUpdates();\n';   
      return code;
  };

  Blockly.Arduino.espdashpro_state_component = function() {
      var type= this.getFieldValue('type');
      var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      var id= this.getFieldValue('id');
      var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro2_' + id] = 'Card status_'+ id +'(&dashboard, STATUS_CARD, '+ Label +', "success");\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='status_'+ id +'.update('+ value +', "'+ type +'");\n';
      code=''+ code +'dashboard.sendUpdates();\n'; 
      return code;
  };

  Blockly.Arduino.espdashpro_update_chart = function() {
      var abscissa = Blockly.Arduino.valueToCode(this, 'abscissa', Blockly.Arduino.ORDER_ATOMIC);
      var ordinate = Blockly.Arduino.valueToCode(this, 'ordinate', Blockly.Arduino.ORDER_ATOMIC);
      var id= this.getFieldValue('id');
      var type= this.getFieldValue('type');
      var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      if(type==1)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro3_'+ type + id] = 'Chart bar_'+ id +'(&dashboard, BAR_CHART, '+ Label +');\n';
    }
      if(type==2)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro3_'+ type + id] = 'Chart line_'+ id +'(&dashboard, LINE_CHART, '+ Label +');\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro3_'+ type + id] = 'Chart area_'+ id +'(&dashboard, AREA_CHART, '+ Label +');\n';
    }   
      if(type==4)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro3_'+ type + id] = 'Chart pie_'+ id +'(&dashboard, PIE_CHART, '+ Label +');\n';
    }    
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      if(type==1)
    {
      var code='bar_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\nbar_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
    }
      if(type==2)
    {
      var code='line_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\nline_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
    }   
      if(type==3)
    {
      var code='area_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\narea_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
    }   
      if(type==4)
    {
      var code='pie_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\npie_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
    }   
      code=''+ code +'dashboard.sendUpdates();\n';   
      return code;
  };


  Blockly.Arduino.espdashpro_display_components1 = function() {
      var id= this.getFieldValue('id');
      var type= this.getFieldValue('type');
      var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      if(type==1)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card button_'+ id +'(&dashboard, BUTTON_CARD, '+ Label +');\n';
    }
      if(type==2)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card slider_'+ id +'(&dashboard, SLIDER_CARD, '+ Label +', "", 0, 255);\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card text_'+ id +'(&dashboard, TEXT_INPUT_CARD, '+ Label +');\n';
    }     
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      if(type==1)
    {
      var code='button_'+ id +'.update((int)'+ value +');\n';
    }
      if(type==2)
    {
      var code='slider_'+ id +'.update((int)'+ value +');\n';
    }   
      if(type==3)
    {
      var code='text_'+ id +'.update(String('+ value +'));\n';
    }    
      code=''+ code +'dashboard.sendUpdates();\n';   
      return code;
  };

  Blockly.Arduino.espdashpro_set_title = function() {
      var title = Blockly.Arduino.valueToCode(this, 'title', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='dashboard.setTitle('+ title +');\n';
      return code;
  };

  Blockly.Arduino.espdashpro_setting_permissions = function() {
      var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
      var pass = Blockly.Arduino.valueToCode(this, 'pass', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='dashboard.setAuthentication('+ name +', '+ pass +');\n';
      return code;
  };

  Blockly.Arduino.espdashpro_add_page = function() {
      var id= this.getFieldValue('id');
      var page = Blockly.Arduino.valueToCode(this, 'page', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro5_'+ id] = 'Tab settings_'+ id +'(&dashboard, '+ page +');\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='';
      return code;
  };

  Blockly.Arduino.espdashpro_add_statistics = function() {
      var id= this.getFieldValue('id');
      var Statistic = Blockly.Arduino.valueToCode(this, 'Statistic', Blockly.Arduino.ORDER_ATOMIC);
      var Value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro6_'+ id] = 'Statistic stat_'+ id +'(&dashboard, '+ Statistic +', '+ Value +');\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='';
      return code;
  };

  Blockly.Arduino.espdashpro_set_component_page = function() {
      var id= this.getFieldValue('id');
      var page_id= this.getFieldValue('page_id');
      var type= this.getFieldValue('type');
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code=''+ type +'_'+ id +'.setTab(&settings_'+ page_id +');\n';
      return code;
  };

  Blockly.Arduino.espdashpro_get_component_value = function () {
      var type= this.getFieldValue('type');
      var id= this.getFieldValue('id');
      var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      var branch = Blockly.Arduino.statementToCode(this, 'function');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      if(type==1)
    {
      Blockly.Arduino.setups_['var_declare_QDPwebPro_'+ type + id] = 'button_'+ id +'.attachCallback([&](int value) {\n'
                                                                     +''+ branch +'\n'
                                                                     +'button_'+ id +'.update(value);\n'
                                                                     +'dashboard.sendUpdates();\n'
                                                                     +'});\n';
    }
      if(type==2)
    {
      Blockly.Arduino.setups_['var_declare_QDPwebPro_'+ type + id] = 'slider_'+ id +'.attachCallback([&](int value) {\n'
                                                                     +''+ branch +'\n'
                                                                     +'slider_'+ id +'.update(value);\n'
                                                                     +'dashboard.sendUpdates();\n'
                                                                     +'});\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.setups_['var_declare_QDPwebPro_'+ type + id] = 'text_'+ id +'.attachCallback([&](const char* value) {\n'
                                                                     +''+ branch +'\n'
                                                                     +'text_'+ id +'.update(value);\n'
                                                                     +'dashboard.sendUpdates();\n'
                                                                     +'});\n';
    }
      if(type==1)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card button_'+ id +'(&dashboard, BUTTON_CARD, '+ Label +');\n';
    }
      if(type==2)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card slider_'+ id +'(&dashboard, SLIDER_CARD, '+ Label +', "", 0, 255);\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro4_'+ type + id] = 'Card text_'+ id +'(&dashboard, TEXT_INPUT_CARD, '+ Label +');\n';
    }  
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='';
      return code;
  };

  Blockly.Arduino.espdashpro_get_joystick_value = function () {
      var type= this.getFieldValue('type');
      var id= this.getFieldValue('id');
      var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
      var branch = Blockly.Arduino.statementToCode(this, 'function');
      branch = branch.replace(/(^\s*)|(\s*$)/g, "");
      Blockly.Arduino.definitions_['include_QDPwebPro'] ='#include <QDPwebPro.h>';
      Blockly.Arduino.definitions_['var_declare_QDPwebPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
      Blockly.Arduino.setups_['var_declare_QDPwebPro_'+ type + id] = 'joystick_'+ id +'.attachCallback([&](int8_t x, int8_t y) {\n'
                                                                     +''+ branch +'\n'
                                                                     +'});\n';
      if(type==1)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +');\n';
    }
      if(type==2)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +', "lockX");\n';
    }   
      if(type==3)
    {
      Blockly.Arduino.definitions_['var_declare_QDPwebPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +', "lockY");\n';
    }  
      Blockly.Arduino.setups_['var_QDPwebPro'] = 'server.begin();';
      var code='';
      return code;
  };
  Blockly.Arduino.QH_variables_get = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      code = name;
      return [code, Blockly.Arduino.ORDER_NONE];
  };



    return Blockly;
}

exports = addGenerator;
