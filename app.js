const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras'];
let winner = null;
const stone = "piedra";
const paper = "papel";
const scissors = "tijeras";

const fileNames = {
	'piedra': 'images/rock.png',
	'papel': 'images/paper.png',
	'tijeras': 'images/scissors.png'
};

let positiveScore = 0;
let negativeScore = 0;

buttons.forEach(
	button => button.addEventListener('click', startGame)
);

function startGame(event) {
	const button = event.currentTarget;
	const playerChoice = button.dataset.choice;
	console.log('player:' + playerChoice);

	const computerChoice = getComputerChoice();
	console.log('computer:' + computerChoice);

	const winner = getWinner(playerChoice, computerChoice);
	console.log(`El ganador es: ${winner}`);


	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	let result;
	if (winner === 'player') {
		result = 'ganas';
		++positiveScore;
	} else if (winner === 'computer') {
		result = 'pierdes';
		++negativeScore;
	} else {	
		result = 'empatas';
	}

	pResult.innerHTML = `Tú ${result} escogiendo <strong>${playerChoice}</strong> en contra de <strong>${computerChoice}</strong>.`;
	pScore.innerHTML = `Has ganado ${positiveScore} veces. Has perdido ${negativeScore} veces`;
}

function getComputerChoice() {
	const i = parseInt(Math.random() * 3);
	return choices[i];
}

function getWinner(playerChoice, computerChoice) {

	/*if ( playerChoice === computerChoice ) {
		return null;
	}


	if (playerChoice === 'piedra') {
		if (computerChoice === 'papel') {
			return 'computer';
		} else { // tijeras
			return 'player';
		}
	} else if (playerChoice === 'papel') {
		if (computerChoice === 'piedra') {
			return 'player';
		} else { // tijeras
			return 'computer';
		}
	} else {
		if (computerChoice === 'papel') {
			return 'player';
		} else { // piedra
			return 'computer';
		}
	}*/

	if (isPlayerChoiseEqualToComputerChoise(playerChoice, computerChoice)) {
		return null;
	}

	playerPlaysStone(playerChoice, computerChoice);
	playerPlaysPaper(playerChoice, computerChoice);
	playerPlaysScissors(playerChoice, computerChoice);

	return winner;

}

function playerPlaysStone(playerChoice, computerChoice) {
	if(isPlayerSelectStone(playerChoice) && isPlayerSelectPaper(computerChoice)) {
		winner = 'computer';
	}

	if (isPlayerSelectStone(playerChoice) && isComputerSelectScissors(computerChoice)) {
		winner = 'player';
	}
}

function playerPlaysPaper(playerChoice, computerChoice) {
	if(isPlayerSelectPaper(playerChoice) && isPlayerSelectStone(computerChoice)) {
		winner = 'player';
	}

	if (isPlayerSelectPaper(playerChoice) && isComputerSelectScissors(computerChoice)) {
		winner = 'computer';
	}
}

function playerPlaysScissors(playerChoice, computerChoice) {
	if(isPlayerSelectScissors(playerChoice) && isComputerSelectPaper(computerChoice)) {
		winner = 'player';
	}

	if (isPlayerSelectScissors(playerChoice) && isComputerSelectStone(computerChoice)) {
		winner = 'computer';
	}
}


function isPlayerSelectStone(playerChoice) {
	return playerChoice === stone;
}

function isPlayerSelectPaper(playerChoice) {
	return playerChoice === paper;
}

function isPlayerSelectScissors(playerChoice) {
	return playerChoice === scissors;
}

function isComputerSelectStone(computerChoice) {
	return computerChoice === stone;
}

function isComputerSelectPaper(computerChoice) {
	return computerChoice === paper;
}	

function isComputerSelectScissors(computerChoice) {
	return computerChoice === scissors;
}

function isPlayerChoiseEqualToComputerChoise(playerChoice, computerChoice) {
	return playerChoice === computerChoice;
}