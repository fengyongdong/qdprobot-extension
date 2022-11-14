#ifndef _DASH_LOGO_H
#define _DASH_LOGO_H

#include <Arduino.h>

#define DASH_MINI_LOGO_MIME         "image/png"
#define DASH_MINI_LOGO_GZIPPED      1
#define DASH_MINI_LOGO_WIDTH        63
#define DASH_MINI_LOGO_HEIGHT       62

extern const uint8_t DASH_MINI_LOGO[5782];


#define DASH_LARGE_LOGO_MIME        "image/png"
#define DASH_LARGE_LOGO_GZIPPED     1
#define DASH_LARGE_LOGO_WIDTH       161
#define DASH_LARGE_LOGO_HEIGHT      57

extern const uint8_t DASH_LARGE_LOGO[7374];

#endif