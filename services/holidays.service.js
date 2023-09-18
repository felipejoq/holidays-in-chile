import {DATE_TODAY, NO_HOLIDAY} from "../config/utils.js";
import {getDataHolidays} from "./data.service.js";

export const todayIsHoliday = async () => {
    const holidays = await getDataHolidays();
    const dateToday = new Date(DATE_TODAY).getUTCDate();

    const holidaysFind = holidays.filter(holiday => {

        const dateHoliday = new Date(holiday["fecha"]).getUTCDate();

        if (dateToday === dateHoliday) {
            return holiday;
        }
    });

    if (holidaysFind.length > 0) {
        return holidaysFind;
    } else {
        return NO_HOLIDAY;
    }
}

export const tomorrowIsHoliday = async () => {
    const tomorrow = new Date(DATE_TODAY)
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateTomorrow = tomorrow.getUTCDate();

    const holidays = await getDataHolidays();
    const holiday = holidays.filter(holiday => {
        const dateHoliday = new Date(holiday["fecha"]).getUTCDate();
        if (dateHoliday === dateTomorrow) {
            return holiday;
        }
    });

    if (holiday.length > 0) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}

export const wasYesterdayHoliday = async () => {
    let yesterday = new Date(DATE_TODAY)
    yesterday.setDate(yesterday.getDate() - 1);
    const dateYesterday = yesterday.getUTCDate();

    const holidays = await getDataHolidays();
    const holiday = holidays.filter(holiday => {
        const dateHoliday = new Date(holiday["fecha"]).getUTCDate();

        if (dateHoliday === dateYesterday) {
            return holiday;
        }
    });

    if (holiday.length > 0) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}

export const nextHoliday = async () => {
    const holidays = await getDataHolidays();


    const holiday = holidays.find(holiday => {

        if (new Date(holiday["fecha"]) > DATE_TODAY) {
            console.log(holiday)
            return holiday;
        }
    });

    if (holiday) {
        return holiday;
    } else {
        return NO_HOLIDAY;
    }
}