var usuario = document.getElementById('Usuario');
var contrasenia = document.getElementById('Contrasenia');
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarInicio(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(usuario.value == null || usuario.value == ''){
        mensajesError.push('Ingresa tu Usuario');
    }else if(usuario.value.length >10){
        mensajesError.push('El usuario no puede tener más de 10 caracteres');
    }
    
    if(contrasenia.value === null || contrasenia.value === ''){
        mensajesError.push('Ingresa tu Contraseña');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}