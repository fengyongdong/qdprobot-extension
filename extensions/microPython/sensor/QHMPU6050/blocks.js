/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color_c02_sensor = '#E06C78';
    
    const QH_MPU6050_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyNzQ0NDA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MTc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NzguOTMzMzMzIDUwMy40NjY2NjdjLTQuMjY2NjY3LTE1My42LTEwNC41MzMzMzMtMjkyLjI2NjY2Ny0yNTYtMzQxLjMzMzMzNGw0LjI2NjY2Ny0xNy4wNjY2NjZjMi4xMzMzMzMtOC41MzMzMzMtMi4xMzMzMzMtMTkuMi0xMi44LTIxLjMzMzMzNC04LjUzMzMzMy0yLjEzMzMzMy0xOS4yIDIuMTMzMzMzLTIxLjMzMzMzMyAxMi44bC00LjI2NjY2NyAxNy4wNjY2NjdDNDM1LjIgMTE5LjQ2NjY2NyAyNzcuMzMzMzMzIDE4OS44NjY2NjcgMTk4LjQgMzIwYy01OS43MzMzMzMgMTQuOTMzMzMzLTk4LjEzMzMzMyA0MC41MzMzMzMtMTA4LjggNzguOTMzMzMzLTEwLjY2NjY2NyAzOC40IDEwLjY2NjY2NyA4MS4wNjY2NjcgNTUuNDY2NjY3IDEyMS42IDQuMjY2NjY3IDE1My42IDEwNC41MzMzMzMgMjkyLjI2NjY2NyAyNTYgMzQxLjMzMzMzNGwtNC4yNjY2NjcgMTcuMDY2NjY2Yy0yLjEzMzMzMyA4LjUzMzMzMyAyLjEzMzMzMyAxOS4yIDEyLjggMjEuMzMzMzM0IDguNTMzMzMzIDIuMTMzMzMzIDE5LjItMi4xMzMzMzMgMjEuMzMzMzMzLTEyLjhsNC4yNjY2NjctMTcuMDY2NjY3YzE1NS43MzMzMzMgMzQuMTMzMzMzIDMxMS40NjY2NjctMzYuMjY2NjY3IDM5Mi41MzMzMzMtMTY4LjUzMzMzMyA1OS43MzMzMzMtMTQuOTMzMzMzIDk4LjEzMzMzMy00MC41MzMzMzMgMTA4LjgtNzguOTMzMzM0IDguNTMzMzMzLTM0LjEzMzMzMy0xMi44LTc2LjgtNTcuNi0xMTkuNDY2NjY2ek02MTQuNCAxOTYuMjY2NjY3YzEyNS44NjY2NjcgNDAuNTMzMzMzIDIxMS4yIDE1MS40NjY2NjcgMjI4LjI2NjY2NyAyNzUuMi01MS4yLTM4LjQtMTIxLjYtNzQuNjY2NjY3LTIwMC41MzMzMzQtMTAyLjRMNjA4IDQ5MC42NjY2NjdjNDkuMDY2NjY3IDIxLjMzMzMzMyA3Ni44IDQ2LjkzMzMzMyA3Mi41MzMzMzMgNjYuMTMzMzMzLTYuNCAyNS42LTc4LjkzMzMzMyAyOS44NjY2NjctMTY2LjQgMTAuNjY2NjY3bDEwMC4yNjY2NjctMzcxLjJ6IG0tMzQuMTMzMzMzLTguNTMzMzM0bC0xMDAuMjY2NjY3IDM3MS4yYy04NS4zMzMzMzMtMjUuNi0xNDUuMDY2NjY3LTY0LTEzOC42NjY2NjctOTEuNzMzMzMzIDQuMjY2NjY3LTE5LjIgNDIuNjY2NjY3LTI1LjYgOTYtMjEuMzMzMzMzbDMyLTEyMS42Yy04NS4zMzMzMzMtMTQuOTMzMzMzLTE2Mi4xMzMzMzMtMTkuMi0yMjYuMTMzMzMzLTEwLjY2NjY2NyA3OC45MzMzMzMtMTAyLjQgMjA5LjA2NjY2Ny0xNTMuNiAzMzcuMDY2NjY3LTEyNS44NjY2Njd6IG0tMTcwLjY2NjY2NyA2NDBjLTEyNS44NjY2NjctNDAuNTMzMzMzLTIxMS4yLTE1MS40NjY2NjctMjI4LjI2NjY2Ny0yNzUuMiA2NCA0OS4wNjY2NjcgMTU3Ljg2NjY2NyA5My44NjY2NjcgMjY4LjggMTIzLjczMzMzNGwtNDAuNTMzMzMzIDE1MS40NjY2NjZ6IG0zNC4xMzMzMzMgOC41MzMzMzRsNDAuNTMzMzM0LTE1MS40NjY2NjdjMTEwLjkzMzMzMyAyNy43MzMzMzMgMjEzLjMzMzMzMyAzNi4yNjY2NjcgMjk0LjQgMjUuNi03Ni44IDEwMi40LTIwNi45MzMzMzMgMTUzLjYtMzM0LjkzMzMzNCAxMjUuODY2NjY3eiIgcC1pZD0iMTUxNzgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    var qdprobotESP32_LR_PIN_Output_Dropdown = [
    ['.P3-L-21（SDA）','21'],
    ['.P3-R-22（SCL）','22'],
    ['.P4-L-16','16'],
    ['.P4-R-17（RGB）','17'],
    ['.P5-L-18','18'],
    ['.P5-R-5','5'],
    ['.P6-L-23','6'],
    ['.P6-R-19','19'],
    ['.P7-L-15（touch）','15'],
    ['.P7-R-2','2'],
    ['.P8-L-27（touch）','27'],
    ['.P8-R-14（touch）','14'],
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P10-L-25','25'],
    ['.P10-R-26','26']
    ];

    //陀螺仪更新数据
    Blockly.Blocks.PY_QDP_ESP32_MPU6050_INIT = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_ESP32_MPU6050_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'sda',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'scl',
                        options:qdprobotESP32_LR_PIN_Output_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[['±2G','0'], ['±4G','1'], ['±8G','2'], ['±16G','3']]
                    }
                ],
                "tooltip": "初始化陀螺仪,用在读取值前,只用一次即可",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_QDP_ESP32_MPU6050_DATA = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_ESP32_MPU6050_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MPU6050_TYPE',
                        options: [[Blockly.Msg.QH_Accel_X,'AcX'],[Blockly.Msg.QH_Accel_Y,'AcY'],[Blockly.Msg.QH_Accel_Z,'AcZ'],[Blockly.Msg.QH_readTempC,'Tmp'],[Blockly.Msg.QH_Gyro_X,'GyX'],[Blockly.Msg.QH_Gyro_Y,'GyY'],[Blockly.Msg.QH_Gyro_Z,'GyZ']]
                    }
                ],
                "tooltip": "陀螺仪获取数据",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


