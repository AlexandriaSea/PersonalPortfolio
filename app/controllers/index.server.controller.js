/*
 * File: index.server.controller.js
 * Name: Wenjie Zhou
 * ID: 301337168
 * Date: Jun 6, 2023
 */

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};