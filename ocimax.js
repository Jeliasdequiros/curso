// Declaramos la variable con let.

// PROMPT, se utiliza cuando el usuario ingresa datos por medio del teclado. Con esta función aparece una ventana en la pantalla, con un espacio para el valor que se debe ingresar y un botón aceptar para que la información sea guardada.

let vacunado = prompt('Bienvenido a OCIMAX, ¿Estás vacunado?') .toLowerCase()

// Usaremos el condicional múltiple de SWITCH con case para el condicional afirmativo y default para el condicional negativo.
switch (vacunado) {
    case 'si' : console.log('Enhorabuena, ya puedes comprar tu entrada')
    break
    default: console.log('Lo sentimos, sigue jugando!!!')
}

