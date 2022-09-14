import nes
from fpioa_manager import fm
from Maix import GPIO
import qdpk210_aistart

def nes_init(voice):
    nes.init(nes.INPUT, vol = voice)

def nes_run(path):
    try:
        fm.register(21, qdpk210_aistart.pins(21)[0])
        button1 = GPIO(qdpk210_aistart.pins(21)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(24, qdpk210_aistart.pins(24)[0])
        button2 = GPIO(qdpk210_aistart.pins(24)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(25, qdpk210_aistart.pins(25)[0])
        button3 = GPIO(qdpk210_aistart.pins(25)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(31, qdpk210_aistart.pins(31)[0])
        button4 = GPIO(qdpk210_aistart.pins(31)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(1, qdpk210_aistart.pins(1)[0])
        button5 = GPIO(qdpk210_aistart.pins(1)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(2, qdpk210_aistart.pins(2)[0])
        button6 = GPIO(qdpk210_aistart.pins(2)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(22, qdpk210_aistart.pins(22)[0])
        button7 = GPIO(qdpk210_aistart.pins(22)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(23, qdpk210_aistart.pins(23)[0])
        button8 = GPIO(qdpk210_aistart.pins(23)[1], GPIO.IN, GPIO.PULL_UP)
        fm.register(0, qdpk210_aistart.pins(0)[0])
        button9 = GPIO(qdpk210_aistart.pins(0)[1], GPIO.IN, GPIO.PULL_UP)
        nes.load(path)
        while True:
            nes.loop()
            state = 0

            if not button5.value():
                nes.loop()
                state = state | 1

            if not button6.value():
               nes.loop()
               state = state | 2

            if not button1.value():
                nes.loop()
                state = state | 64

            if not button2.value():
                nes.loop()
                state = state | 16

            if not button3.value():
                nes.loop()
                state = state | 128

            if not button4.value():
                nes.loop()
                state = state | 32

            if not button7.value():
                nes.loop()
                state = state | 4

            if not button8.value():
                nes.loop()
                state = state | 8

            nes.input(state, 0, 0)
            
            if not button9.value():
                nes.free()
                break
    finally:
        #nes.free()
        print("game over！")
