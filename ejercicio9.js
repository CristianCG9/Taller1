function asociarEstudiante(nombre,planeta,edad,estatura,seleccionarActividad){
    setTimeout(function(){
        let estudiante={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura,
        }
        seleccionarActividad(estudiante)
    },2000)
}

asociarEstudiante("Cristian","Saturno",14,1.70, function(estudiante){
    if(estudiante.edadEstudiante<15){
        console.log("Manejo de fuerza")
    }else{
        console.log("Manejo de sable de luz")
    }
})