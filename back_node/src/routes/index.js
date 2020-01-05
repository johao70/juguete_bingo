const {Router} =require('express');
const router =Router();
const 
{
    getPersonas,
    createPersonas,
    deletePersonas,
    cartilla,
    createCartilla,
    deleteCartilla
} = require('../controllers/index.controller')

//rutas Tabla Personas
router.get('/persona',getPersonas);
router.post('/persona',createPersonas);
router.delete('/Personas/:clave',deletePersonas);


//Rutasrabla Cartillas
router.get('/cartilla',cartilla);
router.post('/cartilla',createCartilla);
router.delete('/cartilla/:codigo',deleteCartilla);

module.exports = router;