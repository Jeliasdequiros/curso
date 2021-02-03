const MAYORIA_EDAD_ESPAÑA = 18

// función SIN Arrow Function 

// function mayorEdad(edad) {
//     return edad >= MAYORIA_EDAD_ESPAÑA    // Hace lo mismmo que con constante pero aquí no puedo cambiar 
// }

const mayorEdad = function (edad) {
    return edad >= MAYORIA_EDAD_ESPAÑA
}

console.log(mayorEdad(8))

// Arrow function - fase1
// eliminaremos function y lo vamos a substituir  por  =>
const mayorEdad = (edad) => {
    return edad >= MAYORIA_EDAD_ESPAÑA
}

console.log(mayorEdad(8))

// Arrow function - fase2
// eliminaremos los paréntesis del parámetro. 
// Sin parámetros ()
// con 1 parámetro se elimina el parentesis
// con más de 1 parámetro se añade parentesis (edad , persona)
const mayorEdad = edad => {
    return edad >= MAYORIA_EDAD_ESPAÑA
}

console.log(mayorEdad(8))

//// Arrow function - fase 3
// eliminamos el return
const mayorEdad = edad => edad >= MAYORIA_EDAD_ESPAÑA

console.log(mayorEdad(8))