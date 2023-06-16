function determinar(){
    var tempo = new Date()
    var ano = tempo.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value>ano){                      
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade>=0 && idade<12){
                img.setAttribute('src', 'homem-crianca.jpg')    
            } else if (idade<25){
                img.setAttribute('src', 'homem-adolecente.jpg')
            } else if (idade<50){
                img.setAttribute('src','homem-adulto.jpg')
            } else {
                img.setAttribute('src','homem-idoso.jpg')
            }
        } else {
            var genero = 'Mulher'
            if (idade>=0 && idade<12){
                img.setAttribute('src','mulher-crianca.jpg')
            } else if (idade<25){
                img.setAttribute('src','mulher-adolecente.jpg')
            } else if (idade<50){
                img.setAttribute('src','mulher-adulta.jpg')
            } else {
                img.setAttribute('src','mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}    