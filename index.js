const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const routes = require("./routes/admin");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cookieParser());
app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1h expire
    sameSite: true,
    secure: false
  },
  secret: "this is a secret key",
  name: 'sid'
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect('mongodb+srv://user1:helloword@cluster0.qyreg.mongodb.net/Post?retryWrites=true&w=majority')
.then(result => {
  console.log("Db is connected");
  app.listen(3000);
}).catch(err => {
  console.log(err);
})