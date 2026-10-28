export interface JournalWeek {
  id: string
  weekNumber: number
  monthIndex: number
  monthName: string
  label: string
}

export interface JournalMonth {
  monthIndex: number
  monthName: string
  year: number
  title: string
  weeks: JournalWeek[]
}

export const JOURNALING_WEEKS_2027: JournalWeek[] = [
  {
    "id": "2027-w01",
    "weekNumber": 1,
    "monthIndex": 0,
    "monthName": "Enero",
    "label": "Semana del 1–3 de enero"
  },
  {
    "id": "2027-w02",
    "weekNumber": 2,
    "monthIndex": 0,
    "monthName": "Enero",
    "label": "Semana del 4–10 de enero"
  },
  {
    "id": "2027-w03",
    "weekNumber": 3,
    "monthIndex": 0,
    "monthName": "Enero",
    "label": "Semana del 11–17 de enero"
  },
  {
    "id": "2027-w04",
    "weekNumber": 4,
    "monthIndex": 0,
    "monthName": "Enero",
    "label": "Semana del 18–24 de enero"
  },
  {
    "id": "2027-w05",
    "weekNumber": 5,
    "monthIndex": 0,
    "monthName": "Enero",
    "label": "Semana del 25–31 de enero"
  },
  {
    "id": "2027-w06",
    "weekNumber": 6,
    "monthIndex": 1,
    "monthName": "Febrero",
    "label": "Semana del 1–7 de febrero"
  },
  {
    "id": "2027-w07",
    "weekNumber": 7,
    "monthIndex": 1,
    "monthName": "Febrero",
    "label": "Semana del 8–14 de febrero"
  },
  {
    "id": "2027-w08",
    "weekNumber": 8,
    "monthIndex": 1,
    "monthName": "Febrero",
    "label": "Semana del 15–21 de febrero"
  },
  {
    "id": "2027-w09",
    "weekNumber": 9,
    "monthIndex": 1,
    "monthName": "Febrero",
    "label": "Semana del 22–28 de febrero"
  },
  {
    "id": "2027-w10",
    "weekNumber": 10,
    "monthIndex": 2,
    "monthName": "Marzo",
    "label": "Semana del 1–7 de marzo"
  },
  {
    "id": "2027-w11",
    "weekNumber": 11,
    "monthIndex": 2,
    "monthName": "Marzo",
    "label": "Semana del 8–14 de marzo"
  },
  {
    "id": "2027-w12",
    "weekNumber": 12,
    "monthIndex": 2,
    "monthName": "Marzo",
    "label": "Semana del 15–21 de marzo"
  },
  {
    "id": "2027-w13",
    "weekNumber": 13,
    "monthIndex": 2,
    "monthName": "Marzo",
    "label": "Semana del 22–28 de marzo"
  },
  {
    "id": "2027-w14",
    "weekNumber": 14,
    "monthIndex": 2,
    "monthName": "Marzo",
    "label": "Semana del 29 de marzo al 4 de abril"
  },
  {
    "id": "2027-w15",
    "weekNumber": 15,
    "monthIndex": 3,
    "monthName": "Abril",
    "label": "Semana del 5–11 de abril"
  },
  {
    "id": "2027-w16",
    "weekNumber": 16,
    "monthIndex": 3,
    "monthName": "Abril",
    "label": "Semana del 12–18 de abril"
  },
  {
    "id": "2027-w17",
    "weekNumber": 17,
    "monthIndex": 3,
    "monthName": "Abril",
    "label": "Semana del 19–25 de abril"
  },
  {
    "id": "2027-w18",
    "weekNumber": 18,
    "monthIndex": 3,
    "monthName": "Abril",
    "label": "Semana del 26 de abril al 2 de mayo"
  },
  {
    "id": "2027-w19",
    "weekNumber": 19,
    "monthIndex": 4,
    "monthName": "Mayo",
    "label": "Semana del 3–9 de mayo"
  },
  {
    "id": "2027-w20",
    "weekNumber": 20,
    "monthIndex": 4,
    "monthName": "Mayo",
    "label": "Semana del 10–16 de mayo"
  },
  {
    "id": "2027-w21",
    "weekNumber": 21,
    "monthIndex": 4,
    "monthName": "Mayo",
    "label": "Semana del 17–23 de mayo"
  },
  {
    "id": "2027-w22",
    "weekNumber": 22,
    "monthIndex": 4,
    "monthName": "Mayo",
    "label": "Semana del 24–30 de mayo"
  },
  {
    "id": "2027-w23",
    "weekNumber": 23,
    "monthIndex": 4,
    "monthName": "Mayo",
    "label": "Semana del 31 de mayo al 6 de junio"
  },
  {
    "id": "2027-w24",
    "weekNumber": 24,
    "monthIndex": 5,
    "monthName": "Junio",
    "label": "Semana del 7–13 de junio"
  },
  {
    "id": "2027-w25",
    "weekNumber": 25,
    "monthIndex": 5,
    "monthName": "Junio",
    "label": "Semana del 14–20 de junio"
  },
  {
    "id": "2027-w26",
    "weekNumber": 26,
    "monthIndex": 5,
    "monthName": "Junio",
    "label": "Semana del 21–27 de junio"
  },
  {
    "id": "2027-w27",
    "weekNumber": 27,
    "monthIndex": 5,
    "monthName": "Junio",
    "label": "Semana del 28 de junio al 4 de julio"
  },
  {
    "id": "2027-w28",
    "weekNumber": 28,
    "monthIndex": 6,
    "monthName": "Julio",
    "label": "Semana del 5–11 de julio"
  },
  {
    "id": "2027-w29",
    "weekNumber": 29,
    "monthIndex": 6,
    "monthName": "Julio",
    "label": "Semana del 12–18 de julio"
  },
  {
    "id": "2027-w30",
    "weekNumber": 30,
    "monthIndex": 6,
    "monthName": "Julio",
    "label": "Semana del 19–25 de julio"
  },
  {
    "id": "2027-w31",
    "weekNumber": 31,
    "monthIndex": 6,
    "monthName": "Julio",
    "label": "Semana del 26 de julio al 1 de agosto"
  },
  {
    "id": "2027-w32",
    "weekNumber": 32,
    "monthIndex": 7,
    "monthName": "Agosto",
    "label": "Semana del 2–8 de agosto"
  },
  {
    "id": "2027-w33",
    "weekNumber": 33,
    "monthIndex": 7,
    "monthName": "Agosto",
    "label": "Semana del 9–15 de agosto"
  },
  {
    "id": "2027-w34",
    "weekNumber": 34,
    "monthIndex": 7,
    "monthName": "Agosto",
    "label": "Semana del 16–22 de agosto"
  },
  {
    "id": "2027-w35",
    "weekNumber": 35,
    "monthIndex": 7,
    "monthName": "Agosto",
    "label": "Semana del 23–29 de agosto"
  },
  {
    "id": "2027-w36",
    "weekNumber": 36,
    "monthIndex": 7,
    "monthName": "Agosto",
    "label": "Semana del 30 de agosto al 5 de septiembre"
  },
  {
    "id": "2027-w37",
    "weekNumber": 37,
    "monthIndex": 8,
    "monthName": "Septiembre",
    "label": "Semana del 6–12 de septiembre"
  },
  {
    "id": "2027-w38",
    "weekNumber": 38,
    "monthIndex": 8,
    "monthName": "Septiembre",
    "label": "Semana del 13–19 de septiembre"
  },
  {
    "id": "2027-w39",
    "weekNumber": 39,
    "monthIndex": 8,
    "monthName": "Septiembre",
    "label": "Semana del 20–26 de septiembre"
  },
  {
    "id": "2027-w40",
    "weekNumber": 40,
    "monthIndex": 8,
    "monthName": "Septiembre",
    "label": "Semana del 27 de septiembre al 3 de octubre"
  },
  {
    "id": "2027-w41",
    "weekNumber": 41,
    "monthIndex": 9,
    "monthName": "Octubre",
    "label": "Semana del 4–10 de octubre"
  },
  {
    "id": "2027-w42",
    "weekNumber": 42,
    "monthIndex": 9,
    "monthName": "Octubre",
    "label": "Semana del 11–17 de octubre"
  },
  {
    "id": "2027-w43",
    "weekNumber": 43,
    "monthIndex": 9,
    "monthName": "Octubre",
    "label": "Semana del 18–24 de octubre"
  },
  {
    "id": "2027-w44",
    "weekNumber": 44,
    "monthIndex": 9,
    "monthName": "Octubre",
    "label": "Semana del 25–31 de octubre"
  },
  {
    "id": "2027-w45",
    "weekNumber": 45,
    "monthIndex": 10,
    "monthName": "Noviembre",
    "label": "Semana del 1–7 de noviembre"
  },
  {
    "id": "2027-w46",
    "weekNumber": 46,
    "monthIndex": 10,
    "monthName": "Noviembre",
    "label": "Semana del 8–14 de noviembre"
  },
  {
    "id": "2027-w47",
    "weekNumber": 47,
    "monthIndex": 10,
    "monthName": "Noviembre",
    "label": "Semana del 15–21 de noviembre"
  },
  {
    "id": "2027-w48",
    "weekNumber": 48,
    "monthIndex": 10,
    "monthName": "Noviembre",
    "label": "Semana del 22–28 de noviembre"
  },
  {
    "id": "2027-w49",
    "weekNumber": 49,
    "monthIndex": 10,
    "monthName": "Noviembre",
    "label": "Semana del 29 de noviembre al 5 de diciembre"
  },
  {
    "id": "2027-w50",
    "weekNumber": 50,
    "monthIndex": 11,
    "monthName": "Diciembre",
    "label": "Semana del 6–12 de diciembre"
  },
  {
    "id": "2027-w51",
    "weekNumber": 51,
    "monthIndex": 11,
    "monthName": "Diciembre",
    "label": "Semana del 13–19 de diciembre"
  },
  {
    "id": "2027-w52",
    "weekNumber": 52,
    "monthIndex": 11,
    "monthName": "Diciembre",
    "label": "Semana del 20–26 de diciembre"
  },
  {
    "id": "2027-w53",
    "weekNumber": 53,
    "monthIndex": 11,
    "monthName": "Diciembre",
    "label": "Semana del 27–31 de diciembre"
  }
]

export const JOURNALING_MONTHS_2027: JournalMonth[] = [
  {
    "monthIndex": 0,
    "monthName": "Enero",
    "year": 2027,
    "title": "ENERO 2027",
    "weeks": [
      {
        "id": "2027-w01",
        "weekNumber": 1,
        "monthIndex": 0,
        "monthName": "Enero",
        "label": "Semana del 1–3 de enero"
      },
      {
        "id": "2027-w02",
        "weekNumber": 2,
        "monthIndex": 0,
        "monthName": "Enero",
        "label": "Semana del 4–10 de enero"
      },
      {
        "id": "2027-w03",
        "weekNumber": 3,
        "monthIndex": 0,
        "monthName": "Enero",
        "label": "Semana del 11–17 de enero"
      },
      {
        "id": "2027-w04",
        "weekNumber": 4,
        "monthIndex": 0,
        "monthName": "Enero",
        "label": "Semana del 18–24 de enero"
      },
      {
        "id": "2027-w05",
        "weekNumber": 5,
        "monthIndex": 0,
        "monthName": "Enero",
        "label": "Semana del 25–31 de enero"
      }
    ]
  },
  {
    "monthIndex": 1,
    "monthName": "Febrero",
    "year": 2027,
    "title": "FEBRERO 2027",
    "weeks": [
      {
        "id": "2027-w06",
        "weekNumber": 6,
        "monthIndex": 1,
        "monthName": "Febrero",
        "label": "Semana del 1–7 de febrero"
      },
      {
        "id": "2027-w07",
        "weekNumber": 7,
        "monthIndex": 1,
        "monthName": "Febrero",
        "label": "Semana del 8–14 de febrero"
      },
      {
        "id": "2027-w08",
        "weekNumber": 8,
        "monthIndex": 1,
        "monthName": "Febrero",
        "label": "Semana del 15–21 de febrero"
      },
      {
        "id": "2027-w09",
        "weekNumber": 9,
        "monthIndex": 1,
        "monthName": "Febrero",
        "label": "Semana del 22–28 de febrero"
      }
    ]
  },
  {
    "monthIndex": 2,
    "monthName": "Marzo",
    "year": 2027,
    "title": "MARZO 2027",
    "weeks": [
      {
        "id": "2027-w10",
        "weekNumber": 10,
        "monthIndex": 2,
        "monthName": "Marzo",
        "label": "Semana del 1–7 de marzo"
      },
      {
        "id": "2027-w11",
        "weekNumber": 11,
        "monthIndex": 2,
        "monthName": "Marzo",
        "label": "Semana del 8–14 de marzo"
      },
      {
        "id": "2027-w12",
        "weekNumber": 12,
        "monthIndex": 2,
        "monthName": "Marzo",
        "label": "Semana del 15–21 de marzo"
      },
      {
        "id": "2027-w13",
        "weekNumber": 13,
        "monthIndex": 2,
        "monthName": "Marzo",
        "label": "Semana del 22–28 de marzo"
      },
      {
        "id": "2027-w14",
        "weekNumber": 14,
        "monthIndex": 2,
        "monthName": "Marzo",
        "label": "Semana del 29 de marzo al 4 de abril"
      }
    ]
  },
  {
    "monthIndex": 3,
    "monthName": "Abril",
    "year": 2027,
    "title": "ABRIL 2027",
    "weeks": [
      {
        "id": "2027-w15",
        "weekNumber": 15,
        "monthIndex": 3,
        "monthName": "Abril",
        "label": "Semana del 5–11 de abril"
      },
      {
        "id": "2027-w16",
        "weekNumber": 16,
        "monthIndex": 3,
        "monthName": "Abril",
        "label": "Semana del 12–18 de abril"
      },
      {
        "id": "2027-w17",
        "weekNumber": 17,
        "monthIndex": 3,
        "monthName": "Abril",
        "label": "Semana del 19–25 de abril"
      },
      {
        "id": "2027-w18",
        "weekNumber": 18,
        "monthIndex": 3,
        "monthName": "Abril",
        "label": "Semana del 26 de abril al 2 de mayo"
      }
    ]
  },
  {
    "monthIndex": 4,
    "monthName": "Mayo",
    "year": 2027,
    "title": "MAYO 2027",
    "weeks": [
      {
        "id": "2027-w19",
        "weekNumber": 19,
        "monthIndex": 4,
        "monthName": "Mayo",
        "label": "Semana del 3–9 de mayo"
      },
      {
        "id": "2027-w20",
        "weekNumber": 20,
        "monthIndex": 4,
        "monthName": "Mayo",
        "label": "Semana del 10–16 de mayo"
      },
      {
        "id": "2027-w21",
        "weekNumber": 21,
        "monthIndex": 4,
        "monthName": "Mayo",
        "label": "Semana del 17–23 de mayo"
      },
      {
        "id": "2027-w22",
        "weekNumber": 22,
        "monthIndex": 4,
        "monthName": "Mayo",
        "label": "Semana del 24–30 de mayo"
      },
      {
        "id": "2027-w23",
        "weekNumber": 23,
        "monthIndex": 4,
        "monthName": "Mayo",
        "label": "Semana del 31 de mayo al 6 de junio"
      }
    ]
  },
  {
    "monthIndex": 5,
    "monthName": "Junio",
    "year": 2027,
    "title": "JUNIO 2027",
    "weeks": [
      {
        "id": "2027-w24",
        "weekNumber": 24,
        "monthIndex": 5,
        "monthName": "Junio",
        "label": "Semana del 7–13 de junio"
      },
      {
        "id": "2027-w25",
        "weekNumber": 25,
        "monthIndex": 5,
        "monthName": "Junio",
        "label": "Semana del 14–20 de junio"
      },
      {
        "id": "2027-w26",
        "weekNumber": 26,
        "monthIndex": 5,
        "monthName": "Junio",
        "label": "Semana del 21–27 de junio"
      },
      {
        "id": "2027-w27",
        "weekNumber": 27,
        "monthIndex": 5,
        "monthName": "Junio",
        "label": "Semana del 28 de junio al 4 de julio"
      }
    ]
  },
  {
    "monthIndex": 6,
    "monthName": "Julio",
    "year": 2027,
    "title": "JULIO 2027",
    "weeks": [
      {
        "id": "2027-w28",
        "weekNumber": 28,
        "monthIndex": 6,
        "monthName": "Julio",
        "label": "Semana del 5–11 de julio"
      },
      {
        "id": "2027-w29",
        "weekNumber": 29,
        "monthIndex": 6,
        "monthName": "Julio",
        "label": "Semana del 12–18 de julio"
      },
      {
        "id": "2027-w30",
        "weekNumber": 30,
        "monthIndex": 6,
        "monthName": "Julio",
        "label": "Semana del 19–25 de julio"
      },
      {
        "id": "2027-w31",
        "weekNumber": 31,
        "monthIndex": 6,
        "monthName": "Julio",
        "label": "Semana del 26 de julio al 1 de agosto"
      }
    ]
  },
  {
    "monthIndex": 7,
    "monthName": "Agosto",
    "year": 2027,
    "title": "AGOSTO 2027",
    "weeks": [
      {
        "id": "2027-w32",
        "weekNumber": 32,
        "monthIndex": 7,
        "monthName": "Agosto",
        "label": "Semana del 2–8 de agosto"
      },
      {
        "id": "2027-w33",
        "weekNumber": 33,
        "monthIndex": 7,
        "monthName": "Agosto",
        "label": "Semana del 9–15 de agosto"
      },
      {
        "id": "2027-w34",
        "weekNumber": 34,
        "monthIndex": 7,
        "monthName": "Agosto",
        "label": "Semana del 16–22 de agosto"
      },
      {
        "id": "2027-w35",
        "weekNumber": 35,
        "monthIndex": 7,
        "monthName": "Agosto",
        "label": "Semana del 23–29 de agosto"
      },
      {
        "id": "2027-w36",
        "weekNumber": 36,
        "monthIndex": 7,
        "monthName": "Agosto",
        "label": "Semana del 30 de agosto al 5 de septiembre"
      }
    ]
  },
  {
    "monthIndex": 8,
    "monthName": "Septiembre",
    "year": 2027,
    "title": "SEPTIEMBRE 2027",
    "weeks": [
      {
        "id": "2027-w37",
        "weekNumber": 37,
        "monthIndex": 8,
        "monthName": "Septiembre",
        "label": "Semana del 6–12 de septiembre"
      },
      {
        "id": "2027-w38",
        "weekNumber": 38,
        "monthIndex": 8,
        "monthName": "Septiembre",
        "label": "Semana del 13–19 de septiembre"
      },
      {
        "id": "2027-w39",
        "weekNumber": 39,
        "monthIndex": 8,
        "monthName": "Septiembre",
        "label": "Semana del 20–26 de septiembre"
      },
      {
        "id": "2027-w40",
        "weekNumber": 40,
        "monthIndex": 8,
        "monthName": "Septiembre",
        "label": "Semana del 27 de septiembre al 3 de octubre"
      }
    ]
  },
  {
    "monthIndex": 9,
    "monthName": "Octubre",
    "year": 2027,
    "title": "OCTUBRE 2027",
    "weeks": [
      {
        "id": "2027-w41",
        "weekNumber": 41,
        "monthIndex": 9,
        "monthName": "Octubre",
        "label": "Semana del 4–10 de octubre"
      },
      {
        "id": "2027-w42",
        "weekNumber": 42,
        "monthIndex": 9,
        "monthName": "Octubre",
        "label": "Semana del 11–17 de octubre"
      },
      {
        "id": "2027-w43",
        "weekNumber": 43,
        "monthIndex": 9,
        "monthName": "Octubre",
        "label": "Semana del 18–24 de octubre"
      },
      {
        "id": "2027-w44",
        "weekNumber": 44,
        "monthIndex": 9,
        "monthName": "Octubre",
        "label": "Semana del 25–31 de octubre"
      }
    ]
  },
  {
    "monthIndex": 10,
    "monthName": "Noviembre",
    "year": 2027,
    "title": "NOVIEMBRE 2027",
    "weeks": [
      {
        "id": "2027-w45",
        "weekNumber": 45,
        "monthIndex": 10,
        "monthName": "Noviembre",
        "label": "Semana del 1–7 de noviembre"
      },
      {
        "id": "2027-w46",
        "weekNumber": 46,
        "monthIndex": 10,
        "monthName": "Noviembre",
        "label": "Semana del 8–14 de noviembre"
      },
      {
        "id": "2027-w47",
        "weekNumber": 47,
        "monthIndex": 10,
        "monthName": "Noviembre",
        "label": "Semana del 15–21 de noviembre"
      },
      {
        "id": "2027-w48",
        "weekNumber": 48,
        "monthIndex": 10,
        "monthName": "Noviembre",
        "label": "Semana del 22–28 de noviembre"
      },
      {
        "id": "2027-w49",
        "weekNumber": 49,
        "monthIndex": 10,
        "monthName": "Noviembre",
        "label": "Semana del 29 de noviembre al 5 de diciembre"
      }
    ]
  },
  {
    "monthIndex": 11,
    "monthName": "Diciembre",
    "year": 2027,
    "title": "DICIEMBRE 2027",
    "weeks": [
      {
        "id": "2027-w50",
        "weekNumber": 50,
        "monthIndex": 11,
        "monthName": "Diciembre",
        "label": "Semana del 6–12 de diciembre"
      },
      {
        "id": "2027-w51",
        "weekNumber": 51,
        "monthIndex": 11,
        "monthName": "Diciembre",
        "label": "Semana del 13–19 de diciembre"
      },
      {
        "id": "2027-w52",
        "weekNumber": 52,
        "monthIndex": 11,
        "monthName": "Diciembre",
        "label": "Semana del 20–26 de diciembre"
      },
      {
        "id": "2027-w53",
        "weekNumber": 53,
        "monthIndex": 11,
        "monthName": "Diciembre",
        "label": "Semana del 27–31 de diciembre"
      }
    ]
  }
]
