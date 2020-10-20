/*
============================================
; Title:  gonzalez-header.js
; Author: Professor Krasso
; Date:   06 June 2020
; Modified By: Juvenal Gonzalez
; Description: function to be called to display a formatted header
;===========================================
*/

/*
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
//this code is being reused and I have only changed the title
//function that outputs 3 string variables in proper header format.
//6/11/2020 \n added
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US') + "\n";

	return output;
}