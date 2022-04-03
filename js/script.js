window.addEventListener("load",function(){



let fecha = new Date();
document.getElementById("nacimiento").value = fecha.toJSON().slice(0,10);

const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const fechaNacimiento = document.getElementById("nacimiento");
const telefono = document.getElementById("telefono");
const servicio = document.getElementById("servicio");
const errores = document.querySelector("#errores");
let errorList = [];

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    validarForm(nombre.value, email.value);

})

function validarForm(nombre, email){
    errores.innerHTML = "";
validarNombre(nombre);
validarEmail(email);

if(errorList.length > 0){

    for (let error of errorList) {
        errores.innerHTML += "<li>" + error + "</li>"
    }
}}



function validarEmail(email) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ( !expr.test(email) )
        errorList.push("Error: La dirección de correo " + email + " es incorrecta.");   
}


function validarNombre(nombre){
    let expr = /^[A-Za-z0-9_-]/;
    console.log("asdasd")
    if(!expr.test(nombre)){
        errorList.push("El nombre debe contener solo letras.")
    }
}

})
