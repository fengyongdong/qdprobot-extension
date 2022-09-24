/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Video_color = '#30b22b';
    const QH_Video_record_color = '#ff0000';
   
    const QH_VIDEO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTYxNjg2MDI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwNC44IDIzNi44QTE5LjIgMTkuMiAwIDAgMCAxODUuNiAyNTZ2NTEyYzAgMTAuNTk4NCA4LjYwMTYgMTkuMiAxOS4yIDE5LjJoNjE0LjRhMTkuMiAxOS4yIDAgMCAwIDE5LjItMTkuMlYyNTZBMTkuMiAxOS4yIDAgMCAwIDgxOS4yIDIzNi44SDIwNC44eiBtMC02NGg2MTQuNGM0NS45MjY0IDAgODMuMiAzNy4yNzM2IDgzLjIgODMuMnY1MTJjMCA0NS45MjY0LTM3LjI3MzYgODMuMi04My4yIDgzLjJIMjA0LjhBODMuMiA4My4yIDAgMCAxIDEyMS42IDc2OFYyNTZjMC00NS45MjY0IDM3LjI3MzYtODMuMiA4My4yLTgzLjJ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNDI2Ij48L3BhdGg+PHBhdGggZD0iTTY3MC43NzEyIDQ4NS4wMTc2YTUyLjQ4IDUyLjQ4IDAgMCAxLTE3Ljk3MTIgNzEuOTg3MmwtMTk1LjczNzYgMTE3LjQwMTZhNTIuNDggNTIuNDggMCAwIDEtNzkuNDYyNC00NC45NTM2VjM5NC41NDcyYTUyLjQ4IDUyLjQ4IDAgMCAxIDc5LjQ2MjQtNDQuOTUzNkw2NTIuOCA0NjYuOTQ0YzcuMzcyOCA0LjQ1NDQgMTMuNTY4IDEwLjU5ODQgMTcuOTcxMiAxOC4wMjI0eiBtLTIyOS4xNzEyLTcwLjE0NHYxOTQuMjAxNkw2MDMuMzkyIDUxMmwtMTYxLjc5Mi05Ny4wNzUyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjQyNyI+PC9wYXRoPjwvc3ZnPg==";

    const QH_VIDEO_RECORD_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTY1ODQ1OTc0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY2My45IDczNS4xSDI3OC4xYy02Ny40IDAtMTIyLjItNTQuOC0xMjIuMi0xMjIuMlYzNzAuNmMwLTY3LjQgNTQuOC0xMjIuMiAxMjIuMi0xMjIuMmgzODUuOGM2Ny40IDAgMTIyLjIgNTQuOCAxMjIuMiAxMjIuMlY2MTNjMCA2Ny4zLTU0LjggMTIyLjEtMTIyLjIgMTIyLjF6TTI3OC4xIDI4OC43Yy00NS4yIDAtODEuOSAzNi43LTgxLjkgODEuOVY2MTNjMCA0NS4xIDM2LjcgODEuOSA4MS45IDgxLjloMzg1LjhjNDUuMiAwIDgxLjktMzYuNyA4MS45LTgxLjlWMzcwLjZjMC00NS4xLTM2LjctODEuOS04MS45LTgxLjlIMjc4LjF6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNDUxIj48L3BhdGg+PHBhdGggZD0iTTg5Ni41IDYzNC40bC04LjEtMS43TDc1Ny44IDU3NWwxNi4zLTM2LjggMTIzLjYgNTQuNmMwLjktMS40IDItMy45IDItNy40VjM5OC4yYzAtMy41LTEuMS02LTItNy40bC0xMjMuNiA1NC42LTE2LjMtMzYuOCAxMzguNy01OS40YzI0IDAgNDMuNSAyMiA0My41IDQ5djE4Ny4yYzAgMjctMTkuNSA0OS00My41IDQ5ek01NDAuOSA1MjAuNUw0MzQuMyA1ODJjLTIyLjEgMTIuOC00OS44LTMuMi00OS44LTI4Ljh2LTEyM2MwLTI1LjYgMjcuNy00MS41IDQ5LjgtMjguOEw1NDAuOSA0NjNjMjIuMSAxMi44IDIyLjEgNDQuNyAwIDU3LjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNDUyIj48L3BhdGg+PC9zdmc+'



    //音频播放
    Blockly.Blocks.PY_qdp_k210_video_open = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_video_open,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                ],
                "tooltip": "打开一个文件并播放",
                colour: QH_Video_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //音频音量
    Blockly.Blocks.PY_qdp_k210_video_volume = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_video_volume,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "vol" 
                    }
                ],
                "tooltip": "音频音量",
                colour: QH_Video_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //视频结束
    Blockly.Blocks.PY_qdp_k210_video_finish = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_video_finish,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "音频停止",
                colour: QH_Video_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    

    //音量
    Blockly.Blocks.PY_qdp_esp32_video_play = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_video_play,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "返回 NONE:不支持格式,0:播放结束,1:正在播放",
                colour: QH_Video_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //录制
    Blockly.Blocks.PY_qdp_esp32_video_open = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_video_open,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_RECORD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "path" 
                    },
                    { 
                        type: "input_value", 
                        name: "interval" 
                    },
                    { 
                        type: "input_value", 
                        name: "quality" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'audio',
                        options: [[Blockly.Msg.py_yes,'True'],[Blockly.Msg.py_no,'False']]
                    },
                    { 
                        type: "input_value", 
                        name: "sample_rate" 
                    }
                ],
                "tooltip": "",
                colour: QH_Video_record_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //录制
    Blockly.Blocks.PY_qdp_esp32_video_record = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_video_record,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_RECORD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "",
                colour: QH_Video_record_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //录制结束
    Blockly.Blocks.PY_qdp_esp32_video_record_finish = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_video_record_finish,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_VIDEO_RECORD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "",
                colour: QH_Video_record_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    
    return Blockly;
}

exports = addBlocks;


