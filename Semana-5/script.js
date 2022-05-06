// Acumulador
// Descrição
// Escreva uma função chamada acumular que recebe num como parâmetro e soma todos os números positivos de 1 até num.
// A função deve retornar o resultado desta soma.

// Obs: O parâmetro num sempre será um número inteiro positivo!

// Exemplos
// Entrada: 2
// # 1 + 2
// Saída: 3 

// Entrada: 8
// # 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// Saída: 36 


function acumular (num) {
    //Insira seu código aqui!
    
    let i = 1;
    let soma = 0;
    
    while(i <= num) {
      
      soma = soma + i;
      i++
  }
    return soma;
  }