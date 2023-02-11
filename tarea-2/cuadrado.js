const prompt = require("prompt");
prompt.start()

console.log("Ingrese el valor del lado del cuadrado: ")
prompt.get(["lado"],function(err,result){
    let lado= result.lado;
    lado = lado * lado
    console.log("El resultado de la suma de los lados es: ", lado)

})