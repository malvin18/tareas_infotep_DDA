const prompt = require('prompt');

prompt.start()

console.log('Ingrese las 3 notas. para sacar el promedio.')
prompt.get(['nota1','nota2','nota3'],function(error,resultado){
    let nota1 = resultado.nota1
    let nota2 = resultado.nota2
    let nota3 = resultado.nota3
    function promedio(){
        let prome = (Number(nota1) + Number(nota2 )+ Number(nota3))/3
        
        console.log('El promedio de las 3 notas es: ',prome)

    }
    promedio()
})