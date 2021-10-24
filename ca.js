document.querySelector("#nuevokit").onclick=mostrarForm 
const formulario= document.querySelector("#nkForm")
//const campos= document.querySelectorAll("input")

function mostrarForm(){
    formulario.style.top="0"
    
  
}

document.querySelector("#cancelarnuevokit").onclick=ocultarForm

function ocultarForm(){
    if (confirm("desea cancelar el registro de un nuevo producto")){
        formulario.style.top="-500"
    }
}

formulario.onsubmit=msg
function msg(){
    formulario.style.top="-500"
    alert("datos guardados") 
}



