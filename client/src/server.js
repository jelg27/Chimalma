/*const http = require('http');

const server = http.createServer((req, res) => 	{
	res.status = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

server.listen(3000, () =>{
	console.log('servidor en puerto 3000');
})*/

const express = require('express');

const app = express();

app.get('/a', (req, res) => {
	res.send('Holis');
});

app.post('/asd', (req, res) => {
	res.send('post');
});

app.put('/aa', (req, res) => {
	res.send('put');
});

app.delete('/del', (req, res) => {
	res.send('delet dis');
});

app.listen(3000, () =>{
	console. log('servidor en puerto 3000');
});

app.use(express.static('../public/index.html'));