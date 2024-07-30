// arrow function

dataAtual = new Date();

const saudacao = () => {
    hora = dataAtual.getHours();

    switch (true) {
        case hora >= 5 && hora <= 12:
            return console.log('Bom dia!');
        case hora >= 13 && hora <= 18:
            return console.log('Boa tarde!');
        default: 
            return console.log('Boa noite!');
    }
    
    }

saudacao();
