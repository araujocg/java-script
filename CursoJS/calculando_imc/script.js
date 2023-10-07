function Calcular(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let main = document.getElementById('main')
    let res = document.getElementById('res')
    let imc = (peso /(altura ** 2))
    let mensagens = {
        'Abaixo do peso': (imc<18.5),
        'Peso Normal': (imc>=18.5 && imc<24.9),
        'Sobrepeso': (imc>=25 && imc<29.9),
        'Obesidade grau I':(imc>=30 && imc<34.9),
        'Obesidade grau II':(imc>=35 && imc<39.9),
        'Obesidade grau III':(imc>=40)
    }
    let mensagem = Object.keys(mensagens).find(key => mensagens[key])
    res.innerHTML = mensagem || 'Valor de IMC não reconhecido'
    res.style.display = 'flex'
    main.style.height = '90%'
}