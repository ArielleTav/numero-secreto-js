/*parseInt() transforma numero com casas decimais em inteiro
/Math.random() geram numeros pseudo-aleatórios entre 0 e 1*/
alert("Bem vindo ao jogo do numero secreto");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//guarda informação
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao nS
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número 1 a ${numeroMaximo}`);

//condição
    if (chute == numeroSecreto) {
       break;
    } else {
        if ( chute < numeroSecreto) {
            alert (`O número secreto é maior que o chute [${chute}]`);
        } else {
            alert(`O número secreto é menor que o chute [${chute}]`);
        }
        tentativas++;
    } 
}
//tentativas maior que 1? sim? caso nâo ':' ...
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
 alert(`Você descobriu o número secreto ^-^ [${numeroSecreto}] com ${tentativas} ${palavraTentativa}`);
