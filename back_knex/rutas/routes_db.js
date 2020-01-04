;
const express = require('express')

let api = express.Router(),

control = require('../controles/crud')

api.get('/bingo', control.getDatos)
api.post('/bingo', control.postDatos)
api.put('/bingo', control.updateDatos )
api.delete('/bingo', control.deleteDatos)

module.exports = api