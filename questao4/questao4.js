let json = require('./questao4.json');

const valorEstado = json.map(i => i);
const valores = json.map(i => i.valor);

function total(){
    let soma = 0;
    for (let i = 0; i < valores.length; i++){
        soma += valores[i];
    }
    return soma;
}


function percentual(){
    for (let i = 0; i < valorEstado.length; i++){
        let valorTotal = total();
        let calculo = valorEstado[i].valor * 100;
        let porcentagem = parseInt(calculo / valorTotal);
        console.log(`Estado: ${valorEstado[i].estado} Porcentagem: ${porcentagem}%`);
    } 
}

console.log(valorEstado);
console.log(total());
percentual();