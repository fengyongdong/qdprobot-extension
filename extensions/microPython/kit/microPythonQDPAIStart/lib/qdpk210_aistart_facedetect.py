
import sensor
import image
import lcd
import KPU as kpu
import time
from Maix import FPIOA, GPIO
import gc
from fpioa_manager import fm
from board import board_info
import utime
import qdpk210_aistart
import ubinascii

'''
lcd.init()
lcd.mirror(1)
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)
sensor.set_hmirror(1)
sensor.set_vflip(1)
'''

record_ftr = []
record_ftrs = []

#BOUNCE_PROTECTION = 50

clock = time.clock()

ACCURACY = 85

anchor = (1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437,
          6.92275, 6.718375, 9.01025)  # anchor for face detect
dst_point = [(44, 59), (84, 59), (64, 82), (47, 105),
                 (81, 105)]  # standard face key point position
img_lcd = image.Image()
img_face = image.Image(size=(128, 128))

def init():
    global task_fd
    global task_ld
    global task_fe
    task_fd = kpu.load(0x300000)
    task_ld = kpu.load(0x400000)
    task_fe = kpu.load(0x500000)

    global a
    a = kpu.init_yolo2(task_fd, 0.5, 0.3, 5, anchor)
    a = img_face.pix_to_ai()

    lcd.init()
    #lcd.mirror(1)
    sensor.reset()
    sensor.set_pixformat(sensor.RGB565)
    sensor.set_framesize(sensor.QVGA)
    sensor.run(1)
    sensor.set_hmirror(1)
    sensor.set_vflip(1)

def save(face_data, path):
    save_face_data = ubinascii.hexlify(face_data)
    print(save_face_data)
    with open(file = path, mode = 'a+') as f:
        _i = 0
        print(len(save_face_data))
        while _i < len(save_face_data):
            f.write(save_face_data[_i : _i + 100])
            _i = _i + 100
        f.write("\n")

def loading(face_num, path):
    _i = 0
    with open(file = path, mode = 'rb') as f:
        while _i < len(face_num):
            load_data = bytes(f.readline())
            #print(load_data)
            load_data = load_data[0:len(load_data) - 1]
            #print(load_data)
            load_data = ubinascii.unhexlify(load_data)
            record_ftrs.append(load_data)
            #print(load_data)
            _i = _i + 1
    print("加载完成！")

def training(face_num, path):
    with open(file = path, mode = 'wb') as f:
        f.write("")
    now_face_num = 0
    #record_ftrs = []
    fm.register(qdpk210_aistart.button_pins[6], qdpk210_aistart.pins(qdpk210_aistart.button_pins[6])[0])
    button6=GPIO(qdpk210_aistart.pins(qdpk210_aistart.button_pins[6])[1], GPIO.IN, GPIO.PULL_UP)
    print("按[SELECT]键录入人脸数据")
    while now_face_num < len(face_num):
        img = sensor.snapshot()
        clock.tick()
        code = kpu.run_yolo2(task_fd, img)
        if code:
            for i in code:
                # Cut face and resize to 128x128
                a = img.draw_rectangle(i.rect())
                face_cut = img.cut(i.x(), i.y(), i.w(), i.h())
                face_cut_128 = face_cut.resize(128, 128)
                a = face_cut_128.pix_to_ai()
                # a = img.draw_image(face_cut_128, (0,0))
                # Landmark for face 5 points
                fmap = kpu.forward(task_ld, face_cut_128)
                plist = fmap[:]
                le = (i.x() + int(plist[0] * i.w() - 10), i.y() + int(plist[1] * i.h()))
                re = (i.x() + int(plist[2] * i.w()), i.y() + int(plist[3] * i.h()))
                nose = (i.x() + int(plist[4] * i.w()), i.y() + int(plist[5] * i.h()))
                lm = (i.x() + int(plist[6] * i.w()), i.y() + int(plist[7] * i.h()))
                rm = (i.x() + int(plist[8] * i.w()), i.y() + int(plist[9] * i.h()))
                a = img.draw_circle(le[0], le[1], 4)
                a = img.draw_circle(re[0], re[1], 4)
                a = img.draw_circle(nose[0], nose[1], 4)
                a = img.draw_circle(lm[0], lm[1], 4)
                a = img.draw_circle(rm[0], rm[1], 4)
                # align face to standard position
                src_point = [le, re, nose, lm, rm]
                T = image.get_affine_transform(src_point, dst_point)
                a = image.warp_affine_ai(img, img_face, T)
                a = img_face.ai_to_pix()
                # a = img.draw_image(img_face, (128,0))
                del (face_cut_128)
                # calculate face feature vector
                fmap = kpu.forward(task_fe, img_face)
                feature = kpu.face_encode(fmap[:])
                #print(feature)
                reg_flag = False
                if not button6.value():
                    while not button6.value():
                        img = sensor.snapshot()
                        a = lcd.display(img)
                    now_face_num = now_face_num + 1
                    record_ftr = feature
                    record_ftrs.append(record_ftr)
                    save(record_ftr, path)
                    print("录入成功！")
                break
        #fps = clock.fps()
        #print("%2.1f fps" % fps)
        a = lcd.display(img)
        gc.collect()

def get_result(face_names):
    while (1):
        img = sensor.snapshot()
        clock.tick()
        code = kpu.run_yolo2(task_fd, img)
        if code:
            for i in code:
                # Cut face and resize to 128x128
                a = img.draw_rectangle(i.rect())
                face_cut = img.cut(i.x(), i.y(), i.w(), i.h())
                face_cut_128 = face_cut.resize(128, 128)
                a = face_cut_128.pix_to_ai()
                # a = img.draw_image(face_cut_128, (0,0))
                # Landmark for face 5 points
                fmap = kpu.forward(task_ld, face_cut_128)
                plist = fmap[:]
                le = (i.x() + int(plist[0] * i.w() - 10), i.y() + int(plist[1] * i.h()))
                re = (i.x() + int(plist[2] * i.w()), i.y() + int(plist[3] * i.h()))
                nose = (i.x() + int(plist[4] * i.w()), i.y() + int(plist[5] * i.h()))
                lm = (i.x() + int(plist[6] * i.w()), i.y() + int(plist[7] * i.h()))
                rm = (i.x() + int(plist[8] * i.w()), i.y() + int(plist[9] * i.h()))
                a = img.draw_circle(le[0], le[1], 4)
                a = img.draw_circle(re[0], re[1], 4)
                a = img.draw_circle(nose[0], nose[1], 4)
                a = img.draw_circle(lm[0], lm[1], 4)
                a = img.draw_circle(rm[0], rm[1], 4)
                # align face to standard position
                src_point = [le, re, nose, lm, rm]
                T = image.get_affine_transform(src_point, dst_point)
                a = image.warp_affine_ai(img, img_face, T)
                a = img_face.ai_to_pix()
                # a = img.draw_image(img_face, (128,0))
                del (face_cut_128)
                # calculate face feature vector
                fmap = kpu.forward(task_fe, img_face)
                feature = kpu.face_encode(fmap[:])
                #print(feature)
                reg_flag = False
                scores = []
                for j in range(len(record_ftrs)):
                    score = kpu.face_compare(record_ftrs[j], feature)
                    scores.append(score)
                max_score = 0
                index = 0
                for k in range(len(scores)):
                    if max_score < scores[k]:
                        max_score = scores[k]
                        index = k
                if max_score > ACCURACY:
                    a = img.draw_rectangle(i.rect(), (51, 204, 0))
                    a = lcd.display(img)
                    gc.collect()
                    return (face_names[index], max_score)

                break
        #fps = clock.fps()
        #print("%2.1f fps" % fps)
        a = lcd.display(img)
        gc.collect()

'''
import qdpk210_aistart
from fpioa_manager import fm
from Maix import GPIO


import sensor
import image
import lcd
import KPU as kpu
import time
from Maix import FPIOA, GPIO
import gc
from fpioa_manager import fm
import utime
import qdpk210_aistart
import qdpk210_aistart_facedetect as facedetect

names = ['Mr.1', 'Mr.2']
lcd.init()
lcd.mirror(1)
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)
sensor.set_hmirror(1)
sensor.set_vflip(1)

facedetect.init()
#facedetect.training(names, "face.facedetect")
facedetect.loading(names, "face.facedetect")
while True:
    print(facedetect.get_result(names))
'''