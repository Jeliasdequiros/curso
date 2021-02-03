// PROGRAMACION FUNCIONAL
/**
 * EJERCICIO MAYORIA DE EDAD
 */

// Objetos
let carlos = {
    nombre: 'Carlos',
    apellidos: 'Gonzalez Moya',
    profesion: 'Arquitecto',
    dni: '78787878A',
    edad: 33,
    hijos: false,
    carnet_conducir: true,
    facebook: true

}

// Averiguar si la persona es mayor de edad 
// function mayor_edad(persona) {
//     if (persona.edad >= 18) {
//         document.write(`${persona.nombre} es mayor de edad`)  
//     } else {
//         document.write(`${persona.nombre} no es mayor de edad`)
//     }
// }

//**************************MEJORAR nuestro código *********************************/
// porque el número 18? Personas de otros países ven este número. ?  hemos creado un'Magic number', hemos creado un número que funciona y no sabemos proque funciona.
const MAYORIA_EDAD_ESPAÑA = 18      // Al definirlo ya nos concreta el dato y no es un magic number


//*********** DIVIDIR la función en funciones más pequeñas */

// función de la lógica de la mayoría de edad
function mayorEdad(persona){
    return persona.edad >= MAYORIA_EDAD_ESPAÑA   // true  o false
}

// función para imprimir en pantalla
function imprimir(persona){
    if (mayorEdad(persona)) {
                document.write(`${persona.nombre} es mayor de edad`)  
            } else {
                document.write(`${persona.nombre} no es mayor de edad`)
            }
}

// función principal o función de llamada 
function personaEsmayorEdad(persona){
    imprimir(persona)
}


personaEsmayorEdad(carlos)

