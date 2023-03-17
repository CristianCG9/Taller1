const separarNombrePiloto = (codigoAcceso) => {
    const codigosYnombres = {
        "ARQ2555": "Sara Bel-Sun",
        "ARQ2556": "Nodin Chavdri",
        "ARQ2557": "Finn"
    };

    if (codigoAcceso in codigosYnombres) {
        const nombreCompleto = codigosYnombres[codigoAcceso];
        const nombreSeparado = nombreCompleto.split(":");
        console.log(`Nombre del piloto: ${nombreSeparado[0]}`);
    } else {
        console.log("Error: Código de acceso no encontrado, intentelo nuevamente...");
    }
}
let nombre = separarNombrePiloto("AR2556");