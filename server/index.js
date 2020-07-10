const express = require('express');
const app = express();
const path = require('path');
const SocketIO = require('socket.io')
const uri = process.env.MONGODB_URI;
const Us = require('./Usu');
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const client = new MongoClient(uri);
const db = mongoose.connection;
const dbName = "Usu";


mongoose.connection.on('connected', function(){
	mongoose.connection.db = mongoose.connection.client.db('Usus');
})
mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	
}).catch(err => console.log(err));


db.once('open', _ =>{
	console.log('base conectada');
})
//config server
app.set('port', process.env.PORT || 3000);
//config static files
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
//iniciar el server
const server = app.listen(app.get('port'), () => {
	console.log('escuchando en *:' + app.get('port'));
});
//intenta conectar a la base


//Sockets
const io = SocketIO(server);

io.on('connection', (socket) => {
	console.log('nueva conexión', socket.id);

	socket.on('reg:Usu', (data) => {

		const usuario = new Us(data);
		console.log("Conectado a la wea esta");
		usuario.save((err, document) => {
			if(err) console.log(err);
			console.log(document);
		});
	});

});





/*
io.on('connection', (socket) => {

	socket.on('Usuario', (Usu) => {

	const usuario = new Usu({
		nom: Usu.nom,
		app: Usu.app,
		email: Usu.email,
		date: Usu.date,
		afec: Usu.adec,
		cap: Usu.cap,
	});

	usu.save((err) => {
		if (err) return console.error(err);
	});

	console.log("asdads");


	});
});
*/

