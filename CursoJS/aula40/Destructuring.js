const foo = ["um","dois","três"]

const [um,dois,tres] = foo
console.log(um) // um
console.log(dois) // dois
console.log(tres) // três

//

let a,b,c
[a,b,c] = [1,2,3,4]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3 

//

let d,e

[d=5, e=7] = [1]
console.log(d) // 1
console.log(e) // 7

//

let f = 1
let g = 3

[f, g] = [g, f]
console.log(f) // 3
console.log(g) // 1

//

const [h,...i] = [1,2,3]
console.log(h) // 1
console.log(i) // [2,3]

//

const j = {k:42, l:true}
const {k,l} = j;
console.log(k) // 42
console.log(l) // true

//

let m,n
({m,n} = {n:1,m:2})
// ({m,n} = {x:1,y:2}) Da erro 
console.log(m) // 2
console.log(n) // 1

//

const o = {p:42,q:true}
const {p:fo, q:bar} = o
console.log(fo,bar) // 42 true

//

const metadata = {
    title:"Scratchpad",
    translations: [
        {
            locale: "de",
            localization_tags: [],
            last_edit:"2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
    ],
    url:"/en-US/docs/Tools/Scratchpad"
}
const {title: englishTitle, translations: [{ title: localetitle}]} = metadata 
console.log(englishTitle) // Scratchpad
console.log(localetitle) // JavaScript-Umgebung

//

//exemplo do video ->
    function userId({id}){
        return id
    }
    
    function whois({displayName: apelido, fullName: {firstName:primeiroNome}}) {
        console.log(`${apelido} is ${primeiroNome}`)
    }
    
    var user = {
        id: 42,
        displayName: "Jdoe",
        fullName: {
        firstName: "John",
        lastName: "Doe"
        }
    }
    console.log(`userId: ${userId(user)}`) // userId: 42    
    whois(user) // Jdoe is John

// Oq eu fiz e tbm deu certo -> 
/* 

    function userId({ id }) {
        return id
    }

    function whois({ displayName, fullName: { firstName } }) {
        console.log(`${displayName} is ${firstName}`)
    }

    var user = {
        id: 42,
        displayName: "Jdoe",
        fullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
    console.log(`userId: ${userId(user)}`) // userId: 42  
    whois(user) // Jdoe is John

*/

//

let key = "z"
let {[key]: fooo} = {z:"bar"}
console.log(fooo) // bar
  


