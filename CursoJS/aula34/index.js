const statusGato = ''

const isGatoFeliz = new Promise((resolve,reject) =>{
    switch (statusGato){
        case "Feliz":
            resolve({mensagem:"Feliz"})
            break
        case "Entediado":
            reject({mensagem:"Entediado"})
            break
        case "Triste":
            reject({mensagem:"Triste"})
            break
        default :
            reject({mensagem:"Indefinido"})
    }
})
isGatoFeliz.then((resultado) =>{
    console.log(resultado.mensagem)
}).catch((error) =>{
    console.log(error.mensagem)
})