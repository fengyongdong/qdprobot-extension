#include "Tone32.h"


int  tone_list[] = {262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1046, 1175, 1318, 1397, 1568, 1760, 1967};
const int  music_1[] = {12, 10, 12, 10, 12, 10, 9, 10, 12, 12, 12, 10, 13, 12, 10, 12, 10, 9, 8, 9, 10, 12, 10, 9, 8, 9, 10, 0};
const float  rhythm_1[] = {1, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2};
const int  music_2[] = {8, 9, 10, 8, 8, 9, 10, 8, 10, 11, 12, 10, 11, 12, 0};
const float  rhythm_2[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2};
const int  music_3[] = {5, 8, 8, 10, 13, 10, 12, 12, 13, 12, 10, 11, 10, 9, 6, 9, 9, 11, 14, 14, 13, 12, 11, 11, 10, 6, 7, 8, 9, 0};
const float  rhythm_3[] = {0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 1, 0.5, 3};
const int  music_4[] = {5, 5, 6, 5, 8, 7, 5, 5, 6, 5, 9, 8, 5, 5, 12, 10, 8, 7, 6, 11, 11, 10, 8, 9, 8, 0};
const float  rhythm_4[] = {0.5, 0.5, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 3};
const int  music_5[] = {12, 13, 12, 13, 12, 13, 12, 12, 15, 14, 13, 12, 13, 12, 12, 12, 10, 10, 12, 12, 10, 9, 11, 10, 9, 8, 9, 8, 0};
const float  rhythm_5[] = {0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1};
const int  music_6[] = {8, 8, 10, 8, 8, 10, 22, 13, 13, 13, 12, 13, 12, 8, 10, 22, 15, 13, 13, 12, 13, 12, 8, 9, 22, 14, 14, 12, 10, 12, 0};
const float  rhythm_6[] = {1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 4};
const int  music_7[] = {6, 8, 9, 10, 12, 10, 8, 9, 6, 22, 8, 9, 10, 12, 12, 13, 9, 10, 22, 10, 12, 13, 12, 13, 15, 14, 13, 12, 13, 10, 8, 9, 10, 12, 8, 6, 8, 9, 10, 13, 12, 0};
const float  rhythm_7[] = {0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 2, 1, 0.5, 0.5, 0.25, 0.25, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 3};
const int  music_8[] = {10, 8, 9, 6, 10, 9, 8, 9, 6, 10, 8, 9, 9, 12, 10, 7, 8, 8, 7, 6, 7, 8, 9, 5, 13, 12, 10, 10, 9, 8, 9, 10, 9, 10, 9, 12, 12, 12, 12, 12, 12, 0};
const float  rhythm_8[] = {1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1};
const int  music_9[] = {10, 12, 15, 13, 12, 10, 12, 13, 15, 12, 15, 17, 16, 15, 16, 15, 13, 15, 12, 0};
const float  rhythm_9[] = {0.5, 0.5, 0.5, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 2, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 2};
const int  music_10[] = {10, 10, 10, 8, 5, 5, 22, 10, 10, 10, 8, 10, 22, 12, 12, 10, 8, 5, 5, 5, 6, 7, 8, 10, 9, 0};
const float  rhythm_10[] = {0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1};


void tone(uint8_t pin, unsigned int frequency, unsigned long duration, uint8_t channel)
{
    if (ledcRead(channel)) {
        log_e("Tone channel %d is already in use", ledcRead(channel));
        return;
    }
    ledcAttachPin(pin, channel);
    ledcWriteTone(channel, frequency);
    if (duration) {
        delay(duration);
        noTone(pin, channel);
    }    
}

void noTone(uint8_t pin, uint8_t channel)
{
    ledcDetachPin(pin);
    ledcWrite(channel, 0);
}


void buzzer_music(uint8_t pin, uint8_t num,uint8_t channel)
{
  const int *p1;
  const float *p2  ;
  switch (num) {
    case 1:
      p1 = music_1;
      p2 = rhythm_1;
      break;
    case 2:
      p1 = music_2;
      p2 = rhythm_2;
      break;
    case 3:
      p1 = music_3;
      p2 = rhythm_3;
      break;
    case 4:
      p1 = music_4;
      p2 = rhythm_4;
      break;
    case 5:
      p1 = music_5;
      p2 = rhythm_5;
      break;
    case 6:
      p1 = music_6;
      p2 = rhythm_6;
      break;
    case 7:
      p1 = music_7;
      p2 = rhythm_7;
      break;
    case 8:
      p1 = music_8;
      p2 = rhythm_8;
      break;
    case 9:
      p1 = music_9;
      p2 = rhythm_9;
      break;
    case 10:
      p1 = music_10;
      p2 = rhythm_10;
      break;
  }



  for (int a = 0; p1[a] != 0; a++) {
    int time = int(p2[a] * 300);
    if (pgm_read_word_near(&p1[a]) != 22) {
      tone(pin, tone_list[p1[a] - 1], time, channel);
    }
    else {
      noTone(pin, channel);
      delay(time);
    }
    noTone(pin,channel);
    delay(30);
  }
  delay(1000);

}