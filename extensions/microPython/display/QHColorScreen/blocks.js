/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color_screen = '#FA9284';
    
  const xxqrIconUrl = 'data:image/png;base64,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';

  const QH_SDISPLAY_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxMzQyNzgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MzEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMDI0IDc2OFYxMjhjMC0xNy43LTE0LjMtMzItMzItMzJIMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjY0MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg0NDBjNC40IDAgOCAzLjYgOCA4djI0YzAgMTcuNy0xNC4zIDMyLTMyIDMySDI3MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmg0ODBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJINTc2Yy0xNy43IDAtMzItMTQuMy0zMi0zMnYtMjRjMC00LjQgMy42LTggOC04aDQ0MGMxNy43IDAgMzItMTQuMyAzMi0zMnpNNjQgNzIwVjE3NmMwLTguOCA3LjItMTYgMTYtMTZoODY0YzguOCAwIDE2IDcuMiAxNiAxNnY1NDRjMCA4LjgtNy4yIDE2LTE2IDE2SDgwYy04LjggMC0xNi03LjItMTYtMTZ6IiBwLWlkPSIyNDMyIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";

  const QH_JPG1 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcEBggJAf/aAAgBAQAAAAD1TA5gumstmt2J82euqB3Hs+NgvmXibgVxts0A/8QAGAEAAgMAAAAAAAAAAAAAAAAAAgMAAQT/2gAIAQIQAAAAXRrTsgH/AP/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwQF/9oACAEDEAAAAKC9CRiZf//EADAQAAIBAwICCQEJAAAAAAAAAAMEBQEGEwAHFEMCCBAREiMzQVMgISQlMEVjgYST/9oACAEBAAE/APrf3buVqUn0rLtIM4tAsYZQ3TaqvQp6euuvTDXMfVl3bE3ra0bcEX3kVdXzAyauvc6XSuQNpWpBhmJsa/GPZTYF0wfvn+fW2W4i24MS6fg6R70Y+wlJxxTZzBOr2MOgSWMY1aCCKn2krqt2XNty3dsdFyEbHKuSGLzRHOZyrZzff1we7GHwcTrq9WvK2TtVFoS4OEbMdkxlC8jiz+hrcxy7Nst7XrnQcTXVngLCAZ8JzJclY/EH5HDYc2urwU5WbhcfMpV+Xf8AVB+ocGc34h/Zy/49DsKEDACiN5gq+2o62IGMLlUjgCL8tBaNNxInTImbEEw+HqYRe7xdzZ6rr/weounSmlHYe4Y3MEwWlTeV7HCXUdbMDFmIZSOCE1eaIf0XLt7ZN2FAabg02yhXw5S/BqNio6FjQRyAQhVACgQBFygfk//EACERAAICAQMFAQAAAAAAAAAAAAECAxFBAAQSEBMhMlEx/9oACAECAQE/AJJViq84zozxCNXvw/Hj9PL80jrIoZTYOtztk3MQHceORWBUqLBGQdTbSOWKNI3ZO3XGsEaEcUSJHEXZVX2f2Y5J6BFDswVQzVZA8mvvT//EACIRAAIBAwMFAQAAAAAAAAAAAAECAwAREgQxUQUQEyFBkf/aAAgBAwEBPwCOJ5b44+vrMFH6aEMvlaPGzJlnwuO96dGRirCxFdP1Gj0sE6zRSySsVIUYFAAb2OVR62VJ5ppY1YSqyvfhq6hLBPqjLCJgGRMvIEBDAWIAXYdi7lVUsxVdgT6F+O3/2Q==";

   const QH_JPG2 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAIDBgcJBAX/2gAIAQEAAAAA6pgRF23r7JN+fA5xzSj1kUzFuG8osmuER5Ve4U1H/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIE/9oACAECEAAAADhZx7qNP//EABYBAQEBAAAAAAAAAAAAAAAAAAQDAf/aAAgBAxAAAAC2ybcwlk//xAA0EAACAQIDBQUECwAAAAAAAAADBAUBBgAHEwIRFDNDEBUgI1MIEhYyISIlRGNkgYOEk6L/2gAIAQEAAT8A8YrxzLzHkLsbs2VjYmKt6QPGg1lNc0g+pztf0AYymzDXzGsiKuH3dEpg6TAa9I630Hxcl8XlOZjHse1ZNKK2YxDi5SUKHXNTiuQAIf3djGUeYEve60/ETWhSZgJBhN0q1PINTonB2POhSSO1URCjEDp03lw5C3vSXuBSF+IjKSZ1gpqRQgUCZHiC667B+gwtrc/GTlhvZfZexsJIFD3h55ndHlVOzXGa2Xt6weY23edr9/VFJVXE6aL2g1OGtdFdjyOt5If7sez2qVEkmnK8UdtzkGMDlLpsFZBRj8xUpiF7argX5QcZu37dkXdmzWPAJRa2ftYNakqXvHeuQGif0QfP/guIFx2QhEW5BMSbRV6EKDW16C3/AI2NoCoflF+vgz+SV4lKQboWg3IiSjRU9Vj7uv8Ayfr4RRokmEW/kraPhKqFmlKkpv8AB//EACERAAICAgEEAwAAAAAAAAAAAAECAxEAEgQQISJBMTJx/9oACAECAQE/AJJVjqwzE/CqLJx+TEsSONm3rQKLLbYjrIgdTYOSwxTIAwbZWBUg1WFIJlTjKHQQsKI8Ta+xiRxRKqRhgoUDybYk+zfRY9ZZHv712/On/8QAIxEAAgICAQMFAQAAAAAAAAAAAQIDEQQSABATIQUxMlGCkf/aAAgBAwEBPwCGBptqKqF1tmNAbGuDHlM8kR1TtX3GY0Frjo0bFGHkfzmDmR4UUo7O7uwIYtQAHsCK88YZuFGmfKEdM5XNHyGo0189QyYMvKM0MJhBUWpfck/d0Ok2ZLPi42O3xx99f2b6f//Z";
 
   const QH_JPG3 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABgcFCAMECf/aAAgBAQAAAAD1TBBdXdiK2x21ylLrgXRstWeGlUhzRWXLZAD/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBBf/aAAgBAhAAAACbT6STlWz/xAAYAQADAQEAAAAAAAAAAAAAAAACAwUEBv/aAAgBAxAAAADSI8bcVWYv/8QAOhAAAQICBQYKCgMAAAAAAAAAAwQFAQYAAgcTFBESFiEjQRAVICIxM1FSgpIIGCQwQ1dhY3GRobHT/9oACAEBAAE/AOVN0waLyw6O4W8zgVGmOaCMPWmp61Dj8tpj/n/GlmU9GtClnjczGtZduoDh1fXaqWhW8mkCZzMmhD65CAnAXGpYbDnUlD0hjTdMzY0aBTKkCtU3WNMHYh2OX2jhc8Id2URhnDLBRW16o5IwiPbZfpzC+Dgma+w9f81O9SWcLiV2b39f97/14OFWxHWLqxTqauZE8d3woZNWXz+elpdpTNZw3p1briyGMaqICdJtjk3nNc9icO2jSudPMzMkVo1l4lPC9CYOTIUNG1sTNgLoXRyCycxHmvS0ooncIoMIIpS3oQAjHoAH7++knSSxSU08Us+eNHVVKjgHe9TBUbERCDsD7n//xAAjEQACAgEDAwUAAAAAAAAAAAABAgMRBAAhYRASMSIzcbGy/9oACAECAQE/AJcuDHbtmYqeFZvyNNkxLGkhPoeqNE7n4B1DKsyll3WyAaI+wNYDiKfvY0AjXrDnijyltvbYFuBrMmWednWyD4J6CGNWDAbje+T56f/EACMRAAIBAwQCAwEAAAAAAAAAAAECAwQREgAFITEQQQYTI3H/2gAIAQMBAT8AipKidS6BMQxW7OF5Hfekpp5JXiVRml8gzBQMe+TqaGWBwkgUMVDWDBuD11r5hQ1e4UMMNPCZf1yYXAFrW9kc88C+t4pamp2ib6o3JlicILhMj/W41sdJPRbXTwzhRIqksFOQBJJtf3bwZZCuJditgLE3Fh14/9k=";
 
   const QH_JPG4 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABwgFBgEECf/aAAgBAQAAAAD1TB0Kk2d1mHrXqy2BjfmYCr+2zmGEzYD/xAAXAQEBAQEAAAAAAAAAAAAAAAADAAEC/9oACAECEAAAABQtxeq//8QAGAEAAwEBAAAAAAAAAAAAAAAAAAMEAQL/2gAIAQMQAAAAslszhaQ//8QALxAAAQIEBAMFCQAAAAAAAAAAAwQFAQYHEwACFDMgISMIElGTwxARJTAxMjRj0//aAAgBAQABPwDiW3dGe17rthTZxSntFME2gA0zFaaXsmXu/d0Vhv0fxwN9QlczNoyC1Id4fhtR9XCue5MbGVe+K3QKVACMBHVljy5h1Hq4p3WwtUKirWpA26RlRM6k1428c94Xk+1z7MVLXSYDu6pIq6/WKjvdDCFCgQBAFLkEEIQJwh8bCSOJ4pZKFREidM9JYx0kFGmME1kodXv4pvSWUKYolgmUJ85Fe+dUa+UvA6P9S3WcJiY2AbdETYuT/FnEccwUnfThPlQWE+6a71r0dkWfFGlx3ZhdXFaDOF0XTC5Rc0ZDXtIZLHTBD5IsnEECBEcpgiEIp1F05fpcP+Pz+T//xAAhEQACAgICAQUAAAAAAAAAAAACAwERABIEQRMgISIxcf/aAAgBAgEBPwA+QhTVLYwQJt6X3MYRiNWQx+zXtiOQrkjJLnYYKRvq4x3GRyNPKsT0LYb6nCNbrVIbDMzE7D8ZrAWtQwKwEBjqPr0f/8QAJBEAAgIBAwQCAwAAAAAAAAAAAQIDBBEABRIUITFRE0IgMmH/2gAIAQMBAT8Ah27cLNO1cr1nmgqcOoZe/wAYkzxJHrI8+BpUlb6McsAMd+51uO23tptdLdhaCcIjtG37KHHIZH9B1S3LcdtaRqVqau0kZRzG5Xkp+px5Gk6mm8c8MxilVlZGRyGXPhu3g+tWLNq5O09maSaVscnkYuxx7ZiSfw//2Q==";
 
   const QH_JPG5 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAACAUHAwQGCf/aAAgBAQAAAAD6pgx0C2RqTzlg9GArT0PyVY1fPmXrwAB//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDBP/aAAgBAhAAAADMzwhuoH//xAAYAQACAwAAAAAAAAAAAAAAAAAAAwEEBf/aAAgBAxAAAAB8DLecsP/EADQQAAIABAQBCAkFAAAAAAAAAAMEAQUGEwACBxQjEBESFSE0Q1MIFiAkMDEzQmRxcoOSsv/aAAgBAQABPwD2nHV0RGbMW0IILxsTjVGu5nWUuSl8wKCoJkBdnKArcAyyW7oMWAgswDx+D3kx/wCLGntX5ayo2Sz2IMod4hlKUPlG8bGuFZVDTo0JTITiiyaXtTJ0hTWTbGUxDE4F/wAhi9jR/UCYT+EsaOwznQmDDKWcDZ9wVR9YG4gJc3zMFkMYl430uhyGAB5Q4ihvCNDmMH9cV/oVU8xIG6PpMKJLJQmUGg5k2wqR4J2Ytc5wHs95sXb2KIpdKkqSk8jWNdFLUVwQN5uPSB0zWr/1cIm6oOaJtM5QJwKAJzAd7T2L/j8H/eNJNOZxS+dKDSp1FZbnYKC6cJTuPtcA5z7XnAHbB4K4eXUGkz1rTmZNcqomxQuggyOJ08xvyA9l4OFKbySTeqxpqrZSDqlQAOrHDmDBlW7A5/dj/s/pik9OX2ahSmJqeFIEILywpwmNuHSnUus9pobqyC9b8X7Pj//EACERAAIBBAICAwAAAAAAAAAAAAECAwAEERIhMRMgMjNB/9oACAECAQE/ALm5W2VSVJyccU9zEkAn5ZCoYajJINQypPGsidN1V5bLcxYK7EdCvuiFv4MJqF+X4KiiWFdV4Hp//8QAIREAAgEEAgIDAAAAAAAAAAAAAQIDAAQREiIxE0EgITL/2gAIAQMBAT8Agga4YqpUYUscn0KS3lefwcVcMVOxwARU8DW8pjb9DurO5e1nSRX0OQNu8VGXhme5Sfl9vtgcj76JqSRpWLMck9n4f//Z";
 
   const QH_JPG6 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAABgcIBAn/2gAIAQEAAAAA9UwMI6Mh0gvOM4Q2P3cllmf5LbYrSywD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMABP/aAAgBAhAAAACGqY9CK//EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/2gAIAQMQAAAAuS2wzjL/AP/EADAQAAIBAwEGBAMJAAAAAAAAAAMEBQEGEwcAAhEUI0MVICEzEGNzEiQwMTRBU3KB/9oACAEBAAE/APPHMzGpkTel5PXXM2/4YwwWFTCXABRDBnAwwDv8xto5er986fQcy+IImmRMiZoP+ZQ9V9tZtWN/TvejIlRepJaZqfk8tT1AHh3jUW6xvoh20pkd+Zt1njOS0ywJ9ijzjyB0OtX8wACyGnAHwkvEfDz+H4Oa5emHJ7PHZvQK7H5F+qyMZv0bfXKLffkT4lE+rWi2Bf3gZjfdv6bWDZSNj2jFW6vShRJVrmOSvvG/UGY/0u12WfA3ciRCTTGUVOJQ71KdYJ/2OA3ZNTazrfk7ZgqoNTTk3hOfl2G/Q+DshOb1zV+d5Ll1L3LCvaqk1RVSBciWG1HaehaspV4shPT6VdzBtptPTk/Z6E7Nphj25KtTUTH2gNGpVfN87D9jy33YdtX9HLx8+HMALK7geBcPXV/C/8QAIxEAAgICAAUFAAAAAAAAAAAAAQIDEQASBBATIWEiMUJxkf/aAAgBAgEBPwCefpagLsW2NXXZRZxuIiESy36GUMD4OI26hskhjmiVHW9WBDfL9wdBr4YC9FK6eFxEWNQqigOQRVZmCqC3uQO5++X/xAAjEQACAAYBBAMAAAAAAAAAAAABAgADBBESITEFEBNhUVKR/9oACAEDAQE/AJMny5EtiBjvEnbEAcQKae095AS7oxUj2IdGRmUjgkRSdQm0cp0lol3N/JsMPQII1BFSLVWVs2B8gaxLP9fyDtix5PPYuxVVLMVXgX0L/Hb/2Q==";
 
   const QH_JPG7 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAACAYHAwUJBP/aAAgBAQAAAADqmAEPXduKrrNoPBzp6CLNuGij9aVluphdwJvYLDgYTMf/xAAXAQEBAQEAAAAAAAAAAAAAAAAEAwAB/9oACAECEAAAAIU5QD8Rf//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAMPTxV0KM7//EADQQAAIBAgMDCgMJAAAAAAAAAAMEBQYTAAEUAgcjEBESFRYgITNDUwiDkyIlMDVCYnOBs//aAAgBAQABPwDvVTCdo4g0dlISKF3LwOgawcX94i96E9TtShgH5hao4zX5xppnSmQ0h/ZOfyDn/htcm8ar+xNMlkFExNtmOuBJS7YvHaxQbU9Xcl1vK1c992NfkSChooAj+0xqeOf/AB5HAsHTMFUtk2nysmxImqA8dTyeRxdnEab6omoDJ2yY0rmEyxwMA8DmYZL0NOb5uIcTqUSkGRPkZoa64zm903N44+IZSdJtQzcUXNUuQ2lV3L9jIJ2jB9b0DshDthWP++1+vG60rjtTpEdaG+/HUksnUDYjagBnr98AL/rHW+39TkmEzuRZgqm0xig5hG5vLxTm740ZLGmJQqjj+lshb0uzf+v52Epiu64S63NURoVArDNlRAIL9i+VYGoOzik1DrVW9TEvItzcXKQGbewCUNfzGdM9hj5HF2MJ7sF1Hwmj5AqCgTXgpiFZyF3KPln42DBBgpmonJBQ7IihEpZBevl9dngYoiHqw1WbM3NxAorYXQbTXDm1qGCaowmOkfJbgh8r8H//xAAiEQACAQMEAgMAAAAAAAAAAAABAgMAERIEISIxEBNBUXH/2gAIAQIBAT8Akm9Tc0IQsFVhvcmndY0Z2NlVSSaik9q5gcT0ak0qTQNIZ1RkNghUkt+Wpp11S4KHVW6bq5+qWCKCJMJ1lLcnAUjAn438LpFDKWYnFgwttuPH/8QAJBEAAgEDAwQDAQAAAAAAAAAAAQIDBBEhABJREBMxMgUUJIH/2gAIAQMBAT8Agh+wp2Mu9QSVOMDSI8jqiC7MwA1LH2m2k3I9hYix4yBqi7EcE8zzx709YMl34tiw/ulo5qP9TiNwPKe2q5KUdh4KlZt8QLgKV2HjPnpN8jJNGUKIAQAccdP/2Q==";
 
   const QH_JPG8 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABgcDBAUJ/9oACAEBAAAAAPVMCNyTi7HSVbYEXzTRXkGyzydlK9G2QH//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAIAQIQAAAACdszp//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAL/2gAIAQMQAAAAAobJlyf/xAArEAACAQMCAwcFAQAAAAAAAAADBAUBBhMAAhAzQxEUICEjNJISMGOUotP/2gAIAQEAAT8A8ZXXqTi6Q441FagzHdqWmEVadDhLvHi48zYkzuFDSnoh5xdJOUeVEcQShyg5JR4Tcbiv2NtdrCaPkWt4F8pqrBobCCteyhj/AN/DfpN4DogmAUJhHBQoSi6urinY+2Y6jTO0m8P1gGIQh5SlK3XAEINQE5HXAjVtfMGubEUJR4TCNt6J6cbjDdvfQlhhR2LB2GKbm6kL5m4+aegkIOOKGPXW9YruD3X4KB5NNQN0Xncp5qOKnEKNpqqlBURc/u83+WrbjpNFI3f6qEaMbKQwRYMvl1/BdllPzExtlYaSAo3WOwGEYGYRxdD9fLv+erNs5m2auNyDYm3naL0MQIcARBU8gAAH7P8A/8QAIhEAAQMDAwUAAAAAAAAAAAAAAgEREwMQEgAiMSFBQlFx/9oACAECAQE/ALxlW2JUEH8i41NSnChkxkrdeE+roxwNRdCbuiuloaUsuO/3b//EAB4RAAICAgMBAQAAAAAAAAAAAAECAxEEEAASIkGB/9oACAEDAQE/AN4kSzzhGaNRRJLt1X9PFwJ/EjdVQtQcnzR+3x1jjkdI2VkVqBU2DpsiZ4liLeAbrX//2Q==";
 
   const QH_JPG9 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAAABgUDBwgJ/9oACAEBAAAAAPqmBka+foEHeTnDUvP/AHzE5/ZrigdqpAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAhAAAAABOn//xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/9oACAEDEAAAAANEWm6f/8QAMRAAAQMBBQUECwAAAAAAAAAAAwEEEwUAAgYRFBAVM0NTICEkYxIWIzA0QVFSVKHD/9oACAEBAAE/AO3o03lq5jfDQw8jY/CJ+0KAkoBnTlEhN2PWllvLQTeMz4UXd+RBl14dlXqgKY0O9hl+UAuMY/QtR6yGtM5UGQJArEYJU9qIv02mNQh41UV906uJqQGM0ujRRlcKDThOp+NnF6FjHAAKGMUQg+bbEbxgUFUamFr0FT0mZD5oXfd/K/bAplLR74d2u2EJlyR2VDGL522FvNPCktqrgyj1t8UzszooS3Unp03hzZ9cFsO4dpdAY3mjEN8IvtUxjfs/uf/EACARAAIBBAEFAAAAAAAAAAAAAAECAwAQETEhEzIzUWH/2gAIAQIBAT8Av0p5fErHHLYGcCvg2e0ezRiaJirbsIYwwYLyNG3/xAAeEQEBAQACAgMBAAAAAAAAAAACAQMQEQAEIjFRof/aAAgBAwEBPwDn1sH7CZGaaOdfU/D4QmiTO6lJ5tksd9A50iurO4v6bZxddKaavjfucf/Z";
 
   const QH_JPG10 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwUGBwEICf/aAAgBAQAAAAD6pia26yFQj4bSJBfnP0Pgul3hedxxqbgxWX1MOIH9/8QAFwEBAQEBAAAAAAAAAAAAAAAABAACA//aAAgBAhAAAACOg2+0dH//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwH/2gAIAQMQAAAAG2gtH//EACsQAAICAAQDCAIDAAAAAAAAAAMEAQUAAhETBhQjEBIhMTNTYmMgcwdDkv/aAAgBAQABPwDtZvEVLZJIu4IrsMbRJ9KOV89cUzrz1auZ9MijWnWD93bxDd2NWuLKhUO2DR8swEIuiHX7z6dHHCiLtZWSFo2UzMtNGOaPKTOG5idn6NS4OvZZL+zrLJTNY01xmiQknx2Y2NgwGI9jw11+eE0lkUwqhFAQhBshD2Riz4ztqTjA4u5mIqpDQdnMeRCKBYAWWT+jO8fq5/8AHzxp3Yx/KVoesra2Mx+Tgxid2AuSjvmn+nekyvzN6o93uY4SvDXNGk+WQyUq+mop1CXTTrg+ieyMN8H0FoyF9hPOUmaV5z9ZgEl5bxBzAdetp92OJOO1aU7KiYXX3/aV00D+8x+iHFHxkna5sta0q6q1pOyJsIZ3v0HXmQ/i/wAD2r9q24K7Ioo+beOMSgN7f5cS3rMa+z7WKfgenqrALcuWLRgToDeNvbXhy/466xjyjt//xAAXEQEAAwAAAAAAAAAAAAAAAAAQBBQg/9oACAECAQE/AGTisf/EAB0RAAAGAwEAAAAAAAAAAAAAAAEEEBITFAADIRH/2gAIAQMBAT8AXRlU0AT+cW4ZbA7if//Z";
 
   const QH_JPG11 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABgcDBQQICf/aAAgBAQAAAAD1TABhqG0onx7GRTrlKrilhr9gAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAAitH//EABYBAQEBAAAAAAAAAAAAAAAAAAADBf/aAAgBAxAAAAAT18W5/8QALRAAAgECBAMFCQAAAAAAAAAAAwQFARMAAgYUISMzBxARMIMSICIkMUNxc6P/2gAIAQEAAT8A8w/AVbXOLTGYHaFPjz+3KxMQpXLxyJho6f8AVQ7HK/lhMW0UAEpjHKEHheL1i41HCTEjlXzxs03HUD9bQgGu08PvbimIc2o6smHKMRzQRA+AwbwTeuDvSikYkbhhcKFOc5fzxwXX5prKErWrNheXqUKiFOkCvQ3J/mefjQ09IOTIY0DxptAq56FK2GyVL1rNL+4wtCrqyjEgMvMOAIsw/cURSRDYUAEIqU6Ig2PK/8QAJBEAAQMBBwUAAAAAAAAAAAAAAQIDEQAQEhMUICEiMUFCUYH/2gAIAQIBAT8Atw23NlFYPjd6fTWaae4TE0UIQeLilyBM9j60f//EACMRAAIBAgYCAwAAAAAAAAAAAAECAwQRABITISIyBRAgQoH/2gAIAQMBAT8A9mWojmiCRQvG2bUZ+y2HHKDsbnY3w/j6mmjExdBbsn2xTyVMqM1RGkb6jqAhuCgPA/o3+H//2Q==";

   const QH_JPGLOGO = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAdAAABBAIDAAAAAAAAAAAAAAAABQYHCAECAwQJ/9oACAEBAAAAAPVMrXpZbPDGNEJou2CBRuZ7OA0mSrSZkjJqp8ovYjhM7TxX/wD/xAAVAQEBAAAAAAAAAAAAAAAAAAAEAP/aAAgBAhAAAACKqKqMn//EABYBAQEBAAAAAAAAAAAAAAAAAAUABP/aAAgBAxAAAACROkTrRn//xAA4EAABAgMEBgQOAwAAAAAAAAADBAUBBhMAAgcUESAhIzNDEBJEcQgVJFFSVGRydIKToqPisrPD/9oACAEBAAE/AOicMbErFNhpYY28zo4ok1U4kojqIi7wJ7N+MA5qlcTtL7cZwJF2yRwBgY9LZX7P/dqYoToeRJeC6jCEyYLw2BdYl5CFWoy5z2dzhlfFuexuTgtbwua4BROKRLWNRifMwAn+IEbjck1y5bwVWxw689vpkcEqR4dgRADlB4yn/a5qTJLqeZ5fdWlXwVoKNiy4cFFJMDcFx8TeRh3xwHCCvwK6bs/q1f7LSKzzWC4hSMYYsjDdPWMUpYqDF9nBmez6kyBcCsi2LfXq5esGlxi6ORYUgQMkEXN70sNtUVpZE6sqozUrDUFQqhMPTAPdo5Oo5sk2mMai5GCI6j6IN9+lnpnxJKlWiSOxomzNUGggQ7jffpZ+ZcVDN60LS5GMUrhWCYRQAog324/hZkvvAVztBxheuhKqSlBp5WzL0YfSrfP0zDhPK00ueedwQOWhSjEZFAdkfcL3/Z6Fj4EYclczLztdUyjiaVKrb+a1zA3DsQDhuNl67cPxYZtVt/LZnlxmlJFFK1poBT9fr04efo//xAAaEQACAgMAAAAAAAAAAAAAAAAEEAARFCEk/9oACAECAQE/AIOR1sYetvHX/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQQQFAD/2gAIAQMBAT8A5hZTHWGRjAF0T//Z";

    var PY_Esp32_HardWareSerial_Dropdown = [
    ['UART1','1'],
    ['UART2','2']];
    var PY_qdprobotESP32_BOTH_PIN_Display_Dropdown = [
    ['.P0-32-33（Display）','32 33'],
    ['P3-21-22（IIC）','21 22'],
    ['P4-16-17（RGB）','16 17'],
    ['P5-18-5','18 5'],
    ['P6-23-19','23 19'],
    ['P7-15-2（touch)','15 2'],
    ['P8-27-14（touch）','27 14'],
    ['P9-12-13（touch）','12 13'],
    ['P10-25-26','25 26']
    ];
    var qdprobotESP32_display_samll_btl=[["9600", "9600"],
    ["115200", "115200"],
    ["19200", "19200"],
    ["5600", "5600"]];

    Blockly.Blocks.PY_QDP_blink_32 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_blink_32,
                args0: [
                    {
                        type: 'field_image',
                        src: xxqrIconUrl,
                        width: 120,
                        height: 120
                    }
                ],
                colour: '#00cccc',
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_QDP_esp32_display_samll_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:PY_qdprobotESP32_BOTH_PIN_Display_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'btl',
                        options:qdprobotESP32_display_samll_btl
                    }                    
                ],
                "tooltip": "屏坐标:X最大160，Y最大130,ESP32共3个串口(0,1,2),默认引脚分别为tx-rx(1,3),(10,9),(17,16),波特率默认为9600",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //彩屏刷新显示
    Blockly.Blocks.PY_QDP_esp32_display_samll_refresh_display = {
        init: function() {
            this.jsonInit({
              message0: Blockly.Msg.PY_QDP_esp32_display_samll_refresh_display,
              args0: [
                {
                    type: 'field_image',
                    src: QH_SDISPLAY_ICO,
                    width: 30,
                    height: 30
                },
                {
                    type: 'field_dropdown',
                    name: 'Serial',
                    options:PY_Esp32_HardWareSerial_Dropdown
                }
              ],
              "tooltip": "",
              colour: color_screen,
              colourTertiary: '#C0C0C0',
              extensions: ["shape_statement"]
            });
      }
    };

    //小彩屏横竖屏设置
    Blockly.Blocks.PY_QDP_esp32_display_samll_HV = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_HV,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[[(Blockly.Msg.QDP_display_samll_HV0), "2"],
                                [(Blockly.Msg.QDP_display_samll_HV1), "3"],
                                [(Blockly.Msg.QDP_display_samll_HV2), "1"],
                                [(Blockly.Msg.QDP_display_samll_HV3), "0"]
                                ]
                    }                 
                ],
                "tooltip": "横坚屏设置",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //屏亮度设置
    Blockly.Blocks.PY_QDP_esp32_display_samll_BL = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_BL,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_bl_1'
                    }               
                ],
                "tooltip": "屏亮度设置",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏颜色刷屏
    Blockly.Blocks.PY_QDP_esp32_display_samll_clr = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_clr,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[[(Blockly.Msg.QDP_display_samll_clr1), "CLR"],
                                [(Blockly.Msg.QDP_display_samll_clr2), "SBC"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_clr_1'
                    }               
                ],
                "tooltip": "颜色刷屏或背景颜色设置",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //默认图片显示
    Blockly.Blocks.PY_QH_esp32_display_samll_flash_pic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QH_esp32_display_samll_flash_pic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options: PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'HV',
                        options: [[(Blockly.Msg.QH_display_samll_HV11), "0"],[(Blockly.Msg.QH_display_samll_HV10), "1"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'model',
                        options: [[(Blockly.Msg.QH_display_small_mode0), "0"],[(Blockly.Msg.QH_display_samll_mode1), "1"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'picNum',
                        options: [
                        [{ 'src': QH_JPG1, 'width': 30, 'height': 30, 'alt': '0' }, '0'],
                        [{ 'src': QH_JPG2, 'width': 30, 'height': 30, 'alt': '1' }, '1'],
                        [{ 'src': QH_JPG3, 'width': 30, 'height': 30, 'alt': '2' }, '2'],
                        [{ 'src': QH_JPG4, 'width': 30, 'height': 30, 'alt': '3' }, '3'],
                        [{ 'src': QH_JPG5, 'width': 30, 'height': 30, 'alt': '4' }, '4'],
                        [{ 'src': QH_JPG6, 'width': 30, 'height': 30, 'alt': '5' }, '5'],
                        [{ 'src': QH_JPG7, 'width': 30, 'height': 30, 'alt': '6' }, '6'],
                        [{ 'src': QH_JPG8, 'width': 30, 'height': 30, 'alt': '7' }, '7'],
                        [{ 'src': QH_JPG9, 'width': 30, 'height': 30, 'alt': '8' }, '8'],
                        [{ 'src': QH_JPG10, 'width': 30, 'height': 30, 'alt': '9' }, '9'],
                        [{ 'src': QH_JPG11, 'width': 30, 'height': 30, 'alt': '10' }, '10'],
                        [{ 'src': QH_JPGLOGO, 'width': 30, 'height': 30, 'alt': 'LOGO' }, '11']
                        ]
                    }       
                ],
                "tooltip": "默认图片显示",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏图片显示
    Blockly.Blocks.PY_QDP_esp32_display_samll_pic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_pic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[[(Blockly.Msg.QDP_display_samll_pic0), "0"],
                                [(Blockly.Msg.QDP_display_samll_pic1), "1"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_add'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_X'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_Y'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_W'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_H'
                    }                
                ],
                "tooltip": "颜色刷屏或背景颜色设置",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //彩屏定义图像名称和数据
    Blockly.Blocks.PY_QDP_esp32_customize_display_define_bitmap_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_customize_display_define_bitmap_data,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [ 
                    {
                        type: 'input_value',
                        name: 'image_name'
                    }, 
                    {
                        type: 'input_value',
                        name: 'data'
                    }                
                ],
                "tooltip": "彩屏定义图像名称和数据",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏画点指令
    Blockly.Blocks.PY_QDP_esp32_display_samll_PS = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_PS,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_Y'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_colou'
                    }             
                ],
                "tooltip": "画点",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏画线框
    Blockly.Blocks.PY_QDP_esp32_display_samll_PL = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_PL,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[[(Blockly.Msg.QDP_display_samll_pl1), "PL"],
                                [(Blockly.Msg.QDP_display_samll_pl2), "BOX"],
                                [(Blockly.Msg.QDP_display_samll_pl3), "BOXF"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_Y'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_X2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_Y2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_colou'
                    }             
                ],
                "tooltip": "画线框",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏画线框
    Blockly.Blocks.PY_QDP_esp32_display_samll_CIR = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_CIR,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[[(Blockly.Msg.MIXLY_QDP_displayhollowround), "CIR"],
                                [(Blockly.Msg.MIXLY_QDP_displaysolidround), "CIRF"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_Y'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_R'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_colou'
                    }           
                ],
                "tooltip": "画圆",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //显示文本
    Blockly.Blocks.PY_QDP_esp32_display_samll_DC = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_DC,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[["16", "16"],
                                ["24", "24"],
                                ["32", "32"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_colou'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_X'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_text'
                    }           
                ],
                "tooltip": "显示文本信息,中文仅支持常量显示",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //显示文本
    Blockly.Blocks.PY_QDP_esp32_display_samll_SBCDC = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_SBCDC,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[["16", "16"],
                                ["24", "24"],
                                ["32", "32"]]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_colou2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_colou'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_X'
                    }, 
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_text'
                    }           
                ],
                "tooltip": "显示带底色的文本信息,中文仅支持常量显示",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //自定指令
    Blockly.Blocks.PY_QDP_esp32_display_samll_order = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_order,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'text'
                    }          
                ],
                "tooltip": "输入自定义指令",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //小彩屏波特率设置
    Blockly.Blocks.PY_QDP_esp32_display_samll_btl = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_esp32_display_samll_btl,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options:PY_Esp32_HardWareSerial_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options:[["9600", "9600"],
                                ["115200", "115200"],
                                ["19200", "19200"],
                                ["5600", "5600"]]
                    }          
                ],
                "tooltip": "设置屏的通讯波特率，9600（出厂值），每次更改后要关电重启，不建议更改！",
                colour: color_screen,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


