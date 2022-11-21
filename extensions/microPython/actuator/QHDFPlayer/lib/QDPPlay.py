from machine import UART
from utime import sleep_ms


class SimpleQDPPlayerMini:

    def __init__(self, uart_id,tx,rx):
        self._uart = UART(uart_id, tx=tx, rx=rx,baudrate=9600)
        self._send_cmd(0x09, 1)

    def _send_cmd(self, cmd, data_low=0, data_high=0):
        self._uart.write(b'\x7E')
        self._uart.write(b'\xFF')
        self._uart.write(b'\x06')
        self._uart.write(bytes([cmd]))
        self._uart.write(b'\x00')
        self._uart.write(bytes([data_high]))
        self._uart.write(bytes([data_low]))
        self._uart.write(b'\xEF')
        sleep_ms(200)

    def next_track(self):#下一首
        self._send_cmd(0x01)

    def prev_track(self):#下一首
        self._send_cmd(0x02)

    def sel_track(self, track_index):#指定曲目
        self._send_cmd(0x03, track_index)

    def inc_vol(self):#加音量
        self._send_cmd(0x04)

    def dec_vol(self):#减音量
        self._send_cmd(0x05)

    def set_vol(self, volume):#设置音量
        self._send_cmd(0x06, volume)

    def set_eq(self, equalizer):#设置EQ0~5 Normal/Pop/Rock/ Jazz/Classic/Bass
        self._send_cmd(0x07, equalizer)

    def set_mode(self, mode):#单曲循环指定曲目
        self._send_cmd(0x08, mode)

    def suspend(self):#睡眠
        self._send_cmd(0x0A)

    def resume(self):
        self._send_cmd(0x0B)

    def reset(self):#复位
        self._send_cmd(0x0C)

    def play(self):#播放
        self._send_cmd(0x0D)

    def pause(self):#暂停
        self._send_cmd(0x0E)

    def set_folder(self, folder_index):#指定文件夹(1-10)
        self._send_cmd(0x0F, folder_index)

    def enable_loop(self):#开始全部循环播放
        self._send_cmd(0x11, 1)

    def disable_loop(self):#停止全部循环播放
        self._send_cmd(0x11, 0)
    
    def stop(self): #停止
        self._send_cmd(0x16)
    
    def random_play(self): #随机播放
        self._send_cmd(0x18)