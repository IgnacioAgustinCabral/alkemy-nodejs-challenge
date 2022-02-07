const router = require('express').Router();
const {
	getPersonajes,
	getPersonajeById,
	createPersonaje,
	updatePersonaje,
    deletePersonaje
} = require('../controllers/PersonajeController');

router.get('/', getPersonajes);
router.get('/:id', getPersonajeById);
router.post('/', createPersonaje);
router.put('/:id',updatePersonaje);
router.delete('/:id',deletePersonaje);

module.exports = router;
