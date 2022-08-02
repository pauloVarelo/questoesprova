let json = require('./dados.json');

const valores = json.map(i => i.valor);

function media() {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma / 30;
}

const max = Math.max(...valores);
const min = Math.min(...valores.filter(i => parseInt(i) !== 0));
const med = media();

const getMaior = json.find(i => i.valor == max);
const getMenor = json.find(i => i.valor == min);
const diasMes = json.filter( i => i.valor > med);
const dias = diasMes.map( i => i.dia);

console.log('Maior valor: ', getMaior);
console.log('Menor valor: ', getMenor);
console.log("Media igual a: ", med);
console.log('Dias do mês cujo valores são maiores que media: ', JSON.stringify(dias));