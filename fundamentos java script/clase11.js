var karen =
{
	nombre: 'Karen',
	apellido: 'Estrada',
	edad:24,
	licenciada: true,
	cocinero: false,
	cantante:false,
	dj: false,
	guitarrista: false,
	drone: true
}

var luis =
{
	nombre: 'Luis',
	apellido: 'Cruz',
	edad:12,
	licenciada: false,
	cocinero: true,
	cantante:false,
	dj: true,
	guitarrista: false,
	drone: true
}

function imprimirProfesiones(persona)
{
	console.log (`${persona.nombre} es:`)
	
	if (persona.licenciada)
	{
	console.log ('Licenciada')
	}
	else
	{
		console.log ('No es licenciada')
	}

	if (persona.cocinero)
	{
	console.log ('Cocinero')
	}

	if (persona.cantante)
	{
	console.log ('cantante')
	}

	if (persona.dj)
	{
	console.log ('DJ')
	}

	if (persona.guitarrista)
	{
	console.log ('Guitarrista')
	}

	if (persona.drone)
	{
	console.log ('Piloto de drone')
	}
}

imprimirProfesiones(karen);

const MAYORIA_DE_EDAD =18


function imprimirSiEsMayorDeEdad(persona)
{
	console.log (`${persona.nombre} es:`)
	
	if (persona.edad >= MAYORIA_DE_EDAD)
	{
		console.log ('Mayor de edad')
	}
	else
	{
		console.log ('Menor de edad')
	}
}

imprimirSiEsMayorDeEdad (karen)
imprimirSiEsMayorDeEdad (luis)


