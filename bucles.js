// BUCLES O LOOPS

// FOR
// Sintaxis
// for ([expresionInicial]; [condicional];[expresiónUnitaria]) { sentencia }

for (let i=0; i < 10;i++) { 
    console.log('Estoy iterando')
    document.write(i)
}

// queremos imprimir todas las letras de un String
let texto = 'Hola mundo como estás'

for (let i = 0; i < texto.length; i++){
    console.log(texto[i])
}

