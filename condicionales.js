// Sintaxis del condicional

// if 

// if (condición) {acción}

// if (true) {} // solo se ejecutará cuando lo que hay dentro del paréntesis sea true 

/**
 * Control en la entrada del cine 
 * 
 * Si te has vacunado y eres mayor de 10 años, puedes pasar a comprar la entrada
 */ 

// let persona = 'Pepe' 
// let edad = '8'           // Si la acción no es true, es decir Pepe no tiene 21 -> no se ejecuta
// let vacunado = true

// // Condición 

// if (vacunado ==true && edad > 10) {
// console.log(`${persona} puede pasar a ver la película`)  // true
// } else if ( vacunado == false && edad > 50){
//     console.log(`${persona} Ven otro día `)  // true
// }

// else{
//     console.log(`${persona} No puede pasar `)  // false
// }


// if
// else
// if else if

// OTRO 
// if (5 > 10) {
//     console.log(`cinco es mayor a diez`)
// }


/**
 * CINDICIONALES MULTIPLES 
 */

/** 
 * QUÉ PERSONAJE DE COMIC ERES? 
 * 
 * Si eres rápido eres Flash 
 * Si eres muy fuerte y vuelas eres Superman  
 * Si eres oscuro y millonario eres Batman 
 * Si subes por las paredes y tiras telarañas eres Spiderman
 * Si no eres ninguno, eres un piltrafilla
 */

let personalidad= promt('Que personaje de Comic eres?')
toLowerCase()

// if

// if(personalidad === 'rápido'){
//     console.log('Eres Flash')
// } else if(personalidad === 'muy fuerte y vuelas'){
//     console.log('Eres Superman')
// } else if(personalidad === 'oscuro y millonario'){
// console.log('Eres Batman')
// } else if(personalidad === 'subes por las paredes y tiras telarañas'){
// console.log('Eres Spiderman')
// } else {
// console.log('Eres un piltrafilla')
// }

// SWITCH
// Sintaxis

// switch () { case : break default}

switch (personalidad) {
    case 'rápido' : console.log('Eres Flash')
    break
    case 'muy fuerte y vuelas' : console.log('Eres Superman')
    break
    case 'oscuro y millonario' : console.log('Eres Batman')
    break
    case 'subes por las paredes y tiras telarañas' : console.log('Eres Spiderman')
    break
    default: console.log('Eres un piltrafilla')
}

let edad = 22
switch (edad) {
    case 18: console.log('Tengo 18 años')
    break
    case < 18: console.log('Soy menor de edad')
    break
    case > 18: console.log('Soy muy viejo')
    break
}

// IF + Operador Ternario 

/* Condicional */ ? /* lo que es verdadero */ : /* lo que es falso */