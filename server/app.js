
/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000; // set our port

// Serve static assets from the client app folder
app.use("/", express.static("client/"));


// Start the server
var server = app.listen(port, function() {
 console.log('Listening on port %d', server.address().port);
});

module.exports = app;
