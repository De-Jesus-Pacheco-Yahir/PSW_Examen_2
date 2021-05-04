var pnombre = document.getElementById(PNombre);
var pcv = document.getElementById(PCV);
var pmv = document.getElementById(PMV);
var pgv = document.getElementById(PGV);
var pcc = document.getElementById(PCC);
var pmc = document.getElementById(PMC);
var pgc = document.getElementById(PGC);
var error = document.getElementById('error');
error.style.color = 'red';

function ValidarRegistro(){
    console.log('Validando...');
    
    var mensajesError = [];
    
    if(pnombre === null || pnombre === ''){
        mensajesError.push('Ingresa el nombre del producto');
    }
    
    if((pcv === null || pcv === '')||(pmv === null || pmv === '')||(pgv === null || pgv === '')||(pcc === null || pcc === '')||(pmc === null || pmc === '')||(pgc === null || pgc === '')){
        mensajesError.push('Ingresa todos los precios');
    }
    
    error.innerHTML = mensajesError.join(', ');
    
    return false;
}


