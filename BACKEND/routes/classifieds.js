const router = require('express').Router();
let Classified = require('../models/classified.model');

router.route('/').get((req, res) => {
    Classified.find()
    .then(classified => res.json(classifieds))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const item = req.body.item;
    const location = req.body.location;
    const contact = req.body.contact;

    const newClassified = new Classified({
        date,
        item,
        location,
        contact,
    });

    newClassified.save()
    .then(() => res.json('Classified added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Classified.findById(req.params.id)
    .then(classified => res.json(classified))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Classified.findByIdAndDelete(req.params.id)
    .then(() => res.json('Classified deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Classified.findById(req.params.id)
    .then(classified => {
        classified.date = req.body.date;
        classified.item = req.body.description;
        classified.location = req.body.location;
        classified.contact = req.body.contact;

        classified.save()
        .then(() => res.json('Classified updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;