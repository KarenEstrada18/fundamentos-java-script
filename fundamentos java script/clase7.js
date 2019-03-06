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

function imprimirNombreEnMayusculas (persona)
{
	var {nombre} = persona
	//var nombre = persona.nombre

	console.log (nombre.toUpperCase())
}

imprimirNombreEnMayusculas(karen)
imprimirNombreEnMayusculas(derek)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({apellido: 'Gomez'})

function imprimirNombreYEdad (persona)
{
	var {nombre} = persona
	var {edad} = persona
	console.log ('Hola , me llamo ' + nombre + ' y tengo '+ edad + ' años')
}

imprimirNombreYEdad (karen)
imprimirNombreYEdad (derek)