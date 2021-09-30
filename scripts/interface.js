//vai varrer todos os squares pra colocar o click

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handeClick);
    })
})


function handeClick(event){
    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position]

    })
}