var envvar = require('envvar');
var express = require('express');

var APP_PORT = envvar.number('APP_PORT', 3800);
var APP_HOST = envvar.string('APP_HOST');

var app = express();
var http = require('http').Server(app)

// Serve the interface
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Initialize server
http.listen(APP_PORT, APP_HOST, function() {
  console.log('site server listening on port', APP_PORT);
});
