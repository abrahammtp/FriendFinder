// We requiere express which is going to be crucial for our routing
var express = require("express");

var path = require("path");

var app = express();
// We set up the server that is going to be listening to the app
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// Here we requiere the routes being exported from htmlRoutes.js
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



