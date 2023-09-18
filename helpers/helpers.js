const helper = {};

helper.toJSON = (context) => {
    return JSON.stringify(context);
};

helper.isInalienable = (value) => {
    return Number(value) === 1 ? 'Si es irrenunciable' : 'No es irrenunciable';
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
    const dateUTC = new Date(Date.parse(dateString));
    const opcionesFecha = {
        timeZone: 'America/Santiago',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    // Ajustar la fecha y hora para obtener la fecha en la zona horaria correcta
    dateUTC.setMinutes(dateUTC.getMinutes() + dateUTC.getTimezoneOffset());

    return dateUTC.toLocaleDateString("es-CL", opcionesFecha);
}

helper.toString = (obj) => {
    return JSON.stringify(obj);
}

module.exports = helper;