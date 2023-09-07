const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;