/*
 * File: server.js
 * Name: Wenjie Zhou
 * ID: 301337168
 * Date: Jun 6, 2023
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000); // Test web at localhost 3000
module.exports = app;
console.log('Server running at http://localhost:3000/');