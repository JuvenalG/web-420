 /*
============================================
; Title:  Assignment 4.3
; Author: Professor Krasso
; Date:   November 09 2020
; Modified By: Juvenal Gonzalez
; Description: configures port on server
;===========================================
*/

//sets port to 3000
var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";

config.web.secret = "topsecret";

module.exports = config