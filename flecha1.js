let calcularDistancia = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(`La distancia entre el planeta Alaris Prime y el planeta Naboo es de: ${calcularDistancia(125, 55, 33, 69).toFixed(2)} UA`)