const tabPlayer = [[null,null,null], [null,null,null],[null,null,null]];
const tabBot = [[null,null,null], [null,null,null],[null,null,null]];

const jogadorAtual ='user';

const dadoValor = 0;

//retorna numero aleatorio entre 1 e 6
function rolarDado(){
    dadoValor = Math.floor(Math.random() * 6) + 1;
    return dadoValor;
}
//função para trocar a vez do jogador para o bot
function trocaJogador(){
    if(jogadorAtual === user){
        jogadorAtual = 'bot';
        return jogadorAtual
    } else {
        jogadorAtual = 'user';
        return jogadorAtual
    }
}

function adicionaDadoNaColuna(coluna, dadoValor){
    
}

function calculaPontos(tabPlayer, tabBot){

}




