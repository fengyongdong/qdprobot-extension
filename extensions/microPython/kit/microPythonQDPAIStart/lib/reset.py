import lcd,time,machine,gc


lcd.init(color=0x0000)
lcd.draw_string(68, 100, "Welcome to QDPK210_AIstart!", lcd.YELLOW, lcd.BLACK)
lcd.draw_string(102, 132, "Loading .", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading ..", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading ...", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading ....", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading .....", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading ......", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
lcd.draw_string(102, 132, "Loading .......", lcd.YELLOW, lcd.BLACK)
time.sleep_ms(100)
'''
try:
	import mixno
except:
	lcd.draw_string(68,100, "Please use MaixDuino!", lcd.RED, lcd.BLACK)
	lcd.draw_string(102,132, "Loading failed ", lcd.RED, lcd.BLACK)
	while True:
		print("Please use MxiNo/MaixDuino!")
		lcd.draw_string(68,100, "Please use MaixDuino!", lcd.RED, lcd.BLACK)
		lcd.draw_string(102,132, "Loading failed ", lcd.RED, lcd.BLACK)		
		time.sleep_ms(500)
		lcd.clear(0x0000)
		time.sleep_ms(500)
'''
lcd.clear(0x0000)
gc.collect()
del time
del lcd
del gc
machine.reset()


