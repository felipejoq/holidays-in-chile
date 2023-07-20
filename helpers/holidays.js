const rootUrl = 'https://apis.digital.gob.cl/fl/feriados'
const date = new Date();
const axios = require('axios');

const isHolidayToday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const {data} = await axios(source);
    return data;
}

const wasYesterdayHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() - 1}`;
    const {data} = await axios(source);
    return data;
}

const tomorrowIsHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`;
    const {data} = await axios(source);
    return data;
}

const nextHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}`;
    const {data} = await axios(source);
    return data.find(holiday => Date.parse(holiday.fecha) > date);
}

module.exports = {
    isHolidayToday,
    tomorrowIsHoliday,
    wasYesterdayHoliday,
    nextHoliday
}