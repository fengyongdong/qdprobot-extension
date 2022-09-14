import nes
from fpioa_manager import fm

def joystick_init(cs_pin,clk_pin,mosi_pin,miso_pin,voll):	
	fm.register(cs_pin, fm.fpioa.GPIOHS0)
	fm.register(clk_pin, fm.fpioa.GPIOHS1)
	fm.register(mosi_pin, fm.fpioa.GPIOHS2)
	fm.register(miso_pin, fm.fpioa.GPIOHS3)
	nes.init(nes.JOYSTICK, cs=fm.fpioa.GPIOHS0, clk=fm.fpioa.GPIOHS1, mosi=fm.fpioa.GPIOHS2, miso=fm.fpioa.GPIOHS3,vol=voll)

def keyboard_init(voll):	
	nes.init(nes.KEYBOARD,vol=voll)

def run(path):	
	try:
	  nes.load(path)
	  while True:
	    nes.loop()
	finally:
	  nes.free()