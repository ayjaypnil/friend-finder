var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routing/htmlroutes.js")(app);
require("./app/routing/apiroutes.js")(app);
require("./app/data/friends.js");








app.listen(port, function() {
  console.log("Friend Finder app is listening on PORT: " + port);
});