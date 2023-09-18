const {Router} = require('express');
const {
    tomorrowIsHoliday,
    todayIsHoliday,
    wasYesterdayHoliday,
    nextHoliday
} = require("../services/holidays.service.js");
const router = Router();

router.get('/holidays', async (req, res) => {

    const today = await todayIsHoliday();
    const tomorrow = await tomorrowIsHoliday();
    const yesterday = await wasYesterdayHoliday();
    const next = await nextHoliday();

    res.render('main', {today, tomorrow, yesterday, next});
});

module.exports = router;