var calle = document.getElementById('Calle');
var numex = document.getElementById('numex');
var numin = document.getElementById('numin');
var del = document.getElementById('Del');
var est = document.getElementById('Est');
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(calle.value === null || calle.value === ''){
        mensajesError.push('Ingresa tu Calle');
    }else if(calle.length <4){
        mensajesError.push('Calle debe contener más de 4 valores');
    }else if(calle.value.length >20){
        mensajesError.push('El calle no puede tener más de 20 caracteres');
    }
    
    if(numex.value === null || numex.value === ''){
        mensajesError.push('Ingresa tu Número Exterior');
    }else if(isNaN(numex.value)) {
        mensajesError.push('Utilice caracteres numericos en el campo Número exterior');
    }
    
    if(del.value === null || del.value === ''){
        mensajesError.push('Ingresa tu Delegación');
    }else if(del.length <4){
        mensajesError.push('Delegación debe contener más de 4 valores');
    }else if(del.value.length >20){
        mensajesError.push('Delegación no puede tener más de 20 caracteres');
    }
    
    if(est.value === null || est.value === ''){
        mensajesError.push('Ingresa tu Estado');
    }else if(est.length <4){
        mensajesError.push('Estado debe contener más de 4 valores');
    }else if(est.value.length >20){
        mensajesError.push('Estado no puede tener más de 20 caracteres');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}