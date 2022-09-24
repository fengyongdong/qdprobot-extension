import time
from Maix import GPIO
from fpioa_manager import fm
import qdpk210_aistart
	
def Sonar(trig1, echo1):
	pins_trig = qdpk210_aistart.pins(trig1)
	pins_echo = qdpk210_aistart.pins(echo1)
	fm.register(trig1, pins_trig[0])
	fm.register(echo1, pins_echo[0])
	trig = GPIO(pins_trig[1], GPIO.OUT)
	echo = GPIO(pins_echo[1], GPIO.IN)
	time.sleep_ms(10)
	trig.value(1)
	time.sleep_us(10)
	trig.value(0)
	n1 = time.ticks_us()
	while(echo.value()==0):
		n2 =time.ticks_us()
		if time.ticks_diff(n2, n1) >200000:
			#raise ValueError("Sensor read error")
			break
		pass
	t1 = time.ticks_us()
	while(echo.value()==1):
		n3 =time.ticks_us()
		if time.ticks_diff(n3, t1) >200000:
			#raise ValueError("Sensor read error")
			break
		pass
	t2 = time.ticks_us()
	time.sleep_ms(10)
	return round(time.ticks_diff(t2, t1) / 10000 * 340 / 2, 2)