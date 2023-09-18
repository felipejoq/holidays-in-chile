import fs from "node:fs";
import {DATE_TODAY, ROOT_URL_SERVICE} from "../config/utils.js";

export const getDataHolidays = async () => {

    try {
        const existFile = fs.existsSync('./data/holidays.json');
        let jsonData = {}
        if (existFile) {
            jsonData = fs.readFileSync('./data/holidays.json').toString();
            return JSON.parse(jsonData.toString());
        } else {
            await saveAllHolidays();
            jsonData = fs.readFileSync('./data/holidays.json').toString();
            return JSON.parse(jsonData.toString());
        }
    } catch (error) {
        console.log('Error al leer el archivo holidays.json', error)
    }


}

const getAllHolidays = async () => {
    const source = `${ROOT_URL_SERVICE}/${DATE_TODAY.getFullYear()}`;
    const response = await fetch(source);
    if (!response.ok) {
        throw new Error('Hubo un error al obtener los datos del servicio.')
    }
    return await response.json();
}

export const saveAllHolidays = async () => {
    try {
        const allHolidays = (await getAllHolidays()).map(holiday => {
            holiday["fecha"] = new Date(holiday["fecha"]);
            return holiday;
        });
        fs.writeFileSync('./data/holidays.json', JSON.stringify(allHolidays));
        console.log('El archivo holiday.json se ha creado correctamente.');
    } catch (error) {
        console.error('Error al escribir el archivo con los feriados', error);
    }
}