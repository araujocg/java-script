const fs = require('fs');

let data = null;

try {
  const conteudoArquivo = fs.readFileSync('listagem/json/professores.json', 'utf8');
  data = JSON.parse(conteudoArquivo);
  console.log('Módulo de dados globais carregado com sucesso!');
} catch (erro) {
  console.error('Erro ao carregar dados globais no módulo:', erro);
  data = {}; // Ou algum valor padrão
}

module.exports = data;