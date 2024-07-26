
function verificarTemperatura (grau) {
    switch (true) {
        case grau <= 0:
            return console.log('Sólido');
        case grau >= 1 && grau <= 99:
            return console.log('Líquido');
        default:
            return console.log('gasoso');
    }
}

verificarTemperatura(-100);