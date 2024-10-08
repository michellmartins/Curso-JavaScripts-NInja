   // Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

 function soma (a,b) {
  
    return  a + b
    

}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let res = soma(2,5) + 5

console.log(res)

// Qual o valor atualizado dessa variável?

console.log(res)

// Declare uma nova variável, sem valor.

let nova  

//Crie uma função que adicione um valor à variável criada acima, e retorne a string:
//    O valor da variável agora é VALOR.

function valor () {

    nova = 25

    return `O valor da variavel agora é ` +  nova 
}


//Onde VALOR é o novo valor da variável.

console.log(valor())


// Invoque a função criada acima.

console.log(valor())

// Qual o retorno da função? (Use comentários de bloco).

// VALOR

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos; 
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function TresElementos(a,b,c) {


  if ((a === undefined) || (b === undefined) || (c === undefined)) {

    return `Preencha todos os valores corretamente`
  
} 

   return  (a * b * c) + 2

}


console.log(TresElementos())




// Invoque a função criada acima, passando só dois números como argumento.

console.log(TresElementos(9,8))


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(TresElementos(2,3, 4 ))

// Qual o resultado da invocação acima? (Use comentários para mostrar  o valor retornado).

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

function TresArgumentos(a,b,c) {

    if( a !== undefined && b === undefined && c === undefined) {

        return a
    
    } else if ( a !== undefined && b !== undefined && c === undefined) {

        return a + b
    
    }else if (a !== undefined && b !== undefined && c !== undefined) {

        return (a + b ) / c

    }else if ( a === undefined && b === undefined && c === undefined) {

        return false

    }else {

        return null
    }

}

console.log(TresArgumentos())