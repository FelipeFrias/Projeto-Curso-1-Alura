alert('Olá pessoal, vamos jogar o jogo do número secreto?');
let numeroMaximo = 5;
let numeroSecreto = parseInt(Math.random ()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute for diferente do n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break
    } else {
        if (numeroSecreto < chute){
            alert(`o número secreto é menor que ${chute}`);
        } else{
            if (numeroSecreto > chute){
                alert(`o número secreto é maior que ${chute} `);
            }
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1? 'Tentativas' : 'Tentativa';
alert(`parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);