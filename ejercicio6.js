let edades = [];
let codigos = [];

for (let i = 0; i < 20; i++) {
    edades.push(Math.floor(Math.random() * (60 - 18 +1)));
    codigos.push(Math.floor(Math.random() * 100) + 1);
}

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