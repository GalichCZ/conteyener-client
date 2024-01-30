import dayjs from 'dayjs'

export const getDateFromDayjs = <T>(date: T) => {
  if (date instanceof Date) return new Date(date.setHours(12, 0, 0, 0)).toString()
  if (!dayjs.isDayjs(date)) return null

  return new Date(dayjs(date).toDate().setHours(12, 0, 0, 0)).toString()
}
