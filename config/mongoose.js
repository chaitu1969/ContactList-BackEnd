// Require the librabry
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost/Contact_list_db");

// acquire the connection (To check if it is sucessful)
const db = mongoose.connection;

// on error print the error on console
db.on("error", console.error.bind(console, "error on connecting to db"));

// up and running then print the message
db.once("open", function () {
  console.log("sucessfully connection to db is established");
});
