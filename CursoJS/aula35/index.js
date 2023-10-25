const listaDeAlunos = [
    {email:'alice.smith1234@email.com', teste:'Aprovado'},
    {email:'john.doe5678@email.com', teste:'Reprovado'},
    {email:'emily.jones99@email.com', teste:'Reprovado'},
    {email:'sam.wilson12@email.com', teste:'Aprovado'},
    {email:'lisa.martin789@email.com', teste:'Reprovado'},
    {email:'michael.brown45@email.com', teste:'Reprovado'},
    {email:'sarah.wilson23@email.com', teste:'Reprovado'},
    {email:'daniel.jackson678@email.com', teste:'Aprovado'},
    {email:'laura.anderson56@email.com', teste:'Reprovado'},
    {email:'kevin.white789@email.com', teste:'Aprovado'}
]
listaDeAlunos.forEach((aluno, posicao) => {
    if (aluno.teste === 'Aprovado'){
        console.log(`o Email de aprovação foi enviado com sucesso para ${aluno.email} a posição foi ${posicao+1} `)
    }
})