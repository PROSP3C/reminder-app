export const maxDaysOnCalendarUI = 42

export enum MONTH_STATES {
  PREV = 'PREV',
  CURR = 'CURR',
  NEXT = 'NEXT',
}

export const MONTH_INDEX_MAP: Record<number, string> = Object.freeze({
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
})

export const getTotalDaysInMonth = (month: number) => {
  const now = new Date()
  const year = now.getFullYear()

  return new Date(year, month + 1, 0).getDate()
}
