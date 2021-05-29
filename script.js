let a = prompt ('Insira primeiro numero');
let b = prompt ('Insira segundo numero');
let c = prompt ('Insira terceiro numero');
let d = prompt ('Insira quarto numero');

function soma(a,b,c, d){
    return a + b + c + d;
}
 const x = soma(parseInt(a), parseInt(b), parseInt(c), parseInt(d))

let media = x / 4
alert(`Media: ${media}\nSoma Total: ${x}`)