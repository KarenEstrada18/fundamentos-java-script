var karen=
{
	nombre: 'Karen',
	apellido: 'Estrada',
	edad: 24,
	peso: 60
}

console.log (`Al inicio del año ${karen.nombre} pesa ${karen.peso} kg`)


const INCREMENTO_PESO=0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i=1; i<=DIAS_DEL_AÑO ; i++)
{
	var random = Math.random()

	if (random<0.25)
	{
		aumentarDePeso (karen)
		//aumenta de peso
	}
	else if (random < 0.5)
	{
		adelgazar (karen)
		//adelgazar
	}
}




console.log (`Al final del año ${karen.nombre} pesa ${karen.peso.toFixed (1)} kg`)