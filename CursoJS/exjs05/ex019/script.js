let num = document.getElementById('num')
let tab = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
       return true 
    } else {
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add(){
    if (isNumero(num.value)  && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor invalido!')
    }
    num.value = ''
    num.focus()
}
function fin(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let total = valores.length
        let soma = 0
        let media = 0
        for (let pos in valores) {
            if (valores[pos]>maior){
                maior = valores[pos]
            }
            if (valores[pos]<menor){
                menor = valores[pos]
            }
            soma += Number(valores[pos])
            media = soma/total
            }
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        
    }
}