// Escreva uma função chamada abrevNome que:

// - Recebe o nome de uma pessoa (duas ou mais palavras separadas por espaço)
// - Retorna as iniciais do nome recebido, em maiúsculo, com um "." separando-as

function abrevNome(nome) {
  
    return  nome.split(' ').map((primeiraLetra) => primeiraLetra[0]).join('.').toUpperCase('');
      
}
    