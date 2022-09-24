from fpioa_manager import fm
from Maix import I2S
import time
import os
import ubinascii
from Maix import FPIOA, GPIO
from fpioa_manager import fm
import qdpk210_aistart


fm.register(20,fm.fpioa.I2S0_IN_D0)
fm.register(30,fm.fpioa.I2S0_WS)
fm.register(32,fm.fpioa.I2S0_SCLK)
i2s = I2S(I2S.DEVICE_0)
i2s.channel_config(i2s.CHANNEL_0, I2S.RECEIVER, resolution = I2S.RESOLUTION_16_BIT, cycles = I2S.SCLK_CYCLES_32, align_mode = I2S.STANDARD_MODE)
i2s.set_sample_rate(16000)

from speech_recognizer import isolated_word

def init(word_size=10, audio_shift=0):
	# default: maix dock / maix duino set shift=0
	global sr
	sr = isolated_word(dmac=2, i2s=I2S.DEVICE_0, size=word_size, shift=audio_shift) # maix bit set shift=1
	## threshold
	sr.set_threshold(0, 0, 10000)
	print(sr.size())
	print(sr)

def save(model_num, path):
	sr_data = sr.get(model_num)
	sr_save_data0 = str(sr_data[0])
	#sr_save_data1 = str(bytes(sr_data[1]))[2:-1]
	sr_save_data1 = ubinascii.hexlify(sr_data[1])
	#load_data = (sr_data[0],ubinascii.unhexlify(sr_save_data1))
	#sr.set(5, load_data)
	#sr_save_data1 = str(sr_data[1])
	#print(sr_save_data1)
	with open(file = path, mode = 'a+') as f:
		f.write(sr_save_data0)
		f.write("\n")
		_i = 0
		#print(len(sr_save_data1))
		while _i < len(sr_save_data1):
			f.write(sr_save_data1[_i : _i + 100])
			_i = _i + 100
		f.write("\n")

def loading(word_num, path):
	_i = 0
	with open(file = path, mode = 'rb', buffering = True) as f:
		while _i < len(word_num):
			load_data1 = int(f.readline())
			load_data2 = bytes(f.readline())
			load_data2 = load_data2[0:len(load_data2) - 1]
			'''
			load_data2 = load_data2.replace("\\\\", "\\")
			load_data2 = load_data2.replace("\\n", "")
			
			load_data2 = load_data2.replace("b'", "")
			load_data2 = load_data2.replace("'", "")
			load_data2 = load_data2.replace("b\\", "")
			'''
			
			#load_data3 = bytes(load_data2.encode("utf-8"))
			#while len(load_data2) < 5256:
			#	load_data2 = load_data2 + b'\x00'
			'''
			while _j < len(load_data2):
				if str(load_data2[_j]) == '\\':
					_j = _j + 1
					continue
				load_data3 = load_data3 + str(load_data2[_j])
				_j = _j + 1
			'''
			#print(load_data1)
			#print(load_data2)
			load_data = (load_data1, ubinascii.unhexlify(load_data2))
			sr.set(_i, load_data)
			_i = _i + 1
	print("加载完成！")

def training(word_num, path):
	with open(file = path, mode = 'wb') as f:
		f.write("")
	_i = 0
	fm.register(qdpk210_aistart.button_pins[6], qdpk210_aistart.pins(qdpk210_aistart.button_pins[6])[0])
	button6=GPIO(qdpk210_aistart.pins(qdpk210_aistart.button_pins[6])[1], GPIO.IN, GPIO.PULL_UP)
	while _i < len(word_num):
		while True:
			time.sleep_ms(200)
			print(sr.state())
			if sr.Done == sr.record(_i):
				sr_get_data = sr.get(_i)
				save(_i, path)
		        #print(sr_get_data)
				break
			if sr.Speak == sr.state():
				print('请说：', word_num[_i])
		        #img.draw_rectangle((0, 0, 320, 240), fill=True, color=(255, 255, 255))
		        #img.draw_string(10,80, "Please speak A", color=(255, 0, 0), scale=4, mono_space=0)
		        #lcd.display(img)
		sr.set(1 + _i*2, sr_get_data)
		#img.draw_rectangle((0, 0, 320, 240), fill=True, color=(255, 255, 255))
		#img.draw_string(10, 80, "get !", color=(255, 0, 0), scale=4, mono_space=0)
		#lcd.display(img)
		print('已获取！')
		print("按[SELECT]键继续操作")
		while button6.value():
			time.sleep_ms(10)
	    
		time.sleep_ms(500)
		_i = _i + 1
	print('训练完成！')

def get_result(word_num):
	print('识别中...')
	while True:
		time.sleep_ms(200)
		#print(sr.state())
		#print(sr.dtw(data))
		if sr.Done == sr.recognize():
			res = sr.result()
			if res != None:
				#print(str(res[0]))
				return word_num[int(res[0])]

'''

import qdpk210_aistart_asr

qdpk210_aistart_asr.asr_init()
#qdpk210_aistart_asr.asr_train(["a", "b", "c"], "test.asr")
qdpk210_aistart_asr.asr_load(["a", "b", "c"], "test.asr")
while True:
    print(qdpk210_aistart_asr.asr_result(["a", "b", "c"]))
'''