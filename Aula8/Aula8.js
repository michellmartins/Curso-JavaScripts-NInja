let func = function jesus () {

    return " hi"
}

console.log(func.name ) 

function person () {

    var info = {
    nome: "Michell" ,
    lastName: "Martins"

}  
    return info
}

console.log(person().nome)
console.log(person().lastName)

//Programação Funcional - a programação funcional enfatiza a aplicação de funções, tratando-as como valores de primeira classe.
function adder (x) {

    return function (y) {

        return  x + y 

    }
}
console.log(adder(5) (5))
console.log('******************')
let car = { 
    color: 'yellow'

}
 
function getCarColor(mycar) {

    return mycar.color;
}

console.log(getCarColor(car))

function showOtherFunction (func) {

    return func()
}

console.log(showOtherFunction(function() {

        return ' Mudança de função '

}))
