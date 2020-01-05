const { Pool } = require ('pg');

const pool= new Pool
({
    host:'localhost',
    user:'postgres',
    password:'1234',
    database:'bingo',
    post:'5432'
});

//tabla Personas Get 
const getPersonas = async(req,res)=>{
   const response = await pool.query('SELECT * FROM persona');
   res.json(response.rows);
};

//tabla Personas Create
const createPersonas = async(req,res) => {
    const { tipo_persona_id, cartilla_id, persona_nombre, persona_email, persona_clave } = req.body;
    const response = await pool.query('INSERT INTO persona(tipo_persona_id, cartilla_id, persona_nombre, persona_email, persona_clave) VALUES($1, $2, $3, $4, $5)', [tipo_persona_id, cartilla_id, persona_nombre, persona_email, persona_clave]);
    res.json
    ({
        // message:'persona creada',
        body:
        {
            user:{ tipo_persona_id, cartilla_id, persona_nombre, persona_email, persona_clave }
        }
    })
};

//tabla Personas Delete
const deletePersonas = async (req, res) => {
    const clave = parseInt(req.params.clave);
    await pool.query('DELETE FROM personas where clave = $1', [ clave ]);
    res.json(`persona ${clave} eliminada`);
};



//tabla cartillas Get 
const cartilla= async(req,res)=>{
    const response= await pool.query('SELECT * FROM cartilla');
    res.json(response.rows);
 };

 //tabla cartillas Create
 const createCartilla=async(req,res)=>{
 const { cartilla_numeros, cartilla_codigo } = req.body;
 const response = await pool.query('INSERT INTO cartilla(cartilla_numeros, cartilla_codigo) VALUES($1,$2)',[ cartilla_numeros, cartilla_codigo ]);
 res.json({
     message:'cartilla creada',
     body:{
         user:{ cartilla_numeros, cartilla_codigo }
     }
    })
 };
 //tabla cartillas Delete
 const deleteCartilla = async (req, res) => {
    const codigo = parseInt(req.params.codigo);
    await pool.query('DELETE FROM cartilla where cartilla_codigo = $1', [
        codigo
    ]);
    res.json(`cartilla ${codigo} eliminada`);
};



// tabla PersonaCartilla get 
// const PerCartilla= async(req,res)=>{
//     const response= await pool.query('SELECT * FROM personacartilla');
//     res.json(response.rows);
//  };
//  //tabla PersonaCartilla Create
// const createPerCartilla=async(req,res)=>{
//     const {fkcartilla,fkpersona}=req.body;
//     const response = await pool.query('INSERT INTO personacartilla(fkcartilla,fkpersona) VALUES($1,$2)',[fkcartilla,fkpersona]);
//     res.json({
//         massage:'personacartilla creada',
//         body:{
//             user:{fkcartilla,fkpersona}
//         }
//        })
//     };
//     //tabla Personas Delete
// const deletePerCartilla = async (req, res) => {
//     const id = parseInt(req.params.id);
//     await pool.query('DELETE FROM personacartilla where id = $1', [
//         id
//     ]);
//     res.json(`personacartilla ${id} eliminada`);
// };

module.exports={
    //metodos de la tabla Personas
    getPersonas,
    createPersonas,
    deletePersonas,

    //metodos de la tabla Cartillas
    cartilla,
    createCartilla,
    deleteCartilla, 
    //metodos de la tablaPersonaCartilla
    // PerCartilla,
    // createPerCartilla,
    // deletePerCartilla
}