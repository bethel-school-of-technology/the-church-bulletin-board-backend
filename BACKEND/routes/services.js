const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
    .then(service => res.json(services))
    .catch(err => res.status(400)).json('Error: ' + err);
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const contactName = req.body.contactName;
    const contactPhone = req.body.contactPhone;
    const contactEmail = req.body.contactEmail;

    const newService = new Service({
        title,
        price,
        description,
        contactName,
        contactPhone,
        contactEmail,
    });

    newService.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((requ, res) => {
    Service.findById(requ.params.id)
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(() => res.json('Service deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Service.findById(req.params.id)
    .then(service => {
        service.title = req.body.title;
        service.price = req.body.price;
        service.description = req.body.description;
        service.contactName = req.body.contactName;
        service.contactPhone = req.body.contactPhone;
        service.contactEmail = req.body.contactEmail;

        event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

