console.log("Analizar cual Numero es mayor")
console.log("")
console.log("")
const prompt = require("prompt")
prompt.start()
console.log("ingrese Dos valor:")
prompt.get(['x','y'], function(err,resultados){
    let x = resultados.x
    let y =resultados.y
    if(x >y){
        console.log("El Primer Valor es Mayor: ",x)
    }else if(x<y){
        console.log("El Segundo Valor es Mayor: ",y)
    }
    else if(x=y){
        console.log("Esto es un Error. La idea era poner numeros distintos")
    }
})