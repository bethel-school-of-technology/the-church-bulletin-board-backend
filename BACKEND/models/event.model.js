const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    contaceEmail: {type: String, required: true},
},
    {timestamps: true,}
);
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

