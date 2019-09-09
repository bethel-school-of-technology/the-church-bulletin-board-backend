const router = require('express').Router();
let Event = require('../model/classified.model');

router.route('/').get((req, res) => {
    Event.find()
    .then(event => res.json(events))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const item = req.body.description;
    const location = req.body.location;
    const contact = req.body.contact;

    const newClassified = new Classified({
        date,
        item,
        location,
        contact,
    });

    newEvent.save()
    .then(() => res.json('Classified added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((requ, res) => {
    Classified.findById(requ.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Classified.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Classified.findById(req.params.id)
    .then(event => {
        classified.date = req.body.date;
        classified.item = req.body.description;
        classified.location = req.body.location;
        classified.contact = req.body.contact;

        classified.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;