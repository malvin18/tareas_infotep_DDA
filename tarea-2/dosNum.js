const prompt = require("prompt")
prompt.start()
console.log("ingrese Dos valor:")
prompt.get(['x','y'], function(err,resultados){
    let x = resultados.x
    let y =resultados.y

    function suma(){
        console.log(Number(x) + Number(y)) // esta forma evita que concatene los numeros
    }
    function resta(){
        let resultado = x-y
        console.log(resultado)
    }
    function mult(){
        let resultado = x*y
        console.log(resultado)
    }
    function divi(){
        let resultado = x/y
        console.log(resultado)
    }
    suma()
    resta()
    mult()
    divi()
})
