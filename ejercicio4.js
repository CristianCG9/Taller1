let contarSables=[-53,44,10,9,-10,-99,-9]

let filtro=contarSables.filter(function(sable){
    return sable<0
})
console.log(`El numero de sables con energía negativa es de: ${filtro.length}`)