const express = require('express');
const router = express.Router();

//service model

const Service = require('../../models/Service');

//actual route - GET request api/services
//description this will get all services

router.get('/', (req, res) => {
    Service.find()
   //.sort({ Date:-1 })
    .then(services => res.json(services))
});

//actual route - POST request api/service
//description this will CREATE an service

router.post('/', (req, res) => {
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

//actual route - PUT request api/service
//description - this will update a service

//router.update('/:id', (requ, res) => {
    //Service.findById(req.params.id)
    //.then(service => service.update().then(() => res.json({ success: true})))
    //.catch(err => res.status(404).json({ success: false}));
//});

//actual route - DELETE request api/service/id
//description this will DELETE an service

router.delete('/:id', (req, res) => {
    Service.findById(req.params.id)
    .then(service => service.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success:false }));
});
    



module.exports = router;