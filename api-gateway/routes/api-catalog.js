 /*
============================================
; Title:  Assignment 4.3
; Author: Professor Krasso
; Date:   November 09 2020
; Modified By: Juvenal Gonzalez
; Description: routes to auth_controller
;===========================================
*/

/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var checkToken = require("../check-token");
var auth_controller = require('../controllers/authController');
// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);
//allows login requests and logout
router.post("/auth/login", auth_controller.user_login);
router.get("/auth/logout", auth_controller.user_logout);
module.exports = router;