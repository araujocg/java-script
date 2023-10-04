let milisegundos = 0
let segundos = 0
let minutos = 0
const cronometro = setInterval(function(){
	console.log(`${segundos} : ${milisegundos} segundos passaram`)
	milisegundos++
	if (milisegundos>=60){
		milisegundos = 0
		segundos++
	}
	if (segundos>=30){
		clearTimeout(cronometro)
		console.log('Os 30 segundos se passaram')
	}
},1)