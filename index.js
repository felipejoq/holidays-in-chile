import jobGeneratingData from "./config/task.js";

process.env.TZ = 'America/Santiago';
const port = process.env.PORT || 3000;

import express from 'express';
import {create} from 'express-handlebars';
import routes from './routes/index.js';
import path, {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import helpers from './helpers/helpers.js';
import {getDataHolidays} from "./services/data.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.disable('x-powered-by');

app.use('/src', express.static(join(__dirname, 'public')));

const hbs = create({
    defaultLayout: 'main',
    layoutsDir: join(__dirname, 'views'),
    partialsDir: join(__dirname, 'views/partials'),
    helpers
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', join(__dirname + '/views'));

app.use('/', routes);

app.listen(port, async () => {
    console.log(`App listening on port http://localhost:${port}`);
    await getDataHolidays();
    await jobGeneratingData();
    console.log(new Date().toString())
});