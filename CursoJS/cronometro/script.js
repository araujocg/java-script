let cronometro = document.getElementById('cronometro')
let segundos = 0
let minutos = 0
let horas = 0
function iniciarCronometro(){
	setInterval(function(){
		cronometro.innerHTML =`${horas} : ${minutos} : ${segundos}`
		segundos++
		if (segundos<10){
			segundos = [`0${segundos}`]
		}
		if (segundos>=60){
			segundos = 0
			minutos++
		}
		if(minutos>=60){
			minutos = 0
			horas++
		}
	},1000)
}