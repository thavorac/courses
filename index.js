const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/admin');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routes);

app.listen(3000);