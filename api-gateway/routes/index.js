 /*
============================================
; Title:  Assignment 4.3
; Author: Professor Krasso
; Date:   November 09 2020
; Modified By: Juvenal Gonzalez
; Description: calls get to index
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
