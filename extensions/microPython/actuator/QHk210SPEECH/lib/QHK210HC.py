import machine, qdpk210_aistart
from machine import UART
from fpioa_manager import fm
import time
class QHK210HC:
 	__uart=''
 	FH=b'\xFD'
 	cmdcode=b'\x01'#GBK
 	cmdHC=b'\x01'
 	cmdHCs=b'\x02'
 	
 	
	def __init__(self,UartNum,tx,rx):
		# self.__uart = UART(UartNum, baudrate=9600, tx=tx, rx=rx)
		if UartNum == 1:			
			fm.register(qdpk210_aistart.board_pins[tx],fm.fpioa.UART1_TX)
			fm.register(qdpk210_aistart.board_pins[rx],fm.fpioa.UART1_RX)
			self.__uart=UART(UART.UART1, 9600, timeout=1000, read_buf_len=4096)
		else:
			fm.register(qdpk210_aistart.board_pins[tx],fm.fpioa.UART2_TX)
			fm.register(qdpk210_aistart.board_pins[rx],fm.fpioa.UART2_RX)
			self.__uart=UART(UART.UART2, 9600, timeout=1000, read_buf_len=4096)
		

	def HC(self,txt,wait):
		tlen=bytes((len(txt)+2).to_bytes(2,'big'))
		self.__uart.write(self.FH)
		self.__uart.write(tlen)
		self.__uart.write(self.cmdHC)
		self.__uart.write(self.cmdcode)
		self.__uart.write(txt)
		if wait:
			self.waitback()

	def waitback(self):
		start_time = time.ticks_ms()
		while self.__uart.read(1)!=b'\x41':
			if time.ticks_diff(time.ticks_ms(), start_time)>10000:
				return -1
		while self.__uart.read(1)!=b'\x4F':
			if time.ticks_diff(time.ticks_ms(), start_time)>10000:
				return -1


	def stopHC(self):
		self.__uart.write(self.FH)
		self.__uart.write(b'\x00')
		self.__uart.write(b'\x01')
		self.__uart.write(self.cmdHCs)