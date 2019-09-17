const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    title: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    contaceEmail: {type: String, required: true},
},
    {timestamps: true,}
);
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;