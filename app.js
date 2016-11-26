 var body = document.querySelector('body');
 var board = document.querySelector('#tictactoe');
 var playerTurnIs = 1;
 var playerTurnSpan = document.querySelector('#playerTurn');


 document.addEventListener("DOMContentLoaded", function (event) {

     paintTicTacToeBoard();

 });


 function paintTicTacToeBoard() {

     for (var i = 0; i < 9; i++) {

         if (i % 3 !== 0) {

             createTicTacToeButton(board);

         } else {

             var br = document.createElement("br");

             board.appendChild(br);

             createTicTacToeButton(board);
         }
     }

 }

 function createTicTacToeButton(boardName) {

     var button = document.createElement("button");

     button.className = 'tictactoebutton';

     button.innerHTML = '&nbsp;';

     boardName.appendChild(button);

     button.addEventListener('click', function () {

         if (playerTurnIs === 1 && this.innerHTML === '&nbsp;') {

             this.innerHTML = 'X';

             paintPlayerTurn(2);

         } else if (this.innerHTML === '&nbsp;') {

             this.innerHTML = 'O';

             paintPlayerTurn(1);
         }

     });

 }

 function paintPlayerTurn(player) {

     playerTurnIs = player;

     playerTurnSpan.innerHTML = player;

 }

 function resetTicTacToeBoard() {

     while (board.hasChildNodes()) {

         board.removeChild(board.lastChild);
     }

     paintTicTacToeBoard();

     paintPlayerTurn(1);

 }