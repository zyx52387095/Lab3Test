
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');

const appRoutes = require('./routes/app');
const authRoutes = require('./routes/auth')//to do
const courseRoute = require('./routes/course.route')// to do
const courseListRoute = require('./routes/student.course.route') //todo 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//adding express middleware to serve static pages - e.g style.css
app.use("/public", express.static(__dirname+'/public'));

//set view engine to be ejs engine
app.set('view engine', 'ejs');


app.use('/', appRoutes);
app.use('/auth', authRoutes);//to do
app.use('/course', courseRoute);// to do 
app.use('/courselist',courseListRoute);// to do


mongoose.connect("mongodb://localhost:27017/Assignment3"); 
app.set('view engine', 'ejs');

app.listen(3000);
console.log("app started on port ", 3000);