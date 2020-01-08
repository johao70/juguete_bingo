//POST DATA IN DATABASE - OK
const http = new XMLHttpRequest()

const API_URL = "http://localhost:8001/server/bingo"

postDataPersona = () => {
  let tabla = 'persona'
  let persona_nombre = document.getElementById('persona_nombre').value
  let persona_email = document.getElementById('persona_email').value
  let persona_clave = document.getElementById('persona_clave').value
  console.log(persona_nombre)
  let data = 
  `{
    "tabla": "${tabla}", 
    "datos":
      {
        "tipo_persona_id": 2,
        "persona_nombre": "${persona_nombre}",
        "persona_email": "${persona_email}",
        "persona_clave": "${persona_clave}"
      }
   }`

  http.open('POST', API_URL, true)
  http.setRequestHeader("Content-Type", "application/json")

  if ( persona_nombre == "" || persona_email == "" || persona_clave == "") {
    alert("Complete todos los datos para continuar...")
  }else{
    http.send(data)
    window.location.assign("./index.html")
  }

}

//GET DATA IN DATABASE
getDataPersona = () => {
  http.open('GET', API_URL, true )

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
    }
  }

  http.onload = () => {
    alert(`Loaded: ${http.status} ${http.response}`);
  }

  http.send()
}