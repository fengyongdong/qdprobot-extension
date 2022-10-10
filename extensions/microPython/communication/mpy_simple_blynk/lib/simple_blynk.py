import ujson

CHAR_RETURN = b'\r';
CHAR_NEW_LINE = b'\n';
COMMAND_LIST = ["NO CONNECTION", "NO SERVER CONNECTION", "WIFI Connected", "Blynk"]

class SimpleBlynk:
	def __init__(self, uartObj):
		self._uartObj = uartObj
		self._receiveData = ""
		self.wifiStateCallBack = None
		self.serverStateCallBack = None
		self.blynkWriteCallBack = None

	def attachStateCallBack(self, doFunc, funcType):
		if funcType == 0:
			self.wifiStateCallBack = doFunc
		elif funcType == 1:
			self.serverStateCallBack = doFunc

	def attachBlynkWriteCallBack(self, doFunc):
		self.blynkWriteCallBack = doFunc

	def run(self):
		while self._uartObj.any():
			newData = self._uartObj.read(1)
			self.processByte(newData)

	def processByte(self, data):
		if data == CHAR_RETURN:
			self.finishRecieve()
		elif data == CHAR_NEW_LINE:
			self._receiveData = ""
		else:
			try:
				self._receiveData = self._receiveData + bytes.decode(data)
			except UnicodeError:
				return
			#print(self._receiveData)

	def finishRecieve(self):
		if not self._receiveData:
			return
		_i = 0
		for _i in range(0, 4, 1):
			if self._receiveData.find(COMMAND_LIST[_i]) != -1:
				break;

		if _i == 0 and self.wifiStateCallBack:
			self.wifiStateCallBack()
		elif _i == 1 and self.serverStateCallBack:
			self.serverStateCallBack()
		elif _i == 2 and self.wifiStateCallBack:
			#self.wifiStateCallBack()
			pass
		elif _i == 3:
			self.processWriteData()

	def processWriteData(self):
		self._receiveData = self._receiveData.replace("Blynk", "")

		try:
			_jsonObj = ujson.loads(self._receiveData)
		except ValueError:
			print("Unable to parse this json string!")
			return;

		if self.blynkWriteCallBack:
			try:
				_pin = _jsonObj[0]
			except ValueError:
				_pin = None
			_data = _jsonObj[1]
			self.blynkWriteCallBack(_pin, _data)

	# 网络配置 e.g AT+WIFI=["QDP","www.qdprobot.com"]
	def sendConfigWifi(self, name, password):
		_sendMsg = "AT+WIFI=[\"" + name + "\",\"" + password + "\"]"
		self._uartObj.write(_sendMsg)

	# Blynk配置 e.g AT+CONFIGURATION=["getwTFQ55KJLQ4ZVbvCYDQdiAJ4hTBMM","182,61,28,31"]
	def sendConfigAuth(self, serverInfo, serverAddr):
		_sendMsg = "AT+CONFIGURATION=[\"" + serverInfo + "\",\"" + serverAddr + "\"]"
		self._uartObj.write(_sendMsg)

	def sendVoice(self, arg):
		_sendMsg = "AT+VOICE=["+str(arg)+"]"
		self._uartObj.write(_sendMsg)

	def sendDigitalPlay(self, arg):
		_sendMsg = "AT+DIGITAL_PLAY=["+str(arg)+"]"
		self._uartObj.write(_sendMsg)

	def sendBlynkWrite(self, pin, data):
		_sendMsg = "AT+BLYNK_WRITE=[\"" + str(pin) + "\",\"" + str(data) + "\"]"
		self._uartObj.write(_sendMsg)

	def blynkReset(self):
		_sendMsg = "AT+RESET"
		self._uartObj.write(_sendMsg)

	def read(self, dataType, inputData, pos):
		_len = len(inputData)
		_subStr = ""
		_countPos = 0
		for _i in range(0, _len, 1):
			if inputData[_i] == '-':
				_countPos = _countPos + 1
				continue

			if _countPos + 1 == pos:
				_subStr = _subStr + inputData[_i]

		if pos > _countPos + 1:
			return ""
		return dataType(_subStr)

	def readStr(self, inputData, pos):
		return self.read(str, inputData, pos)

	def readInt(self, inputData, pos):
		return self.read(int, inputData, pos)

	def readFloat(self, inputData, pos):
		return self.read(float, inputData, pos)