const encontrarNumeroMasCercanoACero = (numeros) => {
    let masCercano = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (Math.abs(numeros[i]) < Math.abs(masCercano)) {
            masCercano = numeros[i];
        }
    }
    console.log(`El número más cercano a cero es ${masCercano}`);
}

const numeros = [10, 5, -3, 2, 7, -8, -2, 3, 4, -6];
encontrarNumeroMasCercanoACero(numeros);