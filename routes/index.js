const express = require('express');
const {isHolidayToday, tomorrowIsHoliday, wasYesterdayHoliday, nextHoliday} = require("../helpers/holidays");
const router = express.Router();

router.get('/', async (req, res) => {
    const date = new Date().toLocaleDateString("es-CL", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const today = await isHolidayToday();
    const tomorrow = await tomorrowIsHoliday();
    const yesterday = await wasYesterdayHoliday();
    const next = await nextHoliday();

    res.render('main', {today, tomorrow, yesterday, next, date});
});

module.exports = router;