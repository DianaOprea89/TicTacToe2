var playerX = "X";
var player0 = "0";
var currPlayer = playerX;
var gameOver = false;
var board;
var rows = 3;
var collumns = 3;


window.onload = function () {
    setGame();


}

function setGame() {
    board = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < collumns; c++) {
            row.push('');
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);

    }
    console.log(board);

    //console.log(board);
}

function setPiece() {
    if (gameOver) {
        return;
    }
    // update interface / dom
    let tile = this;
    if (tile.innerText !== '') {
        alert("That space is already occupied.");
        return;
    }

    let coords = this.id.split("-");
    //console.log(coords);
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // update array
    board[r][c] = currPlayer;

    checkWinner();

    if (currPlayer == playerX) {
        tile.classList.add("x-piece");
        tile.innerText = "X";
        currPlayer = player0;
    } else {
        tile.classList.add("0-piece");
        tile.innerText = "0";
        currPlayer = playerX;
    }
    let currentPlayerStatus = document.getElementById("current-player-status")
    currentPlayerStatus.innerText = (`The current player is :  ${currPlayer}`);



}

function checkWinner() {


// horizontally
    for (let r = 0; r < rows; r++) {

        if (board[r][0] != '') {
            if (board[r][0] == board[r][1] && board[r][1] == board[r][2]) {
                setWinner();
                return;
            }
        }


    }


    //vertically
    for (let c = 0; c < collumns; c++) {
        if (board[0][c] != '') {
            if (board[0][c] == board[1][c] && board[1][c] == board[2][c]) {
                setWinner();
                return;
            }
        }
    }

    if (board[0][0] != '') {
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            setWinner();
            return;

        }
    }
    if (board[0][2] != '') {
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            setWinner();
            return;

        }
    }

    if (board[0][0] != '' && board[0][1] != '' && board [0][2] != '' && board[0][2] != '' && board[1][0] != '' && board[1][1] != '' && board[1][2] != '' && board[2][0] != '' && board[2][2] != '' && board[2][1] != '') {
        winner.innerText = "There is no winner ";
        const newGame =setTimeout(NewGame,2000);
        return;


    }

}

function setWinner() {
    let winner = document.getElementById("winner");
    if (currPlayer === playerX) {
        winner.innerText = "The winner is : X !";
    } else {
        winner.innerText = "The winner is : 0 !";
    }
    gameOver = true;

        const newGame =setTimeout(NewGame,2000);






}

function NewGame() {

    // create alert with confirm to ask if want to start new game?

    if (confirm('Do you want to start a new Game ?')) {

        // stearga contentul din toate div-urile, sa stearga mesajee, a resetez boardul de gol
        board = [];
        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < collumns; c++) {
                row.push('');
            }
            board.push(row);
        }
         console.log(board);

        let tiles = document.getElementsByClassName("tile");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].textContent = '';
            tiles[i].classList.remove("x-piece");
            tiles[i].classList.remove("0-piece");
            currPlayer = playerX
        }



        let winner = document.getElementById("winner");
        winner.textContent = '';
        let currentPlayerStatus = document.getElementById("current-player-status")
        currentPlayerStatus.textContent = '';
        gameOver=false;
    } else {
        alert("The game is over ");
    }
}
//
//



