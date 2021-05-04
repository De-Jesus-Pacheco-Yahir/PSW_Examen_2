var calle = document.getElementById(Calle);
var numex = document.getElementById(numex);
var numin = document.getElementById(numin);
var del = document.getElementById(Del);
var est = document.getElementById(Est);
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(calle === null || calle === ''){
        mensajesError.push('Ingresa tu Calle');
    }
    
    if(numex === null || numex === ''){
        mensajesError.push('Ingresa tu Número Exterior');
    }
    
    if(del === null || del === ''){
        mensajesError.push('Ingresa tu Delegación');
    }
    
    if(est === null || est === ''){
        mensajesError.push('Ingresa tu Número Estado');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}