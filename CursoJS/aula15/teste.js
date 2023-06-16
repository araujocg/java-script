let val = [4,7,2,8,23]
/*
console.log(vaga[0])
console.log(vaga.length) // Mostra quantas vagas tem :)
vaga.sort() 
console.log(vaga[0])
*/
/*let val = [4,6,7,3,2]
for ( c=0 ; c<val.length ; c++){
    console.log(`O valor da posição ${c+1} é ${val[c]}`)
}
*/
for (let c in val){
    console.log(`O valor da posição ${c} é ${val[c]}`)
}
