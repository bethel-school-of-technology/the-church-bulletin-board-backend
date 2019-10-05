const express = require('express');
const router = express.Router();

//classifieds model

const Classified = require('../models/Classified');

//actual route - GET request /classifieds
//description this will get all classifieds

router.get('/', (req, res) => {
    Classified.find()
    .then(classifieds => res.json(classifieds))
});

//actual route - GET by Classified ID
//description - this will GET a classified by ID

router.get('/:id', (req, res) => {
    return Classified.findById(req.params.id)
    .then(result => {console.log(result); res.status(201).json(result);})
    .catch(err => res.status(404).json({ success: false}));
});


//actual route - POST request /classified
//description this will CREATE an classified

router.post('/add', (req, res) => {
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

//actual route - PUT request /classified
//description - this route will UPDATE a classified

router.post('/update/:id', (req, res) => {
  let classifiedId = (req.params.id);
    Classified.findById({where: { _id:classifiedId}}, req.body)
        .then(result => res.redirect('/classifieds'))
        .catch(err => {
            res.status(400);
            res.send("There was a problem updating the Classified Id.  Please check the Classified Ad information.");
    });
// router.post('/update/:id', (req, res) => {
//     console.log(req.body)
//     let classifiedId = (req.params.id);
//     console.log(classifiedId)
//     Classified.updateOne({where: { _id:classifiedId}}, req.body)
//         .then(result => res.redirect('../classifieds/'))
//         .catch(err => {
//             res.status(400);
//             res.send("There was a problem updating the Classified Id.  Please check the Classified Ad information.");
//     });
    //const newClassified = new Classified({
        //_id: (req.params.id),
        // title: req.body.title,
        // price: req.body.price,
        // description: req.body.description,
        // contactName: req.body.contactName,
        // contactPhone: req.body.contactPhone,
        // contactEmail: req.body.contactEmail
    //});

   // newClassified.save().then(classified => res.json(classified));
});

//actual route - DELETE request /classifieds/id
//description this will DELETE a classified

router.delete('/:id', (req, res) => {
    Classified.findById(req.params.id)
    .then(classified => classified.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success:false }));
});
    



module.exports = router;