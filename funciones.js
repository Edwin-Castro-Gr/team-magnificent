let modal = document.getElementById("ventanaModal");
let btnIngreso = document.getElementById("btn_ingreso");
let btnRetiro = document.getElementById("btn_retiro");
let btnTransfer = document.getElementById("btn_transfer");
let btnConsulta = document.getElementById("btn_transfer");
let btnClose = document.getElementsByClassName("close")[0];
let titlemodal = document.getElementById("title-modal");
let divcuenta = document.getElementById("div-cuenta");

btnIngreso.onclick = function(){
    titlemodal.innerHTML="INGRESAR DINERO";  
    divcuenta.style.display = "none";  
    modal.style.display = "block";
    // btnConsulta.style.display ="none";
}

btnRetiro.onclick = function(){
    titlemodal.innerHTML="RETIRAR DINERO";
    divcuenta.style.display = "none";
    modal.style.display = "block";
    // btnConsulta.style.display ="none";
}

btnTransfer.onclick = function(){
    titlemodal.innerHTML="TRANSFERIR DINERO";
    divcuenta.style.display = "flex";
    modal.style.display = "block";
    // btnConsulta.style.display ="none";
}
btnClose.onclick = function(){
    modal.style.display = "none";
}