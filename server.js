const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//body parser allows data post and get requests


const classifieds = require('./routes/api/classifieds');
const events = require('./routes/api/events');

const app = express();

//Body parser Middleware
app.use(bodyParser.json());

//Mongo database

//db config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MondgoDB Connected...'))
.catch(err =>console.log(err));

//use routes

app.use('/api/classifieds', classifieds);
app.use('/api/events', events);

//connect to server

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));