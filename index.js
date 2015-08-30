'use strict';

const envvar = require('envvar');
const express = require('express');

const APP_PORT = envvar.number('APP_PORT');
const APP_HOST = envvar.string('APP_HOST');

const app = express();
const http = require('http').Server(app);

// Serve the interface
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Initialize server
http.listen(APP_PORT, APP_HOST, function() {
  console.log('site server listening on port ', APP_PORT);
});
