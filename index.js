var prompt = require('prompt-sync').prompt;

	var playAgain;
	do {

console.log('What is player one\'s name?');
var player = ['','']; 
player[0] = prompt();

console.log('What is player two\'s name?');
player[1] = prompt();

var currentPlayer = 1;

var board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']];

var playerSymbol = ['x', 'o'];

var turn = 1;
var victory = false;

	
		do {	
			currentPlayer++;

			if (currentPlayer > 1) {
				currentPlayer = 0;
			}
			var validInput = false;
			do {
				console.log('Where would you like to move, ' + player[currentPlayer] + '?');
				var pTurnAnswer = prompt();
				var pTurnMove = pTurnAnswer.split(' ');
				var x = parseInt(pTurnMove[0])-1;
				var y = parseInt(pTurnMove[1])-1;

				if (isNaN(y) || isNaN(x) || (2 !== pTurnMove.length)) {
					console.log('Invalid input: you must enter the x and y coordinates separated by spaces');
				} else if ((y < 0) || (y >2) || (x < 0) || (x >2)) {
					console.log('Invalid input: those coordinates are outside the playable area');
				} else if (' ' !== board[y][x]) {
					console.log('Invalid input: that space is already taken');
				} else {
					validInput = true;
				}
				
			}	while(!validInput); 

			board[y][x] = playerSymbol[currentPlayer];

			turn++;
			console.log('');
			console.log('Turn Number: ' + turn);
			console.log('');

			console.log('  1 2 3 ');
			console.log('~~~~~~~~~');
			console.log('1|'+ board[0][0] +'|'+ board[0][1] +'|'+ board[0][2] +'|');
			console.log('~~~~~~~~~');
			console.log('2|'+ board[1][0] +'|'+ board[1][1] +'|'+ board[1][2] +'|');
			console.log('~~~~~~~~~');
			console.log('3|'+ board[2][0] +'|'+ board[2][1] +'|'+ board[2][2] +'|');
			console.log('');

			

			if(board[0][0] === playerSymbol[currentPlayer] && board[1][0] === playerSymbol[currentPlayer] && board[2][0] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[0][1] === playerSymbol[currentPlayer] && board[1][1] === playerSymbol[currentPlayer] && board[1][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[0][2] === playerSymbol[currentPlayer] && board[1][2] === playerSymbol[currentPlayer] && board[2][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[0][0] === playerSymbol[currentPlayer] && board[0][1] === playerSymbol[currentPlayer] && board[0][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[1][0] === playerSymbol[currentPlayer] && board[1][1] === playerSymbol[currentPlayer] && board[1][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[2][0] === playerSymbol[currentPlayer] && board[2][1] === playerSymbol[currentPlayer] && board[2][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[0][0] === playerSymbol[currentPlayer] && board[1][1] === playerSymbol[currentPlayer] && board[2][2] === playerSymbol[currentPlayer]) {
					victory = true;
				} else if(board[2][0] === playerSymbol[currentPlayer] && board[1][1] === playerSymbol[currentPlayer] && board[0][2] === playerSymbol[currentPlayer]) {
					victory = true;
				}

				

		} while(victory === false && turn <= 9);

		if(victory === true) {
			console.log('Congratulations, ' + player[currentPlayer] + ', you are victorious!');
		} else if(turn >= 9) {
			console.log('Looks like this game is a stalemate!');
		}

		console.log('Would you like to play again? y/n')
		playAgain = prompt().toLowerCase();

	} while(playAgain === 'y');

	if(playAgain === 'n') {
		console.log('Thanks for playing!');
	}


