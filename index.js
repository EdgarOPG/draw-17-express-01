var express = require('express');

var app = express();

app.get('/', function(req, res){
  //TODO lo que va a hacer nuestra función.
  res.send("Hola mundo!");
});

app.listen(8080);
