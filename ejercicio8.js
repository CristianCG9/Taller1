const planetas = [
    {
        nombrePlaneta: "Eadu",
        latitud: 25.678,
        longitud: -80.876,
        nivelOxigeno: 1,
        volumenAgua: 2400,
    },
    {
        nombrePlaneta: "Ahch-To",
        latitud: 26.9212,
        longitud: -80.2144,
        nivelOxigeno: 0.6,
        volumenAgua: 50000,
    },
    {
        nombrePlaneta: "Alderaan",
        latitud: 24.0974,
        longitud: 95.002,
        nivelOxigeno: 2.3,
        volumenAgua: 20000,
    },
    {
        nombrePlaneta: "Concord Dawn",
        latitud: 30.9510,
        longitud: 42.659,
        nivelOxigeno: -1.5,
        volumenAgua: 12000,
    },
    {
        nombrePlaneta: "Dagobah",
        latitud: 25.2147,
        longitud: 52.829,
        nivelOxigeno: 3.1,
        volumenAgua: 50300,
    },
    {
        nombrePlaneta: "Cantonica",
        latitud: 59.6321,
        longitud: 32.165,
        nivelOxigeno: 2.9,
        volumenAgua: 30002,
    },
    {
        nombrePlaneta: "Mandalore",
        latitud: 37.9632,
        longitud: 29.755,
        nivelOxigeno: 3.2,
        volumenAgua: 0,
    },
    {
        nombrePlaneta: "Mustafar",
        latitud: 88.1593,
        longitud: 39.222,
        nivelOxigeno: 1.9,
        volumenAgua: 10000,
    },
    {
        nombrePlaneta: "Onderon",
        latitud: 11.3698,
        longitud: 12.598,
        nivelOxigeno: 1.6,
        volumenAgua: 40007,
    },
    {
        nombrePlaneta: "Naboo",
        latitud: 59.9512,
        longitud: 21.599,
        nivelOxigeno: -9.1,
        volumenAgua: 36900,
    },
    {
        nombrePlaneta: "Nal Hutta",
        latitud: 75.2698,
        longitud: 52.336,
        nivelOxigeno: 2.5,
        volumenAgua: 50000,
    },
    {
        nombrePlaneta: "Rodia",
        latitud: 39.9851,
        longitud: 90.256,
        nivelOxigeno: 1.1,
        volumenAgua: 60001,
    },
    {
        nombrePlaneta: "Ryloth",
        latitud: 89.3214,
        longitud: 26.489,
        nivelOxigeno: 3.6,
        volumenAgua: 21000,
    },
    {
        nombrePlaneta: "Shili",
        latitud: 15.9874,
        longitud: 10.236,
        nivelOxigeno: 2.9,
        volumenAgua: 60000,
    },
    {
        nombrePlaneta: "Trandosha",
        latitud: 32.6598,
        longitud: 47.325,
        nivelOxigeno: -3.9,
        volumenAgua: 23001,
    }
];

const totalAgua = planetas.reduce((suma, planeta) => {
    return suma + planeta.volumenAgua;
}, 0);

console.log(`La cantidad total de agua de los planetas es de: ${totalAgua}`);

const totalOxigeno = planetas.reduce((suma, planeta) => {
    return suma + planeta.nivelOxigeno;
}, 0);

const res = totalOxigeno * 100;
console.log(`El total de oxígeno de los planetas multiplicado por 100 es de: ${res.toFixed(2)}`);

function filtrarPlanetas(planetas, oxigenoNegativo) {
    let planetasFiltrados = planetas.filter(function (planeta) {
        return planeta.nivelOxigeno < 0 || planeta.volumenAgua === 0
    })
    oxigenoNegativo(planetasFiltrados)
}

filtrarPlanetas(planetas, function (planetasFiltrados) {
    let sumaOxigeno = 0
    console.log(`Lista de planetas con nivel de oxígeno negativo o que no contienen agua`)
    console.log(planetasFiltrados)
    planetasFiltrados.forEach(planeta => {
        sumaOxigeno = sumaOxigeno + planeta.nivelOxigeno
    });
})

/* const planetaSinAgua = planetas.find(planeta => planeta.volumenAgua === 0);

if (planetaSinAgua) {
    console.log("El siguiente planeta no tiene agua:");
    console.log(planetaSinAgua);
} else {
    console.log("Todos los planetas tienen agua");
} */