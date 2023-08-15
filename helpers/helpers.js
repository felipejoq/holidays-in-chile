const helper = {};

helper.toJSON = (context) => {
    return JSON.stringify(context);
};

helper.isInalienable = (value) => {
    return value === 0 ? 'Si' : 'No';
}

helper.todayIs = () => {
    return new Date().toLocaleDateString("es-CL",
        {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            timeZone: 'America/Santiago'
        });
}

helper.dateParse = (dateString) => {

    let dateSplit = dateString.split('-').map(value => Number(value))
    let date = new Date(Date.UTC(dateSplit[0], dateSplit[1] - 1, dateSplit[2] + 1))

    return date.toLocaleDateString("es-CL",
        {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            timeZone: 'America/Santiago'
        });
}

module.exports = helper;
