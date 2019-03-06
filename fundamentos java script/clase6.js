var karen = {
 nombre: 'Karen',
 apellido: 'Estrada',
 edad: 24,
}

var derek = {
 nombre: 'Derek',
 apellido: 'Cruz',
 edad: 2,
}

function imprimirNombreEnMayusculas ({nombre})
{
	console.log (nombre.toUpperCase())
}

imprimirNombreEnMayusculas(karen)
imprimirNombreEnMayusculas(derek)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({apellido: 'Gomez'})