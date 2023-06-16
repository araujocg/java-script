function calcular(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('stab')
    var n = Number(numero.value)
    tab.innerHTML = ''
    if (numero.value.lenght == 0){
        window.alert('[ERRR] Por favor, digite um número!')
    } else {
    for (c=1;c<=10;c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c} `
        //item.value = `tab${c}`   Para o JS n faz tanto sentido mas para outras linguagens SIM!
        tab.appendChild(item)
    }
    }
}