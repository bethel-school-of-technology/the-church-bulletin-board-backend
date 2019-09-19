const express = require('express');
const router = express.Router();

//event model

const Event = require('./BACKEND/models/Event');

//actual route - GET request api/events
//description this will get all events

router.get('/', (req, res) => {
    Event.find()
   //.sort({ Date:-1 })
    .then(events => res.json(events))
});

//actual route - POST request api/event
//description this will CREATE an event

router.post('/', (req, res) => {
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

//actual route - DELETE request api/event/id
//description this will DELETE an event

router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success:false }));
});
    



module.exports = router;