document.addEventListener("DOMContentLoaded", function (event) {

    var board = document.querySelector('#tictactoe');
    var playerTurnIs = 1;

    for (var i = 0; i < 9; i++) {

        if (i % 3 !== 0) {

            createTicTacToeButton(board);

        } else {

            var br = document.createElement("br");

            board.appendChild(br);

            createTicTacToeButton(board);

        }

    }

    function createTicTacToeButton(boardName) {

        var button = document.createElement("button");

        button.className = 'tictactoebutton';

        button.innerHTML = '&nbsp;';

        button.addEventListener('click', function () {

            if (playerTurnIs === 1) {

                this.innerHTML = 'X';

                playerTurnIs = 2;

            } else {

                this.innerHTML = 'O';

                playerTurnIs = 1;
            }

        });

        boardName.appendChild(button);

    }
});