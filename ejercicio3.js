function calcularTemperaturaMedia(maxTemp, minTemp){
    let temperatura=(maxTemp+minTemp)/2
    return temperatura
}

console.log(`La temperatura media de la luna de Endor es de: ${calcularTemperaturaMedia(38.6,5.3)}°`)