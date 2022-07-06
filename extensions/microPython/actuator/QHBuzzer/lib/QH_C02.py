
from machine import Pin
from machine import PWM
from time import sleep_ms

class motor():
	def __init__(self,speedPin,dirPin):
		self.SpeedPin = PWM(Pin(speedPin))
		self.DirPin = Pin(dirPin, Pin.OUT)
	def run(self,speed):
		speed=max(min(speed,255),-255)
		if speed == 0:
			self.DirPin.value(0)
			self.SpeedPin.duty(0)
		elif speed<0:
			self.DirPin.value(1)
			self.SpeedPin.duty(-speed*4)
		else:
			self.DirPin.value(0)
			self.SpeedPin.duty(speed*4)

def servo_write_angle(pin,angle):
	pwm=PWM(Pin(pin),freq=50)
	pwm.duty(int(25 + 130 * angle / 180))

def servo360_run(pin,speed):
	pwm=PWM(Pin(pin),freq=50)
	speed=max(min(speed,10),-10)
	if speed==0:
		pwm.duty(0)
	elif speed>0:
		pwm.duty(int(speed*-3.4444+66))	
	else:
		pwm.duty(int(speed*-2.77777+87))

def buzzer(pin,freq,tim=0):
  pwm = PWM(Pin(pin))
  if freq>0:  
    pwm.freq(int(freq)) 
  else:
    pwm.duty(0)
    return
  if tim > 0:
    sleep_ms(tim)
    pwm.deinit()

