async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=5')
    return response.json()
}
////////////////////////

/*

getPeople().then((data => {
    const result = data.results
    console.log(result)
    const genderFemale = people.filter( props => props.gender === "female")
    console.log(genderFemale)
}))

*/

////////////////////////

/*
getPeople().then((data => {
    const result = data.results
    const people = []
    for (let p of result ){
        people.push({"Nome" :`${ p.name.first} ${ p.name.last}` , "Sexo" :`${ p.gender}`, "Idade":`${ p.dob.age}`})
    }
    console.table(people)
    
}))
*/

//////////////////////////

getPeople().then((data => {
    const result = data.results.filter(p => p.dob.age >=30)
    const people = []
    for (let p of result ){
            people.push({"Nome" :`${ p.name.first} ${ p.name.last}` , "Sexo" :`${ p.gender}`, "Idade":`${ p.dob.age}`})
    }
    console.table(people)
    
}))
