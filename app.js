//REQUIREMENTS
const express = require("express"),
      app     = express(),
      nodemon = require("nodemon");

//SETTING AND USING
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//ROUTES 
app.get("/", function(req, res){
  res.render("landing");
})

//SERVER SETUP 
let port = process.env.PORT;
if (port == null || port == "") {
  console.log("Server has started.")
  port = 3000;
}
app.listen(port);