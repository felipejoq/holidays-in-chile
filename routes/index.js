import { Router } from 'express';
import {tomorrowIsHoliday, todayIsHoliday, wasYesterdayHoliday, nextHoliday} from "../services/holidays.service.js";
const router = Router();

router.get('/', async (req, res) => {

    const today = await todayIsHoliday();
    const tomorrow = await tomorrowIsHoliday();
    const yesterday = await wasYesterdayHoliday();
    const next = await nextHoliday();

    res.render('main', {today, tomorrow, yesterday, next});
});

export default router;