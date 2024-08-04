// Declarar uma variável chamada `myvar`, sem valor.

let myvar

// Após declarada, atribua o valor 10 à variável `myvar`.

myvar = 10

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

let soma = 15 + 8
console.log(soma)

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.


soma++

console.log(soma)


// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3

console.log(soma)

// Qual é o valor da variável `soma` até aqui?

console.log(soma) //72
// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

let souninja = true

console.log(souninja)

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

let comida = ['arroz', 'feijão', 'ovo']

console.log(comida)

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

console.log(comida[1])


// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

res = soma == myvar
res2 = soma === myvar

console.log(res)
console.log(res2)


// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

resto = myvar <= soma
console.log(resto)

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao (x,y) {

    return x / y
}

console.log(divisao(9,3))



// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log(divisao(10,2))