let diasDaSemana = [
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
    'domingo'
];

function verificarDias (dia) {
    if (dia >= 1 && dia <= 7) {
        switch(true) {
            case dia >= 6:
                return console.log(`Você digitou o nº ${dia}, referente a ${diasDaSemana[dia-1]}. ${'Final de semana'}.`);
            default:
                return console.log(`Você digitou o nº ${dia}, referente a ${diasDaSemana[dia-1]}. ${'Dia útil'}.`);
        }
    } else {
        console.log('Dia inválido, digite um valor entre 1 e 7');
    }
};

verificarDias(7);