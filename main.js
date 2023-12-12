const tabuleiro = {
    'player': [[null,null,null], [null,null,null],[null,null,null]],
    'bot': [[null,null,null], [null,null,null],[null,null,null]]
};

function getTabuleiro(){
    return structuredClone(tabuleiro);
}

document.btnPlay.addEventListener('click', iniciaJogo());

//função que inicia o jogo
function iniciaJogo(){
    let tabuleiro = getTabuleiro();
    let jogadorAtual = 'user';
    let dadoValor = rolarDado();
}


//retorna numero aleatorio entre 1 e 6
function rolarDado(){
    dadoValor = Math.floor(Math.random() * 6) + 1;
    return dadoValor;
}

//função para trocar a vez do jogador para o bot e vice e versa
function trocaJogador(jogadorAtual){
    if(jogadorAtual === user){
        jogadorAtual = 'bot';
        return jogadorAtual
    } else {
        jogadorAtual = 'user';
        return jogadorAtual
    }
}

//função percorre o tabuleiro e adiciona o valor do dado na primeira posição vazia da coluna
function adicionaDadoNaColuna(coluna, dadoValor){
    if(jogadorAtual === 'user'){
        for(let i = 0; i < tabuleiro['player'][coluna].length; i++){
            if(tabuleiro['player'][coluna][i] === null){
                tabuleiro['player'][coluna][i] = dadoValor;
                return;
            }
        }
    } else {
        for(let i = 0; i < tabuleiro['bot'][coluna].length; i++){
            if(tabuleiro['bot'][coluna][i] === null){
                tabuleiro['bot'][coluna][i] = dadoValor;
                return;
            }
        }
    }
}
//função que verifica se o jogo terminou
function verificaJogoTerminou(){
    for(let coluna of tabuleiro['player']){
        for(let posicao of coluna){
            if(posicao === null){
                return false;
            }
        }
    }
    
    for(let coluna of tabuleiro['bot']){
        for(let posicao of coluna){
            if(posicao === null){
                return false;
            }
        }
    }
    return true;
    verificaVencedor();
}
//função que verifica o vencedor
function verificaVencedor(){
    let {pontosPlayer, pontosBot} = calculaPontos(tabuleiro['player'], tabuleiro['bot']);
    let vencedor;
    if(pontosPlayer > pontosBot){
        return vencedor = 'player';
    } else if(pontosBot > pontosPlayer){
        return vencedor = 'bot';
    } else {
        return vencedor = 'empate';
    }
}
//função que elimina dados iguais do tabuleiro do jogador adversario;
function eliminaDadosIguais(coluna, dadoValor){
    let adversario = jogadorAtual === 'user' ? 'bot' : 'user';
    for(let i = 0; i < tabuleiro[adversario][coluna].length; i++){
        if(tabuleiro[adversario][coluna][i] === dadoValor){
            tabuleiro[adversario][coluna][i] = null;
        }
    }
}

//função que calcula os pontos do jogador e do bot
function calculaPontuacaoColuna(tabuleiro){
    let pontuacao = {};

    for(let i = 0; i < tabuleiro.length; i++){
        let contagem = {};
        for(let dado of tabuleiro[i]){
            if(dado !== null){
                contagem[dado] = (contagem[dado] || 0) + 1;
            }
        }

        pontuacao[i] = 0;
        for(let dado in contagem){
            if(contagem[dado] >= 2){
                pontuacao[i] += dado * contagem[dado];
            }
        }
    }

    return pontuacao;
}


