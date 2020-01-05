const http = new XMLHttpRequest();

//URL CONEXION
const API_URL = "http://localhost:8001/server/bingo"

http.open('POST', API_URL, true);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

postDataPersona = () => {
    const data = {
        "tabla": "persona",
        "datos": {
            // "tipo_persona_id": 2,
            // "persona_nombre": document.getElementById('persona_nombre'),
            // "persona_email": document.getElementById('persona_email'),
            // "persona_clave": document.getElementById('persona_clave')
            "persona_nombre": "test",
            "persona_email": "test",
            "persona_clave": "test"
        }
    }

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.responseText));
        }
    }
    http.send(data);
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