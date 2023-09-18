const ROOT_URL_SERVICE = 'https://apis.digital.gob.cl/fl/feriados'
const DATE_TODAY = new Date();

const NO_HOLIDAY = {
    error: true,
    message: 'No se han encontrado feriados'
};

module.exports = {
    ROOT_URL_SERVICE,
    DATE_TODAY,
    NO_HOLIDAY
}