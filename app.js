 var body = document.querySelector('body');
 var board = document.querySelector('#tictactoe');
 var playerTurnIs = 1;
 var playerTurnSpan = document.querySelector('#playerTurn');
 var weHaveAWinner = false;

 document.addEventListener("DOMContentLoaded", function (event) {

     paintTicTacToeBoard();

 });


 function paintTicTacToeBoard() {

     for (var i = 0; i < 9; i++) {

         if (i % 3 !== 0) {

             createTicTacToeButton(i);

         } else {

             var br = document.createElement("br");

             board.appendChild(br);

             createTicTacToeButton(i);
         }
     }

 }

 function createTicTacToeButton(index) {

     var button = document.createElement("button");

     button.id = 'tttb_' + index.toString();

     button.className = 'tictactoebutton';

     button.innerHTML = '&nbsp;';

     board.appendChild(button);

     button.addEventListener('click', function () {

         if (!weHaveAWinner) {

             if (playerTurnIs === 1 && this.innerHTML === '&nbsp;') {

                 this.innerHTML = 'X';

                 paintPlayerTurn(2);

             } else if (this.innerHTML === '&nbsp;') {

                 this.innerHTML = 'O';

                 paintPlayerTurn(1);
             }
         }

         weHaveAWinner = calculateTicTacToeWinner();

         if (weHaveAWinner) {

             setTimeout(function () {

                 window.alert('We have a WINNER!');

             }, 0);

         }

     });

 }

 function paintPlayerTurn(player) {

     playerTurnIs = player;

     playerTurnSpan.innerHTML = player;

 }

 function resetTicTacToeBoard() {

     var response = window.confirm('ARE YOU SURE ABOUT THAT?')

     if (response) {

         while (board.hasChildNodes()) {

             board.removeChild(board.lastChild);
         }

         paintTicTacToeBoard();

         paintPlayerTurn(1);

     }
 }

 function calculateTicTacToeWinner() {

     var result = false;
     var buttonPrefix = '#tttb_';
     var wins = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
     ];

     wins.forEach(function (winRow) {

         var b1 = board.querySelector(buttonPrefix + winRow[0]).innerHTML === '&nbsp;' ?
             (buttonPrefix + winRow[0]) :
             board.querySelector(buttonPrefix + (winRow[0])).innerHTML;
         var b2 = board.querySelector(buttonPrefix + winRow[1]).innerHTML === '&nbsp;' ?
             (buttonPrefix + winRow[1]) :
             board.querySelector(buttonPrefix + (winRow[1])).innerHTML;
         var b3 = board.querySelector(buttonPrefix + winRow[2]).innerHTML === '&nbsp;' ?
             (buttonPrefix + winRow[2]) :
             board.querySelector(buttonPrefix + (winRow[2])).innerHTML;

         if ((b1 === b2) && (b2 === b3)) {

             result = true;

             board.querySelector(buttonPrefix + winRow[0]).style.color = 'red';
             board.querySelector(buttonPrefix + winRow[1]).style.color = 'red';
             board.querySelector(buttonPrefix + winRow[2]).style.color = 'red';

         }


     });

     return result;
 }