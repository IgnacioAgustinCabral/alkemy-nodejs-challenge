const model = require('../models');
const Personaje = model.Personaje;

const getPersonajes = async (req, res) => {
	try {
		const personajes = await Personaje.findAll();
        res.status(200).json(personajes);
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
};

module.exports = {
	getPersonajes,
};
