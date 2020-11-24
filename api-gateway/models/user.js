 /*
============================================
; Title:  Assignment 4.3
; Author: Professor Krasso
; Date:   November 09 2020
; Modified By: Juvenal Gonzalez
; Description: sets schema for user object
;===========================================
*/


/*
Data fields username, password, and email
*/


var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema);


//adds a new user to database with user.save
module.exports.add = (user, callback) => {
    user.save(callback);
}
//queries id identifier
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};