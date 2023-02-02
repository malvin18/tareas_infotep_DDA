//pedir un numero y mostrar la nota
const prompt = require ('prompt');

//iniciar funcion prompt
prompt.start();
console.log('Ingrese la nota: ');
prompt.get(['nota'], function(err, result){
    let nota = result.nota;
    if (nota > -1 & nota < 3){
        console.log("Muy deficiente",nota)
    }
    else if(nota > 2 & nota <5){
        console.log("Insuficiente")
    }
    else if (nota > 4 & nota <6 ){
        console.log("Suficiente")
    }
    
    else if (nota > 5 & nota <7){
        console.log("Bien")
    }
    else if (nota > 6 & nota <9){
        console.log("Notable")
    }
    else if(nota > 8 & nota < 11){
        console.log("Sobresaliente")
    }
})
//pedir variables