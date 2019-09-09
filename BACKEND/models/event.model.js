const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    date: {type: Date, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    contact: {type: String, required: true},
},
    {timestamps: true,}
);
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;