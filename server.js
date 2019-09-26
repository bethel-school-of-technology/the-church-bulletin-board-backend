const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//body parser allows data post and get requests


//Routes used for API

const classifieds = require('./routes/api/classifieds');
const events = require('./routes/api/events');
const services = require('./routes/api/services');

const app = express();

//Body parser Middleware
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

app.use('/api/classifieds', classifieds);
app.use('/api/events', events);
app.use('/api/services', services);

//connect to server

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));