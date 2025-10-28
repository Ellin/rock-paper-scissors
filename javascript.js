// Create function getComputerChoice(): Get computer choice
// Generate random number from 0-2
// Assign computerChoice: 0 = "rock", 1 = "paper", 2 = "scissors"
// Return computerChoice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

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

// Create function getHumanChoice: Get human choice
// Prompt for input
// Standardize input to lower case ("Rock"-> "rock")
// Return humanChoice

function getHumanChoice() {
    let humanChoice = prompt("Make your choice! Rock, paper, or scissors?").toLowerCase();
    return humanChoice;
}

// initialize variable humanScore = 0
let humanScore = 0;

// initialize variable computerScore = 0;
let computerScore = 0;

// Create function playRound (humanChoice, computerChoice): Play single round
// Compare humanChoice vs computerChoice
// IF humanChoice  === computerChoice
//      THEN display message declaring a draw
// ELSE IF humanChoice === "rock" && computerChoice === "scissors"
//  OR humanChoice === "paper" && computerChoice === "rock",
//  OR humanChoice === "scissors" && computerChoice === "paper"
//      THEN display message declaring that the human wins
//      increment humanScore
// ELSE display message declaring the computer wins
//       increment computerScore

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You: ${humanChoice} \nComputer: ${computerChoice} \
            \nDRAW! \
            \n\nSCORE: ${humanScore} - ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You: ${humanChoice} \nComputer: ${computerChoice} \
            \nYou win! ${humanChoice} beats ${computerChoice}. \
            \n\nSCORE: ${humanScore} - ${computerScore}`);
        
    } else {
        computerScore++;
        console.log(`You: ${humanChoice} \nComputer: ${computerChoice} \
            \nYou lose! ${computerChoice} beats ${humanChoice}. \
            \n\nSCORE: ${humanScore} - ${computerScore}`);   
    }
}

// Create function playGame()
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

playGame();