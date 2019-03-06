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
	altura: 1.55
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

var personas = [karen,derek,luis,lore,hugo,selene]

for (var i=0; i<personas.length; i++)
{
	var persona = personas [i]
	console.log (`${persona.nombre} mide ${persona.altura} mts`)
}