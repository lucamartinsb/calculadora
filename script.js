const tela = document.getElementById('tela'); /* Capturando o elemento de ID igual a tela */
const teclado = document.getElementById('teclado'); /* Capturando o elemento de ID igual a teclado e seus respectivos filhos */

/* 
    Adicionando um método listener (ouvinte) que espera que algo aconteça no elemento que ele está observando para que
    assim chame a função associada, essa função geralmente é chamada de callback (função de retorno) ou event handler (manipulador de eventos).
    Nesse caso o evento que estamos esperando é o click (clique do mouse) e a função que será chamada quando o evento acontecer
    é uma função anônima (função sem nome) que recebe como parâmetro o evento (e) que aconteceu.
    Dentro dessa função pegamos o valor do botão clicado (e.target.value) e armazenamos na variável valorAtual.
    Depois pegamos o valor atual da tela (tela.value) e concatenamos com o valor do botão clicado (valorAtual) e atribuímos
    esse novo valor a tela (tela.value += valorAtual).
*/
teclado.addEventListener('click', (e) => {
    let valorAtual = e.target.value;
    tela.value += valorAtual
})

