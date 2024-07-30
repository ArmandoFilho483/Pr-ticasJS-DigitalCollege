let graus = 20;

function temperatura() {
    while(graus !== 105) {
        console.log(`Temperatura registrada em ${graus} graus Celsius`);
        graus = graus + 5;
    }
}

temperatura();
