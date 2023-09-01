process.env.TZ = 'America/Santiago';
const port = process.env.PORT || 3000;

import express from 'express';
import { create } from 'express-handlebars';
import routes from './routes/index.js';
import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import helpers from './helpers/helpers.js';

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

// console.log(__filename);
// console.log(__dirname);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
    console.log(new Date().toString())
});