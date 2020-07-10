const mongoose = require('mongoose');

const usSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	date: String,
	afect: String,
	cap: String,

});

module.exports = mongoose.model('Usuario', usSchema);