var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});