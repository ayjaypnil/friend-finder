app.get("api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;

  newfriend.routename = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});
