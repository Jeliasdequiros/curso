/**
 * POLICIA saber la letra de ti dni
 */

// BAse de datos 
// Array 
const LETRAS_DNI = ['T','R','W','A','G','M','Y']
// Preguntar al usuario, los números de su dni
let numeroDNI = prompt("No sabes tu letra de DNI? Escribe aquí tus números")

// bucle
while (numeroDNI != 'salir') {

    // resultado de la letra 
    const resto = numeroDNI % 23

    // que tipo de datos permitimos o no
    switch (true) {
        case numeroDNI < 0:
        case numeroDNI.lenght != 8:
        case numeroDNI == '':
            alert('ERROR!!!')
            numeroDNI = 'salir'
            break
            default: 
                alert(`DNI: ${numeroDNI}-${LETRAS_DNI[resto]}`)
                numeroDNI = 'salir'
            break
    }
}