const tabuleiro = document.getElementById( 'tabuleiro' );

const posicoesIniciais = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

let selecionada = null;

for ( let linha = 0; linha < 8; linha++ ) {

    for ( let coluna = 0; coluna < 8; coluna++ ) {

        const casa = document.createElement( 'div' );
        casa.classList.add( 'casa' );

        const cor = ( linha + coluna ) % 2 === 0 ? 'branca' : 'preta';
        casa.classList.add( cor );

        const peca = posicoesIniciais[linha][coluna];
        if ( peca ) casa.textContent = peca;

        casa.dataset.linha = linha;
        casa.dataset.coluna = coluna;

        casa.addEventListener( 'click', () => {

            if ( selecionada ) {

                casa.textContent = selecionada.textContent;
                selecionada.textContent = '';
                selecionada.classList.remove( 'selecionada' );
                selecionada = null;
            } else if ( casa.textContent !== '' ) {

                selecionada = casa;
                casa.classList.add( 'selecionada' );
            }
        } );

        tabuleiro.appendChild( casa );
    }
}
