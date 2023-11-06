let cronometro = document.getElementById('cronometro')
let segundos = 1
let minutos = 0
let horas = 0
let intervalo
let emExecucao = false

function formatarNumero(numero){
	if(numero<10){
		return numero.toString().padStart(2, "0")
	} else{
		return numero.toString()
	}
}

function iniciarCronometro(){
	if (!emExecucao){
		emExecucao = true
		intervalo = setInterval(function(){
			cronometro.innerHTML =`${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`
			segundos++
			if (segundos<10){
				segundos = `0${segundos}`
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
}
function pararCronometro(){
	clearInterval(intervalo)
	emExecucao = false
}
function resetarCronometro(){
	clearInterval(intervalo)
	emExecucao = false
	segundos = 1
	minutos = 0
	horas = 0
	cronometro.innerHTML = "00:00:00"
} 