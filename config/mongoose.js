const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Contact_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error on connecting to db'));

db.once('open', function(){
    console.log('sucessfully connection to db is established');
})