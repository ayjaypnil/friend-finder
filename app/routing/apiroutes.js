var path = require("path");
var friends = require("../data/friends.js");
var bodyParser = require("body-parser");






  module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    
    });
  

    app.post("/api/friends", function(req, res) {
      var newfriend = req.body;
      // console.log(newfriend);

      var newfriendName = newfriend.name;
      var newfriendImage = newfriend.imageLink;
      var newfriendScore = newfriend.scores;
      console.log(newfriend);
     
      

        
        var matchName='';
        var matchimageLink='';
        var matchDifference = 1000;
        var differences =[];
        

      for (var i = 0; i < friends.length; i++){
          
        var totalDifference = 0;

        for (var j = 0; j < newfriendScore.length; j++) {
          totalDifference += Math.abs(newfriendScore[j] - parseInt(friends[i].scores[j]));
          
        }
        differences.push(totalDifference);
      }
      var match = differences.indexOf(Math.min(...differences));

      matchName = friends[match].name;
      matchimageLink = friends[match].imageLink;
      
      console.log(matchName);
      console.log(matchimageLink);

      friends.push(newfriend);
      
      res.json({status: 'OK', matchName: matchName, matchimageLink: matchimageLink});
    });

  };