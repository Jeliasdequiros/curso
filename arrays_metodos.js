/**
 * ARRAYS Y MÉTODOS
 */

// let animales = []

// animales= ['perro', 'gato', 'vaca']

// console.log(animales)

// // longitud 
// console.log(animales.length)

// // como acceder a un ARRAY
// console.log(animales.length[2])

// // ****************************************************************
// // Cómo agregar un nuevo elemento. Aquí estamos Modificamos el Array original
// animales.push('gallina')

// // eliminar el último elemento.Aquí estamos Modificamos el Array original
// animales.pop()

// // Agregar elemento al inicio.Aquí estamos Modificamos el Array original
// animales.unshift('serpiente')

// // quiero saber la posción de un elemento. Aquí no modifica el Array

// console.log(animales.indexOf('gato'))

// // Crea un Array nuevo. No modifica el Array
// // El slice corta entre elementos

// let nuevoArray = animales.slice(0, 2)

// ************************************OTROS MÉTODOS********************************
// let artículos = ['aspiradora', 'X-Box', 'pilas', 'lavadora', 'secadora', 'televisor']

// // Quiero conseguir ver toda la lista de artículos
// for (let i=0; i < articulos.length; i++) {
//     console.log(articulos[i])
// }

// // FOREACH
// articulos.forEach(function (articulo){
//     console.log(articulo)
// })


// articulos.forEach(articulo => console.log(articulo))
// Nos metemos en el nombre del arreglo con .       
// articulos[2].nombre (pilas)
let articulos = [
    {nombre: 'aspiradora', precio: 200},
    {nombre: 'X-Box', precio: 500},
    {nombre: 'pilas', precio: 2},
    {nombre: 'lavadora', precio: 180},
    {nombre: 'secadora', precio: 210},
    {nombre: 'televisor', precio: 880}
]

// Quiero sacar los nombres de los artículos
articulos.forEach(function (articulo){
        console.log(articulo.nombre)
    })

    articulos.forEach((articulo)=>console.log(articulo.nombre))

// FOREACH VS MAP
// Foreach cuando no queremos crear otro array. El Map quiero crear un array nuevo con lo que yo me lleve.

let nuevoArray= articulos.map (articulo => `Artículo: ${articulo.nombre}`)