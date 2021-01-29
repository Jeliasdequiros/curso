// Alcance de los datos dentro del código de

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

// Desde LOCAL puedo accder a GLOBAL, pero no al revés

function carnet (){
    let id = 'Andrés Felpe Cosa'
    console.log(`id = ${dni}`)
}

carnet()