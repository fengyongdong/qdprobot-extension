#include <SPIFFS.h>

#include <AudioFileSourceSPIFFS.h>
#include <AudioFileSourceID3.h>
#include <AudioGeneratorMP3.h>
#include <AudioOutputI2S.h>
AudioGeneratorMP3 *mp3;
AudioFileSourceSPIFFS *file;
AudioOutputI2S *out;

static void playMp3Task(void *arg)
{
  while (true)
  {
    AudioGeneratorMP3 *mp3 = (AudioGeneratorMP3 *)arg;
    if (mp3->isRunning())
    {
      if (!mp3->loop())
      {
        mp3->stop();
        Serial.println("mp3stop");
        break;
      }
    }
  }
}

void play_MP3(String path) {
  Serial.println(path);
  file = new AudioFileSourceSPIFFS(path.c_str());
  out = new AudioOutputI2S(0, 1);
  mp3 = new AudioGeneratorMP3();
  mp3->begin(file, out);
  playMp3Task(mp3);
}

void SPIFFS_setup() {
  if (!SPIFFS.begin())
  {
    Serial.println(F("ERROR: SD card mount failed!"));
  } else {


  }
}