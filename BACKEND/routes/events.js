const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
    .then(event => res.json(events))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const description = req.body.description;
    const location = req.body.location;
    const contact = req.body.contact;

    const newEvent = new Event({
        date,
        description,
        location,
        contact,
    });

    newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((requ, res) => {
    Event.findById(requ.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
    .then(event => {
        event.date = req.body.date;
        event.description = req.body.description;
        event.location = req.body.location;
        event.contact = req.body.contact;

        event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;