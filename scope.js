//  Es el alcance de los datos.

// // SCOPE GLOBAL 
const dni= '78787878z'
// let nombre = 'Toni'

// // SCOPE FUNCTION (sólo puedo usar la variable dentro de la función)
// function hola (){
//     nombre = 'Juan'
//     let name = 'Pepe'
// }

// for (let anyo = 18)

// función lo mejor es limitarse a variables / constantes internas

// Desde LOCAL puedo acceder a GLOBAL, pero no al revés

//// Las funciones SOLO deberían tener variables locales, mucho cuidado a utilizar variables globales. Las constantes en valores globales nos evitan errores.

function carnet (){
    let id = 'Andrés Felipe Cosa'
    console.log(`id = ${dni}`)
}

carnet()