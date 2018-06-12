var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

  pickRock.addEventListener('click', function(){playerPick('rock') });
  pickPaper.addEventListener('click', function(){playerPick('paper') });
  pickScissors.addEventListener('click', function(){playerPick('scissors') });


  var gameState = 'notStarted';
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
.
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

  var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

  var playerPickElem = document.getElementById('js-playerPick'),
  	computerPickElem = document.getElementById('js-computerPick'),
  	playerResultElem = document.getElementById('js-playerResult'),
  	computerResultElem = document.getElementById('js-computerResult');


  function setGameElements(){
  	switch(gameState) {
  		case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display ='block';
      break;
		  case 'ended':
				newGameBtn.innerText = 'Play again';
		  case 'notStarted':
		  default:
  			newGameElem.style.display = 'block';
			  pickElem.style.display = 'none';
			  resultsElem.style.display ='none';
    }
}
setGameElements();

function newGame(){
	player.name = prompt("Please enter your name", "imie gracza");
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

	playerNameElem.innerHTML = player.name;
	setGamePoints();
	}
	playerPickElem.innerHTML = 'Player selection';
	computerPickElem.innerHTML = 'Computer selection';
	computerResultElem.innerHTML = 'Computer Score';
	playerResultElem.innerHTML = 'Player Score';

}

function playerPick(playerChoice) {

	var computerChoice  = getComputerPick();

	playerPickElem.innerHTML = playerChoice;
	computerPickElem.innerHTML = computerChoice;

	checkRoundWinner(playerChoice, computerChoice);
	checkGameEnd();

}

function getComputerPick() {
	var possiblePicks =['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}


function checkRoundWinner(playerPick, computerPick) {
 playerResultElem.innerHTML = computerResultElem.innerHTML = '';

 var winnerIs = 'player';

 	if(playerPick == computerPick) {

 	} else if (
 			  (computerPick == 'rock' && playerPick == 'scissors') ||
			  (computerPick == 'scissors' && playerPick == 'paper') ||
			  (computerPick == 'paper' && playerPick == "rock")){

  			computer.score++;
 			computerResultElem.innerHTML = "Win!";
 	}else {
	 		player.score++;
	 		playerResultElem.innerHTML = "Win!";
 	}

	setGamePoints();

}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
//tabela wynikow
function checkGameEnd(){
	if(computer.score == 10){
		alert("You lost! :( ");
		gameState = 'ended';
		setGameElements();


	} else if(player.score == 10) {
		alert("You won! :D ");
		gameState = 'ended';
		setGameElements();
	}


}
