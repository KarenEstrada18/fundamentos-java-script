class persona
{
	constructor (nombre,apellido,altura)
	{
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura 
	}

	saludar (fn)
	{
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	if (fn)
	{
		fn (this.nombre,this.apellido)
	}
	}

	soyAlto ()
	{
	return this.altura > 1.8
	}
}


class desarrollador extends persona
{
	constructor (nombre,apellido,altura)
	{
	super (nombre,apellido,altura)
	}

	saludar (fn)
	{
		console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	if (fn)
	{
		fn (this.nombre,this.apellido,true)
	}
	}
}

function responderSaludo (nombre,apellido,esDev)
{
	console.log (`Buen dia ${nombre} ${apellido}`)
	if (esDev)
	{
		console.log (`No sabia que eras desarrollador`)
	}
}

var karen = new persona ('Karen', 'Estrada',1.71)
var erika= new persona ('Erika', 'Luna',1.55)
var arturo= new desarrollador ('Arturo', 'Martinez',1.85)

karen.saludar ()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)