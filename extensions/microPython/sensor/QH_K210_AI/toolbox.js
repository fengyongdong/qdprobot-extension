/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_IMG_BASE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYxMzAwMDc4OTQxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg3MS41Mzc3NzggMTE4LjMyODg4OWgtNzI4LjE3Nzc3OGMtMzguNjg0NDQ0IDAtNjguMjY2NjY3IDI5LjU4MjIyMi02OC4yNjY2NjcgNjguMjY2NjY3djYzNC44OGMwIDM2LjQwODg4OSAyOS41ODIyMjIgNjguMjY2NjY3IDY4LjI2NjY2NyA2OC4yNjY2NjZoNzI4LjE3Nzc3OGMzNi40MDg4ODkgMCA2OC4yNjY2NjctMzEuODU3Nzc4IDY4LjI2NjY2Ni02OC4yNjY2NjZWMTg2LjU5NTU1NmMwLTM2LjQwODg4OS0yOS41ODIyMjItNjguMjY2NjY3LTY4LjI2NjY2Ni02OC4yNjY2Njd6IG0tNTczLjQ0IDExNi4wNTMzMzNjMzguNjg0NDQ0IDAgNzIuODE3Nzc4IDMxLjg1Nzc3OCA3Mi44MTc3NzggNzIuODE3Nzc4cy0zMS44NTc3NzggNzIuODE3Nzc4LTcyLjgxNzc3OCA3Mi44MTc3NzhjLTM4LjY4NDQ0NCAwLTcyLjgxNzc3OC0zMS44NTc3NzgtNzIuODE3Nzc4LTcyLjgxNzc3OHMzNC4xMzMzMzMtNzIuODE3Nzc4IDcyLjgxNzc3OC03Mi44MTc3Nzh6IG0tNTIuMzM3Nzc4IDU1Mi45NmMtNi44MjY2NjcgMC0xMy42NTMzMzMtMi4yNzU1NTYtMjAuNDgtNi44MjY2NjYtMTMuNjUzMzMzLTExLjM3Nzc3OC0xMy42NTMzMzMtMjcuMzA2NjY3LTIuMjc1NTU2LTQwLjk2bDE0MS4wODQ0NDUtMTk3Ljk3MzMzNGMxMS4zNzc3NzgtMTEuMzc3Nzc4IDI3LjMwNjY2Ny0xMy42NTMzMzMgNDAuOTYtNC41NTExMTFsMTIyLjg4IDg2LjQ3MTExMUw3NDguNjU3Nzc4IDM4Ni44NDQ0NDRjMTEuMzc3Nzc4LTExLjM3Nzc3OCA2NS45OTExMTEtNzAuNTQyMjIyIDk3Ljg0ODg4OS00LjU1MTExMXY0MDIuNzczMzM0YzAgMi4yNzU1NTYtNjAwLjc0NjY2NyAyLjI3NTU1Ni02MDAuNzQ2NjY3IDIuMjc1NTU1eiIgZmlsbD0iI2E1OTk1YiIgcC1pZD0iNTU1MyI+PC9wYXRoPjwvc3ZnPg==";

    const QH_IMG_DRAW_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYxMzExNTQ3Njc5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwMCAxOTIuNTQ0YzU1LjItMy4yOTYgODAuNzA0LTMzLjY5NiA4MC43MDQtOTYuMTZoMzJjMCA3OS45MzYtMzkuMDA4IDEyNC40MTYtMTEyLjcwNCAxMjguMTkyVjI1NmgtOTZ2LTYuNDY0QzM0MS4zMTIgMzQxLjkyIDE2Mi40IDUxNC4yNCAxNjIuNCA3NjcuMTY4aC0zMmMwLTI2NC43MzYgMTgzLjEwNC00NDYuMDE2IDU0NC43MzYtNTQzLjE2OEgxOTJ2MzJIOTZWMTYwaDk2djMyaDUxMlYxNjBoOTZ2MzIuNTQ0eiBtLTM1MC42NTYgMjY1Ljg1Nmw0NzUuMiAxNTguNC0yNDguNjcyIDczLjYtNjguMTI4IDI0My4xNjgtMTU4LjQtNDc1LjJ6IG0xNTUuNzQ0IDM2Ni4wMTZsNDQuNzM2LTE1OS42OCAxNjguMDk2LTQ5Ljc2LTMxNy45NTItMTA1Ljk4NCAxMDUuMTIgMzE1LjQyNHpNOTYgNzY4aDk2djk2SDk2di05NnoiIHAtaWQ9IjIyMjIiIGZpbGw9IiNhNTk5NWIiPjwvcGF0aD48L3N2Zz4=";
    const QH_IMG_FILTE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDAyOTc2NzY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwNTIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIuODc1IiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNODIzLjczNjQzOSA3NTMuNDQwMzM3VjQzLjMyMjcxN0E0NS4wMzE4NDkgNDUuMDMxODQ5IDAgMCAwIDc3Ny4zMTg5OTUgMC4wMjI4NjJINDYuMDcxMDQ2QTQ0LjY4NTQ1IDQ0LjY4NTQ1IDAgMCAwIDAgNDMuMzIyNzE3djcxMC4xMTc2MkE0NC42ODU0NSA0NC42ODU0NSAwIDAgMCA0Ni4wNzEwNDYgNzk2Ljc0MDE5Mmg3MzEuMjQ3OTQ5YTQ1LjAzMTg0OSA0NS4wMzE4NDkgMCAwIDAgNDYuNDE3NDQ0LTQzLjI5OTg1NXogbS0xMDUuOTk4MDQ1LTgyLjA5NjUyNWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNyAyNi4zMjYzMTJIMTMzLjcwOTk1MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNy0yNi4zMjYzMTJWMTI1LjQxOTI0MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNy0yNi4zMjYzMTJoNTU2LjMxNjUzNWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNyAyNi4zMjYzMTJ6IiBwLWlkPSIyMDcyIiBmaWxsPSIjYTU5OTViIj48L3BhdGg+PHBhdGggZD0iTTIyOC45Njk2MzMgMjcwLjU2MDM1NnYzMjguNzMyNDk4YTI0LjU5NDMxOCAyNC41OTQzMTggMCAwIDAgMjQuNTk0MzE3IDI0LjU5NDMxN0gzMTEuNzU4OTU1YTI0LjU5NDMxOCAyNC41OTQzMTggMCAwIDAgMjQuNTk0MzE4LTI0LjU5NDMxN3YtMjQ2Ljk4MjM3MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNy0yNS45Nzk5MTNoMjU0LjYwMzE0NmEyNC41OTQzMTggMjQuNTk0MzE4IDAgMCAwIDI0LjU5NDMxOC0yNC41OTQzMThWMjUxLjUwODQxOWEyNC4yNDc5MTkgMjQuMjQ3OTE5IDAgMCAwLTI0LjU5NDMxOC0yNC4yNDc5MThIMjc1LjA0MDY3OGE0NC42ODU0NSA0NC42ODU0NSAwIDAgMC00Ni4wNzEwNDUgNDMuMjk5ODU1ek0xMDA2LjYzNTAyNiAyMjcuMjYwNTAxSDkyMS40MjA5MTJhMjQuMjQ3OTE5IDI0LjI0NzkxOSAwIDAgMC0yNC41OTQzMTggMjQuMjQ3OTE4djc0LjgyMjE1aDIyLjE2OTUyNmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNyAyNS45Nzk5MTN2NTQ2LjI3MDk2OWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNyAyNS45Nzk5MTNIMzYyLjY3OTU4NGEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNy0yNS45Nzk5MTN2LTMwLjQ4MzA5OEgyNTMuNTYzOTVhMjQuMjQ3OTE5IDI0LjI0NzkxOSAwIDAgMC0yNC41OTQzMTcgMjQuMjQ3OTE5djg4LjMzMTcwNGE0NC42ODU0NSA0NC42ODU0NSAwIDAgMCA0Ni4wNzEwNDUgNDMuMjk5ODU0aDczMS41OTQzNDhhNDQuNjg1NDUgNDQuNjg1NDUgMCAwIDAgNDYuMDcxMDQ2LTQzLjI5OTg1NFYyNzAuNTYwMzU2YTQ0LjY4NTQ1IDQ0LjY4NTQ1IDAgMCAwLTQ2LjA3MTA0Ni00My4yOTk4NTV6IiBwLWlkPSIyMDczIiBmaWxsPSIjYTU5OTViIj48L3BhdGg+PC9zdmc+';
    const QH_IMG_SHAPE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDI0OTQxNzgyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyMTAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzcuODEyNSIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTQ1MS4yNzQ1NjUgMi40ODE3IDAuODU4ODAxIDc4Mi44NzkwNDRjLTEuOTE5NjcyIDMuMzg0Njg2LTAuNDU0NjU5IDUuOTEwNTcgMy4xODI2MTUgNS45MTA1N2w5MDEuMjg2MTg3IDBjMy42MzcyNzQgMCA1LjA1MTc2OS0yLjYyNjkyIDMuMTgyNjE1LTUuOTEwNTdMNDU4LjA5NDQ1NCAyLjQ4MTdDNDU2LjE3NDc4MS0wLjg1MjQ2OCA0NTMuMTQzNzItMC44MDE5NSA0NTEuMjc0NTY1IDIuNDgxN3pNOTAuOTMxODUgNzMwLjk5NzM3MiA0NTMuMDkzMjAyIDEwNC42Mjg0NzhsMzYyLjE2MTM1MiA2MjYuMzY4ODk0TDkwLjkzMTg1IDczMC45OTczNzJ6IiBwLWlkPSIzNzQwIiBmaWxsPSIjYTU5OTViIj48L3BhdGg+PHBhdGggZD0iTTgzNy45MzY5OTggOTczLjQ4MjMwNmMtMTEzLjYxNDI5NSAwLTIxMy40ODc3NzctNTkuOTY0NTAzLTI3MC44NzU4NzgtMTUwLjQ5MjIxMmwtNTcuNDM4NjE5IDBjNjIuNDkwMzg4IDExOS42MjU5MDEgMTg2LjA1NjY2OSAyMDEuMDA5OTA2IDMyOC4zMTQ0OTYgMjAxLjAwOTkwNiAyMDUuMzAzOTEgMCAzNzEuNzU5NzE0LTE2OS42Mzg0MTggMzcxLjc1OTcxNC0zNzguODgyNzA5cy0xNjYuNDU1ODAzLTM3OC44ODI3MDktMzcxLjc1OTcxNC0zNzguODgyNzA5Yy01Ny4wODQ5OTUgMC0xMTEuMTM4OTI4IDEzLjEzNDYwMS0xNTkuNDg0MzYxIDM2LjUyNDI5M2wyOS42MDMzNjkgNDEuNzc4MTMzYzM5LjcwNjkwOC0xNy44ODMyNjQgODMuNjU3MzAyLTI3Ljc4NDczMiAxMjkuODgwOTkzLTI3Ljc4NDczMiAxNzcuOTIzMzIgMCAzMjIuMTUxMzM4IDE0Ny4wMDY0OTEgMzIyLjE1MTMzOCAzMjguMzY1MDE0QzExNjAuMDg4MzM2IDgyNi40NzU4MTUgMTAxNS44NjAzMTggOTczLjQ4MjMwNiA4MzcuOTM2OTk4IDk3My40ODIzMDZ6IiBwLWlkPSIzNzQxIiBmaWxsPSIjYTU5OTViIj48L3BhdGg+PC9zdmc+';

    const QH_IMG_COLOR_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMTA0MjI3ODIwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4NzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik02NC41NzggNjEyLjk3N2g4OTUuMzM1djM0Ni41ODFINjQuNTc4eiIgZmlsbD0iI0VERURFRCIgcC1pZD0iNDg3NSI+PC9wYXRoPjxwYXRoIGQ9Ik00NDAuMDQxIDY3MC43NGgyMDIuMTcydjIzMS4wNTRINDQwLjA0MXoiIGZpbGw9IiNGMzc5N0QiIHAtaWQ9IjQ4NzYiPjwvcGF0aD48cGF0aCBkPSJNNDQwLjA0MSA3ODYuMjY3aDIwMi4xNzJ2MTE1LjUyN0g0NDAuMDQxeiIgZmlsbD0iI0VGNjU3MCIgcC1pZD0iNDg3NyI+PC9wYXRoPjxwYXRoIGQ9Ik02OTkuOTc3IDY3MC43NGgyMDIuMTcydjIzMS4wNTRINjk5Ljk3N3oiIGZpbGw9IiNGMzc5N0QiIHAtaWQ9IjQ4NzgiPjwvcGF0aD48cGF0aCBkPSJNNjk5Ljk3NyA3ODYuMjY3aDIwMi4xNzJ2MTE1LjUyN0g2OTkuOTc3eiIgZmlsbD0iI0VGNjU3MCIgcC1pZD0iNDg3OSI+PC9wYXRoPjxwYXRoIGQ9Ik04MS43NSA3MTQuNDgxTDcxNC44MjggODEuNDAybDI0NS4wNjMgMjQ1LjA2My02MzMuMDggNjMzLjA4eiIgZmlsbD0iI0VERURFRCIgcC1pZD0iNDg4MCI+PC9wYXRoPjxwYXRoIGQ9Ik0zODguMDgxIDQ4OS44NDNMNTMxLjAzNCAzNDYuODkgNjk0LjQxIDUxMC4yNjQgNTUxLjQ1NiA2NTMuMjE3eiIgZmlsbD0iIzNBNUNBQyIgcC1pZD0iNDg4MSI+PC9wYXRoPjxwYXRoIGQ9Ik00NjkuNzY5IDU3MS41M2wxNDIuOTUzLTE0Mi45NTMgODEuNjg4IDgxLjY4OS0xNDIuOTUzIDE0Mi45NTN6IiBmaWxsPSIjMjc0RDkxIiBwLWlkPSI0ODgyIj48L3BhdGg+PHBhdGggZD0iTTU3MS44ODQgMzA2LjA0bDE0Mi45NTMtMTQyLjk1MyAxNjMuMzc1IDE2My4zNzVMNzM1LjI2IDQ2OS40MTV6IiBmaWxsPSIjM0E1Q0FDIiBwLWlkPSI0ODgzIj48L3BhdGg+PHBhdGggZD0iTTY1My41NyAzODcuNzI4bDE0Mi45NTQtMTQyLjk1MyA4MS42ODggODEuNjg5TDczNS4yNiA0NjkuNDE3eiIgZmlsbD0iIzI3NEQ5MSIgcC1pZD0iNDg4NCI+PC9wYXRoPjxwYXRoIGQ9Ik02NC41NzggNjQuMjIzaDM0Ni41ODF2ODk1LjMzNUg2NC41Nzh6IiBmaWxsPSIjM0E1Q0FDIiBwLWlkPSI0ODg1Ij48L3BhdGg+PHBhdGggZD0iTTIzOS40NTYgNjQuMjIzaDE3MS43MDN2ODk1LjMzNUgyMzkuNDU2eiIgZmlsbD0iI0YzNzk3RCIgcC1pZD0iNDg4NiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzcuODY5IDc4Ni4yNjdtLTcyLjIwNCAwYTcyLjIwNCA3Mi4yMDQgMCAxIDAgMTQ0LjQwOCAwIDcyLjIwNCA3Mi4yMDQgMCAxIDAtMTQ0LjQwOCAwWiIgZmlsbD0iI0RFREZFOCIgcC1pZD0iNDg4NyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzcuODY5IDcxNC4wNjN2MTQ0LjQwOWMzOS44NzcgMCA3Mi4yMDQtMzIuMzI3IDcyLjIwNC03Mi4yMDRzLTMyLjMyNy03Mi4yMDUtNzIuMjA0LTcyLjIwNXoiIGZpbGw9IiNDOUM3RDciIHAtaWQ9IjQ4ODgiPjwvcGF0aD48L3N2Zz4=';

    const QH_IMG_BAR_CODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMTEyMTAwNzc4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04NzQuNjY2NjY3IDU1My44NzczMzNWNzQ2LjY2NjY2N2gtMTkydi0xMjguMDIxMzM0aC02NHYyNTguOTg2NjY3aC02NFY1NTQuNjY2NjY3aDE5MnYxMjcuOTc4NjY2aDY0di0xMjguNzY4aDY0ek00NjkuMzMzMzMzIDU1NC42NjY2Njd2MzIwSDE0OS4zMzMzMzNWNTU0LjY2NjY2N2gzMjB6IG00MDUuMzMzMzM0IDI1NnY2NGgtMTkydi02NGgxOTJ6IG0tNDY5LjMzMzMzNC0xOTJoLTE5MnYxOTJoMTkydi0xOTJ6IG0tNjQgNjR2NjRoLTY0di02NGg2NHogbTEyOC01MzMuMzMzMzM0djMyMEgxNDkuMzMzMzMzVjE0OS4zMzMzMzNoMzIweiBtNDA1LjMzMzMzNCAwdjMyMEg1NTQuNjY2NjY3VjE0OS4zMzMzMzNoMzIweiBtLTQ2OS4zMzMzMzQgNjRoLTE5MnYxOTJoMTkydi0xOTJ6IG00MDUuMzMzMzM0IDBoLTE5MnYxOTJoMTkydi0xOTJ6IG0tNDY5LjMzMzMzNCA2NHY2NGgtNjR2LTY0aDY0eiBtNDA1LjMzMzMzNCAwdjY0aC02NHYtNjRoNjR6IiBmaWxsPSIjYTU5OTViIiBwLWlkPSIyNDIxIj48L3BhdGg+PC9zdmc+';

     const QH_IMG_FEATURES_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMzM5NTU0Mjc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04NDEuNDExMTQ2IDE4NS4xMzgwMzloLTg5Ljk3MTk2OWMwLjEyNTUzMyAwLjc5NzE0NyAwLjE5MjA2MiAxLjYwMjQyMiAwLjE5MjA2MiAyLjQwODNoMC4wNTkzMDR2MTE4LjAwNjY4NWgtMTgwLjYyMjQ3N1YxODcuNTQ2MzM5aDAuMzA4ODY0Yy0wLjAwMjEwNy0wLjEwMDU0Ny0wLjAwNzgyNy0wLjIwMDE5LTAuMDA3ODI3LTAuMzAxMDM4IDAtMC43MTQzNjIgMC4wNTUwOS0xLjQxNzI4NCAwLjE1NTMzNS0yLjEwNzI2Mkg0NTMuMDYxMzhhMTQuNjcyNTY2IDE0LjY3MjU2NiAwIDAgMS0wLjIwMTY5NSAyLjQwODNoMC4yMDE2OTV2MTE4LjAwNjY4NUgyNzIuNDM4OTAzVjE4Ny41NDYzMzloMC44MDM3N2ExNC42NzI1NjYgMTQuNjcyNTY2IDAgMCAxLTAuMjAxNjk1LTIuNDA4M0gxODIuNTg4ODU0Yy00Ny4xMjgzMTggMC04NS4zMzM1ODQgMzguMjA1MjY2LTg1LjMzMzU4NCA4NS4zMzM1ODR2NjAwLjU2NDAxOGMwIDQ3LjEyODYxOSAzOC4yMDUyNjYgODUuMzMzNTg0IDg1LjMzMzU4NCA4NS4zMzM1ODRoNjU4LjgyMjI5MmM0Ny4xMjg2MTkgMCA4NS4zMzM1ODQtMzguMjA0OTY1IDg1LjMzMzU4NC04NS4zMzM1ODRWMjcwLjQ3MTYyM2MwLTQ3LjEyODMxOC0zOC4yMDQ5NjUtODUuMzMzNTg0LTg1LjMzMzU4NC04NS4zMzM1ODR6IG0tMzAuNTE5NzggMjk3LjUxODAzM0w0NjkuNDE5NDU1IDgyNS4zODM5MTJjLTEuMTI0OTc3IDEuMTI4ODktMi41MDAxMTYgMS44MjE4NzktMy44OTA5MDkgMi4wNzU5NTQtMS42MjE2ODkgMC40OTgyMTctMy4yMTU5ODMgMC4yODM4NzgtNC4yMzg5MDktMC43NDI2NmwtMjE4LjA1NTI4MS0yMTguODU3MjQ1Yy0xLjcwNjg4Mi0xLjcxMzIwNC0xLjE3Njc1NS01LjAyMjgxIDEuMTgzOTgtNy4zOTI4NzhsNTkuMzExMzA0LTU5LjUyOTU1NmMyLjM2MTAzNy0yLjM2OTE2NSA1LjY1ODMtMi45MDEzOTkgNy4zNjUxODMtMS4xODgxOTVsMTUzLjA1OTQ4NyAxNTMuNjIxODI1YTE0LjYxMjk2IDE0LjYxMjk2IDAgMCAxIDEuMzA0MDk0LTAuMjMyNzAybDI3Ny41NzE4OTMtMjc4LjU5MjQwOWMyLjY3MzUxNC0yLjY4MzE0NyA2Ljc1MzQ3NC0yLjkzNjkyMSA5LjExNDUxMS0wLjU2NzQ1Nmw1OS4zMTEwMDMgNTkuNTI5ODU3YzIuMzYxOTQgMi4zNjg4NjQgMi4xMDg3NjcgNi40NjQ0NzgtMC41NjQ0NDUgOS4xNDc2MjV6IiBmaWxsPSIjYTU5OTViIiBwLWlkPSIxOTA4Ij48L3BhdGg+PHBhdGggZD0iTTQyOC4wNzUyNzEgMjIwLjUwMzkyYzAgMTAuNTA0MS01Ljk3NTU5NCAxOS4wMTkyNDYtMTMuMzQ2NDk2IDE5LjAxOTI0NkgzMTEuNjg1MTU3Yy03LjM3MTIwMyAwLTEzLjM0Njc5Ny04LjUxNTE0Ni0xMy4zNDY3OTctMTkuMDE5MjQ2Vjg2LjY1MDAyMWMwLTEwLjUwNDEgNS45NzU1OTQtMTkuMDE5MjQ2IDEzLjM0Njc5Ny0xOS4wMTkyNDZoMTAzLjA0MzYxOGM3LjM3MTIwMyAwIDEzLjM0NjQ5NiA4LjUxNTE0NiAxMy4zNDY0OTYgMTkuMDE5MjQ2VjIyMC41MDM5MnpNNzI1LjgwMTMyMSAyMjAuNTAzOTJjMCAxMC41MDQxLTUuOTc1NTk0IDE5LjAxOTI0Ni0xMy4zNDY3OTcgMTkuMDE5MjQ2aC0xMDMuMDQzNjE4Yy03LjM3MTIwMyAwLTEzLjM0Njc5Ny04LjUxNTE0Ni0xMy4zNDY3OTctMTkuMDE5MjQ2Vjg2LjY1MDAyMWMwLTEwLjUwNDEgNS45NzU1OTQtMTkuMDE5MjQ2IDEzLjM0Njc5Ny0xOS4wMTkyNDZoMTAzLjA0MzYxOGM3LjM3MTIwMyAwIDEzLjM0Njc5NyA4LjUxNTE0NiAxMy4zNDY3OTcgMTkuMDE5MjQ2VjIyMC41MDM5MnoiIGZpbGw9IiNhNTk5NWIiIHAtaWQ9IjE5MDkiPjwvcGF0aD48L3N2Zz4=';

     const QH_IMG_FACE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMzQyNzM2NjcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik02ODIuNjY2NjY3IDU1NC42NjY2Njd2MjEuMzMzMzMzYzAgODEuMDY2NjY3LTY4LjI2NjY2NyAxNDkuMzMzMzMzLTE0OS4zMzMzMzQgMTQ5LjMzMzMzM1MzODQgNjU3LjA2NjY2NyAzODQgNTc2VjU1NC42NjY2NjdoNDIuNjY2NjY3djIxLjMzMzMzM2MwIDU5LjczMzMzMyA0Ni45MzMzMzMgMTA2LjY2NjY2NyAxMDYuNjY2NjY2IDEwNi42NjY2NjdzMTA2LjY2NjY2Ny00Ni45MzMzMzMgMTA2LjY2NjY2Ny0xMDYuNjY2NjY3VjU1NC42NjY2NjdoNDIuNjY2NjY3ek0yMTMuMzMzMzMzIDQyNi42NjY2NjdWMjEzLjMzMzMzM2gyMTMuMzMzMzM0djQyLjY2NjY2N0gyNTZ2MTcwLjY2NjY2N0gyMTMuMzMzMzMzeiBtMCAyMTMuMzMzMzMzaDQyLjY2NjY2N3YxNzAuNjY2NjY3aDE3MC42NjY2Njd2NDIuNjY2NjY2SDIxMy4zMzMzMzN2LTIxMy4zMzMzMzN6IG02NDAtMjEzLjMzMzMzM2gtNDIuNjY2NjY2VjI1NmgtMTcwLjY2NjY2N1YyMTMuMzMzMzMzaDIxMy4zMzMzMzN2MjEzLjMzMzMzNHogbTAgMjEzLjMzMzMzM3YyMTMuMzMzMzMzaC0yMTMuMzMzMzMzdi00Mi42NjY2NjZoMTcwLjY2NjY2N3YtMTcwLjY2NjY2N2g0Mi42NjY2NjZ6IG0tMzg0LTI1NnY4NS4zMzMzMzNoLTQyLjY2NjY2NlYzODRoNDIuNjY2NjY2eiBtMTcwLjY2NjY2NyAwdjg1LjMzMzMzM2gtNDIuNjY2NjY3VjM4NGg0Mi42NjY2Njd6IiBmaWxsPSIjYTU5OTViIiBwLWlkPSIzMDg2Ij48L3BhdGg+PC9zdmc+';


    return `
<category name="%{BKY_QH_IMG_BASE_CATEGORY}" id="QH_IMG_BASE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_BASE_ICO}">
    <block type="PY_qdp_k210_image_font_load">
        <value name="width">
            <shadow type="math_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="height">
            <shadow type="math_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/font_uincode_16_16_tblr.Dzk</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_Image1">
        <value name="width">
            <shadow type="math_number">
                <field name="NUM">320</field>
            </shadow>
        </value>
        <value name="height">
            <shadow type="math_number">
                <field name="NUM">240</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_Image">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart.jpg</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_clear"></block>
    <block type="PY_qdp_k210_image_save">
        <value name="path">
            <shadow type="text">
                <field name="TEXT">/sd/QDPK210_AIstart.jpg</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_set_pixel">
        <value name="LIST">
            <shadow type="text">
                <field name="TEXT">0,0</field>
            </shadow>
        </value>
        <value name="color">
            <shadow type="text">
                <field name="TEXT">(0xFF,0,0)</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_get_pixel">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">160,120</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_copy">
        <value name="LIST">
            <shadow type="text">
                <field name="TEXT">0,0,320,240</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_compress">
        <value name="quality">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="PY_qdp_k210_image_tonew"></block>
    <block type="PY_qdp_k210_image_getinfo"></block>
</category>
<category name="%{BKY_QH_IMG_DRAW_CATEGORY}" id="QH_IMG_DRAW_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_DRAW_ICO}">
    <block type="PY_qdp_k210_color_sel" >
        <value name="color">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="PY_qdp_k210_list_var" >
        <value name="LIST">
        <shadow type="text">
            <field name="TEXT">160,120</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_draw_string">
        <value name="color">
            <shadow type="colour_picker"/>
        </value>
        <value name="x0">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="y0">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="tex">
            <shadow type="text">
              <field name="TEXT">QDPK210_AIstart</field>
            </shadow>
        </value>
        <value name="scale">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="x_spacing">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="y_spacing">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="mono_space">
            <shadow type="logic_boolean">
              <field name="BOOL">FALSE</field>
            </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_draw_image">
      <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">160,120</field>
                    </shadow>
                </value>
            </block>
        </value>
      <value name="x_scale">
        <shadow type="math_number">
          <field name="NUM">1.0</field>
        </shadow>
      </value>
      <value name="y_scale">
        <shadow type="math_number">
          <field name="NUM">1.0</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_draw_font">
          <value name="x">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="width">
            <shadow type="math_number">
              <field name="NUM">32</field>
            </shadow>
          </value>
          <value name="height">
            <shadow type="math_number">
              <field name="NUM">32</field>
            </shadow>
          </value>
          <value name="data">
            <shadow type="text">
              <field name="TEXT">/x20/xFC/xFC/x2C/xAC/x4C/x4D/xA3</field>
            </shadow>
          </value>
          <value name="scale">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_draw_line">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">10,20,30,40</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
    <block type="PY_qdp_k210_image_draw_arrow">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">10,20,30,40</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
    <block type="PY_qdp_k210_image_draw_cross">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">10,20</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="size">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
    </block>
    <block type="PY_qdp_k210_image_draw_circle">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">10,20,10</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
    <block type="PY_qdp_k210_image_draw_rectangle">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">10,20,30,40</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
    <block type="PY_qdp_k210_image_draw_keypoints">
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
          <value name="size">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="thi">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
</category>
<category name="%{BKY_QH_IMG_FILTE_CATEGORY}" id="QH_IMG_FILTE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_FILTE_ICO}">
    <block type="PY_qdp_k210_image_lens_corr">
      <value name="strength">
        <shadow type="math_number">
          <field name="NUM">1.8</field>
        </shadow>
      </value>
      <value name="zoom">
        <shadow type="math_number">
          <field name="NUM">1.0</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_histeq">
      <value name="limit">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_mean">
      <value name="size">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="offset">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_cartoon">
      <value name="seed">
        <shadow type="math_number">
          <field name="NUM">0.05</field>
        </shadow>
      </value>
      <value name="float">
        <shadow type="math_number">
          <field name="NUM">0.05</field>
        </shadow>
      </value>
    </block>

    <block type="PY_qdp_k210_image_erode">
      <value name="size">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="threshold">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_dilate">
      <value name="size">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="threshold">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_flood_fill">
        <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">160,120</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="color">
            <block type="PY_qdp_k210_color_sel">
                <value name="color">
                    <shadow type="colour_picker"/>
                </value>
            </block>
        </value>
        <value name="seed">
            <shadow type="math_number">
              <field name="NUM">0.05</field>
            </shadow>
          </value>
      <value name="float">
        <shadow type="math_number">
          <field name="NUM">0.05</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_linpolar">
      <value name="key">
        <shadow type="on_off">
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_invert"></block>
</category>
<category name="%{BKY_QH_IMG_SHAPE_CATEGORY}" id="QH_IMG_SHAPE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_SHAPE_ICO}">
    <block type="PY_qdp_k210_image_line"></block>
    <block type="PY_qdp_k210_image_circle"></block>
    <block type="PY_qdp_k210_image_rect"></block>
    <block type="PY_qdp_k210_image_find_lines">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
      <value name="threshold">
        <shadow type="math_number">
          <field name="NUM">1000</field>
        </shadow>
      </value>
      <value name="theta_margin">
        <shadow type="math_number">
          <field name="NUM">25</field>
        </shadow>
      </value>
      <value name="rho_margin">
        <shadow type="math_number">
          <field name="NUM">25</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_find_circles">
        <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
          <value name="threshold">
            <shadow type="math_number">
              <field name="NUM">2000</field>
            </shadow>
          </value>
          <value name="r_min">
            <shadow type="math_number">
              <field name="NUM">2</field>
            </shadow>
          </value>
          <value name="r_max">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="r_step">
            <shadow type="math_number">
              <field name="NUM">2</field>
            </shadow>
          </value>
          <value name="x_margin">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="y_margin">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="r_margin">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="PY_qdp_k210_image_find_rects">
          <value name="roi">
                <block type="PY_qdp_k210_list_var">
                    <value name="LIST">
                        <shadow type="text">
                            <field name="TEXT">0,0,320,240</field>
                        </shadow>
                    </value>
                </block>
            </value>
          <value name="threshold">
            <shadow type="math_number">
              <field name="NUM">10000</field>
            </shadow>
          </value>
        </block>
</category>
<category name="%{BKY_QH_IMG_COLOR_CATEGORY}" id="QH_IMG_COLOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_COLOR_ICO}">
    <label text="%{BKY_QH_IMG_COLOR_CONVERSION}"></label>
    <block type="PY_qdp_k210_image_rgb_to_lab">
      <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,0</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_lab_to_rgb">
      <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,0</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_rgb_to_grayscale">
      <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,0</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_grayscale_to_rgb">
      <value name="g_value">
        <shadow type="math_number">
          <field name="NUM">255</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_blob"></block>
    <block type="PY_qdp_k210_image_percentile">
        <value name="CDF">
        <shadow type="math_number">
          <field name="NUM">0.5</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_find_blobs">
      <value name="LIST">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">100, 100, 0, 100, 0, 0</field>
                    </shadow>
                </value>
            </block>
        </value>
        <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
      <value name="area">
        <shadow type="math_number">
          <field name="NUM">200</field>
        </shadow>
      </value>
      <value name="pixel">
        <shadow type="math_number">
          <field name="NUM">200</field>
        </shadow>
      </value>
      <value name="margin">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="key">
        <shadow type="on_off">
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_get_histogram">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
</category>
<category name="%{BKY_QH_IMG_CODE_CATEGORY}" id="QH_IMG_CODE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_BAR_CODE_ICO}">
    <block type="PY_qdp_k210_image_barcode"></block>
    <block type="PY_qdp_k210_image_qrcode"></block>
    <block type="PY_qdp_k210_image_apriltag"></block>
    <block type="PY_qdp_k210_image_find_barcodes">
        <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_find_qrcodes">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
    <block type="PY_qdp_k210_image_find_apriltags">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
    </block>
</category>
<category name="%{BKY_QH_IMG_FEATURES_CATEGORY}" id="QH_IMG_FEATURES_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_FEATURES_ICO}">
    <block type="PY_qdp_k210_image_kptmatch"></block>
    <block type="PY_qdp_k210_image_find_hog">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
      <value name="size">
        <shadow type="math_number">
          <field name="NUM">8</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_find_keypoints">
      <value name="roi">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">0,0,320,240</field>
                    </shadow>
                </value>
            </block>
        </value>
      <value name="max_keypoints">
        <shadow type="math_number">
          <field name="NUM">150</field>
        </shadow>
      </value>
      <value name="threshold">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="scale_factor">
        <shadow type="math_number">
          <field name="NUM">1.4</field>
        </shadow>
      </value>
      <value name="normalized">
        <shadow type="on_off">
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_image_match_descriptor">
      <value name="threshold">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
</category>
<category name="%{BKY_QH_IMG_FACE_CATEGORY}" id="QH_IMG_FACE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_IMG_FACE_ICO}">
     <block type="PY_qdp_k210_tuple_facedata">
        <value name="TEXT">
            <block type="PY_qdp_k210_list_var">
                <value name="LIST">
                    <shadow type="text">
                        <field name="TEXT">"face1", "face2", "face3"</field>
                    </shadow>
                </value>
            </block>
        </value>
     </block>
    <block type="PY_qdp_k210_face_init"></block>
    <block type="PY_qdp_k210_face_training">
      <value name="corpus">
        <shadow type="factory_block_return">
          <field name="VALUE">FaceData</field>
        </shadow>
      </value>
      <value name="save">
        <shadow type="text">
          <field name="TEXT">QDPK210_AIstart.face</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_face_loading">
      <value name="corpus">
        <shadow type="factory_block_return">
          <field name="VALUE">FaceData</field>
        </shadow>
      </value>
      <value name="path">
        <shadow type="text">
          <field name="TEXT">QDPK210_AIstart.face</field>
        </shadow>
      </value>
    </block>
    <block type="PY_qdp_k210_face_predict">
      <value name="corpus">
        <shadow type="factory_block_return">
          <field name="VALUE">FaceData</field>
        </shadow>
      </value>
    </block>
</category>
`;

}

exports = addToolbox;

