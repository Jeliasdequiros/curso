// BUCLES O LOOPS

FOR
Sintaxis
for ([expresionInicial]; [condicional];[expresiónUnitaria]) { sentencia }

for (let i=0; i < 10; i++) {               // i= i+1
    console.log('Estoy iterando')         // empiezo en i=0 hasta i=9
    document.write(i)                     // saco en pantalla desde i=0 hasta i=9
}

// // queremos imprimir todas las letras de un String
let texto = 'Hola mundo como estás'

for (let i = 0; i < texto.length; i++){
    console.log(texto[i])
}

// WHILE                                                   29/01/2021
// Sintaxis
while = mientras (estamos haciendo esta condición)

while (condición) { sentencia }

/***
 * REGALOS CHUCHES EN HALLOWEEN
 */

// let chuches = 20

// // mientras mis chuches sean mayores de 0 
while (chuches > 0) { 
    // es obligatorio tener un contador que reste o sume // chuches--
    chuches--
    console.log(`Le doy una chuche al niño. Nos quedan ${chuches}`)
}


// FOR OF
// Objetos iterables

// for (variable local of objeto iterable ) {
//     sentencia
// }


const coches = ['opel', 'toyota', 'seat']
    for (let coche of COCHES){
        // coche= 'opel'
        // coche =' toyota'
        // coche = 'seat'
        console.log(coche.matricula)
    }

    const coches = ['opel', 'toyota', 'seat']
    for (let coche of COCHES){
        if (coche === 'seat') {
        
        console.log('GUAY')
        } else {
        console.log('NO GUAY')
    }
}       




// DO WHILE  
//Antes de que se cumpla la condición, vamos a tener una sentencia realizada

// do {
//     contador 
//     sentencia
// } while (condicion)

let i = 0

do {
    i++              // i=1
    console.log(i)
} while (i > 5)      // esto es false, no cumple la condición y aún así esta sacando la sentencia