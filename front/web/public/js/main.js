const http = new XMLHttpRequest();

//URL CONEXION
const API_URL = "http://localhost:4000/persona"

postDataPersona = () => {
    http.open('POST', API_URL, true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
          console.log(http.responseText);
        }
    }

    const data =
    {
      // "tipo_persona_id": 1,
      // "cartilla_id": 1,
      persona_nombre: "test2",
      persona_email: "test2",
      persona_clave: "test2"
      // "persona_nombre": document.getElementById('persona_nombre'),
      // "persona_email": document.getElementById('persona_email'),
      // "persona_clave": document.getElementById('persona_clave')
    }

    console.log(data)
    http.send(data)
}







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