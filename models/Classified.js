const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create schema
const ClassifiedSchema = new Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    contactEmail: {type: String, required: true},
});

module.exports = Classified = mongoose.model('classified', ClassifiedSchema);
