const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//body parser allows data post and get requests


//Routes used for API

const classifieds = require('./routes/classifieds');
const events = require('./routes/events');
const services = require('./routes/services');

const app = express();

app.use(cors());

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mongo database

//db config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err =>console.log(err));

//use routes

app.use('/classifieds', classifieds);
app.use('/events', events);
app.use('/services', services);

//connect to server

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));