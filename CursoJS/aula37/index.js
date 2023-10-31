/*
console.log('Antes do setTimeout')
setTimeout(function(){ // 1 vez
    console.log('testando...')
}, 3000)
console.log('Depois do setTimeout')

//

setInterval(function(){ // loop
    console.log('testando')
},3000)

*/

var x = 0

let myTimer = setTimeout(function(){
    console.log('Timeout rodou')
},1500)

x = 5

if (x>0){
    clearTimeout(myTimer)
    console.log('Timeout não rodou')
}

//

let myTimerinteval = setInterval(function(){
    console.log('rodando...')
}, 500)

setTimeout(function(){
    clearInterval(myTimerinteval)
    console.log('Parou!!')
}, 1500)