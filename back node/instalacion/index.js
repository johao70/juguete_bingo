const express = require('express');
const app  = express();

const getDatos=require('../controlador/crud')

const PORT = 4000;

app.get('/', (req, res) => {
   res.send({ message: 'Hola mundo' });
 });
 
 app.listen(PORT, () => {
   console.log(`Server running at: http://localhost:${PORT}/`);
 });