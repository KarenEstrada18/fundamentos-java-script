var karen = {
 nombre: 'Karen',
 apellido: 'Estrada',
 altura: 1.71,
}

var derek = {
 nombre: 'Derek',
 apellido: 'Cruz',
 altura: 1.08
}

var luis ={
	nombre: 'Luis',
	apellido: 'Cruz',
	altura : 1.85
}

var lore={
	nombre:'Lorena',
	apellido: 'Salinas',
	altura: 1.81
}

var hugo={
	nombre:'Hugo',
	apellido: 'Ortiz',
	altura: 1.53
}

var selene= {
	nombre:'Selene',
	apellido: 'Infante',
	altura: 1.65
}

const esAlta= persona => persona.altura > 1.8

var personas = [karen,derek,luis,lore,hugo,selene]

var personasAltas = personas.filter (esAlta)

//var personasAltas = personas.filter (function (persona)
//{
//	return persona.altura>1.8
//})
console.log (personasAltas)

const esBaja = persona => persona.altura <1.8

var personasBajas = personas.filter (esBaja)

console.log (personasBajas)