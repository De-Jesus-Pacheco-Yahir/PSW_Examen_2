var nempleado = document.getElementById(NEmpleado);
var cacceso = document.getElementById(CAcceso);
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(nempleado === null || nempleado === ''){
        mensajesError.push('Ingresa tu número de empleado');
    }
    
    if(cacceso === null || cacceso === ''){
        mensajesError.push('Ingresa tu Código de acceso');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}


