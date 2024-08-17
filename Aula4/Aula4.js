/*Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = function (a) {

  //   if (a) { return true }  { return  false } 1º FORMA

  //   return a ? true : false // 2º FORMA

  return !!a // 3º FORMA
}



// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(''))
console.log(isTruthy(NaN))


console.log('***********************')
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy('Michell'))
console.log(isTruthy('1'))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(' '))
console.log(isTruthy(function() {}))
console.log(isTruthy(20 * 3 ))




/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {

    marca: 'Chevrolet',
    modelo: 'Celta',
    placa: 'bra001',
    ano: 2024,
    cor: 'Vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadesPessoas: 0

}

console.log(carro)

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
pass ado por parâmetro.
*/

carro.mudaCor = function(cor) {

    carro.cor = cor
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function () {

    return carro.cor
}

console.log(carro.obterCor())

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {

    return carro.modelo
}

console.log(carro.obterModelo())

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function () {

    return carro.marca
}

console.log(carro.obterMarca())

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaMOdelo = function () {

    return `Esse carro é da marca ${carro.obterMarca()} do modelo ${carro.obterModelo()}`
}

console.log(carro.obterMarcaMOdelo())

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.pessoa = function Number(numeroPessoas) {

    let totalPessoas = (carro.quantidadesPessoas + numeroPessoas)

    if (carro.quantidadesPessoas === carro.assentos && totalPessoas >= carro.assentos) {

        
        return `O carro ja está lotado`
    }
     
    if (totalPessoas > carro.assentos ) {

        let vagasPessoas = carro.assentos  - carro.quantidadesPessoas 
        let pluralOuSingular = vagasPessoas === 1 ? 'Pessoa' : 'Pessoas'

        return `Só cabem mais ${vagasPessoas} ${pluralOuSingular}`
        
    }
    
    carro.quantidadesPessoas += numeroPessoas

        return `Já temos ${carro.quantidadesPessoas} pessoas `

  } 
   console.log(carro.pessoa(8))

  

 
   


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor()) // Preto
 

// Mude a cor do carro para vermelho.

console.log(carro.mudaCor('Preto'))



// E agora, qual a cor do carro?

console.log(carro.obterCor())


// Mude a cor do carro para verde musgo.

carro.mudaCor('Verde Musgo') 


// E agora, qual a cor do carro?

console.log(carro.obterCor())


// Qual a marca e modelo do carro?

console.log(carro.obterMarcaMOdelo())



// Adicione 2 pessoas no carro.

console.log(carro.pessoa(2)) //'Já temos 2 pessoas '

// Adicione mais 4 pessoas no carro.

console.log(carro.pessoa(4)) // Só cabem mais 3 Pessoas


// Faça o carro encher.

console.log(carro.pessoa(3)) //Já temos 5 pessoas

// Tire 4 pessoas do carro.

console.log(carro.pessoa(-4)) //Já temos 1 pessoas 

// Adicione 10 pessoas no carro.

console.log(carro.pessoa(10))

// Quantas pessoas temos no carro?

console.log(carro.quantidadesPessoas) //1

