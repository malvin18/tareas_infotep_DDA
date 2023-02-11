const prompt = require('prompt')

prompt.start()
console.log('Ingrese su Edad para saber si puede votar')
prompt.get(['edad'], function(err,result){
    let edad = Number(result.edad)
    if(edad < 18){
        console.log('Aun Eres Muy Joven para votar.')

    }else if(edad > 17){
        console.log('Felicidades, Eres mayor de edad Puedes votar')
    }else{
        console.log('Lo Sentimos debes poner un numero')
    }
})