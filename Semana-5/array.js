// Descrição

// Nesse exercício, iremos contar carneirinhos, mas sem dormir no processo.
// Implemente uma função chamada contaCarneirinhos que deve receber como parâmetro um array/lista.
// Essa lista conterá carneiros reais (representados pelo valor true) e outros valores como false, null e undefined.
// Sua função deve retornar o número de carneiros reais presentes no array/lista.


function contaCarneirinhos(array) {
  
    return array.filter(Boolean).length;
  }