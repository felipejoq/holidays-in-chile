import {DATE_TODAY, NO_HOLIDAY, ROOT_URL_SERVICE} from "../config/utils.js";
import {getDataHolidays} from "./data.service.js";

export const todayIsHoliday = async () => {
    const holidays = await getDataHolidays();

    const holiday = holidays.find(holiday => {
        const dateHoliday = new Date(holiday["fecha"]).toLocaleDateString('es-CL');
        const dateToday = DATE_TODAY.toLocaleDateString('es-CL');
        if (dateHoliday === dateToday) {
            return holiday;
        }
    });

    if (holiday) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}

export const tomorrowIsHoliday = async () => {
    const tomorrow = new Date(DATE_TODAY)
    tomorrow.setDate(tomorrow.getDate() + 1);

    const holidays = await getDataHolidays();
    const holiday = holidays.find(holiday => {
        const dateHoliday = new Date(holiday["fecha"]).toLocaleDateString('es-CL');
        const dateTomorrow = tomorrow.toLocaleDateString('es-CL');
        if (dateHoliday === dateTomorrow) {
            return holiday;
        }
    });

    if (holiday) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}

export const wasYesterdayHoliday = async () => {
    let yesterday = new Date(DATE_TODAY)
    yesterday.setDate(yesterday.getDate() - 1);

    const holidays = await getDataHolidays();
    const holiday = holidays.find(holiday => {
        const dateHoliday = new Date(holiday["fecha"]).toLocaleDateString('es-CL');
        const dateYesterday = yesterday.toLocaleDateString('es-CL');
        if (dateHoliday === dateYesterday) {
            return holiday;
        }
    });

    if (holiday) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}

export const nextHoliday = async () => {
    const holidays = await getDataHolidays();

    const holiday = holidays.find(holiday => Date.parse(holiday["fecha"]) > DATE_TODAY);

    if (holiday) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}