import { Router } from 'express';
import { isHolidayToday, tomorrowIsHoliday, wasYesterdayHoliday, nextHoliday } from "../helpers/holidays.js";
const router = Router();

router.get('/', async (req, res) => {

    const today = await isHolidayToday();
    const tomorrow = await tomorrowIsHoliday();
    const yesterday = await wasYesterdayHoliday();
    const next = await nextHoliday();

    res.render('main', {today, tomorrow, yesterday, next});
});

export default router;