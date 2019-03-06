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

function imprimirSiEsMayorDeEdad(persona)
{
	console.log (`${persona.nombre} es:`)
	
	if (persona.edad >= 18)
	{
		console.log ('Mayor de edad')
	}
	else
	{
		console.log ('Menor de edad')
	}
}

imprimirSiEsMayorDeEdad (karen)
