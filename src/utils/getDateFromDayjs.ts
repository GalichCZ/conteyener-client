import dayjs from "dayjs";

export const getDateFromDayjs = <T>(date: T) => {
    if (!dayjs.isDayjs(date)) return null;

    return new Date(dayjs(date).toDate().setHours(12, 0, 0, 0)).toString();
}