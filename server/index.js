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
const Tr = require('./Trab');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: 'sq9NxiCd0viEqof2T3i-0T6aMMITipdkbzCi9WvZYGvM',
  }),
  url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/ad6a8a7b-c9ad-4770-8b90-882b22b50739',
});


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
		mongoose.connection.db = mongoose.connection.client.db('Usus');
		//creo un objeto de tipo usuario asignándole los datos enviados por el socket
		const usuario = new Us(data);
		console.log("Conectado a la wea esta");
		//Se sube el objeto a la base, cuando subes algo se genera un document en el que vienen los datos y una id
		usuario.save((err, document) => {
			if(err) console.log(err);
			console.log(document);
		});
	});

	socket.on('log:Usus', (data) => {
		mongoose.connection.db = mongoose.connection.client.db('Usus');
		Us.findOne({email: data.email}, (err, document) => {
			console.log(document.email);
			const usuario = new Us(document);
			socket.send(usuario);
		});
	});

	socket.on('con:trab', (data) => {
		
		var cont;
		socket.removeAllListeners();
		mongoose.connection.db = mongoose.connection.client.db('Usus');
		Us.findOne({email: data.email}, (err, document)=>{
			
			const analyzeParams = {
  				'text': document.cap,
  				'features': {
    				'keywords': {
      				'sentiment': false,
      				'emotion': false,
      				'limit': 30,
    				}
  				},
  				language: 'es',
			};
			naturalLanguageUnderstanding.analyze(analyzeParams).then(analysisResults => {
				mongoose.connection.db = mongoose.connection.client.db('Trabajos');
				analysisResults.result.keywords.forEach(word => {
					Tr.find({'des': { '$regex' : word.text, '$options' : 'i' } }, (err, document) => {
						document.forEach(trabajo => {
							trabajos.push(trabajo);
							socket.send(trabajo);
						});

					});

				});
    			
  			}).catch(err => {
    			console.log('error:', err);
  			});


		});
		
		 /*const trab = new Tr({
		 	nomSol: 'Alicia',
			appSol: 'Del la cruz',
			dir: 'Calle feik no.123  col. F, Del. Iztacalco, CDMX',
			email: 'asa@asa.com',
			des: 'Solicito alguien que ponga instalación del gas',
		 });
		 console.log("Meter trabajo");
		 trab.save((err, document) => {
		 	if(err) console.log(err);
		 	console.log(document);
		 });
		 */
	});

});






