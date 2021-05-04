var nempleado = document.getElementById('NEmpleado');
var cacceso = document.getElementById('CAcceso');
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(nempleado.value === null || nempleado.value === ''){
        mensajesError.push('Ingresa tu número de empleado');
    }else if(isNaN(nempleado.value)) {
        mensajesError.push('Utilice caracteres numericos en el campo Número de Empleado');
    }else if(nempleado.value.length != 10){
        mensajesError.push('N. Empleado solo puede tener 10 digitos');
    }
    
    if(cacceso.value === null || cacceso.value === ''){
        mensajesError.push('Ingresa tu Código de acceso');
    }else if(isNaN(cacceso.value)) {
        mensajesError.push('Utilice caracteres numericos en el campo Código de acceso');
    }else if(cacceso.value.length != 10){
        mensajesError.push('Código de acceso solo puede tener 10 digitos');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}


