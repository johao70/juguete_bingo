const { Router } = require('express');
const router = Router();
const { getPersonas, createPersonas } = require('../controllers/index.controller')

router.get('/personas', getPersonas);
router.post('/crearPersonas', createPersonas);

module.exports = router;