//vai varrer todos os squares pra colocar o click

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handeClick);
    })
})

//
function handeClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){       

        setTimeout(() =>{
            alert('O jogo acabou - Player Vencedor ' + playerTime)
        }, 10)
        
    }

    updateSquares(position);
}

function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>'`
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })
}

function restartGame() {        
        
        window.location.reload()         

 }