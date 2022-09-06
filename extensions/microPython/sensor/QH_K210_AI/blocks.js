/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Img_base_color = '#a5995b';
    const QH_fill_color = '#6dc3c6';
   
    const QH_IMG_BASE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYxMzAwMDc4OTQxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg3MS41Mzc3NzggMTE4LjMyODg4OWgtNzI4LjE3Nzc3OGMtMzguNjg0NDQ0IDAtNjguMjY2NjY3IDI5LjU4MjIyMi02OC4yNjY2NjcgNjguMjY2NjY3djYzNC44OGMwIDM2LjQwODg4OSAyOS41ODIyMjIgNjguMjY2NjY3IDY4LjI2NjY2NyA2OC4yNjY2NjZoNzI4LjE3Nzc3OGMzNi40MDg4ODkgMCA2OC4yNjY2NjctMzEuODU3Nzc4IDY4LjI2NjY2Ni02OC4yNjY2NjZWMTg2LjU5NTU1NmMwLTM2LjQwODg4OS0yOS41ODIyMjItNjguMjY2NjY3LTY4LjI2NjY2Ni02OC4yNjY2Njd6IG0tNTczLjQ0IDExNi4wNTMzMzNjMzguNjg0NDQ0IDAgNzIuODE3Nzc4IDMxLjg1Nzc3OCA3Mi44MTc3NzggNzIuODE3Nzc4cy0zMS44NTc3NzggNzIuODE3Nzc4LTcyLjgxNzc3OCA3Mi44MTc3NzhjLTM4LjY4NDQ0NCAwLTcyLjgxNzc3OC0zMS44NTc3NzgtNzIuODE3Nzc4LTcyLjgxNzc3OHMzNC4xMzMzMzMtNzIuODE3Nzc4IDcyLjgxNzc3OC03Mi44MTc3Nzh6IG0tNTIuMzM3Nzc4IDU1Mi45NmMtNi44MjY2NjcgMC0xMy42NTMzMzMtMi4yNzU1NTYtMjAuNDgtNi44MjY2NjYtMTMuNjUzMzMzLTExLjM3Nzc3OC0xMy42NTMzMzMtMjcuMzA2NjY3LTIuMjc1NTU2LTQwLjk2bDE0MS4wODQ0NDUtMTk3Ljk3MzMzNGMxMS4zNzc3NzgtMTEuMzc3Nzc4IDI3LjMwNjY2Ny0xMy42NTMzMzMgNDAuOTYtNC41NTExMTFsMTIyLjg4IDg2LjQ3MTExMUw3NDguNjU3Nzc4IDM4Ni44NDQ0NDRjMTEuMzc3Nzc4LTExLjM3Nzc3OCA2NS45OTExMTEtNzAuNTQyMjIyIDk3Ljg0ODg4OS00LjU1MTExMXY0MDIuNzczMzM0YzAgMi4yNzU1NTYtNjAwLjc0NjY2NyAyLjI3NTU1Ni02MDAuNzQ2NjY3IDIuMjc1NTU1eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNTU1MyI+PC9wYXRoPjwvc3ZnPg==";

    const QH_IMG_FILTE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDc5MjgxNjQ3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwNTIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU4NDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIuODc1IiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNODIzLjczNjQzOSA3NTMuNDQwMzM3VjQzLjMyMjcxN0E0NS4wMzE4NDkgNDUuMDMxODQ5IDAgMCAwIDc3Ny4zMTg5OTUgMC4wMjI4NjJINDYuMDcxMDQ2QTQ0LjY4NTQ1IDQ0LjY4NTQ1IDAgMCAwIDAgNDMuMzIyNzE3djcxMC4xMTc2MkE0NC42ODU0NSA0NC42ODU0NSAwIDAgMCA0Ni4wNzEwNDYgNzk2Ljc0MDE5Mmg3MzEuMjQ3OTQ5YTQ1LjAzMTg0OSA0NS4wMzE4NDkgMCAwIDAgNDYuNDE3NDQ0LTQzLjI5OTg1NXogbS0xMDUuOTk4MDQ1LTgyLjA5NjUyNWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNyAyNi4zMjYzMTJIMTMzLjcwOTk1MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNy0yNi4zMjYzMTJWMTI1LjQxOTI0MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNy0yNi4zMjYzMTJoNTU2LjMxNjUzNWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNyAyNi4zMjYzMTJ6IiBwLWlkPSI1ODQ3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIyOC45Njk2MzMgMjcwLjU2MDM1NnYzMjguNzMyNDk4YTI0LjU5NDMxOCAyNC41OTQzMTggMCAwIDAgMjQuNTk0MzE3IDI0LjU5NDMxN0gzMTEuNzU4OTU1YTI0LjU5NDMxOCAyNC41OTQzMTggMCAwIDAgMjQuNTk0MzE4LTI0LjU5NDMxN3YtMjQ2Ljk4MjM3MmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNy0yNS45Nzk5MTNoMjU0LjYwMzE0NmEyNC41OTQzMTggMjQuNTk0MzE4IDAgMCAwIDI0LjU5NDMxOC0yNC41OTQzMThWMjUxLjUwODQxOWEyNC4yNDc5MTkgMjQuMjQ3OTE5IDAgMCAwLTI0LjU5NDMxOC0yNC4yNDc5MThIMjc1LjA0MDY3OGE0NC42ODU0NSA0NC42ODU0NSAwIDAgMC00Ni4wNzEwNDUgNDMuMjk5ODU1ek0xMDA2LjYzNTAyNiAyMjcuMjYwNTAxSDkyMS40MjA5MTJhMjQuMjQ3OTE5IDI0LjI0NzkxOSAwIDAgMC0yNC41OTQzMTggMjQuMjQ3OTE4djc0LjgyMjE1aDIyLjE2OTUyNmEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxIDI3LjcxMTkwNyAyNS45Nzk5MTN2NTQ2LjI3MDk2OWEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNyAyNS45Nzk5MTNIMzYyLjY3OTU4NGEyNy4wMTkxMDkgMjcuMDE5MTA5IDAgMCAxLTI3LjcxMTkwNy0yNS45Nzk5MTN2LTMwLjQ4MzA5OEgyNTMuNTYzOTVhMjQuMjQ3OTE5IDI0LjI0NzkxOSAwIDAgMC0yNC41OTQzMTcgMjQuMjQ3OTE5djg4LjMzMTcwNGE0NC42ODU0NSA0NC42ODU0NSAwIDAgMCA0Ni4wNzEwNDUgNDMuMjk5ODU0aDczMS41OTQzNDhhNDQuNjg1NDUgNDQuNjg1NDUgMCAwIDAgNDYuMDcxMDQ2LTQzLjI5OTg1NFYyNzAuNTYwMzU2YTQ0LjY4NTQ1IDQ0LjY4NTQ1IDAgMCAwLTQ2LjA3MTA0Ni00My4yOTk4NTV6IiBwLWlkPSI1ODQ4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';

    const QH_IMG_DRAW_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDc4NzM2MDgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04MDAgMTkyLjU0NGM1NS4yLTMuMjk2IDgwLjcwNC0zMy42OTYgODAuNzA0LTk2LjE2aDMyYzAgNzkuOTM2LTM5LjAwOCAxMjQuNDE2LTExMi43MDQgMTI4LjE5MlYyNTZoLTk2di02LjQ2NEMzNDEuMzEyIDM0MS45MiAxNjIuNCA1MTQuMjQgMTYyLjQgNzY3LjE2OGgtMzJjMC0yNjQuNzM2IDE4My4xMDQtNDQ2LjAxNiA1NDQuNzM2LTU0My4xNjhIMTkydjMySDk2VjE2MGg5NnYzMmg1MTJWMTYwaDk2djMyLjU0NHogbS0zNTAuNjU2IDI2NS44NTZsNDc1LjIgMTU4LjQtMjQ4LjY3MiA3My42LTY4LjEyOCAyNDMuMTY4LTE1OC40LTQ3NS4yeiBtMTU1Ljc0NCAzNjYuMDE2bDQ0LjczNi0xNTkuNjggMTY4LjA5Ni00OS43Ni0zMTcuOTUyLTEwNS45ODQgMTA1LjEyIDMxNS40MjR6TTk2IDc2OGg5NnY5Nkg5NnYtOTZ6IiBwLWlkPSIyNDM3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';

    const QH_IMG_SHAPE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDc4NTc4MjA5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyMTAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzcuODEyNSIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTQ1MS4yNzQ1NjUgMi40ODE3IDAuODU4ODAxIDc4Mi44NzkwNDRjLTEuOTE5NjcyIDMuMzg0Njg2LTAuNDU0NjU5IDUuOTEwNTcgMy4xODI2MTUgNS45MTA1N2w5MDEuMjg2MTg3IDBjMy42MzcyNzQgMCA1LjA1MTc2OS0yLjYyNjkyIDMuMTgyNjE1LTUuOTEwNTdMNDU4LjA5NDQ1NCAyLjQ4MTdDNDU2LjE3NDc4MS0wLjg1MjQ2OCA0NTMuMTQzNzItMC44MDE5NSA0NTEuMjc0NTY1IDIuNDgxN3pNOTAuOTMxODUgNzMwLjk5NzM3MiA0NTMuMDkzMjAyIDEwNC42Mjg0NzhsMzYyLjE2MTM1MiA2MjYuMzY4ODk0TDkwLjkzMTg1IDczMC45OTczNzJ6IiBwLWlkPSIyMjAyIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTgzNy45MzY5OTggOTczLjQ4MjMwNmMtMTEzLjYxNDI5NSAwLTIxMy40ODc3NzctNTkuOTY0NTAzLTI3MC44NzU4NzgtMTUwLjQ5MjIxMmwtNTcuNDM4NjE5IDBjNjIuNDkwMzg4IDExOS42MjU5MDEgMTg2LjA1NjY2OSAyMDEuMDA5OTA2IDMyOC4zMTQ0OTYgMjAxLjAwOTkwNiAyMDUuMzAzOTEgMCAzNzEuNzU5NzE0LTE2OS42Mzg0MTggMzcxLjc1OTcxNC0zNzguODgyNzA5cy0xNjYuNDU1ODAzLTM3OC44ODI3MDktMzcxLjc1OTcxNC0zNzguODgyNzA5Yy01Ny4wODQ5OTUgMC0xMTEuMTM4OTI4IDEzLjEzNDYwMS0xNTkuNDg0MzYxIDM2LjUyNDI5M2wyOS42MDMzNjkgNDEuNzc4MTMzYzM5LjcwNjkwOC0xNy44ODMyNjQgODMuNjU3MzAyLTI3Ljc4NDczMiAxMjkuODgwOTkzLTI3Ljc4NDczMiAxNzcuOTIzMzIgMCAzMjIuMTUxMzM4IDE0Ny4wMDY0OTEgMzIyLjE1MTMzOCAzMjguMzY1MDE0QzExNjAuMDg4MzM2IDgyNi40NzU4MTUgMTAxNS44NjAzMTggOTczLjQ4MjMwNiA4MzcuOTM2OTk4IDk3My40ODIzMDZ6IiBwLWlkPSIyMjAzIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';

    const QH_IMG_COLOR_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMTA0MjI3ODIwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4NzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik02NC41NzggNjEyLjk3N2g4OTUuMzM1djM0Ni41ODFINjQuNTc4eiIgZmlsbD0iI0VERURFRCIgcC1pZD0iNDg3NSI+PC9wYXRoPjxwYXRoIGQ9Ik00NDAuMDQxIDY3MC43NGgyMDIuMTcydjIzMS4wNTRINDQwLjA0MXoiIGZpbGw9IiNGMzc5N0QiIHAtaWQ9IjQ4NzYiPjwvcGF0aD48cGF0aCBkPSJNNDQwLjA0MSA3ODYuMjY3aDIwMi4xNzJ2MTE1LjUyN0g0NDAuMDQxeiIgZmlsbD0iI0VGNjU3MCIgcC1pZD0iNDg3NyI+PC9wYXRoPjxwYXRoIGQ9Ik02OTkuOTc3IDY3MC43NGgyMDIuMTcydjIzMS4wNTRINjk5Ljk3N3oiIGZpbGw9IiNGMzc5N0QiIHAtaWQ9IjQ4NzgiPjwvcGF0aD48cGF0aCBkPSJNNjk5Ljk3NyA3ODYuMjY3aDIwMi4xNzJ2MTE1LjUyN0g2OTkuOTc3eiIgZmlsbD0iI0VGNjU3MCIgcC1pZD0iNDg3OSI+PC9wYXRoPjxwYXRoIGQ9Ik04MS43NSA3MTQuNDgxTDcxNC44MjggODEuNDAybDI0NS4wNjMgMjQ1LjA2My02MzMuMDggNjMzLjA4eiIgZmlsbD0iI0VERURFRCIgcC1pZD0iNDg4MCI+PC9wYXRoPjxwYXRoIGQ9Ik0zODguMDgxIDQ4OS44NDNMNTMxLjAzNCAzNDYuODkgNjk0LjQxIDUxMC4yNjQgNTUxLjQ1NiA2NTMuMjE3eiIgZmlsbD0iIzNBNUNBQyIgcC1pZD0iNDg4MSI+PC9wYXRoPjxwYXRoIGQ9Ik00NjkuNzY5IDU3MS41M2wxNDIuOTUzLTE0Mi45NTMgODEuNjg4IDgxLjY4OS0xNDIuOTUzIDE0Mi45NTN6IiBmaWxsPSIjMjc0RDkxIiBwLWlkPSI0ODgyIj48L3BhdGg+PHBhdGggZD0iTTU3MS44ODQgMzA2LjA0bDE0Mi45NTMtMTQyLjk1MyAxNjMuMzc1IDE2My4zNzVMNzM1LjI2IDQ2OS40MTV6IiBmaWxsPSIjM0E1Q0FDIiBwLWlkPSI0ODgzIj48L3BhdGg+PHBhdGggZD0iTTY1My41NyAzODcuNzI4bDE0Mi45NTQtMTQyLjk1MyA4MS42ODggODEuNjg5TDczNS4yNiA0NjkuNDE3eiIgZmlsbD0iIzI3NEQ5MSIgcC1pZD0iNDg4NCI+PC9wYXRoPjxwYXRoIGQ9Ik02NC41NzggNjQuMjIzaDM0Ni41ODF2ODk1LjMzNUg2NC41Nzh6IiBmaWxsPSIjM0E1Q0FDIiBwLWlkPSI0ODg1Ij48L3BhdGg+PHBhdGggZD0iTTIzOS40NTYgNjQuMjIzaDE3MS43MDN2ODk1LjMzNUgyMzkuNDU2eiIgZmlsbD0iI0YzNzk3RCIgcC1pZD0iNDg4NiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzcuODY5IDc4Ni4yNjdtLTcyLjIwNCAwYTcyLjIwNCA3Mi4yMDQgMCAxIDAgMTQ0LjQwOCAwIDcyLjIwNCA3Mi4yMDQgMCAxIDAtMTQ0LjQwOCAwWiIgZmlsbD0iI0RFREZFOCIgcC1pZD0iNDg4NyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzcuODY5IDcxNC4wNjN2MTQ0LjQwOWMzOS44NzcgMCA3Mi4yMDQtMzIuMzI3IDcyLjIwNC03Mi4yMDRzLTMyLjMyNy03Mi4yMDUtNzIuMjA0LTcyLjIwNXoiIGZpbGw9IiNDOUM3RDciIHAtaWQ9IjQ4ODgiPjwvcGF0aD48L3N2Zz4=';

    const QH_IMG_QRCODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMTE0MDYyNTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2ODkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04NzQuNjY2NjY3IDU1My44NzczMzNWNzQ2LjY2NjY2N2gtMTkydi0xMjguMDIxMzM0aC02NHYyNTguOTg2NjY3aC02NFY1NTQuNjY2NjY3aDE5MnYxMjcuOTc4NjY2aDY0di0xMjguNzY4aDY0ek00NjkuMzMzMzMzIDU1NC42NjY2Njd2MzIwSDE0OS4zMzMzMzNWNTU0LjY2NjY2N2gzMjB6IG00MDUuMzMzMzM0IDI1NnY2NGgtMTkydi02NGgxOTJ6IG0tNDY5LjMzMzMzNC0xOTJoLTE5MnYxOTJoMTkydi0xOTJ6IG0tNjQgNjR2NjRoLTY0di02NGg2NHogbTEyOC01MzMuMzMzMzM0djMyMEgxNDkuMzMzMzMzVjE0OS4zMzMzMzNoMzIweiBtNDA1LjMzMzMzNCAwdjMyMEg1NTQuNjY2NjY3VjE0OS4zMzMzMzNoMzIweiBtLTQ2OS4zMzMzMzQgNjRoLTE5MnYxOTJoMTkydi0xOTJ6IG00MDUuMzMzMzM0IDBoLTE5MnYxOTJoMTkydi0xOTJ6IG0tNDY5LjMzMzMzNCA2NHY2NGgtNjR2LTY0aDY0eiBtNDA1LjMzMzMzNCAwdjY0aC02NHYtNjRoNjR6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNjkwIj48L3BhdGg+PC9zdmc+';

    const QH_IMG_BARCODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMTE0MDkyNTI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik00Mi42NjY2NjcgMTcwLjY2NjY2N2gxNzAuNjY2NjY2djY4Mi42NjY2NjZINDIuNjY2NjY3ek00OTAuNjY2NjY3IDE3MC42NjY2NjdoODUuMzMzMzMzdjY4Mi42NjY2NjZoLTg1LjMzMzMzM3pNNjgyLjY2NjY2NyAxNzAuNjY2NjY3aDE3MC42NjY2NjZ2NjgyLjY2NjY2NmgtMTcwLjY2NjY2NnpNOTM4LjY2NjY2NyAxNzAuNjY2NjY3aDQyLjY2NjY2NnY2ODIuNjY2NjY2aC00Mi42NjY2NjZ6TTMyMCAxNzAuNjY2NjY3aDQyLjY2NjY2N3Y2ODIuNjY2NjY2aC00Mi42NjY2Njd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIzNDM1Ij48L3BhdGg+PC9zdmc+';

   const QH_IMG_FEATURES_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMzM5NTU0Mjc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04NDEuNDExMTQ2IDE4NS4xMzgwMzloLTg5Ljk3MTk2OWMwLjEyNTUzMyAwLjc5NzE0NyAwLjE5MjA2MiAxLjYwMjQyMiAwLjE5MjA2MiAyLjQwODNoMC4wNTkzMDR2MTE4LjAwNjY4NWgtMTgwLjYyMjQ3N1YxODcuNTQ2MzM5aDAuMzA4ODY0Yy0wLjAwMjEwNy0wLjEwMDU0Ny0wLjAwNzgyNy0wLjIwMDE5LTAuMDA3ODI3LTAuMzAxMDM4IDAtMC43MTQzNjIgMC4wNTUwOS0xLjQxNzI4NCAwLjE1NTMzNS0yLjEwNzI2Mkg0NTMuMDYxMzhhMTQuNjcyNTY2IDE0LjY3MjU2NiAwIDAgMS0wLjIwMTY5NSAyLjQwODNoMC4yMDE2OTV2MTE4LjAwNjY4NUgyNzIuNDM4OTAzVjE4Ny41NDYzMzloMC44MDM3N2ExNC42NzI1NjYgMTQuNjcyNTY2IDAgMCAxLTAuMjAxNjk1LTIuNDA4M0gxODIuNTg4ODU0Yy00Ny4xMjgzMTggMC04NS4zMzM1ODQgMzguMjA1MjY2LTg1LjMzMzU4NCA4NS4zMzM1ODR2NjAwLjU2NDAxOGMwIDQ3LjEyODYxOSAzOC4yMDUyNjYgODUuMzMzNTg0IDg1LjMzMzU4NCA4NS4zMzM1ODRoNjU4LjgyMjI5MmM0Ny4xMjg2MTkgMCA4NS4zMzM1ODQtMzguMjA0OTY1IDg1LjMzMzU4NC04NS4zMzM1ODRWMjcwLjQ3MTYyM2MwLTQ3LjEyODMxOC0zOC4yMDQ5NjUtODUuMzMzNTg0LTg1LjMzMzU4NC04NS4zMzM1ODR6IG0tMzAuNTE5NzggMjk3LjUxODAzM0w0NjkuNDE5NDU1IDgyNS4zODM5MTJjLTEuMTI0OTc3IDEuMTI4ODktMi41MDAxMTYgMS44MjE4NzktMy44OTA5MDkgMi4wNzU5NTQtMS42MjE2ODkgMC40OTgyMTctMy4yMTU5ODMgMC4yODM4NzgtNC4yMzg5MDktMC43NDI2NmwtMjE4LjA1NTI4MS0yMTguODU3MjQ1Yy0xLjcwNjg4Mi0xLjcxMzIwNC0xLjE3Njc1NS01LjAyMjgxIDEuMTgzOTgtNy4zOTI4NzhsNTkuMzExMzA0LTU5LjUyOTU1NmMyLjM2MTAzNy0yLjM2OTE2NSA1LjY1ODMtMi45MDEzOTkgNy4zNjUxODMtMS4xODgxOTVsMTUzLjA1OTQ4NyAxNTMuNjIxODI1YTE0LjYxMjk2IDE0LjYxMjk2IDAgMCAxIDEuMzA0MDk0LTAuMjMyNzAybDI3Ny41NzE4OTMtMjc4LjU5MjQwOWMyLjY3MzUxNC0yLjY4MzE0NyA2Ljc1MzQ3NC0yLjkzNjkyMSA5LjExNDUxMS0wLjU2NzQ1Nmw1OS4zMTEwMDMgNTkuNTI5ODU3YzIuMzYxOTQgMi4zNjg4NjQgMi4xMDg3NjcgNi40NjQ0NzgtMC41NjQ0NDUgOS4xNDc2MjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIxOTA4Ij48L3BhdGg+PHBhdGggZD0iTTQyOC4wNzUyNzEgMjIwLjUwMzkyYzAgMTAuNTA0MS01Ljk3NTU5NCAxOS4wMTkyNDYtMTMuMzQ2NDk2IDE5LjAxOTI0NkgzMTEuNjg1MTU3Yy03LjM3MTIwMyAwLTEzLjM0Njc5Ny04LjUxNTE0Ni0xMy4zNDY3OTctMTkuMDE5MjQ2Vjg2LjY1MDAyMWMwLTEwLjUwNDEgNS45NzU1OTQtMTkuMDE5MjQ2IDEzLjM0Njc5Ny0xOS4wMTkyNDZoMTAzLjA0MzYxOGM3LjM3MTIwMyAwIDEzLjM0NjQ5NiA4LjUxNTE0NiAxMy4zNDY0OTYgMTkuMDE5MjQ2VjIyMC41MDM5MnpNNzI1LjgwMTMyMSAyMjAuNTAzOTJjMCAxMC41MDQxLTUuOTc1NTk0IDE5LjAxOTI0Ni0xMy4zNDY3OTcgMTkuMDE5MjQ2aC0xMDMuMDQzNjE4Yy03LjM3MTIwMyAwLTEzLjM0Njc5Ny04LjUxNTE0Ni0xMy4zNDY3OTctMTkuMDE5MjQ2Vjg2LjY1MDAyMWMwLTEwLjUwNDEgNS45NzU1OTQtMTkuMDE5MjQ2IDEzLjM0Njc5Ny0xOS4wMTkyNDZoMTAzLjA0MzYxOGM3LjM3MTIwMyAwIDEzLjM0Njc5NyA4LjUxNTE0NiAxMy4zNDY3OTcgMTkuMDE5MjQ2VjIyMC41MDM5MnoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjE5MDkiPjwvcGF0aD48L3N2Zz4=';

   const QH_IMG_FACE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMzQyNzM2NjcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik02ODIuNjY2NjY3IDU1NC42NjY2Njd2MjEuMzMzMzMzYzAgODEuMDY2NjY3LTY4LjI2NjY2NyAxNDkuMzMzMzMzLTE0OS4zMzMzMzQgMTQ5LjMzMzMzM1MzODQgNjU3LjA2NjY2NyAzODQgNTc2VjU1NC42NjY2NjdoNDIuNjY2NjY3djIxLjMzMzMzM2MwIDU5LjczMzMzMyA0Ni45MzMzMzMgMTA2LjY2NjY2NyAxMDYuNjY2NjY2IDEwNi42NjY2NjdzMTA2LjY2NjY2Ny00Ni45MzMzMzMgMTA2LjY2NjY2Ny0xMDYuNjY2NjY3VjU1NC42NjY2NjdoNDIuNjY2NjY3ek0yMTMuMzMzMzMzIDQyNi42NjY2NjdWMjEzLjMzMzMzM2gyMTMuMzMzMzM0djQyLjY2NjY2N0gyNTZ2MTcwLjY2NjY2N0gyMTMuMzMzMzMzeiBtMCAyMTMuMzMzMzMzaDQyLjY2NjY2N3YxNzAuNjY2NjY3aDE3MC42NjY2Njd2NDIuNjY2NjY2SDIxMy4zMzMzMzN2LTIxMy4zMzMzMzN6IG02NDAtMjEzLjMzMzMzM2gtNDIuNjY2NjY2VjI1NmgtMTcwLjY2NjY2N1YyMTMuMzMzMzMzaDIxMy4zMzMzMzN2MjEzLjMzMzMzNHogbTAgMjEzLjMzMzMzM3YyMTMuMzMzMzMzaC0yMTMuMzMzMzMzdi00Mi42NjY2NjZoMTcwLjY2NjY2N3YtMTcwLjY2NjY2N2g0Mi42NjY2NjZ6IG0tMzg0LTI1NnY4NS4zMzMzMzNoLTQyLjY2NjY2NlYzODRoNDIuNjY2NjY2eiBtMTcwLjY2NjY2NyAwdjg1LjMzMzMzM2gtNDIuNjY2NjY3VjM4NGg0Mi42NjY2Njd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIzMDg2Ij48L3BhdGg+PC9zdmc+';

    //颜色选单
    Blockly.Blocks.PY_qdp_k210_color_sel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    { 
                        type: "input_value", 
                        name: "color" 
                    }
                ],
                "tooltip": "颜色选单,返回颜色元组",
                colour: QH_fill_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //列表块
    Blockly.Blocks.PY_qdp_k210_list_var = {
        init: function () {
            this.jsonInit({
                message0: '[%1]',
                args0: [
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "返回列表",
                colour: QH_fill_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    //字体加载
    Blockly.Blocks.PY_qdp_k210_image_font_load = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_font_load,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "width" 
                    },
                    { 
                        type: "input_value", 
                        name: "height" 
                    },
                    { 
                        type: "input_value", 
                        name: "path" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [["UTF-8","image.UTF8"],["ASCII","image.ASCII"]]
                    }
                ],
                "tooltip": "加载字库，用于在图片上显示中文",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //新建空图
    Blockly.Blocks.PY_qdp_k210_image_Image1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_Image1,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "width" 
                    },
                    { 
                        type: "input_value", 
                        name: "height" 
                    }
                    ],
                "tooltip": "新建空图存入变量",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //从文件打开图片
    Blockly.Blocks.PY_qdp_k210_image_Image = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_Image,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                    ],
                "tooltip": "从文件打开图片",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //字体加载
    Blockly.Blocks.PY_qdp_k210_image_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_clear,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "将图像中的所有像素设置为零\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //保存图片
    Blockly.Blocks.PY_qdp_k210_image_save = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_save,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                ],
                "tooltip": "将图像的副本保存到 path 中的文件系统。\n支持bmp/pgm/ppm/jpg/jpeg格式的图像文件。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //设置像素点数据
    Blockly.Blocks.PY_qdp_k210_image_set_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_set_pixel,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    }
                ],
                "tooltip": "设置一个像素点的值\n灰度图: 设置(x,y)坐标的灰度值。\n彩色图: 设置(x,y)坐标的(r,g,b)的值。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //获取像素点数据
    Blockly.Blocks.PY_qdp_k210_image_get_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_get_pixel,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "获取像素点数据,不同格式图片返回不同值\n灰度图：返回(x, y)位置的灰度像素值。\nRGB565：返回(x, y)位置的RGB888像素元组(r, g, b)。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    //创建一个图像对象的副本
    Blockly.Blocks.PY_qdp_k210_image_copy = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_copy,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "创建一个图像对象的副本\n区域指定请按x,y,w,h格式\n如不填写则复制整个图像的图像",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };



    //获取图片属性
    Blockly.Blocks.PY_qdp_k210_image_getinfo = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_getinfo,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [
                [Blockly.Msg.width, "width"],[Blockly.Msg.height, "height"],[Blockly.Msg.format, "format"],[Blockly.Msg.size, "size"]]
                    }
                ],
                "tooltip": "获取图片属性\n宽度:返回以像素计的图像的宽度。\n高度:返回以像素计的图像的高度\n格式:灰度图sensor.GRAYSCALE 、RGB图的 sensor.RGB565 和JPEG图像的 sensor.JPEG\n尺寸:返回以字节计的图像大小。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //压缩图片
    Blockly.Blocks.PY_qdp_k210_image_compress = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_compress,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "quality" 
                    }
                ],
                "tooltip": "返回一个JPEG压缩图像的原始图像",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //压缩图片
    Blockly.Blocks.PY_qdp_k210_image_tonew = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_tonew,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.to_grayscale, "to_grayscale"],[Blockly.Msg.to_rgb565, "to_rgb565"],[Blockly.Msg.to_rainbow, "to_rainbow"],[Blockly.Msg.pix_to_ai, "pix_to_ai"]]
                    }
                ],
                "tooltip": "返回一个JPEG压缩图像的原始图像",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制文本
    Blockly.Blocks.PY_qdp_k210_image_draw_string = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_string,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "x0" 
                    },
                    { 
                        type: "input_value", 
                        name: "y0" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "scale" 
                    },
                    { 
                        type: "input_value", 
                        name: "x_spacing" 
                    },
                    { 
                        type: "input_value", 
                        name: "y_spacing" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    },
                    { 
                        type: "input_value", 
                        name: "tex" 
                    }
                ],
                "tooltip": "从图像中的(x, y)位置开始绘制文本\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制文本
    Blockly.Blocks.PY_qdp_k210_image_draw_image = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_image,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                      "type": "field_input",
                      "name": "VAR1",
                      "text": "img1"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "x_scale" 
                    },
                    { 
                        type: "input_value", 
                        name: "y_scale" 
                    }
                ],
                "tooltip": "绘制一个图像 ，其左上角从位置x，y开始。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制字模
    Blockly.Blocks.PY_qdp_k210_image_draw_font = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_font,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "x" 
                    },
                    { 
                        type: "input_value", 
                        name: "y" 
                    },
                    { 
                        type: "input_value", 
                        name: "width" 
                    },
                    { 
                        type: "input_value", 
                        name: "height" 
                    },
                    { 
                        type: "input_value", 
                        name: "scale" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "data" 
                    }
                ],
                "tooltip": "打印字模字符串,显示用字模软件生成的字模数据\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制直线
    Blockly.Blocks.PY_qdp_k210_image_draw_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_line,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    },
                ],
                "tooltip": "在图像上绘制一条线\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    //绘制箭头
    Blockly.Blocks.PY_qdp_k210_image_draw_arrow = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_arrow,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    },
                ],
                "tooltip": "在图像上绘制一条箭头线\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制十字
    Blockly.Blocks.PY_qdp_k210_image_draw_cross = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_cross,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    }
                ],
                "tooltip": "在图像上绘制一个十字\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制圆
    Blockly.Blocks.PY_qdp_k210_image_draw_circle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_circle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fil',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "绘制一个圆形\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制矩形
    Blockly.Blocks.PY_qdp_k210_image_draw_rectangle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_rectangle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fil',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "绘制一个矩形\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //绘制特征点
    Blockly.Blocks.PY_qdp_k210_image_draw_keypoints = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_draw_keypoints,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_DRAW_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                      "type": "field_input",
                      "name": "keypoints",
                      "text": "keypoints"
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "thi" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fil',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "绘制一个矩形\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };
    
    //镜头畸变校正
    Blockly.Blocks.PY_qdp_k210_image_lens_corr = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_lens_corr,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "strength" 
                    },
                    { 
                        type: "input_value", 
                        name: "zoom" 
                    }
                ],
                "tooltip": "镜头畸变校正，以去除镜头造成的图像鱼眼效果。\n校正值:该值确定了对图像进行去鱼眼效果的程度。在默认取值1.8，然后调整这一数值使图像显示最佳效果。\n缩放比: 是在对图像进行缩放的数值。默认值为 1.0 。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //直方图均衡化
    Blockly.Blocks.PY_qdp_k210_image_histeq = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_histeq,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    },
                    { 
                        type: "input_value", 
                        name: "limit" 
                    }
                ],
                "tooltip": "直方图均衡化使图像中的对比度和亮度标准化。\n自适应直方图均衡，比非自适应直方图限定更好，但运行时间更长。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //模糊滤波
    Blockly.Blocks.PY_qdp_k210_image_mean = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_mean,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    },
                    { 
                        type: "input_value", 
                        name: "offset" 
                    }
                ],
                "tooltip": "标准均值模糊滤波\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //洪水填充
    Blockly.Blocks.PY_qdp_k210_image_cartoon = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_cartoon,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "seed" 
                    },
                    { 
                        type: "input_value", 
                        name: "float" 
                    }
                ],
                "tooltip": "遍历图像并使用洪水填充算法填充图像中的所有像素区域。通过将图像所有区域的颜色平坦化，可以有效地从图像中去除纹理。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //腐蚀算法
    Blockly.Blocks.PY_qdp_k210_image_erode = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_erode,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BASE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    }
                ],
                "tooltip": "腐蚀算法,从分割区域的边缘删除像素。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //膨胀算法
    Blockly.Blocks.PY_qdp_k210_image_dilate = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_dilate,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    }
                ],
                "tooltip": "膨胀算法,将像素添加到分割区域的边缘。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //填充图像
    Blockly.Blocks.PY_qdp_k210_image_flood_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_flood_fill,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "color" 
                    },
                    { 
                        type: "input_value", 
                        name: "seed" 
                    },
                    { 
                        type: "input_value", 
                        name: "float" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'invert',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'clear',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "从位置填充图像区域\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //填充图像
    Blockly.Blocks.PY_qdp_k210_image_linpolar = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_linpolar,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "图像从笛卡尔坐标重新投影到线性极坐标。\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //填充图像
    Blockly.Blocks.PY_qdp_k210_image_invert = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_invert,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FILTE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    }
                ],
                "tooltip": "从位置填充图像区域\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //直线对象
    Blockly.Blocks.PY_qdp_k210_image_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_line,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "line"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.line_pos, "line"],['x1', "x1"],['x2', "x2"],['y1', "y1"],['y2', "y2"],[Blockly.Msg.line_length, "length"],[Blockly.Msg.line_theta, "theta"],[Blockly.Msg.line_rho, "rho"],[Blockly.Msg.magnitude, "magnitude"]]
                    }
                ],
                "tooltip": "获取直线对象属性\n坐标:返回一个直线元组(x1, y1, x2, y2) \nx1:返回直线的p1顶点 x坐标分量。\nx2:同上\ny1:同上\ny2:同上\n长度:直线长度\n角度:直线角度\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //圆对象
    Blockly.Blocks.PY_qdp_k210_image_circle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_circle,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "cir"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [['x', "x"],['y', "y"],['r', "r"],[Blockly.Msg.magnitude, "magnitude"]]
                    }
                ],
                "tooltip": "获取圆对象属性\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //矩形对象
    Blockly.Blocks.PY_qdp_k210_image_rect = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_rect,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "rect"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.rect_corners, "corners"],[Blockly.Msg.rect_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.magnitude, "magnitude"]]
                    }
                ],
                "tooltip": "获取矩形对象属性\n角点坐标:返回矩形四个角组成的四个元组(x,y)的列表\n坐标尺寸:返回一个矩形元组(x, y, w, h)\n返回图像对象",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找直线
    Blockly.Blocks.PY_qdp_k210_image_find_lines = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_lines,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    },
                    { 
                        type: "input_value", 
                        name: "theta_margin" 
                    },
                    { 
                        type: "input_value", 
                        name: "rho_margin" 
                    }
                ],
                "tooltip": "使用霍夫变换查找图像中的所有直线。返回一个 image.line 对象的列表。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找线段
    Blockly.Blocks.PY_qdp_k210_image_find_line_segments = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_line_segments,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "distance" 
                    },
                    { 
                        type: "input_value", 
                        name: "difference" 
                    }
                ],
                "tooltip": "使用霍夫转换来查找图像中的线段。返回一个 image.line 对象的列表。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找圆
    Blockly.Blocks.PY_qdp_k210_image_find_circles = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_circles,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    },
                    { 
                        type: "input_value", 
                        name: "r_min" 
                    },
                    { 
                        type: "input_value", 
                        name: "r_max" 
                    },
                    { 
                        type: "input_value", 
                        name: "r_step" 
                    },
                    { 
                        type: "input_value", 
                        name: "x_margin" 
                    },
                    { 
                        type: "input_value", 
                        name: "y_margin" 
                    },
                    { 
                        type: "input_value", 
                        name: "r_margin" 
                    }
                ],
                "tooltip": "使用霍夫变换在图像中查找圆。返回一个 image.circle 对象列表。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找矩形
    Blockly.Blocks.PY_qdp_k210_image_find_rects = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_rects,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_SHAPE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    }
                ],
                "tooltip": "使用用于查找AprilTAg的相同的quad detection算法来查找图像中的矩形。 最适用与背景形成鲜明对比的矩形。AprilTag的quad detection可以处理任意缩放/旋转/剪切的矩形。 返回一个 image.rect 对象的列表。",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //rgb-->lab
    Blockly.Blocks.PY_qdp_k210_image_rgb_to_lab = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_rgb_to_lab,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "RGB888色彩转为LAB色彩",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

     //lab-->rgb
    Blockly.Blocks.PY_qdp_k210_image_lab_to_rgb = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_lab_to_rgb,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "LAB色彩转为RGB888色彩",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

     //rgb-->gray
    Blockly.Blocks.PY_qdp_k210_image_rgb_to_grayscale = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_rgb_to_grayscale,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    }
                ],
                "tooltip": "RGB888色彩转为灰度",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //gray-->rgb
    Blockly.Blocks.PY_qdp_k210_image_grayscale_to_rgb = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_grayscale_to_rgb,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "g_value" 
                    }
                ],
                "tooltip": "灰度转为RGB888",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //色块分析属性
    Blockly.Blocks.PY_qdp_k210_image_blob = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_blob,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "blob"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.blob_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.blob_pixels, "pixels"],[Blockly.Msg.blob_cx, "cx"],[Blockly.Msg.blob_cy, "cy"],[Blockly.Msg.blob_rotation, "rotation"],[Blockly.Msg.blob_code, "code"],[Blockly.Msg.blob_count, "count"],[Blockly.Msg.blob_area, "area"],[Blockly.Msg.blob_density, "density"]]
                    }
                ],
                "tooltip": "色块分析属性",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //直方图百分比值解析
    Blockly.Blocks.PY_qdp_k210_image_percentile = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_percentile,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "histogram"
                    },
                    { 
                        type: "input_value", 
                        name: "CDF" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.percentile_value, "value"],[Blockly.Msg.percentile_l_value, "l_value"],[Blockly.Msg.percentile_a_value, "a_value"],[Blockly.Msg.percentile_b_value, "b_value"]]
                    }
                ],
                "tooltip": "色块分析属性",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找色块
    Blockly.Blocks.PY_qdp_k210_image_find_blobs = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_blobs,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "LIST" 
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "area" 
                    },
                    { 
                        type: "input_value", 
                        name: "pixel" 
                    },
                    { 
                        type: "input_value", 
                        name: "margin" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    },
                ],
                "tooltip": "寻找色块",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //寻找直方图
    Blockly.Blocks.PY_qdp_k210_image_get_histogram = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_get_histogram,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_COLOR_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    }
                ],
                "tooltip": "获取直方图",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //条形码
    Blockly.Blocks.PY_qdp_k210_image_barcode = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_barcode,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_BARCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "barcode"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.barcode_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.barcode_payload, "payload"],[Blockly.Msg.barcode_type,"type"],[Blockly.Msg.barcode_rotation, "rotation"]]
                    }
                ],
                "tooltip": "条形码",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    //二维码
    Blockly.Blocks.PY_qdp_k210_image_qrcode = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_qrcode,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "qrcode"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.barcode_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.barcode_payload, "payload"],[Blockly.Msg.QRCODE_VERSION, "version"],
[Blockly.Msg.QRCODE_MASK, "mask"],[Blockly.Msg.barcode_type,"type"]]
                    }
                ],
                "tooltip": "二维码",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //apriltag
    Blockly.Blocks.PY_qdp_k210_image_apriltag = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_apriltag,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "qrcode"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.barcode_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.blob_cx, "cx"],[Blockly.Msg.blob_cy, "cy"],[Blockly.Msg.APRILTAG_ID, "id"],[Blockly.Msg.APRILTAG_FAMILY, "family"],[Blockly.Msg.blob_rotation, "rotation"],[Blockly.Msg.X_TRANSLATION, "x_translation"],[Blockly.Msg.Y_TRANSLATION, "y_translation"],[Blockly.Msg.Z_TRANSLATION, "z_translation"],[Blockly.Msg.X_ROTATION, "x_rotation"],[Blockly.Msg.Y_ROTATION, "y_rotation"],[Blockly.Msg.Z_ROTATION, "z_rotation"]]
                    }
                ],
                "tooltip": "apriltag",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //条形码
    Blockly.Blocks.PY_qdp_k210_image_find_barcodes = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_barcodes,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    }
                ],
                "tooltip": "条形码",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //二维码
    Blockly.Blocks.PY_qdp_k210_image_find_qrcodes = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_qrcodes,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    }
                ],
                "tooltip": "二维码",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //apriltag
    Blockly.Blocks.PY_qdp_k210_image_find_apriltags = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_apriltags,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    }
                ],
                "tooltip": "apriltag",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //特征点
    Blockly.Blocks.PY_qdp_k210_image_kptmatch = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_kptmatch,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "kptmatch"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'key',
                        options: [[Blockly.Msg.barcode_rect, "rect"],['x', "x"],['y', "y"],['w', "w"],['h', "h"],[Blockly.Msg.blob_cx, "cx"],[Blockly.Msg.blob_cy, "cy"],[Blockly.Msg.blob_count, "count"],[Blockly.Msg.line_theta, "theta"],[Blockly.Msg.KPTMATCH_MATCH, "match"]]
                    }
                ],
                "tooltip": "特征点",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //定向梯度直方图
    Blockly.Blocks.PY_qdp_k210_image_find_hog = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_hog,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "size" 
                    }
                ],
                "tooltip": "定向梯度直方图",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //特征识别
    Blockly.Blocks.PY_qdp_k210_image_find_keypoints = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_find_keypoints,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "img"
                    },
                    { 
                        type: "input_value", 
                        name: "roi" 
                    },
                    { 
                        type: "input_value", 
                        name: "max_keypoints" 
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    },
                    { 
                        type: "input_value", 
                        name: "scale_factor" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'normalized',
                        options: [[Blockly.Msg.yes, "True"],[Blockly.Msg.no, "False"]]
                    }
                ],
                "tooltip": "特征识别",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //特征比较
    Blockly.Blocks.PY_qdp_k210_image_match_descriptor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_image_match_descriptor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_QRCODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR1",
                      "text": "keypoints1"
                    },
                    {
                      "type": "field_input",
                      "name": "VAR2",
                      "text": "keypoints2"
                    },
                    { 
                        type: "input_value", 
                        name: "threshold" 
                    }
                ],
                "tooltip": "特征比较",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //人脸识别
    Blockly.Blocks.PY_qdp_k210_tuple_facedata = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_tuple_facedata,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FACE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "VAR",
                      "text": "FaceData"
                    },
                    { 
                        type: "input_value", 
                        name: "TEXT" 
                    }
                ],
                "tooltip": "",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

     //人脸识别
    Blockly.Blocks.PY_qdp_k210_face_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_face_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FACE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                "tooltip": "",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //人脸识别模型训练
    Blockly.Blocks.PY_qdp_k210_face_training = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_face_training,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FACE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "corpus",
                      "text": "FaceData"
                    },
                    { 
                        type: "input_value", 
                        name: "save" 
                    }
                ],
                "tooltip": "",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //人脸识别模型加载
    Blockly.Blocks.PY_qdp_k210_face_loading = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_face_loading,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FACE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "corpus",
                      "text": "FaceData"
                    },
                    { 
                        type: "input_value", 
                        name: "path" 
                    }
                ],
                "tooltip": "",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //人脸识别模型加载
    Blockly.Blocks.PY_qdp_k210_face_predict = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.PY_qdp_k210_face_predict,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_IMG_FACE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      "type": "field_input",
                      "name": "corpus",
                      "text": "FaceData"
                    }
                ],
                "tooltip": "",
                colour: QH_Img_base_color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;


