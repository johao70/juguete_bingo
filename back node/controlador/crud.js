const Sequelize = require('sequelize');
const database = require('../database/database');

const getDatos = database.define(
    'datos',
    {
      id,nombre,cedula,clave,direccion,email,telefono,tipopersona: {
        type: Sequelize.TEXT
      }
    },
    { timestamps: false }
  );

 getDatos.readAll =async (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}