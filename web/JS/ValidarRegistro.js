var usuario = document.getElementById('Usuario');
var nombre = document.getElementById('Nombre');
var appat = document.getElementById('Appat');
var apmat = document.getElementById('Apmat');
var contrasenia = document.getElementById('Contrasenia');
var tel = document.getElementById('Tel');
var cel = document.getElementById('Cel');
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(usuario.value === null || usuario.value === ''){
        mensajesError.push('Ingresa tu Usuario');
    }else if(usuario.length <4){
        mensajesError.push('Usuario debe contener más de 4 valores');
    }else if(usuario.value.length >10){
        mensajesError.push('El usuario no puede tener más de 10 caracteres');
    }
    
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu Nombre');
    }else if(nombre.value.length <4){
        mensajesError.push('El nombre no puede tener menos de 4 caracteres');
    }else if(nombre.value.length >10){
        mensajesError.push('El nombre no puede tener más de 10 caracteres');
    }
    
    if(appat.value === null || appat.value === ''){
        mensajesError.push('Ingresa tu Apeelido Paterno');
    }else if(appat.value.length <4){
        mensajesError.push('El Apellido paterno no puede tener menos de 4 caracteres');
    }else if(appat.value.length >10){
        mensajesError.push('El apellido paterno no puede tener más de 10 caracteres');
    }
    
    if(contrasenia.value === null || contrasenia.value === ''){
        mensajesError.push('Ingresa tu Contraseña');
    }
    
    if(tel.value === null || tel.value === ''){
        mensajesError.push('Ingresa tu Telefono');
    }else if(isNaN(tel.value)) {
        mensajesError.push('Utilice caracteres numericos en el campo telefono');
    }else if(tel.value.length != 10){
        mensajesError.push('El telefono solo puede tener 10 digitos');
    }
    
    if(cel.value === null || cel.value === ''){
        mensajesError.push('Ingresa tu celular');
    }else if(isNaN(cel.value)) {
        mensajesError.push('Utilice caracteres numericos en el campo Celular');
    }else if(tel.value.length != 10){
        mensajesError.push('El celular solo puede tener 10 digitos');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}