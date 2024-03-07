function pertenceSequenciaFibonacci(numero) {
    // Inicializa os primeiros dois números da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Verifica se o número fornecido é 0 ou 1
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Gera a sequência de Fibonacci até que o próximo número seja maior que o número fornecido
    while (a + b <= numero) {
        let temp = a + b;
        a = b;
        b = temp;

        // Se o número fornecido estiver na sequência, retorna true
        if (b === numero) {
            return true;
        }
    }

    // Se o número não estiver na sequência, retorna false
    return false;
}

// Número a ser verificado
const numeroVerificar = 21;

// Verifica se o número pertence à sequência de Fibonacci
if (pertenceSequenciaFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}
