//URL CONEXION
const API_URL = "http://localhost:8001/bingo/"

const data = {
    "tabla": "persona",
    "datos": {
        "tipo_persona_id": 2,
        "persona_nombre": document.getElementById('persona_nombre'),
        "persona_email": document.getElementById('persona_email'),
        "persona_clave": document.getElementById('persona_clave')
    }
}

postDataPersona = () => {
    http.post(API_URL, data)
    .subscribe( data => {
      // postData = data
    })
    window.location.reload()
}


// const http = require('http')

// postDataRegistro = () => {  
//     let tabla = 'persona'
//     let register = {
//         tabla: tabla, 
//         datos: [{
//                     idcliente: idcliente,
//                     idestado: idestado
//                 }]
//     }

//     http.post(environment.API_URL, register).subscribe( data => { })
// }







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}