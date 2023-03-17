let nombre = ["Anguila fleek", "Canape", "Oorp", "Polvo ju", "Rocamelones", "Dulce de muja", "Filete de krakana"];
let tipoAlimento = ["Carne", "Vegetal", "Dulce", "Vegetal", "Vegetal"];
let energiaAportada = [100, 99, 288, 1000, 652, 490, 440];

function generarAlimentoAleatorio(array) {
    let j, x, i;
    //Recorremos el array del final hacia delante
    for (i = array.length - 1; i > 0; i--) {
        //Generamos una posicion comprendida entre los valores de nuestro array
        j = Math.floor(Math.random() * (i + 1));
        // Asignamos el valor de la posición actual a una variable
        x = array[i];
        //Intercambiamos los valores de las dos posiciones
        array[i] = array[j];
        array[j] = x;
    }
}

generarAlimentoAleatorio(nombre);
generarAlimentoAleatorio(tipoAlimento);
generarAlimentoAleatorio(energiaAportada);

let alimentos=[]



for (let i = 0; i < 5; i++) {
    let alimento={

    }
    alimento.nombre=nombre[Math.floor(Math.random() * tipoAlimento.length)]
    alimento.tipo=tipoAlimento[Math.floor(Math.random() * tipoAlimento.length)]
    alimento.energia=energiaAportada[Math.floor(Math.random() * energiaAportada.length)]
    alimentos.push(alimento)
}
console.log(alimentos)

function clasificarAlimentos(alimentos,callback){
    setTimeout(function(){
        let filtro = alimentos.filter(function(alimento){
            return alimento.tipo == "Vegetal" && alimento.energia>100
        }) 
        callback(filtro)     

    },2000)
}
clasificarAlimentos(alimentos, function(alimentosFiltrados){
    let suma = 0
    alimentosFiltrados.forEach(function(alimento){
        suma = suma + alimento.energia
    })
    console.log(`La suma es ${suma}`)
})
