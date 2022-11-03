/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    
    const QH_NTP_COLOR = '#00a4a6'; 

    const QH_NTP_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY3MzY4ODQ4OTI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTUxMiAwQzIyOS4yMzQyODYgMCAwIDIyOS4yMzQyODYgMCA1MTJzMjI5LjIzNDI4NiA1MTIgNTEyIDUxMiA1MTItMjI5LjIzNDI4NiA1MTItNTEyUzc5NC43NjU3MTQgMCA1MTIgMHogbTAgOTE0LjI4NTcxNEMyODkuODI4NTcxIDkxNC4yODU3MTQgMTA5LjcxNDI4NiA3MzQuMTcxNDI5IDEwOS43MTQyODYgNTEyUzI4OS44Mjg1NzEgMTA5LjcxNDI4NiA1MTIgMTA5LjcxNDI4NnM0MDIuMjg1NzE0IDE4MC4xMTQyODYgNDAyLjI4NTcxNCA0MDIuMjg1NzE0LTE4MC4xMTQyODYgNDAyLjI4NTcxNC00MDIuMjg1NzE0IDQwMi4yODU3MTR6IiBwLWlkPSI2MTMzIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTY4OC4xMjU3MTQgNjA4LjIxNzE0M0w1MzAuMTcxNDI5IDUzNS43MjU3MTRWMzUyLjE5NDI4NmE1NC44NTcxNDMgNTQuODU3MTQzIDAgMCAwLTU0Ljg1NzE0My01NC44NTcxNDMgNTQuODU3MTQzIDU0Ljg1NzE0MyAwIDAgMC01NC44NTcxNDMgNTQuODU3MTQzdjIxOS40Mjg1NzFhNTQuODU3MTQzIDU0Ljg1NzE0MyAwIDAgMCAzOS44NTE0MjggNTIuNzY1NzE0bDE4Mi4wNDU3MTUgODMuNTU0Mjg2YTU0Ljg1NzE0MyA1NC44NTcxNDMgMCAwIDAgNzIuNzQyODU3LTI2Ljk3MTQyOCA1NC44NTcxNDMgNTQuODU3MTQzIDAgMCAwLTI2Ljk3MTQyOS03Mi43NTQyODZ6IiBwLWlkPSI2MTM0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";


    Blockly.Blocks.communicate_esp32_ntp_updata_time = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_esp32_ntp_updata_time,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_NTP_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'server',
                        options: [["pool.ntp.org","pool.ntp.org"],["ntp1.aliyun.com","ntp1.aliyun.com"],["ntp7.aliyun.com","ntp7.aliyun.com"]]
                    }
                ],
                "tooltip": "",
                colour: QH_NTP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.communicate_esp32_ntp_get_time = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.communicate_esp32_ntp_get_time,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_NTP_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.time_all,"()"],[Blockly.Msg.time_year,"()[0]"],[Blockly.Msg.time_month,"()[1]"],[Blockly.Msg.time_day,"()[2]"],[Blockly.Msg.time_hour,"()[3]"],[Blockly.Msg.time_minute,"()[4]"],[Blockly.Msg.time_second,"()[5]"],[Blockly.Msg.time_week,"()[6]"],[Blockly.Msg.time_days,"()[7]"]]
                    }
                ],
                "tooltip": "所有:返回(年,月,日,时,分,秒,周,天)数组",
                colour: QH_NTP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}    

exports = addBlocks;


