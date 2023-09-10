
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square, i) => {
        square.addEventListener('click', handleClick)
        console.log(square, i)
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id

    handleMove(position);
    updateSquares();
}

function updateSquares() {

    squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = '<div class=' + symbol + '></div>';
            // console.log(square)
        }

    })
}

function restart() {
    board = ['', '', '', '', '', '', '', '', '',]
    gameOver = false

    telaFINAL.classList.remove("selected")

   squares.forEach((square) => {
        while (square.firstChild) {
            square.removeChild(square.firstChild);
        }
    })
}


