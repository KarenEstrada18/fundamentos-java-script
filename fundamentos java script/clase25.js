class persona
{
	constructor (nombre,apellido,altura)
	{
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura 
	}

	saludar ()
	{
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

	saludar ()
	{
		console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	}
}

var karen = new persona ('Karen', 'Estrada',1.71)
var erika= new persona ('Erika', 'Luna',1.55)
var arturo= new desarrollador ('Arturo', 'Martinez',1.85)