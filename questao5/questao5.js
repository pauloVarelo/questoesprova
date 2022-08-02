function reverter(palavra) {
    const palavraVetor = palavra.split('');

    let reverse = '';
    for (let i = palavraVetor.length -1; i >= 0; i--) {
      reverse =  reverse.concat(palavraVetor[i]);
    }
    return reverse;
}
const reverse = reverter('PARALELEPIPEDO'); //Digite aqui a Palavra Desejada

console.log(reverse);