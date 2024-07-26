const mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function digito(num) {
    if (num >=1 && num <=12) {
        console.log(`O número digitado foi ${num} e o mês correspondente é ${mes[num - 1]}`);
    } else {
        console.log('Número inválido');
    }
};

digito(1);
