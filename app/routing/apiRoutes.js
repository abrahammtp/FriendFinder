// Importing data being exported from friends.js
var friendsData = require("../data/friends.js");
// Exporting a function to be used on htmlRoutes.js
module.exports = function (app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    // The algorithm to determine the closest match is going to be inside this post method. We run a for loop on all of the friends, and then we run one on the scores of those friends to compare it with the new friend.
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
                scoreDifference = newScoreDifference;
                match = friendsData[i];
                console.log(match);
            };
        };
        // We push the data to friendsData, and the match is sent as json to be displayed with the modal
        friendsData.push(req.body);
        res.json(match);
    });

};