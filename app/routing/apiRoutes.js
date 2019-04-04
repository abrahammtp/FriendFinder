var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function (req, res) {
        var match;
        var newFriend = req.body;
        var scoreDifference = 1000;

        for (let i = 0; i < friendsData.length; i++) {
            var newScoreDifference = 0;

            for (let h = 0; h < friendsData[i].scores.length; h++) {
                newScoreDifference += parseInt(Math.abs(newFriend.scores[h]) - parseInt(friendsData[i].scores[h]));
            }

            if (newScoreDifference < scoreDifference) {
                scoreDifference = newScoreDifference
                match = friendsData[i];
                console.log(match)
            }
        }

        friendsData.push(req.body);
        res.json(match);
    });

};