let pi = 3.14;

function calcular (raio) {
    perimetro = (2 * pi) * raio;
    area = pi * (raio * raio);
    diametro = raio * raio;
};

calcular(18);

console.log(`O valor do perímetro é ${perimetro}`);
console.log(`O valor da área é ${area}`);
console.log(`O valor do diâmetro é ${diametro}`);

