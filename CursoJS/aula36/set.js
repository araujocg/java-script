let musicas = new Set(["musica1","musica boa","musica10"])

musicas.add('musica ruim')
musicas.add('musica1')
musicas.add('musica1')
musicas.add('musica10')

console.log(musicas)

musicas.clear()

musicas.add('musica do balaco baco')

console.log(musicas)