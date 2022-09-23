#include "MjpegClass.h"
static MjpegClass mjpeg;

void play_sd_video(String path) {
    File vFile = SD.open(path);
    if (!vFile || vFile.isDirectory())
    {
      Serial.println(F("ERROR: open file error"));
    }
    else
    {
      uint8_t *mjpeg_buf = (uint8_t *)malloc(240 * 240);
      if (!mjpeg_buf)
      {
        Serial.println(F("mjpeg_buf malloc failed!"));
      }
      else
      {
        Serial.println(F("MJPEG video start"));
        mjpeg.setup(vFile, mjpeg_buf, true);
        while (mjpeg.readMjpegBuf())
        {
          mjpeg.drawJpg();
        }
        Serial.println(F("MJPEG video end"));
      }
      free(mjpeg_buf);
    }
    vFile.close();
}