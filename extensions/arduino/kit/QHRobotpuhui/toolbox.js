/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    const QH_Sensor_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNODM2LjQxNiAxODcuNzU0NjY3QTQ1Ny4yMzczMzMgNDU3LjIzNzMzMyAwIDAgMSA5NzAuNjY2NjY3IDUxMmE0NTcuMTczMzMzIDQ1Ny4xNzMzMzMgMCAwIDEtMTI3LjMxNzMzNCAzMTcuMTYyNjY3bC02LjY1NiA2LjgwNTMzMy00NS4zMTItNDUuMjI2NjY3QTM5My4yNTg2NjcgMzkzLjI1ODY2NyAwIDAgMCA5MDYuNjY2NjY3IDUxMmEzOTMuMTczMzMzIDM5My4xNzMzMzMgMCAwIDAtMTA5LjEyLTI3Mi40MjY2NjdsLTYuNC02LjU3MDY2NiA0NS4yNjkzMzMtNDUuMjI2NjY3ek0xODcuOTY4IDE4Ny4zOTJsNDUuMjI2NjY3IDQ1LjI5MDY2N0EzOTMuMjU4NjY3IDM5My4yNTg2NjcgMCAwIDAgMTE3LjMzMzMzMyA1MTJhMzkzLjE3MzMzMyAzOTMuMTczMzMzIDAgMCAwIDEwOC44IDI3Mi4wODUzMzNsNi4zNzg2NjcgNi41NDkzMzQtNDUuMzMzMzMzIDQ1LjIwNTMzM0E0NTcuMjM3MzMzIDQ1Ny4yMzczMzMgMCAwIDEgNTMuMzMzMzMzIDUxMmMwLTEyMy40MTMzMzMgNDkuMDI0LTIzOS4xNDY2NjcgMTM0LjYxMzMzNC0zMjQuNjA4eiBtOTAuNTM4NjY3IDkwLjQ3NDY2N2w0NS4xODQgNDUuMzEyQTI2NS42ODUzMzMgMjY1LjY4NTMzMyAwIDAgMCAyNDUuMzMzMzMzIDUxMmMwIDY5LjU0NjY2NyAyNi42ODggMTM0Ljc0MTMzMyA3My42IDE4My45NTczMzNsNS4yOTA2NjcgNS4zOTczMzQtNDUuMDU2IDQ1LjQ0QTMyOS42ODUzMzMgMzI5LjY4NTMzMyAwIDAgMSAxODEuMzMzMzMzIDUxMmMwLTg5LjAyNCAzNS4zOTItMTcyLjUyMjY2NyA5Ny4xNzMzMzQtMjM0LjEzMzMzM3ogbTQ2Ny4zMjggMC4zMkEzMjkuNjY0IDMyOS42NjQgMCAwIDEgODQyLjY2NjY2NyA1MTJhMzI5LjYgMzI5LjYgMCAwIDEtOTEuMTU3MzM0IDIyNy45ODkzMzNsLTUuODg4IDYuMDM3MzM0LTQ1LjIyNjY2Ni00NS4zMTJBMjY1LjY4NTMzMyAyNjUuNjg1MzMzIDAgMCAwIDc3OC42NjY2NjcgNTEyYTI2NS42IDI2NS42IDAgMCAwLTcyLjg1MzMzNC0xODMuMTY4bC01LjI0OC01LjM3NiA0NS4yNjkzMzQtNDUuMjY5MzMzeiBtLTM3Ny41Nzg2NjcgOTAuOTQ0bDQ1LjM5NzMzMyA0NS4xMkExMzguMTEyIDEzOC4xMTIgMCAwIDAgMzczLjMzMzMzMyA1MTJjMCAzNS4yODUzMzMgMTMuMjA1MzMzIDY4LjM5NDY2NyAzNi41MDEzMzQgOTMuNzZsNC4yMjQgNC4zOTQ2NjctNDUuMjI2NjY3IDQ1LjMxMkEyMDIuMDkwNjY3IDIwMi4wOTA2NjcgMCAwIDEgMzA5LjMzMzMzMyA1MTJhMjAyLjA5MDY2NyAyMDIuMDkwNjY3IDAgMCAxIDU4LjkyMjY2Ny0xNDIuODY5MzMzeiBtMjg3LjM2LTAuMTI4QTIwMi4wOTA2NjcgMjAyLjA5MDY2NyAwIDAgMSA3MTQuNjY2NjY3IDUxMmEyMDIuMDI2NjY3IDIwMi4wMjY2NjcgMCAwIDEtNTQuMDE2IDEzNy43NDkzMzNsLTQuNzc4NjY3IDQuOTkyLTQ1LjQ0LTQ1LjA3NzMzM0ExMzguMDkwNjY3IDEzOC4wOTA2NjcgMCAwIDAgNjUwLjY2NjY2NyA1MTJhMTM4LjAyNjY2NyAxMzguMDI2NjY3IDAgMCAwLTM1Ljk4OTMzNC05My4xODRsLTQuNDE2LTQuNjUwNjY3IDQ1LjM1NDY2Ny00NS4xNjI2NjZ6TTUxMiA0MjYuNjY2NjY3YTg1LjMzMzMzMyA4NS4zMzMzMzMgMCAxIDEgMCAxNzAuNjY2NjY2IDg1LjMzMzMzMyA4NS4zMzMzMzMgMCAwIDEgMC0xNzAuNjY2NjY2eicgZmlsbD0nI0UwNkM3OCc+PC9wYXRoPjwvc3ZnPg==";
    const QH_Actuator_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J00yMTMuMzMzMzMzIDg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjYtNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjcgNDIuNjY2NjY2djE3MC42NjY2NjdIODUuMzMzMzMzYy0yMy40NjY2NjcgMC00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY3djIxMy4zMzMzMzNoMjU2VjI5OC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2N0gyMTMuMzMzMzMzVjg1LjMzMzMzM3ogbTE3MC42NjY2NjcgNTk3LjMzMzMzNGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjctNDIuNjY2NjY2di0xMzUuNjhjNDkuNDkzMzMzLTE3LjQ5MzMzMyA4NS4zMzMzMzMtNjQuNDI2NjY3IDg1LjMzMzMzMy0xMjAuMzJ2LTg1LjMzMzMzNEgzODR2ODUuMzMzMzM0eiBtLTM0MS4zMzMzMzMgMGMwIDU1LjQ2NjY2NyAzNS44NCAxMDIuNCA4NS4zMzMzMzMgMTIwLjMyVjkzOC42NjY2NjdjMCAyMy40NjY2NjcgMTkuMiA0Mi42NjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NnM0Mi42NjY2NjctMTkuMiA0Mi42NjY2NjYtNDIuNjY2NjY2di0xMzUuNjhDMjYyLjgyNjY2NyA3ODUuMDY2NjY3IDI5OC42NjY2NjcgNzM4LjEzMzMzMyAyOTguNjY2NjY3IDY4Mi42NjY2Njd2LTg1LjMzMzMzNEg0Mi42NjY2Njd2ODUuMzMzMzM0ek04OTYgMjU2Vjg1LjMzMzMzM2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY2cy00Mi42NjY2NjcgMTkuMi00Mi42NjY2NjYgNDIuNjY2NjY2djE3MC42NjY2NjdoLTQyLjY2NjY2N2MtMjMuNDY2NjY3IDAtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2N3YyMTMuMzMzMzMzaDI1NlYyOTguNjY2NjY3YzAtMjMuNDY2NjY3LTE5LjItNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2NjdoLTQyLjY2NjY2N3ogbS0zNDEuMzMzMzMzLTE3MC42NjY2NjdjMC0yMy40NjY2NjctMTkuMi00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2NnMtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY3IDQyLjY2NjY2NnYxNzAuNjY2NjY3aC00Mi42NjY2NjZjLTIzLjQ2NjY2NyAwLTQyLjY2NjY2NyAxOS4yLTQyLjY2NjY2NyA0Mi42NjY2Njd2MjEzLjMzMzMzM2gyNTZWMjk4LjY2NjY2N2MwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3aC00Mi42NjY2NjZWODUuMzMzMzMzeiBtMTcwLjY2NjY2NiA1OTcuMzMzMzM0YzAgNTUuNDY2NjY3IDM1Ljg0IDEwMi40IDg1LjMzMzMzNCAxMjAuMzJWOTM4LjY2NjY2N2MwIDIzLjQ2NjY2NyAxOS4yIDQyLjY2NjY2NyA0Mi42NjY2NjYgNDIuNjY2NjY2czQyLjY2NjY2Ny0xOS4yIDQyLjY2NjY2Ny00Mi42NjY2NjZ2LTEzNS42OGM0OS40OTMzMzMtMTcuNDkzMzMzIDg1LjMzMzMzMy02NC40MjY2NjcgODUuMzMzMzMzLTEyMC4zMnYtODUuMzMzMzM0aC0yNTZ2ODUuMzMzMzM0eicgZmlsbD0nIzU4NzREQyc+PC9wYXRoPjwvc3ZnPg==";
    const QH_COMMUNICATE_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNjc2Ljg2NCA2NjkuMDgxNmwzOS41MjY0IDQ2Ljg5OTJDNzg4LjI3NTIgNjU1LjM2IDgyOS40NCA1NjYuODg2NCA4MjkuNDQgNDczLjA4OGMwLTE3NS4xMDQtMTQyLjMzNi0zMTcuNDQtMzE3LjQ0LTMxNy40NFMxOTQuNTYgMjk3Ljk4NCAxOTQuNTYgNDczLjA4OGMwIDk0LjQxMjggNDEuNTc0NCAxODMuMjk2IDExNC4yNzg0IDI0My45MTY4bDM5LjMyMTYtNDcuMTA0Yy01OC41NzI4LTQ4Ljc0MjQtOTIuMTYtMTIwLjYyNzItOTIuMTYtMTk2LjgxMjggMC0xNDEuMTA3MiAxMTQuODkyOC0yNTYgMjU2LTI1NnMyNTYgMTE0Ljg5MjggMjU2IDI1NmMwIDc1Ljc3Ni0zMy4xNzc2IDE0Ny4wNDY0LTkxLjEzNiAxOTUuOTkzNnonIGZpbGw9JyMwMGE2YWMnPjwvcGF0aD48cGF0aCBkPSdNODQ1LjAwNDggMTQwLjA4MzJDNzU2LjEyMTYgNTAuOTk1MiA2MzcuNzQ3MiAyLjA0OCA1MTIgMi4wNDggMzg2LjI1MjggMi4wNDggMjY3Ljg3ODQgNTAuOTk1MiAxNzguOTk1MiAxNDAuMDgzMiA4OS45MDcyIDIyOC45NjY0IDQwLjk2IDM0Ny4zNDA4IDQwLjk2IDQ3My4wODhjMCA3NC45NTY4IDE2Ljk5ODQgMTQ2LjYzNjggNTAuNzkwNCAyMTIuOTkyIDMyLjE1MzYgNjMuMjgzMiA3OS4wNTI4IDExOS4zOTg0IDEzNS43ODI0IDE2Mi40MDY0bDM3LjA2ODgtNDguOTQ3MkMxNjEuNTg3MiA3MjEuNTEwNCAxMDIuNCA2MDIuMzE2OCAxMDIuNCA0NzMuMDg4YzAtMjI1Ljg5NDQgMTgzLjcwNTYtNDA5LjYgNDA5LjYtNDA5LjZzNDA5LjYgMTgzLjcwNTYgNDA5LjYgNDA5LjZjMCAxMjguMjA0OC01OC4zNjggMjQ2Ljc4NC0xNjAuMzU4NCAzMjUuMDE3NmwzNy40Nzg0IDQ4Ljc0MjRjNTYuMTE1Mi00My4wMDggMTAyLjQtOTkuMTIzMiAxMzQuMTQ0LTE2MS45OTY4IDMzLjE3NzYtNjUuOTQ1NiA1MC4xNzYtMTM3LjIxNiA1MC4xNzYtMjExLjc2MzIgMC0xMjUuNzQ3Mi00OC45NDcyLTI0NC4xMjE2LTEzOC4wMzUyLTMzMy4wMDQ4eicgZmlsbD0nIzAwYTZhYyc+PC9wYXRoPjxwYXRoIGQ9J001NjcuMjk2IDU5NC4xMjQ4YzQ1Ljg3NTItMjEuMDk0NCA3Ny44MjQtNjcuMzc5MiA3Ny44MjQtMTIxLjAzNjggMC03My4zMTg0LTU5LjgwMTYtMTMzLjEyLTEzMy4xMi0xMzMuMTJzLTEzMy4xMiA1OS44MDE2LTEzMy4xMiAxMzMuMTJjMCA1My42NTc2IDMxLjk0ODggOTkuOTQyNCA3Ny44MjQgMTIxLjAzNjhMMjMzLjY3NjggOTQ1LjM1NjhjLTEwLjAzNTIgMTUuNzY5Ni0xMC42NDk2IDM1LjYzNTItMS42Mzg0IDUyLjAxOTJzMjYuMjE0NCAyNi40MTkyIDQ0Ljg1MTIgMjYuNDE5Mmg0NzAuMDE2YzE4LjYzNjggMCAzNS44NC0xMC4yNCA0NC44NTEyLTI2LjQxOTJzOC4zOTY4LTM2LjI0OTYtMS42Mzg0LTUyLjAxOTJMNTY3LjI5NiA1OTQuMTI0OHpNNTEyIDQwMS40MDhjMzkuNTI2NCAwIDcxLjY4IDMyLjE1MzYgNzEuNjggNzEuNjhzLTMyLjE1MzYgNzEuNjgtNzEuNjggNzEuNjgtNzEuNjgtMzIuMTUzNi03MS42OC03MS42OCAzMi4xNTM2LTcxLjY4IDcxLjY4LTcxLjY4ek0yOTUuNzMxMiA5NjIuNTZMNTEyIDYyMS41NjggNzI4LjI2ODggOTYyLjU2SDI5NS43MzEyeicgZmlsbD0nIzAwYTZhYyc+PC9wYXRoPjwvc3ZnPg==";
    const QH_SMG_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNjAxLjExOTEwNSA4ODkuNzA3NDM0bC01Ni4wMTkxODUgNjQuNDYwNDMyLTIxLjU4OTEyOS0zNS4yOTk3NmMtNi4yOTI1NjYtOS4yMDg2MzMtMTAuNDg3NjEtMjEuNDg2ODExLTExLjM1NzMxNC0zNS4yNDg2MDItMC40MDkyNzMtNi4xMzkwODkgMC4yNTU3OTUtMTMuNzYxNzkxIDAuODY5NzA0LTIxLjQ4NjgxbDE0LjUyOTE3Ny0yMzEuNjQ4MjgyYzIuMDQ2MzYzLTIxLjQ4NjgxMSA2LjU5OTUyLTM4LjM2OTMwNSAxNi4wMTI3OS01MC41OTYzMjJsMzguODgwODk1LTQ5LjExMjcxIDM4LjY3NjI1OSA1My42NjU4NjctMjAuMDAzMTk3IDMwNS4yNjYxODd6IG0yOS43MjM0MjEtNDUyLjUwMTk5OGwtNDcuNDI0NDYgNTYuNzM1NDExLTIyLjUwOTk5Mi0zMi4xNzkwNTZjLTEwLjAyNzE3OC0xMy43NjE3OTEtMTYuODMxMzM1LTMyLjIzMDIxNi0xNy43NTIxOTktNDUuOTkyMDA3LTAuNDYwNDMyLTcuNjczODYxIDAuMDUxMTU5LTE2Ljg4MjQ5NCAwLjQ2MDQzMi0yNy42MjU4OTlsMTMuNzYxNzkxLTIwOC42MjY2OTljMS41MzQ3NzItMjkuMTYwNjcxIDYuMzk0ODg0LTQxLjM4NzY5IDIyLjA0OTU2LTYyLjg3NDVsMjguMDg2MzMxLTM5LjkwNDA3NyA0Mi44NzEzMDMgNjUuOTQ0MDQ1LTE5LjU0Mjc2NiAyOTQuNTIyNzgyeiBtMjEzLjk5ODQwMSA0NjMuMjk2NTYybDQ1LjU4MjczNCA3Mi4xMzQyOTMtMjMuMjI2MjE5IDI3LjYyNTg5OWMtMTUuNzU2OTk0IDE5Ljk1MjAzOC0yMi4zNTY1MTUgMjMuMDIxNTgzLTUxLjg3NTMgMjMuMDIxNTgzaC0xODkuNjk3ODQxYy0yOC4zOTMyODUgMC00MC4wNTc1NTQtNC42MDQzMTctNTEuNDY2MDI4LTIzLjAyMTU4M2wtMTcuNTk4NzIxLTI2LjA5MTEyNyA2MS4xMzUwOTItNzMuNjE3OTA2IDIyNy4xNDYyODMtMC4wNTExNTl6IG0yOS45NzkyMTctNDQ5LjQ4MzYxM2w0MS41NDExNjcgNjIuOTI1NjYtNTAuNjQ3NDgyIDU5LjgwNDk1NmgtMjI2LjAyMDc4M2wtNDIuNTEzMTktNTkuODU2MTE1IDUwLjQ0Mjg0Ni02Mi45MjU2NiAyMjcuMTk3NDQyIDAuMDUxMTU5eiBtLTIwNy41NTIzNTgtMzI4LjIzNjYxbC00NS4wNzExNDMtNjQuNDYwNDMyIDIyLjg2ODEwNS0zMi4yMzAyMTZjMTMuNTA1OTk1LTE5Ljk1MjAzOCAyMy4zMjg1MzctMjYuMDkxMTI3IDQyLjYxNTUwOC0yNi4wOTExMjdoMjA1LjU1NzE1NGMxOC4yMTI2MyAwIDI4LjgwMjU1OCA2LjEzOTA4OSA0MC4zMTMzNDkgMjYuMDkxMTI3bDIxLjMzMzMzNCAzMC43NDY2MDMtNTkuMzQ0NTI1IDY1Ljk0NDA0NWgtMjI4LjI3MTc4MnogbTIxMS4wODIzMzQgNDcwLjg2ODEwNWw1MC41NDUxNjQtNjEuMzM5NzI4IDI1LjAxNjc4NiAzNS4yNDg2MDFjNy41MjAzODQgMTAuNzQzNDA1IDExLjgxNzc0NiAyNC41MDUxOTYgMTIuNzg5NzY5IDM5LjkwNDA3NyAwLjYxMzkwOSA5LjE1NzQ3NCAwLjA1MTE1OSAxOC40MTcyNjYtMC40MDkyNzMgMjkuMTYwNjcxbC0xNC44MzYxMzEgMjI2Ljk5MjgwNmMtMC4zNTgxMTQgMTIuMjc4MTc3LTIuMDQ2MzYzIDIxLjQ4NjgxMS0yLjg2NDkwOCAyNi4wOTExMjctMS42ODgyNDkgOS4yMDg2MzMtNS42Nzg2NTcgMTYuODgyNDk0LTE3LjI5MTc2NyAzMC42OTU0NDRsLTI4LjM5MzI4NSAzNS4yOTk3Ni00My45OTY4MDMtNjUuOTk1MjA0IDE5LjQ0MDQ0OC0yOTYuMDU3NTU0eiBtMjkuNzc0NTgtNDUyLjUwMTk5OGw1OC4yMTkwMjUtNjUuOTQ0MDQ1IDE4Ljg3NzY5OCAyOS4xNjA2NzFjNy42MjI3MDIgMTIuMjc4MTc3IDExLjgxNzc0NiAyNC41NTYzNTUgMTIuNTg1MTMyIDM2Ljc4MzM3NCAwLjQ2MDQzMiA3LjY3Mzg2MS0wLjE1MzQ3NyAxNS4zNDc3MjItMC42NjUwNjggMjQuNTU2MzU1bC0xMy44NjQxMDkgMjIzLjkyMzI2MWMtMy4xNzE4NjMgMzguMzY5MzA1LTguOTAxNjc5IDU1LjI1MTc5OS0yNC43NjA5OTEgNzMuNjY5MDY1bC0yNy4zMTg5NDUgMzMuNzEzODI5LTQyLjUxMzE4OS01OS44NTYxMTUgMTkuNDQwNDQ3LTI5Ni4wMDYzOTV6TTExNy42NjU4NjcgODkwLjQyMzY2MWwtNTYuMDE5MTg0IDY0LjQ2MDQzMi0yMS41ODkxMjktMzUuMjk5NzZjLTYuMjkyNTY2LTkuMjA4NjMzLTEwLjQ4NzYxLTIxLjQ4NjgxMS0xMS4zNTczMTQtMzUuMjQ4NjAyLTAuNDA5MjczLTYuMTM5MDg5IDAuMjU1Nzk1LTEzLjc2MTc5MSAwLjg2OTcwNC0yMS40ODY4MWwxNC41MjkxNzctMjMxLjY0ODI4MmMyLjA0NjM2My0yMS40ODY4MTEgNi41OTk1Mi0zOC4zNjkzMDUgMTYuMDEyNzg5LTUwLjU5NjMyMmwzOC44ODA4OTYtNDkuMTEyNzEgMzguNjc2MjU5IDUzLjY2NTg2Ny0yMC4wMDMxOTggMzA1LjI2NjE4N3ogbTI5LjcyMzQyMi00NTIuNTAxOTk4bC00Ny40MjQ0NjEgNTYuNzM1NDExLTIyLjUwOTk5Mi0zMi4xNzkwNTZjLTEwLjAyNzE3OC0xMy43NjE3OTEtMTYuODMxMzM1LTMyLjIzMDIxNi0xNy43NTIxOTgtNDUuOTkyMDA3LTAuNDYwNDMyLTcuNjczODYxIDAuMDUxMTU5LTE2Ljg4MjQ5NCAwLjQ2MDQzMi0yNy42MjU4OTlsMTMuNzYxNzktMjA4LjYyNjY5OWMxLjUzNDc3Mi0yOS4xNjA2NzEgNi4zOTQ4ODQtNDEuMzg3NjkgMjIuMDQ5NTYtNjIuODc0NWwyOC4wODYzMzEtMzkuOTA0MDc3IDQyLjg3MTMwMyA2NS45NDQwNDUtMTkuNTQyNzY1IDI5NC41MjI3ODJ6IG0yMTMuOTk4NDAxIDQ2My4yOTY1NjJsNDUuNTgyNzM0IDcyLjEzNDI5My0yMy4yMjYyMTkgMjcuNjI1ODk5Yy0xNS43NTY5OTQgMTkuOTUyMDM4LTIyLjM1NjUxNSAyMy4wMjE1ODMtNTEuODc1MyAyMy4wMjE1ODNIMTQyLjIyMjIyMmMtMjguMzkzMjg1IDAtNDAuMDU3NTU0LTQuNjA0MzE3LTUxLjQ2NjAyNy0yMy4wMjE1ODNsLTE3LjU5ODcyMS0yNi4wOTExMjcgNjEuMTM1MDkyLTczLjYxNzkwNmgyMjcuMDk1MTI0eiBtMjkuOTc5MjE2LTQ0OS40ODM2MTNsNDEuNTQxMTY4IDYyLjkyNTY2LTUwLjY0NzQ4MiA1OS44MDQ5NTZIMTU2LjIzOTgwOGwtNDIuNTEzMTg5LTU5Ljg1NjExNSA1MC40NDI4NDUtNjIuOTI1NjYgMjI3LjE5NzQ0MiAwLjA1MTE1OXpNMTgzLjgxNDU0OCAxMjMuNDk4MDAybC00NS4wNzExNDMtNjQuNDYwNDMyIDIyLjg2ODEwNi0zMi4yMzAyMTZjMTMuNTA1OTk1LTE5Ljk1MjAzOCAyMy4zMjg1MzctMjYuMDkxMTI3IDQyLjYxNTUwNy0yNi4wOTExMjdoMjA1LjU1NzE1NWMxOC4yMTI2MyAwIDI4LjgwMjU1OCA2LjEzOTA4OSA0MC4zMTMzNDkgMjYuMDkxMTI3bDIxLjMzMzMzMyAzMC43NDY2MDMtNTkuMzQ0NTI0IDY1Ljk0NDA0NUgxODMuODE0NTQ4eiBtMjExLjA4MjMzNCA0NzAuODY4MTA1bDUwLjU0NTE2NC02MS4zMzk3MjggMjUuMDE2Nzg3IDM1LjI0ODYwMWM3LjUyMDM4NCAxMC43NDM0MDUgMTEuODE3NzQ2IDI0LjUwNTE5NiAxMi43ODk3NjggMzkuOTA0MDc3IDAuNjEzOTA5IDkuMTU3NDc0IDAuMDUxMTU5IDE4LjQxNzI2Ni0wLjQwOTI3MiAyOS4xNjA2NzFsLTE0LjgzNjEzMiAyMjYuOTkyODA2Yy0wLjM1ODExNCAxMi4yNzgxNzctMi4wNDYzNjMgMjEuNDg2ODExLTIuODY0OTA4IDI2LjA5MTEyNy0xLjY4ODI0OSA5LjIwODYzMy01LjY3ODY1NyAxNi44ODI0OTQtMTcuMjkxNzY2IDMwLjY5NTQ0NGwtMjguMzkzMjg2IDM1LjI5OTc2LTQzLjk5NjgwMi02NS45OTUyMDQgMTkuNDQwNDQ3LTI5Ni4wNTc1NTR6IG0yOS43NzQ1ODEtNDUyLjUwMTk5OGw1OC4yMTkwMjUtNjUuOTQ0MDQ1IDE4Ljg3NzY5NyAyOS4xNjA2NzFjNy42MjI3MDIgMTIuMjc4MTc3IDExLjgxNzc0NiAyNC41NTYzNTUgMTIuNTg1MTMyIDM2Ljc4MzM3NCAwLjQ2MDQzMiA3LjY3Mzg2MS0wLjE1MzQ3NyAxNS4zNDc3MjItMC42NjUwNjggMjQuNTU2MzU1bC0xMy44NjQxMDggMjIzLjkyMzI2MWMtMy4xNzE4NjMgMzguMzY5MzA1LTguOTAxNjc5IDU1LjI1MTc5OS0yNC43NjA5OTIgNzMuNjY5MDY1bC0yNy4zMTg5NDQgMzMuNzEzODI5LTQyLjUxMzE5LTU5Ljg1NjExNSAxOS40NDA0NDgtMjk2LjAwNjM5NXonIGZpbGw9JyMyMmMzMmUnPjwvcGF0aD48L3N2Zz4=";
    return `
<category name="%{BKY_QH_SENSOR_CATEGORY}" id="QH_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Sensor_ICO}">
    <label text="%{BKY_QH_BUTTON_LABEL}"></label>
    <block type="QH_button_general" id="QH_button_general"></block>
    <block type="QH_button_both" id="QH_button_both"></block>
    <block type="QH_buttonfuction_init" id="QH_buttonfuction_init"></block>
    <block type="QH_buttonfuction_do" id="QH_buttonfuction_do"></block>
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>
    <block type="QH_UltraSonicDistanceSensor" id="QH_UltraSonicDistanceSensor"></block>
    <block type="QH_Line_follower" id="QH_Line_follower"></block>
    <block type="QH_lightSensor" id="QH_lightSensor"></block>
    <block type="QH_sound" id="QH_sound"></block>
    <block type="QH_Potentiometer" id="QH_Potentiometer"></block>
    <block type="QH_dht11" id="QH_dht11"></block>
    </category>
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Actuator_ICO}">
    <label text="LED"></label>
    <block type="QH_inout_highlow" id="QH_inout_highlow"></block>
    <block type="QH_ledlight">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_ledlight"></block>
    <block type="QH_ledlight_PWM">
        <value name="ledn">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="RGB"></label>
    <block type="QH_rgb_led">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_rgb_led2">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <label text="%{BKY_QH_BUZZER_LABEL}"></label>
    <block type="QH_buzzer">
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_buzzer_music"></block>
    <label text="%{BKY_QH_DCMOTO_LABEL}"></label>
    <block type="QH_motor">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="QH_servomotor360">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotor180">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorread"></block>
</category>
<category name="%{BKY_QH_COMMUNICATE_CATEGORY}" id="QH_COMMUNICATE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_COMMUNICATE_ICO}">
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="QH_ir_re2"></block>
    <block type="QH_ir_send_nec">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0xCF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ir_send_raw">     
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">0,0,0</field>
        </shadow>
      </value>
      <value name="length">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
      <value name="freq">
        <shadow type="math_number">
          <field name="NUM">38</field>
        </shadow>
      </value>
    </block>
</category>
<category name="%{BKY_QH_SMG_CATEGORY}" id="QH_SMG_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SMG_ICO}">
    <block type="QH_display">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">1234</field>
            </shadow>
        </value>
    </block>
    <block type="QH_displayoff"></block>
</category>
`;
}
exports = addToolbox;