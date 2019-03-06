var karen=
{
	nombre: 'Karen',
	apellido: 'Estrada',
	edad: 24,
	peso: 60
}

console.log (`Al inicio del año ${karen.nombre} pesa ${karen.peso} kg`)


const INCREMENTO_PESO=0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho= () => Math.random () < 0.3
const realizaDeporte = () => Math.random () < 0.4

const META = karen.peso - 3
var dias = 0

while (karen.peso > META)
{
	if (comeMucho ())
	{
		aumentarDePeso (karen)
		//aumentar de peso
	}
	if(realizaDeporte())
	{
		adelgazar (karen)
		//adelgazar
	}
	dias += 1
}

console.log (`Pasaron ${dias} dias hasta que ${karen.nombre} adelgazo 3 kg` )


console.log (`Al final del año ${karen.nombre} pesa ${karen.peso.toFixed (1)} kg`)