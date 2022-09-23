#include <gifdec.h>

#include <Arduino_GFX_Library.h>

Arduino_HWSPI *bus = new Arduino_HWSPI(15 /* DC */, 12 /* CS */, 21 /* SCK */, 19 /* MOSI */, 22 /* MISO */);
Arduino_ST7789 *gfx = new Arduino_ST7789(bus, -1 /* RST */, 2, true /* IPS */);

void play_sd_gif(String path) {
  File vFile = SD.open( path, FILE_READ);
  if (!vFile || vFile.isDirectory())
  {
    Serial.println(F("ERROR: open file error"));
  }
  else
  {
    gd_GIF *gif = gd_open_gif(&vFile);
    if (!gif)
    {
      Serial.println(F("ERROR: gd_open_gif() failed!"));
    }
    else
    {
      int32_t s = gif->width * gif->height;
      uint8_t *buf = (uint8_t *)malloc(s);
      if (!buf)
      {
        Serial.println(F("buf malloc failed!"));
      }
      else
      {
        Serial.println(F("GIF video start"));
        gfx->setAddrWindow((240 - gif->width) / 2, (240 - gif->height) / 2, gif->width, gif->height);//设置GIF显示位置
        int t_fstart, t_delay = 0, t_real_delay, res, delay_until;
        while (1)
        {
          t_fstart = millis();
          t_delay = gif->gce.delay * 10;
          res = gd_get_frame(gif, buf);
          if (res < 0)
          {
            Serial.println(F("ERROR: gd_get_frame() failed!"));
            break;
          }
          else if (res == 0)
          {
            gd_rewind(gif);
            //break;
          }

          gfx->startWrite();
          gfx->writeIndexedPixels(buf, gif->palette->colors, s);
          gfx->endWrite();
          t_real_delay = t_delay - (millis() - t_fstart);
          delay_until = millis() + t_real_delay;
        }
        Serial.println(F("GIF video end"));
        gd_close_gif(gif);
      }
    }
  }
}