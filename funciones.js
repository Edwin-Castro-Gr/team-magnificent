let bienvenida = document.getElementById("bienvenidaModal");
let cuentaUsuario = document.getElementById("cuenta1");
let claveUsuario = document.getElementById("clave");
let btnAceptar = document.getElementById("btn_aceptar");
let modal = document.getElementById("ventanaModal");
let btnIngreso = document.getElementById("btn_ingreso");
let btnRetiro = document.getElementById("btn_retiro");
let btnTransfer = document.getElementById("btn_transfer");
let btnConsulta = document.getElementById("btn_transfer");
let btnClose = document.getElementsByClassName("close")[0];
let titlemodal = document.getElementById("title-modal");
let divcuenta = document.getElementById("div-cuenta");
divcuenta.style.display = "none";  
let btn_enviar = document.getElementById("btn_enviar");
let ingreso = document.querySelector("#monto");
//La variable tipoMovimiento puede tener los siguientes valores: 1= Ingreso, 2=retiro, 3= transferencia, 4= consulta
let tipoMovimiento= 0;
let cuenta;

let cuentas = [
    { nombre: "Mali", saldo: 200, contrasena: "1234" },
    { nombre: "Gera", saldo: 290, contrasena: "1234" },
    { nombre: "Maui", saldo: 67, contrasena: "1234" }
  ];

  bienvenida.style.display = "block";

btnIngreso.onclick = function(){
    titlemodal.innerHTML="INGRESAR DINERO";  
    modal.style.display = "block";
    tipoMovimiento=1;
       // btnConsulta.style.display ="none";
}

btnRetiro.onclick = function(){
    titlemodal.innerHTML="RETIRAR DINERO";
    divcuenta.style.display = "none";
    modal.style.display = "block";
    tipoMovimiento=2;
    // btnConsulta.style.display ="none";
}

btnTransfer.onclick = function(){
    titlemodal.innerHTML="TRANSFERIR DINERO";
    divcuenta.style.display = "flex";
    modal.style.display = "block";
    tipoMovimiento=3;
    // btnConsulta.style.display ="none";
}
btnClose.onclick = function(){
    modal.style.display = "none";
   
}
btnAceptar.onclick= function(){
    
    let usuario = cuentaUsuario.value;
    let contrasena = claveUsuario.value;
    cuenta= seleccionarCuenta(usuario,contrasena);
   

}
 function seleccionarCuenta(usuario,contrasena) {
 
   let validador;
    let cuenta;
  
    for (let index = 0; index < cuentas.length; index++) {
      
      if (usuario === cuentas[index].nombre && contrasena === cuentas[index].contrasena ) {
          swal(`el usuario es ${cuentas[index].nombre} `);
          validador="si";
          cuenta= cuentas[index];
          bienvenida.style.display="none";
        }
          }
    
   if(validador!="si"){
      swal(`Error al ingresar su Usuario y/o Contraseña, Intente de nuevo`,"warning");
  }
  return cuenta;
  }
  

function realizarIngreso(cuenta) {

    let montoIngreso= parseInt(ingreso.value);
   let saldoActual = parseInt(cuenta.saldo);
        saldoActual = montoIngreso+ saldoActual;
        alert(saldoActual);
    if (saldoActual >= 10 && saldoActual <= 990) {
          
          swal(`Monto ingresado: $  ${montoIngreso}  Nuevo saldo:${saldoActual}`);
          cuenta.saldo= saldoActual;
    }
    else{
        swal("El saldo no se encuentra dentro de los limites permitidos")
        
    }

  }

  function consultarSaldo(Usuario) {
    let saldo = parseInt(Usuario.saldo);
    swal (`Saldo actual: $  ${saldo}`);
    return saldo;
  }

btn_enviar.onclick = function(){
    let valor= ingreso.value;
    realizarIngreso(cuenta);
    //swal("estoy enviando"+ valor, "You clicked the button!", "success");
     

}

//Declaracion de cuentas de usuario



 /* 

  

  
  function realizarretiro(cuenta) {
    let montoRetiro= parseInt(prompt("Cuanto dinero desea retirar?"));
    
   // cuando tengamos el teclado let montoRetiro = parseInt(document.getElementById("montoRetiro").value);
    cuenta.saldo = cuenta.saldo- montoRetiro;
if (cuenta.saldo >= 10 && cuenta.saldo <= 990) {
 
  
      alert (`Monto Retiradoo: $  ${montoRetiro}  Nuevo saldo:${cuenta.saldo}`);
}
else{
    alert("El saldo no se encuentra dentro de los limites permitidos")
    cuenta.saldo = cuenta.saldo + montoRetiro;
}
  }*/

 /* let cuenta=seleccionarCuenta();
  let saldo= consultarSaldo(cuenta);
  realizarIngreso(cuenta);
realizarretiro(cuenta);*/