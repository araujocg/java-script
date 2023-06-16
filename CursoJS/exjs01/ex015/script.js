function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora>=6 && hora<12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#afa89e'
    } else if(hora>=12 && hora<20){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#c05310'
    } else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#191708'
    }
}