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

module.exports = helper;
