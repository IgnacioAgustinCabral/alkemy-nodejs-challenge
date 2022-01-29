const express = require('express');
require('dotenv').config();
const path = require('path');
const sequelize = require('./database/db');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello');
});
app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
	sequelize
		.authenticate()
		.then(() => {
			console.log('Conectado a la base de datos satisfactoriamente');
		})
		.catch((error) => {
			console.log('Error al conectarse a la base', error);
		});
});
