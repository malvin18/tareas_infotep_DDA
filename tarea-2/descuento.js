const prompt = require('prompt');
prompt.start()
console.log("Programa de Descuentos para venta de Vehiculos.: ")
console.log('Elija el Vehiculo...')
console.log('1)Ford Fiesta 2)Ford Focus')
prompt.get(['marca'],function(err,result){
    let marca = Number(result.marca)
    if (marca == 1){
        console.log('Acreditar un 5% de Descuento.')
    
    }else if(marca == 2){
        console.log('Acreditar un 10% de Descuento')
    }else{
        console.log('Opción invalidad, trate de nuevo')
    }
})