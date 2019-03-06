var karen = {
 nombre: 'Karen',
 apellido: 'Estrada',
 altura: 1.71,
 cantidadDeLibros: 180
}

var derek = {
 nombre: 'Derek',
 apellido: 'Cruz',
 altura: 1.08,
 cantidadDeLibros: 10
}

var luis ={
	nombre: 'Luis',
	apellido: 'Cruz',
	altura : 1.85,
	cantidadDeLibros: 150
}

var lore={
	nombre:'Lorena',
	apellido: 'Salinas',
	altura: 1.81,
	cantidadDeLibros: 100
}

var hugo={
	nombre:'Hugo',
	apellido: 'Ortiz',
	altura: 1.53,
	cantidadDeLibros: 50
}

var selene= {
	nombre:'Selene',
	apellido: 'Infante',
	altura: 1.65,
	cantidadDeLibros: 10
}

const esAlta= persona => persona.altura > 1.8

var personas = [karen,derek,luis,lore,hugo,selene]

var personasAltas = personas.filter (esAlta)


console.log (personasAltas)

//var personasAltas = personas.filter (function (persona)
//{
//	return persona.altura>1.8
//})

//persona.altura = persona.altura *100
const pasarAlturaACms = persona => {
	
return { 
	...persona,
	altura: persona.altura *100
}
}

var personasCms = personas.map (pasarAlturaACms)
console.log (personasCms)


const esBaja = persona => persona.altura <1.8

var personasBajas = personas.filter (esBaja)
console.log (personasBajas)


const reducer = (acum, persona) => acum + persona.cantidadDeLibros
var totalDeLibros = personas.reduce (reducer,0)

console.log (`En total todos tienen ${totalDeLibros} libros`)