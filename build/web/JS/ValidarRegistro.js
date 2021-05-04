var usuario = document.getElementById(Usuario);
var nombre = document.getElementById(Nombre);
var appat = document.getElementById(Appat);
var apmat = document.getElementById(Apmat);
var contrasenia = document.getElementById(Contrasenia);
var tel = document.getElementById(Tel);
var cel = document.getElementById(Cel);
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(usuario === null || usuario === ''){
        mensajesError.push('Ingresa tu Usuario');
    }else{
        if(formulario.nombre.value.length <4){
        mensajesError.push('Usuario debe contener más de 4 valores');
        }
    }
    
    if(nombre === null || nombre === ''){
        mensajesError.push('Ingresa tu Nombre');
    }
    
    if(appat === null || appat === ''){
        mensajesError.push('Ingresa tu Apeelido Paterno');
    }
    
    if(contrasenia === null || contrasenia === ''){
        mensajesError.push('Ingresa tu Contraseña');
    }
    
    if(tel === null || tel === ''){
        mensajesError.push('Ingresa tu Telefono');
    }
    
    if(cel === null || cel === ''){
        mensajesError.push('Ingresa tu celular');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}