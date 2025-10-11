const tela = document.getElementById('tela'); /* Capturando o elemento de ID igual a tela */
const teclado = document.getElementById('teclado'); /* Capturando o elemento de ID igual a teclado e seus respectivos filhos */

/* 
    Adicionando um método listener (ouvinte) que espera que algo aconteça no elemento que ele está observando para que
    assim chame a função associada, essa função geralmente é chamada de callback (função de retorno) ou event handler (manipulador de eventos).
    Nesse caso o evento que estamos esperando é o click (clique do mouse) e a função que será chamada quando o evento acontecer
    é uma função anônima (função sem nome ou arrow function) que recebe como parâmetro o evento (e) que aconteceu.
    Dentro dessa função pegamos o valor do botão clicado (e.target.value) e armazenamos na variável valorAtual.
    Depois pegamos o valor atual da tela (tela.value) e concatenamos com o valor do botão clicado (valorAtual) e atribuímos
    esse novo valor a tela (tela.value += valorAtual).
*/

teclado.addEventListener('click', (e) => {
    let valorAtual = e.target.value;
    // criamos a condicional para que apenas os botões com valor sejam considerados, assim evitamos erros ao clicar em espaços vazios.
    if (tela.value === 'Erro') {
        tela.value = ''; /* Limpa a tela se estiver mostrando 'Erro' */
    };
    switch (valorAtual) {
        case 'ce':
            tela.value = ''; /* Limpa toda a tela */
            break;
        case 'apagar':
            tela.value = tela.value.slice(0, -1); /* Remove o último caractere da tela */
            break;
        case '.':
            if (tela.value.includes('.')) /* Se existir um ponto na tela, não faz nada. */
                break;
            else if (tela.value === '') /* Se a tela estiver vazia, não faz nada. */
                break;
            else 
                tela.value += valorAtual; /* Caso contrário, adiciona um ponto. */
                break;
        case '0':
            if (tela.value === '0') /* Caso exista apenas um zero, não faz nada. */
                break;
            else 
                tela.value += valorAtual /* Caso não, adiciona um zero. */
                break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            tela.value += valorAtual; /* Adiciona o valor do botão (de 1 à 9) à tela */
            break;
        case '+':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            else tela.value += valorAtual; /* Adiciona o valor atual a tela */
            break;
        case '-':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            else tela.value += valorAtual /* Adiciona o valor atual a tela */
            break;
        case '*':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            else tela.value += valorAtual /* Adiciona o valor atual a tela */
            break;
        case '/':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            else tela.value += valorAtual /* Adiciona o valor atual a tela */
            break;
        case '%':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            else tela.value += valorAtual /* Adiciona o valor atual a tela */
            break;
        case 'x²':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Método pow da classe Math recebe como a argumento a base e a potência */
            else tela.value = Math.pow(tela.value, 2).toFixed(4) /* Fixa o resultdo em 4 casas decimais */
            break;
        case 'x³':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Método pow da classe Math recebe como a argumento a base e a potência */
            else tela.value = Math.pow(tela.value, 3).toFixed(4) /* Fixa o resultdo em 4 casas decimais */
            break;
        case '√':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Método sqrt da classe Math recebe como a argumento o valor da raiz quadrada */
            else tela.value = Math.sqrt(tela.value).toFixed(4) /* Fixa o resultdo em 4 casas decimais */
            break;
        case '∛':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Método pow da classe Math recebe como a argumento a base e a potência, nesse caso, a potencia de 1/3 para representar a raiz cúbica */
            else tela.value = Math.pow(tela.value, 1/3).toFixed(4) /* Fixa o resultdo em 4 casas decimais */
            break;
        case '!':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Chamando a função personalizada para calcular o fatorial do numero recebido */
            else tela.value = calcularFatorial(tela.value);
            break;
        case '=':
            if (tela.value === '') return; /* Retorna vazio se tela estiver vazia */
            /* Usando a função eval para realizar os cálculos básicos restantes (adição, subtração, multiplicação, divisão e resto) */
            else tela.value = eval(tela.value)
            break;
        default:
            return; /* Se o botão clicado não for reconhecido, não faz nada */
    }
});

/* function somar(...numero) {
    return numero.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

function subtrair(...numero) {
    return numero.reduce((acumulador, valorAtual) => acumulador - valorAtual, 0);
}

function multiplicar(...numero) {
    return numero.reduce((acumulador, valorAtual) => acumulador * valorAtual, 0);
}

function dividir(...numero) {
    return numero.reduce((acumulador, valorAtual) => acumulador / valorAtual, 1);
} */

function calcularFatorial(numero) {
    if (numero < 0) return 'Erro'; /* Não é possível calcular fatorial de número negativo */
    else if (numero === 0 || numero === 1) return 1; /* O fatorial de 0 e 1 é 1 */
    else if (numero === '') return '' /* Retorna vazio se estiver a tela estiver vazia */
    else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) /* Enquanto i for menor ou igual que numero, continue somando i */
            fatorial *= i; /* Multiplica fatorial pelo contador i */
        return fatorial; /* Retorna o valor do fatorial */
    }
}
