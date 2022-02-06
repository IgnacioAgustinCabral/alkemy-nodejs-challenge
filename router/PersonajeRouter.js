const router = require('express').Router();
const { getPersonajes } = require('../controllers/PersonajeController');

router.get('/', getPersonajes);

module.exports = router;
