
function getComputerChoice() {

    const choice = Math.floor(Math.random() * 3);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Please choose: Rock,Paper,Scissors").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice. Please choose: Rock, Paper, or Scissors").toLowerCase();
    }

    console.log(humanChoice);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You win! Rock beats Scissors");
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You lose! Paper beats Rock");
            } else {
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("Game is draw");
            }
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You win! Scissors beats Paper");
            } else if (computerChoice === "rock") {
                computerScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You lose! Rock beats scissors");

            } else {
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("Game is draw");
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You win! Paper beats Rock");
            } else if (computerChoice === "scissors") {
                computerScore++;
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("You lose! Scissors beats paper");
            } else {
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                return console.log("Game is draw");
            }
    }
}


function playGame() {
    let round = 0;

    while (round < 5 && humanScore < 5 && computerScore < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        round++;
    }

    if (humanScore > computerScore) {
        console.log("You Win!");
    } else if (humanScore < computerScore) {
        console.log("You Lose!");
    } else if ( humanScore === computerScore){
        console.log("Game is draw");
    }

}

playGame();