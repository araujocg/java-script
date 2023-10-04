// Recebendo o valor total de um objeto usando .reduce()

const rockets = [
    {country:"Russia", launches:32},
    {country:"US", launches:23},
    {country:"China", launches:16},
    {country:"Europe", launches:7},
    {country:"Indía", launches:4},
    {country:"Japan", launches:3}
]

const totalLaunches = rockets.reduce((prevVal, elem) => {
    prevVal/*<-Valor anterior */ + elem.launches/*<-valor Atual*/, 0/*<-Valor inicial*/
})
console.log(totalLaunches)