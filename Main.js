const express = require("express");
const port = 9000;
const path = require("path");

const db = require("./config/mongoose");
const Contact = require("./models/contact");
// now below app var has app express functinalities
const app = express();

// setting template engine as ejs (viewEngine)
app.set("view engine", "ejs");
//combining path where the ejs files are placed
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("assets"));

// Creating a var list and adding key values
// called the below list in below get request
var Contactlist = [
  {
    name: "Tony",
    age: "50",
  },
  {
    name: "Steve",
    age: "80",
  },
  {
    name: "Thor",
    age: "1500",
  },
];

app.get("/", function (req, res) {
  // console.log(res);
  // res.send('<h1>server is running</h1>');

  // console.log(res);

  return res.render("home", {
    title: "My List",
    // calledthe created contact list as key value
    Contact_List: Contactlist,
  });
});

app.post("/Create-contactlist", function (req, res) {
  Contact.create(
    {
      name: req.body.Name,
      age: req.body.Age,
    },
    function (err, newContact) {
      if (err) {
        console.log("errpr in creating contact ", err);
        return;
      }
      console.log("********", newContact);
      return res.redirect("/");
    }
  );
});

//Rendering another Field Ejs file to JS

app.get("/Field", function (req, res) {
  return res.render("Field", {
    title: "BattleField",
  });
});

app.get("/delete-contact", function (req, res) {
  console.log(req.query);

  let Name = req.query.Name;

  let contactIndex = Contactlist.findIndex((contact) => contact.name == Name);

  if (contactIndex != -1) {
    Contactlist.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("got an error", err);
    return;
  }
  console.log("server is up and running on ", port);
  return;
});
