const gameController = (() => {
    const playerSpace = (() => {
        const playerGenerator = (a, b) => {
            let name = a;
            let symbol = b;
            return { name, symbol, }

        }
        playerOne = playerGenerator(document.getElementById("playerOne").value, "O");
        if (document.getElementById("playAi").checked) {
            playerTwo = playerGenerator("The Computer", "X")
        }
        else {
            playerTwo = playerGenerator(document.getElementById("playerTwo").value, "X");
        }
        if (playerOne.name === '' || playerTwo.name === '') {
            alert("You need to pick a name for both players, or just Player One if you're playing against AI.")
            return
        }
        namesInput = true;
        document.getElementById("playerOneArea").innerHTML = "Player One: " + playerOne.name + "<br> You are playing " + playerOne.symbol + "'s";
        document.getElementById("playerTwoArea").innerHTML = "Player Two: " + playerTwo.name + "<br> You are playing " + playerTwo.symbol + "'s";
        winnerText.innerHTML = "It's your go, " + playerOne.name + ".";
        return [playerOne, playerTwo]
    });
    let gameEnded = false;
    const gameBoard = (() => {
        board = ["", "", "", "", "", "", "", "", ""];
        return board;
    })();
    const setDisplay = (() => {
        const squares = board;
        for (i = 0; i <= squares.length - 1; i++) {
            let boardArea = document.getElementById("board");
            let square = document.createElement("div");
            square.classList.add("square", i);
            square.setAttribute("id", i)
            boardArea.appendChild(square);
            square.innerHTML = squares[i];
            square.addEventListener('click', (e) => { gameplay(e) })
            resetButton = document.getElementById("reset")
            resetButton.addEventListener('click', reset);
            document.getElementById("playerOne").value = '';
            document.getElementById("playerTwo").value = ''
        }

    })
    _turnsTaken = 0;

    const whoseTurn = (() => {
        if (_turnsTaken % 2 === 0) {
            _turnsTaken++
            return (1)
        }
        else {
            _turnsTaken++
            return (2)
        }
        

    }
    )
    const gameplay = ((e) => {

        if (e.target.innerHTML === "X" || e.target.innerHTML === "O" || gameEnded || namesInput === false) {
            return
        }
        x = whoseTurn()
        if (x === 1) {
            board[e.target.classList[1]] = "O"
            e.target.innerHTML = "O"
            currentPlayer = playerTwo;
            

        }
        else {
            board[e.target.classList[1]] = "X";
            e.target.innerHTML = "X";
            currentPlayer = playerOne; 

        }
        if (!document.getElementById("playAi").checked){
        winnerText.innerHTML = "It's your go, " + currentPlayer.name + ".";
    }
        checkWinner();
        if (gameEnded != true){
        
        if (document.getElementById("playAi").checked && gameEnded === false) {
            _turnsTaken++
            computerPlay()
            checkWinner();
        }}
        

    })
    const computerPlay = (() => {
        if (_turnsTaken > 9) {
            winnerText.innerHTML = "It's a tie!"
            return
        }
        a = Math.floor(Math.random()*9);
        if (board[a] !== '') {
            computerPlay();
        }
        board[a] = playerTwo.symbol;
        document.getElementById(a).innerHTML = playerTwo.symbol;
    })
    const checkWinner = (() => {
        winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (i = 0; i < 8; i++) {
            if (board[winConditions[i][0]] == board[winConditions[i][1]] && board[winConditions[i][0]] == board[winConditions[i][2]] && board[winConditions[i][0]] != "") {
                if (board[winConditions[i][0]] === playerOne.symbol) {
                    winner = playerOne.name;
                }
                else {
                    winner = playerTwo.name;
                }
                winnerText = document.getElementById("winnerText");
                winnerText.innerHTML = "The winner is " + winner + "!";
                gameEnded = true;
                return

            }

        }

    }
    )
    const initialise = (() => {
        setDisplay();
        namesInput = false;

    })();
    function reset() {
        board = ["", "", "", "", "", "", "", "", ""];
        boardArea = document.getElementById("board");
        function removeAllChildNodes(boardArea) {
            while (boardArea.firstChild) {
                boardArea.removeChild(boardArea.firstChild);
            }
        };
        removeAllChildNodes(boardArea);
        setDisplay();
        _turnsTaken = 0;
        winnerText.innerHTML = '';
        document.getElementById("playerOneArea").innerHTML = '';
        document.getElementById("playerTwoArea").innerHTML = '';
        playerOne
        gameEnded = false;
        namesInput = false;
        document.getElementById("playAi").checked = false;
    }
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        if (namesInput != true) {
            playerSpace();
        }
    });
})();





