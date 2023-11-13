import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

export const formatDate = (date: string | null) => {
    if (!date) return "";
    return dayjs(date).tz("Europe/Moscow").format("DD/MM/YYYY");
}