let valor = 2;

function multiplo() {
    while (valor % 10 !== 0) {
        console.log(`O valor que você inseriu foi ${valor}`);
        valor++;
    }
}
multiplo();
