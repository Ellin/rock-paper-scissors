const gameScreen = document.querySelector(".game-screen");
const gamePara = document.querySelector(".game-para");
const playerScoreSpan = document.querySelector(".player-score");
const cpuScoreSpan = document.querySelector(".cpu-score");
const playerHandSpan = document.querySelector('.player-hand');
const cpuHandSpan = document.querySelector('.cpu-hand');

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

// Get human choice from clicked button ID
function getHumanChoice(e) {
    let humanChoice = e.target.getAttribute('id').slice(7); // remove "player-" from id
    return humanChoice;
}

function updateEmojis(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            playerHandSpan.textContent = '🪨';
            break;
        case 'paper':
            playerHandSpan.textContent = '🗞️';
            break;
        case 'scissors':
            playerHandSpan.textContent = '✂️';
            break;
    }

    switch (computerChoice) {
        case 'rock':
            cpuHandSpan.textContent = '🪨';
            break;
        case 'paper':
            cpuHandSpan.textContent = '🗞️';
            break;
        case 'scissors':
            cpuHandSpan.textContent = '✂️';
            break;
    }
}

// Initialize variables
let humanScore = 0;
let computerScore = 0;

// Plays single round
function playRound (humanChoice, computerChoice) {
    updateEmojis(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        gamePara.textContent = 'DRAW';

    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        gamePara.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        gamePara.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    playerScoreSpan.textContent = humanScore;
    cpuScoreSpan.textContent = computerScore;
}


// Calls playRound 5 times
// Compares scores and declares a winner at the end
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`Game over. \nCONGRATS! You WIN.`);
    } else if (humanScore < computerScore) {
        console.log(`Game over. \nYou LOSE.`);
    } else {
        console.log(`Game over. It's a DRAW!`)
    }
}

const playerButtons = document.querySelectorAll(".player button");

// Play a round when the player chooses a hand
playerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(getHumanChoice(e), getComputerChoice());
    });
});