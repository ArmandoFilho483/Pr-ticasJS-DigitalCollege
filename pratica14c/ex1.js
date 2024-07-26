
function verificarIdade (idade) {
    if (idade < 18) {
        console.log('Você não pode votar');
    } else {
        console.log('Você pode votar');
    }
}

verificarIdade(15);