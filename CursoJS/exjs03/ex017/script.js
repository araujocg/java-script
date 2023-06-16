function Contar(){
    var res = document.getElementById('res')
    var nini = document.getElementById('nini')
    var nfim = document.getElementById('nfim')
    var npas = document.getElementById('npas')
    var inicio = Number(nini.value)
    var fim = Number(nfim.value)
    var passo = Number(npas.value)
    if (passo == 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        passo = 1
    }
    if (inicio<fim){
        //Contagem regressiva
        res.innerHTML = 'Contando: '
        for (var c = inicio;c<=fim;c +=passo){
            res.innerHTML += ` ${c}\u{27A1}`
        }
        res.innerHTML += '\u{2714}'
    } else {
        //Contagem crescente
        res.innerHTML = 'Contando:'
        for (var c = inicio;c>=fim;c -=passo){
            res.innerHTML += ` ${c}\u{27A1}`
        }
        res.innerHTML += '\u{2714}'    
    }
    
}