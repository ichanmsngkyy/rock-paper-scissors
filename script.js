
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

let humanScore = 0;
let computerScore = 0;

const humanScoreSpan = document.querySelector('.humanScore');
const computerScoreSpan = document.querySelector('.computerScore');
const resultsDiv = document.querySelector('.results');

function updateScore() {
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

function checkWinner(){
    if(humanScore === 5){
        resultsDiv.textContent = "You Won the game!";
        disableButtons();
    } else if (computerScore === 5){
        resultsDiv.textContent = "Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.buttonList button');
    buttons.forEach(button => button.disabled = true);
}

function playRound(humanChoice, computerChoice) {

    let resultMessage = "";

   if(humanChoice === computerChoice){
    resultMessage = `It's a draw! Both chose ${humanChoice}.`
   } else if ( (humanChoice === "rock" && computerChoice === "scissors") || 
   (humanChoice === "scissors" && computerChoice === "paper") ||
   (humanChoice === "paper" && computerChoice === "rock")
   ) {
    humanScore++;
    resultMessage = `You win ${humanChoice} beats ${computerChoice}.`;
   } else {
    computerScore++;
    resultMessage = `You win ${computerChoice} beats ${humanChoice}.`;
   }

   resultsDiv.textContent = resultMessage;
   updateScore();
   checkWinner();
}


const buttonList = document.querySelector('.buttonList');

buttonList.addEventListener('click', (event) => {
    const humanChoice = event.target.className;
    const computerChoice = getComputerChoice;
    playRound(humanChoice, getComputerChoice);
});