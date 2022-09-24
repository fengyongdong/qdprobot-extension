

def sendspeak(uart,data):
	data=data.encode("gbk")
	#print(data)
	eec=0
	buf=[0xfd,0x00,0,0x01,0x01]
	buf[2]=len(data)+3
	buf+=list(data)
	for i in range(len(buf)):
		eec^=int(buf[i])
	buf.append(eec)
	uart.write(bytearray(buf))