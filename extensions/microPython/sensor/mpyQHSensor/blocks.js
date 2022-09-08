/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_sensor_color = '#ff5757';
   
    const QH_SENSOR_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMzcwNTQ1OTUzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjYgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIuMDYyNSIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTUxMy4wNjY2NjcgNjQwYy03Mi41MzMzMzMgMC0xMjgtNTUuNDY2NjY3LTEyOC0xMjhzNTUuNDY2NjY3LTEyOCAxMjgtMTI4IDEyOCA1NS40NjY2NjcgMTI4IDEyOC01NS40NjY2NjcgMTI4LTEyOCAxMjh6IG0wLTE3MC42NjY2NjdjLTI1LjYgMC00Mi42NjY2NjcgMTcuMDY2NjY3LTQyLjY2NjY2NyA0Mi42NjY2NjdzMTcuMDY2NjY3IDQyLjY2NjY2NyA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2Ny0xNy4wNjY2NjcgNDIuNjY2NjY2LTQyLjY2NjY2Ny0xNy4wNjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2Njd6TTMxNi44IDc1MC45MzMzMzNjLTEyLjggMC0yMS4zMzMzMzMtNC4yNjY2NjctMjkuODY2NjY3LTEyLjgtMTIzLjczMzMzMy0xMjMuNzMzMzMzLTEyMy43MzMzMzMtMzI4LjUzMzMzMyAwLTQ1Mi4yNjY2NjYgMTcuMDY2NjY3LTE3LjA2NjY2NyA0Mi42NjY2NjctMTcuMDY2NjY3IDU5LjczMzMzNCAwczE3LjA2NjY2NyA0Mi42NjY2NjcgMCA1OS43MzMzMzNjLTg5LjYgODkuNi04OS42IDIzOC45MzMzMzMgMCAzMzIuOCAxNy4wNjY2NjcgMTcuMDY2NjY3IDE3LjA2NjY2NyA0Mi42NjY2NjcgMCA1OS43MzMzMzMtOC41MzMzMzMgOC41MzMzMzMtMTcuMDY2NjY3IDEyLjgtMjkuODY2NjY3IDEyLjh6TTcwOS4zMzMzMzMgNzUwLjkzMzMzM2MtMTIuOCAwLTIxLjMzMzMzMy00LjI2NjY2Ny0yOS44NjY2NjYtMTIuOC0xNy4wNjY2NjctMTcuMDY2NjY3LTE3LjA2NjY2Ny00Mi42NjY2NjcgMC01OS43MzMzMzMgODkuNi04OS42IDg5LjYtMjM4LjkzMzMzMyAwLTMzMi44LTE3LjA2NjY2Ny0xNy4wNjY2NjctMTcuMDY2NjY3LTQyLjY2NjY2NyAwLTU5LjczMzMzM3M0Mi42NjY2NjctMTcuMDY2NjY3IDU5LjczMzMzMyAwYzEyMy43MzMzMzMgMTIzLjczMzMzMyAxMjMuNzMzMzMzIDMyOC41MzMzMzMgMCA0NTIuMjY2NjY2LTguNTMzMzMzIDguNTMzMzMzLTE3LjA2NjY2NyAxMi44LTI5Ljg2NjY2NyAxMi44eiIgcC1pZD0iMTQwNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xODAuMjY2NjY3IDg4Ny40NjY2NjdjLTEyLjggMC0yMS4zMzMzMzMtNC4yNjY2NjctMjkuODY2NjY3LTEyLjgtMjAwLjUzMzMzMy0yMDAuNTMzMzMzLTIwMC41MzMzMzMtNTI0LjggMC03MjUuMzMzMzM0IDE3LjA2NjY2Ny0xNy4wNjY2NjcgNDIuNjY2NjY3LTE3LjA2NjY2NyA1OS43MzMzMzMgMHMxNy4wNjY2NjcgNDIuNjY2NjY3IDAgNTkuNzMzMzM0QzQzLjczMzMzMyAzNzUuNDY2NjY3IDQzLjczMzMzMyA2NDguNTMzMzMzIDIxMC4xMzMzMzMgODE0LjkzMzMzM2MxNy4wNjY2NjcgMTcuMDY2NjY3IDE3LjA2NjY2NyA0Mi42NjY2NjcgMCA1OS43MzMzMzQtOC41MzMzMzMgOC41MzMzMzMtMTcuMDY2NjY3IDEyLjgtMjkuODY2NjY2IDEyLjh6TTg0NS44NjY2NjcgODg3LjQ2NjY2N2MtMTIuOCAwLTIxLjMzMzMzMy00LjI2NjY2Ny0yOS44NjY2NjctMTIuOC0xNy4wNjY2NjctMTcuMDY2NjY3LTE3LjA2NjY2Ny00Mi42NjY2NjcgMC01OS43MzMzMzRDOTgyLjQgNjQ4LjUzMzMzMyA5ODIuNCAzNzkuNzMzMzMzIDgxNiAyMTMuMzMzMzMzYy0xNy4wNjY2NjctMTcuMDY2NjY3LTE3LjA2NjY2Ny00Mi42NjY2NjcgMC01OS43MzMzMzNzNDIuNjY2NjY3LTE3LjA2NjY2NyA1OS43MzMzMzMgMGMyMDAuNTMzMzMzIDIwMC41MzMzMzMgMjAwLjUzMzMzMyA1MjQuOCAwIDcyNS4zMzMzMzMtOC41MzMzMzMgNC4yNjY2NjctMjEuMzMzMzMzIDguNTMzMzMzLTI5Ljg2NjY2NiA4LjUzMzMzNHoiIHAtaWQ9IjE0MDYiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    const QH_UltraSonicDistanceSensor_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzc0NDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjY3IDM3MC4xNnYyODMuNjhoODk0LjY2VjM3MC4xNnogbTgyOS4wOCAyMTguMTJoLTc2My41VjQzNS43MmgxMjguMTN2NTQuNDdIMzI0di01NC40N2g4MS42djk4LjA5aDY1LjU4di05OC4wOWg4MS42NHY1NC40N2g2NS41OHYtNTQuNDdINzAwdjk4LjA5aDY1LjU4di05OC4wOWgxMjguMTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2MzQ1Ij48L3BhdGg+PC9zdmc+";

     const QH_dht11_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyNjU3NzQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDU4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00NzEuNzUgNjIwLjE4N2MtMTEuNjUxLTkuMTU0LTE3LjQ3Ni0yMS42MzctMTcuNDc2LTM1Ljc4NXYtNDU0LjM4M2MwLTY2LjU3Ni01NC4wOTQtMTIwLjY2OS0xMjAuNjY5LTEyMC42NjlzLTEyMC42NjkgNTQuMDk0LTEyMC42NjkgMTIwLjY2OXY0NTQuMzgzYzAgMTQuMTQ3LTYuNjU3IDI3LjQ2Mi0xOC4zMDggMzYuNjE4LTU0LjkyNSA0NC45MzktODQuODg1IDExMC42ODMtODEuNTU2IDE4Mi4yNTMgNC45OTQgMTEwLjY4MyA5NS43MDMgMjAyLjIyNSAyMDYuMzg2IDIwOS43MTUgNC45OTQgMCA5LjE1NCAwLjgzMiAxNC4xNDcgMC44MzIgNTYuNTkgMCAxMDkuODUyLTIwLjgwNSAxNTAuNjI5LTU5LjkxOSA0NC4xMDctNDEuNjEgNjkuOTA1LTk5Ljg2MyA2OS45MDUtMTYwLjYxNSAwLTY5LjA3My0yOS45NTgtMTMxLjQ4OC04Mi4zODctMTczLjA5OHpNNDU1LjkzOCA5MjIuMjc2Yy0zNi42MTggMzQuMTIxLTg0LjA1MiA1MS41OTctMTMzLjk4NSA0OC4yNjgtODkuODc3LTUuODI1LTE2My4xMTEtNzkuODkxLTE2Ny4yNzMtMTY5Ljc2OS0yLjQ5Ni01Ny40MjMgMjEuNjM3LTExMS41MTUgNjUuNzQ0LTE0Ny4zIDIxLjYzNy0xNy40NzYgMzMuMjg3LTQyLjQ0MyAzMy4yODctNjkuMDczdi00NTQuMzgzYzAtNDMuMjc1IDM1Ljc4NS03OS4wNTkgNzkuMDU5LTc5LjA1OXM3OS4wNTkgMzUuNzg1IDc5LjA1OSA3OS4wNTl2NDU0LjM4M2MwIDI1Ljc5OCAxMi40ODIgNTAuNzY0IDMzLjI4NyA2Ny40MDkgNDIuNDQzIDM0LjEyMSA2Ni41NzYgODQuODg1IDY2LjU3NiAxMzguOTc4IDAuODMyIDUwLjc2NC0xOS4xNDEgOTcuMzY3LTU1Ljc1OCAxMzEuNDg4ek04ODkuNTE1IDMxMy45MzZsLTEzOS44MS0yNDguODI5LTEzNy4zMTQgMjQzLjgzNi0wLjgzMiAwLjgzMmMtMTAuODE5IDIxLjYzNy0xNS44MTEgNDQuMTA3LTE1LjgxMSA2OC4yNCAwIDg0Ljg4NSA2OS4wNzMgMTUzLjk1NyAxNTMuOTU3IDE1My45NTdzMTUzLjk1Ny02OS4wNzMgMTUzLjk1Ny0xNTMuOTU3YzAtMjQuMTMzLTQuOTk0LTQ0LjEwNy0xNC4xNDctNjQuMDgwek03NDkuNzA1IDQ5MC4zNjNjLTYxLjU4MyAwLTExMi4zNDgtNTAuNzY0LTExMi4zNDgtMTEyLjM0OCAwLTE3LjQ3NiA0LjE2MS0zMy4yODcgMTEuNjUxLTQ5LjFsMTAwLjY5Ny0xNzguOTI0IDEwMC42OTcgMTc4LjkyNCAxLjY2NSAzLjMyOWM3LjQ5IDE0Ljk4IDkuOTg2IDI4LjI5NSA5Ljk4NiA0Ni42MDQgMCA2MS41ODMtNTAuNzY0IDExMS41MTUtMTEyLjM0OCAxMTEuNTE1eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTQwNTkiPjwvcGF0aD48cGF0aCBkPSJNNzQ5LjcwNSA0NDcuMDg5Yy0zNi42MTggMC02Ni41NzYtMjkuOTU4LTY2LjU3Ni02Ni41NzYgMC00Ljk5NC0zLjMyOS04LjMyMi04LjMyMi04LjMyMnMtOC4zMjIgMy4zMjktOC4zMjIgOC4zMjJjMCA0NS43NzIgMzcuNDQ5IDgzLjIyIDgzLjIyIDgzLjIyIDQuOTk0IDAgOC4zMjItMy4zMjkgOC4zMjItOC4zMjJzLTQuMTYxLTguMzIyLTguMzIyLTguMzIyek0zOTkuMzQ4IDY3NS45NDNjLTIwLjgwNS0xMS42NTEtMzIuNDU3LTM0LjEyMS0zMi40NTctNTguMjU0di0yNTMuODIyYzAtMTguMzA4LTE0Ljk4LTMzLjI4Ny0zMy4yODctMzMuMjg3cy0zMy4yODcgMTQuOTgtMzMuMjg3IDMzLjI4N3YyNTUuNDg3YzAgMjMuMzAxLTEyLjQ4MiA0NS43NzItMzMuMjg3IDU3LjQyMy00MS42MSAyNC4xMzMtNjkuMDczIDY5LjA3My02Ni41NzYgMTIxLjUwMiAzLjMyOSA2OC4yNCA1OS4wODYgMTIzLjk5OSAxMjYuNDk1IDEyNy4zMjggNzYuNTYyIDMuMzI5IDEzOS44MS01Ny40MjMgMTM5LjgxLTEzMy4xNTMgMC01MC43NjQtMjcuNDYyLTk0LjAzOC02Ny40MDktMTE2LjUwOXoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjE0MDYwIj48L3BhdGg+PC9zdmc+";

    const QH_MPU6050_ICO =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyNzQ0NDA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MTc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NzguOTMzMzMzIDUwMy40NjY2NjdjLTQuMjY2NjY3LTE1My42LTEwNC41MzMzMzMtMjkyLjI2NjY2Ny0yNTYtMzQxLjMzMzMzNGw0LjI2NjY2Ny0xNy4wNjY2NjZjMi4xMzMzMzMtOC41MzMzMzMtMi4xMzMzMzMtMTkuMi0xMi44LTIxLjMzMzMzNC04LjUzMzMzMy0yLjEzMzMzMy0xOS4yIDIuMTMzMzMzLTIxLjMzMzMzMyAxMi44bC00LjI2NjY2NyAxNy4wNjY2NjdDNDM1LjIgMTE5LjQ2NjY2NyAyNzcuMzMzMzMzIDE4OS44NjY2NjcgMTk4LjQgMzIwYy01OS43MzMzMzMgMTQuOTMzMzMzLTk4LjEzMzMzMyA0MC41MzMzMzMtMTA4LjggNzguOTMzMzMzLTEwLjY2NjY2NyAzOC40IDEwLjY2NjY2NyA4MS4wNjY2NjcgNTUuNDY2NjY3IDEyMS42IDQuMjY2NjY3IDE1My42IDEwNC41MzMzMzMgMjkyLjI2NjY2NyAyNTYgMzQxLjMzMzMzNGwtNC4yNjY2NjcgMTcuMDY2NjY2Yy0yLjEzMzMzMyA4LjUzMzMzMyAyLjEzMzMzMyAxOS4yIDEyLjggMjEuMzMzMzM0IDguNTMzMzMzIDIuMTMzMzMzIDE5LjItMi4xMzMzMzMgMjEuMzMzMzMzLTEyLjhsNC4yNjY2NjctMTcuMDY2NjY3YzE1NS43MzMzMzMgMzQuMTMzMzMzIDMxMS40NjY2NjctMzYuMjY2NjY3IDM5Mi41MzMzMzMtMTY4LjUzMzMzMyA1OS43MzMzMzMtMTQuOTMzMzMzIDk4LjEzMzMzMy00MC41MzMzMzMgMTA4LjgtNzguOTMzMzM0IDguNTMzMzMzLTM0LjEzMzMzMy0xMi44LTc2LjgtNTcuNi0xMTkuNDY2NjY2ek02MTQuNCAxOTYuMjY2NjY3YzEyNS44NjY2NjcgNDAuNTMzMzMzIDIxMS4yIDE1MS40NjY2NjcgMjI4LjI2NjY2NyAyNzUuMi01MS4yLTM4LjQtMTIxLjYtNzQuNjY2NjY3LTIwMC41MzMzMzQtMTAyLjRMNjA4IDQ5MC42NjY2NjdjNDkuMDY2NjY3IDIxLjMzMzMzMyA3Ni44IDQ2LjkzMzMzMyA3Mi41MzMzMzMgNjYuMTMzMzMzLTYuNCAyNS42LTc4LjkzMzMzMyAyOS44NjY2NjctMTY2LjQgMTAuNjY2NjY3bDEwMC4yNjY2NjctMzcxLjJ6IG0tMzQuMTMzMzMzLTguNTMzMzM0bC0xMDAuMjY2NjY3IDM3MS4yYy04NS4zMzMzMzMtMjUuNi0xNDUuMDY2NjY3LTY0LTEzOC42NjY2NjctOTEuNzMzMzMzIDQuMjY2NjY3LTE5LjIgNDIuNjY2NjY3LTI1LjYgOTYtMjEuMzMzMzMzbDMyLTEyMS42Yy04NS4zMzMzMzMtMTQuOTMzMzMzLTE2Mi4xMzMzMzMtMTkuMi0yMjYuMTMzMzMzLTEwLjY2NjY2NyA3OC45MzMzMzMtMTAyLjQgMjA5LjA2NjY2Ny0xNTMuNiAzMzcuMDY2NjY3LTEyNS44NjY2Njd6IG0tMTcwLjY2NjY2NyA2NDBjLTEyNS44NjY2NjctNDAuNTMzMzMzLTIxMS4yLTE1MS40NjY2NjctMjI4LjI2NjY2Ny0yNzUuMiA2NCA0OS4wNjY2NjcgMTU3Ljg2NjY2NyA5My44NjY2NjcgMjY4LjggMTIzLjczMzMzNGwtNDAuNTMzMzMzIDE1MS40NjY2NjZ6IG0zNC4xMzMzMzMgOC41MzMzMzRsNDAuNTMzMzM0LTE1MS40NjY2NjdjMTEwLjkzMzMzMyAyNy43MzMzMzMgMjEzLjMzMzMzMyAzNi4yNjY2NjcgMjk0LjQgMjUuNi03Ni44IDEwMi40LTIwNi45MzMzMzMgMTUzLjYtMzM0LjkzMzMzNCAxMjUuODY2NjY3eiIgcC1pZD0iMTUxNzgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";


    const k210_pins = [['P0','0'],['P1','1'],['P2','2'],['P3','3'],['P4','4'],['P5','5'],['P6','6'],['P7','7'],['P8','8'],['P9','9']];
    //dht11
    Blockly.Blocks.PY_qdp_k210_sensor_dht11 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_dht11,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_dht11_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:k210_pins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.k210_temp,'0'],[Blockly.Msg.k210_humi,'1'],[Blockly.Msg.k210_temp_humi,'2']]
                    }
                ],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //超声波
    Blockly.Blocks.PY_qdp_k210_sensor_HCSR04 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_HCSR04,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_UltraSonicDistanceSensor_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options:k210_pins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options:k210_pins
                    }
                ],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //初始化IIC传感器
    Blockly.Blocks.PY_qdp_k210_sensor_use_i2c_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_use_i2c_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SENSOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[["MPU9250", "MPU9250"],["BMP280", "BMP280"],["SHT20", "SHT20"],["ADXL345","ADXL345"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options:k210_pins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options:k210_pins
                    },
                    { 
                        type: "input_value", 
                        name: "freq" 
                    }                    
                ],
                "tooltip": "IIC传感器初始化",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_mpu9250_get_acceleration = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_mpu9250_get_acceleration,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[["x", "x"],["y", "y"],["z", "z"],["(x,y,z)","values"]]
                    }                    
                ],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_mpu9250_get_magnetic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_mpu9250_get_magnetic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[["x", "x"],["y", "y"],["z", "z"],["(x,y,z)","values"]]
                    }                    
                ],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_mpu9250_get_gyro = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_mpu9250_get_gyro,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[["x", "x"],["y", "y"],["z", "z"],["(x,y,z)","values"]]
                    }                    
                ],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_mpu9250_temperature = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_mpu9250_temperature,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [],
                "tooltip": "dht11",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_bmp = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_bmp,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[[Blockly.Msg.get_BMP_temperature, "get_BMP_temperature"],[Blockly.Msg.get_BMP_pressure, "get_BMP_pressure"]]
                    }                    
                ],
                "tooltip": "bmp",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.PY_qdp_k210_sensor_sht = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_sht,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[[Blockly.Msg.get_SHT_temperature, "get_SHT_temperature"],[Blockly.Msg.get_SHT_relative_humidity, "get_SHT_relative_humidity"]]
                    }                    
                ],
                "tooltip": "sht",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

     Blockly.Blocks.PY_qdp_k210_sensor_adxl345_get_acceleration = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_sensor_adxl345_get_acceleration,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                     {
                        type: 'field_dropdown',
                        name: 'key',
                        options:[["x", "x"],["y", "y"],["z", "z"],["(x,y,z)","values"]]
                    }                    
                ],
                "tooltip": "sht",
                colour: QH_sensor_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;


