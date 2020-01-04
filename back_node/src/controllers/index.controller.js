const { Pool } = require ('pg');

const pool= new Pool(
    {
        host:'localhost',
        user:'postgres',
        password:'1234',
        database:'bingo',
        post:'5432'
    }
);

//tabla Personas
const getPersonas = async(req,res) => {
   const response = await pool.query('SELECT * FROM personas');
   res.json(response.rows);
};

const createPersonas=async(req,res)=>{
const {nombre,cedula,clave,direccion,email,telefono,tipopersona}=req.body;

const response = await pool.query('INSERT INTO personas(nombre,cedula,clave,direccion,email,telefono,tipopersona) VALUES($1,$2,$3,$4,$5,$6,$7)',[nombre,cedula,clave,direccion,email,telefono,tipopersona])
res.send('usuario creado')
};

module.exports={
    getPersonas,
    createPersonas
}