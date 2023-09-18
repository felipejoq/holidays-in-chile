const cron = require('node-cron');
const {saveAllHolidays} = require("../services/data.service.js");

const jobGeneratingData = async () => {
    cron.schedule('0 0 0 * * *', () => {
        saveAllHolidays();
        console.log('Data generate from cron-job');
    });
    console.log('Se ha creado un Schema para crear el archivo holiday.json una vez por día a las cero horas.')
}

module.exports = jobGeneratingData;