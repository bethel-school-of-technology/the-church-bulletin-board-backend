const router = require('express').Router();
let Event = require('../models/classified.model');

router.route('/').get((req, res) => {
    Classified.find()
    .then(classified => res.json(classifieds))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const contactName = req.body.contactName;
    const contactPhone = req.body.contactPhone;
    const contactEmail = req.body.contactEmail;

    const newClassified = new Classified({
        title,
        price,
        description,
        contactName,
        contactPhone,
        contactEmail
    });

    newEvent.save()
    .then(() => res.json('Classified added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((requ, res) => {
    Classified.findById(requ.params.id)
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
        classified.title = req.body.title;
        classified.price = req.body.price;
        classified.description = req.body.description;
        classified.contactName = req.body.contactName;
        classified.contactPhone = req.body.contactPhone;
        classified.contactEmail = req.body.contactEmail;

        classified.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

