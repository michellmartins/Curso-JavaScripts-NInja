/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let myVar = [ 1 , 'michell' , null , function() {} , '' ]



/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

// 1º FORMA
/*let myFunction = function(myVar) {

    return myVar

}
*/
// 2º FORMA
function myFunction (myVar) {

    return myVar
 }

 
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction (myVar[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisValores (arr, ind) {
    
    return arr[ind]

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let var2 = [ 2 , 'michell' , NaN , ' 5 ' , undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/


console.log(doisValores(var2,0))
console.log(doisValores(var2,1))
console.log(doisValores(var2,2))
console.log(doisValores(var2,3))
console.log(doisValores(var2,4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName)  {  

    let allBooks = { 

        'Segredos do Ninja Javascript': {

            quantidadePaginas: 488 ,
            autor: 'John Resig & Bear Bibeault',
            editora: 'Novatec',
        } ,

        'Introduçao ao HTML5': {

            quantidadePaginas: 220 ,
            autor: 'Bruce Lawson & Remy Sharp',
            editora: 'Alta Books '
        } ,

        'Smashing CSS': {

            quantidadePaginas: 283 ,
            autor: 'Erick A. Meyer',
            editora: 'Bookman'
        } ,
        }

   // if(!bookName) {

  //      return allBooks

  return !bookName ? allBooks : allBooks [bookName] // 2º forma de usar return (com ternarios " ? " e ":")

    }


 


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:

*/

console.log(`O livro ${`Segredos do Ninja Javascript`} tem ${book( 'Segredos do Ninja Javascript' ).quantidadePaginas} paginas!' `)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro ${`Segredos do Ninja Javascript`} é ${book( 'Segredos do Ninja Javascript' ).autor} `)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var bookName = 'Introduçao ao HTML5'
console.log(`O livro ${bookName} foi publicado pela editora ${book( bookName).editora} `)