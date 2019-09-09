const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classifiedSchema = new Schema ({
    date: {type: Date, required: true},
    item: {type: String, required: true},
    location: {type: String, required: true},
    contact: {type: String, required: true},
},
    {timestamps: true,}
);
const Event = mongoose.model('Classified', classifiedSchema);

module.exports = Classified;
