function calcularDistancia(x1, y1, x2, y2) {
    let restarx = x2 - x1
    let restary = y2 - y1
    let distancia = Math.sqrt(Math.pow(restarx, 2) + Math.pow(restary, 2))
    return distancia
}
console.log(`La distancia entre el planeta Alaris Prime y el planeta Naboo es de: ${calcularDistancia(125, 55, 33, 69).toFixed(2)} UA`)