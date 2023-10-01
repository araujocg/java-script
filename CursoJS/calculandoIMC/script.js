function Calcular(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let res = document.getElementById('res')
    let imc = Number(peso /(altura ** 2))
    console.log(peso)
    if (imc<18.5){
        res.innerHTML = `Abaixo do peso ideal`
    } else if (){

    }

}