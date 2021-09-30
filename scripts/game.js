let board = ['','','','','','','','','',];
let playerTime = 0;
let symbols = ['o','x'];


// handlemove vai pegar a posição que jogador passou e alocar no board
function handleMove(position){
    board[position] = symbols[playerTime];

    if(playerTime == 0){
        playerTime = 1;
    }else{
        playerTime = 0;
    }
}