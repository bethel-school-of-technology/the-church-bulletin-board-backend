const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect (uri, {useNewURLParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const eventsRouter = require('./routes/events');
const classifiedsRouter = require('./routes/classifieds');
const servicesRouter = require('/routes/services');


app.use('/events',eventsRouter);
app.use('/classifieds',classifiedsRouter);
app.use('/services',servicesRouter);

app.listen(port, () => {
    console.log(`Server is running on port; ${port}`);

});
