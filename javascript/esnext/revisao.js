{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// template 
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'coder'

const [x , y ] = [1,2,3]
console.log(x,y)

const { idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(idade, nome)
