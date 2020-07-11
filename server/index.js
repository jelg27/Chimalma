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

//Cambia la base de datos a la de Usus, es lo que usaré para alternar entre la de usuarios y la de empresas
mongoose.connection.on('connected', function(){
	mongoose.connection.db = mongoose.connection.client.db('Usus');
})

//Conecta a la base de datos y configuraciones que me pedía para no morir en el futuro
mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	
}).catch(err => console.log(err));

//Cuando se abre hago un log de que está conectada
db.once('open', _ =>{
	console.log('base conectada');
})

//configura el server en el puerto 3000
app.set('port', process.env.PORT || 3000);
//configurar con el buil de cliente
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
//iniciar el server
const server = app.listen(app.get('port'), () => {
	console.log('escuchando en *:' + app.get('port'));
});



//Sockets
const io = SocketIO(server);
//Conectta el socket
io.on('connection', (socket) => {
	console.log('nueva conexión', socket.id);
	//Si le mando algo al socket a traves de reg:Usu entra aqui
	socket.on('reg:Usu', (data) => {
		//creo un objeto de tipo usuario asignándole los datos enviados por el socket
		const usuario = new Us(data);
		console.log("Conectado a la wea esta");
		//Se sube el objeto a la base, cuando subes algo se genera un document en el que vienen los datos y una id
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

