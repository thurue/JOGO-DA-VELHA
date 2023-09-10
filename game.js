let board = ['', '', '', '', '', '', '', '', '',]
let playertime = 1
let symbols = ['O', 'X']
let gameOver = false

let telaFINAL = document.getElementById("win")
let txtFinal = document.getElementById("txtfinal")
const conteudoAfter = document.createElement('span');

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playertime]

        gameOver = isWin()


        // verifica se player time é igual a zero, se for, iguala a um, se não, iguala zero
        if (!gameOver) {
            playertime = (playertime == 0) ? 1 : 0
        }
    }

    if (gameOver) {
        telaFINAL.classList.add("selected")
        conteudoAfter.textContent = symbols[playertime] + ' Venceu';
        txtFinal.appendChild(conteudoAfter);

    }
    return gameOver
}

function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        // console.log(seq)

        let pos1 = seq[0]
        // console.log(pos1)
        let pos2 = seq[1]
        let pos3 = seq[2]


        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true
        }
    }
    return false
}

// function restart() {
//     gameOver = false
//     board = ['', '', '', '', '', '', '', '', '',]
//     updateSquares()

//     telaFINAL.classList.remove("selected")


// }
