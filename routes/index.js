const express = require('express');
const {isHolidayToday, tomorrowIsHoliday, wasYesterdayHoliday, nextHoliday} = require("../helpers/holidays");
const router = express.Router();

router.get('/', async (req, res) => {

    const today = await isHolidayToday();
    const tomorrow = await tomorrowIsHoliday();
    const yesterday = await wasYesterdayHoliday();
    const next = await nextHoliday();

    res.render('main', {today, tomorrow, yesterday, next});
});

module.exports = router;