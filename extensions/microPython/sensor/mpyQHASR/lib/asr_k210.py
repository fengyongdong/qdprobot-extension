from modules import SpeechRecognizer
import utime, time
from Maix import GPIO
from fpioa_manager import fm
from board import board_info

soud_num = 0
mode_num = 0
ASR=None

key_word_record = False
tim2 = time.ticks_ms()


def pins_irq(pin_num):
	global key_word_record
	global tim2
	if (time.ticks_ms() - tim2 )> 800:
		key_word_record = not key_word_record
		tim2 = time.ticks_ms()


def init(i2s_dev):
	global soud_num
	global mode_num
	global ASR
	ASR = SpeechRecognizer(i2s_dev)

 
def training(corpus,model_num):
	global soud_num
	global mode_num
	global ASR
	global key_word_record
    
	soud_num = len(corpus)
	mode_num = model_num
	

	
	fm.register(board_info.BOOT_KEY, fm.fpioa.GPIOHS0)
	key_boot = GPIO(GPIO.GPIOHS0, GPIO.IN)
	key_boot.irq(pins_irq, GPIO.IRQ_FALLING, GPIO.WAKEUP_NOT_SUPPORT, 7)

	#Currently supports a maximum of 10 keywords, each recording a maximum of 4 templates
	for i in range(soud_num):
		# Record three keywords, three times each
		for j in range(mode_num):

			print("Please press BOOT key to record '{}',the {} time ".format(corpus[i], j+1))
			while True:
				if key_word_record == True:
					break
				else:
					print('.', end="")
					utime.sleep_ms(500)
			print("")
			utime.sleep_ms(10)
			ASR.record(i, j)
			#ASR.print_model(i, j) # 这里打印大量数据, 会到导致后面打印的内容丢失
			print("-------------------------------------------------------")
			print("")
			utime.sleep_ms(10)
			key_word_record = False

	#data = ASR.get_model_data(0, 0)
	#print(str(data))

	print("[QDPK210_AIstart]ASR record successful!")             
                
def recognize(corpus):
	ret = ASR.recognize()
	#print(ret-1)      
	if ret > 0:
		return corpus[ret-1]
	else:
		return None
     