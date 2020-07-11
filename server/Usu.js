const mongoose = require('mongoose');
//Esquema que es como un json que se va a subir a la base
const usSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	date: String,
	afect: String,
	cap: String,

});

module.exports = mongoose.model('Usuario', usSchema);