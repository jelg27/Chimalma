const mongoose = require('mongoose');

const trSchema = new mongoose.Schema({
	nomSol: String,
	appSol: String,
	dir: String,
	email: String,
	des: String,
}); 
module.exports = mongoose.model('Trabajo', trSchema);