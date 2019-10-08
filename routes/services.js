const express = require('express');
const router = express.Router();
const Service = require('../models/Service');


//actual route - GET all requests /services
//description this will get ALL services

router.get('/', (req, res) => {
    Service.find()
    .then(services => res.json(services))
});


//actual route - GET a service by ID
//description - this will GET a service by ID

router.get('/:id', (req, res, next) => {
    return Service.findById(req.params.id)
    .then(result => {console.log(result); res.status(201).json(result);})
    .catch(err => res.status(404).json({ success: false}));
});


//actual route - POST request service
//description this will CREATE a service

router.post('/add', (req, res) => {
    const newService = new Service({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        contactName: req.body.contactName,
        contactPhone: req.body.contactPhone,
        contactEmail: req.body.contactEmail
    });

    newService.save().then(service => res.json(service));
});

//actual route - PUT request /service/id
//description - this will UPDATE a service by finding it by ID

router.post('/edit/:id', (req, res) => {
    Service.findByIdAndUpdate(req.params.id)
    .then(service => {
        service.title = req.body.title;
        service.price = req.body.price;
        service.description = req.body.description;
        service.contactName = req.body.contactName;
        service.contactPhone = req.body.contactPhone;
        service.contactEmail = req.body.contactEmail;
        service.save()
        .then(() => res.json('Classified updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(404).json({ success: false}));
 });


//actual route - DELETE request /service/id
//description this will DELETE an service

router.delete('/:id', (req, res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(service => { 
            // service.title = req.body.title;
            // service.price = req.body.price;
            // service.description = req.body.description;
            // service.contactName = req.body.contactName;
            // service.contactPhone = req.body.contactPhone;
            // service.contactEmail = req.body.contactEmail;
            service.save()
            .then(() => res.json('Service deleted!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(404).json({ success: false})
        );
});
    



module.exports = router;