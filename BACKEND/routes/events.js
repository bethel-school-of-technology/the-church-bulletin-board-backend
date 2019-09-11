const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
    .then(event => res.json(events))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const contactName = req.body.contactName;
    const contactPhone = req.body.contactPhone;
    const contactEmail = req.body.contactEmail;

    const newEvent = new Event({
        title,
        price,
        description,
        contactName,
        contactPhone,
        contactEmail,
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
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

