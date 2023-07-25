const rootUrl = 'https://apis.digital.gob.cl/fl/feriados'
const date = new Date();

const isHolidayToday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const response = await fetch(source);
    return await response.json();
}

const wasYesterdayHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() - 1}`;
    const response = await fetch(source);
    return await response.json();
}

const tomorrowIsHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`;
    const response = await fetch(source);
    return await response.json();
}

const nextHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}`;
    const response = await fetch(source);
    const data = await response.json();
    return data.find(holiday => Date.parse(holiday.fecha) > date);
}

module.exports = {
    isHolidayToday,
    tomorrowIsHoliday,
    wasYesterdayHoliday,
    nextHoliday
}