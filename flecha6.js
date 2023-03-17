let calcularEdadMayor = (edades) => {
    let mayor = edades[0];
    let contador = 0;

    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > mayor) {
            mayor = edades[i];
            contador = 0;
        } else if (edades[i] === mayor) {
            contador++;
        }
    }

    console.log(`La edad mayor es: ${mayor}`);
    if (contador > 0) {
        console.log(`La edad mayor se repite ${contador} veces.`);
    }
};

let edades = [28, 45, 27, 50, 42, 24, 32, 33, 29, 69, 22, 19, 45, 38, 72, 27, 23, 20, 36, 46, 60];
calcularEdadMayor(edades);
