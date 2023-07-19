const readline = require("readline");
const rootUrl = 'https://apis.digital.gob.cl/fl/feriados'
const date = new Date();

const isHolidayToday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return await (await fetch(source)).json();
}

const wasYesterdayHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() - 1}`;
    return await (await fetch(source)).json();
}

const tomorrowIsHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`;
    return await (await fetch(source)).json();
}

const nextHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}`;
    const holidays = await (await fetch(source)).json();

    return holidays.find(holiday => Date.parse(holiday.fecha) > date);
}

module.exports = {
    isHolidayToday,
    tomorrowIsHoliday,
    wasYesterdayHoliday,
    nextHoliday
}