// Eu sou novo na programação e estou tendo um pouco de problema para somar os elementos de dois arrays. 
// Você consegue me ajudar?
// A função arrayMaisArray não está funcionando da maneira esperada!
// Ela deveria retornar a soma de todos os elementos dos dois arrays passados como argumento.

function arrayMaisArray(arr1, arr2) {
   
    let soma = 0;
    
    for(let i = 0; i < arr1.length; i++){
      
      soma = soma + arr1[i];
    } 
    for(let i = 0; i < arr2.length; i++){
      
      soma = soma + arr2[i];
    } 
    
    return soma;
}