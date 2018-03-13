var path = require("path");

var friends = require("../data/friends.js")

  module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  

    app.post("/api/friends", function(req, res) {
      var newfriend = req.body;
      // newfriend.routename = newfriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfriend);
      friends.push(newfriend);

      res.json(newfriend);
    });
  }