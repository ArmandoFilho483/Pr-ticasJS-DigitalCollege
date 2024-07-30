// function expression

// Fahrenheit = (Celsious * 9/5) +32

const celsiusParaFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 1.8)+32;
    console.log(`A conversão de ${celsius} graus celsius para fahrenheit é ${fahrenheit}`);
}

celsiusParaFahrenheit(15);
