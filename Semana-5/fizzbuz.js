//fizzBuzz é um exercício de programação muito utilizado em processos seletivos 
//para vagas de entrada no mundo de desenvolvimento. Está preparado(a)?

//Impemente a função fizzBuzz que recebe como argumento um número inteiro (de zero a infinito) e retornar um array,
//composto de números crescentes, no qual os números divisívies por 3 são substituídos por Fizz, os que são divisíveis
//por 5 são Buzz e os que são divisíveis por 3 e 5, FizzBuzz.



function fizzBuzz (n){
	var i = 1
	var x = []

	while (i <= n){

		if ( (i % 3 == 0) && (i % 5 == 0)){
		x.push("fizzBuzz");	

		} else if (i % 3 == 0){
			x.push("Fizz");
		} else if (i % 5 == 0){
			x.push("Buzz");
		} else {x.push(i)}	
	
	 i++;
	}

	return x;
}