/*
 * File: index.server.routes.js
 * Name: Wenjie Zhou
 * ID: 301337168
 * Date: Jun 6, 2023
 */

var express = require('express');
var router = express.Router();

/* Get home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Get about me page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* Get projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Get services page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* Get contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;