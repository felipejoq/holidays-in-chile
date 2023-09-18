const jobGeneratingData = require("./config/task.js");

process.env.TZ = 'America/Santiago';
const port = process.env.PORT || 3000;

const express = require('express');
const {create}  = require('express-handlebars');
const routes  =  require('./routes/index.js');
const {join} =  require('node:path');
const {fileURLToPath}  =  require('node:url');
const helpers  =  require('./helpers/helpers.js');
const {getDataHolidays}  =  require("./services/data.service.js");
const {dirname} = require("path");


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