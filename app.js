const express = require('express');
require('dotenv').config();
const path = require('path');
const sequelize = require('./database/db');

const app = express();
const cors = require('cors');
const PersonajeRouter = require('./routes/PersonajeRouter');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/characters', PersonajeRouter);

app.get('/', (req, res) => {
	res.send('Hello');
});
sequelize.authenticate()
	.then(() => {
		console.log('Conectado a la base de datos satisfactoriamente');
	})
	.catch((error) => {
		console.log('Error al conectarse a la base', error);
	});
    
app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
