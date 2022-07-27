/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color_c02_serson = '#E06C78';
    
    const QH_UltraSonicDistanceSensor_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzc0NDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjY3IDM3MC4xNnYyODMuNjhoODk0LjY2VjM3MC4xNnogbTgyOS4wOCAyMTguMTJoLTc2My41VjQzNS43MmgxMjguMTN2NTQuNDdIMzI0di01NC40N2g4MS42djk4LjA5aDY1LjU4di05OC4wOWg4MS42NHY1NC40N2g2NS41OHYtNTQuNDdINzAwdjk4LjA5aDY1LjU4di05OC4wOWgxMjguMTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2MzQ1Ij48L3BhdGg+PC9zdmc+';

    var qdprobotESP32_BOTH_PIN_Output_Dropdown = [
      ['.P3-21-22（IIC）','21 22'],
      ['.P4-16-17（RGB）','16 17'],
      ['.P5-18-5','18 5'],
      ['.P6-23-19','13 19'],
      ['.P7-15-2（touch)','15 2'],
      ['.P8-27-14（touch）','27 14'],
      ['.P9-12-13（touch）','12 13'],
      ['.P10-25-26','25 26']
    ];

    var qdprobotESP32_UNIT=[["CM", "cm"],
      ["mm", "mm"]];

    
    //超声波
    Blockly.Blocks.PY_qdp_esp32_chaoshengbo = {
      init: function () {
          this.jsonInit({
              message0: '%1',
              message1: Blockly.Msg.PY_qdp_esp32_chaoshengbo,
              args0: [
                  {
                      type: 'field_image',
                      src: QH_UltraSonicDistanceSensor_ICO,
                      width: 30,
                      height: 30
                  }
              ],
              args1: [
                  {
                      type: 'field_dropdown',
                      name: 'PIN',
                      options:qdprobotESP32_BOTH_PIN_Output_Dropdown
                  },
                  {
                    type: 'field_dropdown',
                    name: 'TYPE',
                    options: [['AB', '1'], ['BA', '2']]
                    },
                  {
                      type: 'field_dropdown',
                      name: 'UNIT',
                      options:qdprobotESP32_UNIT
                  }             
              ],
              "tooltip": "超声波测距，注意单位的选择，\n使用时如果波动大请注意检查程序或放宽取值区间",
              colour: color_c02_serson,
              colourTertiary: '#C0C0C0',
              extensions: ['output_number']
          });
      }
  };

  return Blockly;
}

exports = addBlocks;


