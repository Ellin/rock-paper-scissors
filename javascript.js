const gameScreen = document.querySelector(".game-messages");
const gamePara = document.querySelector(".game-para");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const playerHandSpan = document.querySelector('.player-hand');
const computerHandSpan = document.querySelector('.computer-hand');
const playerRockButton = document.querySelector('#player-rock');
const playerPaperButton = document.querySelector('#player-paper');
const playerScissorsButton = document.querySelector('#player-scissors');

// Randomly generate the computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // Generate random number from 0-2

    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    }

    return computerChoice;
}

// Get player choice from clicked button ID
function getPlayerChoice(e) {
    let playerChoice = e.target.getAttribute('id').slice(7); // remove "player-" from id
    return playerChoice;
}

function removeButtonHighlights() {
    if (playerRockButton.classList.contains('highlight')) {
        playerRockButton.classList.remove('highlight');
    } else if (playerPaperButton.classList.contains('highlight')) {
        playerPaperButton.classList.remove('highlight');
    } else if (playerScissorsButton.classList.remove('highlight')) {
        playerScissorsButton.classList.remove('highlight');
    }
}

function updateButtons(playerChoice, computerChoice) {

    removeButtonHighlights();

    switch (playerChoice) {
        case 'rock':
            playerRockButton.classList.add('highlight');
            break;
        case 'paper':
            playerPaperButton.classList.add('highlight');
            break;
        case 'scissors':
            playerScissorsButton.classList.add('highlight');
            break;
    }

    switch (computerChoice) {
        case 'rock':
            computerHandSpan.textContent = '🪨';
            break;
        case 'paper':
            computerHandSpan.textContent = '🗞️';
            break;
        case 'scissors':
            computerHandSpan.textContent = '✂️';
            break;
    }
}

// Initialize variables
let playerScore = 0;
let computerScore = 0;

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Plays single round
function playRound (playerChoice, computerChoice) {
    updateButtons(playerChoice, computerChoice);

    if (playerChoice === computerChoice) {
        gamePara.textContent = `DRAW. You both played ${playerChoice}.`;

    } else if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        gamePara.textContent = `You win this round. ${capitalizeString(playerChoice)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        gamePara.textContent = `You lose this round. ${capitalizeString(computerChoice)} beats ${playerChoice}.`;
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    checkScore();
}

// Checks if the player or computer has won (i.e. reached a score of 5) and ends game
function checkScore() {
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    announceWinner();
    showPlayAgainButton();
    disablePlayerButtons();
}

function announceWinner() {
    const message = document.createElement("p");
    message.textContent = `Game over. You ${playerScore == 5? 'WIN!' : 'LOSE!'}`;
    message.id = "game-over";
    gameScreen.append(message);
}

function showPlayAgainButton() {
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play again";
    playAgainButton.id = "play-again";
    playAgainButton.addEventListener("click", (e) => {
        restartGame();
    });
    gameScreen.append(playAgainButton);
}

function restartGame() {
    gamePara.textContent = "Choose a weapon to start the game!";
    playerScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    playerHandSpan.textContent = "";
    computerHandSpan.textContent = "🤖";
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#play-again").remove();
    document.querySelector("#game-over").remove();
    enablePlayerButtons();
    removeButtonHighlights();
}

function disablePlayerButtons() {
    playerButtons.forEach(button => button.disabled = true);
}

function enablePlayerButtons() {
    playerButtons.forEach(button => button.disabled = false);
}

const playerButtons = document.querySelectorAll(".player button");

// Play a round when the player chooses a hand
playerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(getPlayerChoice(e), getComputerChoice());
    });
});