//Lets access the dom id's
const cell = document.getElementById("cell");
const squares = document.getElementsByClassName("square");
const players = ['X', 'O'];
let currentPlayer = players[0];

// creating a new tag and printing a message 
const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign = 'center';
cell.after(endMessage);

// Defining the winning combinations
const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8]
]
// function to check winning status of the game
function checkWin(currentPlayer) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i]
        if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
            return true
        }
    }
    return false
}

// functiom to check tie in  the game
function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true
}

// Activating the restart button with a function
function restartBtn() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent = `X's turn!`
    currentPlayer = players[0]
}

// Using for loop to check generated functions in the game
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (squares[i].textContent !== '') {
            return
        }
        squares[i].textContent = currentPlayer
        if (checkWin(currentPlayer)) {
            endMessage.textContent = `Game over! ${currentPlayer} wins!`
            return
        }
        if (checkTie()) {
            endMessage.textContent = `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if (currentPlayer == players[0]) {
            endMessage.textContent = `X's turn!`
        } else {
            endMessage.textContent = `O's turn!`
        }
    })
}
