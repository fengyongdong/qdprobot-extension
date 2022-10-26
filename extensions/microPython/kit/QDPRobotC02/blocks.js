/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#5874DC';
    const color_c02_serson = '#E06C78';
    const color_screen = '#FA9284';
    const QH_OTHER_COLOR = '#cbc668';

    const QH_RGB_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMTY4MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMDUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgMTAyNGEyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzM0wyNzcuMzMzMzMzIDkyNi4xNjUzMzNWMTAwMi42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS00Mi42NjY2NjYgMHYtMTI3Ljg3MlY3NDYuNjY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjU2IDcyNS4zMzMzMzNoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0cy0zOC4yNzIgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNoLTEyLjUwMTMzM2w5MS41NjI2NjYgOTEuNTYyNjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzg0IDEwMjR6IG0tMTA2LjY2NjY2Ny0xNzAuNjY2NjY3aDQyLjY2NjY2N2E0Mi43MDkzMzMgNDIuNzA5MzMzIDAgMCAwIDAtODUuMzMzMzMzaC00Mi42NjY2Njd2ODUuMzMzMzMzek03NDYuNjY2NjY3IDEwMjRINjgyLjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTI1NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDIxLjMzMzMzNC0yMS4zMzMzMzRoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0IDAgMjUuNDcyLTExLjIyMTMzMyA0OC4zNDEzMzMtMjguOTcwNjY3IDY0IDE3Ljc0OTMzMyAxNS42NTg2NjcgMjguOTcwNjY3IDM4LjUyOCAyOC45NzA2NjcgNjQgMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzMgODUuMzMzMzMzeiBtLTQyLjY2NjY2Ny00Mi42NjY2NjdoNDIuNjY2NjY3YTQyLjcwOTMzMyA0Mi43MDkzMzMgMCAwIDAgMC04NS4zMzMzMzNoLTQyLjY2NjY2N3Y4NS4zMzMzMzN6IG0wLTEyOGg0Mi42NjY2NjdhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCAwLTg1LjMzMzMzM2gtNDIuNjY2NjY3djg1LjMzMzMzM3pNNTMzLjMzMzMzMyAxMDI0Yy00Ny4wNjEzMzMgMC04NS4zMzMzMzMtMzguMjcyLTg1LjMzMzMzMy04NS4zMzMzMzN2LTEyOGMwLTQ3LjA2MTMzMyAzOC4yNzItODUuMzMzMzMzIDg1LjMzMzMzMy04NS4zMzMzMzRzODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzQgODUuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtNDIuNjY2NjY3IDAgNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMC04NS4zMzMzMzMgMHYxMjhhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCA4NS4zMzMzMzMgMEg1NTQuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjdoNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzM0IDIxLjMzMzMzM3YyMS4zMzMzMzRjMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzQgODUuMzMzMzMzek0zODQgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTMjU0LjYzNDY2NyAyMTMuMzMzMzMzIDM4NCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNTEzLjM2NTMzMyA2ODIuNjY2NjY3IDM4NCA2ODIuNjY2NjY3ek0zODQgMjU2Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzI3OC4xNDQgNjQwIDM4NCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzQ4OS44NTYgMjU2IDM4NCAyNTZ6IiBwLWlkPSIyMDA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDAgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTNTEwLjYzNDY2NyAyMTMuMzMzMzMzIDY0MCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNzY5LjM2NTMzMyA2ODIuNjY2NjY3IDY0MCA2ODIuNjY2NjY3eiBtMC00MjYuNjY2NjY3Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzUzNC4xNDQgNjQwIDY0MCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzc0NS44NTYgMjU2IDY0MCAyNTZ6IiBwLWlkPSIyMDA1MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDY5LjMzMzMzM2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjZTMzgyLjYzNDY2NyAwIDUxMiAwczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNjQxLjM2NTMzMyA0NjkuMzMzMzMzIDUxMiA0NjkuMzMzMzMzeiBtMC00MjYuNjY2NjY2QzQwNi4xNDQgNDIuNjY2NjY3IDMyMCAxMjguODEwNjY3IDMyMCAyMzQuNjY2NjY3UzQwNi4xNDQgNDI2LjY2NjY2NyA1MTIgNDI2LjY2NjY2N3MxOTItODYuMTQ0IDE5Mi0xOTJTNjE3Ljg1NiA0Mi42NjY2NjcgNTEyIDQyLjY2NjY2N3oiIHAtaWQ9IjIwMDU0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";

    const QH_MOTOR_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMzA1NDE5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MjEuNiAzMzIuOGgtNTEuMmMtNi42IDAtMTMgMC42LTE5LjMgMS44LTIwLjctMjguNy01NC41LTUzLTgzLjEtNTNINTEyVjEyOGMwLTI4LjMtMjIuOS01MS4yLTUxLjItNTEuMmgtMjU2Yy0yOC4zIDAtNTEuMiAyMi45LTUxLjIgNTEuMnYxNTMuNmMtMjcuNSAwLTU5LjggMjIuNC04MC42IDQ5LjctNS4xLTEuNS0xMC41LTIuMy0xNi4xLTIuM0MyNS41IDMyOC45IDAgMzU0LjQgMCAzODUuOHYzNDkuOWMwIDMxLjQgMjUuNSA1Ni45IDU2LjkgNTYuOSAzLjUgMCA2LjgtMC4yIDkuOC0wLjcgMTguMyAzMi42IDUwLjEgNjIuNSA3OS42IDYyLjVoMi41bC00Ni40IDkyLjdoNzY4bC01MS4yLTEwMi40aC0yLjFjNC40LTIuNCA4LjYtNS4yIDEyLjctOC40IDEyLjUgNS40IDI2LjIgOC40IDQwLjYgOC40aDUxLjJjNTYuNiAwIDEwMi40LTQ1LjggMTAyLjQtMTAyLjRWNDM1LjJjMC01Ni42LTQ1LjgtMTAyLjQtMTAyLjQtMTAyLjR6TTQwOS42IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yIDIyLjktNTEuMiA1MS4yLTUxLjJ6TTI1NiAxMjhjMjguMyAwIDUxLjIgMjIuOSA1MS4yIDUxLjJzLTIyLjkgNTEuMi01MS4yIDUxLjItNTEuMi0yMi45LTUxLjItNTEuMlMyMjcuNyAxMjggMjU2IDEyOHogbTUxMiA2NjUuNkgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZWNjQwSDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OFYzODR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjkyOCI+PC9wYXRoPjwvc3ZnPg==";

    const xxqrIconUrl = 'data:image/png;base64,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';

    const QH_C02_TOUCH_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNTczMDMxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1MTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg5NS43ODM1MTkgMzgzLjkwNzIyMmExMjUuNDA5NjkzIDEyNS40MDk2OTMgMCAwIDAtNjIuNzA0ODQ2IDE3LjA2MjU0NEExMjcuOTY5MDc0IDEyNy45NjkwNzQgMCAwIDAgNzI1LjE1ODA4NyAzNDEuMjUwODY0YTEyNS40MDk2OTMgMTI1LjQwOTY5MyAwIDAgMC02Mi43MDQ4NDcgMTcuMDYyNTQ0QTEyNy45NjkwNzQgMTI3Ljk2OTA3NCAwIDAgMCA1MTEuODc2Mjk3IDMwNi4yNzI2NTFWMTI3Ljk2OTA3NGExMjcuOTY5MDc0IDEyNy45NjkwNzQgMCAwIDAtMjU1LjkzODE0OSAwdjQwOS4wNzQ0NzRsLTI4LjU3OTc2LTI5LjAwNjMyNEExMzEuODA4MTQ2IDEzMS44MDgxNDYgMCAwIDAgMTMzLjA4NzgzNyA0NjkuMjE5OTM5IDEzMy4wODc4MzcgMTMzLjA4NzgzNyAwIDAgMCAwIDYwMi4zMDc3NzYgMjM2LjMxNjIyNCAyMzYuMzE2MjI0IDAgMCAwIDY5LjEwMzMgNzY3LjgxNDQ0NWwxNTEuODU2NjM1IDE1MS40MzAwNzEgMzkuNjcwNDEzIDc5LjM0MDgyNkE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwIDI5OC41OTQ1MDYgMTAyMy43NTI1OTNhMzkuNjcwNDEzIDM5LjY3MDQxMyAwIDAgMCAxOS4xOTUzNjEtNC42OTIxOTkgNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCAxOC43Njg3OTgtNTcuMTU5NTJsLTQyLjY1NjM1OC04NS4zMTI3MTZhNDYuOTIxOTk0IDQ2LjkyMTk5NCAwIDAgMC03LjY3ODE0NS0xMS4wOTA2NTNMMTI3Ljk2OTA3NCA3MDguOTQ4NjcxYTE0OS4yOTcyNTMgMTQ5LjI5NzI1MyAwIDAgMS00Mi42NTYzNTgtMTA2LjY0MDg5NSA0Ny43NzUxMjEgNDcuNzc1MTIxIDAgMCAxIDgxLjQ3MzY0NC0zMy42OTg1MjNsMTAxLjUyMjEzMiAxMDEuNTIyMTMyYTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAgNDYuNDk1NDMgOC45NTc4MzVBNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCAzNDEuMjUwODY0IDYzOS44NDUzNzFWMTI3Ljk2OTA3NGE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAxIDg1LjMxMjcxNiAwdjQ2OS4yMTk5MzlhNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCA4NS4zMTI3MTcgMHYtMTcwLjYyNTQzM2E0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAxIDg1LjMxMjcxNiAwdjE3MC42MjU0MzNhNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCA4NS4zMTI3MTYgMHYtMTI3Ljk2OTA3NGE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAxIDg1LjMxMjcxNiAwdjEyNy45NjkwNzRhNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCA4NS4zMTI3MTYgMHYtODUuMzEyNzE2YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDEgODUuMzEyNzE2IDB2MjYzLjE4OTcyOWEyNDYuOTgwMzEzIDI0Ni45ODAzMTMgMCAwIDEtNzIuOTQyMzcyIDE3NS43NDQxOTUgNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCAwIDYwLjU3MjAyOCA0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwIDYwLjU3MjAyOCAwQTMzMS44NjY0NjYgMzMxLjg2NjQ2NiAwIDAgMCAxMDIzLjc1MjU5MyA3NzUuMDY2MDI2VjUxMS44NzYyOTdhMTI3Ljk2OTA3NCAxMjcuOTY5MDc0IDAgMCAwLTEyNy45NjkwNzQtMTI3Ljk2OTA3NXoiIHAtaWQ9IjM1MTIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTUxLjQzMDA3MSAzMDMuMjg2NzA2bC04NS4zMTI3MTYgNDIuNjU2MzU4YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAtMTguNzY4Nzk4IDU3LjE1OTUyQTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAgODUuMzEyNzE2IDQyNi41NjM1OGEzOS42NzA0MTMgMzkuNjcwNDEzIDAgMCAwIDE5LjE5NTM2MS00LjY5MjE5OWw4NS4zMTI3MTYtNDIuNjU2MzU4YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAxIDAtMzguMzkwNzIyLTc1LjkyODMxN3pNNjYuMTE3MzU1IDgwLjYyMDUxN2w4NS4zMTI3MTYgNDIuNjU2MzU4QTM5LjY3MDQxMyAzOS42NzA0MTMgMCAwIDAgMTcwLjYyNTQzMiAxMjcuOTY5MDc0YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAgMzcuOTY0MTU5LTIzLjQ2MDk5NyA0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwLTE4Ljc2ODc5OC01Ny4xNTk1MmwtODUuMzEyNzE2LTQyLjY1NjM1OGE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwLTM4LjM5MDcyMiA3NS45MjgzMTh6TTQyLjY1NjM1OCAyNTUuOTM4MTQ4aDg1LjMxMjcxNmE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwIDAtODUuMzEyNzE2SDQyLjY1NjM1OGE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwIDAgODUuMzEyNzE2ek01OTcuMTg5MDEzIDEyNy45NjkwNzRhMzkuNjcwNDEzIDM5LjY3MDQxMyAwIDAgMCAxOS4xOTUzNjEtNC42OTIxOTlsODUuMzEyNzE2LTQyLjY1NjM1OGE0Mi42NTYzNTggNDIuNjU2MzU4IDAgMCAwLTM4LjM5MDcyMi03NS45MjgzMThsLTg1LjMxMjcxNiA0Mi42NTYzNThhNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMC0xOC43Njg3OTggNTcuMTU5NTJBNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCA1OTcuMTg5MDEzIDEyNy45NjkwNzR6TTU5Ny4xODkwMTMgMjEzLjI4MTc5YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAgNDIuNjU2MzU4IDQyLjY1NjM1OGg4NS4zMTI3MTZhNDIuNjU2MzU4IDQyLjY1NjM1OCAwIDAgMCAwLTg1LjMxMjcxNmgtODUuMzEyNzE2YTQyLjY1NjM1OCA0Mi42NTYzNTggMCAwIDAtNDIuNjU2MzU4IDQyLjY1NjM1OHoiIHAtaWQ9IjM1MTMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=';

    const QH_Button_ICO ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzEzMTg2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxOTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2OCA1MTguNGMtMy4yLTYuNC02LjQtOS42LTEyLjgtMTYtMy4yLTMuMi05LjYtNi40LTEyLjgtOS42IDMuMi0zLjIgNi40LTMuMiA2LjQtNi40IDMuMi0zLjIgMy4yLTYuNCA2LjQtOS42IDAtMy4yIDMuMi02LjQgMy4yLTEyLjh2LTEyLjhjMC05LjYtMy4yLTE5LjItNi40LTI4LjgtMy4yLTkuNi05LjYtMTYtMTIuOC0yMi40LTYuNC02LjQtMTIuOC05LjYtMTkuMi0xMi44LTYuNC0zLjItMTYtMy4yLTIyLjQtMy4ySDIyNHYyNTIuOGg4MGM5LjYgMCAxOS4yLTMuMiAyOC44LTYuNCA5LjYtMy4yIDE2LTkuNiAyMi40LTE2IDYuNC02LjQgMTIuOC0xNiAxNi0yNS42IDMuMi05LjYgNi40LTE5LjIgNi40LTMyIDAtNi40IDAtMTYtMy4yLTIyLjRzLTMuMi0xMi44LTYuNC0xNnogbS05Ni04OS42aDE2YzYuNCAwIDEyLjggMy4yIDE2IDYuNCA2LjQgMy4yIDYuNCA5LjYgNi40IDE5LjJzLTMuMiAxNi02LjQgMTkuMmMtMy4yIDYuNC05LjYgNi40LTE2IDYuNGgtMTZ2LTUxLjJ6IG01NC40IDE0NGMtMy4yIDMuMi0zLjIgNi40LTYuNCA5LjYtMy4yIDMuMi02LjQgMy4yLTkuNiA2LjQtMy4yIDAtNi40IDMuMi0xMi44IDMuMkgyNzJ2LTY0aDI1LjZjOS42IDAgMTYgMy4yIDIyLjQgOS42IDYuNCA2LjQgOS42IDEyLjggOS42IDI1LjYgMCAwLTMuMiA2LjQtMy4yIDkuNnpNNzQ4LjggNDgwdjQ4Yy02LjQtNi40LTkuNi0xNi0xNi0yNS42LTYuNC05LjYtMTIuOC0xNi0xOS4yLTIyLjRMNjQwIDM4NGgtNDEuNnYyNTIuOGg1MS4ydi0xNjBsMTkuMiAyOC44YzYuNCA5LjYgMTIuOCAxOS4yIDIyLjQgMjguOGw4My4yIDEwOC44SDgwMHYtMjU2aC01MS4yVjQ4MHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjUxOTciPjwvcGF0aD48cGF0aCBkPSJNODk2IDIyNEgxMjhjLTM1LjIgMC02NCAyOC44LTY0IDY0djQ0OGMwIDM1LjIgMjguOCA2NCA2NCA2NGg3NjhjMzUuMiAwIDY0LTI4LjggNjQtNjRWMjg4YzAtMzUuMi0yOC44LTY0LTY0LTY0eiBtMCA0ODBjMCAxOS4yLTEyLjggMzItMzIgMzJIMTYwYy0xOS4yIDAtMzItMTIuOC0zMi0zMlYzMjBjMC0xOS4yIDEyLjgtMzIgMzItMzJoNzA0YzE5LjIgMCAzMiAxMi44IDMyIDMydjM4NHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjUxOTgiPjwvcGF0aD48cGF0aCBkPSJNMzkzLjYgNDMyaDY0djIwNC44SDUxMlY0MzJoNjR2LTQ4SDM5My42eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNTE5OSI+PC9wYXRoPjwvc3ZnPg==';

    const QH_Line_follower_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxOTEzNjY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyOTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgzNC40IDc0MWMtNDAuNCAwLTc0LjkgMjUuNi04OCA2MS41SDMzMy4zYy00Ni43IDAtOTAuNS0xNC4zLTEyMy4yLTQwLjMtMzAuNi0yNC4yLTQ3LjQtNTUuNy00Ny40LTg4LjRzMTYuOC02NC4yIDQ3LjQtODguNGMzMi44LTI2IDc2LjUtNDAuMyAxMjMuMi00MC4zaDguMXYwLjFoMzUyLjFjMTI5LjQgMCAyMzQuNy04Ni41IDIzNC43LTE5Mi43IDAtMTA2LjMtMTA1LjMtMTkyLjctMjM0LjctMTkyLjdIMjc5LjZjLTEzLjEtMzYtNDcuNS02MS42LTg4LTYxLjYtNTEuNyAwLTkzLjYgNDEuOS05My42IDkzLjZzNDEuOSA5My42IDkzLjYgOTMuNmM0MC41IDAgNzQuOS0yNS43IDg4LTYxLjZoNDEzLjljNDYuNyAwIDkwLjUgMTQuMyAxMjMuMiA0MC4zIDMwLjYgMjQuMiA0Ny40IDU1LjcgNDcuNCA4OC40cy0xNi44IDY0LjItNDcuNCA4OC40Yy0zMi44IDI2LTc2LjUgNDAuMy0xMjMuMiA0MC4zaC04LjF2LTAuMUgzMzMuM2MtMTI5LjQgMC0yMzQuNyA4Ni41LTIzNC43IDE5Mi43czEwNS4zIDE5Mi43IDIzNC43IDE5Mi43aDQxM2MxMyAzNiA0Ny41IDYxLjcgODggNjEuNyA1MS43IDAgOTMuNi00MS45IDkzLjYtOTMuNlM4ODYuMSA3NDEgODM0LjQgNzQxeiIgcC1pZD0iOTI5NSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==';

    const QH_lightSensor_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDAzMTc4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNTEybS0yOTkuNTIgMGEyOTkuNTIgMjk5LjUyIDAgMSAwIDU5OS4wNCAwIDI5OS41MiAyOTkuNTIgMCAxIDAtNTk5LjA0IDBaIiBwLWlkPSIxMDQxNiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik00ODYuNCAwaDQ4LjY0djEyNS40NEg0ODYuNHpNMjM0Ljg1NDQgNzguOTUwNGw0Mi4xMTItMjQuMzIgNjIuNzIgMTA4LjY0NjQtNDIuMTEyIDI0LjMyek01OC4wNjA4IDI3NS44MTQ0bDI0LjMyLTQyLjEzNzYgMTA4LjY0NjQgNjIuNzItMjQuMzIgNDIuMTM3NnpNMCA0ODYuNGgxMjUuNDR2NDguNjRIMHpNNTUuODU5MiA3NDYuNzI2NGwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NDY0IDYyLjcyek0yMzUuNjczNiA5NDAuNDE2bDYyLjcyLTEwOC42MjA4IDQyLjEzNzYgMjQuMzItNjIuNzIgMTA4LjYyMDh6TTQ4Ni40IDg5Nmg0OC42NHYxMjUuNDRINDg2LjR6TTY4My44NTI4IDg1Ny4wMTEybDQyLjEzNzYtMjQuMzIgNjIuNzIgMTA4LjYyMDgtNDIuMTM3NiAyNC4zMnpNODMzLjg2ODggNzI0LjM3NzZsMjQuMzItNDIuMTM3NiAxMDguNjIwOCA2Mi43NDU2LTI0LjMyIDQyLjEzNzZ6TTg5NiA0ODYuNGgxMjUuNDR2NDguNjRIODk2ek04MzMuODk0NCAyOTcuNjUxMmwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NzIgNjIuNzJ6TTY4NC4yODggMTY0LjYwOGw2Mi43Mi0xMDguNjIwOCA0Mi4xMTIgMjQuMzItNjIuNzIgMTA4LjY0NjR6IiBwLWlkPSIxMDQxNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";

        const QH_sound_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDU0NDgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMzQ1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01ODguNzgwNzYyIDMuMTAwMjM3Yy04LjUzMTE5Ni01LjY4NzQ2NC0xOS45MDYxMjQtMi44NDM3MzItMjguNDM3MzE5IDIuODQzNzMxbC0zNDEuMjQ3ODMyIDIzOC44NzM0ODNINTEuMzE1NDI3Yy0xNC4yMTg2NiAwLTI1LjU5MzU4NyAxMS4zNzQ5MjgtMjUuNTkzNTg3IDIyLjc0OTg1NXY0ODkuMTIxODkyYzAgMTQuMjE4NjYgMTEuMzc0OTI4IDIyLjc0OTg1NSAyNS41OTM1ODcgMjIuNzQ5ODU2aDE2Ny43ODAxODRsMzQ0LjA5MTU2NCAyMzguODczNDgyYzUuNjg3NDY0IDIuODQzNzMyIDguNTMxMTk2IDUuNjg3NDY0IDE0LjIxODY1OSA1LjY4NzQ2NCAyLjg0MzczMiAwIDguNTMxMTk2IDAgMTEuMzc0OTI4LTIuODQzNzMyIDguNTMxMTk2LTIuODQzNzMyIDE0LjIxODY2LTExLjM3NDkyOCAxNC4yMTg2Ni0xOS45MDYxMjNWMjMuMDA2MzZjMC04LjUzMTE5Ni01LjY4NzQ2NC0xNy4wNjIzOTItMTQuMjE4NjYtMTkuOTA2MTIzek04OTUuOTAzODExIDIyNy43NTUwNTljLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDMgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA3YzQ4LjM0MzQ0MyA1NC4wMzA5MDcgNzkuNjI0NDk0IDEzMC44MTE2NjkgNzkuNjI0NDk0IDIxOC45NjczNTlzLTMxLjI4MTA1MSAxNjIuMDkyNzItNzkuNjI0NDk0IDIxOC45NjczNThjLTE0LjIxODY2IDE0LjIxODY2LTE0LjIxODY2IDM2Ljk2ODUxNSAwIDU0LjAzMDkwNyAxNC4yMTg2NiAxNC4yMTg2NiAzNC4xMjQ3ODMgMTQuMjE4NjYgNDguMzQzNDQzIDAgNjIuNTYyMTAyLTY4LjI0OTU2NiAxMDIuMzc0MzUtMTY0LjkzNjQ1MiAxMDIuMzc0MzQ5LTI3Mi45OTgyNjVzLTM5LjgxMjI0Ny0yMDQuNzQ4Njk5LTEwMi4zNzQzNDktMjcyLjk5ODI2NnogbS0xMDguMDYxODE0IDEwOC4wNjE4MTRjLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDIgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA2YzI1LjU5MzU4NyAyNS41OTM1ODcgNDIuNjU1OTc5IDY1LjQwNTgzNCA0Mi42NTU5NzkgMTA4LjA2MTgxNHMtMTQuMjE4NjYgNzkuNjI0NDk0LTQyLjY1NTk3OSAxMDguMDYxODEzYy0xNC4yMTg2NiAxNC4yMTg2Ni0xNC4yMTg2NiAzNi45Njg1MTUgMCA1NC4wMzA5MDcgMTQuMjE4NjYgMTQuMjE4NjYgMzQuMTI0NzgzIDE0LjIxODY2IDQ4LjM0MzQ0MiAwIDM5LjgxMjI0Ny00Mi42NTU5NzkgNjIuNTYyMTAyLTk5LjUzMDYxOCA2Mi41NjIxMDMtMTYyLjA5Mjcycy0yMi43NDk4NTUtMTI1LjEyNDIwNS02Mi41NjIxMDMtMTYyLjA5MjcyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTEzNDYiPjwvcGF0aD48L3N2Zz4=";

        const QH_Potentiometer_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMzkwNDk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNjIxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05NjYuNDk1IDY1OC43NjNoLTE1MS40OTljLTExLjM2Mi01My45Ny01OC43MDYtOTMuNzM4LTExNS41MTgtOTMuNzM4aC0zNzUuOTA0Yy01Ni44MTMgMC0xMDQuMTU1IDQwLjcxNi0xMTUuNTE4IDkzLjczOGgtMTUwLjU1Yy0xMy4yNTcgMC0yMy42NzEgMTAuNDE1LTIzLjY3MSAyMy42NzFzMTAuNDE1IDIzLjY3MSAyMy42NzEgMjMuNjcxaDE1MS40OTljMTEuMzYyIDUzLjk3IDU4LjcwNiA5My43MzggMTE1LjUxOCA5My43MzhoMzc1LjkwNGM1Ni44MTMgMCAxMDQuMTU1LTQwLjcxNiAxMTUuNTE4LTkzLjczOGgxNTEuNDk5YzEzLjI1NyAwIDIzLjY3MS0xMC40MTUgMjMuNjcxLTIzLjY3MXMtMTEuMzYyLTIzLjY3MS0yNC42MTgtMjMuNjcxek00NzUuMDcxIDc1Mi41MDNsLTYwLjU5OS0xNDEuMDg0aDEzNC40NTRsNjAuNTk5IDE0MS4wODRoLTEzNC40NTR6TTI1My41MDcgNjgyLjQzNGMwLTM4LjgyMiAzMS4yNDYtNzAuMDY4IDcwLjA2OC03MC4wNjhoMzguODIybDYwLjU5OSAxNDEuMDg0aC05OS40MmMtMzguODIyLTAuOTQ2LTcwLjA2OC0zMy4xNC03MC4wNjgtNzEuMDE0ek03MDAuNDI3IDc1Mi41MDNoLTM4LjgyMmwtNjAuNTk5LTE0MS4wODRoOTkuNDJjMzguODIyIDAgNzAuMDY4IDMxLjI0NiA3MC4wNjggNzAuMDY4cy0zMS4yNDYgNzEuMDE0LTcwLjA2OCA3MS4wMTR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIxMTYyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNDMuNjcgNTc4LjI4MWMxMy4yNTcgMCAyMy42NzEtMTAuNDE1IDIzLjY3MS0yMy42NzF2LTIyNy4yNDdjMC0zMS4yNDYgMjUuNTY2LTU1Ljg2NSA1NS44NjUtNTUuODY1aDMwMi45OTZjMzEuMjQ2IDAgNTUuODY1IDI1LjU2NiA1NS44NjUgNTUuODY1djU4LjcwNmwtMzUuOTgtMzUuOThjLTkuNDY5LTkuNDY5LTI0LjYxOC05LjQ2OS0zMy4xNCAwLTkuNDY5IDkuNDY5LTkuNDY5IDI0LjYxOCAwIDMzLjE0bDc1Ljc0OCA3NS43NDhjNC43MzQgNC43MzQgMTAuNDE1IDYuNjI3IDE3LjA0NCA2LjYyN2gzLjc4OGM1LjY4MiAwIDEyLjMwOS0xLjg5NCAxNy4wNDQtNi42MjdsNzQuODAyLTc0LjgwMmM5LjQ2OS05LjQ2OSA5LjQ2OS0yNC42MTggMC0zMy4xNC05LjQ2OS05LjQ2OS0yNC42MTgtOS40NjktMzMuMTQgMGwtMzUuOTggMzUuOTh2LTU5LjY1MmMwLTU2LjgxMy00Ni4zOTctMTAzLjIwNy0xMDMuMjA3LTEwMy4yMDdoLTMwMi45OTZjLTU2LjgxMyAwLTEwMy4yMDcgNDYuMzk3LTEwMy4yMDcgMTAzLjIwN3YyMjcuMjQ3Yy0yLjgzOSAxMy4yNTcgNy41NzQgMjMuNjcxIDIwLjgzMSAyMy42NzF6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIxMTYyMyI+PC9wYXRoPjwvc3ZnPg==";

        const QH_Soilmoisture_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyNTkwNzAwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzNDYwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0yMjQuMTkyIDU1Ny4xMmEyNi44OCAyNi44OCAwIDAgMS0xMi4xNi0yLjU2IDMyIDMyIDAgMCAxLTEwLjU2LTYuNzIgMzIgMzIgMCAwIDEgMC00NS40NCAzMiAzMiAwIDAgMSAxMC41Ni02LjcyIDI5LjQ0IDI5LjQ0IDAgMCAxIDI0LjMyIDBjMy44NCAxLjYgNy40MjQgMy45MDQgMTAuNTYgNi43MmEzMiAzMiAwIDAgMSAwIDQ1LjQ0IDM3LjQ0IDM3LjQ0IDAgMCAxLTEwLjU2IDYuNzIgMjYuODggMjYuODggMCAwIDEtMTIuMTYgMi41NnogbTMyLTEyOGgtMzJhMzIgMzIgMCAwIDEgMC02NGgzMmEzMiAzMiAwIDEgMSAwIDY0eiBtMzItMTI4aC02NGEzMiAzMiAwIDAgMSAwLTY0aDY0YTMyIDMyIDAgMSAxIDAgNjR6IG0tNjQgMzg0YTMyIDMyIDAgMCAxLTEyLjE2LTIuNTYgMzIgMzIgMCAwIDEtMTAuNTYtNi43MiAzMiAzMiAwIDEgMSA0NS40NCAwIDM3LjQ0IDM3LjQ0IDAgMCAxLTEwLjU2IDYuNzIgMzIgMzIgMCAwIDEtMTIuMTYgMi41NnogbTMyIDEyOGgtMzJhMzIgMzIgMCAwIDEgMC02NGgzMmEzMiAzMiAwIDEgMSAwIDY0eiBtNTQ0LTI1NmgtNi40bC01Ljc2LTEuOTJhMjQuMzIgMjQuMzIgMCAwIDEtNS43Ni0yLjg4bC00LjgtMy44NGEzMiAzMiAwIDEgMSA0NS40NCAwbC00LjggMy44NGEyNC4zMiAyNC4zMiAwIDAgMS01Ljc2IDIuODggMTkuODQgMTkuODQgMCAwIDEtNi4wOCAxLjkyaC02LjA4eiBtMC0xMjhoLTMyYTMyIDMyIDAgMCAxIDAtNjRoMzJhMzIgMzIgMCAxIDEgMCA2NHogbTAtMTI4aC02NGEzMiAzMiAwIDAgMSAwLTY0aDY0YTMyIDMyIDAgMSAxIDAgNjR6IG0wIDM4NGEzMy42IDMzLjYgMCAwIDEtMjIuNzItOS4yOCAzNi44IDM2LjggMCAwIDEtNi43Mi0xMC41NiAyNi41NiAyNi41NiAwIDAgMS0yLjU2LTEyLjE2IDMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAwIDEtMi41NiAxMi4xNiAzNi44IDM2LjggMCAwIDEtNi43MiAxMC41NiAzMy42IDMzLjYgMCAwIDEtMjIuNzIgOS4yOHogbTAgMTI4aC0zMmEzMiAzMiAwIDAgMSAwLTY0aDMyYTMyIDMyIDAgMSAxIDAgNjR6IG0tMjg4LTExNC44OGEzMiAzMiAwIDAgMSAwLTY0IDMyIDMyIDAgMCAwIDMyLTMyIDMyIDMyIDAgMSAxIDY0IDAgOTYgOTYgMCAwIDEtOTYgOTZ6IG0tMC42NC0zOTAuNzJjMzIgNDAuOTYgNzQuNTYgOTQuMDggMTA5LjEyIDEzOC41NmwyLjI0IDMuMmM3NS4yIDk2IDU1LjA0IDE5OC4wOCA0LjQ4IDI1MC41NmExNTguMDggMTU4LjA4IDAgMCAxLTIyOS40NCAwYy03Mi03NC44OC00OS42LTE3OS44NCA0LjgtMjUwLjg4bDIzLjY4LTMyYzI4LjE2LTM2LjggNTguODgtNzcuNDQgODUuMTItMTEwLjR2MC45NnogbTAtODMuMmEzMiAzMiAwIDAgMC0yNC45NiAxMS44NGMtMzcuNDQgNDQuNDgtOTIuOCAxMTguMDgtMTM0LjQgMTcyLjgtODEuMjggMTA2LjU2LTg4LjMyIDI0Mi4yNCAwIDMzNC4wOGEyMjIuMDggMjIyLjA4IDAgMCAwIDMyMS42IDBjODguMzItOTEuODQgNzguNzItMjMyLjY0IDAtMzM0LjA4LTQzLjg0LTU2LjMyLTEwMC4xNi0xMjgtMTM3LjI4LTE3My4xMmEzMiAzMiAwIDAgMC0yNC45Ni0xMS44NHYwLjMyeiIgcC1pZD0iMTM0NjEiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

        const QH_LED_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyODk5Mzc2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MTMzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04MTAuNjY2NjY3IDIxNi4wNjRsLTQ4LjEyOC00OC4xMjgtODYuNjk4NjY3IDg2LjY5ODY2NyA0OC4xMjggNDguMTI4IDg2LjY5ODY2Ny04Ni42OTg2Njd6TTM0OC41MDEzMzMgMjU0LjYzNDY2N0wyNjEuODAyNjY3IDE2Ny45MzYgMjEzLjY3NDY2NyAyMTYuMDY0IDMwMC4zNzMzMzMgMzAyLjc2MjY2N2w0OC4xMjgtNDguMTI4ek01NDYuMTMzMzMzIDc4LjE2NTMzM2gtNjguMjY2NjY2djEyMi41Mzg2NjdoNjguMjY2NjY2Vjc4LjE2NTMzM3ogbTIzMS4wODI2NjcgMzUzLjk2MjY2N3Y2OC4yNjY2NjdoMTIyLjUzODY2N3YtNjguMjY2NjY3aC0xMjIuNTM4NjY3eiBtLTc3LjQ4MjY2NyAyOC42NzJjMC0xMDMuNDI0LTg0LjMwOTMzMy0xODcuNzMzMzMzLTE4Ny43MzMzMzMtMTg3LjczMzMzM3MtMTg3LjczMzMzMyA4NC4zMDkzMzMtMTg3LjczMzMzMyAxODcuNzMzMzMzVjc1MC45MzMzMzNIMjA0Ljh2NjguMjY2NjY3aDE3MC42NjY2Njd2MTM2LjUzMzMzM2g2OC4yNjY2NjZ2LTEzNi41MzMzMzNoMTM2LjUzMzMzNHYxMzYuNTMzMzMzaDY4LjI2NjY2NnYtMTM2LjUzMzMzM2gxNzAuNjY2NjY3di02OC4yNjY2NjdoLTExOS40NjY2Njd2LTI5MC4xMzMzMzN6IG0tNjguMjY2NjY2IDI5MC4xMzMzMzNoLTIzOC45MzMzMzR2LTI5MC4xMzMzMzNjMC02NS44NzczMzMgNTMuNTg5MzMzLTExOS40NjY2NjcgMTE5LjQ2NjY2Ny0xMTkuNDY2NjY3czExOS40NjY2NjcgNTMuNTg5MzMzIDExOS40NjY2NjcgMTE5LjQ2NjY2N1Y3NTAuOTMzMzMzek0yNDkuNTE0NjY3IDQzMi4xMjhIMTIzLjkwNHY2OC4yNjY2NjdIMjQ5LjE3MzMzM3YtNjguMjY2NjY3eiIgcC1pZD0iMTYxMzQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    var qdprobotESP32_LR_PIN_Output_Dropdown = [
    ['.P3-L-21（SDA）','21'],
    ['.P3-R-22（SCL）','22'],
    ['.P4-L-16','16'],
    ['.P4-R-17（RGB）','17'],
    ['.P5-L-18','18'],
    ['.P5-R-5','5'],
    ['.P6-L-23','6'],
    ['.P6-R-19','19'],
    ['.P7-L-15（touch）','15'],
    ['.P7-R-2','2'],
    ['.P8-L-27（touch）','27'],
    ['.P8-R-14（touch）','14'],
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P10-L-25','25'],
    ['.P10-R-26','26']
    ];
    var qdprobotESP32_R_PIN_Output_Dropdown = [
    ['.P3-R-22（SCL）','22'],
    ['.P4-R-17（RGB）','17'],
    ['.P5-R-5','15'],
    ['.P6-R-19','19'],
    ['.P7-R-2','2'],
    ['.P8-R-14（touch）','14'],
    ['.P9-R-13（touch）','13'],
    ['.P10-R-26','26'],
    ['P3-L-21（SDA）','21'],
    ['P4-L-16','16'],
    ['P5-L-18','18'],
    ['P6-L-23','23'],
    ['P7-L-15（touch）','15'],
    ['P8-L-27（touch）','27'],
    ['P9-L-12（touch）','12'],
    ['P10-L-25','25']
    ];
    var qdprobotESP32_Touch_PIN_Input_Dropdown = [
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P8-R-14（touch）','14'],
    ['.P7-L-15（touch）','15'],
    ['.P8-L-27（touch）','27'],
    ['.P7-R-2（touch）','2']
    ];

     var qdprobotESP32_LR_PIN_Input_Dropdown = [
    ['.P1-L-36','36'],
    ['.P1-R-39','39'],
    ['.P2-L-34','34'],
    ['.P2-R-35','35'],
    ['.P3-L-21（SDA）','21'],
    ['.P3-R-22（SCL）','22'],
    ['.P4-L-16','16'],
    ['.P4-R-17（RGB）','17'],
    ['.P5-L-18','18'],
    ['.P5-R-5','5'],
    ['.P6-L-23','23'],
    ['.P6-R-19','19'],
    ['.P7-L-15（touch）','15'],
    ['.P7-R-2','2'],
    ['.P8-L-27（touch）','27'],
    ['.P8-R-14（touch）','14'],
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P10-L-25','25'],
    ['.P10-R-26','26']
    ];

    var qdprobotESP32_BOTH_PIN_Input_Dropdown = [
    ['.P1-36-39','36 39'],
    ['.P2-34-35','34 35'],
    ['.P3-21-22（IIC）','21 22'],
    ['.P4-16-17（RGB）','16 17'],
    ['.P5-18-5','18 5'],
    ['.P6-23-19','23 19'],
    ['.P7-15-2（touch)','15 2'],
    ['.P8-27-14（touch）','27 14'],
    ['.P9-12-13（touch）','12 13'],
    ['.P10-25-26','25 26']
    ];

    var qdprobotESP32_L2_PIN_Input_Dropdown = [
    ['.P1-L-36','36'],
    ['.P2-L-34','34'],
    ['.P7-L-15（touch）','15'],
    ['.P8-L-27（touch）','27'],
    ['.P9-L-12（touch）','12'],
    ['.P10-L-25','25'],
    ['P1-R-39','39'],
    ['P2-R-35','35'],
    ['P7-R-2','2'],
    ['P8-R-14（touch）','14'],
    ['P9-R-13（touch）','13'],
    ['P10-R-26','26']
    ];

    var qdprobotESP32_R2_PIN_Input_Dropdown = [
    ['.P1-R-39','39'],
    ['.P2-R-35','35'],
    ['.P7-R-2','2'],
    ['.P8-R-14（touch）','14'],
    ['.P9-R-13（touch）','13'],
    ['.P10-R-26','26'],
    ['P1-L-36','36'],
    ['P2-L-34','34'],
    ['P7-L-15（touch）','15'],
    ['P8-L-27（touch）','27'],
    ['P9-L-12（touch）','12'],
    ['P10-L-25','25']
    ];

    var qdprobotESP32_LR2_PIN_Input_Dropdown = [
    ['.P1-L-36','36'],
    ['.P1-R-39','39'],
    ['.P2-L-34','34'],
    ['.P2-R-35','35'],
    ['.P7-L-15（touch）','15'],
    ['.P7-R-2','2'],
    ['.P8-L-27（touch）','27'],
    ['.P8-R-14（touch）','14'],
    ['.P9-L-12（touch）','12'],
    ['.P9-R-13（touch）','13'],
    ['.P10-L-25','25'],
    ['.P10-R-26','26']
    ];

    var qdprobotESP32_L_PIN_Output_Dropdown = [
    ['.P3-L-21（SDA）','21'],
    ['.P4-L-16','16'],
    ['.P5-L-18','18'],
    ['.P6-L-23','23'],
    ['.P7-L-15（touch）','15'],
    ['.P8-L-27（touch）','27'],
    ['.P9-L-12（touch）','12'],
    ['.P10-L-25','25'],
    ['P1-R-39','39'],
    ['P2-R-35','35'],
    ['P3-R-22（SCL）','22'],
    ['P4-R-17（RGB）','17'],
    ['P5-R-5','5'],
    ['P6-R-19','19'],
    ['P7-R-2','2'],
    ['P8-R-14（touch）','14'],
    ['P9-R-13（touch）','13'],
    ['P10-R-26','26']
    ];

    //ESP32触控
    Blockly.Blocks.PY_time_ticks = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PY_time_ticks,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.PY_time_ms), "ticks_ms"],
                                [(Blockly.Msg.PY_time_us), "ticks_us"]]
                    }
                               
                ],
                "tooltip": "获取系统运行时间",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

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

    //ESP32触控
    Blockly.Blocks.PY_QDP_inout_esp32_touchRead = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_QDP_inout_esp32_touchRead,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_C02_TOUCH_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'touch_pin',
                        options:qdprobotESP32_Touch_PIN_Input_Dropdown
                    }
                               
                ],
                "tooltip": "获取某管脚触摸传感器的值",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //按钮
    Blockly.Blocks.PY_qdp_esp32_buttonl = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_buttonl,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Button_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:qdprobotESP32_LR_PIN_Input_Dropdown
                    }             
                ],
                "tooltip": "按钮输入",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //左右按钮
    Blockly.Blocks.PY_qdp_esp32_buttonx = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_buttonx,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Button_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin2',
                        options:qdprobotESP32_BOTH_PIN_Input_Dropdown
                    }             
                ],
                "tooltip": "常开按钮开关，按下为输入，\n按左或右相同效果",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //巡线
    Blockly.Blocks.PY_qdp_esp32_grayscale = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_grayscale,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Line_follower_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_BOTH_PIN_Input_Dropdown
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options: [["ON", "1"],["OFF", "0"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN3',
                        options: [["ON", "1"],["OFF", "0"]]
                    }
                ],
                "tooltip": "左右感应器对白色物体约2CM时有输入(亮灯),\n相反对黑色物体不作反应，通常用来区分白黑",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //光线
    Blockly.Blocks.PY_qdp_esp32_lightSensor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_lightSensor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_lightSensor_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_L2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "对光线强弱的感应，返回对应的模拟数值，\n亮数值变大，暗数值变小",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //声音
    Blockly.Blocks.PY_qdp_esp32_sound = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_sound,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_sound_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "对声音大小的感应，返回对应的模拟数值，\n周边噪声大值变大，相反变小",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //电位器
    Blockly.Blocks.PY_qdp_esp32_potentiometer = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_potentiometer,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Potentiometer_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "读取电位器的模拟阻值",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //土壤
    Blockly.Blocks.PY_qdp_esp32_Soilmoisture = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_Soilmoisture,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Soilmoisture_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "土壤湿度传感器的模拟数值",
                colour: color_c02_serson,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //high low
    Blockly.Blocks.qdp_inout_highlow = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BOOL',
                        options: [
                        ['HIGH', "1"], 
                        ['LOW', "0"]
                        ]
                    }
                ],
                "tooltip": "状态选单 高/低",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //LED灯
    Blockly.Blocks.qdp_esp32_ledlight = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_ledlight,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'STAT'
                    }
                ],
                "tooltip": "开启LED灯",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //读取LED灯状态
    Blockly.Blocks.qdp_esp32_read_ledlight = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_read_ledlight,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "读取LED灯状态",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };
    //LED灯亮度
    Blockly.Blocks.PY_qdp_esp32_ledlight3 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_ledlight3,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_LR_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'ledn'
                    }
                ],
                "tooltip": "LED灯亮度调节",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    // RGB设置颜色
    Blockly.Blocks.qdp_c02_py_rgb_set_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_c02_py_rgb_set_color,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },
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
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                "tooltip": "RGB对应灯号颜色的值，灯号从0开始,总灯数跟模块灯数相同，灯号与灯数相同时为全部同时工作\nRGB对应各颜色分量，最大255，0为关",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    // RGB设置生效
    Blockly.Blocks.qdp_c02_py_rgb_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_c02_py_rgb_write,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    }
                ],
                "tooltip": "RGB颜色发送执行",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    var qdprobotESP32_MOTOR_PIN_Output_Dropdown = [
    ['.P3-21-22（IIC）','21 22'],
    ['.P4-16-17（RGB）','16 17'],
    ['.P5-18-5','18 5'],
    ['.P6-23-19','23 19'],
    ['.P7-15-2（touch)','15 2'],
    ['.P8-27-14（touch）','27 14'],
    ['.P9-12-13（touch）','12 13'],
    ['.P10-25-26','25 26'],
    ['4-17(mini M1)','4 17'],
    ['32-33(mini M2)','32 33']
    ];

    var qdprobotESP32_MotorNum=[["M1", "1"],
    ["M2", "2"],
    ["M3", "3"],
    ["M4", "4"]];

    //直流电机
    Blockly.Blocks.PY_qdp_esp32_motor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_motor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MotorPin',
                        options: qdprobotESP32_MotorNum
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_MOTOR_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                "tooltip": "5~8V直流电机在M1-M2口上的控制，旋转速度通过0~255来控制，\n负数为反转，0为停止，工作时间通过延时指令来控制\n当电机受外部机构卡死时，会内部保护停机，这时重启电源即可\n 一定要开启电源开关，不然电机不转.",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //舵机180
    Blockly.Blocks.PY_qdp_esp32_servomotor_180 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_servomotor_180,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },                   
                    {
                        type: 'input_value',
                        name: 'num1'
                    }
                ],
                "tooltip": "舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //舵机180
    Blockly.Blocks.PY_qdp_esp32_servomotor_360 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_esp32_servomotor_360,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: qdprobotESP32_L_PIN_Output_Dropdown
                    },                   
                    {
                        type: 'input_value',
                        name: 'num1'
                    }
                ],
                "tooltip": "舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
 /*
    //删除
    Blockly.Blocks.python_del = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.python_del,
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mydict"
                    }
                ],
                "tooltip": "删除:几乎能删除所有对象",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
   

    //try_except
    Blockly.Blocks.try_except_else_finally = {
        init: function() {
            this.jsonInit({
              message0: "try-except-else-finally", // Statement
              message1: "try%1", // Statement
              message2: "except%1", // Statement
              message3: "else%1", // Statement
              message4: "finally%1", // Statement
              args0: [],
              args1: [
                {
                  "type": "input_statement",
                  "name": "DO1"
                }
              ],
              args2: [
                {
                  "type": "input_statement",
                  "name": "DO2"
                }
              ],
              args3: [
                {
                  "type": "input_statement",
                  "name": "DO3"
                }
              ],
              args4: [
                {
                  "type": "input_statement",
                  "name": "DO4"
                }
              ],
              "tooltip": "首先，执行 try 子句\n如果没有异常发生，忽略 except 子句，try 子句执行后结束\n如果在执行 try 子句的过程中发生了异常，那么 try 子句余下的部分将被忽略。在except可以能过err变量获取出错的信息.\nelse 子句将在 try 子句没有发生任何异常的时候执行。\ntry-finally 语句无论是否发生异常都将执行最后的代码。",
              colour: color_screen,
              colourSecondary: '#ffffff',
              colourTertiary: '#ffffff',
              extensions: ["shape_statement"]
            });
      }
    };

    //变量名
    Blockly.Blocks.PY_QH_variables_get = {
        init: function () {
            this.jsonInit({
                message0: '变量:%1',
                args0: [
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    } 
                ],
                "tooltip": "变量名",
                colour:QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }     
    };

    //是否在内
    Blockly.Blocks.python_in = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.python_in,
                args0: [
                    {
                      "type": "input_value",
                      "name": "val"
                    },
                    {
                      "type": "field_input",
                      "name": "name",
                      "text": "mytup"
                    }
                ],
                "tooltip": "",
                colour: QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //字符串
    Blockly.Blocks.PY_QH_string = {
        init: function () {
            this.jsonInit({
                message0: '文本常量 “ %1 ”',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "字符串",
                colour:QH_OTHER_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
            
        }     
    };
*/
    return Blockly;
}

exports = addBlocks;


