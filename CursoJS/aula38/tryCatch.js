/*
const main = () =>{
    try {
        codigo
    } catch (error) {
        console.log("deu erro :(")
    } finally {
        console.info('Esse valor sempre será mostrado')
    }
}
*/


const funcao1 = () =>{
    console.log("Sou a função 1")
    const valor = true
    try {
        if(valor){
            throw new Error('Deu erro na funcao1')
        }
    } catch (error) {
        throw error
    }
  }
  
  const funcao2 = () =>{
    console.log("Sou a função 2")
    asdf
  }
  
  const main = () =>{
    try {
        funcao1()
        funcao2()
    } catch (error) {
        console.error(error)
    }
    console.log('Passou por aqui')
  }
  main()