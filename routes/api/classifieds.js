const express = require('express');
const router = express.Router();

//classifieds model

const Classified = require('../../models/Classified');

//actual route - GET request api/classifieds
//description this will get all classifieds

router.get('/', (req, res) => {
    Classified.find()
    .then(classifieds => res.json(classifieds))
});

//actual route - GET by Classified ID
//description - this will GET a classified by ID

router.get('/:id', (req, res, next) => {
    return Classified.findById(req.params.id)
    .then(result => {console.log(result); res.status(201).json(result);})
    .catch(err => res.status(404).json({ success: false}));
});


//actual route - POST request api/classified
//description this will CREATE a classified

router.post('/', (req, res) => {
    const newClassified = new Classified({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        contactName: req.body.contactName,
        contactPhone: req.body.contactPhone,
        contactEmail: req.body.contactEmail
    });

    newClassified.save().then(classified => res.json(classified));
});

//actual route - PUT request api/classified
//description - this route will UPDATE a classified

router.post('/:id', (req, res) => {
    Classified.findByIdAndUpdate(req.params.id)
    .then(classified => {
        classified.title = req.body.title;
        classified.price = req.body.price;
        classified.description = req.body.description;
        classified.contactName = req.body.contactName;
        classified.contactPhone = req.body.contactPhone;
        classified.contactEmail = req.body.contactEmail;

        classified.save()
        .then(() => res.json('Classified updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
            
    .catch(err => res.status(404).json({ success: false}));
});



//actual route - DELETE request api/classifieds/id
//description this will DELETE an classified

router.delete('/:id', (req, res) => {
    Classified.findById(req.params.id)
    .then(classified => classified.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success:false }));
});
    


module.exports = router;