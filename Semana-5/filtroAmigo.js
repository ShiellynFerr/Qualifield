// Declare uma função chamada filtroAmigo que deverá retornar apenas a lista de quem realmente é seu amigo(a).
// Sua função deve receber como entrada um array contendo os nomes dos candidatos a amigo. 
// A condição para que alguém seja amigo é que o nome tenha exatamente 4 letras.

function filtroAmigo(amigos) {
  
    return amigos.filter((buscarAmigos) => buscarAmigos.length ===  4 );
}