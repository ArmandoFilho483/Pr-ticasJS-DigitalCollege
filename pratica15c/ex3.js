let valor = 1;

function adivinha() {
    do {
        console.log(`Você digitou o número ${valor}`);
        valor++;
        if (valor === 7) {
            console.log('Parabéns! Você acertou. O número secreto é 7');
        }
    } while(valor !== 7);
}

adivinha();
