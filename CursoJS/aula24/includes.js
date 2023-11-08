// Verificando se a o numero "2" dentro de numeros
const numeros = [2,5,6,7,8]
console.log(numeros.includes(2))

// Verificando se a algum "Junior" dentro de nomes
const nomes = ["Junior", "Edmar", "Maria"]
console.log(nomes.includes("Junior")) 
/* 
includes é sensível a letras maiúsculas e minúsculas ou seja se eu tivesse colocado "Junior" com o j minúsculo ia ter retornado (false)
*/

// Verificando quem de people é do group "editor"
const people = [
    { id:11, name: "Adamastor", age:23, group:"editor" },
    { id:18, name: "Junior", age:28, group:"user" },
    { id:32, name: "Edmar", age:35, group:"editor" },
    { id:76, name: "Maria", age:55, group:"admin" }
]
const filteredUser = people.filter(props =>{
    return (
        props.group.includes("edi")
    )
})
console.log(filteredUser)