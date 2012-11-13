var express = require('express');
var app = express.createServer();

//Create a static file server
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

//Get the dummy data
require('./server/ddata.js');

app.listen(8080);
console.log('Express server started on port %s', app.address().port);