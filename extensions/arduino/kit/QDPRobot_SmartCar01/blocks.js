/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const QH_Sensor_color = '#E06C78';
    const QH_Actuator_color = '#5874DC';
    const QH_COMMUNICATE_color1 = '#6c91ac';
    const QH_COMMUNICATE_color2 = '#27b6ac';
    const QH_ZKP_COLOR = '#9a6665';
    const QH_OTHER_COLOR = '#cbc668';
    const QH_TONE_NOTES = [
        ["NOTE_C3", "131"],
        ["NOTE_D3", "147"],
        ["NOTE_E3", "165"],
        ["NOTE_F3", "175"],
        ["NOTE_G3", "196"],
        ["NOTE_A3", "220"],
        ["NOTE_B3", "247"],
        ["NOTE_C4", "262"],
        ["NOTE_D4", "294"],
        ["NOTE_E4", "330"],
        ["NOTE_F4", "349"],
        ["NOTE_G4", "392"],
        ["NOTE_A4", "440"],
        ["NOTE_B4", "494"],
        ["NOTE_C5", "532"],
        ["NOTE_D5", "587"],
        ["NOTE_E5", "659"],
        ["NOTE_F5", "698"],
        ["NOTE_G5", "784"],
        ["NOTE_A5", "880"],
        ["NOTE_B5", "988"]
    ];
    const QH_TONE_TONE_MUSIC = [
        ["music1", "1"],
        ["music2", "2"],
        ["music3", "3"],
        ["music4", "4"],
        ["music5", "5"],
        ["music6", "6"],
        ["music7", "7"],
        ["music8", "8"],
        ["music9", "9"],
        ["music10", "10"],
    ];
    const QH_UltraSonicDistanceSensor_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzc0NDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjY3IDM3MC4xNnYyODMuNjhoODk0LjY2VjM3MC4xNnogbTgyOS4wOCAyMTguMTJoLTc2My41VjQzNS43MmgxMjguMTN2NTQuNDdIMzI0di01NC40N2g4MS42djk4LjA5aDY1LjU4di05OC4wOWg4MS42NHY1NC40N2g2NS41OHYtNTQuNDdINzAwdjk4LjA5aDY1LjU4di05OC4wOWgxMjguMTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2MzQ1Ij48L3BhdGg+PC9zdmc+';
    const QH_Line_follower_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxOTEzNjY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyOTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgzNC40IDc0MWMtNDAuNCAwLTc0LjkgMjUuNi04OCA2MS41SDMzMy4zYy00Ni43IDAtOTAuNS0xNC4zLTEyMy4yLTQwLjMtMzAuNi0yNC4yLTQ3LjQtNTUuNy00Ny40LTg4LjRzMTYuOC02NC4yIDQ3LjQtODguNGMzMi44LTI2IDc2LjUtNDAuMyAxMjMuMi00MC4zaDguMXYwLjFoMzUyLjFjMTI5LjQgMCAyMzQuNy04Ni41IDIzNC43LTE5Mi43IDAtMTA2LjMtMTA1LjMtMTkyLjctMjM0LjctMTkyLjdIMjc5LjZjLTEzLjEtMzYtNDcuNS02MS42LTg4LTYxLjYtNTEuNyAwLTkzLjYgNDEuOS05My42IDkzLjZzNDEuOSA5My42IDkzLjYgOTMuNmM0MC41IDAgNzQuOS0yNS43IDg4LTYxLjZoNDEzLjljNDYuNyAwIDkwLjUgMTQuMyAxMjMuMiA0MC4zIDMwLjYgMjQuMiA0Ny40IDU1LjcgNDcuNCA4OC40cy0xNi44IDY0LjItNDcuNCA4OC40Yy0zMi44IDI2LTc2LjUgNDAuMy0xMjMuMiA0MC4zaC04LjF2LTAuMUgzMzMuM2MtMTI5LjQgMC0yMzQuNyA4Ni41LTIzNC43IDE5Mi43czEwNS4zIDE5Mi43IDIzNC43IDE5Mi43aDQxM2MxMyAzNiA0Ny41IDYxLjcgODggNjEuNyA1MS43IDAgOTMuNi00MS45IDkzLjYtOTMuNlM4ODYuMSA3NDEgODM0LjQgNzQxeiIgcC1pZD0iOTI5NSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==';
    const QH_RGB_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMTY4MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMDUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgMTAyNGEyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzM0wyNzcuMzMzMzMzIDkyNi4xNjUzMzNWMTAwMi42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS00Mi42NjY2NjYgMHYtMTI3Ljg3MlY3NDYuNjY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjU2IDcyNS4zMzMzMzNoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0cy0zOC4yNzIgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNoLTEyLjUwMTMzM2w5MS41NjI2NjYgOTEuNTYyNjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzg0IDEwMjR6IG0tMTA2LjY2NjY2Ny0xNzAuNjY2NjY3aDQyLjY2NjY2N2E0Mi43MDkzMzMgNDIuNzA5MzMzIDAgMCAwIDAtODUuMzMzMzMzaC00Mi42NjY2Njd2ODUuMzMzMzMzek03NDYuNjY2NjY3IDEwMjRINjgyLjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTI1NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDIxLjMzMzMzNC0yMS4zMzMzMzRoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0IDAgMjUuNDcyLTExLjIyMTMzMyA0OC4zNDEzMzMtMjguOTcwNjY3IDY0IDE3Ljc0OTMzMyAxNS42NTg2NjcgMjguOTcwNjY3IDM4LjUyOCAyOC45NzA2NjcgNjQgMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzMgODUuMzMzMzMzeiBtLTQyLjY2NjY2Ny00Mi42NjY2NjdoNDIuNjY2NjY3YTQyLjcwOTMzMyA0Mi43MDkzMzMgMCAwIDAgMC04NS4zMzMzMzNoLTQyLjY2NjY2N3Y4NS4zMzMzMzN6IG0wLTEyOGg0Mi42NjY2NjdhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCAwLTg1LjMzMzMzM2gtNDIuNjY2NjY3djg1LjMzMzMzM3pNNTMzLjMzMzMzMyAxMDI0Yy00Ny4wNjEzMzMgMC04NS4zMzMzMzMtMzguMjcyLTg1LjMzMzMzMy04NS4zMzMzMzN2LTEyOGMwLTQ3LjA2MTMzMyAzOC4yNzItODUuMzMzMzMzIDg1LjMzMzMzMy04NS4zMzMzMzRzODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzQgODUuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtNDIuNjY2NjY3IDAgNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMC04NS4zMzMzMzMgMHYxMjhhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCA4NS4zMzMzMzMgMEg1NTQuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjdoNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzM0IDIxLjMzMzMzM3YyMS4zMzMzMzRjMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzQgODUuMzMzMzMzek0zODQgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTMjU0LjYzNDY2NyAyMTMuMzMzMzMzIDM4NCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNTEzLjM2NTMzMyA2ODIuNjY2NjY3IDM4NCA2ODIuNjY2NjY3ek0zODQgMjU2Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzI3OC4xNDQgNjQwIDM4NCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzQ4OS44NTYgMjU2IDM4NCAyNTZ6IiBwLWlkPSIyMDA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDAgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTNTEwLjYzNDY2NyAyMTMuMzMzMzMzIDY0MCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNzY5LjM2NTMzMyA2ODIuNjY2NjY3IDY0MCA2ODIuNjY2NjY3eiBtMC00MjYuNjY2NjY3Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzUzNC4xNDQgNjQwIDY0MCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzc0NS44NTYgMjU2IDY0MCAyNTZ6IiBwLWlkPSIyMDA1MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDY5LjMzMzMzM2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjZTMzgyLjYzNDY2NyAwIDUxMiAwczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNjQxLjM2NTMzMyA0NjkuMzMzMzMzIDUxMiA0NjkuMzMzMzMzeiBtMC00MjYuNjY2NjY2QzQwNi4xNDQgNDIuNjY2NjY3IDMyMCAxMjguODEwNjY3IDMyMCAyMzQuNjY2NjY3UzQwNi4xNDQgNDI2LjY2NjY2NyA1MTIgNDI2LjY2NjY2N3MxOTItODYuMTQ0IDE5Mi0xOTJTNjE3Ljg1NiA0Mi42NjY2NjcgNTEyIDQyLjY2NjY2N3oiIHAtaWQ9IjIwMDU0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";
    const QH_BUZZER_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMjQ4MDk4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMTU2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNjRDMjY0Ljk2IDY0IDY0IDI2NC45NiA2NCA1MTJzMjAwLjk2IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuOTYgNDQ4LTQ0OFM3NTkuMDQgNjQgNTEyIDY0eiBtMCA4MzJDMzAwLjI1NiA4OTYgMTI4IDcyMy43NDQgMTI4IDUxMlMzMDAuMjU2IDEyOCA1MTIgMTI4czM4NCAxNzIuMjU2IDM4NCAzODQtMTcyLjI1NiAzODQtMzg0IDM4NHoiIHAtaWQ9IjIyMTU3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQwNC45NiA3NzAuNDMyYTI3OC4yMDggMjc4LjIwOCAwIDAgMS05MC42ODgtNjAuNjcyIDI3OC40MzIgMjc4LjQzMiAwIDAgMS02MC43MDQtOTAuNzIgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAzNDEuNiAzNDEuNiAwIDAgMCA3NC41OTIgMTExLjQ1NiAzNDIuMTc2IDM0Mi4xNzYgMCAwIDAgMTExLjQ1NiA3NC41NiAzMS45MzYgMzEuOTM2IDAgMCAwIDQxLjc5Mi0xNy4zMTIgMzEuOTY4IDMxLjk2OCAwIDAgMC0xNy4zMTItNDEuODI0ek0yMTEuNzQ0IDQyMi4yNzJhMzEuODcyIDMxLjg3MiAwIDAgMCA0MS44MjQtMTcuMjggMjc4LjA4IDI3OC4wOCAwIDAgMSA2MC43MDQtOTAuNzIgMjc4LjMwNCAyNzguMzA0IDAgMCAxIDkwLjY4OC02MC43MDQgMzIgMzIgMCAwIDAtMjQuNTEyLTU5LjEzNiAzNDIuMDE2IDM0Mi4wMTYgMCAwIDAtMTExLjQ1NiA3NC41NiAzNDIuMTQ0IDM0Mi4xNDQgMCAwIDAtNzQuNTYgMTExLjQ4OCAzMiAzMiAwIDAgMCAxNy4zMTIgNDEuNzkyek02MTkuMDQgMjUzLjU2OGEyNzguNzg0IDI3OC43ODQgMCAwIDEgOTAuNzIgNjAuNzA0IDI3OC41NiAyNzguNTYgMCAwIDEgNjAuNjcyIDkwLjY4OCAzMiAzMiAwIDEgMCA1OS4xMzYtMjQuNTEyIDM0Mi4xNzYgMzQyLjE3NiAwIDAgMC03NC41Ni0xMTEuNDU2IDM0Mi40MzIgMzQyLjQzMiAwIDAgMC0xMTEuNDU2LTc0LjU5MiAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMiA1OS4xNjh6TTgxMi4yNTYgNjAxLjcyOGEzMi4wOTYgMzIuMDk2IDAgMCAwLTQxLjgyNCAxNy4zMTIgMjc4LjMzNiAyNzguMzM2IDAgMCAxLTYwLjY3MiA5MC43MiAyNzguMzM2IDI3OC4zMzYgMCAwIDEtOTAuNzIgNjAuNjcyIDMyIDMyIDAgMCAwIDI0LjUxMiA1OS4xMzYgMzQyLjE3NiAzNDIuMTc2IDAgMCAwIDExMS40NTYtNzQuNTYgMzQyLjg0OCAzNDIuODQ4IDAgMCAwIDc0LjU2LTExMS40NTYgMzIgMzIgMCAwIDAtMTcuMzEyLTQxLjgyNHpNMzQ4LjU3NiAzNDguNTc2YTIzMC4yMDggMjMwLjIwOCAwIDAgMC01MC4xMTIgNzQuOTQ0IDMyIDMyIDAgMCAwIDU5LjEzNiAyNC41NDQgMTY2Ljc4NCAxNjYuNzg0IDAgMCAxIDM2LjI1Ni01NC4yMDggMTY2LjQgMTY2LjQgMCAwIDEgNTQuMjA4LTM2LjI4OCAzMi4wMzIgMzIuMDMyIDAgMCAwLTI0LjUxMi01OS4xMzYgMjMwLjU5MiAyMzAuNTkyIDAgMCAwLTc0Ljk3NiA1MC4xNDR6TTU3NS45NjggMzU3LjU2OGMyMC4yODggOC40MTYgMzguNTI4IDIwLjY0IDU0LjE3NiAzNi4yNTZzMjcuODQgMzMuODg4IDM2LjI4OCA1NC4yMDhhMzIgMzIgMCAxIDAgNTkuMTM2LTI0LjU0NCAyMzAuODE2IDIzMC44MTYgMCAwIDAtNTAuMTQ0LTc0Ljk0NCAyMzAuNCAyMzAuNCAwIDAgMC03NC45NDQtNTAuMTEyIDMyIDMyIDAgMSAwLTI0LjUxMiA1OS4xMzZ6TTQ0OC4wMzIgNjY2LjQzMmExNjYuNTYgMTY2LjU2IDAgMCAxLTU0LjIwOC0zNi4yODggMTY2LjkxMiAxNjYuOTEyIDAgMCAxLTM2LjI4OC01NC4xNzYgMzIgMzIgMCAwIDAtNTkuMTM2IDI0LjUxMiAyMzAuNDY0IDIzMC40NjQgMCAwIDAgNTAuMTQ0IDc0Ljk0NCAyMjkuOTUyIDIyOS45NTIgMCAwIDAgNzQuOTQ0IDUwLjE0NCAzMiAzMiAwIDAgMCAyNC41NDQtNTkuMTM2ek02NzUuMzkyIDY3NS4zOTJhMjMwLjE0NCAyMzAuMTQ0IDAgMCAwIDUwLjE0NC03NC45NDQgMzIgMzIgMCAxIDAtNTkuMTM2LTI0LjUxMmMtOC40MTYgMjAuMjg4LTIwLjY0IDM4LjUyOC0zNi4yODggNTQuMTc2cy0zMy45MiAyNy44NzItNTQuMTc2IDM2LjI4OGEzMiAzMiAwIDEgMCAyNC41MTIgNTkuMTM2IDIyOC45NiAyMjguOTYgMCAwIDAgNzQuOTQ0LTUwLjE0NHpNNjQwIDUxMmMwLTcwLjU5Mi01Ny40MDgtMTI4LTEyOC0xMjhzLTEyOCA1Ny40MDgtMTI4IDEyOCA1Ny40MDggMTI4IDEyOCAxMjggMTI4LTU3LjQwOCAxMjgtMTI4eiBtLTEyOCA2NGMtMzUuMjk2IDAtNjQtMjguNzA0LTY0LTY0czI4LjcwNC02NCA2NC02NCA2NCAyOC43MDQgNjQgNjQtMjguNzA0IDY0LTY0IDY0eiIgcC1pZD0iMjIxNTgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="
    const QH_MOTOR_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMzA1NDE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MjEuNiAzMzIuOGgtNTEuMmMtNi42IDAtMTMgMC42LTE5LjMgMS44LTIwLjctMjguNy01NC41LTUzLTgzLjEtNTNINTEyVjEyOGMwLTI4LjMtMjIuOS01MS4yLTUxLjItNTEuMmgtMjU2Yy0yOC4zIDAtNTEuMiAyMi45LTUxLjIgNTEuMnYxNTMuNmMtMjcuNSAwLTU5LjggMjIuNC04MC42IDQ5LjctNS4xLTEuNS0xMC41LTIuMy0xNi4xLTIuM0MyNS41IDMyOC45IDAgMzU0LjQgMCAzODUuOHYzNDkuOWMwIDMxLjQgMjUuNSA1Ni45IDU2LjkgNTYuOSAzLjUgMCA2LjgtMC4yIDkuOC0wLjcgMTguMyAzMi42IDUwLjEgNjIuNSA3OS42IDYyLjVoMi41bC00Ni40IDkyLjdoNzY4bC01MS4yLTEwMi40aC0yLjFjNC40LTIuNCA4LjYtNS4yIDEyLjctOC40IDEyLjUgNS40IDI2LjIgOC40IDQwLjYgOC40aDUxLjJjNTYuNiAwIDEwMi40LTQ1LjggMTAyLjQtMTAyLjRWNDM1LjJjMC01Ni42LTQ1LjgtMTAyLjQtMTAyLjQtMTAyLjR6TTQwOS42IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yIDIyLjktNTEuMiA1MS4yLTUxLjJ6TTI1NiAxMjhjMjguMyAwIDUxLjIgMjIuOSA1MS4yIDUxLjJzLTIyLjkgNTEuMi01MS4yIDUxLjItNTEuMi0yMi45LTUxLjItNTEuMlMyMjcuNyAxMjggMjU2IDEyOHogbTUxMiA2NjUuNkgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZWNjQwSDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OFYzODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjkyOCI+PC9wYXRoPjwvc3ZnPg==";
    const QH_REMOTE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNTY5MTIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNzc5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yNzkuNDg3IDI2Mi44NjNjMTIuMjQ5LTguNDY2IDI5LjA0OS01LjM3OCAzNy41MDEgNi44NzEgOC40NjUgMTIuMjQ5IDUuMzkzIDI5LjAzNC02Ljg1NiAzNy41MDEtMTIuMjQ5IDguNDUxLTI5LjA1MSA1LjM3OC0zNy41MDEtNi44NzFzLTUuMzc4LTI5LjA1MSA2Ljg1Ni0zNy41MDF6IG02Ni41NTEtNDUuOTUyYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNTAxIDYuODcxIDguNDUxIDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjI0OSA4LjQ2NS0yOS4wMzYgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUxLTEyLjI0OS01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtLTkwLjE3OSAxNTUuN2MxMi4yNDktOC40NTIgMjkuMDM2LTUuMzc5IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDUtMTIuMjUtNS4zNzgtMjkuMDM1IDYuODcxLTM3LjV6IG02Ny4zMTktNDYuNDc0YzEyLjI0OS04LjQ2NSAyOS4wMzQtNS4zNzggMzcuNSA2Ljg1NyA4LjQ2NSAxMi4yNDkgNS4zNzggMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM0IDUuMzc4LTM3LjUtNi44NzEtOC40NTItMTIuMjM1LTUuMzc4LTI5LjAzNyA2Ljg3MS0zNy40ODd6IG02Ni41MzYtNDUuOTUyYzEyLjI0OS04LjQ2NiAyOS4wNDktNS4zNzggMzcuNTAxIDYuODU2IDguNDY1IDEyLjI0OSA1LjM3OCAyOS4wNDktNi44NzEgMzcuNTAxLTEyLjIzNiA4LjQ2NS0yOS4wMzYgNS4zOTMtMzcuNTAxLTYuODcxLTguNDM3LTEyLjIzNC01LjM3OC0yOS4wMzUgNi44NzEtMzcuNDg2eiBtLTkxLjU1NiAxNTMuNzE0Yy0xMi4yNDkgOC40NTEtMTUuMzIyIDI1LjIzNy02Ljg1NiAzNy41IDguNDUxIDEyLjIzNCAyNS4yMzcgMTUuMzA4IDM3LjQ4NiA2Ljg1NiAxMi4yNDktOC40NSAxNS4zMzctMjUuMjUgNi44NzEtMzcuNDg2LTguNDUxLTEyLjI2My0yNS4yNTItMTUuMzM3LTM3LjUwMS02Ljg3eiBtNjcuMzM0LTQ2LjQ4OWMxMi4yNDgtOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjQ5IDUuMzc4IDI5LjAzNi02Ljg3MSAzNy41MDEtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM3OC0zNy41LTYuODU2LTguNDY2LTEyLjI2NC01LjM3OC0yOS4wMzYgNi44NzEtMzcuNTAxeiBtNjYuNTM1LTQ1LjkzN2MxMi4yNDktOC40NjUgMjkuMDM0LTUuMzkzIDM3LjUgNi44NTYgOC40NTIgMTIuMjM0IDUuMzc4IDI5LjA0OS02Ljg3IDM3LjUwMS0xMi4yNDkgOC40NTEtMjkuMDM2IDUuMzYzLTM3LjQ4Ni02Ljg1Ni04LjQ2Ny0xMi4yNjMtNS4zOTMtMjkuMDUgNi44NTYtMzcuNTAxek0zNDMuODIgNTAwLjAxNGMxMi4yNDktOC40NTIgMjkuMDM0LTUuMzc4IDM3LjQ4NiA2Ljg3IDguNDY1IDEyLjIzNSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNDg2LTEyLjI0OSA4LjQ2Ny0yOS4wNTEgNS4zNzgtMzcuNTAxLTYuODU2LTguNDUxLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44NzEtMzcuNXogbTY3LjMxOC00Ni40ODljMTIuMjQ5LTguNDY1IDI5LjAzNi01LjM3OCAzNy41MDEgNi44NzEgOC40NTIgMTIuMjM0IDUuMzkzIDI5LjAzNi02Ljg3MSAzNy40ODYtMTIuMjQ5IDguNDY1LTI5LjAzNCA1LjM5My0zNy41LTYuODU2LTguNDUyLTEyLjI0OS01LjM3OC0yOS4wNDkgNi44Ny0zNy41MDF6IG02Ni41MzYtNDUuOTUxYzEyLjI0OS04LjQ1MSAyOS4wNDktNS4zNzggMzcuNSA2Ljg3MSA4LjQ2NyAxMi4yNDkgNS4zOTMgMjkuMDM2LTYuODcxIDM3LjUwMS0xMi4yNDggOC40NjUtMjkuMDM0IDUuMzc4LTM3LjQ4NS02Ljg3MS04LjQ2Ny0xMi4yNDktNS4zNzgtMjkuMDM2IDYuODU2LTM3LjUwMXogbTIzLjk2MSAzMjMuOTA4Yy0yMy41MjYtNi40MzYtNDUuMDI0LTIwLjg3My01OS45ODMtNDIuNTMtMTUuMjM2LTIyLjA5Mi0yMS4wNzctNDcuODY1LTE4LjM4MS03Mi41OTZsOTYuMjI0IDE3LjYxNC0xNy44NiA5Ny41MTJ6TTIxMi4xNyAzMDkuMzVjMTIuMjQ4LTguNDUxIDI5LjA0OS01LjM3OCAzNy41IDYuODcxIDguNDUyIDEyLjI0OSA1LjM5MyAyOS4wMzYtNi44NTYgMzcuNTAxLTEyLjI0OSA4LjQ1MS0yOS4wNDkgNS4zNzgtMzcuNTAxLTYuODcxLTguNDY2LTEyLjI0OS01LjM5Mi0yOS4wNDkgNi44NTctMzcuNTAxeiBtLTk5LjU0My0xNDAuMTNjLTMwLjgxOCAyMS4yNjUtMzguNjAzIDYzLjg2OC0xNy4zMzcgOTQuNjU4bDQ2MS41MDIgNjY4LjQxNGMyMS4yOCAzMC44MDQgNjMuODU1IDM4LjYwMiA5NC42NTggMTcuMzM3bDQ5LjI4Ni0zNC4wMjJjLTMxLjI1My0yMi4zNTMtMzIuMjM5LTQzLjY5MS01My4wODQtMTAwLjY1OC0zNC40NTUtMjcuMDkzLTY3LjY1Mi03NS42MzktNzYuNDIxLTg3Ljg2LTE1LjQ4MiA2LjQ2Ni0zMS45NjMgOS4wNDYtNDguMTExIDcuOTg3bDEyLjU2OC02OC42MjRjLTguOTg4LTE4LjM5NC0xNy4wNDgtMzcuMjk2LTI0LjcxNi01Ni4xODVsLTgzLjE0Ny0xNS4yMjFjNi45ODctMjEuNzQzIDIwLjkzMS00MS40NTggNDEuMTY3LTU1LjQ0NiAxOC43MTUtMTIuOTE3IDQwLjA5Ni0xOS4wNDkgNjEuMjMtMTguOTlsNjkuNjY3LTQ3LjkxLTUxLjkyNS03NS4yMzIgMS40NzkgMC4yNDZMMzQwLjI1NSA5NC43NGMtMjEuMjY3LTMwLjc4OS02My44NTUtMzguNjAzLTk0LjY1OC0xNy4zMzZsLTEzMi45NyA5MS44MTZ6TTgzNS4wMSA0OTguNTM0YzI1LjkwNCA5LjQ5NiA0Mi45NjUgMjcuMzM5IDQ5LjM0MyA1NS4zMDIgMzAuOTA2IDExMy43NjQgMjcuNDEyIDE3MC4yNTQgNTguMzQ2IDI4NC4wMzFsLTEzMS40NjIgOTMuODAyYy03MC4zMDYtMjcuMzI0LTExMC4xNC03MC4wNDMtMTIyLjQ5LTE0NC4xMDMtODEuNDk1LTgwLjY2OC05Ny4yNTMtOTkuMzgzLTE0NS4wMTUtMjIwLjExOWw0Ni43OTItMzEuOTYzYzQ4LjkwOSAzOC4yMTEgNjMuNzA5IDUwLjkwOSA5OC4wNSAxMDMuNDg2bDU1Ljc5NC0zOC41My05Ni41NTctMTM5Ljg1NmM2My4wMTMgMTAuMjQ5IDEyNC43MzYgMjQuNDY5IDE4Ny4xOTkgMzcuOTV6IiBwLWlkPSI0Mzc4MCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";
    const QH_BLUETOOTH_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNjA2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NzQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00MDQuMzg0IDUxMC4zMzZsMTk0LjY1Ni0yMDcuNTJhMzIgMzIgMCAwIDAtMi43NTItNDYuNGwtMjIwLjIyNC0xODQuODk2QTMyLjAzMiAzMi4wMzIgMCAwIDAgMzIzLjQ1NiA5NnYzMzQuMDQ4TDE1MC4yMDggMjU4LjE3NmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjA1NiA0NS40NGwyMDkuOTg0IDIwOC4zMi0yMTAuNzg0IDIyNC43MDRhMzIuMDMyIDMyLjAzMiAwIDAgMCA0Ni42ODggNDMuODA4bDE3Mi40MTYtMTgzLjg0djM2MC44OTZhMzIuMDY0IDMyLjA2NCAwIDAgMCAzMiAzMiAzMS45MzYgMzEuOTM2IDAgMCAwIDIzLjIzMi05Ljk4NGwyMjAuMjI0LTIzMi4xOTJhMzIgMzIgMCAwIDAtMC42NzItNDQuNzM2bC0xOTMuODU2LTE5Mi4yNTZ6IG0tMTYuOTI4LTM0NS42NjRsMTQxLjc2IDExOS4wMDgtMTQxLjc2IDE1MS4xNjhWMTY0LjY3MnogbTAgNzEyLjYwOFY1ODMuNjhsMTQzLjQ4OCAxNDIuMzM2LTE0My40ODggMTUxLjI2NHpNNjk0Ljg0OCAzNDEuNzkyYTMyIDMyIDAgMCAwLTUzLjE4NCAzNS42NDggMjA0LjggMjA0LjggMCAwIDEgMzQuNjU2IDExNC40MzIgMjA0LjY3MiAyMDQuNjcyIDAgMCAxLTM0LjYyNCAxMTQuNCAzMS45NjggMzEuOTY4IDAgMSAwIDUzLjEyIDM1LjY0OCAyNjguNTEyIDI2OC41MTIgMCAwIDAgNDUuNTA0LTE1MC4wNDggMjY4LjggMjY4LjggMCAwIDAtNDUuNDcyLTE1MC4wOHpNODg2LjUyOCAzMjYuNDMyYTQ0MS41MzYgNDQxLjUzNiAwIDAgMC00MS4xNTItNzcuMDI0IDMyIDMyIDAgMSAwLTUzLjE4NCAzNS42MTYgMzc5LjY0OCAzNzkuNjQ4IDAgMCAxIDY0LjE2IDIxMS43NDQgMzgwLjUxMiAzODAuNTEyIDAgMCAxLTY0LjE2IDIxMS43NDQgMzIuMDMyIDMyLjAzMiAwIDAgMCA1My4xODQgMzUuNjQ4IDQ0My4zMjggNDQzLjMyOCAwIDAgMCA3NC45NzYtMjQ3LjM2YzAtNTguODgtMTEuMzkyLTExNi4xOTItMzMuODI0LTE3MC4zNjh6IiBwLWlkPSI0NDc0OSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";
    const QH_SERIAL_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzNjU4Mjg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1OTAzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yOTguNjY2NjY3IDEyOGg0MjYuNjY2NjY2djg1LjMzMzMzM2g4NS4zMzMzMzR2MTI4aC0xMjh2MjU2SDM0MS4zMzMzMzNWMzQxLjMzMzMzM0gyMTMuMzMzMzMzVjIxMy4zMzMzMzNoODUuMzMzMzM0VjEyOG00MjYuNjY2NjY2IDI1Nmg4NS4zMzMzMzR2MjEzLjMzMzMzM2gtODUuMzMzMzM0VjM4NG0tMjU2IDI1Nmg4NS4zMzMzMzR2Mjk4LjY2NjY2N2gtODUuMzMzMzM0di0yOTguNjY2NjY3TTIxMy4zMzMzMzMgMzg0aDg1LjMzMzMzNHYyMTMuMzMzMzMzSDIxMy4zMzMzMzNWMzg0eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNDU5MDQiPjwvcGF0aD48L3N2Zz4=";
    const QH_ZKP_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzM1NjIyODI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU2NjAzIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pOTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyOTguNjY2NjY3djQyNi42NjY2NjZIODUuMzMzMzMzVjI5OC42NjY2NjdoMTcwLjY2NjY2N3ogbTY4Mi42NjY2NjcgMHY0MjYuNjY2NjY2aC0xNzAuNjY2NjY3VjI5OC42NjY2NjdoMTcwLjY2NjY2N3oiIGZpbGw9IiNiZmJmYmYiIHAtaWQ9IjU2NjA0IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pOTAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNODUzLjMzMzMzMyAyNTZhMTI4IDEyOCAwIDAgMSAxMjggMTI4djI1NmExMjggMTI4IDAgMCAxLTEyOCAxMjhIMTcwLjY2NjY2N2ExMjggMTI4IDAgMCAxLTEyOC0xMjhWMzg0YTEyOCAxMjggMCAwIDEgMTI4LTEyOGg2ODIuNjY2NjY2eiBtLTU5Ny4zMzMzMzMgNDIuNjY2NjY3SDE3MC42NjY2NjdhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMC04NS4zMzMzMzQgODUuMzMzMzMzdjI1NmE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwIDg1LjMzMzMzNCA4NS4zMzMzMzNoODUuMzMzMzMzVjI5OC42NjY2Njd6IG00NjkuMzMzMzMzIDBIMjk4LjY2NjY2N3Y0MjYuNjY2NjY2aDQyNi42NjY2NjZWMjk4LjY2NjY2N3ogbTEyOCAwaC04NS4zMzMzMzN2NDI2LjY2NjY2Nmg4NS4zMzMzMzNhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMCA4NS4zMzMzMzQtODUuMzMzMzMzVjM4NGE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwLTg1LjMzMzMzNC04NS4zMzMzMzN6TTUzMy4zMzMzMzMgNjYxLjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDAgNDIuNjY2NjY3aC00Mi42NjY2NjZhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2N2g0Mi42NjY2NjZ6IG0zMjAtMTQ5LjMzMzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxIDAgODUuMzMzMzMzIDQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMC04NS4zMzMzMzN6TTE3MC42NjY2NjcgNTU0LjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAxIDAgNDIuNjY2NjY2IDIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjZ6IG00Mi42NjY2NjYtNDIuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2NjcgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2N3ogbS04NS4zMzMzMzMgMGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAxIDAgNDIuNjY2NjY3IDIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2Njd6IG00Mi42NjY2NjctNDIuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2NjcgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2N3ogbTY4Mi42NjY2NjYtNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2NjYgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2NnpNMTcwLjY2NjY2NyAzNDEuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEgMCA4NS4zMzMzMzQgNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSAwLTg1LjMzMzMzNHogbTcyNS4zMzMzMzMgNDIuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2NjcgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2N3ogbS04NS4zMzMzMzMgMGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAxIDAgNDIuNjY2NjY3IDIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2Njd6IG00Mi42NjY2NjYtNDIuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2NjcgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwLTQyLjY2NjY2N3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjU2NjA1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pOTEiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPjwvc3ZnPg==";



    QH_OUTPUT_RIGHT_PIN = [
        ["P7 (RA1)", "7"],
        ["P8 (RA0)", "8"]
    ];

    QH_MOTOR_PIN = [
        ["M1 (DIR7-SPEED6-ENCODER3)", "1"],
        ["M2 (DIR4-SPEED5-ENCODER2)", "2"]
    ];

    Blockly.Blocks.QH_UltraSonicDistanceSensor_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_UltraSonicDistanceSensor_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_UltraSonicDistanceSensor_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'field_dropdown',
                    name: 'PIN2',
                    options: [
                        ["cm", "Cm"],
                        ["inch", "inch"]
                    ]
                }],
                "tooltip": "超声波测距，注意单位的选择，\n使用时如果波动大请注意检查程序或放宽取值区间",
                colour: QH_Sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //巡线
    Blockly.Blocks.QH_Line_follower_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_LINE_FOLLOWER_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_Line_follower_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'field_dropdown',
                    name: 'state1',
                    options: [
                        ["ON", "1"],
                        ["OFF", "0"]
                    ]
                }, {
                    type: 'field_dropdown',
                    name: 'state2',
                    options: [
                        ["ON", "1"],
                        ["OFF", "0"]
                    ]
                }],
                "tooltip": "左右感应器对白色物体约2CM时有输入(亮灯),\n相反对黑色物体不作反应，通常用来区分白黑",
                colour: QH_Sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //RGB
    Blockly.Blocks.QH_rgb_led_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_rgb_led_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_RGB_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'input_value',
                    name: 'num8'
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'input_value',
                    name: 'R'
                }, {
                    type: 'input_value',
                    name: 'G'
                }, {
                    type: 'input_value',
                    name: 'B'
                }],
                "tooltip": "RGB对应灯号颜色的值，灯号共4个，总灯数跟模块灯数相同，0为全部同时工作\n对应的值是代表第几个灯的，最大255，0为关",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //RGB2
    Blockly.Blocks.QH_rgb_led2_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_rgb_led2_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_RGB_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'input_value',
                    name: 'num8'
                }, 
                {
                    type: 'input_value',
                    name: 'num1'
                }, 
                {
                    type: 'input_value',
                    name: 'colour'
                }],
                "tooltip": "RGB对应灯号颜色的值，灯号共4个，总灯数跟模块灯数相同，0为全部同时工作\n对应的值是代表第几个灯的，最大255，0为关",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //蜂鸣器
    Blockly.Blocks.QH_buzzer_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_buzzer_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_BUZZER_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'field_dropdown',
                    name: 'PIN2',
                    options: QH_TONE_NOTES
                }, {
                    type: 'input_value',
                    name: 'DURATION'
                }],
                "tooltip": "蜂鸣器的发音设置，频率不同时发音不一样，时间为发音的持续时间",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //蜂鸣器音乐
    Blockly.Blocks.QH_buzzer_music_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_buzzer_music_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_BUZZER_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [
                {
                    type: 'field_dropdown',
                    name: 'PIN2',
                    options: QH_TONE_TONE_MUSIC
                }],
                "tooltip": "对应播放系统内音乐，直到自动播完",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //直流电机
    Blockly.Blocks.QH_motor_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_motor_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_MOTOR_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'PIN',
                    options: QH_MOTOR_PIN
                }, {
                    type: 'input_value',
                    name: 'speed'
                }],
                "tooltip": "5~8V直流电机在M1-M2口上的控制，旋转速度通过0~255来控制，\n负数为反转，0为停止，工作时间通过延时指令来控制\n当电机受外部机构卡死时，会内部保护停机，这时重启电源即可\n 一定要开启电源开关，不然电机不转.",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //舵机180
    Blockly.Blocks.QH_servomotor180_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_servomotor180_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_MOTOR_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: QH_OUTPUT_RIGHT_PIN
                }, {
                    type: 'input_value',
                    name: 'speed'
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'field_dropdown',
                    name: 'wait',
                    options: [
                        [(Blockly.Msg.QH_Donotinterrupt), "1"],
                        [(Blockly.Msg.QH_Interruptible), "0"]
                    ]
                }],
                "tooltip": "舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //舵机180
    Blockly.Blocks.QH_servomotorread_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_servomotorread_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_MOTOR_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: QH_OUTPUT_RIGHT_PIN
                }],
                "tooltip": "舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //红外遥控器接收
    Blockly.Blocks.QH_ir_re2_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ir_re2_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_REMOTE_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'PIN',
                    options: [
                        ["电源Power", "1"],
                        ["Menu", "2"],
                        ["静音NOSound", "3"],
                        ["Mode", "4"],
                        ["+", "5"],
                        ["返回Back", "6"],
                        ["上一Prev", "7"],
                        ["启/停Start/stop", "8"],
                        ["下一Next", "9"],
                        ["0", "10"],
                        ["-", "11"],
                        ["OK", "12"],
                        ["1", "13"],
                        ["2", "14"],
                        ["3", "15"],
                        ["4", "16"],
                        ["5", "17"],
                        ["6", "18"],
                        ["7", "19"],
                        ["8", "20"],
                        ["9", "21"]
                    ]
                }, {
                    type: 'field_dropdown',
                    name: 'TYPE',
                    options: [
                        [Blockly.Msg.QH_IrPress, '0'],
                        [Blockly.Msg.QH_IrPressOn, '1']
                    ]
                }],
                "tooltip": "对应摇控器的按键输入，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //蓝牙接收数据
    Blockly.Blocks.QH_BT_START = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_START,
                args0: [{
                    type: 'field_image',
                    src: QH_BLUETOOTH_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [],
                "tooltip": "P5接口 放在循环内，上传程序时不要插模块 蓝牙APP上的滑动变量对应值,在“蓝牙变量”和“蓝牙按键”前使用",
                colour: QH_COMMUNICATE_color2,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //蓝牙按键
    Blockly.Blocks.QH_BT_button = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_button,
                args0: [{
                    type: 'field_image',
                    src: QH_BLUETOOTH_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'TEXT',
                    "text": "U"
                }],
                "tooltip": "P5接口 上传程序时不要插模块 接收到蓝牙模块在对应APP输入的按键设定字符值（APP发送格式为“,发送的字符.”）,\n在“启用蓝牙接收”后有效",
                colour: QH_COMMUNICATE_color2,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //蓝牙变量
    Blockly.Blocks.QH_BT_variable = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_variable,
                args0: [{
                    type: 'field_image',
                    src: QH_BLUETOOTH_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"]
                    ]
                }],
                "tooltip": "P5接口 上传程序时不要插模块 蓝牙APP上的滑动变量对应值,在“启用蓝牙接收”后有效",
                colour: QH_COMMUNICATE_color2,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //蓝牙发送变量
    Blockly.Blocks.QH_BT_print = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_print,
                args0: [{
                    type: 'field_image',
                    src: QH_BLUETOOTH_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'N1'
                }, {
                    type: 'input_value',
                    name: 'N2'
                }, {
                    type: 'input_value',
                    name: 'N3'
                }, {
                    type: 'input_value',
                    name: 'N4'
                }, {
                    type: 'input_value',
                    name: 'N5'
                }],
                "tooltip": "P5接口 上传程序时不要插模块 蓝牙APP V1~V5 显示变量对应值,可以为传感器值或字符串，注：重复发送要加延时间隔约30毫秒！",
                colour: QH_COMMUNICATE_color2,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //蓝牙发送字符串
    Blockly.Blocks.qdp_BT_print_string = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_BT_print_string,
                args0: [{
                    type: 'field_image',
                    src: QH_BLUETOOTH_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'TEXT'
                }],
                "tooltip": "发送字符串",
                colour: QH_COMMUNICATE_color2,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //串口收到的数据等于
    Blockly.Blocks.QH_serial_jieshouzhi_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_jieshouzhi_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_SERIAL_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [ {
                    type: 'input_value',
                    name: 'text'
                }],
                "tooltip": "此为串口运行,直接将读到的值和设定值对比,相同时为真,可用于蓝牙等模块的通讯回读",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //串口发送
    Blockly.Blocks.QH_serial_fasong_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_fasong_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_SERIAL_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'OutputModel',
                    options: [
                        [Blockly.Msg.QH_SERIAL_WRITE, 'write'],
                        [Blockly.Msg.QH_SERIAL_PRINT, 'print'],
                        [Blockly.Msg.QH_SERIAL_PRINTLN, 'println']
                    ]
                }, {
                    type: 'input_value',
                    name: 'text'
                }],
                "tooltip": "指定串口发送数值，如多串口设备运行，运行前要加“软串口定义到”块指令进行切换串口",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //串口接收
    Blockly.Blocks.QH_serial_jieshou_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_jieshou_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_SERIAL_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [],
                "tooltip": "当串口有数据读时读取的值",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //串口有数据可读
    Blockly.Blocks.QH_serial_suju_Car01 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_suju_Car01,
                args0: [{
                    type: 'field_image',
                    src: QH_SERIAL_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [],
                "tooltip": "如果多串口设备使用先要“软串口定义到”，这个要配合后面“串口接收”一起使用，这个意思是当串口有可读数值时",
                colour: QH_COMMUNICATE_color1,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //掌控屏
    Blockly.Blocks.qdp_display_START = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.qdp_display_START,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                "tooltip": "P5接口 上传程序时不要插模块 屏上的滑动变量对应值,在“屏按键”和“屏滑动变量”前使用",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //掌控屏按键
    Blockly.Blocks.qdp_display_button = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_display_button,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'TEXT'
                }],
                "tooltip": "P5接口 上传程序时不要插模块 接收到屏上对应输入的按键设定字符值（屏发送格式为“,发送的字符.”）,\n在“启用屏接收数据”后有效",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //读掌控屏变量
    Blockly.Blocks.qdp_display_variable = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_display_variable,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"]
                    ]
                }],
                "tooltip": "P5接口 上传程序时不要插模块 屏上的滑动变量对应值,在“启用屏接收数据”后有效",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //发送变量到掌控屏
    Blockly.Blocks.qdp_display_print = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_display_print,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'N1'
                }],
                "tooltip": "P5接口 上传程序时不要插模块 屏上V1~V5显示变量对应值,可以为传感器值或字符串，注：重复发送要加延时间隔约300毫秒！",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //睡眠控制
    Blockly.Blocks.qdp_zkpdisplay_sleep = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_sleep,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        [(Blockly.Msg.QH_displaysleep1), "1"],
                        [(Blockly.Msg.QH_displaysleep0), "0"]
                    ]
                }],
                "tooltip": "进入睡眠后屏关闭,退出睡眠自动开启屏显.",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //睡眠控制
    Blockly.Blocks.qdp_zkpdisplay_buzzer = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_buzzer,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        ["NOTE_C3", "131"],
                        ["NOTE_D3", "147"],
                        ["NOTE_E3", "165"],
                        ["NOTE_F3", "175"],
                        ["NOTE_G3", "196"],
                        ["NOTE_A3", "220"],
                        ["NOTE_B3", "247"],
                        ["NOTE_C4", "262"],
                        ["NOTE_D4", "294"],
                        ["NOTE_E4", "330"],
                        ["NOTE_F4", "349"],
                        ["NOTE_G4", "392"],
                        ["NOTE_A4", "440"],
                        ["NOTE_B4", "494"],
                        ["NOTE_C5", "532"],
                        ["NOTE_D5", "587"],
                        ["NOTE_E5", "659"],
                        ["NOTE_F5", "698"],
                        ["NOTE_G5", "784"],
                        ["NOTE_A5", "880"],
                        ["NOTE_B5", "988"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'num1'
                }],
                "tooltip": "屏蜂鸣器的发音频率及音量大小",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //颜色
    Blockly.Blocks.qdp_zkpdisplay_color = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_color,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin1',
                    options: [
                        ["RED", "63488"],
                        ["BLUE", "31"],
                        ["GRAY", "33840"],
                        ["BLACK", "0"],
                        ["WHITE", "65535"],
                        ["GREEN", "2016"],
                        ["BROWN", "48192"],
                        ["YELLOW", "65504"]
                    ]
                }],
                "tooltip": "常用颜色的选择",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    //颜色刷屏
    Blockly.Blocks.qdp_zkpdisplay_clscolor = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_clscolor,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'num1'
                }],
                "tooltip": "全屏显示一个颜色（十进制颜色号）或采用颜色定义块",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //表情刷屏
    Blockly.Blocks.qdp_zkpdisplay_pic = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_pic,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        [(Blockly.Msg.QH_displaypic1), "0"],
                        [(Blockly.Msg.QH_displaypic2), "1"],
                        [(Blockly.Msg.QH_displaypic3), "2"],
                        [(Blockly.Msg.QH_displaypic4), "3"],
                        [(Blockly.Msg.QH_displaypic5), "4"],
                        [(Blockly.Msg.QH_displaypic6), "5"],
                        [(Blockly.Msg.QH_displaypic7), "6"],
                        [(Blockly.Msg.QH_displaypic8), "7"],
                        [(Blockly.Msg.QH_displaypic9), "16"]
                    ]
                }],
                "tooltip": "内存图片全屏显示",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //页面跳转
    Blockly.Blocks.qdp_zkpdisplay_page = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_page,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        [(Blockly.Msg.QH_displaypage1), "1"],
                        [(Blockly.Msg.QH_displaypage2), "2"],
                        [(Blockly.Msg.QH_displaypage3), "3"],
                        [(Blockly.Msg.QH_displaypage4), "4"],
                        [(Blockly.Msg.QH_displaypage5), "5"],
                        [(Blockly.Msg.QH_displaypage6), "6"],
                        [(Blockly.Msg.QH_displaypage7), "10"],
                        [(Blockly.Msg.QH_displaypage8), "8"],
                        [(Blockly.Msg.QH_displaypage9), "19"]
                    ]
                }],
                "tooltip": "跳转的指定的页面",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //画圆
    Blockly.Blocks.qdp_zkpdisplay_drawinground = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_drawinground,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        [(Blockly.Msg.QH_displaysolidround), "cirs"],
                        [(Blockly.Msg.QH_displayhollowround), "cir"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'input_value',
                    name: 'num2'
                }, {
                    type: 'input_value',
                    name: 'num3'
                }, {
                    type: 'input_value',
                    name: 'num4'
                }],
                "tooltip": "画圆工具，在屏上显示，设置中心点(X最大320,Y最大240)及半径颜色，可选择实心或空心",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //画线矩形区域填充
    Blockly.Blocks.qdp_zkpdisplay_function1 = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_function1,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pin2',
                    options: [
                        [(Blockly.Msg.QH_displayfunction1line), "line"],
                        [(Blockly.Msg.QH_displayfunction1draw), "draw"],
                        [(Blockly.Msg.QH_displayfunction1fill), "fill"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'input_value',
                    name: 'num2'
                }, {
                    type: 'input_value',
                    name: 'num3'
                }, {
                    type: 'input_value',
                    name: 'num4'
                }, {
                    type: 'input_value',
                    name: 'num5'
                }],
                "tooltip": "画图工具，设置起点和终点/对角坐标的坐标值(X最大320,Y最大240)",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //文字信息
    Blockly.Blocks.qdp_zkpdisplay_TEXT = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_TEXT,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pinn',
                    options: [
                        [(Blockly.Msg.QH_displaybackcolor3), "3"],
                        [(Blockly.Msg.QH_displaybackcolor0), "0"],
                        [(Blockly.Msg.QH_displaybackcolor1), "1"],
                        [(Blockly.Msg.QH_displaybackcolor2), "2"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'input_value',
                    name: 'num2'
                }, {
                    type: 'input_value',
                    name: 'num3'
                }, {
                    type: 'input_value',
                    name: 'num4'
                }, {
                    type: 'input_value',
                    name: 'num5'
                }, {
                    type: 'input_value',
                    name: 'num6'
                }, {
                    type: 'input_value',
                    name: 'text3'
                }],
                "tooltip": "在屏幕上指定的区域显示文字，XY为起始点，WH是区域的长和高",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //文字信息
    Blockly.Blocks.qdp_zkpdisplay_TEXT_CN = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_TEXT_CN,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'field_dropdown',
                    name: 'pinn',
                    options: [
                        [(Blockly.Msg.QH_displaybackcolor3), "3"],
                        [(Blockly.Msg.QH_displaybackcolor0), "0"],
                        [(Blockly.Msg.QH_displaybackcolor1), "1"],
                        [(Blockly.Msg.QH_displaybackcolor2), "2"]
                    ]
                }, {
                    type: 'input_value',
                    name: 'num1'
                }, {
                    type: 'input_value',
                    name: 'num2'
                }, {
                    type: 'input_value',
                    name: 'num3'
                }, {
                    type: 'input_value',
                    name: 'num4'
                }, {
                    type: 'input_value',
                    name: 'num5'
                }, {
                    type: 'input_value',
                    name: 'num6'
                }, {
                    type: 'input_value',
                    name: 'text3'
                }],
                "tooltip": "在屏幕上指定的区域显示文字，XY为起始点，WH是区域的长和高",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    //文字信息
    Blockly.Blocks.qdp_zkpdisplay_order = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_zkpdisplay_order,
                args0: [{
                    type: 'field_image',
                    src: QH_ZKP_ICO,
                    width: 30,
                    height: 30
                }],
                args1: [{
                    type: 'input_value',
                    name: 'text'
                }],
                "tooltip": "向屏幕发送测试指令，调试工程时用",
                colour: QH_ZKP_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    
    
    return Blockly;
}
exports = addBlocks;