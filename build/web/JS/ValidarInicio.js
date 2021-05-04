var usuario = document.getElementById(Usuario);
var contrasenia = document.getElementById(Contrasenia);
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarInicio(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(usuario === null || usuario === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    
    if(contrasenia === null || contrasenia === ''){
        mensajesError.push('Ingresa tu Contraseña');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}