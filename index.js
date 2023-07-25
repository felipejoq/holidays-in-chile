process.env.TZ = 'America/Santiago';
const express = require('express')
const exphbs = require('express-handlebars');
const routes = require('./routes/index');
const path = require('path');
const port = process.env.PORT || 3000;

const helpers = require('./helpers/helpers');

const app = express();

app.use('/src', express.static(path.join(__dirname, 'public')))

const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views/partials'),
    helpers
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/views'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
    console.log(new Date().toString())
})