const jogadorAtual ='user';

const dadoAtual = 0;

function rolarDado(){
    dadoAtual = Math.floor(Math.random() * 6) + 1;
    return dadoAtual;
}

function trocaJogador(){
    if(jogadorAtual== user){
        jogadaPlayer();
        jogadorAtual = 'bot';
        return jogadorAtual
    } else {
        jogadaBot();
        jogadorAtual = 'user';
        return jogadorAtual
    }
}

function adicionaDadoNaColuna(){

}

function calculaSoma(){

}

function jogadaPlayer(){
    rolarDado();
    adicionaDadoNaColuna();
    testeFimDeJogo();
    trocaJogador();
}

function jogadaBot(){
    rolarDado();
    let coluna = Math.floor(Math.random()* 9) + 1;
}

export { rolarDado};