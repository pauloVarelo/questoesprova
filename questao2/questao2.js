function fibonacci(x){
let n1 = 0, n2 = 1, result = 0;
for (let i = 1; i <= x; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result
    if (result >= x) {
        return result;
    }
}
}
function calcularFibonacci(){
let x = document.getElementById('valor').value;
let numero = fibonacci(x);

if (x == numero) {
    document.getElementById('resultado').innerHTML = `o valor ${x} pertence a sequencia`;    
} else {
    document.getElementById('resultado').innerHTML = `o valor não ${x} pertence a sequencia`;
}
}
