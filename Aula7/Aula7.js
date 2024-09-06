// Operador modulo % 

/* var num = 0

while (num < 20) {
    
   num % 2 ===0 ? console.log(num) : ' '
   num++
        
    
    }
*/
// array length


// push  

// for

/*for ( num = 0 ; num < 20 ; num++) {

    if (num % 2 === 0 )
    
        console.log(num)
}
*/

// Crie um array com 5 items (tipos variados).

let array = [ 23, 'Ceará' , true , null, function(soma){}]




/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem() {

    array.push('Michell')
    return console.log(array)
}

console.log(addItem())
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

 array.push(novoArray = [ 15, 'Milena', false])
 
 console.log(addItem())

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do segundo array é ${array[6]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O Primeiro array tem ${array.length} itens`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log (`O segundo array tem ${novoArray.length}`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
//console.log( 'Números pares entre 10 e 20:' );

num = 10 

while ( num <= 20 ){

    if (num % 2 === 0) {
    console.log(num)   
    }
    num++
}
console.log('*********************************************************')
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10 

while ( num <= 20 ){

    if (num % 2 === 1) {
    console.log(num)   
    }
    num++
}
console.log('**********************************************************')

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
//console.log( 'Números pares entre 100 e 120:' );

for ( num = 100 ; num <= 120 ; num++) {

    console.log(num++)
}
console.log('*************************************************************')
//console.log( 'Números ímpares entre 111 e 125:' );

for (num = 111 ; num <= 125 ; num++) {

    console.log(num++)
}




