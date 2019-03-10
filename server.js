var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var expressApp = express();
var PORT = 3000;
var friends = require("./app/data/friends")
expressApp.use(express.static('app/public'))

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());

expressApp.get("/", function(err, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });


expressApp.get("/api/friends", function(err, res) {
    res.json(friends);

})


expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.text());
expressApp.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/apiRoutes.js')(expressApp); 
require('./app/routing/htmlRoutes.js')(expressApp);

expressApp.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
