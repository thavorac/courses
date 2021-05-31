const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(cors())

const routes = require("./routes")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routes);
app.listen(3000);