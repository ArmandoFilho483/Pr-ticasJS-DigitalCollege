let valor = 1;

function soma () {
    for(let i = 0; i < 100; i++) {
        let soma = i + valor;
        console.log(`A soma de ${i}+${valor}=${soma}`);
    }
}

soma();
