const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

const homeController = require('./controllers/calculateController');
const errorController = require("./controllers/errorController");

//routers
const homeRoute = require("./routes/homeRouter");
const ipRoute = require("./routes/ipRouter");
const calculatorRoute = require('./routes/calculator');
const mathRoute = require('./routes/mathRouter');
//const unitRoute = require("./routes/converterRouter");
const binaryRoute = require("./routes/binaryRouter");
const generatorRoute = require("./routes/passGenRouter");
const webRoute = require("./routes/webRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // parsing body
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public/css")));

app.use(homeRoute);
app.use(ipRoute);
app.use(calculatorRoute);
//app.use(unitRoute);
app.use(binaryRoute);
app.use(mathRoute);
app.use(generatorRoute);
app.use(webRoute);

app.use(errorController.errorPage);

app.listen(3000,()=>{console.log("Server started ....")});