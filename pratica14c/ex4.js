
function verificarNota (nota) {
    switch (true) {
        case nota >= 90 && nota <= 100:
            return console.log('Sua nota é A');
        case nota >= 80 && nota < 90:
            return console.log('Sua nota é B');
        case nota >= 70 && nota < 80:
            return console.log('Sua nota é C');
        case nota >= 60 && nota < 70:
            return console.log('Sua nota é D');
        case nota >= 1 && nota < 60:
            return console.log('Sua nota é F');
        default:
            return console.log('Digite apenas valores entre 1 e 100.');
        
    }
};

verificarNota(79);