var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora<12 && hora>4){
    console.log('Bom dia!')
} else if(hora<20 && hora>=12){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}