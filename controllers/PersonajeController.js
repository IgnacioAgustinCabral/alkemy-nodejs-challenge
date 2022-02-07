const model = require('../models');
const Personaje = model.Personaje;

const getPersonajes = async (req, res) => {
	try {
		const personajes = await Personaje.findAll({
			logging: false, // Saca el Executing (default): SELECT.... de la consola
		});
		res.status(200).json(personajes);
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};

const getPersonajeById = async (req, res) => {
	const { id } = req.params;
	try {
		const personaje = await Personaje.findOne(
			{ logging: false }, //// Saca el Executing (default): SELECT.... de la consola
			{ where: { id } }
		);
		return res.status(200).json(personaje);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};
const createPersonaje = async (req, res) => {
	const { imagen, nombre, edad, peso, historia } = req.body;
	try {
		await Personaje.create(
			{
				imagen,
				nombre,
				edad,
				peso,
				historia,
			},
			{
				logging: false, // saca el Executing (default): INSERT INTO .... de la consola
			}
		);
		return res.status(200).json('Character created successfully');
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const updatePersonaje = async (req, res) => {
	const { id } = req.params;
	const { imagen, nombre, edad, peso, historia } = req.body;
	try {
		await Personaje.update(
			{
				imagen,
				nombre,
				edad,
				peso,
				historia,
			},
			{
				where: { id },
				logging: false, //Saca el Executing (default): UPDATE... de la consola
			}
		);
		res.status(200).json('Character updated successfully');
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deletePersonaje = async (req, res) => {
	const { id } = req.params;
	try {
		const personaje = await Personaje.destroy({
			where: { id },
			logging: false,
		});
		return res.status(200).json('Character deleted successfully');
	} catch (error) {
		res.json(404).json({ error: error.message });
	}
};

module.exports = {
	getPersonajes,
	getPersonajeById,
	createPersonaje,
	updatePersonaje,
	deletePersonaje,
};
