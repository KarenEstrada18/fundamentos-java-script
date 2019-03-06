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


//const esMayorDeEdad = function (persona)
//{
//	return persona.edad >= MAYORIA_DE_EDAD
//	} 
	

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD



function imprimirSiEsMayorDeEdad (persona)
	{
	if (esMayorDeEdad (persona))
	{
		console.log (`${persona.nombre} es mayor de edad`)
	}
	else
	{
		console.log (`${persona.nombre} es menor de edad`)
	}
	}


function permitirAcceso (persona)
{
	if (!esMayorDeEdad (persona))
	{
	console.log('Acceso Denegado')
	}
}

const esMenorDeEdad = (persona) => persona.edad >= !esMayorDeEdad