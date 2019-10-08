const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


//actual route - GET request /events
//description this will get all events

router.get('/', (req, res) => {
    Event.find()
   //.sort({ Date:-1 })
    .then(events => res.json(events))
});


//actual route - GET by ID request /events
//description - this route will GET an event by ID

router.get('/:id', (req, res, next) => {
    return Event.findById(req.params.id)
    .then(result => {console.log(result); res.status(201).json(result);})
    .catch(err => res.status(404).json({ success: false}));
});


//actual route - POST request /event
//description this will CREATE an event

router.post('/add', (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        contactName: req.body.contactName,
        contactPhone: req.body.contactPhone,
        contactEmail: req.body.contactEmail
    });

    newEvent.save().then(event => res.json(event));
});


//actual route - PUT request /event
//description - this route will UPDATE an event

router.post('/edit/:id', (req, res) => {
    event.findByIdAndUpdate(req.params.id)
    .then(event => {
        event.title = req.body.title;
        event.price = req.body.price;
        event.description = req.body.description;
        event.contactName = req.body.contactName;
        event.contactPhone = req.body.contactPhone;
        event.contactEmail = req.body.contactEmail;
        event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(404).json({ success: false}));
 });


//actual route - DELETE request /event/id
//description this will DELETE an event

router.delete('/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id)
    .then(event => {
        // event.title = req.body.title;
        // event.price = req.body.price;
        // event.description = req.body.description;
        // event.contactName = req.body.contactName;
        // event.contactPhone = req.body.contactPhone;
        // event.contactEmail = req.body.contactEmail;
        event.save()
        .then(() => res.json('Event deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(404).json({ success: false}));
 });



module.exports = router;