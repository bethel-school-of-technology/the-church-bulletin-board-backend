const express = require('express');
const router = express.Router();

//service model

const Service = require('../../models/Service');

//actual route - GET all requests api/services
//description this will get ALL services

router.get('/', (req, res) => {
    Service.find()
    .then(services => res.json(services))
});

//actual route - GET a service by ID

router.get('/:id', (req, res, next) => {
    return Service.findById(req.params.id)
    .then(result => {console.log(result); res.status(201).json(result);})
    .catch(err => res.status(404).json({ success: false}));
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


//actual route - PUT request api/service/id
//description - this will UPDATE a service by finding it by ID

router.post('/update/:id').post((req, res) => {
   Service.findById(req.params.id)
    .then(service => {
        service.title = req.body.title;
        service.price = req.body.price;
        service.description = req.description;   
        service.contactName = req.contactName;
        service.contactPhone = req.contactName;
        service.contactEmail = req.contactEmail;

        service.save()
            .then(() => res.json('Service updated!'));
            
})
    .catch(err => res.status(400).json('Erro: ' +err));
});


//actual route - DELETE request api/service/id
//description this will DELETE an service

router.delete('/:id', (req, res) => {
    Service.findById(req.params.id)
    .then(service => service.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success:false }));
});
    


module.exports = router;