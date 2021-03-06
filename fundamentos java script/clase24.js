function heredaDe (prototipoHijo, prototipoPadre)
{
	var fn = function () {}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}

function persona (nombre,apellido,altura)
{
	this.nombre = nombre
	this.apellido =apellido
	this.altura= altura 
}

persona.prototype.saludar =  function ()
{
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}

persona.prototype.soyAlto = function ()
{
	return this.altura > 1.8
}

function desarrollador (nombre,apellido)
{
	this.nombre = nombre
	this.apellido = apellido
}

heredaDe (desarrollador,persona)

desarrollador.prototype.saludar = function ()
{
	console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var karen = new persona ('Karen', 'Estrada',1.71)
var erika= new persona ('Erika', 'Luna',1.55)
var arturo= new desarrollador ('Arturo', 'Martinez',1.85)