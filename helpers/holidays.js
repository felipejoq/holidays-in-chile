const rootUrl = 'https://apis.digital.gob.cl/fl/feriados'
const date = new Date();

export const isHolidayToday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    console.log('Today url source: ',source);
    
    const response = await fetch(source);
    return await response.json();
}

export const wasYesterdayHoliday = async () => {
    let yesterday = new Date(date)
    yesterday.setDate(yesterday.getDate() - 1);

    const source = `${rootUrl}/${yesterday.getFullYear()}/${yesterday.getMonth() + 1}/${yesterday.getDate()}`;
    
    console.log('Yesterday url source: ',source);

    const response = await fetch(source);
    return await response.json();
}

export const tomorrowIsHoliday = async () => {

    let tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1);

    const source = `${rootUrl}/${tomorrow.getFullYear()}/${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;

    console.log('Tomorrow url source: ',source);

    const response = await fetch(source);
    return await response.json();
}

export const nextHoliday = async () => {
    const source = `${rootUrl}/${date.getFullYear()}`;
    const response = await fetch(source);
    const data = await response.json();
    return data.find(holiday => Date.parse(holiday.fecha) > date);
}