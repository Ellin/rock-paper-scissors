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
    let humanChoice = prompt("Make your choice! Rock, paper, or scissors?").toLocaleLowerCase();
    return humanChoice;
}


// Create function playRound (humanChoice, computerChoice): Play single round
// Compare humanChoice vs cpuHand
// if humanChoice  === cpuHand
// display message declaring a draw

// else if humanChoice === "rock" && computerChoice === "scissors"
//  OR humanChoice === "paper" && computerChoice === "rock",
//  OR humanChoice === "scissors" && computerChoice === "paper"
// then display message declaring that the human wins
// increment humanScore

// else display message declaring the computer wins
// increment computerScore


// initialize variable humanScore = 0
// initialize variable computerScore = 0;

// Create function playGame
// calls playRound 5 times
// Keeps track of scores and declares a winner at the end
