import time
from Maix import GPIO
from fpioa_manager import fm
import qdpk210_aistart

def read_id(pin):
	pins = qdpk210_aistart.pins(qdpk210_aistart.board_pins[pin])
	fm.register(qdpk210_aistart.board_pins[pin], pins[0])
	L1 = GPIO(pins[1], GPIO.IN, GPIO.PULL_UP)	
	a = []
	t1 = time.ticks_us()
	while L1.value() == 1:
		t2 = time.ticks_us()
		if time.ticks_diff(t2, t1) >1000000:
			#raise ValueError("Sensor read error")
			break
		pass

	time.sleep_us(13560)	

	for i in range(1000):		
		v = L1.value()
		a.append(v)
		time.sleep_us(56)

	a_c = []
	count = 0

	for i in a:	
		if i == 1:
			count += 1

		elif i == 0:
			if count > 0 :
				a_c.append(count)
			count =0

	for i in range(len(a_c)):
		if a_c[i] > 10:
			a_c[i] = "1"
		else:
			a_c[i] = "0"
			
	B1 = "".join(a_c)
	B2 = B1[16:32]
	#print((B1))
	if len(B1)==33 or len(B1)==46:
		B3=int(B2,2)
		return B3
	else:
		return None