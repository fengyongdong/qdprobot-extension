/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Audio_color = '#ff5757';
    const QH_Audio_record_color = '#ff0000';
   
    const QH_AUDIO_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwODk3Nzg0MDMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzMzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2MiAzNjMuNzg4bC0yNjAuMjU4LTI5Ny40MzV2LTEuNjZoLTc2LjI2djU3Ny40ODJjLTYzLjM1OS01My40ODctMTU5Ljg1Ny05MS40MjgtMjYxLjY5NS05MS40MjgtMTc1LjkyMSAwLTI5OS4xMTcgMTEyLjgwOC0yOTkuMTE3IDIyNC4zMzggMCAxMTEuNTA3IDEyMy4xNzQgMTg2LjkzNyAyOTkuMTE3IDE4Ni45MzcgMTc1LjkyMSAwIDMzNi40OTYtNzUuNDMgMzM2LjQ5Ni0xODYuOTM3bDEuMTIxLTU0OC44NTMgMTg1LjgxNSAyMTIuMzM1IDc0Ljc3OS03NC43Nzl6TTM2My43ODggODg3LjIyMWMtMTI1LjY4NyAwLTIyNC4zMzgtNTAuMjM1LTIyNC4zMzgtMTEyLjE1OCAwLTYxLjk0NiA5OC42NTEtMTQ5LjU4MSAyMjQuMzM4LTE0OS41ODEgMTI1LjY2NCAwIDIyNC4zMzggODcuNjM1IDIyNC4zMzggMTQ5LjU4MSAwIDYxLjkyNC05OC42NzQgMTEyLjE1OC0yMjQuMzM4IDExMi4xNTh6IiBwLWlkPSIzMzM1IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";



    //音频播放
    Blockly.Blocks.PY_qdp_k210_audio_open = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_audio_open,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AUDIO_ICO,
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
                colour: QH_Audio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //音频音量
    Blockly.Blocks.PY_qdp_k210_audio_volume = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_audio_volume,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AUDIO_ICO,
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
                colour: QH_Audio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //音频结束
    Blockly.Blocks.PY_qdp_k210_audio_finish = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_audio_finish,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "音频停止",
                colour: QH_Audio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };    

    //音量
    Blockly.Blocks.PY_qdp_esp32_audio_play = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_audio_play,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_AUDIO_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "返回 NONE:不支持格式,0:播放结束,1:正在播放",
                colour: QH_Audio_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;


