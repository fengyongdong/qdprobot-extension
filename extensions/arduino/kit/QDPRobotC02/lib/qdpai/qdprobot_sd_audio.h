#include <WiFi.h>
#include <SD.h>
#include <SD_MMC.h>

#include <AudioFileSourceFS.h>
#include <AudioFileSourceID3.h>
#include <AudioGeneratorMP3.h>
#include <AudioOutputI2S.h>
static AudioGeneratorMP3 *mp3;
static AudioOutputI2S *out;

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
  AudioFileSourceFS *aFile = new AudioFileSourceFS(SD, path.c_str());
  mp3->begin(aFile, out);
  playMp3Task(mp3);
}

void qdprobot_sd_audio_setup() {
  out = new AudioOutputI2S(0, 1, 64); // Output to builtInDAC
  mp3 = new AudioGeneratorMP3();
}