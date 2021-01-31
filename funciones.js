/**
 *  FUNCIONES
 * 
 * function () {}
 * 
 * Son bloques de código reutilizables.
 *  Estos bloques de código nos solucionan un problema.
 */

// // FUNCIONES DECLARATIVAS (obedecen al hoisting)
// function nueva () { 
//     // código 
// }

// // ejecución/llamar de la función 
// nueva()


// // FUNCIONES ANÓNIMAS
// function () { 
//     // código 
// }

// // FUNCIONES CON CONSTANTES + ANÓNIMAS (declaramos las funciones dentro de constantes)
// const nueva = function () { 
//     // código 
// }


// // FUNCIONES AUTO-ejecutables
// // poco/ casi nada utilizado 
// (
//     function (a, b) {
//         // código
//     } (10, 20)
// )

// // Llamar a una función, que ya tenemos declarada

// // nomre de la función, seguido de ()
// hola ()
// sumar ()


// // FUNCIONES SIN PARÁMETROS

// function saludar () {
//     console.log(`Hola como estás`)
// }

// saludar ()


// FUNCIONES CON PARÁMETROS

// function saludar (nombre) {
//     console.log(`Hola como estás ${nombre}`)
// }

// saludar (`Pepe`)
// saludar (`Luis`)
// saludar (`maría`)

// //sumar
// function suma (a,b) {  
//     console.log(a+b)
// }
// suma (4,5)

// CONTROLADOR DENTRO DE UNA FUNCIÓN
    // function saludar(nombre) {
    //     if(typeof nombre === 'string'){
    //         console.log(`Hola ${nombre}, como estás?`)
    //     } else {
    //         console.log(`Escribe un nombre real`)    
    //     }
    // }

    // saludar('Luis')


    // VALORES DE RETORNO
    // return 
        // Al utilizar (return) hay que tener en cuenta que la función finaliza en esa línea.
        // El return no es obligatorio.

// function unirNombreApellidos(nombre, apellidos){
//     let nombrecompleto = `Su nombre es: ${nombre} ${apellidos}`
//     return nombrecompleto
// }

// console.log(unirNombreApellidos('Pepe', 'Santiago Guerrero'))

function suma (a,b) {  
    return a +b
}

console.log(suma(4,10))

